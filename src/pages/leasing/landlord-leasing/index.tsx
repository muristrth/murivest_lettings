import { Link } from 'react-router-dom';
import { KeySquare, Building2, TrendingUp, Megaphone, ShieldCheck, FileText } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LeasingLandlordLeasingPage() {
  return (
    <>
      <Seo
        title="Landlord Leasing | Murivest Lettings"
        description="Proactive leasing management for landlords to maximise rental returns and reduce voids."
        path="/leasing/landlord-leasing"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Leasing', path: '/leasing' }, { name: 'Landlord Leasing', path: '/leasing/landlord-leasing' }]}
      />
      <PageHero
        label="Leasing"
        title="Landlord leasing"
        subtitle="Maximise rental returns through proactive leasing."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Leasing', path: '/leasing' }, { name: 'Landlord Leasing', path: '/leasing/landlord-leasing' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Leasing Strategy" title="Proactive management to minimise voids and maximise yield" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Vacancy is the single largest cost to a property investor. Our landlord leasing
                  service is designed to keep your properties occupied with quality tenants at
                  market-optimal rents. We combine strategic marketing, rigorous tenant selection
                  and lease structures that protect your long-term interests.
                </p>
                <p>
                  From single-let residential units to multi-tenant commercial buildings, we
                  apply the same institutional discipline: data-driven pricing, multi-channel
                  marketing reach, comprehensive vetting and legally robust documentation.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Landlord leasing consultation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="bg-white border border-stone-200 p-10 lg:p-12">
            <SectionHeader
              label="Marketing Approach"
              title="Multi-channel reach to the right tenant audience"
              subtitle="We deploy targeted marketing strategies tailored to each property type and location."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: Megaphone, title: 'Premium Listings', desc: 'Featured placement on leading property portals and our owned platforms.' },
                { icon: Building2, title: 'Corporate Networks', desc: 'Direct relationships with corporate occupiers, relocation agents and tenant reps.' },
                { icon: TrendingUp, title: 'Market Intelligence', desc: 'Data-driven pricing using comparable evidence and demand analytics.' },
                { icon: KeySquare, title: 'Targeted Campaigns', desc: 'Sector-specific outreach for office, retail, industrial and residential.' },
                { icon: ShieldCheck, title: 'Accompanied Viewings', desc: 'Professional viewing management with qualified prospect feedback.' },
                { icon: FileText, title: 'Compliance & Documentation', desc: 'Legally compliant marketing materials and tenancy documentation.' },
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

      <section className="section-padding py-20 bg-navy-900 text-ivory-50">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Results Delivered"
            title="Measurable outcomes for property owners"
            centered
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-center">
            {[
              { value: '< 21 Days', label: 'Average Void Period' },
              { value: '98.4%', label: 'Rent Collection Rate' },
              { value: 'Market+', label: 'Rental Achievement' },
              { value: 'Full', label: 'Compliance Coverage' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-3xl md:text-4xl text-gold-300">{stat.value}</div>
                <div className="text-sm text-ivory-200/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Reduce voids. Increase returns."
        description="Let our leasing team develop a tailored strategy for your property or portfolio."
        primaryLabel="Request a Proposal"
        primaryLink="/contact"
        secondaryLabel="Landlord Services"
        secondaryLink="/landlords"
      />
    </>
  );
}

export default LeasingLandlordLeasingPage;