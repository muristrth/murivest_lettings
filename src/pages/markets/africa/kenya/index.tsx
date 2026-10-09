import { Link } from 'react-router-dom';
import { Building2, MapPin, TrendingUp, Factory, Home, BarChart3 } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function MarketsAfricaKenyaPage() {
  return (
    <>
      <Seo
        title="Kenya Property Market | Murivest Lettings"
        description="Commercial property market analysis for Kenya including Nairobi, Mombasa, Naivasha and other key locations."
        path="/markets/africa/kenya"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Kenya', path: '/markets/africa/kenya' }]}
      />
      <PageHero
        label="Markets"
        title="Kenya"
        subtitle="Kenya property market intelligence."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Kenya', path: '/markets/africa/kenya' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="National Overview" title="East Africa's economic hub with a maturing real estate sector" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Kenya is East Africa's largest economy and a regional hub for finance,
                  logistics, technology and diplomatic activity. Nairobi hosts the UN
                  headquarters for Africa, major multinational regional offices and a
                  vibrant startup ecosystem. The real estate sector has matured significantly
                  with REITs, institutional funds and international developers active across
                  office, retail, industrial and residential sectors.
                </p>
                <p>
                  Key drivers include: devolution creating 47 county-level demand centres,
                  infrastructure megaprojects (SGR, Expressway, BRT, LAPSSET corridor),
                  a growing middle class, and improving regulatory frameworks including
                  the Sectional Properties Act and Real Estate Regulation Bill. Challenges
                  remain in infrastructure gaps, currency volatility and planning enforcement.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Nairobi skyline"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { path: '/markets/africa/kenya/nairobi', name: 'Nairobi', icon: Building2, desc: 'Capital & commercial hub', sectors: 'Office, Retail, Industrial, Residential' },
              { path: '/markets/africa/kenya/mombasa', name: 'Mombasa', icon: MapPin, desc: 'Port city & tourism', sectors: 'Industrial, Retail, Hospitality, Residential' },
              { path: '/markets/africa/kenya/naivasha', name: 'Naivasha', icon: Factory, desc: 'Industrial & logistics growth', sectors: 'Industrial, Warehousing, Agri-processing' },
              { path: '/markets/africa/kenya/other-locations', name: 'Other Locations', icon: TrendingUp, desc: 'County capitals & corridors', sectors: 'Mixed-use, Retail, Residential' },
            ].map((loc) => (
              <Link key={loc.name} to={loc.path} className="card-institutional group p-6">
                <div className="w-10 h-10 bg-navy-50 flex items-center justify-center mb-4 transition-colors group-hover:bg-gold-400">
                  <loc.icon className="w-5 h-5 text-navy-700 transition-colors group-hover:text-navy-950" />
                </div>
                <h3 className="font-serif text-lg text-navy-900 mb-1 group-hover:text-navy-700">{loc.name}</h3>
                <p className="text-xs text-stone-500 mb-2">{loc.desc}</p>
                <p className="text-xs text-gold-500 font-medium">{loc.sectors}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Key Locations"
            title="Nairobi sub-markets and regional centres"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { name: 'Upper Hill', type: 'Prime Office', rent: 'KES 1,800–2,500/sqft' },
              { name: 'Westlands', type: 'Mixed-Use', rent: 'KES 1,500–2,200/sqft' },
              { name: 'Kilimani', type: 'High-Density Residential', rent: 'KES 1,000–1,600/sqft' },
              { name: 'Mombasa Road', type: 'Logistics Corridor', rent: 'KES 45–75/sqft (whse)' },
              { name: 'Industrial Area', type: 'Manufacturing Hub', rent: 'KES 35–65/sqft (whse)' },
              { name: 'Riverside', type: 'Premium Residential/Office', rent: 'KES 1,600–2,300/sqft' },
              { name: 'Lavington', type: 'Low-Density Luxury', rent: 'KES 140–220/sqft (office)' },
              { name: 'CBD', type: 'Historic Core', rent: 'KES 80–130/sqft (office)' },
            ].map((loc) => (
              <Link key={loc.name} to="/markets/africa/kenya/nairobi" className="card-institutional group p-6">
                <h3 className="font-serif text-lg text-navy-900 mb-1 group-hover:text-navy-700">{loc.name}</h3>
                <p className="text-xs text-stone-500 mb-2">{loc.type}</p>
                <div className="font-serif text-gold-500">{loc.rent}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Access Kenya market intelligence"
        description="Quarterly reports, bespoke analysis and transaction support for investors and occupiers in Kenya."
        primaryLabel="Request Kenya Report"
        primaryLink="/contact"
        secondaryLabel="View Nairobi Detail"
        secondaryLink="/markets/africa/kenya/nairobi"
      />
    </>
  );
}

export default MarketsAfricaKenyaPage;