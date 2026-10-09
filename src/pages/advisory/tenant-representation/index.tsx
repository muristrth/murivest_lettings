import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, CheckCircle, ClipboardCheck, Shield as ShieldIcon, Heart } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function AdvisoryTenantRepresentationPage() {
  return (
    <>
      <Seo
        title="Tenant Representation | Murivest Lettings"
        description="Tenant representation services for commercial tenants seeking optimal lease terms and locations across Kenya."
        path="/advisory/tenant-representation"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Advisory', path: '/advisory' }, { name: 'Tenant Representation', path: '/advisory/tenant-representation' }]}
      />
      <PageHero
        label="Advisory"
        title="Tenant representation"
        subtitle="Representing tenant interests in lease negotiations and property searches."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Advisory', path: '/advisory' }, { name: 'Tenant Representation', path: '/advisory/tenant-representation' }]}
      />

      {/* Tenant Advocacy */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Tenant Advocacy" title="Your interests, exclusively represented" />
              <p className="text-stone-500 leading-relaxed mb-6">
                In commercial leasing, landlords typically have professional representation — tenants often do not.
                We level the playing field by providing exclusive tenant representation: no conflict, no dual agency,
                just focused advocacy for your occupancy requirements and commercial terms.
              </p>
              <CheckList items={[
                'Exclusive representation — no landlord conflicts',
                'Requirements definition & space programming',
                'Market-wide search — on & off-market opportunities',
                'Comparative financial analysis of shortlisted options',
                'Heads of terms strategy & negotiation leadership',
                'Lease documentation review & risk identification',
                'Post-completion lease administration setup',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Tenant representation consultation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Lease Negotiation & Portfolio Optimisation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <FileBarChart className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Lease Negotiation</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Securing favourable terms through market evidence and strategic negotiation.
              </p>
              <CheckList items={[
                'Rent & incentive benchmarking against comparables',
                'Service charge caps, audit rights & transparency',
                'Break clauses, assignment & subletting flexibility',
                'Fit-out contributions & rent-free optimisation',
                'Repair & decoration obligations limitation',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Portfolio Optimisation</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Ongoing portfolio management for multi-location occupiers.
              </p>
              <CheckList items={[
                'Lease event calendar & proactive renewal management',
                'Space utilisation analysis & consolidation opportunities',
                'Geographic footprint rationalisation',
                'Service charge recovery & audit programmes',
                'Total occupancy cost reduction initiatives',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Seeking tenant representation?"
        description="Whether you're a new market entrant or an established occupier, our exclusive representation ensures your interests come first at every stage."
        primaryLabel="Engage Our Team"
        primaryLink="/contact"
        secondaryLabel="Lease Negotiation"
        secondaryLink="/advisory/lease-negotiation"
      />
    </>
  );
}

export default AdvisoryTenantRepresentationPage;