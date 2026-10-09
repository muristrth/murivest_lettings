import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, ShieldCheck } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function SectorsEducationPage() {
  return (
    <>
      <Seo
        title="Education Properties | Murivest Lettings"
        description="Property management and advisory services for educational institutions across Kenya — schools, universities and training centres with compliance for health and safety standards."
        path="/sectors/education"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Education', path: '/sectors/education' }]}
      />
      <PageHero
        label="Sectors"
        title="Education"
        subtitle="Property services for educational institutions."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Education', path: '/sectors/education' }]}
      />

      {/* Sector Overview */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Sector Overview" title="Educational property portfolio management" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Educational institutions require property services that support safe, compliant and effective learning
                environments. We manage school campuses, university facilities and training centres across Kenya,
                coordinating maintenance, statutory compliance and tenant (boarding) accommodation with school-term
                timetables and health and safety standards front of mind.
              </p>
              <CheckList items={[
                'Primary and secondary school campuses',
                'University lecture theatres and academic blocks',
                'Student accommodation and hostels',
                'Administrative offices and libraries',
                'Sports and recreational facilities',
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
                  src="https://images.pexels.com/photos/7586519/pexels-photo-7586519.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Educational campus property"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Learning Environment Standards</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Safety, accessibility and quality standards for educational facilities.
              </p>
              <CheckList items={[
                'Child-safe premises and playground safety compliance',
                'Accessibility for students and staff with disabilities',
                'Adequate lighting, ventilation and acoustics',
                'Security and perimeter control measures',
                'Emergency evacuation procedures and regular drills',
                'Scheduled maintenance aligned to term calendars',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Health & Safety Compliance</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Statutory and operational compliance for educational property.
              </p>
              <CheckList items={[
                'Fire safety certificates and regular inspections',
                'Occupational health and safety risk assessments',
                'Water quality and sanitation standards',
                'Food service licensing for dining facilities',
                'Building and occupancy permits',
                'Insurance coverage for educational use',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Sector-specialist property services"
        description="Our education property team manages campuses and training facilities with institutional standards and full compliance to safety and learning requirements."
        primaryLabel="Discuss Your Requirements"
        primaryLink="/contact"
        secondaryLabel="All Sectors"
        secondaryLink="/sectors"
      />
    </>
  );
}

export default SectorsEducationPage;
