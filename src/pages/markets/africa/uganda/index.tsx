import { Link } from 'react-router-dom';
import { Globe, Building2, MapPin, TrendingUp, Factory, Home } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function MarketsAfricaUgandaPage() {
  return (
    <>
      <Seo
        title="Uganda Property Market | Murivest Lettings"
        description="Property market analysis for Uganda."
        path="/markets/africa/uganda"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Uganda', path: '/markets/africa/uganda' }]}
      />
      <PageHero
        label="Markets"
        title="Uganda"
        subtitle="Uganda property market intelligence."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Uganda', path: '/markets/africa/uganda' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Country Overview" title="Agricultural powerhouse with oil catalyst and youthful urbanisation" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Uganda's 48M+ population (median age 16), fertile land, and
                  forthcoming oil production (Lake Albert, ~1.4B barrels) create a
                  compelling long-term property narrative. Kampala, the capital
                  (3.5M+ metro), dominates commercial real estate but secondary
                  cities (Jinja, Mbarara, Gulu, Arua) are growing rapidly along
                  transport corridors. The East African Crude Oil Pipeline (EACOP)
                  and Hoima refinery are catalysing infrastructure and industrial
                  development in the Albertine Graben.
                </p>
                <p>
                  The property market features: a maturing Grade A office cluster
                  in Kampala (CBD, Kololo, Nakasero); mall-led retail (Acacia,
                  Garden City, Victoria, Lugogo); industrial corridors (Namanve,
                  Luzira, Jinja); and a severe housing deficit (~2.4M units) driving
                  affordable housing policy. Challenges include high interest rates,
                  land tenure complexity (mailo, freehold, leasehold), and bureaucratic
                  permitting. The new REIT regulations (2022) may unlock institutional capital.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Kampala skyline"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <SectionHeader label="Market Outlook" title="Oil, infrastructure, demographics — structural drivers" />
              <CheckList items={[
                'Oil Production (2025+): ~200,000 bpd — fiscal revenue, local content, infrastructure',
                'EACOP: 1,443km pipeline — construction logistics, camps, supply chain real estate',
                'Kampala–Malaba SGR: Linking to Kenya port — logistics corridor transformation',
                'Urbanisation: 6% annually — Kampala 10M+ by 2040, secondary cities scaling',
                'Affordable Housing: Government target 200k units — private sector partnerships',
                'REIT Framework: 2022 regulations — first REITs listing 2024–25',
              ]} />
            </div>
            <div>
              <SectionHeader label="Market Indicators" title="Kampala prime benchmarks (indicative, monthly)" />
              <CheckList items={[
                'Grade A Office (Kololo/Nakasero): UGX 35–50/sqft (KES 1,300–1,850/sqft)',
                'Grade B Office (CBD): UGX 20–35/sqft (KES 750–1,300/sqft)',
                'Prime Mall Retail: UGX 50–80/sqft (KES 1,850–3,000/sqft)',
                'Grade A Warehouse (Namanve): UGX 12–18/sqft (KES 450–650/sqft)',
                'Prime Residential (2-bed Kololo): UGX 3–5M/month (KES 110–185k)',
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
            title="Kampala — the dominant commercial market"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Link to="/markets/africa/uganda/kampala" className="card-institutional group p-6 text-center">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mx-auto mb-4 transition-colors group-hover:bg-gold-400">
                <MapPin className="w-6 h-6 text-navy-700 transition-colors group-hover:text-navy-950" />
              </div>
              <h3 className="font-serif text-lg text-navy-900 group-hover:text-navy-700">Kampala</h3>
              <p className="text-sm text-stone-500">Capital & commercial hub</p>
            </Link>
            <div className="card-institutional p-6 text-center">
              <div className="w-12 h-12 bg-stone-100 flex items-center justify-center mx-auto mb-4">
                <Factory className="w-6 h-6 text-stone-400" />
              </div>
              <h3 className="font-serif text-lg text-navy-900">Industrial Corridors</h3>
              <p className="text-sm text-stone-500">Namanve, Luzira, Jinja, Bweyogerere</p>
            </div>
            <div className="card-institutional p-6 text-center">
              <div className="w-12 h-12 bg-stone-100 flex items-center justify-center mx-auto mb-4">
                <Home className="w-6 h-6 text-stone-400" />
              </div>
              <h3 className="font-serif text-lg text-navy-900">Secondary Cities</h3>
              <p className="text-sm text-stone-500">Jinja, Mbarara, Gulu, Arua, Mbale</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Explore Uganda's oil-catalysed property market"
        description="From Kampala's maturing Grade A office to the Albertine Graben's oil-service logistics, Uganda offers growth corridors rare in the region."
        primaryLabel="Request Uganda Report"
        primaryLink="/contact"
        secondaryLabel="View Kampala Detail"
        secondaryLink="/markets/africa/uganda/kampala"
      />
    </>
  );
}

export default MarketsAfricaUgandaPage;