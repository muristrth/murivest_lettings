import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Users, Target, ShieldCheck, Globe2, Briefcase, Lightbulb } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function OccupiersIndexPage() {
  return (
    <>
      <Seo
        title="Occupier Services | Murivest Lettings"
        description="Strategic property services for commercial occupiers across all sectors."
        path="/occupiers"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Occupiers', path: '/occupiers' }]}
      />
      <PageHero
        label="For Occupiers"
        title="Occupier advisory"
        subtitle="Strategic property services for commercial occupiers."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Occupiers', path: '/occupiers' }]}
      />

      {/* Service Overview */}
      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xi mx-auto">
          <SectionHeader
            label="Who We Serve"
            title="Specialised services for every occupier type"
            subtitle="We provide tailored property advisory services for commercial occupiers across all sectors."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Briefcase, title: 'Corporate Tenants', desc: 'Large corporations seeking strategic lease advisory and portfolio management.', href: '/occupiers/corporate' },
              { icon: Globe2, title: 'Multinational Companies', desc: 'International businesses establishing or expanding in Kenya.', href: '/occupiers/multinational-companies' },
              { icon: Building2, title: 'Financial Institutions', desc: 'Banks, insurers and fintech companies with critical infrastructure needs.', href: '/occupiers/financial-institutions' },
              { icon: Users, title: 'Professional Services', desc: 'Law firms, consulting and advisory practices requiring premium office space.', href: '/occupiers/professional-services' },
              { icon: Target, title: 'Technology Companies', desc: 'Tech firms seeking flexible space and modern amenities.', href: '/occupiers/technology-companies' },
              { icon: ShieldCheck, title: 'NGOs & Development', desc: 'Non-profits and development agencies with specific operational requirements.', href: '/occupiers/ngos' },
            ].map((sector) => (
              <Link
                key={sector.title}
                to={sector.href}
                className="group card-institutional p-8 text-center transition-all duration-500 hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-full bg-navy-50 flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:bg-gold-400">
                  <sector.icon className="w-7 h-7 text-navy-700 transition-colors group-hover:text-navy-950" />
                </div>
                <h3 className="font-serif text-xl text-navy-900 mb-3 group-hover:text-navy-700 transition-colors">
                  {sector.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-4">{sector.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding py-20 bg-navy-900 text-ivory-50">
        <div className="max-w-9xi mx-auto">
          <SectionHeader
            label="Our Approach"
            title="How we engage with occupiers"
            subtitle="A structured methodology for every client engagement."
            centered
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { step: '01', title: 'Discover', desc: 'Understand your objectives, constraints and success criteria.' },
              { step: '02', title: 'Analyse', desc: 'Market research, financial modelling and option identification.' },
              { step: '03', title: 'Execute', desc: 'Transaction management, negotiation and post-completion support.' },
            ].map((step) => (
              <div key={step.title} className="text-center">
                <div className="font-serif text-5xl text-gold-200 mb-4">{step.step}</div>
                <h3 className="font-serif text-lg text-ivory-50 mb-2">{step.title}</h3>
                <p className="text-sm text-ivory-200/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Discuss your property requirements"
        description="Whether you're relocating your headquarters or seeking your first Nairobi office, our team is ready to help."
        primaryLabel="Request a Consultation"
        primaryLink="/contact"
        secondaryLabel="View Properties"
        secondaryLink="/properties"
      />
    </>
  );
}

export default OccupiersIndexPage;
