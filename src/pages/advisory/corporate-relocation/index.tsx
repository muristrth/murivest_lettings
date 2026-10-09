import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, MapPin, Briefcase, Users, FileBarChart, Lightbulb, Globe } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function AdvisoryCorporateRelocationPage() {
  return (
    <>
      <Seo
        title="Corporate Relocation Services | Murivest Lettings"
        description="End-to-end corporate relocation advisory for commercial tenants and businesses establishing a presence in Kenya."
        path="/advisory/corporate-relocation"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Advisory', path: '/advisory' }, { name: 'Corporate Relocation', path: '/advisory/corporate-relocation' }]}
      />
      <PageHero
        label="Advisory"
        title="Corporate relocation advisory"
        subtitle="Strategic support for businesses relocating to or within Kenya."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Advisory', path: '/advisory' }, { name: 'Corporate Relocation', path: '/advisory/corporate-relocation' }]}
      />

      {/* Relocation Process */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Our Approach" title="Structured relocation management" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Corporate relocation involves more than finding space — it requires alignment of business strategy,
                operational requirements, talent considerations and cultural integration. We manage the full lifecycle
                from initial briefing through to post-occupancy review.
              </p>
              <CheckList items={[
                'Business needs assessment & space programming',
                'Location strategy aligned to talent & operations',
                'Market-wide search & comparative shortlisting',
                'Lease negotiation & heads of terms structuring',
                'Fit-out briefing, procurement & project management',
                'Move coordination & vendor management',
                'Post-occupancy evaluation & lease administration setup',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Corporate relocation consultation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Key Considerations */}
          <div className="bg-white border border-stone-200 p-10 lg:p-12">
            <SectionHeader
              label="Key Considerations"
              title="What drives a successful relocation"
              subtitle="We evaluate every relocation against these critical dimensions to ensure the outcome supports your business objectives."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                { icon: MapPin, title: 'Location & Access', desc: 'Proximity to talent pools, transport infrastructure, client ecosystems and amenity clusters.' },
                { icon: Building2, title: 'Building Specification', desc: 'Grade, efficiency, floorplate flexibility, M&E capacity, sustainability credentials and ESG alignment.' },
                { icon: FileBarChart, title: 'Total Occupancy Cost', desc: 'Rent, service charges, fit-out amortisation, utilities, taxes and lifecycle cost modelling.' },
                { icon: Lightbulb, title: 'Future Flexibility', desc: 'Expansion/contraction rights, subletting provisions, break options and technology adaptability.' },
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
        title="Planning a corporate relocation?"
        description="Engage our advisory team early to secure the best options and avoid costly compromises. We'll guide you through every stage."
        primaryLabel="Start a Conversation"
        primaryLink="/contact"
        secondaryLabel="View All Advisory Services"
        secondaryLink="/advisory"
      />
    </>
  );
}

export default AdvisoryCorporateRelocationPage;