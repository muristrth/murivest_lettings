import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, FileText, BookOpen, Globe, MapPin as MapPinIcon, TrendingUp as TrendingUpIcon, Flag, Map, Landmark, ClipboardCheck, Wrench, DollarSign, Shield, Award, TrendingUp as TrendingUp2 } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function InsightsPropertyManagementPage() {
  return (
    <>
      <Seo
        title="Property Management Insights | Murivest Lettings"
        description="Property management best practices, performance metrics and industry trends."
        path="/insights/property-management"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: 'Property Management', path: '/insights/property-management' }]}
      />
      <PageHero
        label="Insights"
        title="Property management"
        subtitle="Institutional property management insights and best practices."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: 'Property Management', path: '/insights/property-management' }]}
      />

      {/* Management Standards */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Management Standards" title="Institutional property management benchmarks" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Professional property management in Kenya is evolving from reactive maintenance to proactive
                asset management. Institutional standards now encompass planned preventative maintenance,
                statutory compliance tracking, financial transparency, technology-enabled operations and
                ESG integration. We benchmark against international standards (RICS, BOMA, IPMS) adapted
                for the Kenyan context.
              </p>
              <CheckList items={[
                'Planned preventative maintenance (PPM) programmes',
                'Statutory compliance: NEMA, NCA, fire, lifts, electrical',
                'Financial reporting: monthly, quarterly, annual audit-ready',
                'Technology: CAFM, tenant portals, IoT sensor integration',
                'ESG: energy management, waste, water, carbon reporting',
                'Service charge transparency: budgeting, reconciliation, audit',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Property management operations"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white border border-stone-200 p-10 lg:p-12">
            <SectionHeader
              label="Performance Metrics"
              title="KPIs for effective property management"
              subtitle="Key performance indicators we track and benchmark across managed portfolios — enabling data-driven decisions and continuous improvement."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                { icon: DollarSign, title: 'Financial', desc: 'Rent collection >98%, arrears <2%, service charge recovery >95%, budget variance <5%.' },
                { icon: Wrench, title: 'Operational', desc: 'PPM completion >95%, reactive response <4hrs, tenant satisfaction >4.2/5, void period <21 days.' },
                { icon: Shield, title: 'Compliance & Risk', desc: 'Statutory compliance 100%, insurance current, fire/lift certs valid, H&S audits quarterly.' },
                { icon: Award, title: 'Asset Enhancement', desc: 'EPC improvement, BREEAM/EDGE certification, energy reduction >15%, capex plan delivery >90%.', },
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
        title="Elevating your property management standards?"
        description="Our management team delivers institutional-grade operations, transparent reporting and proactive asset management for commercial and residential portfolios across Kenya."
        primaryLabel="Discuss Management Needs"
        primaryLink="/contact"
        secondaryLabel="Property Management Services"
        secondaryLink="/services/property-management"
      />
    </>
  );
}

export default InsightsPropertyManagementPage;