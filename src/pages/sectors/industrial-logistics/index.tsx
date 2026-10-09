import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Factory } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function SectorsIndustrialLogisticsPage() {
  return (
    <>
      <Seo
        title="Industrial & Logistics Properties | Murivest Lettings"
        description="Property services for industrial and logistics operators across Kenya's growing logistics corridors — warehouses, distribution hubs and cold-chain facilities."
        path="/sectors/industrial-logistics"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Industrial & Logistics', path: '/sectors/industrial-logistics' }]}
      />
      <PageHero
        label="Sectors"
        title="Industrial & logistics"
        subtitle="Property services for industrial and logistics operators."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Industrial & Logistics', path: '/sectors/industrial-logistics' }]}
      />

      {/* Sector Overview */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Sector Overview" title="Industrial & logistics property management" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Kenya's industrial property market is being reshaped by the Standard Gauge Railway, port expansions,
                highway upgrades and AfCFTA. Demand is shifting from basic warehousing to modern logistics facilities
                with grade-A specifications, cold-chain capability and last-mile distribution nodes. We manage industrial
                and logistics properties across Nairobi's key corridors and coastal trade routes.
              </p>
              <CheckList items={[
                'Warehouses and distribution centres',
                'Last-mile logistics hubs',
                'Cold storage and temperature-controlled facilities',
                'Manufacturing support facilities',
                'Showrooms and trade counters',
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
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Industrial logistics facility"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Location Priorities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Location Criteria</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Critical factors for industrial and logistics site selection and management.
              </p>
              <CheckList items={[
                'Highway and SGR connectivity (Mombasa Rd, Northern Bypass, Thika Rd)',
                'Port proximity for import/export operations',
                'Power reliability and three-phase availability',
                'Land availability for expansion and vehicle circulation',
                'Labour catchment and housing affordability',
                'Zoning and environmental compliance',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Facility Specifications</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Technical and operational requirements for logistics property.
              </p>
              <CheckList items={[
                'High clear(e) heights and optimised column grids',
                'Heavy-duty floor loading capacity',
                'Dock levelers and loading bay equipment',
                'Cold chain and temperature control systems',
                'ESG-ready solar and water recycling',
                'Last-mile urban logistics node readiness',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Sector-specialist property services"
        description="Our industrial and logistics team manages warehouse and distribution properties with technical specifications and connectivity that match operational demands."
        primaryLabel="Discuss Your Requirements"
        primaryLink="/contact"
        secondaryLabel="All Sectors"
        secondaryLink="/sectors"
      />
    </>
  );
}

export default SectorsIndustrialLogisticsPage;
