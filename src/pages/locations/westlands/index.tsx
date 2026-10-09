import { Link } from 'react-router-dom';
import { Building2, Home, Store, Briefcase, MapPin, Users, TrendingUp } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LocationsWestlandsPage() {
  return (
    <>
      <Seo
        title="Westlands Properties | Murivest Lettings"
        description="Commercial and residential properties in Westlands, Nairobi."
        path="/locations/westlands"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }, { name: 'Westlands', path: '/locations/westlands' }]}
      />
      <PageHero
        label="Locations"
        title="Westlands"
        subtitle="Properties in Nairobi's premium Westlands district."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }, { name: 'Westlands', path: '/locations/westlands' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Area Profile" title="Nairobi's premier mixed-use district — live, work, play" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Westlands is Nairobi's most dynamic mixed-use district, seamlessly blending
                  Grade A office towers, high-end residential, vibrant retail, hospitality and
                  nightlife. Located northwest of the CBD along Waiyaki Way, it has evolved
                  from a suburban shopping node into a self-contained urban centre attracting
                  tech companies, creative industries, professional services and international
                  brands.
                </p>
                <p>
                  The district's appeal lies in its completeness: an occupier can live, work,
                  dine, shop and entertain within a walkable radius. The Sarit Centre, The
                  Mall, Westgate and emerging developments like Two Rivers (nearby) provide
                  regional retail anchors. The Expressway and Waiyaki Way upgrades enhance
                  connectivity to JKIA, Upper Hill and the CBD.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Westlands cityscape"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <SectionHeader label="Property Types" title="Complete mixed-use spectrum at scale" />
              <CheckList items={[
                'Grade A offices: Sarit, Delta, Westpark, Laurenti — tech, fintech, professional',
                'Grade B offices: established towers, value-driven occupiers',
                'High-rise residential: 1–4 bed, amenities, expatriate & professional demand',
                'Serviced apartments: corporate short-stay, airline crew, project teams',
                'Retail: malls, high-street (Woodvale, Mpaka), standalone showrooms',
                'Hospitality: business hotels, boutique, conference venues',
              ]} />
            </div>
            <div>
              <SectionHeader label="Investment Dynamics" title="Liquidity, rental growth, infrastructure tailwinds" />
              <CheckList items={[
                'Office prime rents: KES 1,500–2,200/sqft — second only to Upper Hill',
                'Residential yields: 6–8% gross, strong capital appreciation track record',
                'Retail rents: KES 200–400/sqft mall, KES 150–300/sqft high street',
                'Tech/creative cluster drives occupational demand diversification',
                'Expressway & BRT: transformative connectivity to airport & CBD',
                'Pipeline supply: monitored for absorption and rental impact',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Rental Indicators"
            title="Westlands market benchmarks (monthly, indicative)"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { type: 'Prime Grade A Office', rent: 'KES 1,800–2,200/sqft' },
              { type: 'Grade A Office', rent: 'KES 1,500–1,800/sqft' },
              { type: 'Grade B Office', rent: 'KES 1,100–1,500/sqft' },
              { type: '1-Bed Apartment', rent: 'KES 70,000–110,000' },
              { type: '2-Bed Apartment', rent: 'KES 110,000–160,000' },
              { type: '3-Bed Apartment', rent: 'KES 150,000–220,000' },
              { type: 'Mall Retail (inline)', rent: 'KES 250–400/sqft' },
              { type: 'High Street Retail', rent: 'KES 180–300/sqft' },
              { type: 'Serviced Apt (1-bed)', rent: 'KES 120,000–180,000' },
            ].map((item) => (
              <Link key={item.type} to="/properties?location=westlands" className="card-institutional group p-6 text-center">
                <h3 className="font-serif text-lg text-navy-900 mb-2 group-hover:text-navy-700">{item.type}</h3>
                <div className="font-serif text-xl text-gold-500">{item.rent}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Access Westlands' deepest inventory"
        description="Our Westlands team manages flagship office towers, premium residential blocks and prime retail units across the district."
        primaryLabel="View Listings"
        primaryLink="/properties?location=westlands"
        secondaryLabel="Request District Report"
        secondaryLink="/contact"
      />
    </>
  );
}

export default LocationsWestlandsPage;