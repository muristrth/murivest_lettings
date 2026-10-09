import { useState, useMemo, useEffect, useCallback, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Filter, Loader2, AlertCircle, Building2, Landmark,
  ArrowRight, Globe2, X,
} from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand } from '@/components/ui';
import { JsonLd, ORGANIZATION_SCHEMA } from '@/components/JsonLd';
import { PropertyBriefCard } from '@/components/PropertyBriefCard';
import {
  fetchAllProperties,
  isSanityConfigured,
  type SanityProperty,
} from '@/lib/sanity';
import { type PropertyListing } from '@/lib/data';
import {
  detectMarket, isCommercial, sanityToListing,
  MANDATE_MARKETS, COMMERCIAL_CATEGORIES, COMMERCIAL_SUBTYPES,
  categoryForSubtype,
} from '@/lib/properties';

export type MarketFilter = 'All' | string;
export type CategoryFilter = 'All' | string;
export type ListingFilter = 'All' | 'lease' | 'sale';
export type AvailabilityFilter = 'All' | 'Available';

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

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchAllProperties();
        if (!cancelled) {
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

  const presentMarkets = useMemo(() => {
    const found = new Map<string, (typeof MANDATE_MARKETS)[number]>();
    for (const p of properties) {
      const m = detectMarket(p.location);
      if (m && !found.has(m.code)) found.set(m.code, m);
    }
    return MANDATE_MARKETS.filter((m) => found.has(m.code));
  }, [properties]);

  const presentCategories = useMemo(() => {
    const subtypesPresent = new Set(properties.map((p) => p.subtype));
    return COMMERCIAL_CATEGORIES.filter((c) =>
      c.subtypes.some((s) => subtypesPresent.has(s)),
    );
  }, [properties]);

  const availableSubtypes = useMemo(() => {
    if (filterCategory === 'All') return COMMERCIAL_SUBTYPES;
    const cat = COMMERCIAL_CATEGORIES.find((c) => c.label === filterCategory);
    const pool = cat ? cat.subtypes : COMMERCIAL_SUBTYPES;
    const present = new Set(properties.map((p) => p.subtype));
    return pool.filter((s: string) => present.has(s));
  }, [filterCategory, properties]);

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

      <PageHero
        label="PROPERTY INTELLIGENCE"
        title="Commercial Properties for Lease"
        subtitle="Murivest provides discreet access to selected commercial property opportunities — office, retail, warehouse and industrial assets — for occupiers, owners and institutional requirements across the United Kingdom, UAE, Kenya, South Africa and the United States."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties', path: '/properties' }]}
      />

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
              {availableSubtypes.map((s: boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | Key | null | undefined) => (
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

          {loading && (
            <div className="flex flex-col items-center justify-center py-20" role="status">
              <Loader2 className="w-8 h-8 text-navy-400 animate-spin mb-4" />
              <p className="text-stone-400">Loading property briefs…</p>
            </div>
          )}

          {!loading && error && (
            <div className="flex flex-col items-center justify-center py-20" role="alert">
              <AlertCircle className="w-8 h-8 text-red-400 mb-4" />
              <p className="text-stone-500 mb-2">Unable to load properties at this time.</p>
              <p className="text-sm text-stone-400">{error}</p>
            </div>
          )}

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

export default PropertiesIndexPage;
