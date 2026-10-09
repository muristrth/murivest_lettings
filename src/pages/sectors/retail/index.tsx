import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Tag } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function SectorsRetailPage() {
  return (
    <>
      <Seo
        title="Retail Properties | Murivest Lettings"
        description="Property services for retail operators across Kenya — shopping centres, high-street and neighbourhood retail with tenant mix and lease structuring expertise."
        path="/sectors/retail"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Retail', path: '/sectors/retail' }]}
      />
      <PageHero
        label="Sectors"
        title="Retail"
        subtitle="Property services for retail operators."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Retail', path: '/sectors/retail' }]}
      />

      {/* Sector Overview */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Sector Overview" title="Retail property management" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Kenya's retail sector is undergoing structural change: formal malls are expanding, e-commerce is
                reshaping physical requirements, and consumer preferences are shifting towards experience-led concepts.
                We manage retail portfolios across Nairobi's prime centres, high-street nodes and neighbourhood
                strips, focusing on tenant mix, footfall and lease structuring that maximises income and occupancy.
              </p>
              <CheckList items={[
                'Shopping malls and retail centres',
                'High-street and neighbourhood shops',
                'Strip malls and convenience stores',
                'Drive-through and kiosk formats',
                'Pop-up and interim retail spaces',
              ]} />
              <div className="mt-8">
                <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-gold-500 hover:text-gold-300">
                  Explore our sector-specialist services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Retail property"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Tenant Mix */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Anchor Tenants</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Anchor and core tenant selection to drive footfall and centre performance.
              </p>
              <CheckList items={[
                'High footfall and visibility positioning',
                'Complementary anchor tenant selection',
                'Strong co-tenancy and performance clauses',
                'Adequate service areas and loading docks',
                'Brand alignment and customer demographics',
                'Lease terms that protect against vacancy risk',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Tag className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Specialty Mix</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Curating a balanced tenant mix that maximises complementary trade.
              </p>
              <CheckList items={[
                'Balanced tenant mix and complementary uses',
                'Appropriate split of common and exclusive area',
                'Food and beverage adjacency planning',
                'Service charge transparency and accountability',
                'Flexible lease terms and fit-out allowances',
                'Experiential and F&B: 30-40% of new leasing',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Sector-specialist property services"
        description="Our retail team manages shopping centres and high-street portfolios with tenant-mix expertise and lease structuring that maximises income."
        primaryLabel="Discuss Your Requirements"
        primaryLink="/contact"
        secondaryLabel="All Sectors"
        secondaryLink="/sectors"
      />
    </>
  );
}

export default SectorsRetailPage;
