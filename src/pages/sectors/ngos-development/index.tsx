import { Link } from 'react-router-dom';
import { ArrowRight, HeartHandshake, ShieldCheck } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function SectorsNgosDevelopmentPage() {
  return (
    <>
      <Seo
        title="NGO & Development Properties | Murivest Lettings"
        description="Property services for NGOs and development agencies across Kenya — secure, flexible premises with compliance for humanitarian and grant-funded operations."
        path="/sectors/ngos-development"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'NGOs & Development', path: '/sectors/ngos-development' }]}
      />
      <PageHero
        label="Sectors"
        title="NGOs & development"
        subtitle="Property services for NGOs and development agencies."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'NGOs & Development', path: '/sectors/ngos-development' }]}
      />

      {/* Sector Overview */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Sector Overview" title="NGO and development property management" />
              <p className="text-stone-500 leading-relaxed mb-6">
                NGOs and development agencies operate mission-critical programmes that depend on reliable, secure
                premises. We manage regional headquarters, field offices, programme facilities and humanitarian
                supply warehouses across Kenya, providing flexible, grant-compliant property services that support
                evolving operational needs.
              </p>
              <CheckList items={[
                'Regional headquarters and field offices',
                'Programme and project premises',
                'Training and community centres',
                'Warehouses for humanitarian supplies',
                'Co-working and shared office spaces',
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
                  src="https://images.pexels.com/photos/7586519/pexels-photo-7586519.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="NGO office premises"
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
                <HeartHandshake className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Operational Standards</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Property requirements for mission-critical NGO and development operations.
              </p>
              <CheckList items={[
                'Secure premises for sensitive programme data',
                'Flexibility for changing field requirements',
                'Generator and backup power for critical operations',
                'Internet and video-conferencing infrastructure',
                'Staff amenities and meeting facilities',
                'Rapid onboarding for short-term or rotational occupancy',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Compliance & Reporting</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Regulatory, donor and grant compliance for property management.
              </p>
              <CheckList items={[
                'Donor and regulatory reporting requirements',
                'Safety and security risk assessments',
                'Lease terms aligned with grant funding cycles',
                'Environmental and social compliance',
                'Insurance coverage for aid and development work',
                'Audit-ready documentation and expenditure tracking',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Sector-specialist property services"
        description="Our NGO and development team manages mission-critical premises with the flexibility, security and compliance that programme operations require."
        primaryLabel="Discuss Your Requirements"
        primaryLink="/contact"
        secondaryLabel="All Sectors"
        secondaryLink="/sectors"
      />
    </>
  );
}

export default SectorsNgosDevelopmentPage;
