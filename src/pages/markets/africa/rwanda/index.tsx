import { Link } from 'react-router-dom';
import { Globe, Building2, MapPin, TrendingUp, Factory, Home } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function MarketsAfricaRwandaPage() {
  return (
    <>
      <Seo
        title="Rwanda Property Market | Murivest Lettings"
        description="Property market analysis for Rwanda."
        path="/markets/africa/rwanda"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Rwanda', path: '/markets/africa/rwanda' }]}
      />
      <PageHero
        label="Markets"
        title="Rwanda"
        subtitle="Rwanda property market intelligence."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Rwanda', path: '/markets/africa/rwanda' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Country Overview" title="Africa's reform leader with a vision for urbanised, knowledge-based economy" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Rwanda has positioned itself as Africa's most business-friendly
                  jurisdiction — top 40 globally in World Bank Doing Business rankings.
                  The Vision 2050 targets upper-middle-income status through
                  urbanisation, services, light manufacturing and knowledge economy.
                  Kigali's master plan envisions a polycentric city of 3.8M by 2050
                  with satellite towns, green corridors and mixed-use nodes.
                </p>
                <p>
                  Real estate has responded: Grade A office (Kigali Heights, Grand
                  Pension Plaza), retail (Kigali City Tower, MTN Centre), hospitality
                  (Marriott, Radisson, Kigali Convention Centre) and residential
                  (Vision City, affordable housing programmes). The Rwanda Housing
                  Authority and new rental law bring institutional rigour. Challenges
                  include limited local capital, construction cost inflation and
                  a small domestic market.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Kigali skyline"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <SectionHeader label="Investment Climate" title="Stability, transparency, regional gateway" />
              <CheckList items={[
                'Political stability: Consistent governance since 1994',
                'Regulatory clarity: One-stop investment centre, clear property rights',
                'Currency stability: RWF managed float, low inflation targeting',
                'Regional integration: EAC, AfCFTA, AGOA — duty-free access',
                'Infrastructure: Kigali Special Economic Zone, Bugesera Airport (planned)',
                'Talent: Carnegie Mellon Africa, ALU, growing tech ecosystem',
              ]} />
            </div>
            <div>
              <SectionHeader label="Market Indicators" title="Kigali prime benchmarks (indicative, monthly rent)" />
              <CheckList items={[
                'Grade A Office: USD 18–25/sqm (KES 2,300–3,200/sqft)',
                'Grade B Office: USD 12–18/sqm (KES 1,500–2,300/sqft)',
                'Prime Retail (Mall): USD 25–35/sqm (KES 3,200–4,500/sqft)',
                'Grade A Warehouse: USD 6–9/sqm (KES 750–1,150/sqft)',
                'Prime Residential (2-bed): USD 1,200–2,000/month',
                'Prime Yield (Office): 8.0–9.0% | Retail: 8.5–9.5%',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Key Location"
            title="Kigali — the primary and effectively only institutional market"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Link to="/markets/africa/rwanda/kigali" className="card-institutional group p-6 text-center">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mx-auto mb-4 transition-colors group-hover:bg-gold-400">
                <MapPin className="w-6 h-6 text-navy-700 transition-colors group-hover:text-navy-950" />
              </div>
              <h3 className="font-serif text-lg text-navy-900 group-hover:text-navy-700">Kigali</h3>
              <p className="text-sm text-stone-500">Capital & commercial hub</p>
            </Link>
            <div className="card-institutional p-6 text-center">
              <div className="w-12 h-12 bg-stone-100 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-6 h-6 text-stone-400" />
              </div>
              <h3 className="font-serif text-lg text-navy-900">Secondary Towns</h3>
              <p className="text-sm text-stone-500">Huye, Musanze, Rubavu — emerging</p>
            </div>
            <div className="card-institutional p-6 text-center">
              <div className="w-12 h-12 bg-stone-100 flex items-center justify-center mx-auto mb-4">
                <Factory className="w-6 h-6 text-stone-400" />
              </div>
              <h3 className="font-serif text-lg text-navy-900">Industrial Zones</h3>
              <p className="text-sm text-stone-500">Kigali SEZ, Bugesera — planned</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Explore Rwanda's structured property market"
        description="From Kigali's Grade A offices to Vision City's affordable housing pipeline, Rwanda offers clarity rare in African markets."
        primaryLabel="Request Rwanda Report"
        primaryLink="/contact"
        secondaryLabel="View Kigali Detail"
        secondaryLink="/markets/africa/rwanda/kigali"
      />
    </>
  );
}

export default MarketsAfricaRwandaPage;