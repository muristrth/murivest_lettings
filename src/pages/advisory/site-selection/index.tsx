import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, CheckCircle, ClipboardCheck, Award } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function AdvisorySiteSelectionPage() {
  return (
    <>
      <Seo
        title="Site Selection | Murivest Lettings"
        description="Strategic site selection advisory for businesses expanding or relocating in Kenya."
        path="/advisory/site-selection"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Advisory', path: '/advisory' }, { name: 'Site Selection', path: '/advisory/site-selection' }]}
      />
      <PageHero
        label="Advisory"
        title="Site selection"
        subtitle="Data-driven site selection for optimal business locations."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Advisory', path: '/advisory' }, { name: 'Site Selection', path: '/advisory/site-selection' }]}
      />

      {/* Selection Criteria */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Selection Criteria" title="Rigorous evaluation, not just site finding" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Site selection is a structured decision process, not a property search. We define weighted criteria
                aligned to your operational priorities, evaluate a comprehensive longlist, and deliver a transparent
                comparative analysis with clear recommendations.
              </p>
              <CheckList items={[
                'Operational requirements translation to site criteria',
                'Weighted scoring model with stakeholder alignment',
                'Comprehensive site longlisting & screening',
                'Physical, legal & planning due diligence',
                'Comparative site scoring & sensitivity analysis',
                'Recommendation report with risk mitigation',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Site selection evaluation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Market Analysis & Recommendations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Market Analysis</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Market intelligence informing site evaluation and negotiation.
              </p>
              <CheckList items={[
                'Catchment demographic & economic profiling',
                'Competitor location & market share mapping',
                'Infrastructure & accessibility assessment',
                'Planning policy & development pipeline',
                'Rent & land value benchmarking',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Recommendations</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Clear, evidence-based recommendations with implementation pathway.
              </p>
              <CheckList items={[
                'Ranked site recommendations with scoring rationale',
                'Risk register & mitigation strategies',
                'Acquisition/lease negotiation strategy',
                'Timeline & critical path planning',
                'Stakeholder presentation & decision support',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Selecting a site for development or occupation?"
        description="Our site selection methodology combines proprietary data, on-the-ground assessment and institutional rigour to de-risk your location decision."
        primaryLabel="Start Site Evaluation"
        primaryLink="/contact"
        secondaryLabel="Location Strategy"
        secondaryLink="/advisory/location-strategy"
      />
    </>
  );
}

export default AdvisorySiteSelectionPage;