import { Link } from 'react-router-dom';
import { Building2, MapPin, TrendingUp, Factory, Home, Store } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function MarketsAfricaRwandaKigaliPage() {
  return (
    <>
      <Seo
        title="Kigali Property Market | Murivest Lettings"
        description="Property market analysis for Kigali, Rwanda."
        path="/markets/africa/rwanda/kigali"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Rwanda', path: '/markets/africa/rwanda' }, { name: 'Kigali', path: '/markets/africa/rwanda/kigali' }]}
      />
      <PageHero
        label="Markets"
        title="Kigali"
        subtitle="Kigali property market intelligence."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Rwanda', path: '/markets/africa/rwanda' }, { name: 'Kigali', path: '/markets/africa/rwanda/kigali' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="City Overview" title="Clean, planned, and rapidly densifying capital" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Kigali is Rwanda's political, economic and cultural centre — home to
                  1.5M+ people and growing at ~4% annually. The city's master plan
                  divides it into distinct zones: Central Business District (Nyarugenge),
                  commercial corridors (KN 3 Rd, KG 7 Ave), residential hills
                  (Kiyovu, Kacyiru, Kimihurura, Remera) and planned satellite towns
                  (Masoro, Bumbogo, Ndera). The "clean city" policy — plastic ban,
                  monthly community work (Umuganda), strict zoning — creates a uniquely
                  orderly urban environment.
                </p>
                <p>
                  Commercial real estate clusters along KN 3 Rd (office), KG 7 Ave
                  (retail/hospitality) and the CBD. The Kigali Special Economic Zone
                  (Gasabo) and Bugesera Industrial Park (planned) anchor manufacturing
                  and logistics. Residential demand spans: expatriate/diplomatic
                  (Kiyovu, Kacyiru — USD 1,500–3,000/month), emerging middle class
                  (Remera, Kanombe — USD 400–800), and affordable housing (Vision City,
                  Batsinda — USD 150–300 mortgage/rent).
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Kigali city view"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Nyarugenge (CBD)', type: 'Government, Finance, Grade B Office', rent: 'USD 12–18/sqm' },
              { name: 'KN 3 Rd Corridor', type: 'Grade A Office, Diplomatic, NGO', rent: 'USD 18–25/sqm' },
              { name: 'KG 7 Ave / Kimihurura', type: 'Retail, Hospitality, Mixed-Use', rent: 'USD 25–35/sqm' },
              { name: 'Kacyiru / Kiyovu', type: 'Prime Residential, Expatriate', rent: 'USD 1,500–3,000 (2-bed)' },
              { name: 'Remera / Kanombe', type: 'Middle-Income Residential, Retail', rent: 'USD 400–800 (2-bed)' },
              { name: 'Gasabo / Kigali SEZ', type: 'Industrial, Logistics, Manufacturing', rent: 'USD 6–9/sqm (whse)' },
            ].map((zone) => (
              <div key={zone.name} className="bg-navy-50 p-6 border border-stone-200">
                <h3 className="font-serif text-lg text-navy-900 mb-1">{zone.name}</h3>
                <p className="text-xs text-stone-500 mb-2">{zone.type}</p>
                <div className="font-serif text-gold-500">{zone.rent}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Market Dynamics"
            title="Supply, demand and regulatory evolution"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <SectionHeader label="Supply Pipeline" title="Planned and under-construction stock" />
              <CheckList items={[
                'Office: ~50,000sqm Grade A UC (Kigali Heights phases, KCB Tower)',
                'Retail: ~30,000sqm mall GLA UC (Kigali City Tower expansion)',
                'Residential: Vision City (4,500 units), affordable housing (10,000+ units)',
                'Industrial: Kigali SEZ Phase 2, Bugesera Industrial Park (planned)',
                'Hospitality: Limited new supply post-Marriott/Radisson saturation',
              ]} />
            </div>
            <div>
              <SectionHeader label="Regulatory & Market Themes" title="Evolving framework for professionalisation" />
              <CheckList items={[
                'New Rental Law (2022): Rent control, lease registration, dispute resolution',
                'Rwanda Housing Authority: Mortgage liquidity facility, developer guarantees',
                'Green Building: Rwanda Green Building Code (voluntary, incentivised)',
                'Digitisation: Land titles on blockchain, e-tax, e-procurement',
                'Diaspora Demand: Remittance-funded housing, retirement homes pipeline',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Access Kigali market intelligence"
        description="District-level analysis, lease comparables, development pipeline and regulatory updates for Rwanda's primary property market."
        primaryLabel="Request Kigali Report"
        primaryLink="/contact"
        secondaryLabel="View Rwanda Overview"
        secondaryLink="/markets/africa/rwanda"
      />
    </>
  );
}

export default MarketsAfricaRwandaKigaliPage;