import { useState, useMemo, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ArrowRight, MapPin, BedDouble, Bath, Maximize, Check, Phone, Calendar,
  Loader2, AlertCircle, Search, Filter, Building2, Store, ShoppingCart,
  Briefcase, Layers, Warehouse, Home as HomeIcon,
} from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader } from '@/components/ui';
import {
  fetchAllProperties, fetchPropertyBySlug, fetchRelatedProperties,
  isSanityConfigured, type SanityProperty,
} from '@/lib/sanity';
import {
  ALL_SUBTYPES, RESIDENTIAL_SUBTYPES, COMMERCIAL_SUBTYPES,
  SUBTYPE_GROUPS, formatKES, type PropertyListing,
} from '@/lib/data';

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

const SUBTYPE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'Apartment': HomeIcon,
  'Villa': HomeIcon,
  'Townhouse': HomeIcon,
  'Maisonette': HomeIcon,
  'Bungalow': HomeIcon,
  'Penthouse': HomeIcon,
  'Studio': HomeIcon,
  'DSQ': HomeIcon,
  'Office': Briefcase,
  'Office Floor': Layers,
  'Office to Buy': Building2,
  'Retail': Store,
  'Shop': Store,
  'Stall': Store,
  'Mall Space': ShoppingCart,
  'Warehouse': Warehouse,
  'Industrial': Warehouse,
  'Mixed Use': Building2,
};

