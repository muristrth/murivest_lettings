import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope, ShieldCheck } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function SectorsHealthcarePage() {
  return (
    <>
      <Seo
        title="Healthcare Properties | Murivest Lettings"
        description="Property management and advisory for healthcare providers across Kenya — hospitals, clinics and diagnostic centres with clinical and infection-control compliance."
        path="/sectors/healthcare"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Healthcare', path: '/sectors/healthcare' }]}
      />
      <PageHero
        label="Sectors"
        title="Healthcare"
        subtitle="Property services for healthcare providers."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Healthcare', path: '/sectors/healthcare' }]}
      />

      {/* Sector Overview */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Sector Overview" title="Healthcare property portfolio management" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Healthcare providers operate under some of the strictest regulatory and safety requirements in
                commercial property. We manage private hospitals, clinics, diagnostic centres and health studios
                across Kenya, ensuring every maintenance, access and compliance decision meets clinical standards and
                supports safe patient care.
              </p>
              <CheckList items={[
                'Private hospitals and specialised clinics',
                'Diagnostic centres and laboratories',
                'Pharmacies and health studios',
                'Administrative and consultation suites',
                'Patient accommodation and boarding',
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
                  alt="Healthcare facility property"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Clinical Requirements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Stethoscope className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Clinical Standards</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Clinical and physical requirements for healthcare property operations.
              </p>
              <CheckList items={[
                'Infection prevention and control protocols',
                'Medical gas and emergency power supply',
                'Radiation safety and equipment shielding',
                'Waste management and segregation procedures',
                'Sterilisation and decontamination facilities',
                'Regular HVAC and air quality assessments',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Infection Control & Compliance</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Regulatory and safety compliance for healthcare premises.
              </p>
              <CheckList items={[
                'KS standards for health facility premises',
                'Fire safety and emergency evacuation plans',
                'Patient privacy and data protection controls',
                'Insurance coverage for medical use',
                'Building and occupancy permits',
                'Emergency preparedness and pandemic protocols',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Sector-specialist property services"
        description="Our healthcare property team manages facilities to clinical standards, with full attention to safety, compliance and operational continuity."
        primaryLabel="Discuss Your Requirements"
        primaryLink="/contact"
        secondaryLabel="All Sectors"
        secondaryLink="/sectors"
      />
    </>
  );
}

export default SectorsHealthcarePage;
