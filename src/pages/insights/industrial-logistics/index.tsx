import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, FileText, BookOpen, Globe, MapPin as MapPinIcon, TrendingUp as TrendingUpIcon, Flag, Map, Landmark, Factory, Truck, Package, MapPin as MapPin2 } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function InsightsIndustrialLogisticsPage() {
  return (
    <>
      <Seo
        title="Industrial & Logistics Insights | Murivest Lettings"
        description="Market analysis for industrial and logistics property across Kenya's growing logistics corridors."
        path="/insights/industrial-logistics"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: 'Industrial & Logistics', path: '/insights/industrial-logistics' }]}
      />
      <PageHero
        label="Insights"
        title="Industrial & logistics"
        subtitle="Industrial property market intelligence and analysis."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: 'Industrial & Logistics', path: '/insights/industrial-logistics' }]}
      />

      {/* Sector Dynamics */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Sector Dynamics" title="Kenya's evolving industrial & logistics landscape" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Kenya's industrial property market is undergoing rapid modernisation. The Standard Gauge Railway,
                port expansions, highway upgrades and the AfCFTA are reshaping logistics corridors. Demand is shifting
                from basic warehousing to modern logistics facilities with grade-A specifications, cold chain capability
                and last-mile distribution nodes.
              </p>
              <CheckList items={[
                'Nairobi: Mombasa Road, Athi River, Ruiru corridors',
                'Mombasa: Port-proximate logistics & cold storage',
                'Naivasha: SGR dry port & industrial park development',
                'Eldoret: Agricultural processing & regional distribution',
                'Cold chain: Perishables export & domestic distribution',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Industrial logistics property"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Location Priorities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <MapPin2 className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Location Priorities</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Critical factors for industrial & logistics site selection.
              </p>
              <CheckList items={[
                'Highway & SGR connectivity (Mombasa Rd, Northern Bypass, Thika Rd)',
                'Port proximity for import/export operations',
                'Power reliability & three-phase availability',
                'Land availability for expansion & vehicle circulation',
                'Labour catchment & housing affordability',
                'Zoning & environmental compliance',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Market Outlook</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Forward-looking indicators for industrial property.
              </p>
              <CheckList items={[
                'Prime logistics yields: 9-10% (compressing)',
                'Grade-A warehouse rent growth: 5-8% p.a.',
                'Speculative development increasing in Athi River',
                'Cold storage: significant supply-demand gap',
                'Last-mile: urban logistics nodes emerging',
                'ESG: solar, water recycling, green certification',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Industrial or logistics property requirements?"
        description="Our team advises on warehouse acquisitions, lease negotiations, site selection and development feasibility across Kenya's industrial corridors."
        primaryLabel="Discuss Your Needs"
        primaryLink="/contact"
        secondaryLabel="Lease Industrial Property"
        secondaryLink="/lease/industrial-property-to-let"
      />
    </>
  );
}

export default InsightsIndustrialLogisticsPage;