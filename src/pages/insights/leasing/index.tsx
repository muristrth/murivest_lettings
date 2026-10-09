import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, FileText, BookOpen, Globe, MapPin as MapPinIcon, TrendingUp as TrendingUpIcon, Flag, Map, Landmark, FileText as FileTextIcon, ScrollText, Calculator, Percent } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function InsightsLeasingPage() {
  return (
    <>
      <Seo
        title="Leasing Market Insights | Murivest Lettings"
        description="Commercial leasing market trends, rent levels and lease structures across Kenya."
        path="/insights/leasing"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: 'Leasing Market', path: '/insights/leasing' }]}
      />
      <PageHero
        label="Insights"
        title="Leasing market"
        subtitle="Leasing market trends and rent analysis across Kenya."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: 'Leasing Market', path: '/insights/leasing' }]}
      />

      {/* Rental Market Dynamics */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Rental Market Dynamics" title="Lease market fundamentals across sectors" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Kenya's commercial leasing market operates with distinct structures by sector and grade.
                Office leases typically run 5-6 years with 2-3 year breaks; retail 5-10 years with turnover
                rent provisions; industrial 3-5 years with renewal options. Rent reviews are commonly annual
                (CPI-linked or fixed escalation) with market reviews at break points. We track these dynamics
                across all major markets.
              </p>
              <CheckList items={[
                'Office: Net effective rents, incentive packages, fit-out contributions',
                'Retail: Base rent + turnover rent, service charge transparency',
                'Industrial: Net leases, triple-net structures, yard & parking inclusion',
                'Mixed-Use: Apportionment methodologies, shared service charges',
                'Residential: Gross vs net, furnished premium, diplomatic clause',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Leasing market analysis"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Lease Structures */}
          <div className="bg-white border border-stone-200 p-10 lg:p-12">
            <SectionHeader
              label="Lease Structures"
              title="Standard lease frameworks by sector"
              subtitle="Understanding the typical lease structures, key clauses and negotiation points for each commercial property sector in Kenya."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                { icon: FileTextIcon, title: 'Office Leases', desc: '5-6 year terms, 2-3 year breaks, annual escalation (CPI/3-5%), fit-out periods 2-3 months rent-free.' },
                { icon: ScrollText, title: 'Retail Leases', desc: '5-10 year terms, base + turnover rent (1-5%), marketing fund contributions, fit-out 3-6 months rent-free.' },
                { icon: Calculator, title: 'Industrial Leases', desc: '3-5 year terms, triple-net (NNN), annual fixed escalation 3-5%, yard/parking included or separate.' },
                { icon: Percent, title: 'Specialist Sectors', desc: 'Hospitality: management contracts/leases. Healthcare: long-term 10-15yr. Data centres: 10-20yr powered shell.' },
              ].map((item) => (
                <div key={item.title}>
                  <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <h3 className="font-serif text-lg text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Need leasing market intelligence?"
        description="Our leasing team provides rent reviews, lease restructuring, market evidence for arbitration and strategic lease advisory for tenants and landlords."
        primaryLabel="Request Lease Advisory"
        primaryLink="/contact"
        secondaryLabel="Lease Negotiation"
        secondaryLink="/advisory/lease-negotiation"
      />
    </>
  );
}

export default InsightsLeasingPage;