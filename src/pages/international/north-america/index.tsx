import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, Globe, MapPin as MapPinIcon, Flag, Users as UsersIcon, Plane, Map, Landmark, DollarSign, Shield, Calculator, Flag as FlagIcon } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function InternationalNorthAmericaPage() {
  return (
    <>
      <Seo
        title="North America Property Services | Murivest Lettings"
        description="Property advisory and services for North American investors with East African exposure."
        path="/international/north-america"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'International', path: '/international' }, { name: 'North America Services', path: '/international/north-america' }]}
      />
      <PageHero
        label="International"
        title="North America services"
        subtitle="Serving North American investors across East Africa."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'International', path: '/international' }, { name: 'North America Services', path: '/international/north-america' }]}
      />

      {/* North American Investor Services */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="North American Investor Services" title="Structured for US & Canadian capital" />
              <p className="text-stone-500 leading-relaxed mb-6">
                North American investors — US REITs, Canadian pension funds, family offices, endowments and
                development firms — require institutional-grade execution: SEC/OSFI compliance familiarity,
                USD/CAD reporting, 1031 exchange awareness, ERISA/FASB alignment, and EST/PST/MST timezone
                service. Our North America desk delivers this with local East African execution capability.
              </p>
              <CheckList items={[
                'US East Coast, West Coast, Canada coverage',
                'EST/PST/MST timezone-aligned service hours',
                'USD/CAD reporting with GAAP/IFRS reconciliation',
                'SEC Reg D, Reg S, 1031 exchange structuring',
                'ERISA/FASB/ASC 842 compliance awareness',
                'Canadian pension plan (PPP) investment parameters',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="North American investor services"
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
              title="East Africa pathways for North American capital"
              subtitle="Investment structures aligned with North American risk-return profiles and regulatory frameworks."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: DollarSign, title: 'Core & Core-Plus', desc: 'Stabilised Grade-A office, retail, logistics — targeting 7-9% net yields with USD-denominated leases.' },
                { icon: Calculator, title: 'Value-Add & Development', desc: 'Repositioning, densification, build-to-core — structured with preferred equity/mezzanine, 12-15% IRR targets.' },
                { icon: Shield, title: 'Impact & Climate Finance', desc: 'Green bonds, DFC/USAID aligned, affordable housing, renewable energy — meeting ESG allocation mandates.', },
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
        title="North American capital seeking East African exposure?"
        description="Our North America desk provides the institutional execution, regulatory alignment and timezone service your investment committee expects."
        primaryLabel="Connect with North America Desk"
        primaryLink="/contact"
        secondaryLabel="Global Network"
        secondaryLink="/international/global-network"
      />
    </>
  );
}

export default InternationalNorthAmericaPage;