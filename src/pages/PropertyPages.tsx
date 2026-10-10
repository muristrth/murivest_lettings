import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowRight, MapPin, Building2, Search, Loader2, AlertCircle, Phone,
  FileText, ChevronRight, ChevronLeft, X, CalendarCheck, ImageOff,
} from 'lucide-react';
import { Seo } from '@/components/Seo';
import { JsonLd } from '@/components/JsonLd';
import { PageHero, CtaBand, SectionHeader } from '@/components/ui';
import { PropertyBriefCard } from '@/components/PropertyBriefCard';
import {
  fetchAllProperties, fetchPropertyBySlug, fetchRelatedProperties,
  isSanityConfigured,
} from '@/lib/sanity';
import { COMMERCIAL_SUBTYPES, type PropertyListing } from '@/lib/data';
import { SITE_CONFIG } from '@/lib/seo';
import {
  LOCATION_MARKETS, detectMarket, isCommercial, sanityToListing,
  COMMERCIAL_CATEGORIES, categoryForSubtype, classificationFor,
  commercialTerms, availabilityTone, listingTypeLabel,
  buildSeoTitle, buildMetaDescription, buildAltText, locationHasToken,
  SUBTYPE_ICONS,
} from '@/lib/properties';

/* ============================================================================
   /properties : directory ("Property Intelligence")
   Data flow is unchanged: fetchAllProperties -> sanityToListing -> commercial guard.
   ========================================================================== */

type ListingFilter = 'All' | 'lease' | 'sale';
type AvailabilityFilter = 'All' | 'Available';

const DIRECTORY_CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Properties', path: '/properties' },
];

