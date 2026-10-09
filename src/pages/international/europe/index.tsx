import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, Globe, MapPin as MapPinIcon, Flag, Users as UsersIcon, Plane, Map, Landmark, Shield, Coins, Calculator } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function InternationalEuropePage() {
  return (
    <>
      <Seo
        title="Europe Property Services | Murivest Lettings"
        description="Property advisory and services for European investors with Kenyan and East African exposure."
        path="/international/europe"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'International', path: '/international' }, { name: 'Europe Services', path: '/international/europe' }]}
      />
      <PageHero
        label="International"
        title="Europe services"
        subtitle="Serving European investors across East Africa."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'International', path: '/international' }, { name: 'Europe Services', path: '/international/europe' }]}
      />

      {/* European Investor Services */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="European Investor Services" title="Tailored for European capital" />
              <p className="text-stone-500 leading-relaxed mb-6">
                European investors — from UK family offices to German institutional funds, Dutch developers
                and Nordic impact investors — have distinct requirements: GDPR-compliant data handling,
                EU taxonomy alignment, SFDR reporting, multilingual communication and timezone-aligned
                service delivery. We structure our European desk to meet these expectations.
              </p>
              <CheckList items={[
                'UK, Germany, Netherlands, Nordics, Switzerland coverage',
                'GDPR-compliant data processing & reporting',
                'SFDR Article 8/9 alignment & EU Taxonomy reporting',
                'Multilingual team: English, German, Dutch, Swedish',
                'CET/GMT timezone service hours',
                'European legal & tax advisor coordination',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="European investor services"
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
              title="Structured East Africa access for European capital"
              subtitle="Investment pathways designed for European risk-return profiles and regulatory frameworks."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: Shield, title: 'Risk-Mitigated Structures', desc: 'Joint ventures with local operators, development agreements with stage-gate funding, master lease structures.' },
                { icon: Coins, title: 'Yield-Focused Products', desc: 'Core income funds, build-to-core pipelines, sale-leaseback programmes targeting 8-12% net yields.' },
                { icon: Calculator, title: 'Impact & ESG Allocation', desc: 'Green building certified, affordable housing, renewable energy integration — SFDR Article 9 eligible.', },
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
        title="European capital seeking East African exposure?"
        description="Our European desk provides the local execution, international reporting and regulatory alignment your mandate requires."
        primaryLabel="Connect with European Desk"
        primaryLink="/contact"
        secondaryLabel="UK Services"
        secondaryLink="/markets/europe/united-kingdom"
      />
    </>
  );
}

export default InternationalEuropePage;