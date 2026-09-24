import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader } from '@/components/ui';
import { SERVICES, getServiceBySlug, formatKES } from '@/lib/data';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {};

export function ServicesIndexPage() {
  return (
    <>
      <Seo
        title="Property Services | Murivest Lettings"
        description="Comprehensive property management, leasing, advisory, tenant advisory, performance reporting, international client services, takeover management and audit & valuation services in Kenya."
        path="/services"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]}
      />
      <PageHero
        label="Our Services"
        title="Eight specialised service lines. One operating platform."
        subtitle="From day-to-day management to strategic advisory, each service is delivered with institutional rigour, full documentation and complete transparency."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className={`group card-institutional p-8 lg:p-10 ${i % 2 === 1 ? 'lg:translate-y-8' : ''}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="label-text text-gold-500">0{i + 1}</div>
                  <ArrowRight className="w-5 h-5 text-stone-300 group-hover:text-navy-900 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <h3 className="font-serif text-2xl text-navy-900 mb-3 group-hover:text-navy-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-500 leading-relaxed mb-5">{service.tagline}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((f) => (
                    <span key={f.title} className="text-xs px-3 py-1.5 bg-stone-100 text-stone-600">
                      {f.title}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        description="Speak with our team and we'll recommend the right approach for your property and objectives."
        primaryLabel="Request a Consultation"
        primaryLink="/contact"
        secondaryLabel="View Properties"
        secondaryLink="/properties"
      />
    </>
  );
}

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <Navigate to="/services" replace />;

  const currentIndex = SERVICES.findIndex((s) => s.slug === service.slug);
  const nextService = SERVICES[(currentIndex + 1) % SERVICES.length];

  return (
    <>
      <Seo
        title={`${service.title} | Murivest Lettings`}
        description={service.description}
        path={`/services/${service.slug}`}
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: service.shortTitle, path: `/services/${service.slug}` }]}
        serviceSchema={{
          name: service.title,
          description: service.description,
          path: `/services/${service.slug}`,
          serviceType: service.title,
        }}
      />

      <PageHero
        label={`Service 0${currentIndex + 1} of 0${SERVICES.length}`}
        title={service.title}
        subtitle={service.tagline}
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: service.shortTitle, path: `/services/${service.slug}` }]}
      />

      {/* Description & Features */}
      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="font-serif text-2xl text-navy-900 mb-5">Overview</h2>
              <p className="text-stone-500 leading-relaxed">{service.description}</p>

              <div className="mt-8 bg-white border border-stone-200 p-6">
                <h3 className="label-text text-gold-500 mb-4">Key Outcomes</h3>
                <ul className="space-y-3">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <Check className="w-4 h-4 mt-0.5 text-forest-500 shrink-0" />
                      <span className="text-sm text-stone-600 leading-relaxed">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl text-navy-900 mb-5">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200">
                {service.features.map((feature) => (
                  <div key={feature.title} className="bg-white p-6">
                    <h3 className="font-serif text-base text-navy-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-stone-500 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="How It Works"
            title={`Our ${service.shortTitle.toLowerCase()} process`}
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {service.process.map((step) => (
              <div key={step.step} className="relative">
                <div className="font-serif text-5xl text-gold-200 mb-4">{step.step}</div>
                <h3 className="font-serif text-lg text-navy-900 mb-3">{step.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding py-20 bg-ivory-100">
        <div className="max-w-3xl mx-auto">
          <SectionHeader label="FAQ" title="Common questions" centered />
          <div className="space-y-4">
            {service.faqs.map((faq) => (
              <div key={faq.q} className="bg-white border border-stone-200 p-6">
                <h3 className="font-serif text-lg text-navy-900 mb-3">{faq.q}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Service */}
      <section className="section-padding py-16 bg-navy-950">
        <div className="max-w-9xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="label-text text-gold-300 mb-2">Next Service</div>
            <Link to={`/services/${nextService.slug}`} className="font-serif text-2xl md:text-3xl text-ivory-50 hover:text-gold-300 transition-colors">
              {nextService.title}
            </Link>
          </div>
          <Link to={`/services/${nextService.slug}`} className="btn-gold">
            Continue
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CtaBand
        title={`Ready to engage our ${service.shortTitle.toLowerCase()} service?`}
        description="Contact our team to discuss your specific requirements and receive a tailored proposal."
        primaryLabel="Request a Consultation"
        primaryLink="/contact"
        secondaryLabel="All Services"
        secondaryLink="/services"
      />
    </>
  );
}
