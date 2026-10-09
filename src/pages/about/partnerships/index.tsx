import { ShieldCheck, Users, Target, Globe2, FileCheck, Handshake } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function AboutPartnershipsPage() {
  return (
    <>
      <Seo
        title="Partnership Programme | Murivest Lettings"
        description="Our partnership programme for brokers, consultants and referral partners across Kenya and East Africa."
        path="/about/partnerships"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }, { name: 'Partnerships', path: '/about/partnerships' }]}
      />
      <PageHero
        label="Partnerships"
        title="Partner with us"
        subtitle="We work with qualified partners — from legal firms to international relocation consultants — to extend our institutional property services to their clients."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }, { name: 'Partnerships', path: '/about/partnerships' }]}
      />

      {/* Partnership Overview */}
      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader label="Partnership Programme" title="Extending our platform through trusted partners" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  We partner with qualified professionals who serve clients with property needs across
                  Kenya and East Africa. Our partnership programme is built on shared values of
                  competence, transparency and relationship-driven service.
                </p>
                <p>
                  As a partner, you'll have access to our institutional processes, marketing
                  materials, and a dedicated support team — while maintaining your independence
                  and client relationships.
                </p>
              </div>
              <div className="mt-8">
                <CheckList items={[
                  'Revenue sharing on referred property management mandates',
                  'Co-marketing support and brand materials',
                  'Access to our institutional processes and tools',
                  'Dedicated partner support team',
                  'Referral incentives for successful lettings',
                  'Quarterly partner briefings and market updates',
                ]} />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Partnership meeting"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Who We Work With"
            title="Qualified partners across professional disciplines"
            subtitle="Our partnership programme is designed for professionals who share our commitment to institutional-grade property services."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { icon: ShieldCheck, title: 'Legal Firms', desc: 'Law firms specialising in real estate, conveyancing and corporate relocation.' },
              { icon: Users, title: 'Relocation Consultants', desc: 'Corporate relocation and immigration consultants serving international businesses.' },
              { icon: Target, title: 'Brokers & Agents', desc: 'Qualified property professionals seeking access to institutional processes.' },
              { icon: Globe2, title: 'International Advisors', desc: 'Property advisors and consultants serving international investors in East Africa.' },
              { icon: FileCheck, title: 'Accountants & Advisors', desc: 'Financial advisors and accountants serving property investors.' },
              { icon: Handshake, title: 'Investment Platforms', desc: 'Real estate investment platforms and family office advisors.' },
            ].map((partner) => (
              <div key={partner.title} className="border border-stone-200 p-8 card-institutional">
                <partner.icon className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-navy-900 mb-3">{partner.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding py-20 bg-navy-900 text-ivory-50">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="How to Join"
            title="A simple three-step process"
            subtitle="Becoming a partner is straightforward. We'll handle the onboarding so you can start referring clients immediately."
            centered
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { step: '01', title: 'Application', desc: 'Complete our partner application form. We'll review your credentials and discuss fit.' },
              { step: '02', title: 'Onboarding', desc: 'Sign the partnership agreement, receive your marketing materials and access to our processes.' },
              { step: '03', title: 'Refer & Grow', desc: 'Start referring clients and receive support on every transaction.' },
            ].map((step) => (
              <div key={step.title} className="text-center border-l border-gold-400/30 pl-6">
                <div className="label-text text-gold-300 mb-2">{step.step}</div>
                <h3 className="font-serif text-lg text-ivory-50 mb-2">{step.title}</h3>
                <p className="text-sm text-ivory-200/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to become a partner?"
        description="Join our growing network of qualified professionals serving property investors and occupiers across Kenya and East Africa."
        primaryLabel="Apply for Partnership"
        primaryLink="/contact"
        secondaryLabel="Our Services"
        secondaryLink="/services"
      />
    </>
  );
}

export default AboutPartnershipsPage;
