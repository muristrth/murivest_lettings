import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, Globe, MapPin as MapPinIcon, Flag, Users as UsersIcon, Plane, Map, Landmark, Landmark as LandmarkIcon, Coins, Shield, Calculator } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function InternationalMiddleEastPage() {
  return (
    <>
      <Seo
        title="Middle East Property Services | Murivest Lettings"
        description="Property advisory and services for Middle Eastern investors with East African exposure."
        path="/international/middle-east"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'International', path: '/international' }, { name: 'Middle East Services', path: '/international/middle-east' }]}
      />
      <PageHero
        label="International"
        title="Middle East services"
        subtitle="Serving Middle Eastern investors across East Africa."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'International', path: '/international' }, { name: 'Middle East Services', path: '/international/middle-east' }]}
      />

      {/* UAE Investor Focus */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="UAE Investor Focus" title="Deep ties with GCC capital" />
              <p className="text-stone-500 leading-relaxed mb-6">
                The UAE — particularly Dubai and Abu Dhabi — is a primary source of capital into East African
                real estate. We understand GCC investor requirements: Shariah-compliant structures, DIFC/ADGM
                regulatory familiarity, dirham/USD reporting, family office governance and multi-generational
                wealth preservation. Our Middle East desk operates with cultural fluency and structural expertise.
              </p>
              <CheckList items={[
                'Dubai, Abu Dhabi, Sharjah, Qatar, Saudi Arabia coverage',
                'Shariah-compliant structures: Ijara, Murabaha, Musharaka',
                'DIFC/ADGM fund structuring & SPV establishment',
                'Family office governance & succession planning',
                'Dirham/USD reporting with repatriation tracking',
                'Ramadan/Eid calendar awareness in service delivery',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Middle East investor services"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Market Access */}
          <div className="bg-white border border-stone-200 p-10 lg:p-12">
            <SectionHeader
              label="Market Access"
              title="East Africa investment pathways for GCC capital"
              subtitle="Structured products and direct investment routes aligned with GCC investor mandates."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: LandmarkIcon, title: 'Direct Asset Acquisition', desc: 'Grade-A office, prime retail, logistics parks — with full due diligence, negotiation and asset management.' },
                { icon: Coins, title: 'Fund & JV Structures', desc: 'Co-investment vehicles, development joint ventures, Islamic finance compliant fund structures.' },
                { icon: Shield, title: 'Diaspora & Residential', desc: 'Kenyan diaspora in GCC: residential portfolios, build-to-rent, retirement home planning.', },
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
        title="GCC capital targeting East African real estate?"
        description="Our Middle East desk combines cultural fluency, structural expertise and local execution to deliver outcomes aligned with your mandate."
        primaryLabel="Engage Middle East Desk"
        primaryLink="/contact"
        secondaryLabel="UAE Market Insights"
        secondaryLink="/markets/middle-east/uae"
      />
    </>
  );
}

export default InternationalMiddleEastPage;