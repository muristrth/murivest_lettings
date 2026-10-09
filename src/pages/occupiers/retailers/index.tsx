import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';
import { Store, Check } from 'lucide-react';

export function OccupiersRetailersPage() {
  return (
    <>
      <Seo
        title="Retailer Property Services | Murivest Lettings"
        description="Property advisory for retailers seeking prime locations and optimal lease terms."
        path="/occupiers/retailers"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Occupiers', path: '/occupiers' }, { name: 'Retailers', path: '/occupiers/retailers' }]}
      />
      <PageHero
        label="Occupiers"
        title="Retailers"
        subtitle="Property services for retail operators."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Occupiers', path: '/occupiers' }, { name: 'Retailers', path: '/occupiers/retailers' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xi mx-auto">
          <SectionHeader label="Retail Focus" title="Prime retail locations for your business" />
          <p className="text-stone-500 leading-relaxed mb-8 max-w-3xl">
            Retail success depends on location, visibility and customer experience. We provide
            specialised property advisory for retailers, from initial market entry through ongoing
            portfolio optimisation, ensuring you secure the right space at the right terms.
          </p>
          <CheckList items={[
            'Prime location identification with footfall analysis',
            'Store format and layout optimisation',
            'Lease negotiation including fit-out allowances',
            'Tenant mix analysis in shopping centres',
            'Rent benchmarking against market comparables',
            'Relocation and expansion planning',
            'Pop-up and short-term space solutions',
            'Performance monitoring and lease event management',
          ]} />
        </div>
      </section>

      <CtaBand
        title="Looking for retail space?"
        description="Contact our retail advisory team to discuss your expansion or relocation requirements."
        primaryLabel="Request a Consultation"
        primaryLink="/contact"
      />
    </>
  );
}

export default OccupiersRetailersPage;
