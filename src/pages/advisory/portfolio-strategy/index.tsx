import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, PieChart, Coins, Shield, Activity } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function AdvisoryPortfolioStrategyPage() {
  return (
    <>
      <Seo
        title="Portfolio Strategy | Murivest Lettings"
        description="Institutional portfolio strategy advisory for property owners and investors with multi-asset portfolios."
        path="/advisory/portfolio-strategy"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Advisory', path: '/advisory' }, { name: 'Portfolio Strategy', path: '/advisory/portfolio-strategy' }]}
      />
      <PageHero
        label="Advisory"
        title="Portfolio strategy"
        subtitle="Institutional portfolio management and advisory services."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Advisory', path: '/advisory' }, { name: 'Portfolio Strategy', path: '/advisory/portfolio-strategy' }]}
      />

      {/* Portfolio Strategy Framework */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Portfolio Strategy Framework" title="Institutional discipline for private portfolios" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Many private and family-owned portfolios lack the governance, performance measurement and strategic
                frameworks standard in institutional real estate. We bring that discipline — establishing clear
                objectives, risk parameters, performance benchmarks and decision-making processes.
              </p>
              <CheckList items={[
                'Investment policy statement development',
                'Strategic asset allocation & sector weights',
                'Risk budgeting & scenario analysis',
                'Performance measurement & attribution',
                'Governance structure & reporting framework',
                'ESG integration & climate resilience',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Portfolio strategy analysis"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Asset Allocation & Performance Monitoring */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Coins className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Asset Allocation</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Evidence-based allocation across sectors, geographies and risk profiles.
              </p>
              <CheckList items={[
                'Sector diversification: office, retail, industrial, residential',
                'Geographic spread across Kenyan markets',
                'Core, value-add & opportunistic balance',
                'Development vs. income-producing mix',
                'Liquidity management & exit flexibility',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Performance Monitoring</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Continuous performance tracking against benchmarks and objectives.
              </p>
              <CheckList items={[
                'Quarterly performance reporting & attribution',
                'MSCI/IPD benchmark comparison',
                'Property-level KPI tracking',
                'Market cycle positioning & tactical shifts',
                'Annual strategy review & rebalancing',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Bringing institutional rigour to your portfolio?"
        description="Our portfolio strategy team works with family offices, private investors and corporate owners to professionalise portfolio management and enhance risk-adjusted returns."
        primaryLabel="Discuss Your Portfolio"
        primaryLink="/contact"
        secondaryLabel="Landlord Advisory"
        secondaryLink="/landlords/landlord-advisory"
      />
    </>
  );
}

export default AdvisoryPortfolioStrategyPage;