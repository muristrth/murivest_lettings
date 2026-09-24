import { createClient } from '@sanity/client';

const sanityProjectId = import.meta.env.VITE_SANITY_PROJECT_ID || '';
const sanityDataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const sanityApiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01';
const sanityApiToken = import.meta.env.VITE_SANITY_API_TOKEN || '';

export const isSanityConfigured = Boolean(sanityProjectId);

export const sanityClient = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: true,
  token: sanityApiToken || undefined,
});

export interface SanityPropertyImage {
  url: string;
  alt: string;
}

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
  listingType: 'lease' | 'sale';
  availability: 'Available' | 'Under Application' | 'Leased' | 'Sold';
  featured: boolean;
  description: string;
  amenities: string[];
  images: SanityPropertyImage[];
  _createdAt: string;
}

const propertyFields = `
  _id,
  _type,
  title,
  slug,
  propertyType,
  subtype,
  location,
  area,
  bedrooms,
  bathrooms,
  rent,
  price,
  listingType,
  availability,
  featured,
  description,
  amenities,
  _createdAt,
  "images": images[]{ "url": asset->url, "alt": alt }
`;

function mapSanityProperty(raw: Record<string, unknown>): SanityProperty {
  return {
    _id: raw._id as string,
    _type: raw._type as string,
    title: raw.title as string,
    slug: raw.slug as { current: string },
    propertyType: raw.propertyType as 'Residential' | 'Commercial',
    subtype: raw.subtype as string,
    location: raw.location as string,
    area: (raw.area as string) || null,
    bedrooms: (raw.bedrooms as number) || null,
    bathrooms: (raw.bathrooms as number) || null,
    rent: (raw.rent as number) || 0,
    price: (raw.price as number) || null,
    listingType: (raw.listingType as 'lease' | 'sale') || 'lease',
    availability: (raw.availability as string) || 'Available',
    featured: (raw.featured as boolean) || false,
    description: (raw.description as string) || '',
    amenities: (raw.amenities as string[]) || [],
    images: (raw.images as SanityPropertyImage[]) || [],
    _createdAt: raw._createdAt as string,
  };
}

export async function fetchAllProperties(): Promise<SanityProperty[]> {
  if (!isSanityConfigured) return [];
  const results = await sanityClient.fetch(
    `*[_type == "property" && defined(slug.current)] | order(featured desc, _createdAt desc) { ${propertyFields} }`
  );
  return (results as Record<string, unknown>[]).map(mapSanityProperty);
}

export async function fetchPropertiesByType(
  propertyType: 'Residential' | 'Commercial'
): Promise<SanityProperty[]> {
  if (!isSanityConfigured) return [];
  const results = await sanityClient.fetch(
    `*[_type == "property" && propertyType == $propertyType && defined(slug.current)] | order(featured desc, _createdAt desc) { ${propertyFields} }`,
    { propertyType }
  );
  return (results as Record<string, unknown>[]).map(mapSanityProperty);
}

export async function fetchPropertiesBySubtype(
  subtype: string
): Promise<SanityProperty[]> {
  if (!isSanityConfigured) return [];
  const results = await sanityClient.fetch(
    `*[_type == "property" && subtype == $subtype && defined(slug.current)] | order(featured desc, _createdAt desc) { ${propertyFields} }`,
    { subtype }
  );
  return (results as Record<string, unknown>[]).map(mapSanityProperty);
}

export async function fetchPropertyBySlug(
  slug: string
): Promise<SanityProperty | null> {
  if (!isSanityConfigured) return null;
  const result = await sanityClient.fetch(
    `*[_type == "property" && slug.current == $slug][0] { ${propertyFields} }`,
    { slug }
  );
  if (!result) return null;
  return mapSanityProperty(result as Record<string, unknown>);
}

export async function fetchFeaturedProperties(
  limit: number = 6
): Promise<SanityProperty[]> {
  if (!isSanityConfigured) return [];
  const results = await sanityClient.fetch(
    `*[_type == "property" && featured == true && defined(slug.current)] | order(_createdAt desc) [0...$limit] { ${propertyFields} }`,
    { limit }
  );
  return (results as Record<string, unknown>[]).map(mapSanityProperty);
}

export async function fetchRelatedProperties(
  propertyType: string,
  excludeId: string,
  limit: number = 3
): Promise<SanityProperty[]> {
  if (!isSanityConfigured) return [];
  const results = await sanityClient.fetch(
    `*[_type == "property" && propertyType == $propertyType && _id != $excludeId && defined(slug.current)] | order(_createdAt desc) [0...$limit] { ${propertyFields} }`,
    { propertyType, excludeId, limit }
  );
  return (results as Record<string, unknown>[]).map(mapSanityProperty);
}
