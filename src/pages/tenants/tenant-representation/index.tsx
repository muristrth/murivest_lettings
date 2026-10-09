import { Link } from 'react-router-dom';
import { Shield, Users, Briefcase, FileText, Target, Handshake, Scale, ArrowRight } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function TenantsTenantRepresentationPage() {
  return (
    <>
      <Seo
        title="Tenant Representation | Murivest Lettings"
        description="Representing tenant interests in lease negotiations, renewals and disputes. Independent advisory for corporate and residential tenants in Kenya."
        path="/tenants/tenant-representation"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'For Tenants', path: '/tenants' },
          { name: 'Tenant Representation', path: '/tenants/tenant-representation' }
        ]}
      />
      <PageHero
        label="Tenants"
        title="Tenant representation"
        subtitle="Representing tenant interests in negotiations."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'For Tenants', path: '/tenants' },
          { name: 'Tenant Representation', path: '/tenants/tenant-representation' }
        ]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Representation Scope" title="Your advocate in every property transaction" />
              <CheckList items={[
                'Exclusive representation — we act solely for you, never the landlord',
                'New lease negotiation: rent, terms, incentives, fit-out contributions',
                'Renewal negotiation: market benchmarking, leverage analysis, strategy',
                'Rent review representation: evidence-led challenge of excessive increases',
                'Service charge audit and dispute: scrutiny of budgets, actuals and caps',
                'Dilapidations and reinstatement: liability limitation and settlement',
                'Break clause exercise: timing, compliance and negotiation of surrender terms',
                'Dispute resolution: mediation, arbitration and tribunal representation',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Tenant representation negotiation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="bg-navy-950 p-10 lg:p-12">
            <SectionHeader
              label="Key Benefits"
              title="Why tenants instruct independent representation"
              subtitle="Landlords have professional agents. You should too."
              centered
              light
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                { icon: Shield, title: 'No Conflict', desc: 'We never act for landlords. Our only loyalty is to your outcome.' },
                { icon: Scale, title: 'Market Intelligence', desc: 'Access to comparable transaction data landlords prefer you don\'t see.' },
                { icon: Handshake, title: 'Negotiation Leverage', desc: 'Professional representation signals seriousness and improves terms.' },
                { icon: Target, title: 'Cost Efficiency', desc: 'Fees typically recover through rent savings and avoided liabilities.' },
              ].map((benefit) => (
                <div key={benefit.title} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-gold-300" />
                  </div>
                  <h3 className="font-serif text-lg text-ivory-50 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-ivory-200/60 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <div className="bg-navy-950 p-10 lg:p-12">
            <SectionHeader
              label="When to Engage Us"
              title="The earlier, the better"
              subtitle="Optimal timing maximises your position and minimises cost."
              centered
              light
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: FileText, title: 'Before Heads of Terms', desc: 'Shape the commercial framework before legal drafting locks in positions.' },
                { icon: Calendar, title: '12–18 Months Pre-Expiry', desc: 'Time to benchmark, strategise and negotiate renewal from strength.' },
                { icon: Briefcase, title: 'On Receipt of Rent Review', desc: 'Strict response deadlines — early instruction preserves challenge rights.' },
              ].map((timing) => (
                <div key={timing.title} className="relative pl-14">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-gold-400 flex items-center justify-center text-navy-950 font-bold">
                    <timing.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg text-ivory-50 mb-2">{timing.title}</h3>
                  <p className="text-sm text-ivory-200/60 leading-relaxed">{timing.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Facing a lease negotiation, renewal or dispute?"
        description="Engage independent representation before the landlord's agent gains the upper hand. Initial consultation at no obligation."
        primaryLabel="Request Consultation"
        primaryLink="/contact"
        secondaryLabel="Tenant Services"
        secondaryLink="/tenants"
      />
    </>
  );
}

export default TenantsTenantRepresentationPage;