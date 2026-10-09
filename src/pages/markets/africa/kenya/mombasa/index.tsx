import { Link } from 'react-router-dom';
import { MapPin, Building2, Factory, Store, Ship, TrendingUp } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function MarketsAfricaKenyaMombasaPage() {
  return (
    <>
      <Seo
        title="Mombasa Property Market | Murivest Lettings"
        description="Commercial property market analysis for Mombasa, Kenya."
        path="/markets/africa/kenya/mombasa"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Kenya', path: '/markets/africa/kenya' }, { name: 'Mombasa', path: '/markets/africa/kenya/mombasa' }]}
      />
      <PageHero
        label="Markets"
        title="Mombasa"
        subtitle="Mombasa property market intelligence."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Kenya', path: '/markets/africa/kenya' }, { name: 'Mombasa', path: '/markets/africa/kenya/mombasa' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="City Overview" title="Kenya's gateway port driving industrial and hospitality demand" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Mombasa is Kenya's second-largest city and the primary gateway for
                  international trade through the Port of Mombasa — the busiest port in
                  East Africa. The city's economy revolves around port operations, logistics,
                  manufacturing (cement, steel, oil refining) and tourism. The Dongo Kundu
                  Special Economic Zone and SGR terminus are catalysing new industrial
                  development on the mainland.
                </p>
                <p>
                  Real estate demand is segmented: port-adjacent warehousing and cold storage
                  for import/export, industrial land in Changamwe and Miritini, hospitality
                  along the north and south coast beaches, and residential serving the
                  port workforce and growing middle class. Infrastructure upgrades — the
                  Mombasa Gate Bridge, dualling of Mombasa–Nairobi highway — enhance connectivity.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Mombasa port and city"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <SectionHeader label="Property Sectors" title="Port-driven industrial, coastal hospitality, urban residential" />
              <CheckList items={[
                'Industrial & warehousing: Changamwe, Miritini, Dongo Kundu SEZ',
                'Cold storage: fish, horticulture, pharmaceuticals — port-proximate',
                'Hospitality: Nyali, Bamburi, Shanzu, Diani — resort & conference',
                'Residential: Nyali, Mombasa Island, mainland suburbs — mixed tenure',
                'Retail: city centre, mall developments (City Mall, Nyali Cinemax)',
                'Office: CBD, Nyali — port services, shipping, logistics firms',
              ]} />
            </div>
            <div>
              <SectionHeader label="Market Indicators" title="Indicative rental benchmarks (monthly)" />
              <CheckList items={[
                'Prime Warehouse (port-adjacent): KES 50–70/sqft',
                'Standard Warehouse: KES 35–55/sqft',
                'Industrial Land (per acre): KES 15M–40M',
                'Grade B Office (CBD): KES 70–110/sqft',
                'Beach Resort Land (per acre): KES 50M–200M+',
                'Residential Apartment (Nyali): KES 60,000–120,000 (2-bed)',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Investment Themes"
            title="Port expansion, SEZ development, tourism recovery"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Ship, title: 'Port & Logistics', desc: 'KPA master plan: berth expansion, SGR integration, Dongo Kundu SEZ — 3,000 acres for manufacturing/logistics.' },
              { icon: Building2, title: 'Hospitality & Residential', desc: 'Tourism recovery post-COVID; diaspora demand for coastal homes; beach resort repositioning.' },
              { icon: Factory, title: 'Manufacturing Relocation', desc: 'Nairobi decongestion pushing light industry to Mombasa; lower land costs, port access.' },
            ].map((theme) => (
              <div key={theme.title}>
                <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                  <theme.icon className="w-6 h-6 text-navy-700" />
                </div>
                <h3 className="font-serif text-lg text-navy-900 mb-2">{theme.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{theme.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Explore Mombasa investment opportunities"
        description="From port-adjacent logistics to beachfront development sites, our Mombasa specialists provide market access and intelligence."
        primaryLabel="Request Mombasa Report"
        primaryLink="/contact"
        secondaryLabel="View Nairobi Markets"
        secondaryLink="/markets/africa/kenya/nairobi"
      />
    </>
  );
}

export default MarketsAfricaKenyaMombasaPage;