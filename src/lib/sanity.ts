import { createClient } from '@sanity/client';

const sanityProjectId = import.meta.env.VITE_SANITY_PROJECT_ID || '';
const sanityDataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const sanityApiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01';
const sanityApiToken = import.meta.env.VITE_SANITY_API_TOKEN || '';

export const isSanityConfigured = Boolean(sanityProjectId && sanityProjectId !== 'your_project_id');

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: sanityApiVersion,
      useCdn: true,
      token: sanityApiToken || undefined,
    })
  : null;

export interface SanityPropertyImage {
  url: string;
  alt: string;
}

export type SanityAvailability = 'Available' | 'Under Application' | 'Leased' | 'Sold' | 'Coming Soon';

export interface SanityProperty {
  _id: string;
  _type: string;
  title: string;
  slug: { current: string };
  propertyType: 'Residential' | 'Commercial';
  subtype: string;
  location: string;
  area: string | null;
  bedrooms: number | null;
  bathrooms: number | null;
  rent: number;
  price: number | null;
  displayPrice: string | null;
  listingType: 'lease' | 'sale';
  availability: SanityAvailability;
  featured: boolean;
  description: string;
  amenities: string[];
  images: SanityPropertyImage[];
  _createdAt: string;
}

// Studio documents are "propertylet"; "property" kept for any legacy docs.
const baseFilter = `_type in ["propertylet"] && defined(slug.current)`;

const propertyFields = `
  _id,
  _type,
  title,
  slug,
  propertyType,
  assetType,
  category,
  subtype,
  transactionType,
  listingType,
  availabilityStatus,
  availability,
  featured,
  description,
  city,
  neighborhood,
  address,
  location,
  area,
  sizeRange,
  bedrooms,
  bathrooms,
  rent,
  price,
  features,
  amenities,
  listingDate,
  _createdAt,
  "images": images[]{ "url": asset->url, "alt": coalesce(alt, "") }
`;

function toNumber(value: unknown): number | null {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const n = Number(value.replace(/[^\d.]/g, ''));
    return value.trim() && !Number.isNaN(n) ? n : null;
  }
  return null;
}

function mapAvailability(value: unknown): SanityAvailability {
  switch (value) {
    case 'Under Offer':
    case 'Under Application':
      return 'Under Application';
    case 'Let':
    case 'Leased':
      return 'Leased';
    case 'Sold':
      return 'Sold';
    case 'Coming Soon':
      return 'Coming Soon';
    default:
      return 'Available';
  }
}

function formatSize(size: unknown): string | null {
  if (!size || typeof size !== 'object') return null;
  const { min, max, unit } = size as { min?: number; max?: number; unit?: string };
  if (min == null && max == null) return null;
  const u = unit || 'sqft';
  const fmt = (n: number) => n.toLocaleString('en-KE');
  if (min != null && max != null && min !== max) return `${fmt(min)} – ${fmt(max)} ${u}`;
  return `${fmt((min ?? max) as number)} ${u}`;
}

function mapSanityProperty(raw: Record<string, unknown>): SanityProperty {
  const rawType = String(raw.propertyType ?? '');
  const isResidential = rawType === 'Residential' || raw.assetType === 'residential';

  const isSale =
    raw.listingType === 'sale' ||
    raw.listingType === 'for-sale' ||
    raw.listingType === 'For Sale' ||
    raw.transactionType === 'For Sale';

  const priceObj = raw.price && typeof raw.price === 'object'
    ? (raw.price as { displayPrice?: string; Ksh?: string })
    : null;
  const amount = priceObj ? toNumber(priceObj.Ksh) : toNumber(raw.price);
  const rent = toNumber(raw.rent) ?? (!isSale ? amount : null) ?? 0;

  const location =
    (raw.location as string) ||
    [raw.neighborhood, raw.city].filter(Boolean).join(', ');

  return {
    _id: raw._id as string,
    _type: raw._type as string,
    title: (raw.title as string) || 'Untitled property',
    slug: raw.slug as { current: string },
    propertyType: isResidential ? 'Residential' : 'Commercial',
    subtype: (raw.subtype as string) || (raw.category as string) || rawType || 'Other',
    location,
    area: (raw.area as string) || formatSize(raw.sizeRange),
    bedrooms: toNumber(raw.bedrooms),
    bathrooms: toNumber(raw.bathrooms),
    rent,
    price: isSale ? amount : null,
    displayPrice: priceObj?.displayPrice || null,
    listingType: isSale ? 'sale' : 'lease',
    availability: mapAvailability(raw.availabilityStatus ?? raw.availability),
    featured: Boolean(raw.featured),
    description: (raw.description as string) || '',
    amenities: (raw.amenities as string[]) || (raw.features as string[]) || [],
    images: ((raw.images as SanityPropertyImage[]) || []).filter((img) => img?.url),
    _createdAt: (raw.listingDate as string) || (raw._createdAt as string),
  };
}

async function fetchMapped(query: string, params: Record<string, unknown> = {}): Promise<SanityProperty[]> {
  if (!sanityClient) return [];
  const results = await sanityClient.fetch<Record<string, unknown>[]>(query, params);
  return (results || []).map(mapSanityProperty);
}

export async function fetchAllProperties(): Promise<SanityProperty[]> {
  return fetchMapped(
    `*[${baseFilter}] | order(featured desc, _createdAt desc) { ${propertyFields} }`
  );
}

export async function fetchPropertiesByType(
  propertyType: 'Residential' | 'Commercial'
): Promise<SanityProperty[]> {
  const all = await fetchAllProperties();
  return all.filter((p) => p.propertyType === propertyType);
}

export async function fetchPropertiesBySubtype(subtype: string): Promise<SanityProperty[]> {
  const all = await fetchAllProperties();
  return all.filter((p) => p.subtype === subtype);
}

export async function fetchPropertyBySlug(slug: string): Promise<SanityProperty | null> {
  if (!sanityClient) return null;
  const result = await sanityClient.fetch<Record<string, unknown> | null>(
    `*[${baseFilter} && slug.current == $slug][0] { ${propertyFields} }`,
    { slug }
  );
  return result ? mapSanityProperty(result) : null;
}

// Featured first, then newest, so the homepage still shows listings when none are flagged.
export async function fetchFeaturedProperties(limit: number = 6): Promise<SanityProperty[]> {
  return fetchMapped(
    `*[${baseFilter}] | order(featured desc, _createdAt desc) [0...$limit] { ${propertyFields} }`,
    { limit }
  );
}

export async function fetchRelatedProperties(
  propertyType: string,
  excludeId: string,
  limit: number = 3
): Promise<SanityProperty[]> {
  const all = await fetchAllProperties();
  return all
    .filter((p) => p._id !== excludeId && p.propertyType === propertyType)
    .slice(0, limit);
}

