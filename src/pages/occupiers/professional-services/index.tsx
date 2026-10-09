import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';
import { Briefcase, Check } from 'lucide-react';

export function OccupiersProfessionalServicesPage() {
  return (
    <>
      <Seo
        title="Professional Services Properties | Murivest Lettings"
        description="Property services for law firms, consulting and professional services firms."
        path="/occupiers/professional-services"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Occupiers', path: '/occupiers' }, { name: 'Professional Services', path: '/occupiers/professional-services' }]}
      />
      <PageHero
        label="Occupiers"
        title="Professional services"
        subtitle="Property services for law firms and consulting practices."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Occupiers', path: '/occupiers' }, { name: 'Professional Services', path: '/occupiers/professional-services' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xi mx-auto">
          <SectionHeader label="Professional Services" title="Premium office environments for professional practices" />
          <p className="text-stone-500 leading-relaxed mb-8 max-w-3xl">
            Law firms, consulting practices and professional services firms require office environments
            that reflect their status while supporting confidential client interactions and
            collaborative work. We provide specialised advisory for these demanding tenants.
          </p>
          <CheckList items={[
            'Prestigious address locations in key business districts',
            'Confidentiality-compliant building and security specifications',
            'Flexible space configurations for varying team sizes',
            'High-quality finishes and professional reception areas',
            'Technology infrastructure for hybrid working',
            'Meeting room and client entertainment facilities',
            'Parking provision for partners and clients',
            'Serviced office and virtual office options',
          ]} />
        </div>
      </section>

      <CtaBand
        title="Find the right premises for your practice"
        description="Contact our professional services advisory team to discuss your space requirements."
        primaryLabel="Request a Consultation"
        primaryLink="/contact"
      />
    </>
  );
}

export default OccupiersProfessionalServicesPage;
