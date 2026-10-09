import { Link } from 'react-router-dom';
import { Store, ShoppingBag, Users, MapPin, TrendingUp, ShieldCheck } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LeasingRetailLeasingPage() {
  return (
    <>
      <Seo
        title="Retail Leasing | Murivest Lettings"
        description="Retail leasing services for retailers seeking prime locations and landlords maximising rents."
        path="/leasing/retail-leasing"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Leasing', path: '/leasing' }, { name: 'Retail Leasing', path: '/leasing/retail-leasing' }]}
      />
      <PageHero
        label="Leasing"
        title="Retail leasing"
        subtitle="Prime retail leasing services."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Leasing', path: '/leasing' }, { name: 'Retail Leasing', path: '/leasing/retail-leasing' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Retail Strategy" title="Matching retailers with locations that drive footfall and sales" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Retail success is fundamentally about location, visibility and the right tenant mix.
                  Our retail leasing team works with both international and local brands seeking
                  expansion across Kenya, and with landlords looking to curate high-performing
                  retail environments in shopping centres, high streets and mixed-use developments.
                </p>
                <p>
                  We analyse catchment demographics, footfall patterns, competitor presence and
                  consumer spending data to identify locations that align with each retailer's
                  target market. For landlords, we curate tenant mixes that maximise overall
                  centre performance and rental income.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Retail shopping environment"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <SectionHeader label="Tenant Mix Strategy" title="Curating complementary retail environments" />
              <CheckList items={[
                'Anchor tenant identification and negotiation',
                'Complementary category planning to drive cross-shopping',
                'Food & beverage zoning for dwell time optimisation',
                'Service retail integration for convenience and footfall',
                'Pop-up and temporary letting programmes',
                'Seasonal and promotional space activation',
              ]} />
            </div>
            <div>
              <SectionHeader label="Retailer Support" title="End-to-end retail location services" />
              <CheckList items={[
                'Market entry strategy for international brands',
                'Store format optimisation: flagship, standard, outlet, kiosk',
                'Lease structuring: turnover rent, base rent, service charges',
                'Fit-out coordination and landlord approval management',
                'Multi-site rollout programme management',
                'Lease renewal and rent review representation',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Prime Retail Locations"
            title="High-footfall destinations across Nairobi"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { name: 'Westlands', type: 'High street & mall', footfall: 'Very High' },
              { name: 'Kilimani', type: 'Neighbourhood centres', footfall: 'High' },
              { name: 'Lavington', type: 'Boutique & lifestyle', footfall: 'Medium-High' },
              { name: 'CBD', type: 'Transit & commuter retail', footfall: 'Very High' },
              { name: 'Mombasa Rd', type: 'Destination & warehouse retail', footfall: 'High' },
              { name: 'Riverside', type: 'Premium lifestyle', footfall: 'Medium' },
              { name: 'Upper Hill', type: 'Office worker amenity', footfall: 'Medium-High' },
              { name: 'Thika Rd', type: 'Regional mall catchments', footfall: 'High' },
            ].map((loc) => (
              <Link key={loc.name} to="/contact" className="card-institutional group p-6">
                <h3 className="font-serif text-lg text-navy-900 mb-2 group-hover:text-navy-700">{loc.name}</h3>
                <p className="text-sm text-stone-500 mb-2">{loc.type}</p>
                <div className="flex items-center gap-2 text-xs text-gold-500">
                  <Users className="w-3.5 h-3.5" /> {loc.footfall} Footfall
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Find your retail location"
        description="Whether you're a retailer expanding in Kenya or a landlord curating a centre, our retail specialists deliver results."
        primaryLabel="Discuss Requirements"
        primaryLink="/contact"
        secondaryLabel="View Retail Properties"
        secondaryLink="/properties?type=retail"
      />
    </>
  );
}

export default LeasingRetailLeasingPage;