import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, Globe, MapPin as MapPinIcon, Flag, Users as UsersIcon, Plane, Map, Landmark, Building, ShoppingBag, Home } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LeaseCommercialPropertyToLetPage() {
  return (
    <>
      <Seo
        title="Commercial Property for Lease | Murivest Lettings"
        description="Commercial properties for lease across Kenya. Office, retail and mixed-use spaces available."
        path="/lease/commercial-property-to-let"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties for Lease', path: '/lease' }, { name: 'Commercial Property to Let', path: '/lease/commercial-property-to-let' }]}
      />
      <PageHero
        label="Lease"
        title="Commercial property to let"
        subtitle="Professional commercial properties across Kenya's key business districts."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties for Lease', path: '/lease' }, { name: 'Commercial Property to Let', path: '/lease/commercial-property-to-let' }]}
      )

      {/* Property Types */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Property Types" title="Diverse commercial accommodation" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Our commercial property portfolio spans standalone buildings, mixed-use developments and
                single-floor suites — catering to businesses from professional services firms to retail
                chains, medical practices to educational institutions. Each property is managed to
                institutional standards with transparent service charges and responsive maintenance.
              </p>
              <CheckList items={[
                'Standalone commercial buildings: full control, branding rights',
                'Mixed-use developments: office + retail synergy, shared amenities',
                'Single-floor suites: flexible terms, managed common areas',
                'Medical & professional suites: specialised fit-out ready',
                'Educational & institutional: compliant, accessible, scalable',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Commercial property"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Available Listings */}
          <div className="bg-white border border-stone-200 p-10 lg:p-12">
            <SectionHeader
              label="Available Listings"
              title="Current commercial opportunities"
              subtitle="A selection of commercial properties currently under our management and available for lease."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                { title: 'The Prism, Westlands', type: 'Mixed-Use Building', location: 'Westlands, Nairobi', size: '120,000 sq ft', rent: 'KES 1,650/sq ft/mo' },
                { title: 'Delta Corner Annex', type: 'Office Building', location: 'Chiromo, Nairobi', size: '45,000 sq ft', rent: 'KES 1,450/sq ft/mo' },
                { title: 'Lavington Mall Retail', type: 'Retail Units', location: 'Lavington, Nairobi', size: '800-5,000 sq ft', rent: 'KES 350-550/sq ft/mo' },
                { title: 'Riverside Drive Commercial', type: 'Standalone Building', location: 'Riverside, Nairobi', size: '28,000 sq ft', rent: 'KES 1,800/sq ft/mo' },
                { title: 'Kilimani Business Centre', type: 'Office/Retail', location: 'Kilimani, Nairobi', size: '65,000 sq ft', rent: 'KES 1,350/sq ft/mo' },
                { title: 'Mombasa Rd Showroom', type: 'Showroom/Office', location: 'Mombasa Road, Nairobi', size: '15,000 sq ft', rent: 'KES 1,200/sq ft/mo' },
              ].map((listing) => (
                <Link key={listing.title} to="/properties" className="bg-ivory-50 p-6 border border-stone-200 hover:border-gold-400 transition-colors">
                  <h3 className="font-serif text-lg text-navy-900 mb-1">{listing.title}</h3>
                  <p className="text-xs text-stone-500 mb-2">{listing.type} • {listing.location}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-stone-500">{listing.size}</span>
                    <span className="font-semibold text-navy-900">{listing.rent}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/properties" className="btn-primary">
                View All Commercial Listings
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Seeking commercial premises?"
        description="Our commercial leasing team matches your operational requirements, budget and location preferences with the best available options."
        primaryLabel="Discuss Your Requirements"
        primaryLink="/contact"
        secondaryLabel="Submit Requirements"
        secondaryLink="/tenants/submit-requirement"
      />
    </>
  );
}

export default LeaseCommercialPropertyToLetPage;