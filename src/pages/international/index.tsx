import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, Globe, MapPin as MapPinIcon, Flag, Users as UsersIcon, Plane } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function InternationalIndexPage() {
  return (
    <>
      <Seo
        title="International Services | Murivest Lettings"
        description="International property services for clients with cross-border market exposure across the UK, UAE, US and Europe."
        path="/international"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'International', path: '/international' }]}
      />
      <PageHero
        label="International"
        title="International services"
        subtitle="Extending our institutional platform beyond Kenya."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'International', path: '/international' }]}
      />

      {/* Service Coverage */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Service Coverage"
            title="Cross-border property services for global clients"
            subtitle="We serve international investors, occupiers and diaspora owners with Kenyan and East African property interests — providing local execution with international reporting standards."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { icon: Globe, title: 'Market Entry', desc: 'Strategy, due diligence, regulatory navigation and local partner access for investors entering East Africa.' },
              { icon: Building2, title: 'Asset Management', desc: 'Portfolio oversight, financial reporting, lease administration and capital expenditure management for remote owners.' },
              { icon: UsersIcon, title: 'Occupier Services', desc: 'Lease negotiation, space planning, portfolio optimisation and workplace strategy for multinational tenants.' },
              { icon: Plane, title: 'Diaspora Support', desc: 'Property management, rental collection, compliance and succession planning for Kenyan diaspora owners.' },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-stone-200 p-8">
                <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-navy-700" />
                </div>
                <h3 className="font-serif text-lg text-navy-900 mb-3">{item.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding py-20 lg:py-28 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Our Process"
            title="Seamless cross-border execution"
            subtitle="A structured approach ensuring international clients receive consistent, transparent service regardless of geography."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              { step: '01', title: 'Onboarding', desc: 'KYC, mandate definition, reporting requirements, communication protocols and approval matrices.' },
              { step: '02', title: 'Execution', desc: 'Local team deployment, market access, transaction management and regulatory coordination.' },
              { step: '03', title: 'Reporting', desc: 'Standardised international reporting: financial, operational, ESG, compliance — in your timezone.' },
              { step: '04', title: 'Governance', desc: 'Quarterly reviews, strategy alignment, performance attribution and mandate evolution.' },
            ].map((stage) => (
              <div key={stage.title} className="border-l border-gold-400/30 pl-6">
                <div className="label-text text-gold-500 mb-2">{stage.step}</div>
                <h3 className="font-serif text-lg text-navy-900 mb-2">{stage.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="International property interests in East Africa?"
        description="Our international desk provides single-point accountability for your East African property portfolio — with reporting standards that meet global institutional requirements."
        primaryLabel="Engage International Desk"
        primaryLink="/contact"
        secondaryLabel="Regional Coverage"
        secondaryLink="/international/africa"
      />
    </>
  );
}

export default InternationalIndexPage;