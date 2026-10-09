import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, Globe, TrendingUp, Calendar, Flag } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function AdvisoryMarketEntryPage() {
  return (
    <>
      <Seo
        title="Market Entry Advisory | Murivest Lettings"
        description="Commercial real estate market entry advisory for businesses and investors entering the Kenyan market."
        path="/advisory/market-entry"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Advisory', path: '/advisory' }, { name: 'Market Entry Advisory', path: '/advisory/market-entry' }]}
      />
      <PageHero
        label="Advisory"
        title="Market entry advisory"
        subtitle="Strategic market entry support for commercial real estate in Kenya."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Advisory', path: '/advisory' }, { name: 'Market Entry Advisory', path: '/advisory/market-entry' }]}
      />

      {/* Entry Strategy */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Entry Strategy" title="Structured market entry for sustainable presence" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Entering a new market requires more than identifying available space — it demands a coherent strategy
                addressing legal structure, tax efficiency, operational setup, talent acquisition and brand positioning.
                We guide clients through a phased entry framework tailored to their risk appetite and growth ambitions.
              </p>
              <CheckList items={[
                'Market feasibility & opportunity sizing',
                'Entry mode advisory: lease, acquire, partner, develop',
                'Legal entity & regulatory structure guidance',
                'Tax efficiency & repatriation planning',
                'Local talent & service provider ecosystem',
                'Phased rollout roadmap & milestones',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Market entry advisory"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Market Intelligence */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Market Intelligence</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Proprietary data and on-the-ground intelligence for informed entry decisions.
              </p>
              <CheckList items={[
                'Sector-specific supply/demand dynamics',
                'Rent & yield benchmarks by submarket',
                'Key player mapping & competitive landscape',
                'Regulatory changes & policy direction',
                'Infrastructure & urban development pipeline',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Flag className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Implementation Support</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Hands-on execution support from search through to operational launch.
              </p>
              <CheckList items={[
                'Property search, evaluation & shortlisting',
                'Lease negotiation & documentation',
                'Fit-out specification & project management',
                'Utility connections & statutory registrations',
                'Ongoing portfolio & lease administration',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Planning market entry into Kenya?"
        description="Our advisory team has guided numerous international and regional businesses through successful market entry. Let us help you navigate the complexities with confidence."
        primaryLabel="Start a Conversation"
        primaryLink="/contact"
        secondaryLabel="International Services"
        secondaryLink="/international"
      />
    </>
  );
}

export default AdvisoryMarketEntryPage;