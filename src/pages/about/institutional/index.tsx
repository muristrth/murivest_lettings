import { ShieldCheck, Target, Eye, Users, FileBarChart, BarChart3, Check } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function AboutInstitutionalPage() {
  return (
    <>
      <Seo
        title="Institutional Credentials | Murivest Lettings"
        description="Murivest Lettings operates with the documentation, transparency and analytical rigour expected of an institutional real estate platform."
        path="/about/institutional"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }, { name: 'Institutional Standards', path: '/about/institutional' }]}
      />
      <PageHero
        label="Institutional Grade"
        title="Built for institutional investors"
        subtitle="Every property is managed with the same rigour, documentation and reporting standards as an institutional real estate fund — regardless of size."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }, { name: 'Institutional Standards', path: '/about/institutional' }]}
      />

      {/* Standards */}
      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader label="Our Standards" title="Institutional discipline. Applied universally." />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  At Murivest Lettings, we apply the same institutional-grade standards to every
                  property — whether it's a single residential unit or a multi-building commercial
                  portfolio. This is not a differentiator; it is our standard.
                </p>
                <p>
                  Our approach is grounded in documented processes, full financial transparency,
                  and rigorous performance monitoring. Every decision is tracked, every expenditure
                  is justified, and every outcome is measured against market benchmarks.
                </p>
              </div>
              <div className="mt-8">
                <CheckList items={[
                  'Documented procedures for every operational process',
                  'Monthly financial statements with full reconciliation',
                  'Quarterly performance reviews with benchmarking',
                  'Annual independent compliance audits',
                  'Digital-first documentation and record keeping',
                  'Risk assessment embedded in every process step',
                  'Insurance coverage verification for all managed assets',
                  'Statutory compliance monitoring and reporting',
                ]} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: FileBarChart, value: '100%', label: 'Documentation Rate' },
                { icon: BarChart3, value: '4.5x', label: 'Reporting Ratio' },
                { icon: ShieldCheck, value: '100%', label: 'Compliance Score' },
                { icon: Target, value: '98.4%', label: 'Collection Rate' },
              ].map((stat) => (
                <div key={stat.label} className="text-center border border-stone-200 p-6 card-institutional">
                  <stat.icon className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                  <div className="font-serif text-3xl text-navy-900">{stat.value}</div>
                  <div className="text-xs text-stone-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-padding py-20 bg-navy-950 text-ivory-50">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Compliance & Documentation"
            title="Full audit-readiness at all times"
            subtitle="Every transaction, every maintenance job, every tenant interaction — documented and auditable."
            centered
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { icon: ShieldCheck, title: 'Legal Compliance', desc: 'Full adherence to Kenyan landlord-tenant law, health and safety regulations, and statutory requirements.' },
              { icon: FileBarChart, title: 'Audit Trail', desc: 'Complete digital record of every financial transaction, maintenance request, and tenant communication.' },
              { icon: BarChart3, title: 'Financial Controls', desc: 'Segregated client accounts, independent reconciliation, and quarterly financial reviews.' },
              { icon: Target, title: 'Quality Assurance', desc: 'Regular inspections, vendor performance reviews, and continuous process improvement.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-gold-300" />
                </div>
                <h3 className="font-serif text-lg text-ivory-50 mb-3">{item.title}</h3>
                <p className="text-sm text-ivory-200/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to elevate your property management"
        description="Experience institutional-grade property management with transparent reporting and dedicated support."
        primaryLabel="Request a Consultation"
        primaryLink="/contact"
        secondaryLabel="Our Approach"
        secondaryLink="/about/approach"
      />
    </>
  );
}

export default AboutInstitutionalPage;
