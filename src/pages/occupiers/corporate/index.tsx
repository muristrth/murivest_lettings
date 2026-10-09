import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';
import { Briefcase, Check } from 'lucide-react';

export function OccupiersCorporatePage() {
  return (
    <>
      <Seo
        title="Corporate Occupier Services | Murivest Lettings"
        description="Property advisory for corporate tenants and occupiers across Kenya."
        path="/occupiers/corporate"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Occupiers', path: '/occupiers' }, { name: 'Corporate', path: '/occupiers/corporate' }]}
      />
      <PageHero
        label="Occupiers"
        title="Corporate occupier services"
        subtitle="Strategic real estate for corporate tenants."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Occupiers', path: '/occupiers' }, { name: 'Corporate', path: '/occupiers/corporate' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xi mx-auto">
          <SectionHeader label="Corporate Focus" title="Real estate as a business enabler" />
          <p className="text-stone-500 leading-relaxed mb-8 max-w-3xl">
            Corporate occupiers require property solutions that support their broader business
            objectives. We work with corporate tenants to optimise their property portfolio through
            strategic advisory, lease negotiation, and ongoing management support.
          </p>
          <CheckList items={[
            'Portfolio strategy and optimisation',
            'Lease negotiation and restructuring',
            'Market-aligned rent benchmarking',
            'Fit-out and relocation management',
            'Service charge and operating cost analysis',
            'Compliance and risk management',
            'Strategic disposal and consolidation',
            'International expansion support',
          ]} />
        </div>
      </section>

      <CtaBand
        title="Ready to optimise your corporate real estate?"
        description="Contact our corporate occupier advisory team to discuss your requirements."
        primaryLabel="Request a Consultation"
        primaryLink="/contact"
      />
    </>
  );
}

export default OccupiersCorporatePage;
