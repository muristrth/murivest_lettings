import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';
import { Users, Check } from 'lucide-react';

export function OccupiersNgosPage() {
  return (
    <>
      <Seo
        title="NGO & Development Properties | Murivest Lettings"
        description="Property services for non-governmental organisations and development agencies."
        path="/occupiers/ngos"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Occupiers', path: '/occupiers' }, { name: 'NGOs & Development', path: '/occupiers/ngos' }]}
      />
      <PageHero
        label="Occupiers"
        title="NGOs & development"
        subtitle="Property services for non-governmental organisations."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Occupiers', path: '/occupiers' }, { name: 'NGOs & Development', path: '/occupiers/ngos' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xi mx-auto">
          <SectionHeader label="NGO Sector" title="Property solutions for mission-driven organisations" />
          <p className="text-stone-500 leading-relaxed mb-8 max-w-3xl">
            Non-governmental organisations and development agencies have unique property requirements
            that balance mission objectives with operational efficiency. We provide specialised advisory
            services for NGOs operating across Kenya and the broader East African region.
          </p>
          <CheckList items={[
            'Mission-aligned property location advisory',
            'Cost-effective space solutions for non-profit budgets',
            'Security and access control requirements',
            'Staff accommodation and compound management',
            'Generators and backup power infrastructure',
            'Storage and warehouse facilities for aid supplies',
            'Compliance with donor and regulatory requirements',
            'Flexible lease terms for project-based operations',
          ]} />
        </div>
      </section>

      <CtaBand
        title="Let us support your mission"
        description="Contact our NGO property advisory team to discuss your operational requirements."
        primaryLabel="Request a Consultation"
        primaryLink="/contact"
      />
    </>
  );
}

export default OccupiersNgosPage;
