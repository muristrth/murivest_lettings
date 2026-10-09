import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';
import { Globe2, Check } from 'lucide-react';

export function OccupiersMultinationalCompaniesPage() {
  return (
    <>
      <Seo
        title="Multinational Company Properties | Murivest Lettings"
        description="Property advisory for multinational corporations establishing or expanding in Kenya."
        path="/occupiers/multinational-companies"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Occupiers', path: '/occupiers' }, { name: 'Multinational Companies', path: '/occupiers/multinational-companies' }]}
      />
      <PageHero
        label="Occupiers"
        title="Multinational companies"
        subtitle="Property services for international corporations."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Occupiers', path: '/occupiers' }, { name: 'Multinational Companies', path: '/occupiers/multinational-companies' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xi mx-auto">
          <SectionHeader label="MNC Focus" title="Supporting international expansion into Kenya" />
          <p className="text-stone-500 leading-relaxed mb-8 max-w-3xl">
            Multinational corporations entering or expanding in Kenya need local property expertise
            combined with international standards. We provide end-to-end advisory services, from
            initial market entry through ongoing portfolio management.
          </p>
          <CheckList items={[
            'Market entry strategy and location analysis',
            'Multi-market portfolio planning',
            'International lease structuring',
            'Local regulatory and compliance guidance',
            'Fit-out and relocation project management',
            'Property management oversight',
            'Vendor and service provider network',
            'Repatriation and exit planning',
          ]} />
        </div>
      </section>

      <CtaBand
        title="Expanding into the Kenyan market?"
        description="Our international client services team provides seamless support for your property requirements."
        primaryLabel="Request a Consultation"
        primaryLink="/contact"
      />
    </>
  );
}

export default OccupiersMultinationalCompaniesPage;
