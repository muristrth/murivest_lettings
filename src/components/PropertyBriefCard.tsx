import { Link } from 'react-router-dom';
import {
  ArrowRight, Building2, Globe2,
} from 'lucide-react';
import type { PropertyListing } from '@/lib/data';
import {
  detectMarket, type MandateMarket,
  classificationFor, listingTypeLabel, commercialTerms,
  availabilityTone, categoryForSubtype, buildAltText,
  SUBTYPE_ICONS,
} from '@/lib/properties';

interface PropertyBriefCardProps {
  property: PropertyListing;
  market: MandateMarket | null;
  eagerImage?: boolean;
}

export function PropertyBriefCard({ property, market, eagerImage = false }: PropertyBriefCardProps) {
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

        <div className="absolute top-4 left-4 flex gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[7px] font-semibold tracking-[0.14em] bg-white/95 text-navy-900 backdrop-blur-sm">
            <SubIcon className="w-3 h-3" />
            {classificationFor(property.subtype)}
          </span>
          <span className="inline-flex items-center px-3 py-1.5 text-[7px] font-semibold tracking-[0.14em] bg-navy-950/85 text-ivory-50 backdrop-blur-sm">
            {listingTypeLabel(property.listingType)}
          </span>
        </div>

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

        <div className="flex items-center gap-1.5 text-sm text-stone-500 mb-2">
          <MapPin className="w-3.5 h-3.5 text-navy-400 shrink-0" />
          {property.location}
        </div>

        <h3 className="font-serif text-lg text-navy-900 leading-snug mb-4 group-hover:text-navy-700 transition-colors">
          {property.title}
        </h3>

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
