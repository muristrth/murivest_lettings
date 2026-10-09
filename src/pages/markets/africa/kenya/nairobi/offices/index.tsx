import { Link } from 'react-router-dom';
import { Building2, Briefcase, TrendingUp, MapPin, BarChart3, ShieldCheck } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function MarketsAfricaKenyaiNairobiOfficesPage() {
  return (
    <>
      <Seo
        title="Nairobi Office Market | Murivest Lettings"
        description="Office property market analysis for Nairobi, Kenya."
        path="/markets/africa/kenya/nairobi/offices"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Kenya', path: '/markets/africa/kenya' }, { name: 'Nairobi', path: '/markets/africa/kenya/nairobi' }, { name: 'Offices', path: '/markets/africa/kenya/nairobi/offices' }]}
      />
      <PageHero
        label="Markets"
        title="Nairobi office market"
        subtitle="Office market intelligence for Nairobi."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: 'Africa', path: '/markets/africa' }, { name: 'Kenya', path: '/markets/africa/kenya' }, { name: 'Nairobi', path: '/markets/africa/kenya/nairobi' }, { name: 'Offices', path: '/markets/africa/kenya/nairobi/offices' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Market Overview" title="Flight-to-quality defining a bifurcated office market" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Nairobi's office market is defined by a pronounced flight-to-quality.
                  Grade A stock in Upper Hill and Westlands — representing ~600,000sqm —
                  enjoys sub-5% vacancy and consistent rental growth driven by financial
                  services, tech, multinationals and development agencies. Grade B/C stock
                  in the CBD, Upper Hill fringes and older Westlands blocks faces structural
                  vacancy (15–25%) as occupiers prioritise ESG credentials, amenities,
                  connectivity and floor-plate efficiency.
                </p>
                <p>
                  The pandemic accelerated flexible workspace adoption: co-working and
                  serviced offices now account for ~8% of Grade A take-up. Hybrid working
                  has reduced space-per-head ratios but increased demand for collaboration
                  space, wellness amenities and building certifications (LEED, EDGE, Green
                  Star). The Nairobi Expressway and BRT are expanding the effective catchment
                  of Upper Hill and Westlands, supporting rental resilience.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Modern Nairobi office"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Upper Hill', grade: 'Prime Grade A', rent: 'KES 2,000–2,500/sqft', vacancy: '< 4%', yield: '7.5–8.5%' },
              { name: 'Westlands', grade: 'Grade A', rent: 'KES 1,500–2,200/sqft', vacancy: '5–8%', yield: '8.0–9.0%' },
              { name: 'Riverside', grade: 'Boutique Grade A', rent: 'KES 1,600–2,300/sqft', vacancy: '< 5%', yield: '8.0–9.0%' },
              { name: 'Kilimani', grade: 'Grade B+', rent: 'KES 1,000–1,600/sqft', vacancy: '8–12%', yield: '9.0–10.5%' },
              { name: 'CBD', grade: 'Grade B/C', rent: 'KES 80–130/sqft', vacancy: '15–25%', yield: '10.0–12.0%' },
              { name: 'Mombasa Rd', grade: 'Grade B', rent: 'KES 800–1,400/sqft', vacancy: '10–15%', yield: '9.5–11.0%' },
            ].map((dist) => (
              <div key={dist.name} className="bg-navy-50 p-6 border border-stone-200">
                <h3 className="font-serif text-lg text-navy-900 mb-2">{dist.name}</h3>
                <p className="text-xs text-stone-500 mb-3">{dist.grade}</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between"><span className="text-stone-500">Rent:</span> <span className="font-serif text-gold-500">{dist.rent}</span></div>
                  <div className="flex justify-between"><span className="text-stone-500">Vacancy:</span> <span>{dist.vacancy}</span></div>
                  <div className="flex justify-between"><span className="text-stone-500">Yield:</span> <span>{dist.yield}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Rent Bands & Trends"
            title="Grade A rental trajectory and occupier dynamics"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <h4 className="font-serif text-lg text-navy-900 mb-4">Take-Up by Sector (2023–24)</h4>
              <CheckList items={[
                'Financial Services: 28% (banks, insurance, fintech)',
                'Technology & Telecoms: 22% (big tech, startups, IT services)',
                'Development Agencies: 18% (UN, World Bank, bilaterals)',
                'Professional Services: 15% (law, audit, consulting)',
                'Energy & Natural Resources: 10% (oil, gas, mining)',
                'Other: 7% (manufacturing HQ, retail HQ, etc.)',
              ]} />
            </div>
            <div>
              <h4 className="font-serif text-lg text-navy-900 mb-4">Key Lease Terms (Prime)</h4>
              <CheckList items={[
                'Term: 5–7 years (diplomatic 3–5 years)',
                'Rent Reviews: 3-yearly, CPI-linked or market',
                'Rent-Free: 3–6 months on 5-year term',
                'Fit-Out Contribution: USD 150–300/sqm',
                'Service Charge: KES 35–55/sqft/month',
                'Parking: KES 8,000–15,000/bay/month',
              ]} />
            </div>
            <div>
              <h4 className="font-serif text-lg text-navy-900 mb-4">Pipeline & Outlook</h4>
              <CheckList items={[
                '~450,000sqm Grade A UC (2024–2026)',
                '~60% pre-let — speculative risk contained',
                'Upper Hill: 2 major towers (The Prism, CBK)',
                'Westlands: 3 schemes (Sarit, Delta, Westpark phases)',
                'Risk: 2025–26 delivery cluster may test absorption',
                'Net absorption 2024 forecast: 80,000–100,000sqm',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Access Nairobi office market intelligence"
        description="District-level vacancy, rental comparables, lease comparables and occupier requirement tracking for office investors and occupiers."
        primaryLabel="Request Office Report"
        primaryLink="/contact"
        secondaryLabel="View Retail Market"
        secondaryLink="/markets/africa/kenya/nairobi/retail"
      />
    </>
  );
}

export default MarketsAfricaKenyaiNairobiOfficesPage;