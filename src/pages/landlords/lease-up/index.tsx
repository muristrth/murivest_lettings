import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, Globe, MapPin as MapPinIcon, Flag, Users as UsersIcon, Plane, Map, Landmark, TrendingUp as TrendingUp2, PieChart, Calculator, ArrowUpRight, Clock, CheckCircle, Award, Zap } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LandlordsLeaseUpPage() {
  return (
    <>
      <Seo
        title="Lease-Up Services | Murivest Lettings"
        description="Accelerated lease-up strategies to minimise void periods and maximise occupancy rates."
        path="/landlords/lease-up"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Landlords', path: '/landlords' }, { name: 'Lease-Up Services', path: '/landlords/lease-up' }]}
      />
      <PageHero
        label="Landlords"
        title="Lease-up services"
        subtitle="Minimise void periods and accelerate occupancy."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Landlords', path: '/landlords' }, { name: 'Lease-Up Services', path: '/landlords/lease-up' }]}
      />

      {/* Lease-Up Strategy */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Lease-Up Strategy" title="Speed to income without compromising quality" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Void periods are the single largest drag on property returns. Our lease-up service combines
                pre-launch preparation, targeted marketing, efficient viewing management and rapid negotiation
                to minimise vacancy. For new developments, we engage 6-12 months before practical completion;
                for re-letting, we activate immediately on notice.
              </p>
              <CheckList items={[
                'Pre-launch: specification finalisation, photography, marketing collateral',
                'Targeted occupier database activation & broker engagement',
                'Digital marketing: portals, social, email, paid search',
                'Viewing management: accompanied, virtual, open days',
                'Offer management: comparative analysis, negotiation, heads of terms',
                'Legal coordination: lease drafting, execution, handover',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Lease-up marketing"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Marketing Approach */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Marketing Approach</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Multi-channel strategy tailored to asset type and target occupier.
              </p>
              <CheckList items={[
                'Professional photography, floorplans, 3D tours',
                'Major portal listings: Jumia, Property24, BuyRentKenya',
                'Targeted LinkedIn & Google Ads to decision-makers',
                'Broker co-operation: 50% fee share, exclusive mandates',
                'Direct occupier outreach: databases, networks, events',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Success Metrics</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                KPIs we track and report throughout the lease-up campaign.
              </p>
              <CheckList items={[
                'Time to first viewing: target <14 days',
                'Viewing-to-offer conversion: target >25%',
                'Offer-to-lease execution: target <21 days',
                'Net effective rent vs. asking: target >95%',
                'Tenant covenant quality: credit-checked, referenced',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Vacant space or development completing?"
        description="Engage our lease-up team early — ideally 6 months before vacancy or practical completion — to secure tenants before the keys are handed over."
        primaryLabel="Start Lease-Up Planning"
        primaryLink="/contact"
        secondaryLabel="Tenant Acquisition"
        secondaryLink="/landlords/tenant-acquisition"
      />
    </>
  );
}

export default LandlordsLeaseUpPage;