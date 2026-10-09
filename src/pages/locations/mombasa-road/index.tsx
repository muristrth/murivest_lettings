import { Link } from 'react-router-dom';
import { Factory, Warehouse, Truck, Building2, MapPin, TrendingUp } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LocationsMombasaRoadPage() {
  return (
    <>
      <Seo
        title="Mombasa Road Properties | Murivest Lettings"
        description="Commercial properties along Mombasa Road, Nairobi."
        path="/locations/mombasa-road"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }, { name: 'Mombasa Road', path: '/locations/mombasa-road' }]}
      />
      <PageHero
        label="Locations"
        title="Mombasa Road"
        subtitle="Properties along Nairobi's key Mombasa Road corridor."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }, { name: 'Mombasa Road', path: '/locations/mombasa-road' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Area Profile" title="Nairobi's primary logistics and aviation corridor" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Mombasa Road (A109) is Kenya's most critical transport artery, connecting
                  Nairobi to the Port of Mombasa and serving as the primary gateway for
                  international trade. The corridor stretching from Jomo Kenyatta International
                  Airport (JKIA) through Syokimau, Mlolongo and Athi River has evolved into
                  a massive logistics, warehousing and light industrial zone.
                </p>
                <p>
                  Major infrastructure investments — the Southern Bypass, Nairobi Expressway,
                  Standard Gauge Railway (SGR) terminal at Syokimau — have accelerated
                  development. Grade A warehouse parks, cold storage facilities, automotive
                  showrooms and aviation-adjacent businesses cluster along the corridor,
                  supported by improving last-mile connectivity to Industrial Area and the CBD.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Mombasa Road logistics corridor"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <SectionHeader label="Property Types" title="Logistics-led with growing office and retail" />
              <CheckList items={[
                'Grade A warehouse parks: 12m+ clear height, ESFR, ample yard',
                'Cold storage & temperature-controlled: multi-chamber, pharma-grade',
                'Aviation-adjacent: cargo handling, aircraft maintenance, logistics',
                'Showroom-warehouse: automotive, building materials, equipment',
                'Flex/light industrial: manufacturing, assembly, R&D',
                'Roadside retail & services: fuel, F&B, accommodation, banking',
              ]} />
            </div>
            <div>
              <SectionHeader label="Strategic Advantages" title="Unrivalled connectivity for trade and logistics" />
              <CheckList items={[
                'Direct JKIA access — air cargo, perishables, high-value goods',
                'SGR Syokimau terminal — containerised rail to Mombasa Port',
                'Nairobi Expressway — rapid CBD/Westlands access (20 mins)',
                'Southern Bypass — decongested link to Industrial Area/Thika Rd',
                'SGR/Standard Gauge integration for inland port operations',
                'Large labour pool from Syokimau, Mlolongo, Athi River, Kitengela',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Market Indicators"
            title="Mombasa Road rental benchmarks (indicative, monthly)"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { zone: 'JKIA–Syokimau', warehouse: 'KES 55–75/sqft', office: 'KES 120–180/sqft' },
              { zone: 'Syokimau–Mlolongo', warehouse: 'KES 45–65/sqft', office: 'KES 100–150/sqft' },
              { zone: 'Mlolongo–Athi River', warehouse: 'KES 35–55/sqft', office: 'KES 80–120/sqft' },
            ].map((item) => (
              <div key={item.zone} className="bg-navy-50 p-8 border border-stone-200">
                <h3 className="font-serif text-xl text-navy-900 mb-4 text-center">{item.zone}</h3>
                <div className="space-y-3 text-center">
                  <div className="flex justify-center gap-4 text-sm">
                    <span className="text-stone-500">Warehouse:</span>
                    <span className="font-serif text-gold-500">{item.warehouse}</span>
                  </div>
                  <div className="flex justify-center gap-4 text-sm">
                    <span className="text-stone-500">Office:</span>
                    <span className="font-serif text-gold-500">{item.office}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Secure logistics space on Mombasa Road"
        description="From airport-adjacent cargo facilities to expressway-connected distribution centres, we cover the full corridor."
        primaryLabel="View Listings"
        primaryLink="/properties?location=mombasa-road"
        secondaryLabel="Discuss Requirements"
        secondaryLink="/contact"
      />
    </>
  );
}

export default LocationsMombasaRoadPage;