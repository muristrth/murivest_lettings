import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';
import { MapPin, Check } from 'lucide-react';

export function OccupiersRegionalHeadquartersPage() {
  return (
    <>
      <Seo
        title="Regional Headquarters Properties | Murivest Lettings"
        description="Property advisory for companies establishing regional headquarters in Kenya."
        path="/occupiers/regional-headquarters"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Occupiers', path: '/occupiers' }, { name: 'Regional Headquarters', path: '/occupiers/regional-headquarters' }]}
      />
      <PageHero
        label="Occupiers"
        title="Regional headquarters"
        subtitle="Property services for companies establishing regional headquarters."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Occupiers', path: '/occupiers' }, { name: 'Regional Headquarters', path: '/occupiers/regional-headquarters' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xi mx-auto">
          <SectionHeader label="RHQ Focus" title="Establishing your regional headquarters in Kenya" />
          <p className="text-stone-500 leading-relaxed mb-8 max-w-3xl">
            Companies establishing a regional headquarters in Kenya require premises that support both
            executive functions and operational scale. We provide dedicated advisory for RHQ
            establishment, from site selection through to lease negotiation and fit-out management.
          </p>
          <CheckList items={[
            'Strategic location assessment for regional access',
            'Premier office building selection with international standards',
            'Executive-level security and privacy specifications',
            'Boardroom and client entertainment facilities',
            'Staff accommodation and amenity planning',
            'Generator and backup power infrastructure',
            'IT and telecommunications infrastructure',
            'Scalable space for future expansion',
          ]} />
        </div>
      </section>

      <CtaBand
        title="Establishing your regional headquarters?"
        description="Our team provides dedicated support for RHQ establishment in Kenya."
        primaryLabel="Request a Consultation"
        primaryLink="/contact"
      />
    </>
  );
}

export default OccupiersRegionalHeadquartersPage;
