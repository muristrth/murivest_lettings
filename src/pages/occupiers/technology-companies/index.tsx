import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';
import { Cpu, Check } from 'lucide-react';

export function OccupiersTechnologyCompaniesPage() {
  return (
    <>
      <Seo
        title="Technology Company Properties | Murivest Lettings"
        description="Property advisory for technology companies and startups."
        path="/occupiers/technology-companies"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Occupiers', path: '/occupiers' }, { name: 'Technology Companies', path: '/occupiers/technology-companies' }]}
      />
      <PageHero
        label="Occupiers"
        title="Technology companies"
        subtitle="Property services for tech companies."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Occupiers', path: '/occupiers' }, { name: 'Technology Companies', path: '/occupiers/technology-companies' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xi mx-auto">
          <SectionHeader label="Tech Sector" title="Flexible space for growing technology companies" />
          <p className="text-stone-500 leading-relaxed mb-8 max-w-3xl">
            Technology companies have unique property needs — flexible space, cutting-edge
            infrastructure, collaborative environments and room to scale. We provide specialised
            advisory for tech firms at every stage, from startup to scale-up to established MNC.
          </p>
          <CheckList items={[
            'Tech-ready infrastructure (high-speed fibre, power density)',
            'Flexible lease terms for rapid scaling',
            'Open-plan and collaborative workspace design',
            'Meeting rooms and client presentation facilities',
            'Generator and UPS backup power systems',
            'Secure data and server room facilities',
            'Staff amenity spaces (kitchens, lounges, recreation)',
            'Proximity to talent pools and universities',
          ]} />
        </div>
      </section>

      <CtaBand
        title="Need flexible tech space?"
        description="Contact our technology sector advisory team to discuss your requirements."
        primaryLabel="Request a Consultation"
        primaryLink="/contact"
      />
    </>
  );
}

export default OccupiersTechnologyCompaniesPage;
