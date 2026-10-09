import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, FileText, BookOpen, Globe, MapPin as MapPinIcon, TrendingUp as TrendingUpIcon, Flag, Map, Landmark, LineChart, PieChart, ArrowUpRight } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function InsightsGlobalRealEstatePage() {
  return (
    <>
      <Seo
        title="Global Real Estate Insights | Murivest Lettings"
        description="Global real estate market trends and their implications for Kenyan commercial property investors."
        path="/insights/global-real-estate"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: 'Global Real Estate', path: '/insights/global-real-estate' }]}
      />
      <PageHero
        label="Insights"
        title="Global real estate"
        subtitle="International market trends and their local impact."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: 'Global Real Estate', path: '/insights/global-real-estate' }]}
      />

      {/* Global Trends */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Global Trends" title="International forces shaping local markets" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Kenya's commercial property market does not exist in isolation. Global capital flows, interest rate
                cycles, ESG mandates, technology disruption and geopolitical shifts all transmit through to local
                pricing, investment appetite and occupier behaviour. We monitor these global drivers and translate
                their implications for East African real estate.
              </p>
              <CheckList items={[
                'Global monetary policy & capital cost transmission',
                'Cross-border capital flows & emerging market allocation',
                'ESG & net-zero mandates driving capital allocation',
                'Technology & workplace transformation (global to local)',
                'Geopolitical risk & supply chain realignment',
                'Demographic shifts & urbanisation mega-trends',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Global real estate trends analysis"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Cross-Border Implications */}
          <div className="bg-white border border-stone-200 p-10 lg:p-12">
            <SectionHeader
              label="Cross-Border Implications"
              title="What global trends mean for Kenya"
              subtitle="Translating international market movements into actionable local insights for investors, occupiers and developers."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                { icon: LineChart, title: 'Interest Rate Sensitivity', desc: 'Fed/ECB/BoE policy rates influence emerging market risk premiums and Kenya\'s cost of capital.' },
                { icon: PieChart, title: 'Capital Allocation Shifts', desc: 'Global institutional allocators rotating between sectors — logistics, data centres, life sciences, housing.' },
                { icon: ArrowUpRight, title: 'Yield Compression Cycles', desc: 'Global yield compression in prime assets transmits to Nairobi Grade-A with 6-12 month lag.' },
                { icon: Globe, title: 'Occupier Behaviour Export', desc: 'Multinational workplace standards, ESG requirements and technology adoption imported via global occupiers.' },
              ].map((item) => (
                <div key={item.title}>
                  <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <h3 className="font-serif text-lg text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Understanding global-local transmission?"
        description="Our research team tracks global real estate trends and their specific implications for Kenyan and East African property markets."
        primaryLabel="Request Global-Local Briefing"
        primaryLink="/contact"
        secondaryLabel="International Services"
        secondaryLink="/international"
      />
    </>
  );
}

export default InsightsGlobalRealEstatePage;