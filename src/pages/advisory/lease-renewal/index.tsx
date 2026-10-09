import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, RefreshCw, Calendar, Search, TrendingUp } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function AdvisoryLeaseRenewalPage() {
  return (
    <>
      <Seo
        title="Lease Renewal Advisory | Murivest Lettings"
        description="Strategic lease renewal advisory to optimise terms and protect your position in the market."
        path="/advisory/lease-renewal"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Advisory', path: '/advisory' }, { name: 'Lease Renewal Advisory', path: '/advisory/lease-renewal' }]}
      />
      <PageHero
        label="Advisory"
        title="Lease renewal advisory"
        subtitle="Optimise your lease renewal strategy with our institutional approach."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Advisory', path: '/advisory' }, { name: 'Lease Renewal Advisory', path: '/advisory/lease-renewal' }]}
      />

      {/* Renewal Planning */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Renewal Planning" title="Proactive renewal strategy, not reactive negotiation" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Most occupiers and landlords approach lease renewal too late, limiting their options and negotiating leverage.
                We advocate early engagement — typically 18-24 months before expiry — to build a comprehensive renewal
                strategy that preserves flexibility and optimises commercial terms.
              </p>
              <CheckList items={[
                'Lease event calendar & critical date tracking',
                'Early strategy workshops with stakeholders',
                'Holdover risk assessment & mitigation',
                'Alternative accommodation pipeline development',
                'Negotiation mandate & fallback positions',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Lease renewal planning"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Market Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Market Analysis</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Evidence-based market intelligence to inform renewal positioning.
              </p>
              <CheckList items={[
                'Current market rent & incentive benchmarks',
                'Comparable lease transaction analysis',
                'Supply pipeline & vacancy trend assessment',
                'Landlord motivation & portfolio context',
                'Occupier demand dynamics in submarket',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Negotiation Support</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Expert representation throughout the renewal negotiation process.
              </p>
              <CheckList items={[
                'Heads of terms preparation & strategy',
                'Rent review mechanism optimisation',
                'Service charge cap & audit provisions',
                'Break clause & flexibility negotiations',
                'Documentation review & legal coordination',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Lease expiry approaching?"
        description="Don't leave renewal to chance. Engage our advisory team 18-24 months before expiry to secure optimal terms and maintain strategic flexibility."
        primaryLabel="Schedule a Renewal Review"
        primaryLink="/contact"
        secondaryLabel="Lease Negotiation"
        secondaryLink="/advisory/lease-negotiation"
      />
    </>
  );
}

export default AdvisoryLeaseRenewalPage;