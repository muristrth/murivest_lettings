import { Link } from 'react-router-dom';
import { Building2, MapPin, TrendingUp, Home, Factory, BarChart3 } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function MarketsEuropeGermanyPage() {
  return (
    <>
      <Seo
        title="Germany Property Market | Murivest Lettings"
        description="Property market analysis for Germany."
        path="/markets/europe/germany"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Europe', path: '/markets/europe' }, { name: 'Germany', path: '/markets/europe/germany' }]}
      />
      <PageHero
        label="Markets"
        title="Germany"
        subtitle="German property market intelligence."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Europe', path: '/markets/europe' }, { name: 'Germany', path: '/markets/europe/germany' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Market Overview" title="Europe's largest economy — stable, regulated, yield-driven" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Germany's property market is defined by stability: a federal structure
                  with strong regional economies (Berlin, Munich, Frankfurt, Hamburg,
                  Stuttgart, Cologne, Düsseldorf), deep institutional ownership
                  (open-ended funds, insurance, pension funds), and a cultural
                  preference for long-term hold and yield over speculation. The
                  residential market is uniquely regulated — Mietpreisbremse (rent
                  brake), Kappungsgrenze (cap on increases) — creating a distinct
                  investment calculus.
                </p>
                <p>
                  Key sectors: Office (Top 7 cities — Munich and Frankfurt lead on
                  rents, Berlin on volume), Logistics (A-locations: Rhine-Ruhr,
                  Rhine-Main, Berlin, Hamburg — e-commerce and manufacturing driven),
                  Residential (chronic shortage, regulatory constraint, BTR emerging),
                  Retail (structural challenges, high-street polarisation), and
                  Alternatives (data centres, life sciences, student housing — growing).
                  ESG regulation (EU Taxonomy, CSRD, Buildings Directive) is reshaping
                  capex and valuation.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Frankfurt skyline"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {[
              { city: 'Munich', office: '€42–55/sqm', logistics: '€8.5–10', residential: '€18–24', yield: '2.75–3.25%' },
              { city: 'Frankfurt', office: '€38–50/sqm', logistics: '€8–9.5', residential: '€16–22', yield: '3.0–3.5%' },
              { city: 'Berlin', office: '€32–45/sqm', logistics: '€7.5–9', residential: '€14–20', yield: '2.75–3.25%' },
              { city: 'Hamburg', office: '€28–40/sqm', logistics: '€7.5–9', residential: '€13–18', yield: '3.0–3.5%' },
              { city: 'Cologne', office: '€22–32/sqm', logistics: '€7–8.5', residential: '€12–16', yield: '3.25–3.75%' },
              { city: 'Düsseldorf', office: '€25–35/sqm', logistics: '€7–8.5', residential: '€13–17', yield: '3.25–3.75%' },
              { city: 'Stuttgart', office: '€24–34/sqm', logistics: '€7.5–9', residential: '€13–18', yield: '3.25–3.75%' },
            ].map((city) => (
              <div key={city.city} className="bg-navy-50 p-5 border border-stone-200 text-center">
                <h3 className="font-serif text-lg text-navy-900 mb-3">{city.city}</h3>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between"><span className="text-stone-500">Office:</span> <span className="font-serif text-gold-500">{city.office}</span></div>
                  <div className="flex justify-between"><span className="text-stone-500">Logistics:</span> <span className="font-serif text-gold-500">{city.logistics}</span></div>
                  <div className="flex justify-between"><span className="text-stone-500">Resi:</span> <span className="font-serif text-gold-500">{city.residential}</span></div>
                  <div className="flex justify-between pt-1 border-t border-stone-200"><span className="text-stone-500">Yield:</span> <span className="font-serif text-gold-500">{city.yield}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Investment Considerations"
            title="Regulation, structure, and market nuance"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <h4 className="font-serif text-lg text-navy-900 mb-4">Residential Regulation</h4>
              <CheckList items={[
                'Mietpreisbremse: Rent capped at +10% above local comparable',
                'Kappungsgrenze: Max 15% increase over 3 years (20% in tight markets)',
                'Bestellerprinzip: Landlord pays agent fee (since 2015)',
                'Mietspiegel: Official rent indices — legal reference for disputes',
                'Energetic Sanierung: Mandatory energy upgrades — cost pass-through limited',
              ]} />
            </div>
            <div>
              <h4 className="font-serif text-lg text-navy-900 mb-4">Tax & Structure</h4>
              <CheckList items={[
                'REITs: G-REIT regime — 0% corp tax, 90% distribution, listing required',
                'Open-ended Funds: Dominant owners — daily liquidity, valuation rules',
                'Trade Tax (Gewerbesteuer): 14–17% municipal — significant on gains',
                'Transfer Tax (Grunderwerbsteuer): 3.5–6.5% by state — asset vs share deal',
                'Depreciation: 2–3% p.a. straight line — limited bonus depreciation',
              ]} />
            </div>
            <div>
              <h4 className="font-serif text-lg text-navy-900 mb-4">Market Themes</h4>
              <CheckList items={[
                'ESG Retrofit: €200B+ needed for building stock decarbonisation',
                'Office Polarisation: Prime let, secondary stranded — conversion risk',
                'Logistics Scarcity: Land shortage in A-locations — brownfield, multi-storey',
                'BTR Emerging: Vonovia, Deutsche Wohnen, Patrizia scaling build-to-rent',
                'Demographics: Ageing population — senior housing, healthcare real estate',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Access German market intelligence"
        description="City-level rental indices, regulatory updates, transaction comparables and structuring guidance for Europe's largest property market."
        primaryLabel="Request Germany Report"
        primaryLink="/contact"
        secondaryLabel="View UK Market"
        secondaryLink="/markets/europe/united-kingdom"
      />
    </>
  );
}

export default MarketsEuropeGermanyPage;