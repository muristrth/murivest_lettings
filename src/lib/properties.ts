import type { ComponentType } from 'react';
import {
  Briefcase, Building2, Layers, MapPin, ShoppingCart, Store, Warehouse,
} from 'lucide-react';
import {
  formatKES,
  type PropertyListing,
} from '@/lib/data';
import { COMMERCIAL_SUBTYPES, type SanityProperty } from '@/lib/sanity';

/* ============================================================================
   SECTION 0 — COMMERCIAL-ONLY MANDATE CONFIGURATION
   ========================================================================== */

export interface MandateMarket {
  code: string;
  label: string;
  shortLabel: string;
  blurb: string;
}

export const MANDATE_MARKETS: MandateMarket[] = [
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

export function detectMarket(location: string | null | undefined): MandateMarket | null {
  if (!location) return null;
  const haystack = ` ${location.toLowerCase()}`;
  for (const market of MANDATE_MARKETS) {
    const tokens = MARKET_MATCHERS[market.code] || [];
    if (tokens.some((t) => haystack.includes(t))) return market;
  }
  return null;
}

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

export const SUBTYPE_CLASSIFICATION: Record<string, string> = {
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

export function classificationFor(subtype: string | null | undefined): string {
  if (!subtype) return 'COMMERCIAL PROPERTY';
  return SUBTYPE_CLASSIFICATION[subtype] ?? 'COMMERCIAL PROPERTY';
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

import {
  Briefcase, Building2, Layers, MapPin, ShoppingCart, Store, Warehouse,
} from 'lucide-react';

export interface CommercialCategory {
  label: string;
  subtypes: string[];
}

export const COMMERCIAL_CATEGORIES: CommercialCategory[] = [
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

export function categoryForSubtype(subtype: string | null | undefined): CommercialCategory | null {
  if (!subtype) return null;
  return COMMERCIAL_CATEGORIES.find((c) => c.subtypes.includes(subtype)) ?? null;
}

export interface OccupierProfile {
  heading: string;
  intro: string;
  points: string[];
}

export function occupierProfileFor(
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

export function commercialTerms(property: PropertyListing): {
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

export function availabilityTone(availability: string): { chip: string; dot: string } {
  switch (availability) {
    case 'Available':
      return { chip: 'bg-forest-500/90 text-white', dot: 'bg-forest-400' };
    case 'Under Application':
      return { chip: 'bg-gold-400/90 text-navy-950', dot: 'bg-gold-400' };
    default:
      return { chip: 'bg-navy-900/90 text-ivory-50', dot: 'bg-stone-400' };
  }
}

export function listingTypeLabel(listingType: string): string {
  return listingType === 'sale' ? 'For Sale' : 'For Lease';
}

export function truncateWords(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trimEnd() + '…';
}

export function buildMetaDescription(
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

export function buildSeoTitle(property: PropertyListing): string {
  const suffix = ' | Murivest';
  const budget = 58 - suffix.length;
  let core = `${property.subtype} in ${property.location}`;
  if (core.length > budget) core = truncateWords(core, budget - 1);
  return core + suffix;
}

export function buildAltText(property: PropertyListing, index: number): string {
  const base = `${property.subtype} in ${property.location} — Murivest Lettings`;
  return index === 0 ? base : `${base}, image ${index + 1}`;
}

export { COMMERCIAL_SUBTYPES };
