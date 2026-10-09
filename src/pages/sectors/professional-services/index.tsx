import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, ShieldCheck } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function SectorsProfessionalServicesPage() {
  return (
    <>
      <Seo
        title="Professional Services Properties | Murivest Lettings"
        description="Property services for professional services firms across Kenya — premium office accommodation for law firms, consultancies and advisory practices."
        path="/sectors/professional-services"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Professional Services', path: '/sectors/professional-services' }]}
      />
      <PageHero
        label="Sectors"
        title="Professional services"
        subtitle="Property services for professional services firms."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Professional Services', path: '/sectors/professional-services' }]}
      />

      {/* Sector Overview */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Sector Overview" title="Professional services workspace management" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Professional services firms — law firms, consultancies, accountants and advisory practices — require
                premises that project competence, support confidential client meetings and enable productive work.
                We manage professional services office portfolios across Nairobi, with attention to branding,
                privacy, connectivity and flexible accommodation that attracts and retains talent.
              </p>
              <CheckList items={[
                'Law firms and corporate legal practices',
                'Management and strategy consultancies',
                'Accounting and audit firms',
                'Financial advisory suites',
                'Co-working and flexible workspace',
                'Satellite and regional offices',
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
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Professional services office"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Workspace Standards</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Physical and environmental standards for professional services premises.
              </p>
              <CheckList items={[
                'Grade-A floors with high ceilings and natural light',
                'Premium building services and power redundancy',
                'Professional reception and client-facing areas',
                'Collaborative and quiet focus zones',
                'Accessibility and inclusive design standards',
                'High-grade telecommunications and video-conferencing',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Compliance</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Regulatory and operational compliance for professional firms.
              </p>
              <CheckList items={[
                'Disability access and universal design',
                'Fire safety and emergency procedures',
                'Data protection and cybersecurity controls',
                'Professional indemnity and liability insurance',
                'Lease terms supporting multi-year partnerships',
                'Confidentiality and client privacy safeguards',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Sector-specialist property services"
        description="Our professional services team manages law firm and consultancy premises with the discretion, quality and compliance these practices require."
        primaryLabel="Discuss Your Requirements"
        primaryLink="/contact"
        secondaryLabel="All Sectors"
        secondaryLink="/sectors"
      />
    </>
  );
}

export default SectorsProfessionalServicesPage;
