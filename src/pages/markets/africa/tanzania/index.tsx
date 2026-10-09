import { Link } from 'react-router-dom';
import { Globe, Building2, MapPin, TrendingUp, Factory, Ship } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function MarketsAfricaTanzaniaPage() {
  return (
    <>
      <Seo
        title="Tanzania Property Market | Murivest Lettings"
        description="Property market analysis for Tanzania."
        path="/markets/africa/tanzania"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Tanzania', path: '/markets/africa/tanzania' }]}
      />
      <PageHero
        label="Markets"
        title="Tanzania"
        subtitle="Tanzania property market intelligence."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Tanzania', path: '/markets/africa/tanzania' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Country Overview" title="East Africa's largest population driving urbanisation and port-led growth" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Tanzania's 65M+ population, vast natural resources (gas, minerals,
                  agriculture) and strategic Indian Ocean coastline position it as a
                  critical East African market. Dar es Salaam — the commercial capital
                  and former capital — generates ~40% of GDP and handles 95% of Tanzania's
                  international trade through its port. Dodoma, the political capital,
                  is growing steadily with government-led development.
                </p>
                <p>
                  The property market is characterised by: port-driven logistics and
                  industrial demand in Dar es Salaam; a growing middle class driving
                  residential and retail; Chinese infrastructure investment (SGR, port
                  expansion, highways); and an evolving regulatory environment including
                  the new Land Act amendments and REIT framework. Challenges include
                  bureaucratic permitting, currency controls, and infrastructure gaps
                  outside Dar.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Dar es Salaam skyline"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <SectionHeader label="Investment Outlook" title="Demographic scale, infrastructure, reform trajectory" />
              <CheckList items={[
                'Population: 65M+, median age 18, urbanisation 5.2% annually',
                'Dar es Salaam: 7M+ — projected megacity (10M+ by 2030)',
                'Port expansion: Dar es Salaam + Bagamoyo (planned) — capacity tripling',
                'SGR: Dar–Morogoro–Dodoma–Mwanza — transforming logistics',
                'Gas/LNG: Offshore discoveries — downstream industrial potential',
                'REIT Framework: 2019 regulations — institutional capital access emerging',
              ]} />
            </div>
            <div>
              <SectionHeader label="Market Indicators" title="Dar es Salaam prime benchmarks (indicative, monthly)" />
              <CheckList items={[
                'Grade A Office (CBD/Posta): USD 15–22/sqm (KES 1,900–2,800/sqft)',
                'Grade B Office: USD 10–15/sqm (KES 1,300–1,900/sqft)',
                'Prime Mall Retail: USD 20–30/sqm (KES 2,500–3,800/sqft)',
                'Grade A Warehouse (Port/SEZ): USD 5–8/sqm (KES 650–1,000/sqft)',
                'Prime Residential (2-bed): USD 1,000–1,800/month',
                'Prime Yield: Office 8.5–9.5% | Retail 9.0–10.0% | Industrial 9.5–11.0%',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Key Location"
            title="Dar es Salaam — the commercial engine"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Link to="/markets/africa/tanzania/dar-es-salaam" className="card-institutional group p-6 text-center">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mx-auto mb-4 transition-colors group-hover:bg-gold-400">
                <MapPin className="w-6 h-6 text-navy-700 transition-colors group-hover:text-navy-950" />
              </div>
              <h3 className="font-serif text-lg text-navy-900 group-hover:text-navy-700">Dar es Salaam</h3>
              <p className="text-sm text-stone-500">Commercial capital & port</p>
            </Link>
            <div className="card-institutional p-6 text-center">
              <div className="w-12 h-12 bg-stone-100 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-6 h-6 text-stone-400" />
              </div>
              <h3 className="font-serif text-lg text-navy-900">Dodoma</h3>
              <p className="text-sm text-stone-500">Political capital — government-led growth</p>
            </div>
            <div className="card-institutional p-6 text-center">
              <div className="w-12 h-12 bg-stone-100 flex items-center justify-center mx-auto mb-4">
                <Factory className="w-6 h-6 text-stone-400" />
              </div>
              <h3 className="font-serif text-lg text-navy-900">Industrial Zones</h3>
              <p className="text-sm text-stone-500">Kurasini, Mabibo, Kibaha, Bagamoyo SEZ</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Explore Tanzania's port-driven property market"
        description="From Dar es Salaam's Grade A offices to Bagamoyo's SEZ potential, Tanzania offers scale and connectivity for long-horizon investors."
        primaryLabel="Request Tanzania Report"
        primaryLink="/contact"
        secondaryLabel="View Dar es Salaam Detail"
        secondaryLink="/markets/africa/tanzania/dar-es-salaam"
      />
    </>
  );
}

export default MarketsAfricaTanzaniaPage;