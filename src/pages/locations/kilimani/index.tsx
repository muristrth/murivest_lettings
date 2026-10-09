import { Link } from 'react-router-dom';
import { Building2, Home, Store, MapPin, Users, TrendingUp } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LocationsKilimaniPage() {
  return (
    <>
      <Seo
        title="Kilimani Properties | Murivest Lettings"
        description="Commercial and residential properties in Kilimani, Nairobi."
        path="/locations/kilimani"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }, { name: 'Kilimani', path: '/locations/kilimani' }]}
      />
      <PageHero
        label="Locations"
        title="Kilimani"
        subtitle="Properties in Nairobi's bustling Kilimani district."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }, { name: 'Kilimani', path: '/locations/kilimani' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Area Profile" title="High-density urban living with vibrant commercial energy" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Kilimani has transformed from a low-rise residential suburb into Nairobi's
                  highest-density apartment district. Located between Kileleshwa and Upper Hill,
                  it attracts a young, mobile demographic — professionals, expatriates and
                  students — drawn by proximity to employment hubs, lifestyle amenities and
                  vibrant street life.
                </p>
                <p>
                  The area's main thoroughfares — Kilimani Road, Ring Road Kilimani, Kirichwa
                  Road and Argwings Kodhek Road — are lined with mid-to-high-rise apartment
                  blocks, ground-floor retail, restaurants, gyms and co-working spaces. This
                  density creates strong footfall for retailers and sustained rental demand for
                  landlords, though infrastructure pressure remains a consideration.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Kilimani streetscape"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <SectionHeader label="Property Types" title="Density-driven residential and street-level commercial" />
              <CheckList items={[
                'High-rise apartments: 1–3 beds, amenities (gym, pool, parking)',
                'Serviced apartments: short-stay, corporate lettings',
                'Student accommodation: purpose-built near universities',
                'Mixed-use podium retail: supermarkets, F&B, pharmacies, banks',
                'Co-working & boutique offices: flexible terms, young occupiers',
                'Medical & wellness: clinics, dental, physiotherapy, gyms',
              ]} />
            </div>
            <div>
              <SectionHeader label="Investment Dynamics" title="High turnover, strong yields, infrastructure watch-points" />
              <CheckList items={[
                'Gross yields 7–9% on residential — among Nairobi's strongest',
                'High tenant turnover — professional management essential',
                'Parking scarcity — allocated bays command premium',
                'Service charge transparency critical for tenant retention',
                'Infrastructure strain: water, traffic, waste management',
                'Planning policy shifts may affect future density allowances',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Rental Indicators"
            title="Kilimani market benchmarks (monthly, indicative)"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { type: '1-Bed Apartment', rent: 'KES 50,000–80,000' },
              { type: '2-Bed Apartment', rent: 'KES 80,000–120,000' },
              { type: '3-Bed Apartment', rent: 'KES 110,000–160,000' },
              { type: 'Serviced Studio', rent: 'KES 90,000–140,000' },
              { type: 'Podium Retail', rent: 'KES 200–350/sqft' },
              { type: 'Co-working Desk', rent: 'KES 15,000–25,000' },
            ].map((item) => (
              <Link key={item.type} to="/properties?location=kilimani" className="card-institutional group p-6 text-center">
                <h3 className="font-serif text-lg text-navy-900 mb-2 group-hover:text-navy-700">{item.type}</h3>
                <div className="font-serif text-xl text-gold-500">{item.rent}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Explore Kilimani opportunities"
        description="High-density living demands professional management. Our Kilimani specialists handle everything from single units to full blocks."
        primaryLabel="View Listings"
        primaryLink="/properties?location=kilimani"
        secondaryLabel="Discuss Management"
        secondaryLink="/contact"
      />
    </>
  );
}

export default LocationsKilimaniPage;