import { Link } from 'react-router-dom';
import { Home, TreePine, Building2, MapPin, ShieldCheck, Users } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LocationsLavingtonPage() {
  return (
    <>
      <Seo
        title="Lavington Properties | Murivest Lettings"
        description="Commercial and residential properties in Lavington, Nairobi."
        path="/locations/lavington"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }, { name: 'Lavington', path: '/locations/lavington' }]}
      />
      <PageHero
        label="Locations"
        title="Lavington"
        subtitle="Properties in Nairobi's residential Lavington area."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }, { name: 'Lavington', path: '/locations/lavington' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Area Profile" title="Low-density luxury living in a green, diplomatic enclave" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Lavington is Nairobi's premier low-density residential suburb, characterised by
                  spacious plots, mature tree cover and a tranquil atmosphere. Home to numerous
                  diplomatic missions, international schools and high-net-worth individuals, it
                  offers a distinct lifestyle proposition: privacy, security and green space
                  within easy reach of Westlands, Kilimani and the CBD.
                </p>
                <p>
                  Commercial activity is deliberately limited — zoned primarily for low-rise
                  boutique offices, medical practices and convenience retail serving the
                  immediate residential population. This restraint preserves the area's
                  exclusivity and underpins strong capital values for both residential and
                  commercial assets.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Lavington residential street"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <SectionHeader label="Property Types" title="Exclusivity-driven residential and curated commercial" />
              <CheckList items={[
                'Luxury standalone homes: 0.5–2 acre plots, bespoke architecture',
                'Low-rise apartments: 3–4 units per block, generous gardens',
                'Townhouse clusters: gated, 3–4 bedrooms, shared clubhouse',
                'Boutique offices: converted homes, 150–500sqm, professional services',
                'Medical & wellness: high-end clinics, specialist practices',
                'Diplomatic residences: leased to embassies and international orgs',
              ]} />
            </div>
            <div>
              <SectionHeader label="Area Highlights" title="Lifestyle, security and institutional presence" />
              <CheckList items={[
                'Diplomatic missions: 20+ embassies and high commissions',
                'International schools: Braeside, Peponi, ISK, German School',
                'Premium retail: The Mall, Lavington Mall, boutique centres',
                'Green spaces: Lavington Green, Karura Forest access',
                'Security: 24/7 patrols, estate associations, diplomatic protection',
                'Connectivity: James Gichuru Rd, Waiyaki Way, Ngong Rd access',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Rental Indicators"
            title="Lavington market benchmarks (monthly, indicative)"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { type: '3-Bed Apartment', rent: 'KES 140,000–220,000' },
              { type: '4-Bed Townhouse', rent: 'KES 200,000–350,000' },
              { type: 'Standalone Home (4-bed+)', rent: 'KES 350,000–700,000+' },
              { type: 'Boutique Office', rent: 'KES 140–200/sqft' },
              { type: 'Medical Suite', rent: 'KES 180–280/sqft' },
              { type: 'Diplomatic Lease', rent: 'KES 400,000–1,000,000+' },
            ].map((item) => (
              <Link key={item.type} to="/properties?location=lavington" className="card-institutional group p-6 text-center">
                <h3 className="font-serif text-lg text-navy-900 mb-2 group-hover:text-navy-700">{item.type}</h3>
                <div className="font-serif text-xl text-gold-500">{item.rent}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Access Lavington's exclusive inventory"
        description="Our Lavington team manages some of Nairobi's most prestigious residential and diplomatic properties."
        primaryLabel="View Listings"
        primaryLink="/properties?location=lavington"
        secondaryLabel="Confidential Enquiry"
        secondaryLink="/contact"
      />
    </>
  );
}

export default LocationsLavingtonPage;