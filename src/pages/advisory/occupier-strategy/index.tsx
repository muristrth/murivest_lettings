import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, PieChart } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function AdvisoryOccupierStrategyPage() {
  return (
    <>
      <Seo
        title="Occupier Strategy | Murivest Lettings"
        description="Strategic occupier advisory for businesses managing property portfolios across Kenya."
        path="/advisory/occupier-strategy"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Advisory', path: '/advisory' }, { name: 'Occupier Strategy', path: '/advisory/occupier-strategy' }]}
      />
      <PageHero
        label="Advisory"
        title="Occupier strategy"
        subtitle="Strategic portfolio advisory for commercial occupiers."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Advisory', path: '/advisory' }, { name: 'Occupier Strategy', path: '/advisory/occupier-strategy' }]}
      />

      {/* Portfolio Optimisation */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Portfolio Optimisation" title="Aligning real estate with business strategy" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Property is often a top-three cost for occupiers, yet many lack a structured approach to portfolio management.
                We help occupiers treat real estate as a strategic asset — optimising cost, flexibility and workplace
                effectiveness through data-driven analysis and proactive lease event management.
              </p>
              <CheckList items={[
                'Portfolio audit & lease event calendar',
                'Space utilisation & occupancy analytics',
                'Lease renewal, break & expiry strategy',
                'Consolidation, expansion & relocation planning',
                'Workplace strategy & design briefing',
                'Service charge audit & cost recovery',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Occupier strategy consultation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Cost Management & Space Planning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <PieChart className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Cost Management</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Reducing total occupancy cost without compromising operational effectiveness.
              </p>
              <CheckList items={[
                'Rent & service charge benchmarking',
                'Operating expense optimisation',
                'Tax efficiency & incentive capture',
                'Vendor consolidation & procurement',
                'Capital expenditure planning & deferral',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Space Planning</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Translating business requirements into efficient, adaptable workplace solutions.
              </p>
              <CheckList items={[
                'Headcount forecasting & space modelling',
                'Density optimisation & agile settings',
                'Collaboration & focus space balance',
                'Technology & infrastructure integration',
                'Change management & occupancy transition',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Optimising your property portfolio?"
        description="Whether you're managing a single lease or a multi-location portfolio, our occupier strategy team brings institutional rigour to your real estate decisions."
        primaryLabel="Request a Portfolio Review"
        primaryLink="/contact"
        secondaryLabel="Lease Negotiation"
        secondaryLink="/advisory/lease-negotiation"
      />
    </>
  );
}

export default AdvisoryOccupierStrategyPage;