import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, FileText, BookOpen, Globe, MapPin as MapPinIcon, TrendingUp as TrendingUpIcon, Flag, Map, Landmark } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

const COUNTRY_PROFILES = [
  { name: 'Kenya', slug: 'kenya', desc: 'East Africa\'s largest economy — mature commercial property market with institutional depth.', metrics: { gdp: '$113B', urbanisation: '28%', primeYield: '7.5-8.5%' } },
  { name: 'Tanzania', slug: 'tanzania', desc: 'Growing commercial hub — Dar es Salaam driving office, retail and industrial demand.', metrics: { gdp: '$75B', urbanisation: '35%', primeYield: '9-10%' } },
  { name: 'Uganda', slug: 'uganda', desc: 'Kampala-centric market — oil sector driving infrastructure and commercial development.', metrics: { gdp: '$45B', urbanisation: '26%', primeYield: '9-11%' } },
  { name: 'Rwanda', slug: 'rwanda', desc: 'Kigali as regional hub — planned urbanisation, green building focus, institutionalising market.', metrics: { gdp: '$13B', urbanisation: '18%', primeYield: '8-9%' } },
  { name: 'Ethiopia', slug: 'ethiopia', desc: 'Addis Ababa — Africa\'s diplomatic capital, massive infrastructure investment, early-stage commercial market.', metrics: { gdp: '$120B', urbanisation: '22%', primeYield: '10-12%' } },
];

export function InsightsCountriesPage() {
  return (
    <>
      <Seo
        title="Country Market Insights | Murivest Lettings"
        description="Property market insights by country across Kenya and East Africa."
        path="/insights/countries"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: 'Country Markets', path: '/insights/countries' }]}
      />
      <PageHero
        label="Insights"
        title="Country markets"
        subtitle="Property market intelligence by country across East Africa."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: 'Country Markets', path: '/insights/countries' }]}
      />

      {/* Country Profiles */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Country Profiles"
            title="East African property markets compared"
            subtitle="Macro-fundamental analysis, regulatory environment, investment climate and sector opportunities by country."
            centered
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {COUNTRY_PROFILES.map((country) => (
              <div key={country.name} className="bg-white border border-stone-200 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-serif text-2xl text-navy-900 mb-2">{country.name}</h3>
                    <p className="text-sm text-stone-500 leading-relaxed">{country.desc}</p>
                  </div>
                  <div className="w-16 h-16 bg-navy-50 flex items-center justify-center">
                    <Landmark className="w-8 h-8 text-navy-700" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="label-text text-stone-400 mb-1">GDP</div>
                    <div className="font-serif text-lg text-navy-900">{country.metrics.gdp}</div>
                  </div>
                  <div>
                    <div className="label-text text-stone-400 mb-1">Urbanisation</div>
                    <div className="font-serif text-lg text-navy-900">{country.metrics.urbanisation}</div>
                  </div>
                  <div>
                    <div className="label-text text-stone-400 mb-1">Prime Yield</div>
                    <div className="font-serif text-lg text-navy-900">{country.metrics.primeYield}</div>
                  </div>
                </div>
                <Link to={`/insights/countries/${country.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-gold-500 hover:text-gold-600">
                  View Country Report
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Entry Considerations */}
      <section className="section-padding py-20 lg:py-28 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Market Entry"
            title="Cross-border investment considerations"
            subtitle="Key factors for investors and occupiers evaluating multi-country East African property strategies."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { icon: FileText, title: 'Legal & Regulatory', desc: 'Foreign ownership restrictions, land tenure systems, registration processes and compliance requirements.' },
              { icon: Scale, title: 'Tax & Repatriation', desc: 'Corporate tax rates, withholding taxes, double taxation treaties and profit repatriation frameworks.' },
              { icon: ShieldCheck, title: 'Risk & Governance', desc: 'Political stability, currency risk, legal enforcement, ESG standards and institutional quality.' },
              { icon: Users, title: 'Local Partnership', desc: 'Joint venture structures, local partner selection, governance alignment and exit mechanisms.' },
            ].map((item) => (
              <div key={item.title} className="bg-ivory-50 p-8 border border-stone-200">
                <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-navy-700" />
                </div>
                <h3 className="font-serif text-lg text-navy-900 mb-3">{item.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Themes */}
      <section className="section-padding py-20 lg:py-28 bg-navy-900 text-ivory-50">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Regional Themes"
            title="East Africa investment themes"
            subtitle="Structural trends shaping property markets across the region."
            centered
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'AfCFTA & Trade Corridors', desc: 'African Continental Free Trade Area driving logistics, warehousing and border town development.' },
              { title: 'Urbanisation & Housing Deficit', desc: 'Rapid urban growth creating demand for affordable housing, build-to-rent and mixed-use.' },
              { title: 'Green Building & ESG', desc: 'IFC EDGE certification, green bonds and sustainability mandates reshaping development pipeline.' },
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
        title="Evaluating cross-border property opportunities?"
        description="Our international advisory team provides country-specific market intelligence, regulatory guidance and local partner access across East Africa."
        primaryLabel="Discuss Your Strategy"
        primaryLink="/contact"
        secondaryLabel="International Services"
        secondaryLink="/international"
      />
    </>
  );
}

export default InsightsCountriesPage;