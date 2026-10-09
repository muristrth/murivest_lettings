import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, FileText, BookOpen, Globe, MapPin as MapPinIcon, TrendingUp as TrendingUpIcon, Flag, Map, Landmark, ShoppingBag, Users as UsersIcon, TrendingUp as TrendingUp2, Home } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function InsightsRetailMarketPage() {
  return (
    <>
      <Seo
        title="Retail Market Insights | Murivest Lettings"
        description="Retail property market analysis, rent trends and consumer behaviour insights across Kenya."
        path="/insights/retail-market"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: 'Retail Market', path: '/insights/retail-market' }]}
      />
      <PageHero
        label="Insights"
        title="Retail market"
        subtitle="Retail property market intelligence and consumer trends."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: 'Retail Market', path: '/insights/retail-market' }]}
      />

      {/* Market Dynamics */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Market Dynamics" title="Kenya's retail property transformation" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Kenya's retail sector is undergoing structural change: formal mall space is expanding,
                e-commerce is reshaping physical retail requirements, and consumer preferences are shifting
                towards experience-led concepts. Prime malls in Nairobi maintain high occupancy, while
                secondary centres face repositioning pressure. High-street retail in Westlands, Kilimani
                and Lavington benefits from density and expat spend.
              </p>
              <CheckList items={[
                'Formal mall stock: ~1.2M sq ft GLA in Nairobi',
                'Prime mall vacancy: 3-5%, secondary: 10-15%',
                'E-commerce penetration: ~4-5% of retail spend',
                'Experiential & F&B: 30-40% of new leasing',
                'Informal-to-formal transition accelerating',
                'Satellite towns: neighbourhood centre demand rising',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Retail property market"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Rent Trends & Consumer Behaviour */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <TrendingUp2 className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Rent Trends</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Rental benchmarks by format and location.
              </p>
              <CheckList items={[
                'Prime mall: KES 350-550/sq ft/month (base)',
                'Secondary mall: KES 180-300/sq ft/month',
                'High street (Westlands/Kilimani): KES 250-400/sq ft',
                'Turnover rent: 3-7% of gross turnover',
                'Service charge: KES 80-150/sq ft/month',
                'Incentives: 3-6 months rent-free on 5-10yr terms',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <UsersIcon className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Consumer Behaviour</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Shifting consumer patterns impacting retail property.
              </p>
              <CheckList items={[
                'Experience over transaction: dining, entertainment, services',
                'Omnichannel: click-and-collect, showrooming, last-mile',
                'Health & wellness: gyms, clinics, organic, fitness',
                'Local & artisanal: craft, design, food markets',
                'Evening economy: extended hours, nightlife anchors',
                'Sustainability: packaging, waste, ethical sourcing',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Retail property advisory or leasing?"
        description="Our retail team advises landlords on tenant mix, lease structuring and asset repositioning, and represents retailers in site selection and negotiation."
        primaryLabel="Discuss Retail Strategy"
        primaryLink="/contact"
        secondaryLabel="Retail Space to Let"
        secondaryLink="/lease/retail-space-to-let"
      />
    </>
  );
}

export default InsightsRetailMarketPage;