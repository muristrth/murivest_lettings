import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';
import { Factory, MapPin, Check, BarChart3 } from 'lucide-react';

export function FindWarehousePage() {
  return (
    <>
      <Seo
        title="Warehouse for Lease | Murivest Lettings"
        description="Warehouse and distribution properties for lease across Kenya's industrial zones."
        path="/find/warehouse"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Find', path: '/find' }, { name: 'Warehouse', path: '/find/warehouse' }]}
      />
      <PageHero
        label="Warehouse"
        title="Warehouses for lease"
        subtitle="High-bay warehouse and distribution centres across Kenya's industrial zones."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Find', path: '/find' }, { name: 'Warehouse', path: '/find/warehouse' }]}
      />

      {/* Warehouse Overview */}
      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader label="Warehouse Market" title="Kenya's logistics sector demands modern warehousing" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Kenya's role as East Africa's logistics gateway has created significant demand for
                  high-quality warehouse and distribution facilities. From Mombasa port to the
                  Inland Container Depot in Nairobi, companies require modern warehousing with
                  appropriate power, yard space and accessibility to transport corridors.
                </p>
                <p>
                  Murivest Lettings manages a portfolio of warehouse properties across Kenya's key
                  industrial zones, providing tenants with fit-for-purpose facilities and landlords
                  with institutional-grade management.
                </p>
              </div>
              <div className="mt-8">
                <CheckList items={[
                  'High clear height (6–12 metres)',
                  'Heavy-duty power supply (3-phase, 500+ kVA)',
                  'Yard space for truck manoeuvring',
                  'Loading docks and level access',
                  'Security fencing and CCTV monitoring',
                  'Proximity to transport corridors',
                  'Office component for operational staff',
                  'Fire suppression and safety systems',
                ]} />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Warehouse facility"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Locations */}
      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xi mx-auto">
          <SectionHeader
            label="Key Locations"
            title="Warehouse markets across Kenya"
            subtitle="Our warehouse portfolio is concentrated in Kenya's key logistics corridors."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="text-center card-institutional p-6">
              <MapPin className="w-8 h-8 text-gold-500 mx-auto mb-4" />
              <h3 className="font-serif text-lg text-navy-900 mb-2">Nairobi Industrial Area</h3>
              <p className="text-sm text-stone-500 leading-relaxed">Established industrial hub with excellent road connectivity and proximity to Nairobi CBD.</p>
            </div>
            <div className="text-center card-institutional p-6">
              <MapPin className="w-8 h-8 text-gold-500 mx-auto mb-4" />
              <h3 className="font-serif text-lg text-navy-900 mb-2">Mombasa Port</h3>
              <p className="text-sm text-stone-500 leading-relaxed">Strategic proximity to Kenya's main seaport for efficient import and export logistics.</p>
            </div>
            <div className="text-center card-institutional p-6">
              <MapPin className="w-8 h-8 text-gold-500 mx-auto mb-4" />
              <h3 className="font-serif text-lg text-navy-900 mb-2">Athi River</h3>
              <p className="text-sm text-stone-500 leading-relaxed">Emerging logistics corridor with modern warehouse developments and growing tenant base.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Looking for warehouse space?"
        description="Browse our available warehouse properties or contact our team with your specific requirements."
        primaryLabel="View Available Properties"
        primaryLink="/properties"
        secondaryLabel="Contact Our Team"
        secondaryLink="/contact"
      />
    </>
  );
}

export default FindWarehousePage;
