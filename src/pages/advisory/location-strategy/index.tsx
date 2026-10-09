import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, Globe, Users2 } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function AdvisoryLocationStrategyPage() {
  return (
    <>
      <Seo
        title="Location Strategy | Murivest Lettings"
        description="Strategic location advisory for commercial tenants and investors seeking optimal market positioning."
        path="/advisory/location-strategy"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Advisory', path: '/advisory' }, { name: 'Location Strategy', path: '/advisory/location-strategy' }]}
      />
      <PageHero
        label="Advisory"
        title="Location strategy"
        subtitle="Data-driven location advisory for optimal business positioning."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Advisory', path: '/advisory' }, { name: 'Location Strategy', path: '/advisory/location-strategy' }]}
      />

      {/* Location Factors */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Location Factors" title="Multi-dimensional location analysis" />
              <p className="text-stone-500 leading-relaxed mb-6">
                The right location balances talent accessibility, operational efficiency, brand positioning and cost.
                We evaluate locations across quantitative and qualitative dimensions, translating data into clear
                comparative insights that support confident decision-making.
              </p>
              <CheckList items={[
                'Workforce catchment & commute time analysis',
                'Client & ecosystem proximity mapping',
                'Transport infrastructure & connectivity scoring',
                'Amenity & lifestyle environment assessment',
                'Cost of occupancy & total cost of operation',
                'Regulatory & planning environment review',
                'Future development pipeline impact analysis',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Location strategy analysis"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Market Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Market Analysis</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Quantitative market intelligence underpinning location recommendations.
              </p>
              <CheckList items={[
                'Submarket rent & yield benchmarking',
                'Vacancy rates & absorption trends',
                'Competitor location mapping',
                'Demographic & economic trend analysis',
                'Infrastructure investment pipeline',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Site Selection Criteria</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Structured evaluation framework for shortlisted locations.
              </p>
              <CheckList items={[
                'Weighted scoring model aligned to priorities',
                'Physical site constraints & opportunities',
                'Planning & regulatory feasibility',
                'ESG & sustainability alignment',
                'Scenario testing & sensitivity analysis',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Evaluating location options?"
        description="Our location strategy team combines proprietary data, market intelligence and institutional methodology to identify the optimal location for your business."
        primaryLabel="Discuss Your Requirements"
        primaryLink="/contact"
        secondaryLabel="Site Selection"
        secondaryLink="/advisory/site-selection"
      />
    </>
  );
}

export default AdvisoryLocationStrategyPage;