import { Link } from 'react-router-dom';
import { Building2, MapPin, TrendingUp, Briefcase, Store, Factory } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function MarketsAfricaKenyaNairobiPage() {
  return (
    <>
      <Seo
        title="Nairobi Property Market | Murivest Lettings"
        description="Commercial property market analysis for Nairobi, Kenya."
        path="/markets/africa/kenya/nairobi"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Kenya', path: '/markets/africa/kenya' }, { name: 'Nairobi', path: '/markets/africa/kenya/nairobi' }]}
      />
      <PageHero
        label="Markets"
        title="Nairobi"
        subtitle="Nairobi property market intelligence."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Kenya', path: '/markets/africa/kenya' }, { name: 'Nairobi', path: '/markets/africa/kenya/nairobi' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Capital Overview" title="East Africa's premier commercial real estate market" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Nairobi is the undisputed commercial real estate hub of East Africa,
                  hosting the region's largest concentration of Grade A office stock,
                  international retail brands, institutional-grade industrial parks and
                  a diverse residential spectrum from luxury to affordable. The city's
                  role as UN headquarters, diplomatic centre and multinational regional
                  base underpins sustained occupational demand across sectors.
                </p>
                <p>
                  The market is characterised by distinct sub-markets — Upper Hill (financial/
                  diplomatic), Westlands (tech/creative/mixed-use), Kilimani (high-density
                  residential), Mombasa Road (logistics), Industrial Area (manufacturing) —
                  each with unique rental dynamics, vacancy profiles and development pipelines.
                  Infrastructure investment (Expressway, BRT, SGR) is reshaping connectivity
                  and value geography.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Nairobi cityscape"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              { path: '/markets/africa/kenya/nairobi/commercial-property', name: 'Commercial Property', icon: Building2, desc: 'Cross-sector overview' },
              { path: '/markets/africa/kenya/nairobi/offices', name: 'Offices', icon: Briefcase, desc: 'Grade A/B, flex, co-working' },
              { path: '/markets/africa/kenya/nairobi/retail', name: 'Retail', icon: Store, desc: 'Malls, high street, neighbourhood' },
              { path: '/markets/africa/kenya/nairobi/industrial', name: 'Industrial', icon: Factory, desc: 'Manufacturing, logistics zones' },
              { path: '/markets/africa/kenya/nairobi/warehouses', name: 'Warehouses', icon: MapPin, desc: 'Grade A logistics parks' },
            ].map((sector) => (
              <Link key={sector.name} to={sector.path} className="card-institutional group p-6">
                <div className="w-10 h-10 bg-navy-50 flex items-center justify-center mb-4 transition-colors group-hover:bg-gold-400">
                  <sector.icon className="w-5 h-5 text-navy-700 transition-colors group-hover:text-navy-950" />
                </div>
                <h3 className="font-serif text-lg text-navy-900 mb-1 group-hover:text-navy-700">{sector.name}</h3>
                <p className="text-xs text-stone-500">{sector.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Districts"
            title="Nairobi's distinct property sub-markets"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { name: 'Upper Hill', prime: 'Office', rent: 'KES 1,800–2,500/sqft', vacancy: '< 5%' },
              { name: 'Westlands', prime: 'Mixed-Use', rent: 'KES 1,500–2,200/sqft', vacancy: '5–8%' },
              { name: 'Kilimani', prime: 'Residential', rent: 'KES 1,000–1,600/sqft', vacancy: '8–12%' },
              { name: 'CBD', prime: 'Value Office', rent: 'KES 80–130/sqft', vacancy: '10–15%' },
              { name: 'Riverside', prime: 'Premium', rent: 'KES 1,600–2,300/sqft', vacancy: '< 5%' },
              { name: 'Mombasa Rd', prime: 'Logistics', rent: 'KES 45–75/sqft (whse)', vacancy: '5–10%' },
              { name: 'Industrial Area', prime: 'Manufacturing', rent: 'KES 35–65/sqft (whse)', vacancy: '8–12%' },
              { name: 'Lavington', prime: 'Boutique Office', rent: 'KES 140–220/sqft', vacancy: '5–10%' },
            ].map((dist) => (
              <Link key={dist.name} to="/markets/africa/kenya/nairobi/commercial-property" className="card-institutional group p-6">
                <h3 className="font-serif text-lg text-navy-900 mb-1 group-hover:text-navy-700">{dist.name}</h3>
                <p className="text-xs text-stone-500 mb-2">{dist.prime}</p>
                <div className="flex justify-between text-xs">
                  <span className="font-serif text-gold-500">{dist.rent}</span>
                  <span className="text-stone-500">Vacancy: {dist.vacancy}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Access Nairobi market intelligence"
        description="Sector-specific reports, district analysis and transaction comparables for Kenya's primary commercial property market."
        primaryLabel="Request Nairobi Report"
        primaryLink="/contact"
        secondaryLabel="View Office Market"
        secondaryLink="/markets/africa/kenya/nairobi/offices"
      />
    </>
  );
}

export default MarketsAfricaKenyaNairobiPage;