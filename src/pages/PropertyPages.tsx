import { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ArrowRight, MapPin, Building2, Store, ShoppingCart, Briefcase,
  Layers, Warehouse, Search, Filter, Loader2, AlertCircle, Check,
  Phone, Calendar, Globe2, FileText, ChevronRight, ChevronLeft,
  Landmark, ShieldCheck, BarChart3, Info, ArrowUpRight, X,
} from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader } from '@/components/ui';
import {
  fetchAllProperties, fetchPropertyBySlug, fetchRelatedProperties,
  isSanityConfigured, type SanityProperty,
} from '@/lib/sanity';
import {
  ALL_SUBTYPES, COMMERCIAL_SUBTYPES,
  formatKES, type PropertyListing,
} from '@/lib/data';

/* ============================================================================
   SECTION 0 — COMMERCIAL-ONLY MANDATE CONFIGURATION
   ========================================================================== */

/**
 * lettings.murivest.com — Commercial lettings only. Global mandate markets:
 * United Kingdom, United Arab Emirates, Kenya, South Africa, United States.
 *
 * HARD RULE: no residential property, no "apartment to let", no "house to
 * let" may render, be counted, be linked, or be described anywhere in this
 * file. The guard below is applied at the data-conversion boundary so the
 * commercial-only rule cannot be bypassed by a rendering branch.
 */

/* --- Mandate markets -------------------------------------------------------
   Detection is token-matching against the existing free-text `location`
   field. No Sanity schema change. A property whose location matches no
   market still renders; it is simply labelled by its raw location string.
--------------------------------------------------------------------------- */

interface MandateMarket {
  code: string;
  label: string;
  shortLabel: string;
  blurb: string; // Defensible, generic market characterisation (no invented facts)
}

const MANDATE_MARKETS: MandateMarket[] = [
  {
    code: 'GB',
    label: 'United Kingdom',
    shortLabel: 'UK',
    blurb:
      'A global financial and professional-services centre, with London among the world’s most liquid commercial property markets.',
  },
  {
    code: 'AE',
    label: 'United Arab Emirates',
    shortLabel: 'UAE',
    blurb:
      'A major international trade, logistics and business hub, with Dubai and Abu Dhabi serving as regional headquarters locations.',
  },
  {
    code: 'KE',
    label: 'Kenya',
    shortLabel: 'Kenya',
    blurb:
      'East Africa’s principal commercial and diplomatic centre, with Nairobi hosting regional headquarters of multinationals, NGOs and institutions.',
  },
  {
    code: 'ZA',
    label: 'South Africa',
    shortLabel: 'South Africa',
    blurb:
      'Africa’s most established commercial property market, with Johannesburg and Cape Town as primary corporate locations.',
  },
  {
    code: 'US',
    label: 'United States',
    shortLabel: 'US',
    blurb:
      'The world’s largest commercial property market, spanning premier office, retail and industrial locations across major metropolitan areas.',
  },
];

/** Detection tokens per market. Matched against a lowercased location string. */
const MARKET_MATCHERS: Record<string, string[]> = {
  GB: [
    'united kingdom', ' uk', ' uk,', ', uk', 'london', 'manchester',
    'birmingham', 'edinburgh', 'england', 'scotland', 'leeds', 'bristol',
    'glasgow', 'liverpool', 'reading', 'cambridge', 'oxford',
  ],
  AE: [
    'uae', 'united arab emirates', 'dubai', 'abu dhabi', 'sharjah',
    'ajman', 'ras al khaimah', 'fujairah',
  ],
  KE: [
    'kenya', 'nairobi', 'mombasa', 'kisumu', 'westlands', 'kilimani',
    'karen', 'upperhill', 'upper hill', 'cbd', 'lolwe', 'mlolongo',
  ],
  ZA: [
    'south africa', ' johannesburg', 'cape town', 'durban', 'pretoria',
    'sandton', ' gauteng', 'midrand', 'bloemfontein',
  ],
  US: [
    'united states', ' usa', ' u.s.', 'new york', 'manhattan', ' miami',
    ' los angeles', ' chicago', ' houston', ' atlanta', 'boston',
    'san francisco', 'seattle', 'dallas',
  ],
};

function detectMarket(location: string | null | undefined): MandateMarket | null {
  if (!location) return null;
  const haystack = ` ${location.toLowerCase()}`;
  for (const market of MANDATE_MARKETS) {
    const tokens = MARKET_MATCHERS[market.code] || [];
    if (tokens.some((t) => haystack.includes(t))) return market;
  }
  return null;
}

/* --- Commercial-only guard (hard filter) ----------------------------------- */

const COMMERCIAL_SUBTYPE_SET = new Set<string>([
  'Office', 'Office Floor', 'Office to Buy', 'Retail', 'Shop', 'Stall',
  'Mall Space', 'Warehouse', 'Industrial', 'Mixed Use', 'Commercial',
  'Showroom', 'Godown', 'Commercial Plot', 'Business Park',
  'Serviced Office', 'Commercial Land', 'Storage',
]);

/**
 * Returns true only for commercial property. Anything residential —
 * including every apartment / house / villa / maisonette / bungalow /
  * townhouse / penthouse / studio / DSQ subtype — is rejected here.
 */
function isCommercial(p: Pick<PropertyListing, 'type' | 'subtype'>): boolean {
  if (p.type === 'Commercial') return true;
  return COMMERCIAL_SUBTYPE_SET.has(p.subtype);
}

/* --- Subtype → editorial classification ------------------------------------ */

const SUBTYPE_CLASSIFICATION: Record<string, string> = {
  'Office': 'OFFICE',
  'Office Floor': 'OFFICE FLOOR',
  'Office to Buy': 'OFFICE — FREEHOLD',
  'Serviced Office': 'SERVICED OFFICE',
  'Business Park': 'BUSINESS PARK',
  'Retail': 'RETAIL',
  'Shop': 'RETAIL',
  'Stall': 'RETAIL',
  'Mall Space': 'RETAIL — MALL SPACE',
  'Showroom': 'SHOWROOM',
  'Warehouse': 'WAREHOUSE',
  'Godown': 'WAREHOUSE',
  'Industrial': 'INDUSTRIAL',
  'Mixed Use': 'MIXED USE',
  'Commercial': 'COMMERCIAL PROPERTY',
  'Commercial Plot': 'COMMERCIAL LAND',
  'Commercial Land': 'COMMERCIAL LAND',
  'Storage': 'STORAGE',
};

function classificationFor(subtype: string | null | undefined): string {
  if (!subtype) return 'COMMERCIAL PROPERTY';
  return SUBTYPE_CLASSIFICATION[subtype] ?? 'COMMERCIAL PROPERTY';
}

const SUBTYPE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'Office': Briefcase,
  'Office Floor': Layers,
  'Office to Buy': Building2,
  'Serviced Office': Briefcase,
  'Business Park': Building2,
  'Retail': Store,
  'Shop': Store,
  'Stall': Store,
  'Mall Space': ShoppingCart,
  'Showroom': Store,
  'Warehouse': Warehouse,
  'Godown': Warehouse,
  'Industrial': Warehouse,
  'Mixed Use': Building2,
  'Commercial': Building2,
  'Commercial Plot': MapPin,
  'Commercial Land': MapPin,
  'Storage': Warehouse,
};

