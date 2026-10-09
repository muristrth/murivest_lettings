import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Cpu } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function SectorsManufacturingPage() {
  return (
    <>
      <Seo
        title="Manufacturing Properties | Murivest Lettings"
        description="Property services for manufacturing companies across Kenya — production facilities, warehouses and industrial sites with utility and safety compliance."
        path="/sectors/manufacturing"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Manufacturing', path: '/sectors/manufacturing' }]}
      />
      <PageHero
        label="Sectors"
        title="Manufacturing"
        subtitle="Property services for manufacturing companies."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Manufacturing', path: '/sectors/manufacturing' }]}
      />

      {/* Sector Overview */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Sector Overview" title="Manufacturing facility management" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Manufacturing properties demand robust infrastructure, regulatory compliance and continuous operational
                support. We manage light manufacturing and assembly plants, heavy-process facilities and associated
                warehousing across Kenya's industrial zones, coordinating utilities, safety systems and maintenance to
                minimise production disruption.
              </p>
              <CheckList items={[
                'Light manufacturing and assembly plants',
                'Heavy industry and processing facilities',
                'Warehousing and finished goods storage',
                'Office accommodation for staff',
                'Gatehouse and security infrastructure',
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
                  alt="Manufacturing facility"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Facility Needs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Production Requirements</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Physical and operational standards for manufacturing property.
              </p>
              <CheckList items={[
                'Heavy-duty floor loading and high clear(e) heights',
                'Three-phase power and backup generation',
                'Process waste and effluent management',
                'Ventilation and dust extraction systems',
                'Fire suppression and hazardous material controls',
                'Overhead crane and lifting equipment provisions',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Utility & Infrastructure</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Services and infrastructure supporting manufacturing operations.
              </p>
              <CheckList items={[
                'Reliable grid power with redundancy',
                'Water supply and on-site wastewater treatment',
                'Fibre connectivity and IoT monitoring',
                'Gas and steam supply infrastructure',
                'Employee amenities and canteen facilities',
                'Enviromental impact and waste disposal compliance',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Sector-specialist property services"
        description="Our manufacturing team manages production facilities with the infrastructure and compliance focus that continuous operations demand."
        primaryLabel="Discuss Your Requirements"
        primaryLink="/contact"
        secondaryLabel="All Sectors"
        secondaryLink="/sectors"
      />
    </>
  );
}

export default SectorsManufacturingPage;
