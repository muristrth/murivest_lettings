import { Link } from 'react-router-dom';
import { Building2, MapPin, Ship, Factory, Home, Store } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function MarketsAfricaTanzaniaDarEsSalaamPage() {
  return (
    <>
      <Seo
        title="Dar es Salaam Property Market | Murivest Lettings"
        description="Property market analysis for Dar es Salaam, Tanzania."
        path="/markets/africa/tanzania/dar-es-salaam"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Tanzania', path: '/markets/africa/tanzania' }, { name: 'Dar es Salaam', path: '/markets/africa/tanzania/dar-es-salaam' }]}
      />
      <PageHero
        label="Markets"
        title="Dar es Salaam"
        subtitle="Dar es Salaam property market intelligence."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Tanzania', path: '/markets/africa/tanzania' }, { name: 'Dar es Salaam', path: '/markets/africa/tanzania/dar-es-salaam' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="City Overview" title="East Africa's largest port city — commercial, chaotic, transforming" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Dar es Salaam is Tanzania's commercial heart — a sprawling, high-density
                  coastal metropolis of 7M+ people. The city's geography is defined by
                  the peninsula (CBD, Kivukoni, Upanga), the northern corridor (Msasani,
                  Oysterbay, Masaki — premium residential), the western corridor (Ubungo,
                  Mbezi, Kibaha — industrial/logistics) and the southern expansion
                  (Kigamboni — planned new city). The port handles 95% of Tanzania's
                  trade and serves landlocked neighbours (Zambia, DRC, Malawi, Burundi,
                  Rwanda).
                </p>
                <p>
                  Real estate demand is intensely port-correlated: logistics, warehousing,
                  clearing & forwarding cluster near the port (Kurasini, Keko, Chang'ombe).
                  The SGR terminus at Kwala and Bagamoyo port development are shifting
                  gravity north. CBD office (Posta, Ohio, Azikiwe) hosts banks, telcos,
                  government. Premium residential (Masaki, Oysterbay, Msasani) serves
                  expatriates and elite. Retail is mall-led (Mlimani City, Shoppers Plaza,
                  Village Mall) with high-street in Upanga and Msasani.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Dar es Salaam port and city"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'CBD / Kivukoni / Posta', type: 'Grade A/B Office, Banking, Govt', office: 'USD 15–22/sqm', retail: 'USD 20–30/sqm' },
              { name: 'Msasani / Oysterbay / Masaki', type: 'Prime Residential, Expat, Retail', resi: 'USD 1,200–2,500 (2-bed)', retail: 'USD 25–35/sqm' },
              { name: 'Kurasini / Keko / Port', type: 'Logistics, Warehousing, CFS', whse: 'USD 5–8/sqm', land: 'USD 200–500/sqm' },
              { name: 'Ubungo / Mbezi / Industrial', type: 'Manufacturing, Light Industrial', whse: 'USD 4–7/sqm', land: 'USD 100–300/sqm' },
              { name: 'Kibaha / Coast Region', type: 'SGR Corridor, Emerging Industrial', whse: 'USD 3–5/sqm', land: 'USD 50–150/sqm' },
              { name: 'Kigamboni (South)', type: 'Planned New City, Residential', resi: 'USD 600–1,200 (2-bed)', land: 'USD 80–200/sqm' },
            ].map((zone) => (
              <div key={zone.name} className="bg-navy-50 p-6 border border-stone-200">
                <h3 className="font-serif text-lg text-navy-900 mb-1">{zone.name}</h3>
                <p className="text-xs text-stone-500 mb-3">{zone.type}</p>
                <div className="space-y-1 text-xs font-serif text-gold-500">
                  {zone.office && <div>Office: {zone.office}</div>}
                  {zone.resi && <div>Resi: {zone.resi}</div>}
                  {zone.whse && <div>Whse: {zone.whse}</div>}
                  {zone.retail && <div>Retail: {zone.retail}</div>}
                  {zone.land && <div>Land: {zone.land}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Commercial Sectors"
            title="Port-driven logistics, mall retail, CBD office, premium residential"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <SectionHeader label="Industrial & Logistics" title="Port proximity = premium" />
              <CheckList items={[
                'Kurasini/Keko: Port-adjacent, CFS, cold storage, highest rents',
                'Kibaha/Kwala: SGR terminus, new Grade A parks, growing',
                'Bagamoyo SEZ: Planned mega-port + industrial zone, speculative',
                'SGR impact: Rail-head logistics reducing port congestion, shifting DCs inland',
                'Cold chain: Horticulture (Arusha/Kilimanjaro) export via Dar port',
              ]} />
            </div>
            <div>
              <SectionHeader label="Office & Retail" title="CBD consolidation, mall dominance" />
              <CheckList items={[
                'CBD: Bank HQs, telcos, govt — flight to quality, Grade B vacancy rising',
                'Posta/Ohio/Azikiwe: Prime corridors, limited new Grade A supply',
                'Malls: Mlimani City, Village Mall, Shoppers Plaza — >95% occupancy',
                'High-street: Upanga, Msasani — F&B, lifestyle, expatriate-focused',
                'E-commerce: Jumia, Kilimall driving last-mile warehousing demand',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Access Dar es Salaam market intelligence"
        description="Zone-level rental comparables, port logistics analysis, development pipeline and regulatory navigation for Tanzania's commercial capital."
        primaryLabel="Request Dar Report"
        primaryLink="/contact"
        secondaryLabel="View Tanzania Overview"
        secondaryLink="/markets/africa/tanzania"
      />
    </>
  );
}

export default MarketsAfricaTanzaniaDarEsSalaamPage;