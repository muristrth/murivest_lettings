import { Link } from 'react-router-dom';
import { Building2, MapPin, TrendingUp, Home, Factory, BarChart3, Crown } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function MarketsEuropeUnitedKingdomPage() {
  return (
    <>
      <Seo
        title="UK Property Market | Murivest Lettings"
        description="Property market analysis for the United Kingdom."
        path="/markets/europe/united-kingdom"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Europe', path: '/markets/europe' }, { name: 'United Kingdom', path: '/markets/europe/united-kingdom' }]}
      />
      <PageHero
        label="Markets"
        title="United Kingdom"
        subtitle="UK property market intelligence."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Europe', path: '/markets/europe' }, { name: 'United Kingdom', path: '/markets/europe/united-kingdom' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Market Overview" title="Europe's largest real estate market — global capital, sectoral depth" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  The UK is Europe's largest and most liquid property investment market,
                  attracting ~40% of European real estate capital. London dominates —
                  a global gateway city with unparalleled occupational demand from
                  financial services, tech, legal, creative and professional services.
                  Regional cities (Manchester, Birmingham, Leeds, Glasgow, Edinburgh)
                  have matured into significant investment markets in their own right,
                  driven by devolution, infrastructure (HS2, Northern Powerhouse) and
                  corporate decentralisation.
                </p>
                <p>
                  The market structure is sophisticated: REIT regime (UK-REIT, 0% tax
                  on property income/gains), deep listed and unlisted fund universe,
                  active derivative and debt markets, and world-leading ESG regulation
                  (MEES, Net Zero Carbon Buildings, TCFD, SFDR alignment). Key sectors:
                  Office (West End, City, Midtown, Southbank — polarised recovery),
                  Logistics (Golden Triangle, M1/M6 corridors — structural undersupply),
                  Residential (BTR, PBSA, affordable — chronic shortage, policy focus),
                  Retail (structural reset — experiential, omnichannel, repurposing),
                  Alternatives (Life sciences, data centres, film studios — high growth).
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="London skyline"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {[
              { market: 'West End', office: '£90–135/sqft', logistics: 'N/A', btr: '£45–65/sqft', yield: '4.25–4.75%' },
              { market: 'City', office: '£55–75/sqft', logistics: 'N/A', btr: '£40–55/sqft', yield: '5.0–5.5%' },
              { market: 'Midtown', office: '£65–85/sqft', logistics: 'N/A', btr: '£40–55/sqft', yield: '4.75–5.25%' },
              { market: 'Golden Triangle', office: 'N/A', logistics: '£18–25/sqft', btr: 'N/A', yield: '4.25–4.75%' },
              { market: 'Manchester', office: '£35–48/sqft', logistics: '£12–16/sqft', btr: '£25–35/sqft', yield: '5.0–5.75%' },
              { market: 'Birmingham', office: '£30–42/sqft', logistics: '£11–14/sqft', btr: '£22–30/sqft', yield: '5.25–6.0%' },
            ].map((mkt) => (
              <div key={mkt.market} className="bg-navy-50 p-5 border border-stone-200 text-center">
                <h3 className="font-serif text-lg text-navy-900 mb-3">{mkt.market}</h3>
                <div className="space-y-1 text-xs">
                  {mkt.office !== 'N/A' && <div className="flex justify-between"><span className="text-stone-500">Office:</span> <span className="font-serif text-gold-500">{mkt.office}</span></div>}
                  {mkt.logistics !== 'N/A' && <div className="flex justify-between"><span className="text-stone-500">Logistics:</span> <span className="font-serif text-gold-500">{mkt.logistics}</span></div>}
                  {mkt.btr !== 'N/A' && <div className="flex justify-between"><span className="text-stone-500">BTR:</span> <span className="font-serif text-gold-500">{mkt.btr}</span></div>}
                  <div className="flex justify-between pt-1 border-t border-stone-200"><span className="text-stone-500">Yield:</span> <span className="font-serif text-gold-500">{mkt.yield}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="London & Regional Markets"
            title "Distinct dynamics across the UK's commercial hubs"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <SectionHeader label="London Office" title="Flight-to-quality, flexible demand, ESG retrofit" />
              <CheckList items={[
                'West End: Tech, media, creative, hedge funds — tightest vacancy (<4%)',
                'City: Financial, legal, professional — structural vacancy (12%+), conversion pipeline',
                'Midtown: Legal, professional, life sciences — strong, limited supply',
                'Southbank: Media, tech, public sector — emerging, Riverside development',
                'Flex/Co-working: 8–10% of take-up — WeWork, Second Home, Fora, Work.Life',
                'ESG: MEES EPC 'B' by 2030 — retrofit capex £30–60/sqft for non-compliant',
              ]} />
            </div>
            <div>
              <SectionHeader label="Logistics & Regional" title "Golden Triangle dominance, regional maturation" />
              <CheckList items={[
                'Golden Triangle (M1/M6/M25): 60% of UK logistics take-up — scarcity driving rents +15% YoY',
                'Urban Logistics: Last-mile, multi-storey — London, Birmingham, Manchester premiums',
                'Manchester: MediaCity, Spinningfields, Airport City — diversified, student-led BTR',
                'Birmingham: HS2 catalyst, Big City Plan, Commonwealth Games legacy — office & logistics',
                'Scotland (Edinburgh/Glasgow): Financial services, life sciences, public sector — stable',
                'BTR/PBSA: £50B+ pipeline — Grainger, GetLiving, Greystar, Unite, IQ Student',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Access UK market intelligence"
        description="Submarket-level vacancy, rental comparables, investment volumes, ESG compliance tracking and cross-border tax structuring for UK property."
        primaryLabel="Request UK Report"
        primaryLink="/contact"
        secondaryLabel="View Germany Market"
        secondaryLink="/markets/europe/germany"
      />
    </>
  );
}

export default MarketsEuropeUnitedKingdomPage;