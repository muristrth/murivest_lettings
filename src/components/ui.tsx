import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

export function SectionHeader({
  label, title, subtitle, centered, light,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {label && (
        <div className={`label-text mb-4 ${light ? 'text-gold-300' : 'text-gold-500'}`}>{label}</div>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight ${light ? 'text-ivory-50' : 'text-navy-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base md:text-lg leading-relaxed ${light ? 'text-ivory-200/80' : 'text-stone-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function CtaBand({
  title, description, primaryLabel, primaryLink, secondaryLabel, secondaryLink,
}: {
  title: string;
  description: string;
  primaryLabel: string;
  primaryLink: string;
  secondaryLabel?: string;
  secondaryLink?: string;
}) {
  return (
    <section className="bg-navy-950 section-padding py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-ivory-50 mb-5">{title}</h2>
        <p className="text-ivory-200/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to={primaryLink} className="btn-gold">
            {primaryLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
          {secondaryLabel && secondaryLink && (
            <Link to={secondaryLink} className="btn-outline-light">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function CheckList({ items, light }: { items: string[]; light?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Check className={`w-4.5 h-4.5 mt-0.5 shrink-0 ${light ? 'text-gold-300' : 'text-forest-500'}`} />
          <span className={`text-sm leading-relaxed ${light ? 'text-ivory-200/80' : 'text-stone-600'}`}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PageHero({
  label, title, subtitle, breadcrumbs,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { name: string; path: string }[];
}) {
  return (
    <section className="bg-navy-950 section-padding pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="max-w-9xl mx-auto">
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-xs text-stone-500 mb-6">
            {breadcrumbs.map((bc, i) => (
              <span key={bc.path} className="flex items-center gap-2">
                {i > 0 && <span className="text-stone-600">/</span>}
                <Link to={bc.path} className="hover:text-gold-300 transition-colors">{bc.name}</Link>
              </span>
            ))}
          </nav>
        )}
        {label && <div className="label-text text-gold-300 mb-4">{label}</div>}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory-50 leading-tight max-w-4xl animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-ivory-200/70 leading-relaxed max-w-2xl animate-fade-in-delay">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
