import { Link } from 'react-router-dom';
import { Building2, Briefcase, MapPin, TrendingUp, ShieldCheck, FileText } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LeasingOfficeLeasingPage() {
  return (
    <>
      <Seo
        title="Office Leasing | Murivest Lettings"
        description="Office leasing services for tenants and landlords across Nairobi's business districts."
        path="/leasing/office-leasing"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Leasing', path: '/leasing' }, { name: 'Office Leasing', path: '/leasing/office-leasing' }]}
      />
      <PageHero
        label="Leasing"
        title="Office leasing"
        subtitle="Specialised office leasing services."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Leasing', path: '/leasing' }, { name: 'Office Leasing', path: '/leasing/office-leasing' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Office Market Overview" title="Nairobi's premier office locations and emerging districts" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Nairobi's office market spans established centres like Upper Hill, Westlands and
                  the CBD to emerging nodes along Mombasa Road, Kilimani and Riverside. Each
                  district offers distinct advantages in terms of infrastructure, amenities,
                  transport connectivity and tenant profile.
                </p>
                <p>
                  Our office leasing team tracks real-time vacancy rates, rental trends and
                  development pipelines across all sub-markets. This intelligence enables us to
                  advise landlords on competitive positioning and tenants on optimal location
                  strategies aligned to their operational and brand requirements.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Modern office space"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <SectionHeader label="Tenant Services" title="Finding the right office for your business" />
              <CheckList items={[
                'Requirements analysis: space, layout, budget, location, amenities',
                'Market-wide search including Grade A, B and boutique offices',
                'Comparative financial analysis: gross vs net effective rents',
                'Lease negotiation: rent-free periods, fit-out contributions, break clauses',
                'Space planning and fit-out coordination support',
                'Relocation project management and change management',
              ]} />
            </div>
            <div>
              <SectionHeader label="Landlord Services" title="Optimising office asset performance" />
              <CheckList items={[
                'Vacancy marketing across premium channels and occupier networks',
                'Tenant covenant assessment and financial due diligence',
                'Lease structuring to protect asset value and flexibility',
                'Rent review and lease renewal strategy and execution',
                'Asset repositioning advice for competitive differentiation',
                'Service charge budgeting and reconciliation oversight',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Key Office Districts"
            title="Distinct sub-markets, tailored strategies"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { name: 'Upper Hill', desc: 'Financial & professional services hub', rent: 'KES 1,800–2,500/sqft' },
              { name: 'Westlands', desc: 'Mixed-use, tech & creative occupiers', rent: 'KES 1,500–2,200/sqft' },
              { name: 'CBD', desc: 'Established corporate & government', rent: 'KES 1,200–1,800/sqft' },
              { name: 'Kilimani', desc: 'Emerging, SME & boutique offices', rent: 'KES 1,000–1,600/sqft' },
              { name: 'Riverside', desc: 'Premium, diplomatic & NGO sector', rent: 'KES 1,600–2,300/sqft' },
              { name: 'Mombasa Rd', desc: 'Logistics-adjacent, cost-effective', rent: 'KES 800–1,400/sqft' },
            ].map((district) => (
              <Link key={district.name} to="/contact" className="card-institutional group p-6">
                <h3 className="font-serif text-lg text-navy-900 mb-2 group-hover:text-navy-700">{district.name}</h3>
                <p className="text-sm text-stone-500 mb-3">{district.desc}</p>
                <div className="text-sm font-medium text-gold-500">{district.rent}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Secure the right office space"
        description="From single-floor suites to multi-building campuses, we help you find and negotiate the optimal office solution."
        primaryLabel="Discuss Requirements"
        primaryLink="/contact"
        secondaryLabel="View Office Listings"
        secondaryLink="/properties?type=office"
      />
    </>
  );
}

export default LeasingOfficeLeasingPage;