export function PropertiesIndexPage() {
  const [properties, setProperties] = useState<PropertyListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [filterType, setFilterType] = useState<'All' | 'Residential' | 'Commercial'>('All');
  const [filterSubtype, setFilterSubtype] = useState<string>('All');
  const [filterListing, setFilterListing] = useState<'All' | 'lease' | 'sale'>('All');
  const [filterAvailability, setFilterAvailability] = useState<'All' | 'Available'>('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchAllProperties();
        if (!cancelled) {
          setProperties(data.map(sanityToListing));
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

  const availableSubtypes = useMemo(() => {
    if (filterType === 'Residential') return RESIDENTIAL_SUBTYPES;
    if (filterType === 'Commercial') return COMMERCIAL_SUBTYPES;
    return ALL_SUBTYPES;
  }, [filterType]);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (filterType !== 'All' && p.type !== filterType) return false;
      if (filterSubtype !== 'All' && p.subtype !== filterSubtype) return false;
      if (filterListing !== 'All' && p.listingType !== filterListing) return false;
      if (filterAvailability !== 'All' && p.availability !== 'Available') return false;
      if (search) {
        const q = search.toLowerCase();
        if (!`${p.title} ${p.location} ${p.subtype}`.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [properties, filterType, filterSubtype, filterListing, filterAvailability, search]);

  return (
    <>
      <Seo
        title="Properties for Lease & Sale | Murivest Lettings"
        description="Browse residential and commercial properties available for lease and sale in Nairobi and Kenya — apartments, villas, offices, office floors, retail units, shops, stalls, mall space, warehouses and more."
        path="/properties"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties', path: '/properties' }]}
      />
      <PageHero
        label="Property Directory"
        title="Properties available for lease & sale"
        subtitle="Residential and commercial properties under Murivest management — from apartments and villas to office floors, retail units, shops, stalls and mall space across Nairobi and Kenya."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties', path: '/properties' }]}
      />

      {/* Category Navigation */}
      <section className="bg-white border-b border-stone-200 section-padding py-6">
        <div className="max-w-9xl mx-auto">
          <div className="flex flex-wrap items-center gap-3">
            <span className="label-text text-stone-400 mr-2">Browse by type:</span>
            {SUBTYPE_GROUPS.map((group) => (
              <button
                key={group.label}
                onClick={() => {
                  setFilterType(group.type);
                  setFilterSubtype('All');
                }}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  filterType === group.type
                    ? 'bg-navy-900 text-ivory-50'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {group.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-12 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          {/* Filters */}
          <div className="bg-white border border-stone-200 p-5 mb-8 flex flex-col lg:flex-row items-center gap-4 flex-wrap">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search by name, location or type..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-field pl-10"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {(['All', 'Residential', 'Commercial'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => { setFilterType(t); setFilterSubtype('All'); }}
                  className={`px-4 py-2.5 text-sm font-medium transition-colors ${
                    filterType === t ? 'bg-navy-900 text-ivory-50' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <select
              value={filterSubtype}
              onChange={(e) => setFilterSubtype(e.target.value)}
              className="input-field !w-auto"
            >
              <option value="All">All Subtypes</option>
              {availableSubtypes.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <select
              value={filterListing}
              onChange={(e) => setFilterListing(e.target.value as 'All' | 'lease' | 'sale')}
              className="input-field !w-auto"
            >
              <option value="All">Lease & Sale</option>
              <option value="lease">For Lease</option>
              <option value="sale">For Sale</option>
            </select>
            <select
              value={filterAvailability}
              onChange={(e) => setFilterAvailability(e.target.value as 'All' | 'Available')}
              className="input-field !w-auto"
            >
              <option value="All">All Status</option>
              <option value="Available">Available Only</option>
            </select>
          </div>

          <div className="mb-4 text-sm text-stone-400 flex items-center gap-2">
            <Filter className="w-3.5 h-3.5" />
            Showing {filtered.length} of {properties.length} properties
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="w-8 h-8 text-navy-400 animate-spin mb-4" />
              <p className="text-stone-400">Loading properties...</p>
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="flex flex-col items-center justify-center py-20">
              <AlertCircle className="w-8 h-8 text-red-400 mb-4" />
              <p className="text-stone-500 mb-2">Unable to load properties at this time.</p>
              <p className="text-sm text-stone-400">{error}</p>
            </div>
          )}

          {/* Not configured */}
          {!loading && !error && !isSanityConfigured && (
            <div className="flex flex-col items-center justify-center py-20 text-center max-w-md mx-auto">
              <Building2 className="w-12 h-12 text-stone-300 mb-4" />
              <p className="text-stone-500 mb-3">Property listings are managed through our Sanity Studio.</p>
              <p className="text-sm text-stone-400">Connect your Sanity project by adding the following environment variables:</p>
              <div className="mt-4 bg-stone-100 p-4 text-left text-xs font-mono text-stone-600 w-full">
                VITE_SANITY_PROJECT_ID=your_project_id<br />
                VITE_SANITY_DATET=production<br />
                VITE_SANITY_API_TOKEN=your_token
              </div>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && isSanityConfigured && filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-stone-400 text-lg">No properties match your filters.</p>
              <button
                onClick={() => {
                  setFilterType('All'); setFilterSubtype('All');
                  setFilterListing('All'); setFilterAvailability('All'); setSearch('');
                }}
                className="mt-4 text-sm text-navy-600 hover:text-navy-900 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Results grid */}
          {!loading && !error && filtered.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((property) => {
                const SubIcon = SUBTYPE_ICONS[property.subtype] || Building2;
                return (
                  <Link
                    key={property.id}
                    to={`/properties/${property.slug}`}
                    className="group card-institutional overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                      {property.images[0] ? (
                        <img
                          src={property.images[0].url}
                          alt={property.images[0].alt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <SubIcon className="w-12 h-12 text-stone-300" />
                        </div>
                      )}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white/95 text-navy-900 backdrop-blur-sm">
                          <SubIcon className="w-3 h-3" />
                          {property.subtype}
                        </span>
                        {property.listingType === 'sale' && (
                          <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-gold-400/90 text-navy-950 backdrop-blur-sm">
                            For Sale
                          </span>
                        )}
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className={`inline-flex items-center px-3 py-1.5 text-xs font-medium backdrop-blur-sm ${
                          property.availability === 'Available'
                            ? 'bg-forest-500/90 text-white'
                            : property.availability === 'Under Application'
                            ? 'bg-gold-400/90 text-navy-900'
                            : 'bg-navy-900/90 text-ivory-50'
                        }`}>
                          {property.availability}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-2">
                        <MapPin className="w-3.5 h-3.5" />
                        {property.location}
                      </div>
                      <h3 className="font-serif text-lg text-navy-900 mb-3 group-hover:text-navy-700 transition-colors leading-snug">
                        {property.title}
                      </h3>
                      <div className="flex items-center gap-4 text-xs text-stone-500 mb-4">
                        <span>{property.type}</span>
                        {property.area && <span>{property.area}</span>}
                        {property.bedrooms != null && (
                          <span className="flex items-center gap-1">
                            <BedDouble className="w-3.5 h-3.5" /> {property.bedrooms}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                        <div>
                          {property.displayPrice ? (
                            <div className="font-serif text-xl text-navy-900">{property.displayPrice}</div>
                          ) : property.listingType === 'sale' && property.price ? (
                            <>
                              <div className="font-serif text-xl text-navy-900">{formatKES(property.price)}</div>
                              <div className="text-xs text-stone-400">sale price</div>
                            </>
                          ) : (
                            <>
                              <div className="font-serif text-xl text-navy-900">{formatKES(property.rent)}</div>
                              <div className="text-xs text-stone-400">per month</div>
                            </>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-navy-900 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <CtaBand
        title="Looking for a specific type of property?"
        description="Our portfolio extends beyond what's listed online. Contact us with your requirements and we'll match you to suitable options."
        primaryLabel="Contact Our Team"
        primaryLink="/contact"
      />
    </>
  );
}

export function PropertyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [property, setProperty] = useState<PropertyListing | null>(null);
  const [related, setRelated] = useState<PropertyListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);

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
            setProperty(listing);
            const rel = await fetchRelatedProperties(data.propertyType, data._id, 3);
            if (!cancelled) setRelated(rel.map(sanityToListing));
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

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 text-navy-400 animate-spin mb-4" />
        <p className="text-stone-400">Loading property...</p>
      </div>
    );
  }

  if (error || !property) {
    return <Navigate to="/properties" replace />;
  }

  const SubIcon = SUBTYPE_ICONS[property.subtype] || Building2;

  return (
    <>
      <Seo
        title={`${property.title} | Murivest Lettings`}
        description={property.description.substring(0, 160)}
        path={`/properties/${property.slug}`}
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties', path: '/properties' }, { name: property.title, path: `/properties/${property.slug}` }]}
      />

      <section className="bg-navy-950 section-padding pt-32 pb-12">
        <div className="max-w-9xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-stone-500 mb-6">
            <Link to="/" className="hover:text-gold-300">Home</Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-gold-300">Properties</Link>
            <span>/</span>
            <span className="text-stone-300">{property.title}</span>
          </nav>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-gold-400 text-navy-950">
                  <SubIcon className="w-3 h-3" />
                  {property.subtype}
                </span>
                {property.listingType === 'sale' && (
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gold-300/20 text-gold-300 border border-gold-400/30">
                    For Sale
                  </span>
                )}
                <span className={`inline-flex items-center px-3 py-1 text-xs font-medium border ${
                  property.availability === 'Available' ? 'bg-forest-500/20 text-forest-300 border-forest-500/30' :
                  property.availability === 'Under Application' ? 'bg-gold-400/20 text-gold-300 border-gold-400/30' :
                  'bg-navy-700 text-ivory-100 border-navy-600'
                }`}>{property.availability}</span>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory-50 leading-tight">{property.title}</h1>
              <div className="flex items-center gap-2 text-ivory-200/60 mt-3">
                <MapPin className="w-4 h-4 text-gold-300" />
                {property.location}
              </div>
            </div>
            <div className="text-right">
              {property.displayPrice ? (
                <div className="font-serif text-3xl md:text-4xl text-gold-300">{property.displayPrice}</div>
              ) : property.listingType === 'sale' && property.price ? (
                <>
                  <div className="font-serif text-3xl md:text-4xl text-gold-300">{formatKES(property.price)}</div>
                  <div className="text-sm text-ivory-200/50">sale price</div>
                </>
              ) : (
                <>
                  <div className="font-serif text-3xl md:text-4xl text-gold-300">{formatKES(property.rent)}</div>
                  <div className="text-sm text-ivory-200/50">per month</div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {property.images.length > 0 && (
        <section className="section-padding py-12 bg-ivory-50">
          <div className="max-w-9xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
              <div className="lg:col-span-2 aspect-[16/10] overflow-hidden bg-stone-200">
                <img
                  src={property.images[activeImage]?.url}
                  alt={property.images[activeImage]?.alt || property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                {property.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`aspect-[16/9] overflow-hidden bg-stone-200 transition-all duration-300 ${
                      activeImage === i ? 'ring-2 ring-gold-400' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="font-serif text-2xl text-navy-900 mb-5">About this property</h2>
                <p className="text-stone-500 leading-relaxed mb-8 whitespace-pre-line">{property.description}</p>

                {property.amenities.length > 0 && (
                  <>
                    <h3 className="font-serif text-xl text-navy-900 mb-4">Features & Amenities</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                      {property.amenities.map((amenity) => (
                        <div key={amenity} className="flex items-center gap-2 text-sm text-stone-600">
                          <Check className="w-4 h-4 text-forest-500 shrink-0" />
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Key specs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-200 mb-8">
                  {[
                    { icon: Maximize, label: 'Area', value: property.area || 'N/A' },
                    { icon: BedDouble, label: 'Bedrooms', value: property.bedrooms != null ? property.bedrooms.toString() : 'N/A' },
                    { icon: Bath, label: 'Bathrooms', value: property.bathrooms != null ? property.bathrooms.toString() : 'N/A' },
                    { icon: Calendar, label: 'Listed', value: new Date(property.createdAt).toLocaleDateString('en-KE', { month: 'short', day: 'numeric' }) },
                  ].map((spec) => (
                    <div key={spec.label} className="bg-white p-5 text-center">
                      <spec.icon className="w-5 h-5 text-navy-500 mx-auto mb-2" />
                      <div className="text-sm font-medium text-navy-900">{spec.value}</div>
                      <div className="text-xs text-stone-400">{spec.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enquiry sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white border border-stone-200 p-6 sticky top-24">
                  <h3 className="font-serif text-xl text-navy-900 mb-2">Interested in this property?</h3>
                  <p className="text-sm text-stone-500 mb-6">Contact our team to arrange a viewing or request more information.</p>
                  <Link to="/contact" className="btn-primary w-full mb-3">
                    Request a Viewing
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="tel:0115277610" className="btn-outline w-full">
                    <Phone className="w-4 h-4" />
                    Call 0115 277 610
                  </a>
                  <div className="mt-6 pt-6 border-t border-stone-100">
                    <div className="text-xs text-stone-400 leading-relaxed">
                      All viewings are accompanied by a Murivest Lettings representative.
                      {property.listingType === 'lease' ? ' Tenancy subject to vetting and lease agreement.' : ' Sale subject to due diligence and agreement.'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="section-padding py-16 bg-white">
          <div className="max-w-9xl mx-auto">
            <SectionHeader label="More Properties" title={`Other ${property.type.toLowerCase()} properties`} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/properties/${p.slug}`} className="group card-institutional overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    {p.images[0] ? (
                      <img src={p.images[0].url} alt={p.images[0].alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Building2 className="w-10 h-10 text-stone-300" />
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-stone-400 mb-2">{p.location}</div>
                    <h3 className="font-serif text-base text-navy-900 mb-3 group-hover:text-navy-700 transition-colors leading-snug">{p.title}</h3>
                    <div className="font-serif text-lg text-navy-900">
                      {p.displayPrice || (p.listingType === 'sale' && p.price ? formatKES(p.price) : formatKES(p.rent))}
                      <span className="text-xs text-stone-400 font-sans">{p.displayPrice || p.listingType === 'sale' ? '' : '/mo'}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
