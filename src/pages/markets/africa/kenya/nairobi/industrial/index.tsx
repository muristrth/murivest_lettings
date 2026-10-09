import { Link } from 'react-router-dom';
import { Factory, Warehouse, Truck, MapPin, TrendingUp, ShieldCheck } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function MarketsAfricaKenyaiNairobiIndustrialPage() {
  return (
    <>
      <Seo
        title="Nairobi Industrial Market | Murivest Lettings"
        description="Industrial property market analysis for Nairobi, Kenya."
        path="/markets/africa/kenya/nairobi/industrial"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Kenya', path: '/markets/africa/kenya' }, { name: 'Nairobi', path: '/markets/africa/kenya/nairobi' }, { name: 'Industrial', path: '/markets/africa/kenya/nairobi/industrial' }]}
      />
      <PageHero
        label="Markets"
        title="Nairobi industrial market"
        subtitle="Industrial market intelligence for Nairobi."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Kenya', path: '/markets/africa/kenya' }, { name: 'Nairobi', path: '/markets/africa/kenya/nairobi' }, { name: 'Industrial', path: '/markets/africa/kenya/nairobi/industrial' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Market Overview" title="Manufacturing base transitioning to modern logistics" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Nairobi's industrial market is dual-track: established manufacturing in
                  Industrial Area and along Enterprise Road, and modern logistics
                  clustering along Mombasa Road, Thika Road and the Northern Bypass.
                  The manufacturing sector — food processing, chemicals, textiles, steel,
                  automotive assembly — occupies legacy stock with specific power, water
                  and effluent requirements. Logistics operators demand Grade A specs:
                  clear height, dock levellers, ESFR, yard depth.
                </p>
                <p>
                  The Dongo Kundu SEZ (Mombasa) and Tatu City / Ruiru (Nairobi north)
                  represent the new generation of planned industrial parks with integrated
                  infrastructure. Nairobi's industrial land values have escalated
                  significantly, pushing lower-margin manufacturing to satellite towns
                  (Athi River, Thika, Ruiru) while high-value logistics and light
                  manufacturing compete for well-connected sites.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Industrial facility Nairobi"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <SectionHeader label="Key Zones" title="Established and emerging industrial corridors" />
              <CheckList items={[
                'Industrial Area / Enterprise Rd: Legacy manufacturing, dense, infrastructure strain',
                'Mombasa Road (JKIA–Athi River): Logistics, cold storage, aviation-adjacent',
                'Thika Road / Ruiru / Tatu City: Planned parks, modern specs, northern corridor',
                'Northern Bypass / Kiambu Rd: Emerging logistics, land availability',
                'Limuru Road: Light industrial, warehousing, agro-processing',
                'Athi River / EPZ: Export manufacturing, textile, apparel',
              ]} />
            </div>
            <div>
              <SectionHeader label="Market Metrics" title="Indicative benchmarks (monthly rent, net yield)" />
              <CheckList items={[
                'Prime Warehouse (Grade A): KES 55–75/sqft | 8.5–9.5%',
                'Standard Warehouse: KES 35–55/sqft | 9.0–10.5%',
                'Manufacturing Unit (legacy): KES 25–45/sqft | 9.5–11.5%',
                'Cold Storage (purpose-built): KES 80–120/sqft | 8.0–9.0%',
                'Industrial Land (per acre): KES 80M–200M+',
                'Yard/Storage (open): KES 15–30/sqft',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Demand Drivers"
            title="Structural forces shaping industrial occupancy"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Truck, title: 'E-commerce & Last-Mile', desc: 'Jumia, Kilimall, Glovo, Uber Eats driving urban warehousing demand for sub-1,000sqm units near population centres.' },
              { icon: Factory, title: 'Import Substitution', desc: 'Government "Buy Kenya Build Kenya" policy encouraging local manufacturing — food, pharma, construction materials.' },
              { icon: ShieldCheck, title: 'Supply Chain Resilience', desc: 'Post-COVID shift from just-in-time to just-in-case inventory — larger safety stocks, buffer warehousing.' },
            ].map((driver) => (
              <div key={driver.title}>
                <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                  <driver.icon className="w-6 h-6 text-navy-700" />
                </div>
                <h3 className="font-serif text-lg text-navy-900 mb-2">{driver.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{driver.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Access Nairobi industrial intelligence"
        description="Zone-level vacancy, rental comparables, development pipeline and occupier requirements for industrial investors and operators."
        primaryLabel="Request Industrial Report"
        primaryLink="/contact"
        secondaryLabel="View Warehouse Market"
        secondaryLink="/markets/africa/kenya/nairobi/warehouses"
      />
    </>
  );
}

export default MarketsAfricaKenyaiNairobiIndustrialPage;