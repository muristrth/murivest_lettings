import { Link } from 'react-router-dom';
import { Building2, Landmark, Store, MapPin, Users, TrendingUp } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LocationsNairobiCbdPage() {
  return (
    <>
      <Seo
        title="Nairobi CBD Properties | Murivest Lettings"
        description="Commercial properties in Nairobi's Central Business District."
        path="/locations/nairobi-cbd"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }, { name: 'Nairobi CBD', path: '/locations/nairobi-cbd' }]}
      />
      <PageHero
        label="Locations"
        title="Nairobi CBD"
        subtitle="Properties in Nairobi's central business district."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }, { name: 'Nairobi CBD', path: '/locations/nairobi-cbd' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Area Profile" title="Historic commercial core with unmatched connectivity" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Nairobi's Central Business District remains the city's historic commercial
                  heart — home to government institutions, banking headquarters, legal firms
                  and established corporates. Despite decentralisation to Upper Hill and
                  Westlands, the CBD retains unmatched public transport connectivity, dense
                  daytime population and institutional presence that sustains demand.
                </p>
                <p>
                  The district is experiencing gradual regeneration: heritage building
                  conversions, mixed-use redevelopment of surface parking lots, and growing
                  interest from tech and creative occupiers seeking character spaces at
                  competitive rents. The Nairobi Expressway and BRT corridors further
                  enhance accessibility.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Nairobi CBD skyline"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <SectionHeader label="Property Types" title="Heritage character meets modern regeneration" />
              <CheckList items={[
                'Grade B/C office towers: government, parastatals, professional services',
                'Heritage conversions: character offices, creative industries, co-working',
                'Ground-floor retail: high-footfall banking halls, retail, services',
                'Mixed-use redevelopment: residential over commercial podiums',
                'Industrial/warehouse: legacy stock in industrial pockets (Kamukunji, etc.)',
                'Student housing: proximity to universities and colleges',
              ]} />
            </div>
            <div>
              <SectionHeader label="Market Dynamics" title="Value-driven with regeneration upside" />
              <CheckList items={[
                'Office rents 30–50% below Upper Hill/Westlands for comparable quality',
                'High daytime population (1M+) supports retail and services',
                'Public transport hub: railway, BRT, matatu termini, Expressway',
                'Government anchor tenancy provides stable demand base',
                'Regeneration pipeline: county initiatives, private conversions',
                'Parking and traffic congestion remain key constraints',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Rental Indicators"
            title="Nairobi CBD market benchmarks (monthly, indicative)"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { type: 'Grade B Office', rent: 'KES 80–130/sqft' },
              { type: 'Grade C Office', rent: 'KES 50–85/sqft' },
              { type: 'Heritage/Creative', rent: 'KES 70–120/sqft' },
              { type: 'Co-working Desk', rent: 'KES 10,000–18,000' },
              { type: 'Prime Ground Retail', rent: 'KES 250–450/sqft' },
              { type: 'Secondary Retail', rent: 'KES 120–220/sqft' },
            ].map((item) => (
              <Link key={item.type} to="/properties?location=nairobi-cbd" className="card-institutional group p-6 text-center">
                <h3 className="font-serif text-lg text-navy-900 mb-2 group-hover:text-navy-700">{item.type}</h3>
                <div className="font-serif text-xl text-gold-500">{item.rent}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Discover CBD value opportunities"
        description="Competitive rents, massive footfall and regeneration momentum make the CBD a compelling proposition for the right occupier."
        primaryLabel="View Listings"
        primaryLink="/properties?location=nairobi-cbd"
        secondaryLabel="Request Market Report"
        secondaryLink="/contact"
      />
    </>
  );
}

export default LocationsNairobiCbdPage;