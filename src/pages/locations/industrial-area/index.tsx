import { Link } from 'react-router-dom';
import { Factory, Warehouse, Truck, MapPin, Building2, TrendingUp } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LocationsIndustrialAreaPage() {
  return (
    <>
      <Seo
        title="Industrial Area Properties | Murivest Lettings"
        description="Properties in Nairobi's Industrial Area — warehouse and manufacturing facilities."
        path="/locations/industrial-area"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }, { name: 'Industrial Area', path: '/locations/industrial-area' }]}
      />
      <PageHero
        label="Locations"
        title="Industrial Area"
        subtitle="Properties in Nairobi's established industrial district."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }, { name: 'Industrial Area', path: '/locations/industrial-area' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Area Overview" title="Kenya's historic manufacturing and warehousing heartland" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Industrial Area is Nairobi's original and largest industrial zone, established
                  during the colonial era and expanded significantly post-independence. Located
                  southeast of the CBD, it benefits from direct rail connectivity, proximity to
                  Mombasa Road and the Inland Container Depot, and established infrastructure
                  for heavy industry.
                </p>
                <p>
                  The area hosts a diverse mix of manufacturing — food processing, textiles,
                  chemicals, steel fabrication, automotive assembly — alongside extensive
                  warehousing and logistics operations. Recent years have seen modernisation
                  with new-build Grade A warehouses replacing older stock, attracting
                  multinational logistics operators and e-commerce fulfilment centres.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Industrial Area warehouses"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <SectionHeader label="Property Types" title="Diverse industrial stock for varied operations" />
              <CheckList items={[
                'Modern Grade A warehouses: 10m+ clear height, ESFR sprinklers, dock levellers',
                'Traditional manufacturing units: heavy power, crane capacity, yard space',
                'Light industrial workshops: flexible layouts, office accommodation included',
                'Cold storage facilities: temperature-controlled, multi-chamber configurations',
                'Showroom-warehouse combinations: retail frontage with rear storage',
                'Land parcels for build-to-suit development',
              ]} />
            </div>
            <div>
              <SectionHeader label="Location Advantages" title="Strategic connectivity for supply chains" />
              <CheckList items={[
                'Direct access to Mombasa Road (A109) — primary Nairobi–Mombasa corridor',
                'Rail siding access for bulk cargo and containerised freight',
                'Proximity to Inland Container Depot (ICD) — 3km',
                'Jomo Kenyatta International Airport — 8km via Southern Bypass',
                'Established utilities: three-phase power, water, effluent treatment',
                'Labour catchment from adjacent residential areas (Mukuru, South B, South C)',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Market Indicators"
            title="Industrial Area rental benchmarks (indicative)"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { type: 'Prime Warehouse', rent: 'KES 55–75/sqft/month', yield: '8.5–9.5%' },
              { type: 'Standard Warehouse', rent: 'KES 35–50/sqft/month', yield: '9.0–10.5%' },
              { type: 'Manufacturing Unit', rent: 'KES 30–45/sqft/month', yield: '9.5–11.0%' },
            ].map((item) => (
              <div key={item.type} className="bg-navy-50 p-8 text-center border border-stone-200">
                <h3 className="font-serif text-xl text-navy-900 mb-2">{item.type}</h3>
                <div className="font-serif text-2xl text-gold-500 mb-1">{item.rent}</div>
                <div className="text-sm text-stone-500">Net Yield: {item.yield}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Find industrial space in Industrial Area"
        description="From 500sqm workshops to 20,000sqm distribution centres, we have access to the best opportunities."
        primaryLabel="View Listings"
        primaryLink="/properties?location=industrial-area"
        secondaryLabel="Discuss Requirements"
        secondaryLink="/contact"
      />
    </>
  );
}

export default LocationsIndustrialAreaPage;