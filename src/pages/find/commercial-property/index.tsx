import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Store, Factory, Home, BarChart3, Check } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function FindCommercialPropertyPage() {
  return (
    <>
      <Seo
        title="Commercial Property for Lease | Murivest Lettings"
        description="Commercial properties for lease across Kenya including offices, retail, warehouse and industrial space."
        path="/find/commercial-property"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Find', path: '/find' }, { name: 'Commercial Property', path: '/find/commercial-property' }]}
      />
      <PageHero
        label="Commercial Property"
        title="Commercial properties for lease"
        subtitle="Office, retail, warehouse and industrial properties available across Kenya."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Find', path: '/find' }, { name: 'Commercial Property', path: '/find/commercial-property' }]}
      />

      {/* Property Categories */}
      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Property Categories"
            title="Explore by property type"
            subtitle="We manage commercial properties across all major categories in Kenya."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { icon: Building2, title: 'Office', desc: 'Grade-A and mid-grade office buildings across Nairobi\'s business districts.', href: '/find/office' },
              { icon: Store, title: 'Retail', desc: 'Prime retail units in shopping centres and high-street locations.', href: '/find/retail' },
              { icon: Factory, title: 'Industrial', desc: 'Warehouse, logistics and manufacturing facilities across industrial zones.', href: '/find/industrial' },
              { icon: Home, title: 'Mixed-Use', desc: 'Developments combining retail, office and residential components.', href: '/lease/mixed-use-property-to-let' },
            ].map((cat) => (
              <Link
                key={cat.title}
                to={cat.href}
                className="group card-institutional p-8 text-center transition-all duration-500 hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-full bg-navy-50 flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:bg-gold-400">
                  <cat.icon className="w-7 h-7 text-navy-700 transition-colors group-hover:text-navy-950" />
                </div>
                <h3 className="font-serif text-xl text-navy-900 mb-3 group-hover:text-navy-700 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-4">{cat.desc}</p>
                <div className="flex items-center justify-center gap-2 text-xs font-medium text-gold-500">
                  View Details
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Available Properties */}
      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Current Availability"
            title="Commercial properties under management"
            subtitle="Properties currently available for lease across our mandate markets."
            centered
          />
          <div className="text-center mt-12">
            <Link to="/properties" className="btn-primary">
              View All Properties
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Search CtaBand */}
      <CtaBand
        title="Need a specific property type?"
        description="Browse our full property portfolio or contact our team with your specific requirements."
        primaryLabel="Browse All Properties"
        primaryLink="/properties"
        secondaryLabel="Contact Us"
        secondaryLink="/contact"
      />
    </>
  );
}

export default FindCommercialPropertyPage;
