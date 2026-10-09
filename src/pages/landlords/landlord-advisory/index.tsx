import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, Globe, MapPin as MapPinIcon, Flag, Users as UsersIcon, Plane, Map, Landmark, TrendingUp as TrendingUp2, PieChart, Calculator, ArrowUpRight, ClipboardList, Gavel, Coins } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LandlordsLandlordAdvisoryPage() {
  return (
    <>
      <Seo
        title="Landlord Advisory | Murivest Lettings"
        description="Strategic advisory services for property owners including portfolio optimisation, disposals and acquisitions."
        path="/landlords/landlord-advisory"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Landlords', path: '/landlords' }, { name: 'Landlord Advisory', path: '/landlords/landlord-advisory' }]}
      />
      <PageHero
        label="Landlords"
        title="Landlord advisory"
        subtitle="Strategic advisory for property owners and investors."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Landlords', path: '/landlords' }, { name: 'Landlord Advisory', path: '/landlords/landlord-advisory' }]}
      />

      {/* Advisory Services */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Advisory Services" title="Strategic guidance for property decisions" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Property ownership involves a series of consequential decisions: hold or sell, refurbish or
                reposition, lease or develop, acquire or diversify. We provide independent, evidence-based
                advisory to support these decisions — free from transactional conflict, grounded in market
                reality and aligned with your investment objectives.
              </p>
              <CheckList items={[
                'Portfolio review & strategic asset allocation',
                'Hold/sell analysis with tax & reinvestment modelling',
                'Acquisition sourcing, due diligence & negotiation',
                'Development feasibility & risk assessment',
                'Lease restructuring & tenant remix strategy',
                'Regulatory & compliance advisory (NCA, NEMA, physical planning)',
                'Succession & estate planning for property assets',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Landlord advisory consultation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Decision Framework */}
          <div className="bg-white border border-stone-200 p-10 lg:p-12">
            <SectionHeader
              label="Decision Framework"
              title="Structured approach to property decisions"
              subtitle="A consistent methodology ensuring every major decision is informed, documented and aligned with your objectives."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: ClipboardList, title: 'Diagnosis', desc: 'Objective setting, constraint mapping, stakeholder alignment, data gathering, success criteria.' },
                { icon: PieChart, title: 'Analysis', desc: 'Market evidence, financial modelling, scenario planning, risk assessment, option generation.' },
                { icon: Gavel, title: 'Recommendation', desc: 'Evidence-based options, trade-off analysis, implementation roadmap, governance approval.', },
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
        title="Facing a significant property decision?"
        description="Our advisory team provides independent, evidence-based guidance for hold/sell, acquire, develop and restructure decisions — with no transactional conflict."
        primaryLabel="Request Advisory Engagement"
        primaryLink="/contact"
        secondaryLabel="Asset Positioning"
        secondaryLink="/landlords/asset-positioning"
      />
    </>
  );
}

export default LandlordsLandlordAdvisoryPage;