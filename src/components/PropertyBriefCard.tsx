import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, MapPin } from 'lucide-react';
import type { PropertyListing } from '@/lib/data';
import {
  classificationFor, listingTypeLabel, commercialTerms,
  availabilityTone, buildAltText, SUBTYPE_ICONS,
} from '@/lib/properties';

interface PropertyBriefCardProps {
  property: PropertyListing;
  eagerImage?: boolean;
}

/**
 * Directory / related-property card. Image anchor (fixed 4:3 box, so no layout
 * shift), editorial category, location, title, compact facts, commercial terms,
 * and a subtle CTA. Only existing fields are rendered.
 */
export function PropertyBriefCard({ property, eagerImage = false }: PropertyBriefCardProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const SubIcon = SUBTYPE_ICONS[property.subtype] || Building2;
  const tone = availabilityTone(property.availability);
  const terms = commercialTerms(property);
  const primary = property.images?.[0]?.url;
  const showImage = Boolean(primary) && !imgFailed;

  const facts: string[] = [property.subtype];
  if (property.area) facts.push(property.area);
  if (property.bedrooms != null) facts.push(`${property.bedrooms} bed`);
  if (property.bathrooms != null) facts.push(`${property.bathrooms} bath`);

  return (
    <Link
      to={`/properties/${property.slug}`}
      className="group card-institutional overflow-hidden flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        {showImage ? (
          <img
            src={primary}
            alt={buildAltText(property, 0)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            loading={eagerImage ? 'eager' : 'lazy'}
            decoding="async"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-ivory-100 to-stone-100">
            <SubIcon className="w-8 h-8 text-stone-300" />
            <span className="text-xs tracking-wide text-stone-500">{classificationFor(property.subtype)}</span>
          </div>
        )}
        <span
          className={`absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium ${tone.chip}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${tone.dot}`} aria-hidden="true" />
          {property.availability}
        </span>
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className="label-text text-gold-700">{classificationFor(property.subtype)}</span>
          <span className="text-xs text-stone-500">{listingTypeLabel(property.listingType)}</span>
        </div>

        <h3 className="font-serif text-lg sm:text-xl text-navy-900 leading-snug mb-2 group-hover:text-navy-700 transition-colors">
          {property.title}
        </h3>

        <p className="flex items-start gap-1.5 text-sm text-stone-600 mb-4">
          <MapPin className="w-4 h-4 text-navy-400 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{property.location}</span>
        </p>

        <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-stone-600 mb-5">
          {facts.map((f, i) => (
            <li key={`${f}-${i}`} className="flex items-center gap-3">
              {i > 0 && <span className="w-px h-3 bg-stone-300" aria-hidden="true" />}
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4 border-t border-stone-100 flex items-end justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[11px] uppercase tracking-wide text-stone-500">{terms.label}</div>
            <div className={`font-serif text-lg text-navy-900 ${terms.kind === 'poa' ? 'italic text-stone-600' : ''}`}>
              {terms.value}
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-navy-700 group-hover:text-gold-700 transition-colors whitespace-nowrap">
            View Property Brief
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
