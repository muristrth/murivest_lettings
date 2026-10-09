import { Link } from 'react-router-dom';
import { Factory, Warehouse, MapPin, Truck, TrendingUp, Home } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function MarketsAfricaKenyaiNaivashaPage() {
  return (
    <>
      <Seo
        title="Naivasha Property Market | Murivest Lettings"
        description="Property market analysis for Naivasha, Kenya."
        path="/markets/africa/kenya/naivasha"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Kenya', path: '/markets/africa/kenya' }, { name: 'Naivasha', path: '/markets/africa/kenya/naivasha' }]}
      />
      <PageHero
        label="Markets"
        title="Naivasha"
        subtitle="Naivasha property market intelligence."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Kenya', path: '/markets/africa/kenya' }, { name: 'Naivasha', path: '/markets/africa/kenya/naivasha' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="City Overview" title="Industrial growth pole on the Nairobi–Nakuru corridor" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Naivasha, 90km northwest of Nairobi, has emerged as a significant
                  industrial and logistics hub driven by geothermal energy, the
                  Nairobi–Nakuru–Mau Summit highway dualling, and the Standard Gauge
                  Railway (SGR) Naivasha terminus. The KenGen Olkaria geothermal
                  complex provides reliable, low-cost power — a critical advantage
                  for energy-intensive manufacturing.
                </p>
                <p>
                  The Naivasha Special Economic Zone (SEZ) and adjacent private
                  developments (Migaa, Karagita) are creating a planned industrial
                  ecosystem. Horticulture (cut flowers, vegetables) around Lake Naivasha
                  generates significant cold-chain and packhouse demand. Residential
                  and hospitality serve the growing workforce and weekend tourism from
                  Nairobi. Land values remain a fraction of Nairobi, offering scale
                  for large-footprint users.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Naivasha industrial area"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <SectionHeader label="Industrial Growth" title="Energy, transport and policy alignment" />
              <CheckList items={[
                'Geothermal power: 800MW+ Olkaria — reliable, green, cost-competitive',
                'SGR Naivasha terminus: Inland container depot, rail logistics',
                'Highway dualling: Nairobi–Nakuru–Mau Summit — reduced transit times',
                'Naivasha SEZ: 1,000+ acres, tax incentives, streamlined licensing',
                'Horticulture cluster: 70%+ of Kenya\'s flower exports — cold chain demand',
                'Migaa Industrial Park: KenGen-backed, 500+ acres, Grade A specs',
              ]} />
            </div>
            <div>
              <SectionHeader label="Market Indicators" title="Indicative benchmarks (significantly below Nairobi)" />
              <CheckList items={[
                'Industrial Land (per acre): KES 8M–25M (vs Nairobi KES 80M–200M+)',
                'Grade A Warehouse Rent: KES 40–60/sqft (vs Nairobi KES 55–80)',
                'Standard Warehouse: KES 25–40/sqft',
                'Manufacturing Unit: KES 20–35/sqft',
                'Cold Storage (purpose-built): KES 60–90/sqft',
                'Residential Land (per acre): KES 3M–10M',
                'Staff Housing (2-bed): KES 25,000–45,000/month',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Investment Themes"
            title="Green manufacturing, logistics consolidation, workforce housing"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Factory, title: 'Green Manufacturing', desc: 'Geothermal-powered factories — steel, cement, agro-processing, textiles — targeting carbon-neutral production.' },
              { icon: Warehouse, title: 'Logistics Consolidation', desc: 'Nairobi operators opening Naivasha DCs for upcountry distribution; SGR enables rail-head logistics.' },
              { icon: Home, title: 'Workforce Housing', desc: '10,000+ industrial workers — demand for affordable rental, dormitory and build-to-rent housing.' },
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
        title="Explore Naivasha's industrial frontier"
        description="Land availability, green energy and infrastructure convergence make Naivasha a compelling alternative to Nairobi for large-footprint users."
        primaryLabel="Request Naivasha Report"
        primaryLink="/contact"
        secondaryLabel="View Nairobi Markets"
        secondaryLink="/markets/africa/kenya/nairobi"
      />
    </>
  );
}

export default MarketsAfricaKenyaiNaivashaPage;