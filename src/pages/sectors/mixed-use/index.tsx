import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Users } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function SectorsMixedUsePage() {
  return (
    <>
      <Seo
        title="Mixed-Use Properties | Murivest Lettings"
        description="Property services for mixed-use developments across Kenya — integrated projects combining retail, office and residential with coordinated management standards."
        path="/sectors/mixed-use"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Mixed-Use', path: '/sectors/mixed-use' }]}
      />
      <PageHero
        label="Sectors"
        title="Mixed-use"
        subtitle="Property services for mixed-use developments."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Mixed-Use', path: '/sectors/mixed-use' }]}
      />

      {/* Sector Overview */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Sector Overview" title="Mixed-use development management" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Mixed-use developments bring together residential, retail, office and leisure in a single property —
                each with its own operational cycle, tenant profile and service requirement. We manage integrated
                developments across Kenya, balancing the needs of diverse users while maintaining consistent building
                standards, security and service charge reconciliation.
              </p>
              <CheckList items={[
                'Integrated developments (retail + office + residential)',
                'Lifestyle and entertainment precincts',
                'Transit-oriented developments',
                'Business parks with complementary uses',
                'Vertically integrated property portfolios',
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
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Mixed-use development"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Integration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Vertical Integration</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Coordinating systems and standards across multiple property uses.
              </p>
              <CheckList items={[
                'Seamless vertical transportation between uses',
                'Independent service systems for each use',
                'Shared services and common area management',
                'Fire separation and compartmentalisation',
                'Integrated security and access control',
                'Single-service-charge reconciliation across uses',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Tenant Coordination</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Managing coexistence and complementary uses within one development.
              </p>
              <CheckList items={[
                'Coordinated fit-out and scheduling across uses',
                'Shared amenity management (gym, retail, services)',
                'Balanced tenant mix and complementary uses',
                'Cross-use noise and vibration control',
                'Sustainability and green building standards',
                'Community engagement and resident/lifestyle programmes',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Sector-specialist property services"
        description="Our mixed-use team manages integrated developments with coordinated standards, security and service delivery across all property uses."
        primaryLabel="Discuss Your Requirements"
        primaryLink="/contact"
        secondaryLabel="All Sectors"
        secondaryLink="/sectors"
      />
    </>
  );
}

export default SectorsMixedUsePage;
