import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, FileText, BookOpen, Globe, MapPin as MapPinIcon, TrendingUp as TrendingUpIcon, Flag, Map, Landmark, PieChart, Layout, ArrowUpDown, Cpu } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function InsightsOccupierStrategyPage() {
  return (
    <>
      <Seo
        title="Occupier Strategy Insights | Murivest Lettings"
        description="Strategic insights for commercial occupiers on portfolio optimisation and cost management."
        path="/insights/occupier-strategy"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: 'Occupier Strategy', path: '/insights/occupier-strategy' }]}
      />
      <PageHero
        label="Insights"
        title="Occupier strategy"
        subtitle="Strategic insights for commercial property occupiers."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: 'Occupier Strategy', path: '/insights/occupier-strategy' }]}
      />

      {/* Occupier Challenges */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Occupier Challenges" title="The evolving corporate real estate agenda" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Corporate occupiers face a convergence of pressures: hybrid work adoption, ESG mandates,
                technology integration, talent competition and cost discipline. Real estate decisions now
                require cross-functional alignment between CRE, HR, IT, Finance and Sustainability —
                with data-driven justification for every square metre.
              </p>
              <CheckList items={[
                'Right-sizing portfolio for hybrid attendance patterns',
                'ESG reporting: Scope 1, 2 & 3 emissions from occupied space',
                'Workplace experience as talent attraction differentiator',
                'Technology infrastructure: connectivity, sensors, building integration',
                'Lease flexibility for uncertain growth trajectories',
                'Total cost of occupancy optimisation',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Occupier strategy workspace"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Strategy Frameworks */}
          <div className="bg-white border border-stone-200 p-10 lg:p-12">
            <SectionHeader
              label="Strategy Frameworks"
              title="Structured approaches to occupier real estate"
              subtitle="Frameworks we apply with clients to align real estate with business strategy, workforce needs and sustainability commitments."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                { icon: PieChart, title: 'Portfolio Diagnostics', desc: 'Lease event mapping, utilisation sensors, cost benchmarking, ESG baseline, submarket analysis.' },
                { icon: Layout, title: 'Workplace Strategy', desc: 'Activity-based design, density optimisation, collaboration/focus balance, technology enablement.' },
                { icon: ArrowUpDown, title: 'Flexibility Planning', desc: 'Core/flex split, coworking integration, short-term options, expansion/contraction triggers.' },
                { icon: Cpu, title: 'Digital Workplace', desc: 'Occupancy analytics, booking systems, environmental monitoring, employee experience platforms.' },
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
        title="Realigning your property portfolio?"
        description="Our occupier strategy team works with corporate clients to optimise real estate footprints, reduce costs and create workplaces that support business objectives."
        primaryLabel="Portfolio Strategy Review"
        primaryLink="/contact"
        secondaryLabel="Occupier Advisory"
        secondaryLink="/advisory/occupier-strategy"
      />
    </>
  );
}

export default InsightsOccupierStrategyPage;