import { Link } from 'react-router-dom';
import { Building2, Briefcase, FileText, Handshake, Target, ShieldCheck } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LeasingCorporateLeasingPage() {
  return (
    <>
      <Seo
        title="Corporate Leasing | Murivest Lettings"
        description="Corporate leasing advisory for large tenants seeking optimal lease terms and locations."
        path="/leasing/corporate-leasing"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Leasing', path: '/leasing' }, { name: 'Corporate Leasing', path: '/leasing/corporate-leasing' }]}
      />
      <PageHero
        label="Leasing"
        title="Corporate leasing"
        subtitle="Strategic leasing for corporate tenants."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Leasing', path: '/leasing' }, { name: 'Corporate Leasing', path: '/leasing/corporate-leasing' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Corporate Tenant Focus" title="Leasing advisory for institutional and corporate occupiers" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Large corporate occupiers face unique challenges in securing premises that align
                  with their operational requirements, brand positioning and financial objectives.
                  Our corporate leasing team provides specialist advisory tailored to the needs
                  of multinational companies, regional headquarters and institutional occupiers.
                </p>
                <p>
                  We act exclusively on behalf of tenants, ensuring conflict-free advice and
                  dedicated representation throughout the site selection, negotiation and
                  documentation process. Our approach combines market intelligence, financial
                  modelling and strategic negotiation to deliver measurable value.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Corporate leasing consultation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="bg-white border border-stone-200 p-10 lg:p-12">
            <SectionHeader
              label="Leasing Process"
              title="A structured approach to corporate site selection"
              subtitle="Our methodology ensures thorough evaluation and optimal outcomes at every stage."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                { icon: Target, title: 'Requirements Analysis', desc: 'Detailed briefing on space, location, budget, timeline and operational needs.' },
                { icon: Building2, title: 'Market Search', desc: 'Comprehensive identification of on and off-market opportunities matching criteria.' },
                { icon: FileText, title: 'Shortlisting & Tours', desc: 'Curated property tours with comparative financial and functional analysis.' },
                { icon: Handshake, title: 'Negotiation & Documentation', desc: 'Heads of terms through to lease execution with specialist legal coordination.' },
              ].map((stage) => (
                <div key={stage.title}>
                  <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                    <stage.icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <h3 className="font-serif text-lg text-navy-900 mb-2">{stage.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-navy-900 text-ivory-50">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Key Benefits"
            title="Why corporates choose Murivest for leasing"
            centered
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              'Exclusive tenant representation — no landlord conflicts',
              'Access to off-market and pre-market opportunities',
              'Financial modelling for total occupancy cost analysis',
              'Benchmarking against comparable transactions',
              'Project management of fit-out and relocation',
              'Ongoing lease administration and renewal tracking',
            ].map((item) => (
              <div key={item} className="border-l border-gold-400/30 pl-5">
                <ShieldCheck className="w-5 h-5 text-gold-300 mb-3" />
                <p className="text-sm text-ivory-200/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Engage our corporate leasing team"
        description="Discuss your space requirements with specialists who understand corporate real estate strategy."
        primaryLabel="Request a Consultation"
        primaryLink="/contact"
        secondaryLabel="Tenant Advisory Services"
        secondaryLink="/services/tenant-advisory"
      />
    </>
  );
}

export default LeasingCorporateLeasingPage;