import { Link } from 'react-router-dom';
import { Home, Building2, TreePine, MapPin, Users, ShieldCheck } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LocationsKileleshwaPage() {
  return (
    <>
      <Seo
        title="Kileleshwa Properties | Murivest Lettings"
        description="Commercial and residential properties in Kileleshwa, Nairobi."
        path="/locations/kileleshwa"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }, { name: 'Kileleshwa', path: '/locations/kileleshwa' }]}
      />
      <PageHero
        label="Locations"
        title="Kileleshwa"
        subtitle="Properties in Nairobi's upscale Kileleshwa district."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }, { name: 'Kileleshwa', path: '/locations/kileleshwa' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Area Profile" title="Established residential suburb with growing commercial presence" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Kileleshwa is one of Nairobi's most established residential suburbs, located
                  west of the CBD between Lavington and Kilimani. Characterised by tree-lined
                  avenues, low-rise apartment blocks and standalone homes, it has long been
                  favoured by middle-income families, expatriates and professionals working in
                  Upper Hill, Westlands and the CBD.
                </p>
                <p>
                  In recent years, Kileleshwa has seen increased commercial development along
                  its main arteries — Kileleshwa Road, Othaya Road and Gatundu Road — with
                  boutique office blocks, medical centres, restaurants and retail conveniences
                  serving the dense residential catchment. This mixed-use evolution enhances
                  the area's live-work appeal.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Kileleshwa streetscape"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <SectionHeader label="Property Types" title="Residential-led with supporting commercial" />
              <CheckList items={[
                'Apartments: 1–3 bedroom units in low-to-mid-rise blocks',
                'Townhouses: gated developments with shared amenities',
                'Standalone homes: limited supply on larger plots',
                'Boutique offices: 200–800sqm in converted or purpose-built blocks',
                'Medical & professional suites: clinics, dental, consulting rooms',
                'Ground-floor retail: convenience, F&B, services for residents',
              ]} />
            </div>
            <div>
              <SectionHeader label="Area Highlights" title="Liveability and convenience" />
              <CheckList items={[
                'Tree-lined streets and mature gardens — high green cover',
                'Proximity to The Mall, Lavington Mall, Junction Mall',
                'International schools: Braeburn, ISK, German School nearby',
                'Healthcare: Aga Khan, Nairobi Hospital within 10 minutes',
                'Easy access to Waiyaki Way, Argwings Kodhek Road, Ngong Road',
                'Strong rental demand from expatriate and professional tenants',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Rental Indicators"
            title="Kileleshwa market benchmarks (monthly, indicative)"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { type: '1-Bed Apartment', rent: 'KES 55,000–85,000' },
              { type: '2-Bed Apartment', rent: 'KES 85,000–130,000' },
              { type: '3-Bed Apartment', rent: 'KES 120,000–180,000' },
              { type: 'Townhouse (3-bed)', rent: 'KES 150,000–250,000' },
              { type: 'Boutique Office', rent: 'KES 110–150/sqft' },
              { type: 'Ground Retail', rent: 'KES 180–280/sqft' },
            ].map((item) => (
              <Link key={item.type} to="/properties?location=kileleshwa" className="card-institutional group p-6 text-center">
                <h3 className="font-serif text-lg text-navy-900 mb-2 group-hover:text-navy-700">{item.type}</h3>
                <div className="font-serif text-xl text-gold-500">{item.rent}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Discover Kileleshwa properties"
        description="Whether you're seeking a family home, investment apartment or boutique office, our team knows every block."
        primaryLabel="View Listings"
        primaryLink="/properties?location=kileleshwa"
        secondaryLabel="Request Area Report"
        secondaryLink="/contact"
      />
    </>
  );
}

export default LocationsKileleshwaPage;