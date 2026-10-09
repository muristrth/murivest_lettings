import { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ArrowRight, MapPin, Building2, ShieldCheck, Globe2, FileText,
  ChevronLeft, ChevronRight, BarChart3, Info, ArrowUpRight, Phone, Calendar,
  Loader2,
} from 'lucide-react';
import { Seo } from '@/components/Seo';
import { CtaBand, SectionHeader } from '@/components/ui';
import { JsonLd, ORGANIZATION_SCHEMA } from '@/components/JsonLd';
import { PropertyBriefCard } from '@/components/PropertyBriefCard';
import { type PropertyListing } from '@/lib/data';
import {
  fetchPropertyBySlug, fetchRelatedProperties,
} from '@/lib/sanity';
import {
  detectMarket, isCommercial, sanityToListing,
  classificationFor, listingTypeLabel, commercialTerms,
  availabilityTone, occupierProfileFor,
  buildSeoTitle, buildMetaDescription, buildAltText,
  SUBTYPE_ICONS, MANDATE_MARKETS, truncateWords,
  type MandateMarket,
} from '@/lib/properties';

export function PropertyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [property, setProperty] = useState<PropertyListing | null>(null);
  const [related, setRelated] = useState<PropertyListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

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
            if (!isCommercial(listing)) {
              setProperty(null);
              setError('Property not found');
            } else {
              setProperty(listing);
              const rel = await fetchRelatedProperties(data.propertyType, data._id, 3);
              if (!cancelled) {
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

      <section className="bg-navy-950 section-padding pt-32 pb-14">
        <div className="max-w-9xl mx-auto">
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
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium tracking-[0.16em] bg-gold-400 text-navy-950">
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

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory-50 leading-tight">
                {property.title}
              </h1>

              <div className="flex items-center gap-2 text-ivory-200/60 mt-4">
                <MapPin className="w-4 h-4 text-gold-300 shrink-0" />
                {property.location}
                {market && <span className="text-ivory-200/40">— {market.label}</span>}
              </div>
            </div>

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

      <section className="section-padding py-14 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-14 min-w-0">

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

              {property.amenities.length > 0 && (
                <div>
                  <h3 className="font-serif text-xl text-navy-900 mb-4">Features &amp; Amenities</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {property.amenities.map((amenity) => (
                      <li
                        key={amenity}
                        className="flex items-center gap-2.5 text-sm text-stone-600 bg-white border border-stone-100 px-4 py-3"
                      >
                        <Building2 className="w-4 h-4 text-forest-500 shrink-0" />
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

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

              {images.length > 0 && (
                <div ref={galleryRef}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="label-text text-gold-600">IMAGE GALLERY</span>
                    <span className="flex-1 h-px bg-stone-200" />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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

      {related.length > 0 && (
        <section className="section-padding py-16 bg-white border-t border-stone-200">
          <div className="max-w-9xl mx-auto">
            <SectionHeader
              label="Further Property Opportunities"
              title="Related commercial briefs"
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

      <CtaBand
        title="Require a commercial property briefed to your specification?"
        description="Brief our advisory team with your occupational, locational or investment criteria. We identify suitable assets across our UK, UAE, Kenya, South Africa and US mandate markets — including opportunities not published online."
        primaryLabel="Discuss Corporate Requirements"
        primaryLink="/contact"
      />
    </>
  );
}

export default PropertyDetailPage;