/* --- Commercial category navigation (directory) ----------------------------
   Only categories with at least one property in the current commercial
   dataset are rendered. No database changes required.
--------------------------------------------------------------------------- */

interface CommercialCategory {
  label: string;
  subtypes: string[];
}

const COMMERCIAL_CATEGORIES: CommercialCategory[] = [
  {
    label: 'Office',
    subtypes: ['Office', 'Office Floor', 'Office to Buy', 'Serviced Office', 'Business Park'],
  },
  {
    label: 'Retail',
    subtypes: ['Retail', 'Shop', 'Stall', 'Mall Space', 'Showroom'],
  },
  {
    label: 'Warehouse & Industrial',
    subtypes: ['Warehouse', 'Industrial', 'Godown', 'Storage'],
  },
  {
    label: 'Mixed Use',
    subtypes: ['Mixed Use'],
  },
];

function categoryForSubtype(subtype: string | null | undefined): CommercialCategory | null {
  if (!subtype) return null;
  return COMMERCIAL_CATEGORIES.find((c) => c.subtypes.includes(subtype)) ?? null;
}

/* --- Occupier profiles (subtype-derived, never asserted as fact) ----------- */

interface OccupierProfile {
  heading: string;
  intro: string;
  points: string[];
}

function occupierProfileFor(
  subtype: string | null | undefined,
  listingType: string,
): OccupierProfile | null {
  const s = (subtype || '').toLowerCase();
  const arrangement = listingType === 'sale'
    ? 'acquisition of the property'
    : 'occupation of the premises under lease';

  if (s.includes('office')) {
    return {
      heading: 'Occupier Profile',
      intro:
        'On the basis of its office classification and the particulars stated above, ' +
        'the property may be suitable for consideration by organisations seeking ' +
        `${arrangement}:`,
      points: [
        'Multinational corporations and regional headquarters establishing or consolidating a corporate office presence',
        'Financial institutions, professional-services and advisory firms requiring a representative business address',
        'NGOs, development organisations and diplomatic missions seeking staffed office premises',
        'Corporate occupiers requiring identifiable, professionally managed premises in an established business location',
      ],
    };
  }
  if (s.includes('retail') || s.includes('shop') || s.includes('stall') || s.includes('mall') || s.includes('showroom')) {
    return {
      heading: 'Occupier Profile',
      intro:
        'On the basis of its retail classification and the particulars stated above, ' +
        'the property may be suitable for consideration by organisations seeking ' +
        `${arrangement}:`,
      points: [
        'Retailers and consumer brands seeking a trading location within an established commercial catchment',
        'Showroom, trade-counter and direct-to-consumer operators requiring visible, accessible premises',
        'Franchise operators and regional distributors establishing a physical market presence',
        'Businesses seeking premises where footfall and commercial visibility are material to operations',
      ],
    };
  }
  if (s.includes('warehouse') || s.includes('industrial') || s.includes('godown') || s.includes('storage')) {
    return {
      heading: 'Occupier Profile',
      intro:
        'On the basis of its warehouse / industrial classification and the particulars ' +
        'stated above, the property may be suitable for consideration by organisations ' +
        `seeking ${arrangement}:`,
      points: [
        'Logistics, distribution and e-commerce operators requiring storage and dispatch capacity',
        'Manufacturing, light-industrial and production occupiers requiring operational premises',
        'Importers, wholesalers and trading companies requiring bonded or general storage capacity',
        'Organisations requiring warehouse premises within an established industrial or logistics corridor',
      ],
    };
  }
  if (s.includes('mixed')) {
    return {
      heading: 'Occupier Profile',
      intro:
        'On the basis of its mixed-use classification and the particulars stated above, ' +
        'the property may be suitable for consideration by organisations seeking ' +
        `${arrangement}:`,
      points: [
        'Occupiers requiring combined commercial, office or retail usage within a single asset',
        'Investors and owner-occupiers seeking income or operational flexibility across more than one use class',
        'Organisations evaluating premises that can adapt as operational requirements change',
      ],
    };
  }
  if (s.includes('plot') || s.includes('land')) {
    return {
      heading: 'Potential Use',
      intro:
        'On the basis of its commercial land classification and the particulars stated ' +
        'above, the site may be suitable for consideration by parties seeking development ' +
        'or land-banking opportunities:',
      points: [
        'Developers and investors evaluating commercial development sites',
        'Organisations seeking a land holding in a commercial location, subject to planning and due diligence',
      ],
    };
  }
  return {
    heading: 'Potential Use',
    intro:
      'On the basis of the particulars stated above, the property may be suitable for ' +
      `consideration by organisations seeking ${arrangement}, subject to the specific ` +
      'operational requirements of the occupier and formal due diligence.',
    points: [],
  };
}

/* ============================================================================
   SECTION 1 — SHARED HELPERS
   ========================================================================== */

/** Data-conversion boundary. PRESERVE — this is the existing architecture. */
function sanityToListing(p: SanityProperty): PropertyListing {
  return {
    id: p._id,
    slug: p.slug.current,
    title: p.title,
    type: p.propertyType,
    subtype: p.subtype,
    location: p.location,
    area: p.area,
    bedrooms: p.bedrooms,
    bathrooms: p.bathrooms,
    rent: p.rent,
    price: p.price,
    displayPrice: p.displayPrice,
    listingType: p.listingType,
    availability: p.availability,
    featured: p.featured,
    description: p.description,
    amenities: p.amenities,
    images: p.images,
    createdAt: p._createdAt,
  };
}

/**
 * Commercial terms rendering. displayPrice always wins (carries the CMS
 * authoring, e.g. "£85,000 /yr", "AED 240,000", "POA"). Numeric values use
 * the existing formatKES convention — no invented exchange rates.
 */
function commercialTerms(property: PropertyListing): {
  primary: string;
  secondary: string | null;
} {
  if (property.displayPrice) {
    return { primary: property.displayPrice, secondary: null };
  }
  if (property.listingType === 'sale' && property.price != null) {
    return { primary: formatKES(property.price), secondary: 'Asking sale price' };
  }
  if (property.rent != null) {
    return { primary: formatKES(property.rent), secondary: 'Asking rent, per month' };
  }
  return { primary: 'Price on application', secondary: 'Commercial terms available on request' };
}

function availabilityTone(availability: string): {
  chip: string;
  dot: string;
} {
  switch (availability) {
    case 'Available':
      return {
        chip: 'bg-forest-500/90 text-white',
        dot: 'bg-forest-400',
      };
    case 'Under Application':
      return {
        chip: 'bg-gold-400/90 text-navy-950',
        dot: 'bg-gold-400',
      };
    default:
      return {
        chip: 'bg-navy-900/90 text-ivory-50',
        dot: 'bg-stone-400',
      };
  }
}

function listingTypeLabel(listingType: string): string {
  return listingType === 'sale' ? 'For Sale' : 'For Lease';
}

/** Truncate cleanly on a word boundary. */
function truncateWords(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trimEnd() + '…';
}

/**
 * Unique 150–160 character meta description built ONLY from real fields:
 * subtype, lease/sale intent, location, area, availability, Murivest.
 */
