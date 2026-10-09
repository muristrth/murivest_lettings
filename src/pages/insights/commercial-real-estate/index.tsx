import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, FileText, BookOpen, Globe, MapPin as MapPinIcon, TrendingUp as TrendingUpIcon, Factory, ShoppingBag, Home } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function InsightsCommercialRealEstatePage() {
  return (
    <>
      <Seo
        title="Commercial Real Estate Insights | Murivest Lettings"
        description="Commercial property market trends, analysis and investment commentary from our advisory team."
        path="/insights/commercial-real-estate"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: 'Commercial Real Estate', path: '/insights/commercial-real-estate' }]}
      />
      <PageHero
        label="Insights"
        title="Commercial real estate"
        subtitle="Market trends and analysis for commercial property across Kenya."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: 'Commercial Real Estate', path: '/insights/commercial-real-estate' }]}
      />

      {/* Market Trends */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Market Trends" title="Sector-wide dynamics shaping commercial property" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Kenya's commercial real estate market is undergoing structural shifts driven by urbanisation,
                technology adoption, changing work patterns and evolving consumer behaviour. Our research tracks
                these trends across office, retail, industrial and mixed-use sectors — providing the context
                for informed investment and occupation decisions.
              </p>
              <CheckList items={[
                'Office: Flight to quality, flexible space demand, ESG-driven refurbishment',
                'Retail: Format evolution, experiential concepts, omnichannel integration',
                'Industrial: Logistics modernisation, cold chain investment, last-mile demand',
                'Mixed-Use: Urban densification, live-work-play environments, placemaking',
                'Land: Infrastructure-led value uplift, satellite town emergence',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Commercial real estate market analysis"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Investment Analysis */}
          <div className="bg-white border border-stone-200 p-10 lg:p-12">
            <SectionHeader
              label="Investment Analysis"
              title="Capital markets perspective"
              subtitle="Investment-focused analysis covering yield trends, transaction activity, investor appetite and risk-adjusted returns across sectors."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                { icon: Building2, title: 'Office Yields', desc: 'Prime yields 7.5-8.5%, secondary 9-11%. Rent growth in Grade-A, compression in Grade-B.' },
                { icon: ShoppingBag, title: 'Retail Yields', desc: 'Prime mall yields 8-9%, high street 9-10%. Format shift creating value-add opportunities.' },
                { icon: Factory, title: 'Industrial Yields', desc: 'Prime logistics 9-10%, manufacturing 10-12%. Strong rental growth on limited supply.' },
                { icon: Home, title: 'Residential Yields', desc: 'Prime rental 5-6%, affordable 7-8%. Build-to-rent emerging as institutional asset class.' },
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
        title="Seeking deeper commercial property analysis?"
        description="Our advisory team produces custom market studies, investment memoranda and sector reports for institutional and private clients."
        primaryLabel="Request Custom Analysis"
        primaryLink="/contact"
        secondaryLabel="All Insights"
        secondaryLink="/insights"
      />
    </>
  );
}

export default InsightsCommercialRealEstatePage;