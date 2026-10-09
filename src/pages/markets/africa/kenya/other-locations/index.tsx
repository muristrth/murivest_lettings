import { Link } from 'react-router-dom';
import { MapPin, Building2, Factory, Home, TrendingUp, BarChart3 } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function MarketsAfricaKenyaOtherLocationsPage() {
  return (
    <>
      <Seo
        title="Other Kenyan Markets | Murivest Lettings"
        description="Property market intelligence for other key Kenyan locations."
        path="/markets/africa/kenya/other-locations"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Kenya', path: '/markets/africa/kenya' }, { name: 'Other Locations', path: '/markets/africa/kenya/other-locations' }]}
      />
      <PageHero
        label="Markets"
        title="Other locations"
        subtitle="Property market analysis for other Kenyan markets."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Kenya', path: '/markets/africa/kenya' }, { name: 'Other Locations', path: '/markets/africa/kenya/other-locations' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Location Overview" title="County capitals and corridor towns driving decentralised growth" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Kenya's 2010 Constitution created 47 county governments, each with
                  a capital town receiving devolved budgets and driving local economic
                  activity. This decentralisation has spawned property demand across
                  secondary cities: county headquarters (offices, retail, housing),
                  transport corridors (logistics, industrial), and tourism gateways
                  (hospitality, residential). While Nairobi dominates, these markets
                  offer yield premiums and growth trajectories absent in the capital.
                </p>
                <p>
                  Key corridors include: Nairobi–Nakuru–Eldoret (Western), Nairobi–Nanyuki
                  (Northern/Laikipia), Nairobi–Namanga (Southern/Tanzania border), and
                  the Coastal corridor (Mombasa–Malindi–Lamu). Each has distinct drivers:
                  agriculture, tourism, cross-border trade, energy, or education.
                  Infrastructure investment — roads, SGR, electricity, water — is the
                  primary catalyst for real estate value creation.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Kenyan county town"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Nakuru', driver: 'Agri/Logistics/County HQ', office: 'KES 60–100/sqft', industrial: 'KES 25–40/sqft', residential: 'KES 30–55k (2-bed)' },
              { name: 'Eldoret', driver: 'Agri/Education/County HQ', office: 'KES 50–90/sqft', industrial: 'KES 20–35/sqft', residential: 'KES 25–50k (2-bed)' },
              { name: 'Kisumu', driver: 'Port/Lake/County HQ', office: 'KES 70–120/sqft', industrial: 'KES 30–50/sqft', residential: 'KES 35–65k (2-bed)' },
              { name: 'Thika', driver: 'Industrial/Commuting', office: 'KES 80–130/sqft', industrial: 'KES 35–55/sqft', residential: 'KES 40–70k (2-bed)' },
              { name: 'Ruiru/Juja', driver: 'Commuting/Industrial/SEZ', office: 'KES 70–120/sqft', industrial: 'KES 40–60/sqft', residential: 'KES 35–60k (2-bed)' },
              { name: 'Machakos', driver: 'County HQ/Commuting', office: 'KES 50–90/sqft', industrial: 'KES 25–40/sqft', residential: 'KES 30–50k (2-bed)' },
              { name: 'Nanyuki', driver: 'Tourism/Military/Expat', office: 'KES 80–140/sqft', industrial: 'KES 30–50/sqft', residential: 'KES 50–100k (2-bed)' },
              { name: 'Kitengela', driver: 'Commuting/Industrial', office: 'KES 60–100/sqft', industrial: 'KES 30–50/sqft', residential: 'KES 30–55k (2-bed)' },
            ].map((loc) => (
              <div key={loc.name} className="bg-navy-50 p-6 border border-stone-200">
                <h3 className="font-serif text-lg text-navy-900 mb-1">{loc.name}</h3>
                <p className="text-xs text-stone-500 mb-3">{loc.driver}</p>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between"><span className="text-stone-500">Office:</span> <span className="font-serif text-gold-500">{loc.office}</span></div>
                  <div className="flex justify-between"><span className="text-stone-500">Industrial:</span> <span className="font-serif text-gold-500">{loc.industrial}</span></div>
                  <div className="flex justify-between"><span className="text-stone-500">Resi (2-bed):</span> <span className="font-serif text-gold-500">{loc.residential}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Market Themes"
            title="Decentralisation, corridors, and county-level opportunity"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <h4 className="font-serif text-lg text-navy-900 mb-4">Devolution Dividend</h4>
              <CheckList items={[
                'County HQs: Government office demand, contractor housing, supplier retail',
                'Health devolution: Level 4/5 hospitals driving medical real estate',
                'Education: County TVETs, universities — student housing demand',
                'Procurement: 30% county spend reserved for local — business premises',
              ]} />
            </div>
            <div>
              <h4 className="font-serif text-lg text-navy-900 mb-4">Corridor Dynamics</h4>
              <CheckList items={[
                'Northern Corridor (Nairobi–Malaba): Logistics, transit, border trade',
                'LAPSSET Corridor: Isiolo, Lamu — speculative but strategic',
                'Southern Corridor (Namanga): Tanzania cross-border, tourism',
                'Coastal Corridor: Mombasa–Malindi–Lamu — tourism, port hinterland',
              ]} />
            </div>
            <div>
              <h4 className="font-serif text-lg text-navy-900 mb-4">Investment Considerations</h4>
              <CheckList items={[
                'Yield premium: 150–300bps over Nairobi for comparable risk',
                'Liquidity: Longer exit timelines, smaller buyer pool',
                'Data scarcity: Limited comparable evidence, rely on local networks',
                'Management: Requires local presence or trusted partners',
                'Regulatory: County-by-county variation in rates, permits, by-laws',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Access county-level market intelligence"
        description="From Nakuru's agri-logistics to Nanyuki's expatriate residential, our Kenya network covers the full devolution dividend."
        primaryLabel="Request County Report"
        primaryLink="/contact"
        secondaryLabel="View Nairobi Markets"
        secondaryLink="/markets/africa/kenya/nairobi"
      />
    </>
  );
}

export default MarketsAfricaKenyaOtherLocationsPage;