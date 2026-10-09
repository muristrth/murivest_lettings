import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, Globe, MapPin as MapPinIcon, Flag, Users as UsersIcon, Plane, Map, Landmark, CheckCircle, UserCheck, Shield, Heart, Zap } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LandlordsTenantAcquisitionPage() {
  return (
    <>
      <Seo
        title="Tenant Acquisition | Murivest Lettings"
        description="Strategic tenant acquisition to reduce void periods and secure quality occupiers."
        path="/landlords/tenant-acquisition"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Landlords', path: '/landlords' }, { name: 'Tenant Acquisition', path: '/landlords/tenant-acquisition' }]}
      />
      <PageHero
        label="Landlords"
        title="Tenant acquisition"
        subtitle="Secure quality tenants quickly and reduce void periods."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Landlords', path: '/landlords' }, { name: 'Tenant Acquisition', path: '/landlords/tenant-acquisition' }]}
      )

      {/* Sourcing Strategy */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Sourcing Strategy" title="Multi-channel tenant acquisition" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Finding the right tenant requires more than listing on a portal. We deploy a targeted
                multi-channel strategy: our proprietary occupier database, broker network activation,
                direct corporate outreach, digital marketing and industry event presence. Each channel
                is tracked, measured and optimised for conversion.
              </p>
              <CheckList items={[
                'Proprietary occupier database: 2,000+ corporate contacts',
                'Broker network: 50+ active agent relationships, 50% co-broke',
                'Direct outreach: decision-maker mapping, personalised proposals',
                'Digital marketing: portals, LinkedIn, Google Ads, retargeting',
                'Industry events: sector-specific networking, speaking slots',
                'Referral programme: existing tenant & partner introductions',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Tenant acquisition sourcing"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Screening Process & Retention Approach */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Screening Process</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Rigorous vetting to ensure tenant quality and covenant strength.
              </p>
              <CheckList items={[
                'Financial: audited accounts, bank references, credit checks',
                'Business: registration, licence, ownership, track record',
                'Operational: space fit, employee count, growth plans',
                'Legal: litigation search, compliance history, references',
                'Fit-out: specification review, approval process, compliance',
                'Decision: credit committee review for leases >KES 500k/month',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Retention Approach</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Securing the tenant is only the start — retention protects yield.
              </p>
              <CheckList items={[
                'Proactive lease management: 18-month renewal engagement',
                'Tenant satisfaction surveys: annual, actionable feedback',
                'Responsive maintenance: 4-hour SLA, preventive programmes',
                'Relationship management: quarterly check-ins, escalation path',
                'Flexibility: expansion rights, contraction options, subletting',
                'Community: building events, tenant communication platform',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Vacant space to fill?"
        description="Our tenant acquisition team combines database reach, broker relationships and rigorous screening to place quality occupiers fast."
        primaryLabel="Start Tenant Search"
        primaryLink="/contact"
        secondaryLabel="Lease-Up Services"
        secondaryLink="/landlords/lease-up"
      />
    </>
  );
}

export default LandlordsTenantAcquisitionPage;