function buildMetaDescription(
  property: PropertyListing,
  market: MandateMarket | null,
): string {
  const parts: string[] = [];
  const intent = property.listingType === 'sale' ? 'for sale' : 'for lease';
  parts.push(`${property.subtype} ${intent} in ${property.location}`);
  if (property.area) parts.push(property.area);
  if (property.availability === 'Available') parts.push('currently available');
  if (market) parts.push(`Managed within Murivest's ${market.label} mandate portfolio`);

  let body = parts.join('. ');
  const suffix = ' | Murivest';
  const budget = 160 - suffix.length;
  if (body.length > budget) body = truncateWords(body, budget - 1);
  if (!/[.…]$/.test(body)) body += '.';
  return body + suffix;
}

/**
 * 50–60 character SEO title: [Subtype] in [Location] | Murivest.
 * The factual subtype + location are never rewritten, only truncated.
 */
function buildSeoTitle(property: PropertyListing): string {
  const suffix = ' | Murivest';
  const budget = 58 - suffix.length;
  let core = `${property.subtype} in ${property.location}`;
  if (core.length > budget) core = truncateWords(core, budget - 1);
  return core + suffix;
}

/** Alt text: [Subtype] in [Location] — Murivest Lettings. Never stuffed. */
function buildAltText(property: PropertyListing, index: number): string {
  const base = `${property.subtype} in ${property.location} — Murivest Lettings`;
  return index === 0 ? base : `${base}, image ${index + 1}`;
}

/* ============================================================================
   SECTION 2 — JSON-LD (in-file; no changes to the Seo component required)
   ========================================================================== */

interface JsonLdProps {
  id: string;
  data: Record<string, unknown>;
}

/** Injects a JSON-LD script into <head> and removes it on unmount/change. */
function JsonLd({ id, data }: JsonLdProps) {
  const payload = useMemo(() => JSON.stringify(data), [data]);
  useEffect(() => {
    const scriptId = `jsonld-${id}`;
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = scriptId;
    script.textContent = payload;
    document.head.appendChild(script);
    return () => {
      const node = document.getElementById(scriptId);
      if (node) node.remove();
    };
  }, [id, payload]);
  return null;
}

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Murivest Lettings',
  url: 'https://lettings.murivest.com',
  description:
    'Commercial property lettings and acquisitions across the United Kingdom, UAE, Kenya, South Africa and the United States.',
};

/* ============================================================================
   SECTION 3 — INSTITUTIONAL PROPERTY BRIEF CARD (shared: grid + related)
   ========================================================================== */

interface PropertyBriefCardProps {
  property: PropertyListing;
  market: MandateMarket | null;
  eagerImage?: boolean;
}

