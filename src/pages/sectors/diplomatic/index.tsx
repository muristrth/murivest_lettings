import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Building2 } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function SectorsDiplomaticPage() {
  return (
    <>
      <Seo
        title="Diplomatic Properties | Murivest Lettings"
        description="Property management and advisory services for diplomatic missions, embassies and high commissions in Kenya. Specialised security protocols and compliance support for sensitive properties."
        path="/sectors/diplomatic"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Diplomatic', path: '/sectors/diplomatic' }]}
      />
      <PageHero
        label="Sectors"
        title="Diplomatic properties"
        subtitle="Property services for diplomatic missions."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Diplomatic', path: '/sectors/diplomatic' }]}
      />

      {/* Sector Overview */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Sector Overview" title="Diplomatic property portfolio management" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Diplomatic missions require property services that balance operational security, diplomatic protocol
                and institutional property standards. We manage embassy residences, chancery buildings and staff
                accommodation across Nairobi and Kenya, coordinating closely with security teams and facility managers
                under strict confidentiality agreements.
              </p>
              <CheckList items={[
                'Embassy and high commission premises',
                'Diplomatic staff residences and accommodation',
                'Chancery and administrative office space',
                'Multi-tenant diplomatic compounds',
                'Properties subject to security clearances',
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
                  alt="Diplomatic property facility"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Security Requirements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Physical Security</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Security standards applied to every diplomatic property engagement.
              </p>
              <CheckList items={[
                'Visitor and contractor access logging with biometric records',
                'Background-verified, pre-cleared contractor network only',
                'Secure storage of all property and tenant documentation',
                'Coordination with mission security teams for all works',
                'Clearance-verified maintenance scheduling',
                'Perimeter and CCTV monitoring where required',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Diplomatic Compliance</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Protocol and regulatory adherence for all property operations.
              </p>
              <CheckList items={[
                'Adherence to diplomatic protocol in all communications',
                'Confidentiality agreements covering all staff and contractors',
                'Secure, encrypted communication channels',
                'Immunity and exemption considerations in lease structuring',
                'Document disposal protocols for sensitive materials',
                'Compliance with Kenyan property law and local authority requirements',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Sector-specialist property services"
        description="Our diplomatic property team applies institutional standards while respecting security protocols and diplomatic sensitivities across Kenya."
        primaryLabel="Discuss Your Requirements"
        primaryLink="/contact"
        secondaryLabel="All Sectors"
        secondaryLink="/sectors"
      />
    </>
  );
}

export default SectorsDiplomaticPage;
