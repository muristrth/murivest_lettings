import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';
import { ShieldCheck, Check } from 'lucide-react';

export function OccupiersEmbassiesDiplomaticPage() {
  return (
    <>
      <Seo
        title="Embassy & Diplomatic Properties | Murivest Lettings"
        description="Specialized property services for diplomatic missions and embassies."
        path="/occupiers/embassies-diplomatic"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Occupiers', path: '/occupiers' }, { name: 'Embassies & Diplomatic', path: '/occupiers/embassies-diplomatic' }]}
      />
      <PageHero
        label="Occupiers"
        title="Embassy & diplomatic properties"
        subtitle="Property services for diplomatic missions and international organisations."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Occupiers', path: '/occupiers' }, { name: 'Embassies & Diplomatic', path: '/occupiers/embassies-diplomatic' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xi mx-auto">
          <SectionHeader label="Diplomatic Sector" title="Security-first property solutions for diplomatic missions" />
          <p className="text-stone-500 leading-relaxed mb-8 max-w-3xl">
            Diplomatic missions require specialised property solutions with heightened security,
            privacy and operational considerations. We provide tailored advisory and management
            services for embassy and consulate properties.
          </p>
          <CheckList items={[
            'Discreet, high-security property search and evaluation',
            'Diplomatic immunity and tax exemption advisory',
            'Staff accommodation and compound management',
            'Security assessment and infrastructure review',
            'Privacy and data protection compliance',
            'Relocation and fit-out management',
            'Ongoing property and facilities management',
            'Emergency response and business continuity planning',
          ]} />
        </div>
      </section>

      <CtaBand
        title="Discuss your diplomatic property needs"
        description="Our team has extensive experience working with diplomatic missions and understands the unique requirements of this sector."
        primaryLabel="Request a Consultation"
        primaryLink="/contact"
      />
    </>
  );
}

export default OccupiersEmbassiesDiplomaticPage;
