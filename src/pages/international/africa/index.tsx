import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, Globe, MapPin as MapPinIcon, Flag, Users as UsersIcon, Plane, Map, Landmark } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function InternationalAfricaPage() {
  return (
    <>
      <Seo
        title="Africa Property Services | Murivest Lettings"
        description="Property advisory and management services across African markets."
        path="/international/africa"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'International', path: '/international' }, { name: 'Africa Services', path: '/international/africa' }]}
      />
      <PageHero
        label="International"
        title="Africa services"
        subtitle="Property services across African markets."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'International', path: '/international' }, { name: 'Africa Services', path: '/international/africa' }]}
      />

      {/* Market Coverage */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Market Coverage" title="East Africa focus, continent-wide reach" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Our primary operational depth is in Kenya, Tanzania, Uganda and Rwanda — where we have
                boots-on-the-ground teams, proprietary data and established networks. For broader African
                markets, we work through vetted local partners in our global network, maintaining quality
                control through our institutional oversight framework.
              </p>
              <CheckList items={[
                'Kenya: Full-service operations (Nairobi, Mombasa, Kisumu, Eldoret)',
                'Tanzania: Advisory & management (Dar es Salaam, Arusha)',
                'Uganda: Market entry & asset management (Kampala, Entebbe)',
                'Rwanda: Investment advisory & development support (Kigali)',
                'Ethiopia: Market intelligence & partner referral (Addis Ababa)',
                'West & Southern Africa: Partner network referral',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="African property markets"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Local Partnerships */}
          <div className="bg-white border border-stone-200 p-10 lg:p-12">
            <SectionHeader
              label="Local Partnerships"
              title="Quality-controlled partner network"
              subtitle="Where we don't operate directly, we engage vetted local firms — maintaining our standards through formal agreements, reporting templates and oversight protocols."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: ShieldCheck, title: 'Due Diligence', desc: 'Partner financial health, licence verification, track record, insurance and compliance validation.' },
                { icon: FileBarChart, title: 'Standardised Reporting', desc: 'Uniform reporting templates, data standards, currency conversion and consolidation methodology.' },
                { icon: UsersIcon, title: 'Governance Oversight', desc: 'Quarterly partner reviews, SLA monitoring, escalation paths and mandate alignment.', },
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
        title="African property portfolio requirements?"
        description="Whether you're investing across multiple African markets or need local execution in a specific country, our Africa desk coordinates seamless cross-border service delivery."
        primaryLabel="Discuss Your Mandate"
        primaryLink="/contact"
        secondaryLabel="Global Network"
        secondaryLink="/international/global-network"
      />
    </>
  );
}

export default InternationalAfricaPage;