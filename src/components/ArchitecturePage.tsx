import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2, AlertCircle, Building2 } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';
import { PropertyBriefCard } from '@/components/PropertyBriefCard';
import { ARCH_BY_PATH, breadcrumbsFor, linkLabel, type ListingSpec } from '@/lib/architecture';
import { fetchAllProperties, isSanityConfigured } from '@/lib/sanity';
import { matchesListing, sanityToListing } from '@/lib/properties';
import type { PropertyListing } from '@/lib/data';

/* One shared fetch per page load: architecture pages reuse the existing helper. */
let listingsPromise: Promise<PropertyListing[]> | null = null;
function loadListings(): Promise<PropertyListing[]> {
  if (!listingsPromise) {
    listingsPromise = fetchAllProperties()
      .then((rows) => rows.map(sanityToListing))
      .catch((err) => {
        listingsPromise = null; // allow a retry on the next mount
        throw err;
      });
  }
  return listingsPromise;
}

const MAX_LISTINGS = 6;

function ListingSection({ spec }: { spec: ListingSpec }) {
  const [all, setAll] = useState<PropertyListing[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    if (!isSanityConfigured) {
      setAll([]);
      return;
    }
    loadListings()
      .then((rows) => { if (!cancelled) setAll(rows); })
      .catch(() => { if (!cancelled) setFailed(true); });
    return () => { cancelled = true; };
  }, []);

  const matches = useMemo(() => (all ? all.filter((p) => matchesListing(p, spec)) : []), [all, spec]);

  return (
    <section className="section-padding py-16 bg-white border-t border-stone-200" aria-labelledby="listing-heading">
      <div className="max-w-9xl mx-auto">
        <div className="mb-8">
          <h2 id="listing-heading" className="font-serif text-2xl md:text-3xl text-navy-900">{spec.heading}</h2>
          {all && !failed && matches.length > 0 && (
            <p className="text-sm text-stone-500 mt-2">
              Showing {Math.min(matches.length, MAX_LISTINGS)} of {matches.length} matching{' '}
              {matches.length === 1 ? 'property' : 'properties'}
            </p>
          )}
        </div>

        {!all && !failed && (
          <div className="flex items-center gap-3 py-10 text-stone-500" role="status">
            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
            Loading current availability…
          </div>
        )}

        {failed && (
          <div className="flex items-start gap-3 py-8 text-stone-600" role="alert">
            <AlertCircle className="w-5 h-5 text-stone-400 mt-0.5" aria-hidden="true" />
            <p>
              Current availability could not be loaded right now. You can still{' '}
              <Link to="/properties" className="underline underline-offset-4 text-navy-700">browse all properties</Link>{' '}
              or <Link to="/contact" className="underline underline-offset-4 text-navy-700">contact us</Link>.
            </p>
          </div>
        )}

        {all && !failed && matches.length === 0 && (
          <div className="border border-dashed border-stone-300 p-8 text-center max-w-2xl">
            <Building2 className="w-8 h-8 text-stone-300 mx-auto mb-3" aria-hidden="true" />
            <p className="text-stone-600">No matching properties are currently published here.</p>
            <p className="text-sm text-stone-500 mt-2">
              Tell us what you need and we will search on your behalf, or see{' '}
              <Link to="/properties" className="underline underline-offset-4 text-navy-700">all properties</Link>.
            </p>
          </div>
        )}

        {all && !failed && matches.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {matches.slice(0, MAX_LISTINGS).map((p, i) => (
                <PropertyBriefCard key={p.id} property={p} eagerImage={i < 1} />
              ))}
            </div>
            <div className="mt-8">
              <Link to="/properties" className="inline-flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-gold-700">
                View all properties
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export function ArchitecturePage({ path }: { path: string }) {
  const page = ARCH_BY_PATH[path];
  const crumbs = useMemo(() => breadcrumbsFor(path), [path]);

  if (!page) return null;

  const portalLink = path === '/portals/landlord' ? '/portal/landlord' : path === '/portals/tenant' ? '/portal/tenant' : null;

  return (
    <>
      <Seo title={page.title} description={page.description} path={page.path} breadcrumbs={crumbs} noindex={page.noindex} />
      <PageHero label={page.eyebrow} title={page.h1} subtitle={page.lead} breadcrumbs={crumbs} />

      {page.sections.map((s, i) => (
        <section key={s.heading} className={`section-padding py-14 lg:py-16 ${i % 2 === 0 ? 'bg-ivory-50' : 'bg-white'}`}>
          <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-2xl md:text-3xl text-navy-900 leading-tight">{s.heading}</h2>
            </div>
            <div className="lg:col-span-8 max-w-3xl">
              {s.paragraphs?.map((t) => (
                <p key={t} className="text-stone-600 leading-relaxed mb-5 last:mb-0">{t}</p>
              ))}
              {s.items && (
                <div className={s.paragraphs ? 'mt-6' : ''}>
                  <CheckList items={s.items} />
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {page.listing && <ListingSection spec={page.listing} />}

      {page.related.length > 0 && (
        <section className="section-padding py-16 bg-ivory-50 border-t border-stone-200">
          <div className="max-w-9xl mx-auto">
            <SectionHeader label="Continue" title="Related pages" />
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {page.related.map((r) => (
                <li key={r}>
                  <Link
                    to={r}
                    className="group flex items-center justify-between gap-3 bg-white border border-stone-200 px-5 py-4 text-navy-900 hover:border-gold-400 transition-colors"
                  >
                    <span className="font-medium">{linkLabel(r)}</span>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-gold-600 group-hover:translate-x-1 transition-all" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand
        title={page.ctaTitle ?? 'Speak to Murivest Lettings about your requirement'}
        description={page.ctaText ?? 'Tell us what you need and our team will respond with how we can help.'}
        primaryLabel={portalLink ? 'Open the portal' : 'Contact Murivest Lettings'}
        primaryLink={portalLink ?? '/contact'}
        secondaryLabel={portalLink ? 'Contact us' : 'Browse properties'}
        secondaryLink={portalLink ? '/contact' : '/properties'}
      />
    </>
  );
}
