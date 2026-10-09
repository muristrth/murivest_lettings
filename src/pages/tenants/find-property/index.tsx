import { Link } from 'react-router-dom';
import { Search, Home, Building, Filter, MapPin, Key, ShieldCheck, ArrowRight } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function TenantsFindPropertyPage() {
  return (
    <>
      <Seo
        title="Find Property | Murivest Lettings"
        description="Browse available properties for rent in Nairobi and Kenya. Apartments, houses, commercial spaces — professionally managed by Murivest Lettings."
        path="/tenants/find-property"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'For Tenants', path: '/tenants' },
          { name: 'Find Property', path: '/tenants/find-property' }
        ]}
      />
      <PageHero
        label="Tenants"
        title="Find property"
        subtitle="Browse available properties for rent."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'For Tenants', path: '/tenants' },
          { name: 'Find Property', path: '/tenants/find-property' }
        ]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <div className="lg:col-span-2">
              <SectionHeader label="Property Search" title="Your next home or workspace, professionally managed" />
              <div className="bg-white border border-stone-200 p-6 lg:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                    <input
                      type="text"
                      placeholder="Search by location, area or keyword..."
                      className="input-field pl-12"
                    />
                  </div>
                  <select className="input-field">
                    <option value="">All Property Types</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House / Villa</option>
                    <option value="commercial">Commercial / Office</option>
                    <option value="retail">Retail Space</option>
                  </select>
                  <select className="input-field">
                    <option value="">Any Budget</option>
                    <option value="0-50000">Up to KES 50,000</option>
                    <option value="50000-100000">KES 50,000 - 100,000</option>
                    <option value="100000-200000">KES 100,000 - 200,000</option>
                    <option value="200000+">KES 200,000+</option>
                  </select>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Westlands', 'Kilimani', 'Lavington', 'Kileleshwa', 'Parklands', 'Riverside', 'Karen', 'Runda', 'Muthaiga', 'Spring Valley'].map((area) => (
                    <button key={area} className="px-4 py-2 text-sm border border-stone-200 rounded-full hover:border-gold-400 hover:bg-gold-50 transition-colors">
                      {area}
                    </button>
                  ))}
                </div>
              </div>
              <div className="text-center mt-6">
                <Link to="/properties" className="btn-primary inline-flex items-center gap-2">
                  View All Available Properties
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-navy-950 p-8 h-full">
                <SectionHeader label="Why Murivest" title="Properties you can trust" light />
                <CheckList items={[
                  'Every property vetted before listing',
                  'Compliant tenancy agreements',
                  'Professional inventory at move-in',
                  'Dedicated property manager per property',
                  'Online rent payment and maintenance',
                  'Transparent fees — no hidden charges',
                ]} light />
              </div>
            </div>
          </div>

          <div className="bg-white border border-stone-200 p-10 lg:p-12">
            <SectionHeader
              label="Property Types"
              title="Residential and commercial options"
              subtitle="We manage a diverse portfolio across Nairobi and key Kenyan markets."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                { icon: Home, title: 'Apartments', desc: 'Modern apartments in secure developments — studios to 4-bed units.', count: '120+' },
                { icon: Building, title: 'Houses & Villas', desc: 'Standalone homes with gardens, staff quarters and parking.', count: '45+' },
                { icon: MapPin, title: 'Commercial', desc: 'Office suites, co-working spaces and business park units.', count: '30+' },
                { icon: Key, title: 'Retail', desc: 'Ground-floor retail, showrooms and mall units in prime areas.', count: '15+' },
              ].map((type) => (
                <div key={type.title} className="text-center p-6 bg-ivory-50 rounded-xl">
                  <div className="w-14 h-14 bg-navy-50 flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <h3 className="font-serif text-lg text-navy-900 mb-2">{type.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed mb-2">{type.desc}</p>
                  <div className="text-sm font-medium text-gold-500">{type.count} active listings</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Can't find what you're looking for?"
        description="Submit your requirements and our team will curate suitable options — including off-market and upcoming availability."
        primaryLabel="Submit Requirements"
        primaryLink="/tenants/submit-requirement"
        secondaryLabel="Contact Us"
        secondaryLink="/contact"
      />
    </>
  );
}

export default TenantsFindPropertyPage;