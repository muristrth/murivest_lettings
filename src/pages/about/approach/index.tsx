import { Link } from 'react-router-dom';
import { ArrowRight, Check, Target, ShieldCheck, Eye, Users, FileBarChart, BarChart3 } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function AboutApproachPage() {
  return (
    <>
      <Seo
        title="Our Approach | Murivest Lettings"
        description="The Murivest method: a structured, documentation-driven approach to property management, leasing and advisory."
        path="/about/approach"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }, { name: 'Our Approach', path: '/about/approach' }]}
      />
      <PageHero
        label="Our Approach"
        title="A structured approach to property stewardship"
        subtitle="Every property engagement follows a documented, audit-ready methodology — from onboarding through ongoing management."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }, { name: 'Our Approach', path: '/about/approach' }]}
      />

      {/* Philosophy */}
      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader label="The Murivest Method" title="A framework, not a process" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  We reject the notion that property management is a set of ad-hoc tasks. Instead,
                  we apply a structured framework that treats every property as an institutional
                  asset — whether it's a single residential unit or a multi-building commercial
                  portfolio.
                </p>
                <p>
                  Our approach is built on five pillars that guide every decision, every
                  interaction, and every report. These are not marketing concepts — they are the
                  operational standards that our property managers, accountants and clients all
                  follow.
                </p>
              </div>
              <div className="mt-8">
                <CheckList items={[
                  'Documentation-first engagement from day one',
                  'Full financial transparency with monthly reporting',
                  'Regular performance benchmarking against market data',
                  'Continuous improvement through quarterly reviews',
                  'Risk management embedded in every process step',
                ]} />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Property management framework in action"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Five Pillars */}
      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Five Pillars"
            title="The foundations of our approach"
            subtitle="Every engagement is governed by five interconnected pillars — each measurable, each auditable, each essential."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Target, title: 'Strategic Alignment', desc: 'Every action ties back to your stated objectives — whether that is maximum yield, tenant retention, or portfolio growth.' },
              { icon: ShieldCheck, title: 'Risk Management', desc: 'Systematic identification and mitigation of operational, financial and compliance risks across every property.' },
              { icon: Eye, title: 'Full Transparency', desc: 'Real-time access to all financial data, maintenance records, tenant communications and performance metrics.' },
              { icon: Users, title: 'Stakeholder Focus', desc: 'Tailored service delivery that prioritises the needs of landlords, tenants and investors at every touchpoint.' },
              { icon: FileBarChart, title: 'Documented Process', desc: 'Every decision, interaction and transaction is captured in an auditable record — from onboarding through exit.' },
            ].map((pillar) => (
              <div key={pillar.title} className="border border-stone-200 p-8 card-institutional">
                <pillar.icon className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-navy-900 mb-3">{pillar.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding py-20 bg-navy-950 text-ivory-50">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Our Process"
            title="Four phases of engagement"
            subtitle="A structured methodology that ensures every property is managed with institutional discipline."
            centered
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              { step: '01', title: 'Onboarding', desc: 'Property assessment, documentation review, and transition plan.' },
              { step: '02', title: 'Implementation', desc: 'System setup, tenant onboarding, and service provider mobilisation.' },
              { step: '03', title: 'Active Management', desc: 'Ongoing operations, performance monitoring, and stakeholder engagement.' },
              { step: '04', title: 'Review & Optimise', desc: 'Quarterly performance reviews, market benchmarking, and continuous improvement.' },
            ].map((phase) => (
              <div key={phase.title} className="border-l border-gold-400/30 pl-6">
                <div className="label-text text-gold-300 mb-2">{phase.step}</div>
                <h3 className="font-serif text-lg text-ivory-50 mb-2">{phase.title}</h3>
                <p className="text-sm text-ivory-200/60 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to engage our team?"
        description="Whether you're evaluating property management for the first time or looking to transition an existing portfolio, we'll provide a tailored proposal within 48 hours."
        primaryLabel="Request a Consultation"
        primaryLink="/contact"
        secondaryLabel="Our Services"
        secondaryLink="/services"
      />
    </>
  );
}

export default AboutApproachPage;
