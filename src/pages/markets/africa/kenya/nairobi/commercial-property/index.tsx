import { Link } from 'react-router-dom';
import { Building2, TrendingUp, BarChart3, MapPin, ShieldCheck, Target } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function MarketsAfricaKenyaiNairobiCommercialPropertyPage() {
  return (
    <>
      <Seo
        title="Nairobi Commercial Property Market | Murivest Lettings"
        description="Commercial property market analysis for Nairobi, Kenya."
        path="/markets/africa/kenya/nairobi/commercial-property"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Kenya', path: '/markets/africa/kenya' }, { name: 'Nairobi', path: '/markets/africa/kenya/nairobi' }, { name: 'Commercial Property', path: '/markets/africa/kenya/nairobi/commercial-property' }]}
      />
      <PageHero
        label="Markets"
        title="Nairobi commercial property"
        subtitle="Commercial market intelligence for Nairobi."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Kenya', path: '/markets/africa/kenya' }, { name: 'Nairobi', path: '/markets/africa/kenya/nairobi' }, { name: 'Commercial Property', path: '/markets/africa/kenya/nairobi/commercial-property' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Market Overview" title="Cross-sector analysis of Nairobi's commercial property landscape" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Nairobi's commercial property market operates across multiple cycles
                  simultaneously. The office sector is bifurcated: Grade A in Upper Hill
                  and Westlands remains tight with rental growth, while Grade B/C in the
                  CBD and older nodes faces structural vacancy. Retail is polarised between
                  dominant super-regional malls and struggling secondary centres. Industrial
                  and logistics benefit from infrastructure-driven demand but face rising
                  land costs.
                </p>
                <p>
                  Key 2024 themes include: flight-to-quality in office as occupiers prioritise
                  ESG credentials and amenities; retail repositioning towards experience and
                  omnichannel; logistics consolidation into Grade A parks along Mombasa Road
                  and Thika Road; and residential build-to-rent emerging as an institutional
                  asset class. The Nairobi Expressway and BRT are recalibrating locational
                  value across the metropolitan area.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Nairobi commercial district"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <SectionHeader label="Rent Trends" title="Prime rental trajectory (2022–2024)" />
              <CheckList items={[
                'Grade A Office: +8% YoY (Upper Hill), +5% (Westlands)',
                'Grade B Office: Flat to -3% (CBD, older stock)',
                'Prime Retail (Mall): +3% YoY, occupancy > 95%',
                'Secondary Retail: -5% to -10%, high vacancy',
                'Grade A Warehouse: +12% YoY, pre-lets dominant',
                'Standard Warehouse: +5% YoY, spec build risk rising',
              ]} />
            </div>
            <div>
              <SectionHeader label="Investment Metrics" title="Prime yield benchmarks (indicative)" />
              <CheckList items={[
                'Grade A Office (Upper Hill): 7.5–8.5%',
                'Grade A Office (Westlands): 8.0–9.0%',
                'Prime Mall (Super-regional): 8.5–9.5%',
                'Neighbourhood Centre: 9.5–11.0%',
                'Grade A Warehouse (Mombasa Rd): 8.5–9.5%',
                'Standard Warehouse: 9.5–11.0%',
                'Build-to-Rent Residential: 6.5–7.5% (gross)',
              ]} />
            </div>
            <div>
              <SectionHeader label="Development Pipeline" title="Supply outlook 2024–2026" />
              <CheckList items={[
                'Office: ~450,000sqm Grade A UC (60% pre-let)',
                'Retail: ~120,000sqm mall space UC',
                'Industrial: ~300,000sqm Grade A warehouse UC',
                'BtR: ~3,000 units across 5+ schemes',
                'Mixed-use: ~200,000sqm across key nodes',
                'Risk: Spec office delivery 2025–26 may soften rents',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Sector Deep Dives"
            title="Detailed analysis by property type"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {[
              { path: '/markets/africa/kenya/nairobi/offices', name: 'Offices', icon: Building2 },
              { path: '/markets/africa/kenya/nairobi/retail', name: 'Retail', icon: Store },
              { path: '/markets/africa/kenya/nairobi/industrial', name: 'Industrial', icon: Factory },
              { path: '/markets/africa/kenya/nairobi/warehouses', name: 'Warehouses', icon: MapPin },
              { path: '/markets/africa/kenya/nairobi/commercial-property', name: 'All Sectors', icon: BarChart3 },
            ].map((sector) => (
              <Link key={sector.name} to={sector.path} className="card-institutional group p-6 text-center">
                <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mx-auto mb-4 transition-colors group-hover:bg-gold-400">
                  <sector.icon className="w-6 h-6 text-navy-700 transition-colors group-hover:text-navy-950" />
                </div>
                <h3 className="font-serif text-lg text-navy-900 group-hover:text-navy-700">{sector.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Commission bespoke Nairobi analysis"
        description="From portfolio valuation to market entry strategy, our commercial property specialists deliver actionable intelligence."
        primaryLabel="Request Custom Report"
        primaryLink="/contact"
        secondaryLabel="View Office Sector"
        secondaryLink="/markets/africa/kenya/nairobi/offices"
      />
    </>
  );
}

export default MarketsAfricaKenyaiNairobiCommercialPropertyPage;