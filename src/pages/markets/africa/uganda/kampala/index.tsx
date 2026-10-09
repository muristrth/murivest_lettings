import { Link } from 'react-router-dom';
import { Building2, MapPin, Factory, Home, Store, TrendingUp } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function MarketsAfricaUgandaKampalaPage() {
  return (
    <>
      <Seo
        title="Kampala Property Market | Murivest Lettings"
        description="Property market analysis for Kampala, Uganda."
        path="/markets/africa/uganda/kampala"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Uganda', path: '/markets/africa/uganda' }, { name: 'Kampala', path: '/markets/africa/uganda/kampala' }]}
      />
      <PageHero
        label="Markets"
        title="Kampala"
        subtitle="Kampala property market intelligence."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Uganda', path: '/markets/africa/uganda' }, { name: 'Kampala', path: '/markets/africa/uganda/kampala' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="City Overview" title="Seven hills, one commercial engine — CBD, Kololo, Nakasero and the corridors" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Kampala sits on seven historic hills, each with distinct character:
                  Nakasero (government, premium office, diplomatic), Kololo (expatriate
                  residential, high-end office, hospitals), Makerere (university,
                  student housing), Kibuli (Muslim community, mixed-income), Old Kampala
                  (historic, Islamic institutions), Mengo (Buganda kingdom, cultural),
                  and Rubaga (Catholic, educational). The CBD sits in the valley between
                  Nakasero and Old Kampala.
                </p>
                <p>
                  Commercial corridors radiate out: Jinja Road (east — industrial,
                  Namanve, Luzira), Entebbe Road (south-west — airport, logistics,
                  emerging office), Northern Bypass (north — logistics, warehousing,
                  Nalukolongo). The Kampala Flyover and Expressway projects are
                  decongesting the CBD, shifting value to corridor locations.
                  Land tenure complexity (mailo, freehold, leasehold) requires
                  specialist navigation for transactions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Kampala cityscape"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Nakasero / CBD Core', type: 'Government, Grade A Office, Banking', office: 'UGX 35–50/sqft', retail: 'UGX 40–60/sqft' },
              { name: 'Kololo', type: 'Diplomatic, Expat Residential, Grade A Office', office: 'UGX 40–55/sqft', resi: 'UGX 4–6M (2-bed)' },
              { name: 'Nakasero Hill', type: 'Premium Residential, Medical, Hotels', resi: 'UGX 3–5M (2-bed)', hotel: 'UGX 400k–1M/night' },
              { name: 'Jinja Rd / Namanve / Luzira', type: 'Industrial, Logistics, SEZ', whse: 'UGX 12–18/sqft', land: 'UGX 150–400M/acre' },
              { name: 'Entebbe Rd / Kajjansi', type: 'Airport Corridor, Logistics, Emerging Office', whse: 'UGX 10–15/sqft', office: 'UGX 25–35/sqft' },
              { name: 'Northern Bypass / Bwaise', type: 'Warehousing, Wholesale, Transit', whse: 'UGX 8–14/sqft', land: 'UGX 100–250M/acre' },
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
                  {zone.hotel && <div>Hotel: {zone.hotel}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Commercial Districts"
            title="Office, retail, industrial and residential nodes"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <SectionHeader label="Office & Retail" title="CBD consolidation, corridor expansion" />
              <CheckList items={[
                'CBD: Bank HQs, telcos, govt — Grade B vacancy 15–20%, Grade A scarce',
                'Kololo/Nakasero: Diplomatic, NGO, premium professional — strongest rents',
                'Acacia Mall (Kisementi): Anchor retail, office above, expatriate catchment',
                'Garden City (Yusuf Lule): Mixed-use, residential, office, retail — mature',
                'Victoria Mall (Entebbe Rd): Regional catchment, airport corridor',
                'Lugogo: Sports, events, mixed-use — UMA showgrounds, MTN Arena',
              ]} />
            </div>
            <div>
              <SectionHeader label="Industrial & Residential" title="Corridor logistics, housing deficit" />
              <CheckList items={[
                'Namanve Industrial Park: 890ha, 100+ firms, power/water, near SGR',
                'Luzira / Port Bell: Lake Victoria port, legacy industrial, redevelopment',
                'Jinja (80km): Nile hydro, manufacturing, emerging satellite',
                'Housing Deficit: 2.4M units nationally — BTR, affordable, mortgage',
                'NHCC / Private BTR: Emerging pipeline (Kampala, Namanve, Entebbe Rd)',
                'Land Tenure: Mailo (Buganda), Freehold, Leasehold — due diligence critical',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Access Kampala market intelligence"
        description="Hill-by-hill analysis, lease comparables, land tenure guidance and oil-corridor logistics mapping for Uganda's capital."
        primaryLabel="Request Kampala Report"
        primaryLink="/contact"
        secondaryLabel="View Uganda Overview"
        secondaryLink="/markets/africa/uganda"
      />
    </>
  );
}

export default MarketsAfricaUgandaKampalaPage;