import { Link } from 'react-router-dom';
import { ArrowRight, Building2, TrendingUp } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function SectorsOfficePage() {
  return (
    <>
      <Seo
        title="Office Properties | Murivest Lettings"
        description="Property services for office market participants across Kenya — Grade-A towers, business parks and suburban office blocks with leasing and management expertise."
        path="/sectors/office"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Office', path: '/sectors/office' }]}
      />
      <PageHero
        label="Sectors"
        title="Office"
        subtitle="Property services for office market participants."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Office', path: '/sectors/office' }]}
      />

      {/* Sector Overview */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Sector Overview" title="Office property portfolio management" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Kenya's office market spans Grade-A towers in Nairobi's prime nodes through to suburban and
                strip office blocks — each requiring different leasing and management strategies. We manage office
                portfolios across Westlands, Upper Hill, the CBD and key secondary cities, applying market-responsive
                pricing, proactive tenant retention and institutional reporting.
              </p>
              <CheckList items={[
                'Grade-A office towers and business parks',
                'Mid-grade office buildings',
                'Executive suites and co-working spaces',
                'Strip and suburban office blocks',
                'Campus-style headquarters',
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
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Office building property"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Market Dynamics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Demand Drivers</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                What shapes demand for office property in the Kenyan market.
              </p>
              <CheckList items={[
                'Grade-A specification and ESG certifications',
                'Connectivity to transport and amenities',
                'Flexible floor plates for hybrid work',
                'Premium building services and security',
                'Proximity to hotels, retail and restaurants',
                'Ample parking and cyclist facilities',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Supply Trends</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Current supply dynamics affecting office property across Kenya.
              </p>
              <CheckList items={[
                'Controlled supply limiting new Grade-A stock',
                'Suburban and node-based decentralisation',
                'Mixed-use integration with retail and residential',
                'Sustainability retrofitting of existing stock',
                'Spec suites and flexible lease structures',
                'Remote and hybrid work reducing per-capita demand',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Sector-specialist property services"
        description="Our office team manages commercial office portfolios with market insight and institutional standards across Nairobi and Kenya."
        primaryLabel="Discuss Your Requirements"
        primaryLink="/contact"
        secondaryLabel="All Sectors"
        secondaryLink="/sectors"
      />
    </>
  );
}

export default SectorsOfficePage;
