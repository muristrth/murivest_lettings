import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, FileText, BookOpen, Globe, MapPin as MapPinIcon, TrendingUp as TrendingUpIcon, City, Building, Landmark } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

const CITY_PROFILES = [
  { name: 'Nairobi', slug: 'nairobi', desc: 'Kenya\'s capital and primary commercial hub — Grade-A office, prime retail, industrial corridors and mixed-use development.', sectors: ['Office', 'Retail', 'Industrial', 'Mixed-Use'], metrics: { stock: '5.2M sq ft', vacancy: '12.4%', primeRent: 'KES 1,850/sq ft/mo' } },
  { name: 'Mombasa', slug: 'mombasa', desc: 'Coastal gateway city — port-driven logistics, tourism hospitality and growing commercial centre.', sectors: ['Industrial', 'Hospitality', 'Retail', 'Land'], metrics: { stock: '1.8M sq ft', vacancy: '8.7%', primeRent: 'KES 950/sq ft/mo' } },
  { name: 'Kisumu', slug: 'kisumu', desc: 'Lakeside economic hub — agricultural trade, services and emerging commercial property market.', sectors: ['Retail', 'Office', 'Industrial', 'Land'], metrics: { stock: '0.9M sq ft', vacancy: '15.2%', primeRent: 'KES 650/sq ft/mo' } },
  { name: 'Eldoret', slug: 'eldoret', desc: 'Rift Valley commercial centre — agriculture, education and growing logistics node.', sectors: ['Industrial', 'Retail', 'Land', 'Office'], metrics: { stock: '0.6M sq ft', vacancy: '11.8%', primeRent: 'KES 580/sq ft/mo' } },
];

export function InsightsCitiesPage() {
  return (
    <>
      <Seo
        title="City Market Insights | Murivest Lettings"
        description="Urban property market insights for major cities including Nairobi, across Kenya and East Africa."
        path="/insights/cities"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: 'City Markets', path: '/insights/cities' }]}
      />
      <PageHero
        label="Insights"
        title="City markets"
        subtitle="Urban property intelligence for major African cities."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: 'City Markets', path: '/insights/cities' }]}
      />

      {/* City Market Profiles */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="City Market Profiles"
            title="Commercial property intelligence by city"
            subtitle="Granular analysis of Kenya's key urban markets — stock, vacancy, rents, pipeline and investment activity."
            centered
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {CITY_PROFILES.map((city) => (
              <div key={city.name} className="bg-white border border-stone-200 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-serif text-2xl text-navy-900 mb-2">{city.name}</h3>
                    <p className="text-sm text-stone-500 leading-relaxed">{city.desc}</p>
                  </div>
                  <div className="w-16 h-16 bg-navy-50 flex items-center justify-center">
                    <Building className="w-8 h-8 text-navy-700" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  {city.sectors.map((sector) => (
                    <span key={sector} className="px-3 py-1 text-xs font-medium bg-navy-50 text-navy-700 rounded-full">{sector}</span>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-200">
                  <div>
                    <div className="label-text text-stone-400 mb-1">Total Stock</div>
                    <div className="font-serif text-lg text-navy-900">{city.metrics.stock}</div>
                  </div>
                  <div>
                    <div className="label-text text-stone-400 mb-1">Vacancy Rate</div>
                    <div className="font-serif text-lg text-navy-900">{city.metrics.vacancy}</div>
                  </div>
                  <div>
                    <div className="label-text text-stone-400 mb-1">Prime Rent</div>
                    <div className="font-serif text-lg text-navy-900">{city.metrics.primeRent}</div>
                  </div>
                </div>
                <Link to={`/insights/cities/${city.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold-500 hover:text-gold-600">
                  View City Report
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Districts */}
      <section className="section-padding py-20 lg:py-28 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Key Districts"
            title="Nairobi submarket deep-dives"
            subtitle="Neighbourhood-level analysis of Nairobi's commercial property nodes — each with distinct dynamics, occupier profiles and investment characteristics."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { name: 'Westlands', desc: 'Prime office & retail, high expat density, strong retail & hospitality.', icon: Building2 },
              { name: 'Upper Hill', desc: 'Corporate headquarters cluster, Grade-A office, institutional ownership.', icon: Landmark },
              { name: 'Kilimani', desc: 'Mixed-use intensification, residential-led retail, growing office demand.', icon: City },
              { name: 'CBD', desc: 'Historic core, government & legal precinct, value-add repositioning opportunities.', icon: Building },
            ].map((district) => (
              <div key={district.name} className="bg-ivory-50 p-8 border border-stone-200">
                <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                  <district.icon className="w-6 h-6 text-navy-700" />
                </div>
                <h3 className="font-serif text-lg text-navy-900 mb-3">{district.name}</h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-4">{district.desc}</p>
                <Link href="#" className="inline-flex items-center gap-2 text-xs font-medium text-gold-500">
                  District Report
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="section-padding py-20 lg:py-28 bg-navy-900 text-ivory-50">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Investment Opportunities"
            title="City-level investment themes"
            subtitle="Current investment theses by city — where capital is flowing and why."
            centered
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'Nairobi: Grade-A Office Yield Compression', desc: 'Flight to quality driving prime yields below 8% — limited new supply supports rental growth.' },
              { title: 'Mombasa: Logistics & Cold Storage', desc: 'Port expansion and trade corridor investment creating demand for modern warehousing.' },
              { title: 'Secondary Cities: Retail Modernisation', desc: 'Formal retail formats replacing informal trade — development & acquisition opportunities.' },
            ].map((theme) => (
              <div key={theme.title} className="border-l border-gold-400/30 pl-6">
                <h3 className="font-serif text-lg text-ivory-50 mb-2">{theme.title}</h3>
                <p className="text-sm text-ivory-200/60 leading-relaxed">{theme.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need city-specific market intelligence?"
        description="Our research team provides tailored city and submarket analysis for investment, occupation and development decisions."
        primaryLabel="Request Custom Research"
        primaryLink="/contact"
        secondaryLabel="All Insights"
        secondaryLink="/insights"
      />
    </>
  );
}

export default InsightsCitiesPage;