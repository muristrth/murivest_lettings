import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function AdvisoryLeaseNegotiationPage() {
  return (
    <>
      <Seo
        title="Lease Negotiation | Murivest Lettings"
        description="Strategic lease negotiation for commercial tenants and landlords across Kenya. Protecting your interests at the negotiation table."
        path="/advisory/lease-negotiation"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Advisory', path: '/advisory' }, { name: 'Lease Negotiation', path: '/advisory/lease-negotiation' }]}
      />
      <PageHero
        label="Advisory"
        title="Lease negotiation"
        subtitle="Strategic negotiation for commercial lease agreements across Kenya."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Advisory', path: '/advisory' }, { name: 'Lease Negotiation', path: '/advisory/lease-negotiation' }]}
      />

      {/* Negotiation Approach */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Our Approach" title="Negotiation grounded in market evidence" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Effective lease negotiation requires more than commercial instinct — it demands rigorous market analysis,
                comparable evidence, financial modelling and a clear understanding of both parties' constraints.
                We bring institutional discipline to every negotiation, whether representing tenants or landlords.
              </p>
              <CheckList items={[
                'Comparable evidence database & rent benchmarking',
                'Financial modelling of total occupancy cost',
                'Heads of terms strategy & drafting',
                'Service charge structure analysis & capping',
                'Break clause, renewal & assignment negotiations',
                'Fit-out contribution & rent-free period optimisation',
                'Legal coordination & documentation oversight',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Lease negotiation consultation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Tenant Representation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Tenant Representation</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Exclusive representation ensuring tenant interests are prioritised throughout the lease lifecycle.
              </p>
              <CheckList items={[
                'Requirements definition & space programming',
                'Market-wide search & comparative analysis',
                'Negotiation of favourable lease terms',
                'Service charge transparency & audit rights',
                'Flexibility provisions: breaks, assignment, subletting',
              ]} />
            </div>

            {/* Landlord Representation */}
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Landlord Representation</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Maximising rental value and protecting asset quality through strategic lease structuring.
              </p>
              <CheckList items={[
                'Optimal rent & service charge structuring',
                'Tenant covenant assessment & credit analysis',
                'Lease terms protecting asset value & flexibility',
                'Security packages: deposits, guarantees, rent deposits',
                'Reversionary value preservation',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Entering lease negotiations?"
        description="Whether you're a tenant seeking favourable terms or a landlord protecting asset value, our negotiation expertise delivers measurable outcomes."
        primaryLabel="Engage Our Negotiators"
        primaryLink="/contact"
        secondaryLabel="Lease Renewal Advisory"
        secondaryLink="/advisory/lease-renewal"
      />
    </>
  );
}

export default AdvisoryLeaseNegotiationPage;