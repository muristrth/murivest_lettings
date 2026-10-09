import { Link } from 'react-router-dom';
import { ArrowRight, Laptop, Server } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function SectorsTechnologyPage() {
  return (
    <>
      <Seo
        title="Technology Properties | Murivest Lettings"
        description="Property services for technology companies across Kenya — tech-ready offices, data centres and innovation hubs with high-spec infrastructure."
        path="/sectors/technology"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Technology', path: '/sectors/technology' }]}
      />
      <PageHero
        label="Sectors"
        title="Technology"
        subtitle="Property services for technology companies."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Technology', path: '/sectors/technology' }]}
      />

      {/* Sector Overview */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Sector Overview" title="Technology property management" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Technology companies demand premises designed for performance, reliability and growth — from
                tech-ready offices to Tier-III+ data centres and innovation hubs. We manage technology-focused property
                across Nairobi's growing tech corridor, with high-density power, carrier-neutral connectivity and
                flexible layouts that support scaling teams.
              </p>
              <CheckList items={[
                'Tech offices and innovation hubs',
                'Data centres and server farms',
                'Co-working and flexible space',
                'R&D and prototyping facilities',
                'Satellite offices and remote hubs',
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
                  alt="Technology office campus"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Office Requirements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Laptop className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Tech-Ready Spaces</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Workspace and tenancy requirements for technology companies.
              </p>
              <CheckList items={[
                'High-density power and cooling capacity',
                'Tier-III+ data centre specifications',
                'Raised flooring and structured cabling',
                '24/7 security and environmental monitoring',
                'Generator and UPS redundancy',
                'Flexible, reconfigurable floor plates',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Infrastructure</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Building infrastructure and services for tech-enabled operations.
              </p>
              <CheckList items={[
                'Fibre connectivity and carrier diversity',
                'Smart building IoT and automation',
                'Renewable energy and efficiency standards',
                'Secure server and network rooms',
                'Redundant power and cooling paths',
                'ESG and sustainability certifications',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Sector-specialist property services"
        description="Our technology team manages tech-ready offices and data centres with the infrastructure and flexibility that high-performance teams require."
        primaryLabel="Discuss Your Requirements"
        primaryLink="/contact"
        secondaryLabel="All Sectors"
        secondaryLink="/sectors"
      />
    </>
  );
}

export default SectorsTechnologyPage;