function PropertyBriefCard({ property, market, eagerImage = false }: PropertyBriefCardProps) {
  const SubIcon = SUBTYPE_ICONS[property.subtype] || Building2;
  const tone = availabilityTone(property.availability);
  const terms = commercialTerms(property);
  const category = categoryForSubtype(property.subtype);

  return (
    <Link
      to={`/properties/${property.slug}`}
      className="group card-institutional overflow-hidden flex flex-col"
      aria-label={`View property brief: ${property.title}`}
    >
      {/* A. Editorial image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
        {property.images[0] ? (
          <img
            src={property.images[0].url}
            alt={buildAltText(property, 0)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            loading={eagerImage ? 'eager' : 'lazy'}
            decoding="async"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <SubIcon className="w-3 h-3 text-stone-300" />
            <span className="text-xs tracking-[0.2em] text-stone-400">
              {classificationFor(property.subtype)}
            </span>
          </div>
        )}

        {/* Restrained overlay: classification + listing type */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[7px] font-semibold tracking-[0.14em] bg-white/95 text-navy-900 backdrop-blur-sm">
            <SubIcon className="w-3 h-3" />
            {classificationFor(property.subtype)}
          </span>
          <span className="inline-flex items-center px-3 py-1.5 text-[7px] font-semibold tracking-[0.14em] bg-navy-950/85 text-ivory-50 backdrop-blur-sm">
            {listingTypeLabel(property.listingType)}
          </span>
        </div>

        {/* Availability */}
        <div className="absolute top-4 right-4">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium backdrop-blur-sm ${tone.chip}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${tone.dot}`} />
            {property.availability}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* B. Editorial category + market */}
        <div className="flex items-center justify-between mb-3">
          <span className="label-text text-gold-600 tracking-[0.18em]">
            {category?.label.toUpperCase() ?? 'COMMERCIAL'}
          </span>
          {market && (
            <span className="inline-flex items-center gap-1 text-[11px] text-stone-400">
              <Globe2 className="w-3 h-3" />
              {market.shortLabel}
            </span>
          )}
        </div>

        {/* C. Location */}
        <div className="flex items-center gap-1.5 text-sm text-stone-500 mb-2">
          <MapPin className="w-3.5 h-3.5 text-navy-400 shrink-0" />
          {property.location}
        </div>

        {/* D. Title */}
        <h3 className="font-serif text-lg text-navy-900 leading-snug mb-4 group-hover:text-navy-700 transition-colors">
          {property.title}
        </h3>

        {/* E. Key property facts — only fields that exist */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-stone-500 mb-5">
          <span className="inline-flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-stone-400" />
            {property.subtype}
          </span>
          {property.area && (
            <span className="inline-flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-stone-400" />
              {property.area}
            </span>
          )}
          {property.listingType === 'lease' && property.bedrooms != null && (
            <span className="inline-flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-stone-400" />
              {property.bedrooms} {property.bedrooms === 1 ? 'suite' : 'suites'}
            </span>
          )}
        </div>

        {/* F. Commercial terms + G. Editorial CTA */}
        <div className="mt-auto flex items-end justify-between pt-4 border-t border-stone-100">
          <div>
            <div className="font-serif text-xl text-navy-900">{terms.primary}</div>
            {terms.secondary && (
              <div className="text-[11px] text-stone-400 mt-0.5">{terms.secondary}</div>
            )}
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-navy-700 group-hover:text-gold-600 transition-colors">
            View Property Brief
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ============================================================================
   SECTION 4 — DIRECTORY PAGE: /properties
   ========================================================================== */

type MarketFilter = 'All' | string;
type CategoryFilter = 'All' | string;
type ListingFilter = 'All' | 'lease' | 'sale';
type AvailabilityFilter = 'All' | 'Available';

export function PropertiesIndexPage() {
  const [rawProperties, setRawProperties] = useState<PropertyListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [filterMarket, setFilterMarket] = useState<MarketFilter>('All');
  const [filterCategory, setFilterCategory] = useState<CategoryFilter>('All');
  const [filterSubtype, setFilterSubtype] = useState<string>('All');
  const [filterListing, setFilterListing] = useState<ListingFilter>('All');
  const [filterAvailability, setFilterAvailability] = useState<AvailabilityFilter>('All');
  const [search, setSearch] = useState('');

  /* --- Data fetch (architecture preserved) --- */
  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchAllProperties();
        if (!cancelled) {
          // COMMERCIAL-ONLY: residential records are dropped at the boundary.
          setRawProperties(
            data.map(sanityToListing).filter((p) => isCommercial(p)),
          );
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load properties');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  const properties = rawProperties;

  /* --- Markets present in the commercial dataset (navigation derived) --- */
  const presentMarkets = useMemo(() => {
    const found = new Map<string, MandateMarket>();
    for (const p of properties) {
      const m = detectMarket(p.location);
      if (m && !found.has(m.code)) found.set(m.code, m);
    }
    return MANDATE_MARKETS.filter((m) => found.has(m.code));
  }, [properties]);

  /* --- Categories present in the commercial dataset --- */
  const presentCategories = useMemo(() => {
    const subtypesPresent = new Set(properties.map((p) => p.subtype));
    return COMMERCIAL_CATEGORIES.filter((c) =>
      c.subtypes.some((s) => subtypesPresent.has(s)),
    );
  }, [properties]);

  /* --- Subtype select options, narrowed by chosen category --- */
  const availableSubtypes = useMemo(() => {
    if (filterCategory === 'All') return COMMERCIAL_SUBTYPES;
    const cat = COMMERCIAL_CATEGORIES.find((c) => c.label === filterCategory);
    const pool = cat ? cat.subtypes : COMMERCIAL_SUBTYPES;
    const present = new Set(properties.map((p) => p.subtype));
    return pool.filter((s) => present.has(s));
  }, [filterCategory, properties]);

  /* --- Filtering --- */
  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (filterMarket !== 'All') {
        const m = detectMarket(p.location);
        if (!m || m.code !== filterMarket) return false;
      }
      if (filterCategory !== 'All') {
        const cat = categoryForSubtype(p.subtype);
        if (!cat || cat.label !== filterCategory) return false;
      }
      if (filterSubtype !== 'All' && p.subtype !== filterSubtype) return false;
      if (filterListing !== 'All' && p.listingType !== filterListing) return false;
      if (filterAvailability !== 'All' && p.availability !== 'Available') return false;
      if (search) {
        const q = search.toLowerCase();
        if (!`${p.title} ${p.location} ${p.subtype}`.toLowerCase().includes(q)) {
          return false;
        }
      }
      return true;
    });
  }, [
    properties, filterMarket, filterCategory, filterSubtype,
    filterListing, filterAvailability, search,
  ]);

  const clearAllFilters = useCallback(() => {
    setFilterMarket('All');
    setFilterCategory('All');
    setFilterSubtype('All');
    setFilterListing('All');
    setFilterAvailability('All');
    setSearch('');
  }, []);

  const filtersActive =
    filterMarket !== 'All' || filterCategory !== 'All' || filterSubtype !== 'All' ||
    filterListing !== 'All' || filterAvailability !== 'All' || search !== '';

  return (
    <>
      <Seo
        title="Commercial Property for Lease & Sale | Murivest"
        description="Commercial offices, retail, warehouse and industrial property for lease and sale across the UK, UAE, Kenya, South Africa and the US — presented as institutional property briefs."
        path="/properties"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties', path: '/properties' }]}
      />
      <JsonLd
        id="properties-index"
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Commercial Property for Lease & Sale | Murivest',
          description:
            'Commercial property briefs for lease and sale across Murivest mandate markets: the United Kingdom, UAE, Kenya, South Africa and the United States.',
          url: 'https://lettings.murivest.com/properties',
        }}
      />
      <JsonLd id="organization-index" data={ORGANIZATION_SCHEMA} />

      {/* HERO — editorial, institutional */}
      <PageHero
        label="PROPERTY INTELLIGENCE"
        title="Commercial Properties for Lease"
        subtitle="Murivest provides discreet access to selected commercial property opportunities — office, retail, warehouse and industrial assets — for occupiers, owners and institutional requirements across the United Kingdom, UAE, Kenya, South Africa and the United States."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties', path: '/properties' }]}
      />

      {/* MANDATE MARKET NAVIGATION — only markets present in the data */}
      {!loading && !error && properties.length > 0 && presentMarkets.length > 0 && (
        <section className="bg-white border-b border-stone-200 section-padding py-6" aria-label="Mandate markets">
          <div className="max-w-9xl mx-auto">
            <div className="flex flex-wrap items-center gap-2">
              <span className="label-text text-stone-400 mr-2">Mandate markets:</span>
              <button
                onClick={() => setFilterMarket('All')}
                aria-pressed={filterMarket === 'All'}
                className={`px-4 py-2 text-xs font-medium tracking-wide transition-colors ${
                  filterMarket === 'All'
                    ? 'bg-navy-900 text-ivory-50'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                All Markets
              </button>
              {presentMarkets.map((m) => (
                <button
                  key={m.code}
                  onClick={() => setFilterMarket(filterMarket === m.code ? 'All' : m.code)}
                  aria-pressed={filterMarket === m.code}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium tracking-wide transition-colors ${
                    filterMarket === m.code
                      ? 'bg-navy-900 text-ivory-50'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  <Globe2 className="w-3 h-3" />
                  {m.label}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* COMMERCIAL CATEGORY NAVIGATION — only categories present in the data */}
      {!loading && !error && properties.length > 0 && presentCategories.length > 0 && (
        <section className="bg-white border-b border-stone-200 section-padding py-6" aria-label="Commercial categories">
          <div className="max-w-9xl mx-auto">
            <div className="flex flex-wrap items-center gap-2">
              <span className="label-text text-stone-400 mr-2">Commercial sectors:</span>
              <button
                onClick={() => { setFilterCategory('All'); setFilterSubtype('All'); }}
                aria-pressed={filterCategory === 'All'}
                className={`px-4 py-2 text-xs font-medium tracking-wide transition-colors ${
                  filterCategory === 'All'
                    ? 'bg-navy-900 text-ivory-50'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                All Sectors
              </button>
              {presentCategories.map((c) => (
                <button
                  key={c.label}
                  onClick={() => {
                    setFilterCategory(filterCategory === c.label ? 'All' : c.label);
                    setFilterSubtype('All');
                  }}
                  aria-pressed={filterCategory === c.label}
                  className={`px-4 py-2 text-xs font-medium tracking-wide transition-colors ${
                    filterCategory === c.label
                      ? 'bg-navy-900 text-ivory-50'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding py-12 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          {/* SEARCH + FILTER BAR — research interface */}
          <div
            className="bg-white border border-stone-200 p-5 mb-8 flex flex-col lg:flex-row items-stretch lg:items-center gap-4 flex-wrap"
            role="search"
            aria-label="Property research filters"
          >
            <div className="relative flex-1 min-w-[220px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search by asset, location or sector…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-field pl-10"
                aria-label="Search commercial properties"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-navy-900"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {(['All', 'lease', 'sale'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setFilterListing(t)}
                  aria-pressed={filterListing === t}
                  className={`px-4 py-2.5 text-xs font-medium tracking-wide transition-colors ${
                    filterListing === t
                      ? 'bg-navy-900 text-ivory-50'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {t === 'All' ? 'Lease & Sale' : t === 'lease' ? 'For Lease' : 'For Sale'}
                </button>
              ))}
            </div>

            <select
              value={filterSubtype}
              onChange={(e) => setFilterSubtype(e.target.value)}
              className="input-field !w-auto"
              aria-label="Filter by property subtype"
            >
              <option value="All">All Subtypes</option>
              {availableSubtypes.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <select
              value={filterAvailability}
              onChange={(e) => setFilterAvailability(e.target.value as AvailabilityFilter)}
              className="input-field !w-auto"
              aria-label="Filter by availability"
            >
              <option value="All">Any Status</option>
              <option value="Available">Available Only</option>
            </select>
          </div>

          {/* RESULTS INTRODUCTION */}
          <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
            <div>
              <h2 className="font-serif text-2xl text-navy-900">Current Property Availability</h2>
              <p className="text-sm text-stone-400 mt-1 flex items-center gap-2">
                <Filter className="w-3.5 h-3.5" />
                Showing {filtered.length} of {properties.length} commercial properties
                {filterMarket !== 'All' && presentMarkets.find((m) => m.code === filterMarket)
                  ? ` — ${presentMarkets.find((m) => m.code === filterMarket)!.label}`
                  : ''}
              </p>
            </div>
            {filtersActive && (
              <button
                onClick={clearAllFilters}
                className="text-xs font-medium text-navy-600 hover:text-navy-900 underline underline-offset-4"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* LOADING */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20" role="status">
              <Loader2 className="w-8 h-8 text-navy-400 animate-spin mb-4" />
              <p className="text-stone-400">Loading property briefs…</p>
            </div>
          )}

          {/* ERROR */}
          {!loading && error && (
            <div className="flex flex-col items-center justify-center py-20" role="alert">
              <AlertCircle className="w-8 h-8 text-red-400 mb-4" />
              <p className="text-stone-500 mb-2">Unable to load properties at this time.</p>
              <p className="text-sm text-stone-400">{error}</p>
            </div>
          )}

          {/* SANITY NOT CONFIGURED */}
          {!loading && !error && !isSanityConfigured && (
            <div className="flex flex-col items-center justify-center py-20 text-center max-w-md mx-auto">
              <Building2 className="w-12 h-12 text-stone-300 mb-4" />
              <p className="text-stone-500 mb-3">
                Property briefs are managed through our Sanity Studio.
              </p>
              <p className="text-sm text-stone-400">
                Connect your Sanity project by adding the following environment variables:
              </p>
              <div className="mt-4 bg-stone-100 p-4 text-left text-xs font-mono text-stone-600 w-full">
                VITE_SANITY_PROJECT_ID=your_project_id<br />
                VITE_SANITY_DATASET=production<br />
                VITE_SANITY_API_TOKEN=your_token
              </div>
            </div>
          )}

          {/* EMPTY */}
          {!loading && !error && isSanityConfigured && properties.length > 0 && filtered.length === 0 && (
            <div className="text-center py-20 border border-dashed border-stone-300">
              <p className="text-stone-400 text-lg">No commercial properties match your criteria.</p>
              <button
                onClick={clearAllFilters}
                className="mt-4 text-sm text-navy-600 hover:text-navy-900 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* COMMERCIAL DATASET EMPTY (e.g. only residential records in CMS) */}
          {!loading && !error && isSanityConfigured && properties.length === 0 && (
            <div className="text-center py-20 border border-dashed border-stone-300 max-w-md mx-auto">
              <Landmark className="w-10 h-10 text-stone-300 mx-auto mb-4" />
              <p className="text-stone-500 mb-2">No commercial mandates are currently published.</p>
              <p className="text-sm text-stone-400">
                New commercial briefs across our mandate markets are added as mandates are
                confirmed. Enquire directly for off-market requirements.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-navy-700 hover:text-gold-600 transition-colors"
              >
                Discuss a requirement
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          {/* RESULTS GRID — institutional property briefs */}
          {!loading && !error && filtered.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((property, idx) => (
                <PropertyBriefCard
                  key={property.id}
                  property={property}
                  market={detectMarket(property.location)}
                  eagerImage={idx < 3}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand
        title="Seeking a commercial property not listed here?"
        description="Our mandate portfolio extends beyond what is published online. Brief our advisory team with your occupational or investment requirements and we will identify suitable assets — including off-market opportunities — across our mandate markets."
        primaryLabel="Discuss Corporate Requirements"
        primaryLink="/contact"
      />
    </>
  );
}

/* ============================================================================
   SECTION 5 — DETAIL PAGE: /properties/:slug
   ========================================================================== */

export function PropertyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [property, setProperty] = useState<PropertyListing | null>(null);
  const [related, setRelated] = useState<PropertyListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  /* --- Data fetch (architecture preserved: slug → listing → related) --- */
  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    setActiveImage(0);
    setLoading(true);
    setError(null);
    async function load() {
      try {
        const data = await fetchPropertyBySlug(slug!);
        if (!cancelled) {
          if (!data) {
            setProperty(null);
            setError('Property not found');
          } else {
            const listing = sanityToListing(data);
            // COMMERCIAL-ONLY: if a residential record is reached by direct
            // URL, it is treated exactly like a missing property.
            if (!isCommercial(listing)) {
              setProperty(null);
              setError('Property not found');
            } else {
              setProperty(listing);
              const rel = await fetchRelatedProperties(data.propertyType, data._id, 3);
              if (!cancelled) {
                // Related properties pass through the same commercial guard.
                setRelated(rel.map(sanityToListing).filter((p) => isCommercial(p)));
              }
            }
          }
        }
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Failed to load property');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, [slug]);

  const images = property?.images ?? [];

  /* --- Gallery keyboard navigation ( ← / → ) --- */
  const stepImage = useCallback(
    (delta: number) => {
      if (images.length < 2) return;
      setActiveImage((i) => (i + delta + images.length) % images.length);
    },
    [images.length],
  );

  useEffect(() => {
    if (images.length < 2) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') stepImage(-1);
      if (e.key === 'ArrowRight') stepImage(1);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [images.length, stepImage]);

  /* --- Derived data --- */
  const market = property ? detectMarket(property.location) : null;
  const terms = property ? commercialTerms(property) : null;
  const tone = property ? availabilityTone(property.availability) : null;
  const profile = property ? occupierProfileFor(property.subtype, property.listingType) : null;
  const SubIcon = property
    ? SUBTYPE_ICONS[property.subtype] || Building2
    : Building2;

  const seoTitle = property ? buildSeoTitle(property) : 'Property | Murivest';
  const metaDescription = property
    ? buildMetaDescription(property, market)
    : 'Commercial property brief — Murivest Lettings.';
  const pagePath = property ? `/properties/${property.slug}` : '/properties';

  /* --- Structured data (all facts sourced from the property object) --- */
  const jsonLdData = useMemo(() => {
    if (!property) return null;
    const url = `https://lettings.murivest.com/properties/${property.slug}`;

    const breadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://lettings.murivest.com/' },
        { '@type': 'ListItem', position: 2, name: 'Properties', item: 'https://lettings.murivest.com/properties' },
        { '@type': 'ListItem', position: 3, name: property.title, item: url },
      ],
    };

    const webpage: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: seoTitle,
      description: metaDescription,
      url,
      image: property.images[0]?.url,
    };

    // Offer — only when a real numeric price exists. Currency follows the
    // detected mandate market; falls back to KES (the data convention).
    let offer: Record<string, unknown> | null = null;
    const numericPrice = property.listingType === 'sale' ? property.price : property.rent;
    if (numericPrice != null) {
      offer = {
        '@type': 'Offer',
        price: numericPrice,
        priceCurrency: market?.code === 'GB' ? 'GBP'
          : market?.code === 'AE' ? 'AED'
          : market?.code === 'ZA' ? 'ZAR'
          : market?.code === 'US' ? 'USD'
          : 'KES',
        availability: property.availability === 'Available'
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
        url,
      };
    }

    // FAQ — generated ONLY from fields this property actually answers.
    const faqMainEntity: Record<string, unknown>[] = [];
    faqMainEntity.push({
      '@type': 'Question',
      name: `Is this ${property.subtype.toLowerCase()} currently available?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `The property is listed as ${property.availability.toLowerCase()}. Current status can be confirmed directly with the Murivest Lettings advisory team.`,
      },
    });
    faqMainEntity.push({
      '@type': 'Question',
      name: `Is this property for lease or for sale?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `This ${property.subtype.toLowerCase()} in ${property.location} is offered for ${property.listingType === 'sale' ? 'sale' : 'lease'}.`,
      },
    });
    faqMainEntity.push({
      '@type': 'Question',
      name: `Where is this property located?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `The property is located in ${property.location}${market ? `, ${market.label}` : ''}.`,
      },
    });
    faqMainEntity.push({
      '@type': 'Question',
      name: `How can I arrange a private viewing?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Private viewings are arranged through the Murivest Lettings advisory team via the contact page or by telephone. All viewings are accompanied by a Murivest representative.',
      },
    });
    const faq = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqMainEntity,
    };

    return { breadcrumb, webpage, offer, faq };
  }, [property, market, seoTitle, metaDescription]);

  /* --- Early returns --- */
  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center" role="status">
        <Loader2 className="w-8 h-8 text-navy-400 animate-spin mb-4" />
        <p className="text-stone-400">Preparing property brief…</p>
      </div>
    );
  }

  if (error || !property || !terms || !tone) {
    return <Navigate to="/properties" replace />;
  }

  /* --- Key Facts rows: every row guarded by data existence --- */
  const keyFacts: { label: string; value: string }[] = [];
  keyFacts.push({ label: 'Property Type', value: property.type });
  keyFacts.push({ label: 'Subtype', value: property.subtype });
  keyFacts.push({ label: 'Location', value: property.location });
  if (market) keyFacts.push({ label: 'Market', value: market.label });
  if (property.area) keyFacts.push({ label: 'Area', value: property.area });
  keyFacts.push({ label: 'Listing', value: listingTypeLabel(property.listingType) });
  keyFacts.push({ label: 'Availability', value: property.availability });
  if (terms.secondary) {
    keyFacts.push({
      label: property.listingType === 'sale' ? 'Sale Price' : 'Rent',
      value: terms.primary,
    });
  }

  return (
    <>
      <Seo
        title={seoTitle}
        description={metaDescription}
        path={pagePath}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Properties', path: '/properties' },
          { name: property.title, path: pagePath },
        ]}
      />
      {jsonLdData && (
        <>
          <JsonLd id="breadcrumb" data={jsonLdData.breadcrumb} />
          <JsonLd id="webpage" data={jsonLdData.webpage} />
          <JsonLd id="organization" data={ORGANIZATION_SCHEMA} />
          {jsonLdData.offer && <JsonLd id="offer" data={jsonLdData.offer} />}
          <JsonLd id="faq" data={jsonLdData.faq} />
        </>
      )}

      {/* ================================================================
          SECTION 7 — EDITORIAL HERO
          Breadcrumbs → classification → H1 → location → terms → availability
      ================================================================= */}
      <section className="bg-navy-950 section-padding pt-32 pb-14">
        <div className="max-w-9xl mx-auto">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center flex-wrap gap-2 text-xs text-stone-500">
              <li>
                <Link to="/" className="hover:text-gold-300 transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/properties" className="hover:text-gold-300 transition-colors">
                  Properties
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-stone-300">
                {property.title}
              </li>
            </ol>
          </nav>

          <div className="flex items-end justify-between flex-wrap gap-8">
            <div className="max-w-3xl">
              {/* Classification */}
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] bg-gold-400 text-navy-950">
                  <SubIcon className="w-3 h-3" />
                  {classificationFor(property.subtype)}
                </span>
                <span className="inline-flex items-center px-3 py-1 text-[11px] font-semibold tracking-[0.16em] bg-navy-800 text-ivory-100 border border-navy-700">
                  {listingTypeLabel(property.listingType)}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium border ${tone.chip} border-transparent`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${tone.dot}`} />
                  {property.availability}
                </span>
                {market && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium text-ivory-200/70 border border-navy-700">
                    <Globe2 className="w-3 h-3" />
                    {market.label}
                  </span>
                )}
              </div>

              {/* H1 */}
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory-50 leading-tight">
                {property.title}
              </h1>

              {/* Location */}
              <div className="flex items-center gap-2 text-ivory-200/60 mt-4">
                <MapPin className="w-4 h-4 text-gold-300 shrink-0" />
                {property.location}
                {market && <span className="text-ivory-200/40">— {market.label}</span>}
              </div>
            </div>

            {/* Commercial terms */}
            <div className="text-left lg:text-right lg:border-l lg:border-navy-800 lg:pl-8">
              <div className="label-text text-ivory-200/40 mb-2">
                {property.listingType === 'sale' ? 'ASKING PRICE' : 'ASKING RENT'}
              </div>
              <div className="font-serif text-3xl md:text-4xl text-gold-300">
                {terms.primary}
              </div>
              {terms.secondary && (
                <div className="text-sm text-ivory-200/50 mt-1">{terms.secondary}</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 8 — PROPERTY INTELLIGENCE BAR
      ================================================================= */}
      <section className="bg-navy-900 border-y border-navy-800 section-padding py-0" aria-label="Property intelligence summary">
        <div className="max-w-9xl mx-auto">
          <dl className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 divide-x divide-navy-800">
            {[
              { label: 'Type', value: property.type },
              { label: 'Subtype', value: property.subtype },
              { label: 'Location', value: property.location },
              { label: 'Market', value: market?.label ?? '—' },
              { label: 'Area', value: property.area ?? '—' },
              { label: 'Listing', value: listingTypeLabel(property.listingType) },
              { label: 'Status', value: property.availability },
              {
                label: property.listingType === 'sale' ? 'Price' : 'Rent',
                value: terms.secondary ? terms.primary : 'POA',
              },
            ].map((item) => (
              <div key={item.label} className="px-4 py-5">
                <dt className="text-[10px] tracking-[0.16em] text-ivory-200/40 mb-1.5">
                  {item.label.toUpperCase()}
                </dt>
                <dd className="text-sm font-medium text-ivory-50 truncate" title={item.value}>
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ================================================================
          SECTION 9–16 — BRIEF / FACTS / LOCATION / DETAILS / PROFILE
      ================================================================= */}
      <section className="section-padding py-14 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* ------- Main editorial column ------- */}
            <div className="lg:col-span-2 space-y-14 min-w-0">

              {/* PROPERTY BRIEF — executive introduction */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="label-text text-gold-600">PROPERTY BRIEF</span>
                  <span className="flex-1 h-px bg-stone-200" />
                </div>
                <p className="font-serif text-xl md:text-2xl text-navy-900 leading-relaxed">
                  {property.subtype} {property.listingType === 'sale' ? 'for sale' : 'for lease'} in{' '}
                  {property.location}
                  {market ? `, ${market.label}` : ''}
                  {property.area ? ` — ${property.area}` : ''}.
                </p>
                {property.description && (
                  <p className="text-stone-500 leading-relaxed mt-5">
                    {truncateWords(property.description, 320)}
                  </p>
                )}
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium bg-white border border-stone-200 text-stone-600">
                    <ShieldCheck className="w-3 h-3 text-forest-500" />
                    {property.availability}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium bg-white border border-stone-200 text-stone-600">
                    <FileText className="w-3 h-3 text-navy-400" />
                    {listingTypeLabel(property.listingType)}
                  </span>
                  {market && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium bg-white border border-stone-200 text-stone-600">
                      <Globe2 className="w-3 h-3 text-navy-400" />
                      {market.label} mandate market
                    </span>
                  )}
                </div>
              </div>

              {/* KEY FACTS — institutional table */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="label-text text-gold-600">KEY FACTS</span>
                  <span className="flex-1 h-px bg-stone-200" />
                </div>
                <div className="border border-stone-200 bg-white">
                  {keyFacts.map((fact, i) => (
                    <div
                      key={fact.label}
                      className={`grid grid-cols-3 ${
                        i !== keyFacts.length - 1 ? 'border-b border-stone-100' : ''
                      }`}
                    >
                      <div className="col-span-1 px-5 py-3.5 text-[11px] tracking-[0.14em] text-stone-400 bg-ivory-50/60">
                        {fact.label.toUpperCase()}
                      </div>
                      <div className="col-span-2 px-5 py-3.5 text-sm text-navy-900 font-medium">
                        {fact.value}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-stone-400 mt-3 flex items-center gap-1.5">
                  <Info className="w-3 h-3 shrink-0" />
                  All particulars are drawn from the published property record and should be
                  verified during formal due diligence.
                </p>
              </div>

              {/* LOCATION INTELLIGENCE */}
              {market && (
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="label-text text-gold-600">LOCATION INTELLIGENCE</span>
                    <span className="flex-1 h-px bg-stone-200" />
                  </div>
                  <div className="bg-white border-l-2 border-gold-400 p-6 md:p-8">
                    <h3 className="font-serif text-xl text-navy-900 mb-3">
                      {property.location} — {market.label}
                    </h3>
                    <p className="text-stone-500 leading-relaxed mb-4">
                      This {property.subtype.toLowerCase()} is located in{' '}
                      <strong className="text-navy-900 font-medium">{property.location}</strong>,{' '}
                      within the <strong className="text-navy-900 font-medium">{market.label}</strong> — one
                      of Murivest&apos;s five commercial mandate markets, alongside the{' '}
                      {MANDATE_MARKETS.filter((m) => m.code !== market.code)
                        .map((m) => m.label)
                        .join(', ')}.
                    </p>
                    <p className="text-stone-500 leading-relaxed mb-4">{market.blurb}</p>
                    <p className="text-stone-500 leading-relaxed">
                      For district-level intelligence — including accessibility, surrounding land
                      use and corporate context specific to this asset — contact the Murivest
                      advisory team, who can provide a detailed location assessment as part of
                      the enquiry process.
                    </p>
                  </div>
                </div>
              )}

              {/* PROPERTY DETAILS — editorial description + amenities */}
              {property.description && (
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="label-text text-gold-600">PROPERTY DETAILS</span>
                    <span className="flex-1 h-px bg-stone-200" />
                  </div>
                  <h2 className="font-serif text-2xl text-navy-900 mb-5">About this property</h2>
                  <div className="prose-editorial text-stone-500 leading-relaxed whitespace-pre-line">
                    {property.description}
                  </div>
                </div>
              )}

              {/* Amenities — only when present in the record */}
              {property.amenities.length > 0 && (
                <div>
                  <h3 className="font-serif text-xl text-navy-900 mb-4">Features &amp; Amenities</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {property.amenities.map((amenity) => (
                      <li
                        key={amenity}
                        className="flex items-center gap-2.5 text-sm text-stone-600 bg-white border border-stone-100 px-4 py-3"
                      >
                        <Check className="w-4 h-4 text-forest-500 shrink-0" />
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* OCCUPIER PROFILE / POTENTIAL USE — conditional, never asserted */}
              {profile && (
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="label-text text-gold-600">
                      {profile.heading.toUpperCase()}
                    </span>
                    <span className="flex-1 h-px bg-stone-200" />
                  </div>
                  <div className="bg-navy-950 text-ivory-50 p-6 md:p-8">
                    <p className="text-ivory-100/80 leading-relaxed mb-5">{profile.intro}</p>
                    {profile.points.length > 0 && (
                      <ul className="space-y-3">
                        {profile.points.map((point) => (
                          <li key={point} className="flex items-start gap-3 text-sm text-ivory-100/70">
                            <BarChart3 className="w-4 h-4 text-gold-300 shrink-0 mt-0.5" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                    <p className="text-[11px] text-ivory-200/40 mt-6 leading-relaxed">
                      Suitability is an indication based on the published classification and
                      particulars only. It does not constitute advice, and each organisation
                      should satisfy itself through its own due diligence.
                    </p>
                  </div>
                </div>
              )}

              {/* GALLERY — lead image, thumbnails, keyboard accessible, no CLS */}
              {images.length > 0 && (
                <div ref={galleryRef}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="label-text text-gold-600">IMAGE GALLERY</span>
                    <span className="flex-1 h-px bg-stone-200" />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Lead image — fixed aspect ratio prevents CLS */}
                    <div className="lg:col-span-2 relative aspect-[16/10] overflow-hidden bg-stone-200">
                      <img
                        key={activeImage}
                        src={images[activeImage].url}
                        alt={images[activeImage].alt || buildAltText(property, activeImage)}
                        className="w-full h-full object-cover"
                        loading={activeImage === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                      />
                      {images.length > 1 && (
                        <>
                          <button
                            onClick={() => stepImage(-1)}
                            aria-label="Previous image"
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-navy-950/70 text-ivory-50 hover:bg-navy-900 transition-colors"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => stepImage(1)}
                            aria-label="Next image"
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-navy-950/70 text-ivory-50 hover:bg-navy-900 transition-colors"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                          <div className="absolute bottom-3 right-3 px-2.5 py-1 text-[11px] bg-navy-950/70 text-ivory-50">
                            {activeImage + 1} / {images.length}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Thumbnails — keyboard accessible buttons, fixed aspect */}
                    {images.length > 1 && (
                      <div
                        className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible"
                        role="tablist"
                        aria-label="Property images"
                      >
                        {images.map((img, i) => (
                          <button
                            key={`${img.url}-${i}`}
                            role="tab"
                            aria-selected={activeImage === i}
                            aria-label={`View image ${i + 1} of ${images.length}`}
                            onClick={() => setActiveImage(i)}
                            className={`shrink-0 w-28 lg:w-full aspect-[16/9] overflow-hidden bg-stone-200 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-400 ${
                              activeImage === i
                                ? 'ring-2 ring-gold-400 opacity-100'
                                : 'opacity-55 hover:opacity-100'
                            }`}
                          >
                            <img
                              src={img.url}
                              alt={img.alt || buildAltText(property, i)}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-[11px] text-stone-400 mt-3">
                    Use the ← and → arrow keys to navigate the gallery.
                  </p>
                </div>
              )}

              {/* FAQ — only questions answerable from real data */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="label-text text-gold-600">ENQUIRY FAQ</span>
                  <span className="flex-1 h-px bg-stone-200" />
                </div>
                <div className="divide-y divide-stone-200 border-y border-stone-200">
                  <details className="group py-4">
                    <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-navy-900 text-sm">
                      Is this {property.subtype.toLowerCase()} currently available?
                      <ChevronRight className="w-4 h-4 text-stone-400 group-open:rotate-90 transition-transform" />
                    </summary>
                    <p className="text-sm text-stone-500 leading-relaxed mt-3">
                      The property is currently listed as <strong>{property.availability.toLowerCase()}</strong>.
                      Status can be confirmed directly with the Murivest advisory team before any
                      commitment is made.
                    </p>
                  </details>
                  <details className="group py-4">
                    <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-navy-900 text-sm">
                      Is the property for lease or for sale?
                      <ChevronRight className="w-4 h-4 text-stone-400 group-open:rotate-90 transition-transform" />
                    </summary>
                    <p className="text-sm text-stone-500 leading-relaxed mt-3">
                      This property is offered for{' '}
                      <strong>{property.listingType === 'sale' ? 'sale' : 'lease'}</strong>, with
                      commercial terms {terms.secondary ? `stated as ${terms.primary}` : 'available on application'}.
                    </p>
                  </details>
                  <details className="group py-4">
                    <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-navy-900 text-sm">
                      Where is the property located?
                      <ChevronRight className="w-4 h-4 text-stone-400 group-open:rotate-90 transition-transform" />
                    </summary>
                    <p className="text-sm text-stone-500 leading-relaxed mt-3">
                      The property is located in <strong>{property.location}</strong>
                      {market ? `, ${market.label}` : ''}.
                    </p>
                  </details>
                  <details className="group py-4">
                    <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-navy-900 text-sm">
                      How can I arrange a private viewing?
                      <ChevronRight className="w-4 h-4 text-stone-400 group-open:rotate-90 transition-transform" />
                    </summary>
                    <p className="text-sm text-stone-500 leading-relaxed mt-3">
                      Viewings are arranged through the{' '}
                      <Link to="/contact" className="text-navy-700 underline underline-offset-4 hover:text-gold-600">
                        Murivest contact page
                      </Link>{' '}
                      or by telephone on 0115 277 610. All viewings are accompanied by a Murivest
                      Lettings representative.
                    </p>
                  </details>
                  <details className="group py-4">
                    <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-navy-900 text-sm">
                      How do I request further property information?
                      <ChevronRight className="w-4 h-4 text-stone-400 group-open:rotate-90 transition-transform" />
                    </summary>
                    <p className="text-sm text-stone-500 leading-relaxed mt-3">
                      Request the full property brief — including particulars, commercial terms
                      and due-diligence documentation — via the enquiry panel or the{' '}
                      <Link to="/contact" className="text-navy-700 underline underline-offset-4 hover:text-gold-600">
                        contact page
                      </Link>
                      .
                    </p>
                  </details>
                </div>
              </div>
            </div>

            {/* ------- Corporate enquiry sidebar ------- */}
            <aside className="lg:col-span-1">
              <div className="bg-white border border-stone-200 p-6 lg:sticky lg:top-24">
                <div className="label-text text-gold-600 mb-2">PRIVATE ENQUIRY</div>
                <h2 className="font-serif text-xl text-navy-900 mb-2">
                  Discuss this property
                </h2>
                <p className="text-sm text-stone-500 mb-6 leading-relaxed">
                  Request the full brief, confirm current availability, or arrange a private
                  viewing with the Murivest advisory team.
                </p>

                <div className="border border-stone-100 bg-ivory-50/60 p-4 mb-5 text-sm">
                  <div className="text-[10px] tracking-[0.16em] text-stone-400 mb-1">
                    COMMERCIAL TERMS
                  </div>
                  <div className="font-serif text-lg text-navy-900">{terms.primary}</div>
                  {terms.secondary && (
                    <div className="text-xs text-stone-400">{terms.secondary}</div>
                  )}
                </div>

                <Link to="/contact" className="btn-primary w-full mb-3">
                  Arrange a Private Viewing
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="btn-outline w-full mb-3"
                >
                  <FileText className="w-4 h-4" />
                  Request Property Information
                </Link>
                <a href="tel:0115277610" className="btn-outline w-full">
                  <Phone className="w-4 h-4" />
                  Call 0115 277 610
                </a>

                <div className="mt-6 pt-6 border-t border-stone-100 space-y-3 text-xs text-stone-400 leading-relaxed">
                  <p className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-forest-500 shrink-0 mt-0.5" />
                    {property.listingType === 'lease'
                      ? 'Occupation subject to vetting and formal lease agreement.'
                      : 'Acquisition subject to due diligence and formal agreement.'}
                  </p>
                  <p className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-navy-400 shrink-0 mt-0.5" />
                    Listed{' '}
                    {new Date(property.createdAt).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>

                {/* Contextual internal links (existing routes only) */}
                <div className="mt-6 pt-5 border-t border-stone-100 space-y-2.5 text-xs">
                  <Link
                    to="/properties"
                    className="flex items-center justify-between text-stone-500 hover:text-navy-900 transition-colors"
                  >
                    Browse all commercial properties
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  {market && (
                    <Link
                      to="/properties"
                      className="flex items-center justify-between text-stone-500 hover:text-navy-900 transition-colors"
                    >
                      More properties in {market.label}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                  <Link
                    to="/contact"
                    className="flex items-center justify-between text-stone-500 hover:text-navy-900 transition-colors"
                  >
                    Discuss corporate requirements
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 16 — RELATED PROPERTIES
      ================================================================= */}
      {related.length > 0 && (
        <section className="section-padding py-16 bg-white border-t border-stone-200">
          <div className="max-w-9xl mx-auto">
            <SectionHeader
              label="Further Property Opportunities"
              title={`Related ${property.type.toLowerCase()} briefs`}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((p, idx) => (
                <PropertyBriefCard
                  key={p.id}
                  property={p}
                  market={detectMarket(p.location)}
                  eagerImage={idx === 0}
                />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                to="/properties"
                className="inline-flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-gold-600 transition-colors"
              >
                View the full commercial portfolio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CORPORATE CTA BAND */}
      <CtaBand
        title="Require a commercial property briefed to your specification?"
        description="Brief our advisory team with your occupational, locational or investment criteria. We identify suitable assets across our UK, UAE, Kenya, South Africa and US mandate markets — including opportunities not published online."
        primaryLabel="Discuss Corporate Requirements"
        primaryLink="/contact"
      />
    </>
  );
}