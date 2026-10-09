import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, FileText, BookOpen, Globe, MapPin as MapPinIcon, TrendingUp as TrendingUpIcon } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

const INSIGHT_CATEGORIES = [
  { slug: 'commercial-real-estate', icon: 'Building2', title: 'Commercial Real Estate', desc: 'Market trends, investment analysis and sector commentary across office, retail, industrial and mixed-use.', href: '/insights/commercial-real-estate' },
  { slug: 'office-market', icon: 'Briefcase', title: 'Office Market', desc: 'Nairobi office market analysis, rent trends, supply pipeline and occupier demand dynamics.', href: '/insights/office-market' },
  { slug: 'retail-market', icon: 'ShoppingBag', title: 'Retail Market', desc: 'Retail property trends, consumer behaviour, rental analysis and format evolution.', href: '/insights/retail-market' },
  { slug: 'industrial-logistics', icon: 'Factory', title: 'Industrial & Logistics', desc: 'Warehouse and logistics market analysis across Kenya\'s key industrial corridors.', href: '/insights/industrial-logistics' },
  { slug: 'hospitality', icon: 'Building2', title: 'Hospitality', desc: 'Hotel, serviced apartment and leisure property market intelligence.', href: '/insights/hospitality' },
  { slug: 'leasing', icon: 'FileText', title: 'Leasing Market', desc: 'Lease structures, rent levels, incentive trends and tenant/landlord dynamics.', href: '/insights/leasing' },
  { slug: 'property-management', icon: 'ShieldCheck', title: 'Property Management', desc: 'Best practices, performance benchmarks, technology adoption and regulatory updates.', href: '/insights/property-management' },
  { slug: 'occupier-strategy', icon: 'Users', title: 'Occupier Strategy', desc: 'Portfolio optimisation, workplace trends and cost management for corporate occupiers.', href: '/insights/occupier-strategy' },
  { slug: 'global-real-estate', icon: 'Globe', title: 'Global Real Estate', desc: 'International market trends and their implications for East African property.', href: '/insights/global-real-estate' },
  { slug: 'cities', icon: 'MapPinIcon', title: 'City Markets', desc: 'Urban property intelligence for Nairobi, Mombasa, Kisumu and emerging cities.', href: '/insights/cities' },
  { slug: 'countries', icon: 'Flag', title: 'Country Markets', desc: 'Property market profiles by country across East Africa.', href: '/insights/countries' },
];

export function InsightsIndexPage() {
  return (
    <>
      <Seo
        title="Market Insights | Murivest Lettings"
        description="Institutional property market insights, research and commentary from our advisory team across Kenya and East Africa."
        path="/insights"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }]}
      />
      <PageHero
        label="Insights"
        title="Market insights"
        subtitle="Institutional property research and market commentary."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }]}
      />

      {/* Research Publications */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Research Publications"
            title="Institutional-grade research across property sectors"
            subtitle="Our advisory team produces regular market reports, sector deep-dives and thematic research — grounded in proprietary data and on-the-ground intelligence."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 mt-12">
            {INSIGHT_CATEGORIES.map((category) => {
              const Icon = (() => {
                switch (category.icon) {
                  case 'Building2': return Building2;
                  case 'Briefcase': return Briefcase;
                  case 'ShoppingBag': return Building2;
                  case 'Factory': return Building2;
                  case 'FileText': return FileBarChart;
                  case 'ShieldCheck': return ShieldCheck;
                  case 'Users': return Users;
                  case 'Globe': return Globe;
                  case 'MapPinIcon': return MapPin;
                  case 'Flag': return MapPin;
                  default: return Building2;
                }
              })();
              return (
                <Link
                  key={category.slug}
                  to={category.href}
                  className="group bg-white p-8 transition-all duration-500 hover:bg-navy-950 hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-gold-400">
                    <Icon className="w-6 h-6 text-navy-700 transition-colors duration-300 group-hover:text-navy-950" />
                  </div>
                  <h3 className="font-serif text-xl text-navy-900 mb-3 transition-colors duration-300 group-hover:text-ivory-50">
                    {category.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed transition-colors duration-300 group-hover:text-ivory-200/70 mb-4">
                    {category.desc}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-medium text-gold-500 transition-colors duration-300 group-hover:text-gold-300">
                    Read Insights
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Market Reports */}
      <section className="section-padding py-20 lg:py-28 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Market Reports"
            title="Flagship publications"
            subtitle="Our major periodic reports providing comprehensive market analysis and forward-looking commentary."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'Kenya Commercial Property Market Report', period: 'Bi-annual', desc: 'Comprehensive analysis of office, retail, industrial and land markets across key Kenyan cities.' },
              { title: 'Nairobi Office Market Outlook', period: 'Quarterly', desc: 'Grade-A and mid-grade office rent trends, vacancy, supply pipeline and occupier sentiment.' },
              { title: 'East Africa Investment Climate', period: 'Annual', desc: 'Cross-border investment flows, regulatory developments and market entry considerations.' },
            ].map((report) => (
              <div key={report.title} className="bg-ivory-50 p-8 border border-stone-200">
                <div className="label-text text-gold-500 mb-2">{report.period}</div>
                <h3 className="font-serif text-lg text-navy-900 mb-3">{report.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{report.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-gold-500">
                  Download Report
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Intelligence */}
      <section className="section-padding py-20 lg:py-28 bg-navy-900 text-ivory-50">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Location Intelligence"
            title="Granular market intelligence for precise decisions"
            subtitle="Neighbourhood-level analysis, catchment profiling and micro-market trends for Kenya's key property markets."
            centered
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: MapPin, title: 'Submarket Profiles', desc: 'Detailed analysis of Nairobi\'s key commercial nodes: Westlands, Upper Hill, Kilimani, CBD, Gigiri.' },
              { icon: TrendingUpIcon, title: 'Trend Monitoring', desc: 'Quarterly tracking of rent, yield, vacancy and absorption at submarket level.' },
              { icon: BookOpen, title: 'Comparative Analysis', desc: 'Side-by-side location comparison for site selection and investment decisions.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-gold-300" />
                </div>
                <h3 className="font-serif text-xl text-ivory-50 mb-3">{item.title}</h3>
                <p className="text-sm text-ivory-200/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Stay informed with our latest research"
        description="Subscribe to receive our market reports, sector updates and advisory commentary directly to your inbox."
        primaryLabel="Subscribe to Insights"
        primaryLink="/contact"
        secondaryLabel="View All Categories"
        secondaryLink="/insights"
      />
    </>
  );
}

export default InsightsIndexPage;