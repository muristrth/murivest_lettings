import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, FileText, BookOpen, Globe, MapPin as MapPinIcon, TrendingUp as TrendingUpIcon, Flag, Map, Landmark, Building, TrendingUp as TrendingUp2, ClipboardList, Calendar } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function InsightsOfficeMarketPage() {
  return (
    <>
      <Seo
        title="Office Market Insights | Murivest Lettings"
        description="Nairobi office market analysis, rent trends and supply-demand dynamics."
        path="/insights/office-market"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: 'Office Market', path: '/insights/office-market' }]}
      />
      <PageHero
        label="Insights"
        title="Office market"
        subtitle="Office market analysis for Nairobi and key Kenyan cities."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: 'Office Market', path: '/insights/office-market' }]}
      />

      {/* Market Overview */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Market Overview" title="Nairobi office market dynamics" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Nairobi's office market is bifurcated: Grade-A stock in Westlands, Upper Hill and Kilimani
                commands premium rents with low vacancy, while Grade-B and older CBD stock faces structural
                vacancy. The market is driven by multinational entry, professional services expansion and
                increasing ESG requirements. Flexible space operators now account for 10-15% of new take-up.
              </p>
              <CheckList items={[
                'Grade-A prime rent: KES 1,650-1,950/sq ft/month',
                'Grade-B rent: KES 900-1,300/sq ft/month',
                'Overall vacancy: ~12-14% (Grade-A: 6-8%, Grade-B: 18-22%)',
                'Annual net absorption: 200,000-300,000 sq ft',
                'Flex space take-up: 12-15% of transactions',
                'ESG: IFC EDGE, LEED, Green Star certifications rising',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Nairobi office market"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Rent Trends & Supply Pipeline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <TrendingUp2 className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Rent Trends</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Rental trajectory by grade and location.
              </p>
              <CheckList items={[
                'Grade-A: 3-5% p.a. growth (flight to quality)',
                'Grade-B: Flat to -2% (obsolescence discount)',
                'Incentives: 2-4 months rent-free on 5-6yr terms',
                'Fit-out contributions: KES 1,500-3,000/sq ft',
                'Service charges: KES 180-280/sq ft/month',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Supply Pipeline</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Upcoming supply by submarket (next 24 months).
              </p>
              <CheckList items={[
                'Westlands: ~400,000 sq ft (3 schemes)',
                'Upper Hill: ~250,000 sq ft (2 schemes)',
                'Kilimani: ~180,000 sq ft (mixed-use)',
                'CBD: Limited new Grade-A supply',
                'Pre-let levels: 40-60% on major schemes',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Office market intelligence for your decisions?"
        description="Our office leasing and advisory team provides rent reviews, lease negotiations, market reports and strategic occupancy advice across Nairobi's office market."
        primaryLabel="Request Market Report"
        primaryLink="/contact"
        secondaryLabel="Office Leasing"
        secondaryLink="/lease/offices-to-let"
      />
    </>
  );
}

export default InsightsOfficeMarketPage;