import { Link } from 'react-router-dom';
import { Globe, Building2, MapPin, TrendingUp, BarChart3, ShieldCheck } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function MarketsAfricaPage() {
  return (
    <>
      <Seo
        title="Africa Property Markets | Murivest Lettings"
        description="Property market intelligence across African markets within our mandate coverage."
        path="/markets/africa"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }]}
      />
      <PageHero
        label="Markets"
        title="Africa"
        subtitle="Property market analysis across African markets."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="African Markets Overview" title="High-growth urbanisation driving real estate demand" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Africa's urban population is projected to triple by 2050, creating
                  unprecedented demand for commercial, residential and industrial space.
                  Our African mandate covers five key markets — Kenya, Rwanda, Tanzania,
                  Uganda and South Africa — each at different stages of development but
                  united by strong demographic fundamentals and improving institutional
                  frameworks.
                </p>
                <p>
                  We track each market through a consistent lens: macroeconomic stability,
                  urbanisation trajectory, infrastructure investment, regulatory reform and
                  capital market development. This enables investors to identify comparable
                  opportunities and risks across the continent, from Nairobi's mature
                  Grade A office market to Kigali's emerging build-to-rent sector.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="African city skyline"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { path: '/markets/africa/kenya', name: 'Kenya', icon: Building2, desc: 'East Africa\'s largest economy', cities: 'Nairobi, Mombasa, Naivasha' },
              { path: '/markets/africa/rwanda', name: 'Rwanda', icon: Globe, desc: 'Business reform leader', cities: 'Kigali' },
              { path: '/markets/africa/tanzania', name: 'Tanzania', icon: TrendingUp, desc: 'Port-driven growth', cities: 'Dar es Salaam' },
              { path: '/markets/africa/uganda', name: 'Uganda', icon: MapPin, desc: 'Agricultural & oil potential', cities: 'Kampala' },
              { path: '/markets/europe/united-kingdom', name: 'South Africa', icon: BarChart3, desc: 'Continent\'s most developed REIT market', cities: 'Johannesburg, Cape Town' },
            ].map((market) => (
              <Link key={market.name} to={market.path} className="card-institutional group p-6">
                <div className="w-10 h-10 bg-navy-50 flex items-center justify-center mb-4 transition-colors group-hover:bg-gold-400">
                  <market.icon className="w-5 h-5 text-navy-700 transition-colors group-hover:text-navy-950" />
                </div>
                <h3 className="font-serif text-lg text-navy-900 mb-1 group-hover:text-navy-700">{market.name}</h3>
                <p className="text-xs text-stone-500 mb-2">{market.desc}</p>
                <p className="text-xs text-gold-500 font-medium">{market.cities}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Investment Considerations"
            title="Key themes shaping African real estate"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <h4 className="font-serif text-lg text-navy-900 mb-4">Demographic Tailwinds</h4>
              <CheckList items={[
                'Rapid urbanisation: 4–5% annual urban growth rates',
                'Young population: median age ~19, growing workforce',
                'Rising middle class: consumption-driven demand',
                'Diaspora remittances: significant capital inflows',
                'Regional integration: AfCFTA boosting cross-border trade',
              ]} />
            </div>
            <div>
              <h4 className="font-serif text-lg text-navy-900 mb-4">Structural Opportunities</h4>
              <CheckList items={[
                'Grade A office shortage in most capitals',
                'Build-to-rent residential: institutional pipeline emerging',
                'Logistics & warehousing: e-commerce, manufacturing',
                'Data centres: digital transformation acceleration',
                'Affordable housing: government-backed programmes',
              ]} />
            </div>
            <div>
              <h4 className="font-serif text-lg text-navy-900 mb-4">Risk Factors</h4>
              <CheckList items={[
                'Currency volatility: FX risk on dollar-denominated rents',
                'Regulatory uncertainty: policy shifts, permitting delays',
                'Infrastructure deficits: power, water, transport',
                'Liquidity constraints: limited exit options, long hold periods',
                'Data transparency: limited comparable evidence',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Explore African market opportunities"
        description="From Nairobi's Grade A offices to Kigali's build-to-rent pipeline, our Africa specialists provide actionable intelligence."
        primaryLabel="Request Africa Report"
        primaryLink="/contact"
        secondaryLabel="View Kenya Markets"
        secondaryLink="/markets/africa/kenya"
      />
    </>
  );
}

export default MarketsAfricaPage;