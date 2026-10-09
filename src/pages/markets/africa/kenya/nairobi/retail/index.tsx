import { Link } from 'react-router-dom';
import { Store, ShoppingBag, Users, MapPin, TrendingUp, BarChart3 } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function MarketsAfricaKenyaiNairobiRetailPage() {
  return (
    <>
      <Seo
        title="Nairobi Retail Market | Murivest Lettings"
        description="Retail property market analysis for Nairobi, Kenya."
        path="/markets/africa/kenya/nairobi/retail"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Kenya', path: '/markets/africa/kenya' }, { name: 'Nairobi', path: '/markets/africa/kenya/nairobi' }, { name: 'Retail', path: '/markets/africa/kenya/nairobi/retail' }]}
      />
      <PageHero
        label="Markets"
        title="Nairobi retail market"
        subtitle="Retail market intelligence for Nairobi."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Kenya', path: '/markets/africa/kenya' }, { name: 'Nairobi', path: '/markets/africa/kenya/nairobi' }, { name: 'Retail', path: '/markets/africa/kenya/nairobi/retail' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Market Overview" title="Polarised market: super-malls dominate, secondary centres struggle" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Nairobi's retail market is sharply bifurcated. Super-regional malls
                  (Two Rivers, Garden City, The Hub, TRM, Westgate, Sarit, Junction)
                  — collectively ~500,000sqm GLA — trade at >95% occupancy with rental
                  growth. They benefit from scale, international anchors (Carrefour,
                  Game, Woolworths, Zara, LC Waikiki), entertainment, dining and
                  managed environments. Neighbourhood and community centres face
                  15–30% vacancy as e-commerce, changing consumer habits and
                  oversupply in specific catchments erode viability.
                </p>
                <p>
                  High-street retail in Westlands (Woodvale, Mpaka), Kilimani, Lavington
                  and Riverside serves distinct demographics: expatriate, professional,
                  diplomatic and affluent local. These strips command premium rents for
                  F&B, lifestyle, wellness and convenience. The CBD retail remains
                  challenged by traffic, security perception and competition from malls,
                  though the Expressway and BRT may improve accessibility.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Nairobi shopping mall"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Two Rivers Mall', type: 'Super-Regional', gla: '65,000sqm', rent: 'KES 350–550/sqft', occupancy: '> 97%' },
              { name: 'Garden City Mall', type: 'Super-Regional', gla: '45,000sqm', rent: 'KES 300–500/sqft', occupancy: '> 95%' },
              { name: 'The Hub (Karen)', type: 'Regional', gla: '35,000sqm', rent: 'KES 250–400/sqft', occupancy: '> 95%' },
              { name: 'Westgate / Sarit / TRM', type: 'Regional', gla: '30–40,000sqm', rent: 'KES 280–450/sqft', occupancy: '> 95%' },
              { name: 'Junction / Thika Rd Mall', type: 'Community', gla: '20–25,000sqm', rent: 'KES 180–300/sqft', occupancy: '85–92%' },
              { name: 'Neighbourhood Centres', type: 'Neighbourhood', gla: '5–15,000sqm', rent: 'KES 120–220/sqft', occupancy: '70–85%' },
            ].map((mall) => (
              <div key={mall.name} className="bg-navy-50 p-6 border border-stone-200">
                <h3 className="font-serif text-lg text-navy-900 mb-1">{mall.name}</h3>
                <p className="text-xs text-stone-500 mb-3">{mall.type} • {mall.gla}</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between"><span className="text-stone-500">Rent:</span> <span className="font-serif text-gold-500">{mall.rent}</span></div>
                  <div className="flex justify-between"><span className="text-stone-500">Occupancy:</span> <span>{mall.occupancy}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Key Centres & Trends"
            title="Retail hierarchy and emerging formats"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <SectionHeader label="High-Street & Emerging" title="Street-level retail dynamics" />
              <CheckList items={[
                'Westlands (Woodvale/Mpaka): KES 200–350/sqft — F&B, lifestyle, nightlife',
                'Kilimani (Ring Rd/Kirichwa): KES 180–300/sqft — density-driven, convenience',
                'Lavington (James Gichuru): KES 180–280/sqft — affluent, boutique, wellness',
                'Riverside (Riverside Dr feeders): KES 180–280/sqft — diplomatic, expatriate',
                'Ngong Road / Karen: KES 150–250/sqft — family, automotive, bulky goods',
                'Pop-up & flexible: growing demand for short-term activation space',
              ]} />
            </div>
            <div>
              <SectionHeader label="Market Themes" title="Structural shifts reshaping Nairobi retail" />
              <CheckList items={[
                'Omnichannel integration: click-and-collect, dark stores in malls',
                'Experience-led: entertainment, dining, wellness > pure retail',
                'International brands entering: Zara, H&M, Decathlon, Sephora pipeline',
                'Local formalisation: Kenyan brands scaling into mall formats',
                'E-commerce logistics: last-mile hubs in/near malls (Jumia, Copia)',
                'Informal competition: mitumba, hawkers — policy enforcement variable',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Access Nairobi retail intelligence"
        description="Mall-level tenant mix, rental comparables, footfall data and development pipeline for retail investors and retailers."
        primaryLabel="Request Retail Report"
        primaryLink="/contact"
        secondaryLabel="View Warehouse Market"
        secondaryLink="/markets/africa/kenya/nairobi/warehouses"
      />
    </>
  );
}

export default MarketsAfricaKenyaiNairobiRetailPage;