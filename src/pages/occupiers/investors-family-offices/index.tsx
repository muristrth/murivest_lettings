import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';
import { BarChart3, Check } from 'lucide-react';

export function OccupiersInvestorsFamilyOfficesPage() {
  return (
    <>
      <Seo
        title="Investor & Family Office Services | Murivest Lettings"
        description="Property advisory for investors, family offices and institutional capital."
        path="/occupiers/investors-family-offices"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Occupiers', path: '/occupiers' }, { name: 'Investors & Family Offices', path: '/occupiers/investors-family-offices' }]}
      />
      <PageHero
        label="Occupiers"
        title="Investors & family offices"
        subtitle="Property advisory for investors and family offices."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Occupiers', path: '/occupiers' }, { name: 'Investors & Family Offices', path: '/occupiers/investors-family-offices' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xi mx-auto">
          <SectionHeader label="Investment Focus" title="Property solutions for sophisticated investors" />
          <p className="text-stone-500 leading-relaxed mb-8 max-w-3xl">
            Investors and family offices require property advisory that goes beyond simple lease
            negotiation — incorporating yield analysis, portfolio strategy and long-term capital
            preservation. We provide tailored services for single-asset and multi-asset property portfolios.
          </p>
          <CheckList items={[
            'Portfolio analysis and yield optimisation',
            'Asset allocation and diversification advisory',
            'Due diligence on property acquisitions and disposals',
            'Lease structuring and negotiation',
            'Tax-efficient property structuring',
            'Property fund governance and compliance',
            'ESG and sustainability integration',
            'Exit planning and succession advisory',
          ]} />
        </div>
      </section>

      <CtaBand
        title="Optimise your property investment strategy"
        description="Contact our investment advisory team to discuss your portfolio requirements."
        primaryLabel="Request a Consultation"
        primaryLink="/contact"
      />
    </>
  );
}

export default OccupiersInvestorsFamilyOfficesPage;
