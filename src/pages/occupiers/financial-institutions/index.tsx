import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';
import { Building2, Check } from 'lucide-react';

export function OccupiersFinancialInstitutionsPage() {
  return (
    <>
      <Seo
        title="Financial Institution Properties | Murivest Lettings"
        description="Property services for banks, insurance companies and financial services firms."
        path="/occupiers/financial-institutions"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Occupiers', path: '/occupiers' }, { name: 'Financial Institutions', path: '/occupiers/financial-institutions' }]}
      />
      <PageHero
        label="Occupiers"
        title="Financial institutions"
        subtitle="Property services for banks, insurers and financial services firms."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Occupiers', path: '/occupiers' }, { name: 'Financial Institutions', path: '/occupiers/financial-institutions' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xi mx-auto">
          <SectionHeader label="Financial Services" title="Property solutions for financial institutions" />
          <p className="text-stone-500 leading-relaxed mb-8 max-w-3xl">
            Financial institutions require office environments that reflect their professional standing
            while meeting strict operational, security and regulatory requirements. We provide specialised
            property advisory for banks, insurance companies and fintech firms.
          </p>
          <CheckList items={[
            'Premier office locations with high visibility',
            'Enhanced security infrastructure and access control',
            'Data centre and server room specifications',
            'Regulatory compliance for financial services premises',
            'Flexible tenancy structures for branch networks',
            'Fit-out management for sensitive environments',
            'Business continuity and disaster recovery planning',
            'Cost management and lease optimisation',
          ]} />
        </div>
      </section>

      <CtaBand
        title="Secure the right premises for your financial institution"
        description="Contact our financial services property advisory team today."
        primaryLabel="Request a Consultation"
        primaryLink="/contact"
      />
    </>
  );
}

export default OccupiersFinancialInstitutionsPage;
