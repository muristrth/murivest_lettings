import { Link } from 'react-router-dom';
import { Globe, Building2, MapPin, TrendingUp, BarChart3, ShieldCheck } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function MarketsMiddleEastPage() {
  return (
    <>
      <Seo
        title="Middle East Property Markets | Murivest Lettings"
        description="Property market analysis across key Middle Eastern markets."
        path="/markets/middle-east"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Middle East', path: '/markets/middle-east' }]}
      />
      <PageHero
        label="Markets"
        title="Middle East"
        subtitle="Middle Eastern property market intelligence."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Middle East', path: '/markets/middle-east' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Market Overview" title="Gulf diversification, mega-projects, and capital deployment" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  The Middle East property market is anchored by the Gulf Cooperation
                  Council (GCC) states — UAE, Saudi Arabia, Qatar, Kuwait, Bahrain,
                  Oman — each pursuing economic diversification away from hydrocarbons
                  through ambitious national visions (Saudi Vision 2030, UAE Centennial
                  2071, Qatar National Vision 2030). Mega-projects (NEOM, The Line,
                  Diriyah Gate, Dubai Urban Master Plan 2040) drive unprecedented
                  infrastructure and real estate investment.
                </p>
                <p>
                  Our Middle East mandate focuses on the United Arab Emirates — the
                  region's most mature, transparent and institutionally accessible
                  property market. Dubai and Abu Dhabi offer: freehold ownership in
                  designated zones, REIT frameworks (DIFC, ADGM), deep capital markets
                  (DFM, ADX, Nasdaq Dubai), and a legal system based on English common
                  law (DIFC/ADGM courts). Saudi Arabia is emerging rapidly but remains
                  less accessible for foreign institutional capital.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Dubai skyline"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { path: '/markets/middle-east/uae', name: 'United Arab Emirates', icon: Building2, desc: 'Regional hub, freehold zones, REIT regime', cities: 'Dubai, Abu Dhabi, DIFC, ADGM' },
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
            label="UAE Focus"
            title="Dubai and Abu Dhabi — twin engines of Gulf real estate"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-navy-50 p-8 border border-stone-200">
              <h3 className="font-serif text-xl text-navy-900 mb-6">Dubai — Prime Benchmarks (indicative)</h3>
              <div className="space-y-3">
                {['Office (DIFC): AED 180–280/sqft | Yield 6.5–7.5%', 'Office (Downtown/Sheikh Zayed): AED 120–180/sqft | Yield 7.0–8.0%', 'Residential (Prime): AED 150–250/sqft | Yield 5.5–6.5%', 'Residential (Mid-market): AED 80–130/sqft | Yield 6.5–7.5%', 'Logistics (DIP/Jafza): AED 40–60/sqft | Yield 8.0–9.0%', 'Retail (Prime Mall): AED 200–400/sqft | Yield 7.5–8.5%'].map((item) => (
                  <div key={item} className="flex justify-between text-sm">
                    <span className="text-stone-500">{item.split('|')[0]}:</span>
                    <span className="font-serif text-gold-500">{item.split('|')[1]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy-50 p-8 border border-stone-200">
              <h3 className="font-serif text-xl text-navy-900 mb-6">Abu Dhabi — Prime Benchmarks (indicative)</h3>
              <div className="space-y-3">
                {['Office (ADGM/Al Maryah): AED 140–200/sqft | Yield 7.0–8.0%', 'Office (CBD/Khalifa): AED 100–150/sqft | Yield 7.5–8.5%', 'Residential (Al Reem/Al Maryah): AED 120–180/sqft | Yield 6.0–7.0%', 'Residential (Mainland): AED 70–110/sqft | Yield 7.0–8.0%', 'Logistics (KIZAD/ICAD): AED 35–50/sqft | Yield 8.5–9.5%', 'Retail (Prime): AED 150–250/sqft | Yield 8.0–9.0%'].map((item) => (
                  <div key={item} className="flex justify-between text-sm">
                    <span className="text-stone-500">{item.split('|')[0]}:</span>
                    <span className="font-serif text-gold-500">{item.split('|')[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Access Middle East market intelligence"
        description="Freehold zone analysis, DIFC/ADGM regulatory navigation, mega-project pipeline tracking and cross-GCC capital flow analysis."
        primaryLabel="Request Middle East Report"
        primaryLink="/contact"
        secondaryLabel="View UAE Detail"
        secondaryLink="/markets/middle-east/uae"
      />
    </>
  );
}

export default MarketsMiddleEastPage;