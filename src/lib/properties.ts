import type { ComponentType } from 'react';
import {
  Briefcase, Building2, Layers, MapPin, ShoppingCart, Store, Warehouse,
} from 'lucide-react';
import { formatKES, COMMERCIAL_SUBTYPES, type PropertyListing } from '@/lib/data';
import type { SanityProperty } from '@/lib/sanity';

/**
 * Shared presentation helpers for property listings.
 *
 * Nothing here changes data: every helper derives display values from fields
 * that already exist on PropertyListing. Used by the /properties pages, the
 * shared PropertyBriefCard, and the listing sections on architecture pages.
 */

/* --- Location → country label (derived from the free-text location only) ----- */

export interface LocationMarket {
  code: string;
  label: string;
  shortLabel: string;
}

export const LOCATION_MARKETS: LocationMarket[] = [
  { code: 'KE', label: 'Kenya', shortLabel: 'Kenya' },
  { code: 'GB', label: 'United Kingdom', shortLabel: 'UK' },
  { code: 'AE', label: 'United Arab Emirates', shortLabel: 'UAE' },
  { code: 'ZA', label: 'South Africa', shortLabel: 'South Africa' },
  { code: 'US', label: 'United States', shortLabel: 'US' },
];

const MARKET_TOKENS: Record<string, string[]> = {
  KE: ['kenya', 'nairobi', 'mombasa', 'kisumu', 'naivasha', 'westlands', 'kilimani', 'karen', 'upperhill', 'upper hill', 'cbd', 'lolwe', 'mlolongo'],
  GB: ['united kingdom', 'uk', 'london', 'manchester', 'birmingham', 'edinburgh', 'england', 'scotland', 'leeds', 'bristol', 'glasgow', 'liverpool'],
  AE: ['uae', 'united arab emirates', 'dubai', 'abu dhabi', 'sharjah', 'ajman', 'ras al khaimah', 'fujairah'],
  ZA: ['south africa', 'johannesburg', 'cape town', 'durban', 'pretoria', 'sandton', 'gauteng', 'midrand'],
  US: ['united states', 'usa', 'new york', 'manhattan', 'miami', 'los angeles', 'chicago', 'houston', 'atlanta', 'boston', 'san francisco', 'seattle', 'dallas'],
};

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** True when the free-text location contains any token as a whole word/phrase. */
export function locationHasToken(location: string | null | undefined, tokens: string[]): boolean {
  if (!location) return false;
  const hay = location.toLowerCase();
  return tokens.some((t) => new RegExp(`(^|[^a-z])${escapeRe(t.toLowerCase())}([^a-z]|$)`).test(hay));
}

export function detectMarket(location: string | null | undefined): LocationMarket | null {
  if (!location) return null;
  for (const m of LOCATION_MARKETS) {
    if (locationHasToken(location, MARKET_TOKENS[m.code] || [])) return m;
  }
  return null;
}

/* --- Commercial guard ------------------------------------------------------ */

export const COMMERCIAL_SUBTYPE_SET = new Set<string>([
  'Office', 'Office Floor', 'Office to Buy', 'Retail', 'Shop', 'Stall',
  'Mall Space', 'Warehouse', 'Industrial', 'Mixed Use', 'Commercial',
  'Showroom', 'Godown', 'Commercial Plot', 'Business Park',
  'Serviced Office', 'Commercial Land', 'Storage',
]);

export function isCommercial(p: Pick<PropertyListing, 'type' | 'subtype'>): boolean {
  if (p.type === 'Commercial') return true;
  return COMMERCIAL_SUBTYPE_SET.has(p.subtype);
}

/* --- Classification -------------------------------------------------------- */

export const SUBTYPE_CLASSIFICATION: Record<string, string> = {
  'Office': 'Office',
  'Office Floor': 'Office floor',
  'Office to Buy': 'Office, freehold',
  'Serviced Office': 'Serviced office',
  'Business Park': 'Business park',
  'Retail': 'Retail',
  'Shop': 'Retail',
  'Stall': 'Retail',
  'Mall Space': 'Retail, mall space',
  'Showroom': 'Showroom',
  'Warehouse': 'Warehouse',
  'Godown': 'Warehouse',
  'Industrial': 'Industrial',
  'Mixed Use': 'Mixed use',
  'Commercial': 'Commercial property',
  'Commercial Plot': 'Commercial land',
  'Commercial Land': 'Commercial land',
  'Storage': 'Storage',
};

export function classificationFor(subtype: string | null | undefined): string {
  if (!subtype) return 'Commercial property';
  return SUBTYPE_CLASSIFICATION[subtype] ?? 'Commercial property';
}

