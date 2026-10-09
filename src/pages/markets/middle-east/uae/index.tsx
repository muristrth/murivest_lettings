import { Link } from 'react-router-dom';
import { Building2, MapPin, TrendingUp, Home, Factory, Store, Landmark } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function MarketsMiddleEastUaePage() {
  return (
    <>
      <Seo
        title="UAE Property Market | Murivest Lettings"
        description="Property market analysis for the United Arab Emirates."
        path="/markets/middle-east/uae"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Middle East', path: '/markets/middle-east' }, { name: 'UAE', path: '/markets/middle-east/uae' }]}
      />
      <PageHero
        label="Markets"
        title="UAE"
        subtitle="UAE property market intelligence."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Middle East', path: '/markets/middle-east' }, { name: 'UAE', path: '/markets/middle-east/uae' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Market Overview" title="Dubai and Abu Dhabi — distinct markets, shared federal framework" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  The UAE property market operates as two distinct but connected
                  ecosystems. Dubai — the commercial, tourism and logistics hub —
                  offers the region's most liquid, transparent and foreign-investor
                  friendly market with freehold zones covering ~30% of the emirate.
                  Abu Dhabi — the political capital and hydrocarbon wealth centre —
                  is more conservative, government-led, with freehold restricted to
                  designated investment zones (Al Reem, Al Maryah, Saadiyat, Yas).
                </p>
                <p>
                  Both emirates benefit from: federal UAE dirham (pegged to USD),
                  no income/capital gains/property tax (except municipal fees),
                  DIFC/ADGM common law courts and arbitration centres, mature REIT
                  frameworks (Emirates REIT, ENBD REIT, Al Mal Capital REIT), and
                  Expo 2020 / COP28 legacy infrastructure. Key risks: oversupply
                  cycles (Dubai 2014, 2022), oil price correlation (Abu Dhabi),
                  geopolitical concentration, and climate physical risk (heat, sea level).
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Dubai Marina and Downtown"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emirate: 'Dubai', zone: 'DIFC', type: 'Financial Centre', office: 'AED 180–280/sqft', yield: '6.5–7.5%' },
              { emirate: 'Dubai', zone: 'Downtown', type: 'Mixed-Use Prime', office: 'AED 120–180/sqft', yield: '7.0–8.0%' },
              { emirate: 'Dubai', zone: 'Dubai Marina', type: 'Residential/Office', resi: 'AED 150–220/sqft', yield: '5.5–6.5%' },
              { emirate: 'Dubai', zone: 'JVC / DSO', type: 'Mid-Market Residential', resi: 'AED 80–120/sqft', yield: '6.5–7.5%' },
              { emirate: 'Abu Dhabi', zone: 'ADGM / Al Maryah', type: 'Financial Centre', office: 'AED 140–200/sqft', yield: '7.0–8.0%' },
              { emirate: 'Abu Dhabi', zone: 'Al Reem / Saadiyat', type: 'Prime Residential', resi: 'AED 120–180/sqft', yield: '6.0–7.0%' },
              { emirate: 'Dubai', zone: 'DIP / Jafza', type: 'Logistics/Industrial', whse: 'AED 40–60/sqft', yield: '8.0–9.0%' },
              { emirate: 'Abu Dhabi', zone: 'KIZAD / ICAD', type: 'Industrial/Logistics', whse: 'AED 35–50/sqft', yield: '8.5–9.5%' },
            ].map((zone) => (
              <div key={`${zone.emirate}-${zone.zone}`} className="bg-navy-50 p-5 border border-stone-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-1 bg-gold-50 text-gold-700 rounded">{zone.emirate}</span>
                  <span className="text-xs text-stone-500">{zone.zone}</span>
                </div>
                <p className="text-xs text-stone-500 mb-2">{zone.type}</p>
                <div className="space-y-1 text-xs font-serif text-gold-500">
                  {zone.office && <div>Office: {zone.office}</div>}
                  {zone.resi && <div>Resi: {zone.resi}</div>}
                  {zone.whse && <div>Whse: {zone.whse}</div>}
                  <div className="pt-1 border-t border-stone-200">Yield: {zone.yield}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Dubai & Abu Dhabi"
            title="Two emirates, complementary investment cases"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <SectionHeader label="Dubai" title="Global hub, tourism, logistics, freehold depth" />
              <CheckList items={[
                'Freehold Zones: 30%+ of emirate — DIFC, Downtown, Marina, JVC, DSO, Business Bay',
                'Tourism: 17M+ visitors (2023) — hospitality, short-stay, retail demand',
                'Logistics: Jebel Ali Port (Top 10 global), DWC Airport, DIP, Jafza — re-export hub',
                'Expo 2020 Legacy: District 2020, metro extension, sustainability showcase',
                'Population: 3.6M+ (85% expatriate) — rental demand structural, not speculative',
                'Oversupply Cycles: 2014, 2022 — disciplined developers, RERA escrow protection',
              ]} />
            </div>
            <div>
              <SectionHeader label="Abu Dhabi" title="Government-led, sovereign wealth, controlled supply" />
              <CheckList items={[
                'Investment Zones: Al Reem, Al Maryah, Saadiyat, Yas, Reem Hills — freehold for GCC/foreign',
                'Government Demand: Federal entities, sovereign wealth (ADIA, Mubadala, ADQ) — anchor tenants',
                'Supply Control: Municipality approvals, master-planned — limited speculative cycles',
                'Economic Diversification: ADGM (finance), Masdar (clean tech), KIZAD (industrial), Tourism (Louvre, Yas)',
                'Population: 1.5M+ — lower expatriate % than Dubai, more family-oriented demand',
                'Oil Correlation: Fiscal spend drives construction — counter-cyclical vs Dubai',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Access UAE market intelligence"
        description="Freehold zone comparables, DIFC/ADGM regulatory guidance, developer credit analysis and GCC capital flow tracking for UAE property investment."
        primaryLabel="Request UAE Report"
        primaryLink="/contact"
        secondaryLabel="View Middle East Overview"
        secondaryLink="/markets/middle-east"
      />
    </>
  );
}

export default MarketsMiddleEastUaePage;