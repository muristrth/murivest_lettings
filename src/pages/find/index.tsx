import { Link } from 'react-router-dom';
import { ArrowRight, Search, Building2, Store, Factory, Home, BarChart3 } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function FindPage() {
  return (
    <>
      <Seo
        title="Find Commercial Property | Murivest Lettings"
        description="Browse commercial properties for lease across Kenya including offices, retail, warehouse and industrial space."
        path="/find"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Find Property', path: '/find' }]}
      />
      <PageHero
        label="Find Property"
        title="Find your next commercial property"
        subtitle="Browse available commercial properties managed by Murivest Lettings across Kenya."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Find Property', path: '/find' }]}
      />

      {/* Property Types Grid */}
      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Property Types"
            title="Browse by property type"
            subtitle="We manage commercial properties across all major property types in Kenya."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { icon: Building2, title: 'Offices', desc: 'Grade-A and mid-grade office spaces across Nairobi\'s business districts.', href: '/find/office' },
              { icon: Store, title: 'Retail', desc: 'Prime retail locations in Nairobi\'s key shopping districts.', href: '/find/retail' },
              { icon: Factory, title: 'Industrial', desc: 'Warehouse and logistics facilities across Kenya\'s industrial corridors.', href: '/find/industrial' },
              { icon: Home, title: 'Mixed-Use', desc: 'Properties combining multiple uses in prime locations.', href: '/lease/mixed-use-property-to-let' },
            ].map((type) => (
              <Link
                key={type.title}
                to={type.href}
                className="group card-institutional p-8 text-center transition-all duration-500 hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-full bg-navy-50 flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:bg-gold-400">
                  <type.icon className="w-7 h-7 text-navy-700 transition-colors group-hover:text-navy-950" />
                </div>
                <h3 className="font-serif text-xl text-navy-900 mb-3 group-hover:text-navy-700 transition-colors">
                  {type.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-4">{type.desc}</p>
                <div className="flex items-center justify-center gap-2 text-xs font-medium text-gold-500">
                  View Properties
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="section-padding py-20 bg-navy-900 text-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeader
              label="Property Search"
              title="Need help finding the right space?"
              subtitle="Use our property search to find available commercial properties across Kenya, or contact our team with your specific requirements."
              centered
              light
            />
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/properties" className="btn-gold">
                Browse All Properties
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-outline-light">
                Discuss Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Murivest */}
      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Why Choose Us"
            title="Institutional standards for your property search"
            subtitle="We bring the same rigour and documentation to property search as we do to property management."
            centered
          />
          <div className="max-w-3xl mx-auto mt-12">
            <CheckList items={[
              'Access to off-market opportunities across Nairobi',
              'Market-aligned rent benchmarking for every property',
              'Detailed property briefs with comprehensive specifications',
              'Full legal and compliance review before any viewing',
              'Ongoing market intelligence throughout your search',
            ]} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Can't find what you're looking for?"
        description="Our mandate portfolio extends beyond what is published online. Submit your requirements and we'll find suitable options."
        primaryLabel="Submit Requirements"
        primaryLink="/contact"
        secondaryLabel="View All Properties"
        secondaryLink="/properties"
      />
    </>
  );
}

export default FindPage;
