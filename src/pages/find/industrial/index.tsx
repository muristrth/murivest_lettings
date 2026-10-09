import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';
import { Factory, BarChart3, Check, MapPin, ArrowRight } from 'lucide-react';

export function FindIndustrialPage() {
  return (
    <>
      <Seo
        title="Industrial Property for Lease | Murivest Lettings"
        description="Industrial and warehouse properties for lease across Kenya's industrial corridors."
        path="/find/industrial"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Find', path: '/find' }, { name: 'Industrial', path: '/find/industrial' }]}
      />
      <PageHero
        label="Industrial"
        title="Industrial properties for lease"
        subtitle="Warehouse and logistics properties across Kenya's key industrial corridors."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Find', path: '/find' }, { name: 'Industrial', path: '/find/industrial' }]}
      />

      {/* Industrial Overview */}
      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader label="Industrial Market" title="Kenya's logistics infrastructure is evolving fast" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Kenya's position as East Africa's logistics hub has driven significant demand for
                  high-quality industrial and warehouse space. From the Inland Container Depot in
                  Nairobi to the Mombasa port and emerging logistics corridors, commercial property
                  demand is being driven by e-commerce, manufacturing, and third-party logistics.
                </p>
                <p>
                  Murivest Lettings manages a portfolio of industrial properties across Kenya's key
                  logistics zones, providing tenants with high-specification facilities and landlords
                  with institutional-grade management.
                </p>
              </div>
              <div className="mt-8">
                <CheckList items={[
                  'High-clearance warehouse spaces (6m+ clear height)',
                  'Heavy-duty power supply and backup generators',
                  'Yard and loading dock access',
                  'Proximity to transport corridors and ports',
                  'Security and perimeter fencing',
                  'Office component for operational staff',
                ]}
              />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Industrial warehouse property"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Zones */}
      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Key Locations"
            title="Strategic industrial locations across Kenya"
            subtitle="Our industrial portfolio is concentrated in Kenya's key logistics and manufacturing hubs."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: MapPin, title: 'Nairobi Industrial Area', desc: 'The established industrial heart of Kenya, with proximity to CBD and transport links.' },
              { icon: MapPin, title: 'Mombasa Port', desc: 'Logistics-focused facilities with direct port access and container handling capabilities.' },
              { icon: MapPin, title: 'Athi River', desc: 'Emerging industrial hub with modern facilities and growing tenant base.' },
            ].map((zone) => (
              <div key={zone.title} className="border border-stone-200 p-6 card-institutional text-center">
                <zone.icon className="w-8 h-8 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-lg text-navy-900 mb-2">{zone.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{zone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Looking for industrial space?"
        description="Browse our available industrial properties or contact our team with your specific requirements."
        primaryLabel="View Available Properties"
        primaryLink="/properties"
        secondaryLabel="Contact Our Team"
        secondaryLink="/contact"
      />
    </>
  );
}

export default FindIndustrialPage;
