import { Link } from 'react-router-dom';
import { Building2, Plane, MapPin, ShieldCheck, FileText, Users, Briefcase, ArrowRight } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function TenantsCorporateRelocationPage() {
  return (
    <>
      <Seo
        title="Corporate Relocation | Murivest Lettings"
        description="Support for businesses relocating to or within Kenya. End-to-end relocation services for employees and executives."
        path="/tenants/corporate-relocation"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'For Tenants', path: '/tenants' },
          { name: 'Corporate Relocation', path: '/tenants/corporate-relocation' }
        ]}
      />
      <PageHero
        label="Tenants"
        title="Corporate relocation"
        subtitle="Support for businesses relocating to or within Kenya."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'For Tenants', path: '/tenants' },
          { name: 'Corporate Relocation', path: '/tenants/corporate-relocation' }
        ]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Relocation Services" title="End-to-end support for your workforce" />
              <CheckList items={[
                'Pre-arrival property search and shortlisting matched to budget and policy',
                'Lease negotiation and documentation review for corporate tenancies',
                'Move-in coordination including utilities setup and inventory',
                'Area orientation — schools, healthcare, shopping, commute routes',
                'Ongoing tenancy management and point of contact for assignees',
                'Repatriation and move-out management at assignment end',
                'Policy compliance and cost control reporting for HR/Global Mobility',
                'Single point of accountability — one partner for all relocation property needs',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Corporate relocation consultation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="bg-navy-950 p-10 lg:p-12">
            <SectionHeader
              label="Our Process"
              title="Structured relocation, delivered at scale"
              subtitle="We align with your mobility policy to deliver consistent outcomes for every assignee."
              centered
              light
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: Plane, title: 'Brief & Search', desc: 'Receive policy brief, define criteria, shortlist vetted properties with virtual tours.' },
                { icon: ShieldCheck, title: 'Secure & Document', desc: 'Negotiate lease terms, review clauses, execute agreements with corporate protections.' },
                { icon: MapPin, title: 'Settle & Support', desc: 'Coordinate move-in, utilities, orientation. Provide ongoing tenancy management.' },
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
        title="Relocating employees to Kenya?"
        description="Partner with Murivest Lettings for seamless corporate relocations. We manage the property side so your assignees can focus on their role."
        primaryLabel="Discuss Your Programme"
        primaryLink="/contact"
        secondaryLabel="Tenant Services"
        secondaryLink="/tenants"
      />
    </>
  );
}

export default TenantsCorporateRelocationPage;