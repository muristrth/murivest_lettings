import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, Globe, MapPin as MapPinIcon, Flag, Users as UsersIcon, Plane, Map, Landmark, TrendingUp as TrendingUp2, PieChart, Calculator, ArrowUpRight } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LandlordsAssetPositioningPage() {
  return (
    <>
      <Seo
        title="Asset Positioning Advisory | Murivest Lettings"
        description="Strategic asset positioning to maximise rental value and long-term investment returns."
        path="/landlords/asset-positioning"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Landlords', path: '/landlords' }, { name: 'Asset Positioning', path: '/landlords/asset-positioning' }]}
      />
      <PageHero
        label="Landlords"
        title="Asset positioning"
        subtitle="Maximise the rental value and long-term returns of your property portfolio."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Landlords', path: '/landlords' }, { name: 'Asset Positioning', path: '/landlords/asset-positioning' }]}
      />

      {/* Positioning Strategy */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Positioning Strategy" title="From current state to optimal market position" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Every property has a current market position and a potential optimal position. The gap between
                the two represents unrealised value. We analyse your asset's physical attributes, location
                dynamics, tenant profile and competitive set to define a repositioning strategy — whether
                that's light refurbishment, speculative fit-out, service upgrade, rebranding or tenant remix.
              </p>
              <CheckList items={[
                'Asset audit: physical, mechanical, aesthetic, compliance',
                'Competitive set analysis: rents, specs, occupancy, tenant mix',
                'Gap analysis: current vs. achievable rent & yield',
                'Repositioning options: cost, timeline, ROI, risk',
                'Tenant remix strategy for multi-let assets',
                'Phased implementation to minimise income disruption',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Asset positioning analysis"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Market Analysis */}
          <div className="bg-white border border-stone-200 p-10 lg:p-12">
            <SectionHeader
              label="Market Analysis"
              title="Data-driven positioning decisions"
              subtitle="Every recommendation grounded in comparable evidence, occupier demand analysis and financial modelling."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: PieChart, title: 'Rent Benchmarking', desc: 'Grade-specific comparable analysis, net effective rent calculation, incentive benchmarking.' },
                { icon: Calculator, title: 'Financial Modelling', desc: 'Capex scenarios, IRR/NPV analysis, payback periods, yield on cost vs. yield on value.' },
                { icon: ArrowUpRight, title: 'Demand Profiling', desc: 'Target occupier identification, space requirements, budget ranges, decision timelines.', },
              ].map((item) => (
                <div key={item.title}>
                  <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <h3 className="font-serif text-lg text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Unlocking hidden value in your assets?"
        description="Our asset positioning team identifies the gap between current and optimal performance — and delivers the strategy to close it."
        primaryLabel="Request Asset Review"
        primaryLink="/contact"
        secondaryLabel="Landlord Advisory"
        secondaryLink="/landlords/landlord-advisory"
      />
    </>
  );
}

export default LandlordsAssetPositioningPage;