export const SUBTYPE_ICONS: Record<string, ComponentType<{ className?: string }>> = {
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

export interface CommercialCategory {
  label: string;
  subtypes: string[];
}

export const COMMERCIAL_CATEGORIES: CommercialCategory[] = [
  { label: 'Office', subtypes: ['Office', 'Office Floor', 'Office to Buy', 'Serviced Office', 'Business Park'] },
  { label: 'Retail', subtypes: ['Retail', 'Shop', 'Stall', 'Mall Space', 'Showroom'] },
  { label: 'Warehouse & Industrial', subtypes: ['Warehouse', 'Industrial', 'Godown', 'Storage'] },
  { label: 'Mixed Use', subtypes: ['Mixed Use'] },
];

export function categoryForSubtype(subtype: string | null | undefined): CommercialCategory | null {
  if (!subtype) return null;
  return COMMERCIAL_CATEGORIES.find((c) => c.subtypes.includes(subtype)) ?? null;
}

/* --- Data-conversion boundary (unchanged) ----------------------------------- */

export function sanityToListing(p: SanityProperty): PropertyListing {
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

/* --- Commercial terms --------------------------------------------------------
   Rent, price and POA are kept distinct. displayPrice (CMS-authored) always
   wins. Numeric values use the existing formatKES convention. No rent period
   or currency conversion is assumed, because the data does not carry one.
--------------------------------------------------------------------------- */

export interface CommercialTerms {
  kind: 'rent' | 'price' | 'poa';
  label: string;
  value: string;
}

export function commercialTerms(property: PropertyListing): CommercialTerms {
  const sale = property.listingType === 'sale';
  if (property.displayPrice) {
    return { kind: sale ? 'price' : 'rent', label: sale ? 'Price' : 'Rent', value: property.displayPrice };
  }
  if (sale && property.price != null && property.price > 0) {
    return { kind: 'price', label: 'Price', value: formatKES(property.price) };
  }
  if (!sale && property.rent != null && property.rent > 0) {
    return { kind: 'rent', label: 'Rent', value: formatKES(property.rent) };
  }
  return { kind: 'poa', label: sale ? 'Price' : 'Rent', value: 'Price on application' };
}

export function availabilityTone(availability: string): { chip: string; dot: string } {
  switch (availability) {
    case 'Available':
      return { chip: 'bg-forest-700 text-white', dot: 'bg-forest-300' };
    case 'Under Application':
      return { chip: 'bg-gold-400 text-navy-950', dot: 'bg-navy-900' };
    default:
      return { chip: 'bg-navy-900 text-ivory-50', dot: 'bg-stone-400' };
  }
}

export function listingTypeLabel(listingType: string): string {
  return listingType === 'sale' ? 'For sale' : 'For lease';
}

/* --- SEO builders (real fields only) ---------------------------------------- */

export function truncateWords(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 20 ? cut.slice(0, lastSpace) : cut).trimEnd();
}

/** "[Type] in [Location] | Murivest", extended to "Murivest Lettings" when room allows (<= 60 chars). */
export function buildSeoTitle(property: PropertyListing): string {
  let core = `${property.subtype} in ${property.location}`;
  const short = ' | Murivest';
  const long = ' | Murivest Lettings';
  if (core.length + short.length > 60) core = truncateWords(core, 60 - short.length);
  return core.length + long.length <= 60 ? core + long : core + short;
}

/**
 * Unique meta description (150-160 chars) from real fields: subtype, lease or
 * sale, location, size (if present), availability, plus a generic service tail.
 */
export function buildMetaDescription(property: PropertyListing): string {
  const intent = property.listingType === 'sale' ? 'for sale' : 'for lease';
  let head = `${property.subtype} ${intent} in ${property.location}`;
  if (property.area) head += `, ${property.area}`;
  head += `. Status: ${property.availability.toLowerCase()}.`;
  const tails = [
    ' Request the property brief or arrange a viewing with Murivest Lettings in Nairobi.',
    ' Request the property brief or arrange a viewing with Murivest Lettings.',
    ' Request the property brief with Murivest Lettings.',
    ' Enquire with Murivest Lettings.',
  ];
  if (head.length > 130) head = truncateWords(head, 128).replace(/[.,;:]$/, '') + '.';
  let out = head;
  for (const t of tails) {
    if ((head + t).length <= 160) { out = head + t; break; }
  }
  return out;
}

/** Alt text: "[Type] in [Location] — Murivest Lettings" (later images numbered). */
export function buildAltText(property: PropertyListing, index: number): string {
  const base = `${property.subtype} in ${property.location} — Murivest Lettings`;
  return index === 0 ? base : `${base}, image ${index + 1}`;
}

/* --- Listing-section matching (architecture pages) --------------------------- */

export function matchesListing(
  p: PropertyListing,
  spec: { subtypes?: string[]; tokens?: string[]; listingType?: 'lease' | 'sale' },
): boolean {
  if (!isCommercial(p)) return false;
  if (spec.listingType && p.listingType !== spec.listingType) return false;
  if (spec.subtypes && spec.subtypes.length > 0 && !spec.subtypes.includes(p.subtype)) return false;
  if (spec.tokens && spec.tokens.length > 0) {
    if (!locationHasToken(`${p.location} ${p.title}`, spec.tokens)) return false;
  }
  return true;
}

export { COMMERCIAL_SUBTYPES };
