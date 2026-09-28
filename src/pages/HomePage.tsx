import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Building2, KeySquare, Lightbulb, TrendingUp, Globe,
  ArrowRightCircle, ClipboardCheck, Users, BarChart3, Coins,
  LogOut, RefreshCw, ShieldCheck, FileBarChart, Phone,
} from 'lucide-react';
import { Seo } from '@/components/Seo';
import { SectionHeader, CtaBand } from '@/components/ui';
import { SERVICES, LIFECYCLE_STAGES, formatKES } from '@/lib/data';
import { fetchFeaturedProperties, isSanityConfigured } from '@/lib/sanity';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2, KeySquare, Lightbulb, TrendingUp, Globe, ArrowRightCircle,
  ClipboardCheck, Users, BarChart3, Coins, LogOut, RefreshCw,
};

export function HomePage() {
  const [featuredProperties, setFeaturedProperties] = useState<Array<{ id: string; slug: string; title: string; type: string; location: string; rent: number; rentPeriod?: string; displayPrice?: string | null; availability: string; featured: boolean; images: { url: string; alt: string }[] }>>([]);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      if (!isSanityConfigured) {
        if (!cancelled) setFeaturedProperties([]);
        return;
      }
      try {
        const data = await fetchFeaturedProperties(3);
        if (!cancelled) {
          setFeaturedProperties(data.map((p) => ({
            id: p._id,
            slug: p.slug.current,
            title: p.title,
            type: p.propertyType,
            location: p.location,
            rent: p.rent,
            rentPeriod: 'month',
            displayPrice: p.displayPrice,
            availability: p.availability,
            featured: p.featured,
            images: p.images,
          })));
        }
      } catch (error) {
        console.error('Unable to load featured properties', error);
        if (!cancelled) setFeaturedProperties([]);
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  return (
    <>
      <Seo
        title="Murivest Lettings | Property Management, Leasing & Advisory in Kenya"
        description="Murivest Lettings provides professional property management, leasing and landlord advisory services for commercial and residential property owners in Nairobi and Kenya."
        path="/"
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-navy-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/90 to-navy-900" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1920)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
        </div>

        <div className="relative section-padding pt-32 pb-20 w-full">
          <div className="max-w-9xl mx-auto">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6 animate-fade-in">
                <div className="h-px w-12 bg-gold-400" />
                <span className="label-text text-gold-300">A Division of Murivest Group Ltd</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-ivory-50 leading-[1.05] animate-fade-in-up">
                Property Management.<br />
                Leasing. Advisory.<br />
                <span className="text-gold-300">Performance.</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl text-ivory-200/70 leading-relaxed max-w-2xl animate-fade-in-delay">
                The digital property operating platform for landlords, tenants and investors
                who expect institutional competence, transparency and long-term stewardship
                of their real estate assets in Kenya.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-delay">
                <Link to="/contact" className="btn-gold">
                  Request a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="btn-outline-light">
                  Explore Services
                </Link>
              </div>

              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
                {[
                  { value: 'KES 4.2B+', label: 'Assets Under Management' },
                  { value: '340+', label: 'Units Managed' },
                  { value: '98.4%', label: 'Rent Collection Rate' },
                  { value: '21 Days', label: 'Avg. Void Period' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-serif text-2xl md:text-3xl text-gold-300">{stat.value}</div>
                    <div className="text-xs text-ivory-200/60 mt-1 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ivory-50 to-transparent" />
      </section>

      {/* Lifecycle */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="The Murivest Method"
            title="One platform. The complete property lifecycle."
            subtitle="From day-to-day management to strategic exit and reinvestment, we connect every stage of property ownership into a single, coherent operating system — keeping your experience simple while we handle the complexity."
            centered
          />

          <div className="mt-16">
            <div className="relative">
              <div className="hidden lg:block absolute top-8 left-[6%] right-[6%] h-px bg-stone-200" />
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-2">
                {LIFECYCLE_STAGES.map((stage, i) => {
                  const Icon = ICONS[stage.icon] || Building2;
                  return (
                    <Link
                      key={stage.id}
                      to="/services"
                      className="group flex flex-col items-center text-center relative z-10"
                      style={{ animationDelay: `${i * 80}ms` }}
                    >
                      <div className="w-16 h-16 rounded-full bg-white border-2 border-stone-200 flex items-center justify-center mb-3 transition-all duration-300 group-hover:border-gold-400 group-hover:bg-gold-50 group-hover:scale-105">
                        <Icon className="w-6 h-6 text-navy-700 transition-colors duration-300 group-hover:text-gold-600" />
                      </div>
                      <div className="label-text text-stone-400 mb-1" style={{ fontSize: '0.625rem' }}>0{i + 1}</div>
                      <div className="text-sm font-medium text-navy-900 font-serif">{stage.label}</div>
                      <div className="text-xs text-stone-400 mt-1 leading-snug hidden lg:block max-w-[120px]">{stage.description}</div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding py-20 lg:py-28 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="What We Do"
            title="Institutional services for every property need"
            subtitle="Eight specialised service lines, each delivered with the rigour, documentation and transparency you would expect from a professional real estate firm."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 mt-12">
            {SERVICES.map((service) => {
              const Icon = ICONS[service.icon] || Building2;
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group bg-white p-8 transition-all duration-500 hover:bg-navy-950 hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-gold-400">
                    <Icon className="w-6 h-6 text-navy-700 transition-colors duration-300 group-hover:text-navy-950" />
                  </div>
                  <h3 className="font-serif text-xl text-navy-900 mb-3 transition-colors duration-300 group-hover:text-ivory-50">
                    {service.shortTitle}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed transition-colors duration-300 group-hover:text-ivory-200/70 mb-4">
                    {service.tagline}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-medium text-gold-500 transition-colors duration-300 group-hover:text-gold-300">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-100">
        <div className="max-w-9xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <SectionHeader
              label="Available Properties"
              title="Featured listings under our management"
              subtitle="A selection of residential and commercial properties currently available for lease through Murivest Lettings."
            />
            <Link to="/properties" className="btn-outline shrink-0">
              View All Properties
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Link
                key={property.id}
                to={`/properties/${property.slug}`}
                className="group card-institutional overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                  <img
                    src={property.images[0].url}
                    alt={property.images[0].alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-white/95 text-navy-900 backdrop-blur-sm">
                      {property.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-stone-400 mb-2">{property.location}</div>
                  <h3 className="font-serif text-lg text-navy-900 mb-3 group-hover:text-navy-700 transition-colors leading-snug">
                    {property.title}
                  </h3>
                  <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                    <div>
                      {property.displayPrice ? (
                        <div className="font-serif text-xl text-navy-900">{property.displayPrice}</div>
                      ) : (
                        <>
                          <div className="font-serif text-xl text-navy-900">{formatKES(property.rent)}</div>
                          <div className="text-xs text-stone-400">per {property.rentPeriod}</div>
                        </>
                      )}
                    </div>
                    <div className="text-xs text-forest-600 font-medium">{property.availability}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Landlord & Tenant Dual Section */}
      <section className="section-padding py-20 lg:py-28 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Portals"
            title="Purpose-built experiences for every stakeholder"
            subtitle="Landlords, tenants and property managers each get a dedicated portal with the tools, information and controls relevant to their role."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Landlord */}
            <div className="bg-navy-950 p-10 lg:p-12 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-400/5 rounded-full blur-3xl" />
              <div className="relative">
                <div className="w-14 h-14 bg-gold-400/10 flex items-center justify-center mb-6 border border-gold-400/20">
                  <Building2 className="w-7 h-7 text-gold-300" />
                </div>
                <h3 className="font-serif text-2xl text-ivory-50 mb-4">For Landlords</h3>
                <p className="text-ivory-200/70 leading-relaxed mb-6">
                  Full visibility into your portfolio — rent collection, maintenance, financial
                  statements, document storage and approval workflows, all in one secure portal.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Live portfolio dashboard', 'Monthly financial statements', 'Maintenance request approvals', 'Document vault with lease records', 'Performance benchmarking'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-ivory-200/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/portal/landlord" className="btn-gold">
                  Access Landlord Portal
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tenant */}
            <div className="bg-stone-100 p-10 lg:p-12 border border-stone-200 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-navy-400/5 rounded-full blur-3xl" />
              <div className="relative">
                <div className="w-14 h-14 bg-navy-100 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-navy-700" />
                </div>
                <h3 className="font-serif text-2xl text-navy-900 mb-4">For Tenants</h3>
                <p className="text-stone-500 leading-relaxed mb-6">
                  A simple, transparent tenancy experience — pay rent online, log maintenance
                  requests, access your lease documents and communicate with your property manager.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Online rent payment', 'Maintenance request tracking', 'Lease document access', 'Direct manager communication', 'Payment history records'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-stone-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-navy-700" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/portal/tenant" className="btn-primary">
                  Access Tenant Portal
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Standards */}
      <section className="section-padding py-20 lg:py-28 bg-navy-900 text-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="label-text text-gold-300 mb-4">Why Murivest</div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory-50 leading-tight mb-6">
                Institutional standards. <br />Personal relationships.
              </h2>
              <p className="text-ivory-200/70 text-lg leading-relaxed mb-8">
                We bring the discipline, documentation and analytical rigour of an institutional
                real estate firm to the management of your property — while maintaining the
                personal, relationship-driven service that distinguishes true professional stewardship.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, title: 'Trusted Custodian', desc: 'Your assets managed with fiduciary discipline and full transparency.' },
                  { icon: FileBarChart, title: 'Audit-Ready', desc: 'Every transaction, maintenance job and tenant interaction documented.' },
                  { icon: TrendingUp, title: 'Performance-Focused', desc: 'Decisions driven by data, market comparables and yield analysis.' },
                  { icon: Phone, title: 'Always Reachable', desc: 'A dedicated property manager who knows your portfolio by name.' },
                ].map((item) => (
                  <div key={item.title} className="border-l border-gold-400/30 pl-5">
                    <item.icon className="w-6 h-6 text-gold-300 mb-3" />
                    <h4 className="font-serif text-lg text-ivory-50 mb-2">{item.title}</h4>
                    <p className="text-sm text-ivory-200/60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Professional property management team in consultation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-gold-400 p-8 max-w-xs hidden md:block">
                <div className="font-serif text-4xl text-navy-950">15+</div>
                <div className="text-sm text-navy-800 mt-2 leading-snug">Years of combined property management experience in the Kenyan market</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to professionalise your property management?"
        description="Whether you own one property or a portfolio of fifty, our team is ready to discuss how Murivest Lettings can protect and grow your investment."
        primaryLabel="Request a Consultation"
        primaryLink="/contact"
        secondaryLabel="View Available Properties"
        secondaryLink="/properties"
      />
    </>
  );
}
