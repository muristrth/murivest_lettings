import { Link } from 'react-router-dom';
import { Home, TreePine, Building2, MapPin, Users, ShieldCheck } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LocationsRiversidePage() {
  return (
    <>
      <Seo
        title="Riverside Properties | Murivest Lettings"
        description="Commercial and residential properties in Riverside, Nairobi."
        path="/locations/riverside"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }, { name: 'Riverside', path: '/locations/riverside' }]}
      />
      <PageHero
        label="Locations"
        title="Riverside"
        subtitle="Properties in Nairobi's leafy Riverside suburb."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }, { name: 'Riverside', path: '/locations/riverside' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Area Profile" title="Riverside tranquillity minutes from the commercial centres" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Riverside is one of Nairobi's most distinctive suburbs, defined by the
                  Nairobi River corridor and mature indigenous tree cover. Located west of
                  the CBD between Westlands and Lavington, it combines a serene, low-density
                  residential character with a significant diplomatic and NGO presence.
                  Riverside Drive and its feeder roads host embassies, international
                  organisations and premium residences.
                </p>
                <p>
                  Commercial development is carefully controlled — low-rise boutique offices
                  serving the diplomatic and professional community, with ground-floor retail
                  limited to convenience and lifestyle amenities. This planning discipline
                  preserves Riverside's premium positioning and supports strong capital
                  appreciation for both residential and commercial assets.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Riverside Drive streetscape"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <SectionHeader label="Property Types" title="Diplomatic-grade residential and boutique professional" />
              <CheckList items={[
                'Riverside Drive residences: river-front, embassy-standard security',
                'Low-rise apartments: 2–4 units per block, mature gardens',
                'Diplomatic leases: furnished/unfurnished, 2–5 year terms',
                'Boutique offices: converted residences, 100–400sqm, NGOs/consultancies',
                'Medical & wellness: specialist clinics, therapy centres',
                'Lifestyle retail: cafés, boutiques, wellness on feeder roads',
              ]} />
            </div>
            <div>
              <SectionHeader label="Area Highlights" title="Green, secure, institutionally anchored" />
              <CheckList items={[
                '15+ embassies and high commissions on Riverside Drive',
                'UN agencies, international NGOs, development partners',
                'International schools: ISK, Rosslyn, Braeside within 10 mins',
                'Karura Forest access — walking trails, cycling, nature',
                'Riverside Drive: wide, tree-lined, low traffic volumes',
                'Proximity to Westlands (5 mins) and CBD (10 mins)',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Rental Indicators"
            title="Riverside market benchmarks (monthly, indicative)"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { type: '2-Bed Apartment', rent: 'KES 120,000–180,000' },
              { type: '3-Bed Apartment', rent: 'KES 180,000–280,000' },
              { type: 'River-Front Residence', rent: 'KES 350,000–600,000+' },
              { type: 'Diplomatic Lease', rent: 'KES 400,000–900,000+' },
              { type: 'Boutique Office', rent: 'KES 150–220/sqft' },
              { type: 'Medical Suite', rent: 'KES 180–280/sqft' },
            ].map((item) => (
              <Link key={item.type} to="/properties?location=riverside" className="card-institutional group p-6 text-center">
                <h3 className="font-serif text-lg text-navy-900 mb-2 group-hover:text-navy-700">{item.type}</h3>
                <div className="font-serif text-xl text-gold-500">{item.rent}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Access Riverside's premium inventory"
        description="Our Riverside specialists manage diplomatic leases, NGO offices and premium residences with discretion and expertise."
        primaryLabel="View Listings"
        primaryLink="/properties?location=riverside"
        secondaryLabel="Confidential Enquiry"
        secondaryLink="/contact"
      />
    </>
  );
}

export default LocationsRiversidePage;