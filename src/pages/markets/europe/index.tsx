import { Link } from 'react-router-dom';
import { Globe, Building2, MapPin, TrendingUp, BarChart3, ShieldCheck } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function MarketsEuropePage() {
  return (
    <>
      <Seo
        title="European Property Markets | Murivest Lettings"
        description="Property market analysis across key European markets."
        path="/markets/europe"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Europe', path: '/markets/europe' }]}
      />
      <PageHero
        label="Markets"
        title="Europe"
        subtitle="European property market intelligence."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Europe', path: '/markets/europe' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Market Coverage" title="Mature, transparent markets with deep institutional capital" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Europe's property markets are the most transparent and liquid globally,
                  with deep institutional capital, sophisticated legal frameworks and
                  comprehensive data ecosystems. Our European mandate covers Germany —
                  Europe's largest economy with a resilient, yield-focused market — and
                  the United Kingdom — the continent's largest real estate investment
                  market with unparalleled sectoral depth and global capital access.
                </p>
                <p>
                  Both markets offer: REIT regimes with tax efficiency, deep derivative
                  and debt markets, ESG regulatory leadership (EU Taxonomy, UK Net Zero),
                  and strong occupational demand from global corporates. For African
                  investors, Europe provides diversification, hard-currency income and
                  capital preservation. Our analysis covers prime and secondary markets
                  across office, logistics, residential, retail and alternatives.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="European city skyline"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { path: '/markets/europe/germany', name: 'Germany', icon: Building2, desc: 'Europe\'s largest economy, yield-focused', cities: 'Berlin, Munich, Frankfurt, Hamburg, Cologne' },
              { path: '/markets/europe/united-kingdom', name: 'United Kingdom', icon: Globe, desc: 'Europe\'s largest RE market, global capital', cities: 'London, Manchester, Birmingham, Edinburgh, Glasgow' },
            ].map((market) => (
              <Link key={market.name} to={market.path} className="card-institutional group p-8">
                <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-5 transition-colors group-hover:bg-gold-400">
                  <market.icon className="w-6 h-6 text-navy-700 transition-colors group-hover:text-navy-950" />
                </div>
                <h3 className="font-serif text-xl text-navy-900 mb-3 group-hover:text-navy-700">{market.name}</h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-4">{market.desc}</p>
                <p className="text-xs text-gold-500 font-medium">{market.cities}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Key Markets Overview"
            title="Prime yield benchmarks and sector dynamics"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-navy-50 p-8 border border-stone-200">
              <h3 className="font-serif text-xl text-navy-900 mb-6">Germany — Prime Yields (indicative)</h3>
              <div className="space-y-3">
                {['Office (Berlin/Munich): 3.0–3.75%', 'Logistics (Prime): 3.5–4.0%', 'Residential (Top 7): 2.5–3.25%', 'Retail (High Street): 4.0–5.0%', 'Alternatives (Data Centres): 4.0–4.5%'].map((item) => (
                  <div key={item} className="flex justify-between text-sm">
                    <span className="text-stone-500">{item.split(':')[0]}:</span>
                    <span className="font-serif text-gold-500">{item.split(':')[1]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy-50 p-8 border border-stone-200">
              <h3 className="font-serif text-xl text-navy-900 mb-6">United Kingdom — Prime Yields (indicative)</h3>
              <div className="space-y-3">
                {['Office (West End): 4.25–4.75%', 'Office (City): 5.0–5.5%', 'Logistics (Prime): 4.25–4.75%', 'Residential (BTR London): 3.5–4.0%', 'Retail (Prime Shopping): 5.5–6.5%', 'Alternatives (Life Sciences): 4.5–5.0%'].map((item) => (
                  <div key={item} className="flex justify-between text-sm">
                    <span className="text-stone-500">{item.split(':')[0]}:</span>
                    <span className="font-serif text-gold-500">{item.split(':')[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Access European market intelligence"
        description="Prime and secondary market analysis, regulatory navigation, tax structuring and cross-border transaction support for Germany and the UK."
        primaryLabel="Request Europe Report"
        primaryLink="/contact"
        secondaryLabel="View Germany Detail"
        secondaryLink="/markets/europe/germany"
      />
    </>
  );
}

export default MarketsEuropePage;