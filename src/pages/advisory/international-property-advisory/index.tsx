import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, MapPin, Globe, Users, FileBarChart, Lightbulb, Briefcase, Scale, Search } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function AdvisoryInternationalPropertyAdvisoryPage() {
  return (
    <>
      <Seo
        title="International Property Advisory | Murivest Lettings"
        description="Advisory services for international investors and occupiers entering the Kenyan commercial real estate market."
        path="/advisory/international-property-advisory"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Advisory', path: '/advisory' }, { name: 'International Property Advisory', path: '/advisory/international-property-advisory' }]}
      />
      <PageHero
        label="Advisory"
        title="International property advisory"
        subtitle="For international investors and occupiers entering the Kenyan market."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Advisory', path: '/advisory' }, { name: 'International Property Advisory', path: '/advisory/international-property-advisory' }]}
      />

      {/* Market Entry Advisory */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Market Entry" title="Structured market entry for international clients" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Kenya's commercial real estate market presents compelling opportunities but requires local knowledge
                to navigate effectively. We provide international investors and occupiers with a structured entry
                framework — from market intelligence through to transaction execution and ongoing asset management.
              </p>
              <CheckList items={[
                'Macro & sector-level market intelligence',
                'Regulatory, tax & legal framework guidance',
                'Local partner & service provider identification',
                'Investment thesis development & validation',
                'Transaction structuring & due diligence coordination',
                'Post-acquisition asset management setup',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="International property advisory meeting"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Due Diligence Support */}
          <div className="bg-white border border-stone-200 p-10 lg:p-12">
            <SectionHeader
              label="Due Diligence"
              title="Rigorous due diligence for informed decisions"
              subtitle="Our due diligence framework covers legal, physical, financial and operational dimensions — delivered with institutional thoroughness."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                { icon: Search, title: 'Legal & Title', desc: 'Title verification, encumbrances, planning compliance, lease covenants and statutory approvals.' },
                { icon: Building2, title: 'Physical & Technical', desc: 'Building condition, M&E systems, structural integrity, environmental risks and capex forecasting.' },
                { icon: FileBarChart, title: 'Financial & Commercial', desc: 'Rent roll analysis, service charge reconciliation, vacancy risk, yield validation and cashflow modelling.' },
                { icon: Scale, title: 'Operational & ESG', desc: 'Management quality, tenant credit, sustainability ratings, climate risk and regulatory compliance.' },
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
        title="Entering the Kenyan market?"
        description="Our international advisory team provides the local knowledge and institutional rigour you need to invest or occupy with confidence."
        primaryLabel="Discuss Your Requirements"
        primaryLink="/contact"
        secondaryLabel="International Services"
        secondaryLink="/international"
      />
    </>
  );
}

export default AdvisoryInternationalPropertyAdvisoryPage;