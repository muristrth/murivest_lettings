import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Target, Eye, Heart, Building2, Globe2, Users, Briefcase, Check } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function AboutPage() {
  return (
    <>
      <Seo
        title="About Murivest Lettings | Murivest Group Ltd"
        description="Murivest Lettings is the property management and leasing division of Murivest Group Ltd, bringing institutional discipline to real estate services across Kenya."
        path="/about"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]}
      />
      <PageHero
        label="About Us"
        title="Institutional real estate. Built on relationships."
        subtitle="Murivest Lettings is the property management, leasing and advisory division of Murivest Group Ltd — bringing institutional discipline to the stewardship of property in Kenya."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]}
      />

      {/* Story */}
      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader label="Our Story" title="A division built on a simple principle" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Murivest Group Ltd was established with a vision to bring institutional-quality
                  real estate services to the Kenyan market — a market historically served by
                  informal agents and fragmented service providers.
                </p>
                <p>
                  Murivest Lettings was created as the operational arm of that vision: a division
                  dedicated to the professional management, leasing and advisory of commercial and
                  residential property, with the documentation, transparency and analytical rigour
                  that institutional investors expect.
                </p>
                <p>
                  Today, we manage a growing portfolio across Nairobi and key Kenyan markets, serving
                  landlords ranging from single-property owners to diaspora investors and institutional
                  portfolios. Every property receives the same standard of care.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Murivest team in professional setting"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-navy-950 p-6 max-w-[240px] hidden md:block">
                <div className="label-text text-gold-300 mb-2">Murivest Group Ltd</div>
                <div className="text-sm text-ivory-200/80 leading-relaxed">Parent company and registered legal entity behind Murivest Lettings.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Our Values"
            title="What we stand for"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { icon: ShieldCheck, title: 'Discretion', desc: 'We protect client confidentiality and handle every transaction with the utmost discretion.' },
              { icon: Target, title: 'Competence', desc: 'Institutional-grade systems, documentation and processes applied to every property.' },
              { icon: Eye, title: 'Transparency', desc: 'Full visibility into financials, operations and property condition through our portal.' },
              { icon: Heart, title: 'Relationships', desc: 'Long-term partnerships built on trust, not transactional interactions.' },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-navy-50 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-navy-700" />
                </div>
                <h3 className="font-serif text-xl text-navy-900 mb-3">{value.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding py-20 bg-navy-900 text-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="border-l border-gold-400/30 pl-8">
              <div className="label-text text-gold-300 mb-4">Our Mission</div>
              <h2 className="font-serif text-3xl text-ivory-50 mb-5 leading-tight">
                To professionalise property ownership in Kenya
              </h2>
              <p className="text-ivory-200/70 leading-relaxed">
                We exist to give every property owner — regardless of portfolio size — access to
                institutional-grade management, transparent reporting and intelligent advisory that
                protects and grows their real estate investment over the long term.
              </p>
            </div>
            <div className="border-l border-gold-400/30 pl-8">
              <div className="label-text text-gold-300 mb-4">Our Vision</div>
              <h2 className="font-serif text-3xl text-ivory-50 mb-5 leading-tight">
                The trusted operating platform for Kenyan real estate
              </h2>
              <p className="text-ivory-200/70 leading-relaxed">
                To be the platform that landlords, tenants and investors turn to when they want
                property managed with the same rigour, documentation and performance focus as an
                institutional real estate fund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 'KES 4.2B+', label: 'Assets Under Management' },
              { value: '340+', label: 'Units Managed' },
              { value: '15+', label: 'Years Combined Experience' },
              { value: '98.4%', label: 'Rent Collection Rate' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-4xl lg:text-5xl text-navy-900 mb-2">{stat.value}</div>
                <div className="text-sm text-stone-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's discuss your property"
        description="Whether you're a single-property owner or managing a portfolio, our team is ready to help."
        primaryLabel="Get in Touch"
        primaryLink="/contact"
        secondaryLabel="Our Services"
        secondaryLink="/services"
      />
    </>
  );
}

export default AboutPage;