export function PropertiesIndexPage() {
  const [properties, setProperties] = useState<PropertyListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [filterMarket, setFilterMarket] = useState<string>('All');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [filterSubtype, setFilterSubtype] = useState<string>('All');
  const [filterListing, setFilterListing] = useState<ListingFilter>('All');
  const [filterAvailability, setFilterAvailability] = useState<AvailabilityFilter>('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchAllProperties();
        // Commercial-only: residential records are dropped at the boundary.
        if (!cancelled) setProperties(data.map(sanityToListing).filter((p) => isCommercial(p)));
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Failed to load properties');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  const presentMarkets = useMemo(() => {
    const found = new Set<string>();
    for (const p of properties) {
      const m = detectMarket(p.location);
      if (m) found.add(m.code);
    }
    return LOCATION_MARKETS.filter((m) => found.has(m.code));
  }, [properties]);

  const presentCategories = useMemo(() => {
    const subtypes = new Set(properties.map((p) => p.subtype));
    return COMMERCIAL_CATEGORIES.filter((c) => c.subtypes.some((s) => subtypes.has(s)));
  }, [properties]);

  const availableSubtypes = useMemo(() => {
    const present = new Set(properties.map((p) => p.subtype));
    const pool: readonly string[] =
      filterCategory === 'All'
        ? COMMERCIAL_SUBTYPES
        : COMMERCIAL_CATEGORIES.find((c) => c.label === filterCategory)?.subtypes ?? COMMERCIAL_SUBTYPES;
    return pool.filter((s) => present.has(s));
  }, [filterCategory, properties]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
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
      if (q && !`${p.title} ${p.location} ${p.subtype}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [properties, filterMarket, filterCategory, filterSubtype, filterListing, filterAvailability, search]);

  const filtersActive =
    filterMarket !== 'All' || filterCategory !== 'All' || filterSubtype !== 'All' ||
    filterListing !== 'All' || filterAvailability !== 'All' || search.trim() !== '';

  const clearAllFilters = useCallback(() => {
    setFilterMarket('All');
    setFilterCategory('All');
    setFilterSubtype('All');
    setFilterListing('All');
    setFilterAvailability('All');
    setSearch('');
  }, []);

  const chip = (active: boolean) =>
    `px-3.5 py-2 text-xs font-medium tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
      active ? 'bg-navy-900 text-ivory-50' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
    }`;

  return (
    <>
      <Seo
        title="Commercial Properties for Lease and Sale | Murivest Lettings"
        description="Browse commercial properties for lease and sale from Murivest Lettings: offices, retail, warehouse and industrial space. Filter by type, listing and availability."
        path="/properties"
        breadcrumbs={DIRECTORY_CRUMBS}
      />
      <PageHero
        label="Property Intelligence"
        title="Properties for Lease & Sale"
        subtitle="Commercial property presented as concise briefs: classification, location, size and commercial terms, with enquiries handled directly by our team."
        breadcrumbs={DIRECTORY_CRUMBS}
      />

      <section className="section-padding py-10 lg:py-12 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          {/* Filter bar */}
          <form
            role="search"
            aria-label="Filter properties"
            onSubmit={(e) => e.preventDefault()}
            className="bg-white border border-stone-200 p-4 sm:p-5 mb-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center">
              <div className="relative md:col-span-5 min-w-0">
                <label htmlFor="property-search" className="sr-only">Search properties by title, location or type</label>
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" aria-hidden="true" />
                <input
                  id="property-search"
                  type="search"
                  placeholder="Search by title, location or type"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="input-field pl-10 pr-10"
                  autoComplete="off"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-navy-900"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" aria-hidden="true" />
                  </button>
                )}
              </div>

              <div className="md:col-span-3 min-w-0">
                <label htmlFor="filter-subtype" className="sr-only">Property subtype</label>
                <select
                  id="filter-subtype"
                  value={filterSubtype}
                  onChange={(e) => setFilterSubtype(e.target.value)}
                  className="input-field"
                >
                  <option value="All">All property types</option>
                  {availableSubtypes.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2 min-w-0">
                <label htmlFor="filter-availability" className="sr-only">Availability</label>
                <select
                  id="filter-availability"
                  value={filterAvailability}
                  onChange={(e) => setFilterAvailability(e.target.value as AvailabilityFilter)}
                  className="input-field"
                >
                  <option value="All">Any status</option>
                  <option value="Available">Available only</option>
                </select>
              </div>

              {presentMarkets.length > 1 && (
                <div className="md:col-span-2 min-w-0">
                  <label htmlFor="filter-market" className="sr-only">Country</label>
                  <select
                    id="filter-market"
                    value={filterMarket}
                    onChange={(e) => setFilterMarket(e.target.value)}
                    className="input-field"
                  >
                    <option value="All">All locations</option>
                    {presentMarkets.map((m) => (
                      <option key={m.code} value={m.code}>{m.label}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div role="group" aria-label="Listing type" className="flex flex-wrap gap-2">
                {(['All', 'lease', 'sale'] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFilterListing(t)}
                    aria-pressed={filterListing === t}
                    className={chip(filterListing === t)}
                  >
                    {t === 'All' ? 'Lease & Sale' : t === 'lease' ? 'For Lease' : 'For Sale'}
                  </button>
                ))}
              </div>

              {presentCategories.length > 0 && (
                <div role="group" aria-label="Sector" className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => { setFilterCategory('All'); setFilterSubtype('All'); }}
                    aria-pressed={filterCategory === 'All'}
                    className={chip(filterCategory === 'All')}
                  >
                    All sectors
                  </button>
                  {presentCategories.map((c) => (
                    <button
                      key={c.label}
                      type="button"
                      onClick={() => {
                        setFilterCategory(filterCategory === c.label ? 'All' : c.label);
                        setFilterSubtype('All');
                      }}
                      aria-pressed={filterCategory === c.label}
                      className={chip(filterCategory === c.label)}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              )}

              {filtersActive && (
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="text-xs font-medium text-navy-700 hover:text-navy-900 underline underline-offset-4 ml-auto"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </form>

          {/* Results introduction */}
          <div className="mb-8">
            <h2 className="font-serif text-2xl md:text-3xl text-navy-900">Current Property Availability</h2>
            {!loading && !error && properties.length > 0 && (
              <p className="text-sm text-stone-600 mt-2" aria-live="polite">
                Showing {filtered.length} selected {filtered.length === 1 ? 'property' : 'properties'}
                {filtersActive ? ` of ${properties.length}` : ''}
              </p>
            )}
          </div>

          {loading && (
            <div className="flex flex-col items-center justify-center py-20" role="status">
              <Loader2 className="w-8 h-8 text-navy-400 animate-spin mb-4" aria-hidden="true" />
              <p className="text-stone-500">Loading properties…</p>
            </div>
          )}

          {!loading && error && (
            <div className="flex flex-col items-center justify-center py-20 text-center" role="alert">
              <AlertCircle className="w-8 h-8 text-stone-400 mb-4" aria-hidden="true" />
              <p className="text-stone-700 mb-2">We could not load properties right now.</p>
              <p className="text-sm text-stone-500">Please try again shortly, or contact us and we will help directly.</p>
            </div>
          )}

          {!loading && !error && !isSanityConfigured && (
            <div className="flex flex-col items-center justify-center py-20 text-center max-w-md mx-auto">
              <Building2 className="w-12 h-12 text-stone-300 mb-4" aria-hidden="true" />
              <p className="text-stone-700">Property listings are not available at the moment.</p>
              <Link to="/contact" className="mt-4 text-sm font-medium text-navy-700 hover:text-gold-700 underline underline-offset-4">
                Contact us about your requirement
              </Link>
            </div>
          )}

          {!loading && !error && isSanityConfigured && properties.length > 0 && filtered.length === 0 && (
            <div className="text-center py-16 border border-dashed border-stone-300">
              <p className="text-stone-700 text-lg">No properties match your criteria.</p>
              <button type="button" onClick={clearAllFilters} className="mt-4 text-sm text-navy-700 hover:text-navy-900 font-medium underline underline-offset-4">
                Clear all filters
              </button>
            </div>
          )}

          {!loading && !error && isSanityConfigured && properties.length === 0 && (
            <div className="text-center py-16 border border-dashed border-stone-300 max-w-xl mx-auto px-6">
              <Building2 className="w-10 h-10 text-stone-300 mx-auto mb-4" aria-hidden="true" />
              <p className="text-stone-700 mb-2">No properties are currently published.</p>
              <p className="text-sm text-stone-500">Tell us what you are looking for and we will search on your behalf.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-navy-700 hover:text-gold-700">
                Discuss a requirement
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          )}

          {!loading && !error && filtered.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filtered.map((property, idx) => (
                <PropertyBriefCard key={property.id} property={property} eagerImage={idx < 3} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand
        title="Looking for something not listed here?"
        description="Tell us your requirement and our team will search on your behalf."
        primaryLabel="Discuss Your Requirement"
        primaryLink="/contact"
      />
    </>
  );
}

/* ============================================================================
   /properties/:slug : property brief
   ========================================================================== */

/** Gallery: keyboard operable, active thumbnail, fixed aspect box (no layout shift), no broken-image state. */
function PropertyGallery({ property }: { property: PropertyListing }) {
  const images = property.images ?? [];
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState<Set<number>>(() => new Set());
  const SubIcon = SUBTYPE_ICONS[property.subtype] || Building2;

  useEffect(() => { setActive(0); setFailed(new Set()); }, [property.id]);

  const step = useCallback(
    (delta: number) => {
      if (images.length < 2) return;
      setActive((i) => (i + delta + images.length) % images.length);
    },
    [images.length],
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
    else if (e.key === 'Home') { e.preventDefault(); setActive(0); }
    else if (e.key === 'End') { e.preventDefault(); setActive(images.length - 1); }
  };

  const markFailed = (i: number) => setFailed((prev) => new Set(prev).add(i));
  const current = images[active];
  const currentOk = Boolean(current?.url) && !failed.has(active);

  return (
    <div
      role="group"
      aria-roledescription="gallery"
      aria-label={`Photographs of ${property.title}`}
      tabIndex={images.length > 1 ? 0 : -1}
      onKeyDown={onKeyDown}
      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden border border-stone-200">
        {currentOk ? (
          <img
            key={active}
            src={current.url}
            alt={buildAltText(property, active)}
            className="absolute inset-0 w-full h-full object-cover"
            loading={active === 0 ? 'eager' : 'lazy'}
            fetchPriority={active === 0 ? 'high' : 'auto'}
            decoding="async"
            onError={() => markFailed(active)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-ivory-100 to-stone-100 text-stone-500">
            {images.length === 0 ? <SubIcon className="w-12 h-12 text-stone-300" aria-hidden="true" /> : <ImageOff className="w-10 h-10 text-stone-300" aria-hidden="true" />}
            <span className="text-sm">{images.length === 0 ? 'Photography available on request' : 'Image unavailable'}</span>
          </div>
        )}

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-navy-900 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-navy-900 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
            <span className="absolute bottom-3 right-3 bg-navy-950/80 text-ivory-50 text-xs px-2.5 py-1" aria-live="polite">
              {active + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {images.length > 1 && (
        <ul className="mt-3 grid grid-cols-4 sm:grid-cols-6 gap-2">
          {images.map((img, i) => (
            <li key={`${img.url}-${i}`}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show image ${i + 1} of ${images.length}`}
                aria-current={i === active ? 'true' : undefined}
                className={`relative block w-full aspect-[4/3] overflow-hidden bg-stone-100 border-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
                  i === active ? 'border-gold-500' : 'border-transparent hover:border-stone-300'
                }`}
              >
                {failed.has(i) ? (
                  <span className="absolute inset-0 flex items-center justify-center bg-stone-100">
                    <ImageOff className="w-4 h-4 text-stone-300" aria-hidden="true" />
                  </span>
                ) : (
                  <img
                    src={img.url}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    onError={() => markFailed(i)}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Splits free-text descriptions into paragraphs; lines starting with "-", "*" or a bullet become list items. */
function DescriptionBlocks({ text }: { text: string }) {
  const blocks = useMemo(() => {
    const raw = text.replace(/\r\n/g, '\n').trim();
    if (!raw) return [];
    const parts = /\n\s*\n/.test(raw) ? raw.split(/\n\s*\n/) : raw.split('\n');
    return parts.map((b) => b.trim()).filter(Boolean);
  }, [text]);

  return (
    <div className="space-y-5 max-w-3xl">
      {blocks.map((b, i) => {
        const lines = b.split('\n').map((l) => l.trim()).filter(Boolean);
        const isList = lines.length > 1 && lines.every((l) => /^([-*\u2022])\s+/.test(l));
        if (isList) {
          return (
            <ul key={i} className="list-disc pl-5 space-y-1.5 text-stone-700 leading-relaxed">
              {lines.map((l, j) => <li key={j}>{l.replace(/^([-*\u2022])\s+/, '')}</li>)}
            </ul>
          );
        }
        return (
          <p key={i} className={i === 0 ? 'text-lg md:text-xl text-navy-900 leading-relaxed font-serif' : 'text-stone-700 leading-relaxed'}>
            {lines.join(' ')}
          </p>
        );
      })}
    </div>
  );
}

/** Existing Murivest market pages that correspond to words in the property's own location text. */
const LOCATION_PAGES: { label: string; path: string; tokens: string[] }[] = [
  { label: 'Westlands', path: '/markets/africa/kenya/nairobi/westlands', tokens: ['westlands'] },
  { label: 'Upper Hill', path: '/markets/africa/kenya/nairobi/upper-hill', tokens: ['upper hill', 'upperhill'] },
  { label: 'Nairobi CBD', path: '/markets/africa/kenya/nairobi/nairobi-cbd', tokens: ['nairobi cbd', 'cbd'] },
  { label: 'Kilimani', path: '/markets/africa/kenya/nairobi/kilimani', tokens: ['kilimani'] },
  { label: 'Lavington', path: '/markets/africa/kenya/nairobi/lavington', tokens: ['lavington'] },
  { label: 'Kileleshwa', path: '/markets/africa/kenya/nairobi/kileleshwa', tokens: ['kileleshwa'] },
  { label: 'Riverside', path: '/markets/africa/kenya/nairobi/riverside', tokens: ['riverside'] },
  { label: 'Industrial Area', path: '/markets/africa/kenya/nairobi/industrial-area', tokens: ['industrial area'] },
  { label: 'Mombasa Road', path: '/markets/africa/kenya/nairobi/mombasa-road', tokens: ['mombasa road'] },
  { label: 'Mombasa', path: '/markets/africa/kenya/mombasa', tokens: ['mombasa'] },
  { label: 'Naivasha', path: '/markets/africa/kenya/naivasha', tokens: ['naivasha'] },
  { label: 'Nairobi', path: '/markets/africa/kenya/nairobi', tokens: ['nairobi'] },
];

function NotFoundPanel({ message }: { message: string }) {
  return (
    <>
      <Seo
        title="Property not found | Murivest Lettings"
        description="This property could not be found. Browse current commercial properties for lease and sale from Murivest Lettings, or contact our team about your requirement."
        path="/properties"
        noindex
      />
      <section className="bg-navy-950 section-padding pt-36 pb-20">
        <div className="max-w-3xl mx-auto lg:mx-0" role="alert">
          <div className="label-text text-gold-300 mb-4">Property Intelligence</div>
          <h1 className="font-serif text-3xl md:text-4xl text-ivory-50 mb-4">{message}</h1>
          <p className="text-ivory-200/70 mb-8">It may have been withdrawn, or the link may be incorrect.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/properties" className="btn-gold">Browse all properties</Link>
            <Link to="/contact" className="btn-outline-light">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function PropertyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [property, setProperty] = useState<PropertyListing | null>(null);
  const [related, setRelated] = useState<PropertyListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    setLoading(true);
    setError(null);
    setProperty(null);
    setRelated([]);
    async function load() {
      try {
        const data = await fetchPropertyBySlug(slug!);
        if (cancelled) return;
        if (!data) {
          setError('Property not found');
          return;
        }
        const listing = sanityToListing(data);
        // A residential record reached by direct URL is treated like a missing property.
        if (!isCommercial(listing)) {
          setError('Property not found');
          return;
        }
        setProperty(listing);
        const rel = await fetchRelatedProperties(data.propertyType, data._id, 3);
        if (!cancelled) setRelated(rel.map(sanityToListing).filter((p) => isCommercial(p)));
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Failed to load property');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, [slug]);

  const pagePath = property ? `/properties/${property.slug}` : '/properties';

  const seoTitle = property ? buildSeoTitle(property) : '';
  const seoDescription = property ? buildMetaDescription(property) : '';
  const primaryImage = property?.images?.[0]?.url;

  const crumbs = useMemo(
    () => property
      ? [...DIRECTORY_CRUMBS, { name: property.title, path: `/properties/${property.slug}` }]
      : DIRECTORY_CRUMBS,
    [property],
  );

  /* FAQ: only questions this record can answer; the same strings are rendered visibly and in JSON-LD. */
  const faq = useMemo(() => {
    if (!property) return [] as { q: string; a: string }[];
    const terms = commercialTerms(property);
    const items: { q: string; a: string }[] = [
      {
        q: 'Is this property currently available?',
        a: `The property is listed as ${property.availability.toLowerCase()}. Please confirm the current position with our team before making plans.`,
      },
      {
        q: 'Is the property offered for lease or for sale?',
        a: `It is offered ${property.listingType === 'sale' ? 'for sale' : 'for lease'}. ${
          terms.kind === 'poa' ? 'Terms are available on application.' : `${terms.label}: ${terms.value}.`
        }`,
      },
      {
        q: 'Where is the property located?',
        a: `${property.location}.`,
      },
    ];
    if (property.area) {
      items.push({ q: 'What size is the property?', a: `The listing states ${property.area}.` });
    }
    return items;
  }, [property]);

  const jsonLd = useMemo(() => {
    if (!property) return null;
    const url = `${SITE_CONFIG.url}/properties/${property.slug}`;
    const terms = commercialTerms(property);
    const numeric = property.listingType === 'sale' ? property.price : property.rent;
    // An Offer is emitted only for a real numeric price expressed in KES (the site's data convention).
    const displayIsKes = !property.displayPrice || /^(kes|ksh|kshs)\b/i.test(property.displayPrice.trim());
    let offer: Record<string, unknown> | null = null;
    if (terms.kind !== 'poa' && numeric != null && numeric > 0 && displayIsKes) {
      offer = {
        '@context': 'https://schema.org',
        '@type': 'Offer',
        url,
        price: numeric,
        priceCurrency: 'KES',
        ...(property.availability === 'Available' ? { availability: 'https://schema.org/InStock' } : {}),
        itemOffered: {
          '@type': 'Place',
          name: property.title,
          address: property.location,
        },
        seller: { '@id': `${SITE_CONFIG.url}/#organization` },
      };
    }
    const faqLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    };
    return { offer, faqLd };
  }, [property, faq]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center" role="status">
        <Loader2 className="w-8 h-8 text-navy-400 animate-spin mb-4" aria-hidden="true" />
        <p className="text-stone-500">Preparing property brief…</p>
      </div>
    );
  }

  if (error || !property) {
    return <NotFoundPanel message={error === 'Property not found' || !error ? 'Property not found' : 'We could not load this property'} />;
  }

  const terms = commercialTerms(property);
  const tone = availabilityTone(property.availability);
  const SubIcon = SUBTYPE_ICONS[property.subtype] || Building2;
  const classification = classificationFor(property.subtype);
  const locationPages = LOCATION_PAGES.filter((lp) => locationHasToken(property.location, lp.tokens)).slice(0, 3);
  const listed = (() => {
    const d = new Date(property.createdAt);
    return Number.isNaN(d.getTime()) ? null : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  })();

  const keyFacts: { label: string; value: string }[] = [
    { label: 'Property type', value: property.subtype },
    { label: 'Listing', value: listingTypeLabel(property.listingType) },
    { label: 'Location', value: property.location },
  ];
  if (property.area) keyFacts.push({ label: 'Size', value: property.area });
  if (property.bedrooms != null) keyFacts.push({ label: 'Bedrooms', value: String(property.bedrooms) });
  if (property.bathrooms != null) keyFacts.push({ label: 'Bathrooms', value: String(property.bathrooms) });
  keyFacts.push({ label: 'Availability', value: property.availability });
  keyFacts.push({ label: terms.label, value: terms.value });
  if (listed) keyFacts.push({ label: 'Listed', value: listed });

  const phoneHref = `tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`;

  return (
    <>
      <Seo
        title={seoTitle}
        description={seoDescription}
        path={pagePath}
        breadcrumbs={crumbs}
        ogImage={primaryImage}
      />
      {jsonLd?.offer && <JsonLd id="property-offer" data={jsonLd.offer} />}
      {faq.length > 0 && jsonLd && <JsonLd id="property-faq" data={jsonLd.faqLd} />}

      {/* Hero */}
      <section className="bg-navy-950 section-padding pt-28 sm:pt-32 pb-10 lg:pb-12">
        <div className="max-w-9xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-stone-400">
              <li><Link to="/" className="hover:text-gold-300 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/properties" className="hover:text-gold-300 transition-colors">Properties</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-stone-300 break-words min-w-0">{property.title}</li>
            </ol>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 label-text text-gold-300">
              <SubIcon className="w-4 h-4" aria-hidden="true" />
              {classification}
            </span>
            <span className="text-stone-600" aria-hidden="true">|</span>
            <span className="label-text text-ivory-200/80">{listingTypeLabel(property.listingType)}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="min-w-0 max-w-3xl">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory-50 leading-tight break-words">{property.title}</h1>
              <p className="mt-4 flex items-start gap-2 text-ivory-200/80">
                <MapPin className="w-5 h-5 text-gold-300 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="break-words min-w-0">{property.location}</span>
              </p>
            </div>
            <div className="flex flex-wrap lg:flex-col lg:items-end gap-4">
              <div className="lg:text-right">
                <div className="text-xs uppercase tracking-wide text-stone-400">{terms.label}</div>
                <div className={`font-serif text-2xl sm:text-3xl ${terms.kind === 'poa' ? 'italic text-ivory-200/80' : 'text-ivory-50'}`}>
                  {terms.value}
                </div>
              </div>
              <span className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium self-start lg:self-end ${tone.chip}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${tone.dot}`} aria-hidden="true" />
                {property.availability}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Key-facts strip */}
      <section aria-label="Key facts at a glance" className="bg-white border-b border-stone-200 section-padding">
        <dl className="max-w-9xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 py-5">
          {[
            { l: 'Type', v: property.subtype },
            ...(property.area ? [{ l: 'Size', v: property.area }] : []),
            { l: 'Availability', v: property.availability },
            { l: terms.label, v: terms.value },
          ].map((f) => (
            <div key={f.l} className="min-w-0">
              <dt className="text-[11px] uppercase tracking-wide text-stone-500">{f.l}</dt>
              <dd className="text-sm font-medium text-navy-900 break-words">{f.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div ref={topRef} />
      <section className="section-padding py-12 lg:py-16 bg-ivory-50">
        <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          <div className="lg:col-span-2 min-w-0 space-y-14">
            <PropertyGallery property={property} />

            {property.description.trim() && (
              <section aria-labelledby="brief-heading">
                <div className="label-text text-gold-700 mb-3">Overview</div>
                <h2 id="brief-heading" className="font-serif text-2xl md:text-3xl text-navy-900 mb-6">Property Brief</h2>
                <DescriptionBlocks text={property.description} />
              </section>
            )}

            <section aria-labelledby="facts-heading">
              <h2 id="facts-heading" className="font-serif text-2xl md:text-3xl text-navy-900 mb-6">Key Facts</h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-stone-200 bg-white">
                {keyFacts.map((f) => (
                  <div key={f.label} className="border-r border-b border-stone-200 p-4 min-w-0">
                    <dt className="text-[11px] uppercase tracking-wide text-stone-500 mb-1">{f.label}</dt>
                    <dd className="text-navy-900 break-words">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {property.amenities.length > 0 && (
              <section aria-labelledby="features-heading">
                <h2 id="features-heading" className="font-serif text-2xl md:text-3xl text-navy-900 mb-6">Features and Amenities</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-stone-700">
                  {property.amenities.map((a) => (
                    <li key={a} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0" aria-hidden="true" />
                      <span className="break-words min-w-0">{a}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {locationPages.length > 0 && (
              <section aria-labelledby="location-heading">
                <h2 id="location-heading" className="font-serif text-2xl md:text-3xl text-navy-900 mb-4">Location</h2>
                <p className="text-stone-700 mb-5 break-words">
                  This property is listed in {property.location}. Murivest Lettings can advise on how this location compares with others for your requirement.
                </p>
                <ul className="flex flex-wrap gap-3">
                  {locationPages.map((lp) => (
                    <li key={lp.path}>
                      <Link to={lp.path} className="inline-flex items-center gap-2 border border-stone-300 bg-white px-4 py-2 text-sm text-navy-800 hover:border-gold-500 transition-colors">
                        Commercial property in {lp.label}
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {faq.length > 0 && (
              <section aria-labelledby="faq-heading">
                <h2 id="faq-heading" className="font-serif text-2xl md:text-3xl text-navy-900 mb-6">Frequently Asked Questions</h2>
                <div className="divide-y divide-stone-200 border-y border-stone-200 bg-white">
                  {faq.map((f) => (
                    <details key={f.q} className="group px-5 py-4">
                      <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-medium text-navy-900 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500">
                        {f.q}
                        <ChevronRight className="w-4 h-4 text-stone-400 shrink-0 group-open:rotate-90 transition-transform" aria-hidden="true" />
                      </summary>
                      <p className="text-sm text-stone-600 leading-relaxed mt-3">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Enquiry panel */}
          <aside className="lg:col-span-1 min-w-0" aria-labelledby="enquiry-heading">
            <div className="bg-white border border-stone-200 p-6 lg:sticky lg:top-24">
              <div className="label-text text-gold-700 mb-2">Enquiries</div>
              <h2 id="enquiry-heading" className="font-serif text-xl text-navy-900 mb-2">Discuss this property</h2>
              <p className="text-sm text-stone-600 mb-5 leading-relaxed">
                Request the property information, confirm availability or arrange a viewing with our team.
              </p>

              <div className="border border-stone-100 bg-ivory-50 p-4 mb-5">
                <div className="text-[11px] uppercase tracking-wide text-stone-500 mb-1">{terms.label}</div>
                <div className={`font-serif text-lg ${terms.kind === 'poa' ? 'italic text-stone-600' : 'text-navy-900'}`}>{terms.value}</div>
              </div>

              <Link to="/contact" className="btn-primary w-full mb-3">
                <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                Arrange a Private Viewing
              </Link>
              <Link to="/contact" className="btn-outline w-full mb-3">
                <FileText className="w-4 h-4" aria-hidden="true" />
                Request Property Information
              </Link>
              <Link to="/contact" className="btn-outline w-full mb-3">
                Enquire About This Property
              </Link>
              <a href={phoneHref} className="flex items-center justify-center gap-2 text-sm text-navy-700 hover:text-gold-700 py-2">
                <Phone className="w-4 h-4" aria-hidden="true" />
                {SITE_CONFIG.phone}
              </a>

              <p className="mt-5 pt-5 border-t border-stone-100 text-xs text-stone-500 leading-relaxed">
                Terms, availability and viewing arrangements are confirmed directly with Murivest Lettings.
              </p>
              <Link to="/properties" className="mt-4 flex items-center justify-between text-xs text-stone-600 hover:text-navy-900">
                Browse all properties
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding py-16 bg-white border-t border-stone-200">
          <div className="max-w-9xl mx-auto">
            <SectionHeader label="Further properties" title="Related properties" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {related.map((p, idx) => (
                <PropertyBriefCard key={p.id} property={p} eagerImage={idx === 0} />
              ))}
            </div>
            <div className="mt-10">
              <Link to="/properties" className="inline-flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-gold-700 transition-colors">
                View all properties
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title="Need a different property?"
        description="Tell us your requirement and our team will search on your behalf."
        primaryLabel="Request Property Information"
        primaryLink="/contact"
        secondaryLabel="Browse all properties"
        secondaryLink="/properties"
      />
    </>
  );
}
