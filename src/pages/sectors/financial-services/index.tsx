import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, FileBarChart } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function SectorsFinancialServicesPage() {
  return (
    <>
      <Seo
        title="Financial Services Properties | Murivest Lettings"
        description="Property services for financial institutions and banks in Kenya — secure premises, regulatory compliance and premium-grade office accommodation."
        path="/sectors/financial-services"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Financial Services', path: '/sectors/financial-services' }]}
      />
      <PageHero
        label="Sectors"
        title="Financial services"
        subtitle="Property services for financial institutions."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Financial Services', path: '/sectors/financial-services' }]}
      />

      {/* Sector Overview */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Sector Overview" title="Financial services property management" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Financial institutions operate in environments where security, regulatory compliance and business
                continuity are non-negotiable. We manage bank head offices, trading floors, branch networks and secure
                data facilities across Kenya, applying premium-grade building standards, rigorous access control and
                documentation that satisfies Central Bank of Kenya expectations.
              </p>
              <CheckList items={[
                'Bank head office buildings and trading floors',
                'Branch network premises and satellite offices',
                'Data centres and secure record storage',
                'Client meeting and presentation suites',
                'Call centres and back-office operations',
              ]} />
              <div className="mt-8">
                <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-gold-500 hover:text-gold-300">
                  Explore our sector-specialist services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Financial services office building"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Compliance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Regulatory Compliance</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Standards and controls specific to financial services property.
              </p>
              <CheckList items={[
                'Central Bank of Kenya premises and security standards',
                'Fire safety and security certifications',
                'Accessibility and disability compliance',
                'Lease documentation meeting banking confidentiality',
                'Data protection and information security controls',
                'Business continuity and disaster recovery space',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <FileBarChart className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Operational Standards</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Facility and tenancy requirements for financial institutions.
              </p>
              <CheckList items={[
                'Grade-A specification with redundancy standards',
                'Secure document storage and certified destruction protocols',
                'Premium-grade telecommunications and power backup',
                'Climate control and air quality for sensitive operations',
                'Flexible fit-out to support trading and client areas',
                '24/7 security and monitored access control',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Sector-specialist property services"
        description="Our financial services team manages secure, compliant premises that meet the standards expected by regulators and clients across Kenya."
        primaryLabel="Discuss Your Requirements"
        primaryLink="/contact"
        secondaryLabel="All Sectors"
        secondaryLink="/sectors"
      />
    </>
  );
}

export default SectorsFinancialServicesPage;
