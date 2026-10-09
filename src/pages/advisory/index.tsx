import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, Eye, Users, Briefcase, Globe, TrendingUp, Lightbulb, KeySquare, FileBarChart, MapPin, Phone, ClipboardCheck, Handshake, BarChart3, Coins } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2, Target, ShieldCheck, Eye, Users, Briefcase, Globe, TrendingUp, Lightbulb, KeySquare, FileBarChart, MapPin, Phone, ClipboardCheck, Handshake, BarChart3, Coins,
};

const SERVICE_LINES = [
  { slug: 'corporate-relocation', icon: 'Briefcase', shortTitle: 'Corporate Relocation', tagline: 'End-to-end relocation advisory for businesses establishing or moving operations in Kenya.', items: ['Needs assessment & location strategy', 'Market search & shortlisting', 'Lease negotiation & documentation', 'Fit-out coordination & move management'] },
  { slug: 'international-property-advisory', icon: 'Globe', shortTitle: 'International Property Advisory', tagline: 'Market entry and investment advisory for international clients entering East African markets.', items: ['Market entry strategy', 'Regulatory & tax guidance', 'Local partner identification', 'Cross-border transaction support'] },
  { slug: 'lease-negotiation', icon: 'FileBarChart', shortTitle: 'Lease Negotiation', tagline: 'Strategic negotiation for commercial lease agreements protecting tenant and landlord interests.', items: ['Heads of terms structuring', 'Rent & service charge benchmarking', 'Break clause & renewal negotiations', 'Service charge audit & reconciliation'] },
  { slug: 'lease-renewal', icon: 'RefreshCw', shortTitle: 'Lease Renewal Advisory', tagline: 'Optimise renewal terms through market analysis and strategic negotiation planning.', items: ['Market rent assessment', 'Renewal timeline management', 'Alternative option analysis', 'Negotiation & documentation'] },
  { slug: 'location-strategy', icon: 'MapPin', shortTitle: 'Location Strategy', tagline: 'Data-driven location advisory for optimal business positioning and market access.', items: ['Catchment & demographic analysis', 'Competitor mapping', 'Accessibility & infrastructure scoring', 'Cost-benefit modelling'] },
  { slug: 'market-entry', icon: 'Target', shortTitle: 'Market Entry Advisory', tagline: 'Strategic market entry support for businesses and investors entering Kenyan commercial real estate.', items: ['Market feasibility studies', 'Entry mode advisory', 'Regulatory navigation', 'Local partnership facilitation'] },
  { slug: 'occupier-strategy', icon: 'Users', shortTitle: 'Occupier Strategy', tagline: 'Portfolio optimisation and cost management for commercial occupiers across Kenya.', items: ['Portfolio rationalisation', 'Lease event management', 'Space utilisation analysis', 'Cost reduction programmes'] },
  { slug: 'portfolio-strategy', icon: 'BarChart3', shortTitle: 'Portfolio Strategy', tagline: 'Institutional portfolio management and advisory for multi-asset property owners.', items: ['Asset allocation & diversification', 'Performance measurement & attribution', 'Disposal & acquisition pipeline', 'Risk management framework'] },
  { slug: 'site-selection', icon: 'Building2', shortTitle: 'Site Selection', tagline: 'Rigorous site evaluation and recommendation for development or occupation.', items: ['Site identification & longlisting', 'Due diligence coordination', 'Planning & regulatory assessment', 'Comparative site scoring'] },
  { slug: 'tenant-representation', icon: 'Handshake', shortTitle: 'Tenant Representation', tagline: 'Exclusive representation of tenant interests in lease transactions and property searches.', items: ['Requirements definition', 'Market-wide property search', 'Negotiation & lease structuring', 'Ongoing lease administration'] },
];

export function AdvisoryIndexPage() {
  return (
    <>
      <Seo
        title="Advisory Services | Murivest Lettings"
        description="Strategic property advisory services including lease negotiation, market entry, location strategy and tenant representation."
        path="/advisory"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Advisory', path: '/advisory' }]}
      />
      <PageHero
        label="Advisory"
        title="Strategic property advisory"
        subtitle="Institutional-grade advisory services for complex property decisions."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Advisory', path: '/advisory' }]}
      />

      {/* Service Lines Overview */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Service Lines"
            title="Specialised advisory for every property challenge"
            subtitle="Ten distinct service lines, each delivered with institutional rigour, market intelligence and a focus on measurable outcomes."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 mt-12">
            {SERVICE_LINES.map((service) => {
              const Icon = ICONS[service.icon] || Building2;
              return (
                <Link
                  key={service.slug}
                  to={`/advisory/${service.slug}`}
                  className="group bg-white p-8 transition-all duration-500 hover:bg-navy-950 hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-gold-400">
                    <Icon className="w-6 h-6 text-navy-700 transition-colors duration-300 group-hover:text-navy-950" />
                  </div>
                  <h3 className="font-serif text-xl text-navy-900 mb-3 transition-colors duration-300 group-hover:text-ivory-50">
                    {service.shortTitle}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed transition-colors duration-300 group-hover:text-ivory-200/70 mb-5">
                    {service.tagline}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-stone-500 transition-colors duration-300 group-hover:text-ivory-200/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-xs font-medium text-gold-500 transition-colors duration-300 group-hover:text-gold-300">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advisory Process */}
      <section className="section-padding py-20 lg:py-28 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Our Process"
            title="A structured approach to advisory outcomes"
            subtitle="Every engagement follows a defined methodology — from initial diagnosis through to implementation and review."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              { step: '01', title: 'Diagnosis', desc: 'Understand objectives, constraints and success criteria through stakeholder workshops and data review.' },
              { step: '02', title: 'Analysis', desc: 'Market research, financial modelling, scenario planning and option identification.' },
              { step: '03', title: 'Recommendation', desc: 'Clear, evidence-based recommendations with risk assessment and implementation roadmap.' },
              { step: '04', title: 'Execution', desc: 'Transaction management, negotiation, documentation and post-completion monitoring.' },
            ].map((stage) => (
              <div key={stage.title} className="border-l border-gold-400/30 pl-6">
                <div className="label-text text-gold-500 mb-2">{stage.step}</div>
                <h3 className="font-serif text-lg text-navy-900 mb-2">{stage.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Discuss your advisory requirements"
        description="Whether you're entering a new market, renewing a lease or optimising a portfolio, our advisory team brings institutional discipline to your property decisions."
        primaryLabel="Request a Consultation"
        primaryLink="/contact"
        secondaryLabel="View All Services"
        secondaryLink="/services"
      />
    </>
  );
}

export default AdvisoryIndexPage;