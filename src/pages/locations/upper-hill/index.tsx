import { Link } from 'react-router-dom';
import { Building2, Landmark, Briefcase, MapPin, Users, TrendingUp } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LocationsUpperHillPage() {
  return (
    <>
      <Seo
        title="Upper Hill Properties | Murivest Lettings"
        description="Commercial properties in Upper Hill, Nairobi."
        path="/locations/upper-hill"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }, { name: 'Upper Hill', path: '/locations/upper-hill' }]}
      />
      <PageHero
        label="Locations"
        title="Upper Hill"
        subtitle="Properties in Nairobi's emerging Upper Hill district."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }, { name: 'Upper Hill', path: '/locations/upper-hill' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Area Profile" title="Nairobi's financial services and diplomatic epicentre" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Upper Hill has cemented its position as Nairobi's premier Grade A office
                  district. Home to the Central Bank of Kenya, major commercial banks,
                  insurance headquarters, international development agencies and a
                  concentration of diplomatic missions, it attracts the highest-calibre
                  corporate and institutional occupiers in the country.
                </p>
                <p>
                  The district's planned grid layout, wide roads and concentration of
                  purpose-built office towers create a professional environment unmatched
                  elsewhere in Nairobi. Recent and ongoing developments — including the
                  Nairobi Expressway terminus — reinforce Upper Hill's connectivity to
                  JKIA, Westlands and the CBD, sustaining strong occupier demand.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Upper Hill office towers"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <SectionHeader label="Property Types" title="Institutional-grade office and supporting uses" />
              <CheckList items={[
                'Grade A office towers: 10,000–25,000sqft floor plates, BMS, certification',
                'Grade B+ offices: established towers, strong service charge management',
                'Diplomatic missions: purpose-built chancery buildings on large plots',
                'Development agency offices: UN, World Bank, bilateral agencies',
                'Ground-floor banking halls & retail: high-footfall financial services',
                'Medical & professional suites: specialist clinics, arbitration centres',
              ]} />
            </div>
            <div>
              <SectionHeader label="Market Dynamics" title="Premium rents, blue-chip covenants, limited supply" />
              <CheckList items={[
                'Highest office rents in Nairobi — KES 1,800–2,500/sqft prime',
                'Vacancy consistently below 5% in Grade A stock',
                'Blue-chip tenant covenants: banks, multilaterals, embassies',
                'Long lease terms: 5–10 years typical for institutional occupiers',
                'Limited new supply — development sites scarce and expensive',
                'Expressway access enhances JKIA connectivity (15 mins)',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Rental Indicators"
            title="Upper Hill market benchmarks (monthly, indicative)"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { type: 'Prime Grade A Office', rent: 'KES 2,000–2,500/sqft' },
              { type: 'Grade A Office', rent: 'KES 1,800–2,200/sqft' },
              { type: 'Grade B+ Office', rent: 'KES 1,400–1,800/sqft' },
              { type: 'Banking Hall/Retail', rent: 'KES 300–500/sqft' },
              { type: 'Medical Suite', rent: 'KES 200–300/sqft' },
              { type: 'Diplomatic Chancery', rent: 'KES 150–250/sqft (gross)' },
            ].map((item) => (
              <Link key={item.type} to="/properties?location=upper-hill" className="card-institutional group p-6 text-center">
                <h3 className="font-serif text-lg text-navy-900 mb-2 group-hover:text-navy-700">{item.type}</h3>
                <div className="font-serif text-xl text-gold-500">{item.rent}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Secure Upper Hill presence"
        description="From single-floor suites to full-building headquarters, we represent occupiers and landlords in Nairobi's most prestigious office district."
        primaryLabel="View Listings"
        primaryLink="/properties?location=upper-hill"
        secondaryLabel="Discuss Requirements"
        secondaryLink="/contact"
      />
    </>
  );
}

export default LocationsUpperHillPage;