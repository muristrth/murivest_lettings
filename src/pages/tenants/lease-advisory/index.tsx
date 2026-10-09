import { Link } from 'react-router-dom';
import { FileText, ShieldCheck, Scale, Lightbulb, Target, Calculator, ArrowRight } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function TenantsLeaseAdvisoryPage() {
  return (
    <>
      <Seo
        title="Lease Advisory | Murivest Lettings"
        description="Optimise your lease terms with expert advisory. Lease review, negotiation support, renewal strategy and exit planning for tenants in Kenya."
        path="/tenants/lease-advisory"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'For Tenants', path: '/tenants' },
          { name: 'Lease Advisory', path: '/tenants/lease-advisory' }
        ]}
      />
      <PageHero
        label="Tenants"
        title="Lease advisory"
        subtitle="Optimise your lease terms with expert advisory."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'For Tenants', path: '/tenants' },
          { name: 'Lease Advisory', path: '/tenants/lease-advisory' }
        ]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Advisory Scope" title="Expert guidance at every lease milestone" />
              <CheckList items={[
                'Pre-signing lease review — clauses, obligations, risks and hidden costs',
                'Rent benchmarking against comparable market evidence',
                'Negotiation support for new leases, renewals and variations',
                'Break clause, renewal option and rent review mechanism analysis',
                'Service charge and operating cost scrutiny and challenge',
                'Fit-out and reinstatement obligation assessment',
                'Subletting, assignment and change of control provisions',
                'Dispute resolution and exit strategy planning',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Lease advisory consultation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="bg-navy-950 p-10 lg:p-12">
            <SectionHeader
              label="Our Process"
              title="Structured advisory, actionable outcomes"
              subtitle="We combine market data, legal knowledge and negotiation experience to protect your position."
              centered
              light
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              {[
                { icon: FileText, title: 'Review', desc: 'Comprehensive lease audit identifying risk clauses, cost exposures and negotiation levers.' },
                { icon: Calculator, title: 'Benchmark', desc: 'Market rent and terms analysis using comparable transaction data and sector indices.' },
                { icon: Lightbulb, title: 'Strategy', desc: 'Tailored negotiation plan with target outcomes, fallback positions and walk-away criteria.' },
                { icon: Target, title: 'Execute', desc: 'Direct negotiation support or advisory behind the scenes — documented outcomes.' },
              ].map((step, i) => (
                <div key={step.title} className="relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gold-400 flex items-center justify-center text-navy-950 font-bold">
                    {i + 1}
                  </div>
                  <div className="pt-14 text-center">
                    <div className="w-14 h-14 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-6 h-6 text-gold-300" />
                    </div>
                    <h3 className="font-serif text-lg text-ivory-50 mb-2">{step.title}</h3>
                    <p className="text-sm text-ivory-200/60 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Entering a new lease or facing a renewal?"
        description="Don't sign without understanding the full cost and risk profile. Our advisory pays for itself through better terms and avoided liabilities."
        primaryLabel="Request Lease Review"
        primaryLink="/contact"
        secondaryLabel="Tenant Services"
        secondaryLink="/tenants"
      />
    </>
  );
}

export default TenantsLeaseAdvisoryPage;