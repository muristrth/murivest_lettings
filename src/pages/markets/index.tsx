import { Link } from 'react-router-dom';
import { Globe, Building2, TrendingUp, MapPin, BarChart3, ShieldCheck } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function MarketsIndexPage() {
  return (
    <>
      <Seo
        title="Market Intelligence | Murivest Lettings"
        description="Property market intelligence across our mandate markets: UK, UAE, Kenya, South Africa and the US."
        path="/markets"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }]}
      />
      <PageHero
        label="Markets"
        title="Market intelligence"
        subtitle="Property market analysis across our mandate markets."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Market Coverage" title="Pan-regional property intelligence for global investors" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Murivest Lettings provides market intelligence across five mandate markets —
                  Kenya, United Kingdom, United Arab Emirates, South Africa and the United States.
                  Our coverage spans commercial, residential, industrial and alternative sectors,
                  delivering actionable insights for investors, occupiers and developers operating
                  across borders.
                </p>
                <p>
                  Each market is analysed through a consistent framework: macroeconomic drivers,
                  supply-demand dynamics, rental and capital value trends, regulatory environment,
                  tax considerations and risk factors. This standardised approach enables
                  genuine cross-market comparison and portfolio-level decision making.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Global property markets"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { path: '/markets/africa', name: 'Africa', icon: Globe, desc: 'Kenya, Rwanda, Tanzania, Uganda, South Africa', markets: 5 },
              { path: '/markets/europe', name: 'Europe', icon: Building2, desc: 'United Kingdom, Germany', markets: 2 },
              { path: '/markets/middle-east', name: 'Middle East', icon: TrendingUp, desc: 'United Arab Emirates', markets: 1 },
            ].map((region) => (
              <Link key={region.name} to={region.path} className="card-institutional group p-6">
                <div className="w-10 h-10 bg-navy-50 flex items-center justify-center mb-4 transition-colors group-hover:bg-gold-400">
                  <region.icon className="w-5 h-5 text-navy-700 transition-colors group-hover:text-navy-950" />
                </div>
                <h3 className="font-serif text-lg text-navy-900 mb-1 group-hover:text-navy-700">{region.name}</h3>
                <p className="text-xs text-stone-500 mb-2">{region.desc}</p>
                <div className="flex items-center gap-2 text-xs text-gold-500">
                  <MapPin className="w-3.5 h-3.5" /> {region.markets} Markets
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Mandate Markets Overview"
            title="Standardised analysis across diverse economies"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div>
              <h4 className="font-serif text-lg text-navy-900 mb-4">Research Framework</h4>
              <CheckList items={[
                'Macroeconomic context: GDP, inflation, FX, interest rates',
                'Urbanisation & demographics: population, income, migration',
                'Supply pipeline: completions, under construction, planned',
                'Occupier demand: sectors, space take-up, requirements',
                'Rental & capital trends: prime/secondary, yields, forecasts',
                'Policy & regulation: planning, tax, foreign ownership, ESG',
              ]} />
            </div>
            <div>
              <h4 className="font-serif text-lg text-navy-900 mb-4">Sector Coverage</h4>
              <CheckList items={[
                'Office: Grade A/B, flex, co-working, submarkets',
                'Retail: malls, high street, neighbourhood, e-commerce impact',
                'Industrial: warehousing, manufacturing, cold storage, logistics',
                'Residential: build-to-rent, student, senior, affordable',
                'Alternatives: data centres, life sciences, film studios',
                'Hospitality & leisure: hotels, serviced apartments',
              ]} />
            </div>
            <div>
              <h4 className="font-serif text-lg text-navy-900 mb-4">Delivery Formats</h4>
              <CheckList items={[
                'Quarterly market reports by city and sector',
                'Annual outlook publications with 12-month forecasts',
                'Bespoke investment memoranda for specific opportunities',
                'Portfolio stress-testing and scenario analysis',
                'Market entry studies for cross-border expansion',
                'Real-time alerts on significant transactions and policy shifts',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Access institutional-grade market intelligence"
        description="Subscribe to our quarterly reports or commission bespoke analysis for your investment or expansion decisions."
        primaryLabel="Request Market Report"
        primaryLink="/contact"
        secondaryLabel="View Market Pages"
        secondaryLink="/markets/africa"
      />
    </>
  );
}

export default MarketsIndexPage;