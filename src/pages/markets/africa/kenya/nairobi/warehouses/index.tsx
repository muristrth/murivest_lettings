import { Link } from 'react-router-dom';
import { Warehouse, Truck, MapPin, Factory, TrendingUp, ShieldCheck } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function MarketsAfricaKenyaiNairobiWarehousesPage() {
  return (
    <>
      <Seo
        title="Nairobi Warehouse Market | Murivest Lettings"
        description="Warehouse property market analysis for Nairobi, Kenya."
        path="/markets/africa/kenya/nairobi/warehouses"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Kenya', path: '/markets/africa/kenya' }, { name: 'Nairobi', path: '/markets/africa/kenya/nairobi' }, { name: 'Warehouses', path: '/markets/africa/kenya/nairobi/warehouses' }]}
      />
      <PageHero
        label="Markets"
        title="Nairobi warehouse market"
        subtitle="Warehouse market intelligence for Nairobi."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Kenya', path: '/markets/africa/kenya' }, { name: 'Nairobi', path: '/markets/africa/kenya/nairobi' }, { name: 'Warehouses', path: '/markets/africa/kenya/nairobi/warehouses' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Market Overview" title="Grade A logistics parks driving rental premiums and pre-let activity" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Nairobi's warehouse market has undergone structural transformation.
                  Ten years ago, the market was dominated by legacy industrial stock in
                  Industrial Area with basic specs. Today, Grade A logistics parks —
                  Tatu City, Tilisi, Infinity, Greenfields, Migaa, Pan African Logistics
                  Centre — offer 12m+ clear heights, ESFR sprinklers, dock levellers,
                  ample yard depth and professional management. These parks, concentrated
                  along Mombasa Road, Thika Road and the Northern Bypass, command 40–60%
                  rental premiums over standard stock and achieve 80%+ pre-let rates.
                </p>
                <p>
                  Demand is driven by: e-commerce fulfilment (Jumia, Kilimall, Copia,
                  Glovo), third-party logistics (Bolloré, DHL, Maersk, Mitrangaa),
                  cold chain (Twiga, Fresh Direct, pharma), and multinational FMCG
                  (Unilever, P&G, Diageo, Coca-Cola) consolidating distribution. The
                  pipeline remains robust but land costs in prime corridors are pushing
                  new development further out (Ruiru, Kiambu, Athi River).
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Grade A warehouse park Nairobi"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { park: 'Tatu City', location: 'Thika Rd / Ruiru', spec: 'Grade A, 12m+, ESFR', rent: 'KES 60–75/sqft', status: 'Operational / UC' },
              { park: 'Tilisi (KDF)', location: 'Limuru Rd', spec: 'Grade A, 12m, ESFR', rent: 'KES 55–70/sqft', status: 'Operational / UC' },
              { park: 'Infinity Park', location: 'Mombasa Rd / Mlolongo', spec: 'Grade A, 12m, ESFR', rent: 'KES 65–80/sqft', status: 'Operational' },
              { park: 'Greenfields', location: 'Mombasa Rd / Syokimau', spec: 'Grade A, 11m, ESFR', rent: 'KES 55–70/sqft', status: 'Operational / UC' },
              { park: 'Migaa (KenGen)', location: 'Naivasha Rd', spec: 'Grade A, 12m, ESFR', rent: 'KES 50–65/sqft', status: 'UC / Planned' },
              { park: 'PALC', location: 'Mombasa Rd / Athi River', spec: 'Grade A, 12m, ESFR', rent: 'KES 55–70/sqft', status: 'Operational' },
            ].map((park) => (
              <div key={park.park} className="bg-navy-50 p-6 border border-stone-200">
                <h3 className="font-serif text-lg text-navy-900 mb-1">{park.park}</h3>
                <p className="text-xs text-stone-500 mb-2">{park.location}</p>
                <div className="space-y-1 text-sm mb-3">
                  <div className="flex justify-between"><span className="text-stone-500">Spec:</span> <span>{park.spec}</span></div>
                  <div className="flex justify-between"><span className="text-stone-500">Rent:</span> <span className="font-serif text-gold-500">{park.rent}</span></div>
                </div>
                <span className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded">{park.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Key Logistics Zones"
            title="Strategic corridors for warehousing and distribution"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <h4 className="font-serif text-lg text-navy-900 mb-4">Mombasa Road Corridor</h4>
              <CheckList items={[
                'JKIA–Syokimau: Prime logistics, aviation cargo, cold chain',
                'Syokimau–Mlolongo: Grade A parks, SGR terminal adjacency',
                'Mlolongo–Athi River: Large-footprint, land availability',
                'Expressway access: 20-min CBD, 15-min JKIA',
                'Rents: KES 55–80/sqft (Grade A)',
              ]} />
            </div>
            <div>
              <h4 className="font-serif text-lg text-navy-900 mb-4">Thika Road / Northern Corridor</h4>
              <CheckList items={[
                'Ruiru / Tatu City: Planned parks, modern specs, northern access',
                'Kenol / Sagana: Emerging, lower land cost, future growth',
                'Northern Bypass link: Decongested CBD/Industrial Area access',
                'Rents: KES 50–70/sqft (Grade A)',
                'Pipeline: Significant UC and planned',
              ]} />
            </div>
            <div>
              <h4 className="font-serif text-lg text-navy-900 mb-4">Industrial Area / Legacy</h4>
              <CheckList items={[
                'Dense, established, infrastructure constraints',
                'Legacy manufacturing, light engineering, workshops',
                'Redevelopment pressure: land value > industrial yield',
                'Rents: KES 35–55/sqft (standard), KES 15–30 (yard)',
                'Transition: gradual shift to higher-value uses',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Access Nairobi warehouse intelligence"
        description="Park-level vacancy, lease comparables, occupier requirements and development pipeline for logistics investors and occupiers."
        primaryLabel="Request Warehouse Report"
        primaryLink="/contact"
        secondaryLabel="View Industrial Market"
        secondaryLink="/markets/africa/kenya/nairobi/industrial"
      />
    </>
  );
}

export default MarketsAfricaKenyaiNairobiWarehousesPage;