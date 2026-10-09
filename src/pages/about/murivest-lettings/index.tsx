import { ArrowRight, Building2, Globe2, Users, Target, ShieldCheck } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function AboutMurivestLettingsPage() {
  return (
    <>
      <Seo
        title="Murivest Lettings Division | Murivest Group Ltd"
        description="Murivest Lettings is the property management, leasing and advisory division of Murivest Group Ltd, established to professionalise real estate services in Kenya."
        path="/about/murivest-lettings"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }, { name: 'The Division', path: '/about/murivest-lettings' }]}
      />
      <PageHero
        label="The Division"
        title="Murivest Lettings"
        subtitle="The property management, leasing and advisory division of Murivest Group Ltd — bringing institutional discipline to Kenyan real estate."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }, { name: 'The Division', path: '/about/murivest-lettings' }]}
      />

      {/* Division Overview */}
      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader label="Who We Are" title="A division built for property performance" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Murivest Lettings operates as a dedicated division within Murivest Group Ltd,
                  focused exclusively on the professional management, leasing and advisory of
                  commercial and residential property across Kenya.
                </p>
                <p>
                  Established to address the gap between traditional property management and the
                  standards expected by institutional investors, we combine local market
                  expertise with systematic processes, transparent reporting and a
                  relationship-first approach to client service.
                </p>
                <p>
                  Our services span the full property lifecycle — from tenant acquisition and
                  lease negotiation through to ongoing management, financial reporting and
                  strategic advisory. Every property, regardless of size or sector, receives
                  the same institutional-grade attention.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Murivest Lettings team in professional setting"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-navy-950 p-6 max-w-[240px] hidden md:block">
                <div className="label-text text-gold-300 mb-2">A Murivest Group Ltd Division</div>
                <div className="text-sm text-ivory-200/80 leading-relaxed">Established to professionalise property management in Kenya.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Company */}
      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Parent Company"
            title="Part of Murivest Group Ltd"
            subtitle="We operate within a larger institutional framework, backed by the resources and expertise of our parent company."
            centered
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <Building2 className="w-12 h-12 text-navy-700 mx-auto mb-4" />
              <h3 className="font-serif text-xl text-navy-900 mb-2">Established Foundation</h3>
              <p className="text-sm text-stone-500 leading-relaxed">Built on proven institutional frameworks and governance standards.</p>
            </div>
            <div className="text-center">
              <Globe2 className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="font-serif text-xl text-navy-900 mb-2">Market Reach</h3>
              <p className="text-sm text-stone-500 leading-relaxed">Coverage across Kenya and East Africa with a global outlook.</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-navy-700 mx-auto mb-4" />
              <h3 className="font-serif text-xl text-navy-900 mb-2">Shared Resources</h3>
              <p className="text-sm text-stone-500 leading-relaxed">Access to specialised legal, financial and advisory support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding py-20 bg-navy-900 text-ivory-50">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Our Services"
            title="What we do"
            subtitle="Three core service lines, each delivered with institutional discipline."
            centered
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="border border-gold-400/20 p-8 card-institutional bg-navy-800/50">
              <Building2 className="w-8 h-8 text-gold-400 mb-4" />
              <h3 className="font-serif text-xl text-ivory-50 mb-3">Property Management</h3>
              <p className="text-sm text-ivory-200/60 leading-relaxed mb-4">
                Full-cycle property management with institutional reporting, transparent financials and dedicated account management.
              </p>
              <CheckList items={[
                'Monthly financial statements',
                '24/7 maintenance coordination',
                'Tenant relationship management',
                'Statutory compliance',
              ]} />
            </div>
            <div className="border border-gold-400/20 p-8 card-institutional bg-navy-800/50">
              <Target className="w-8 h-8 text-gold-400 mb-4" />
              <h3 className="font-serif text-xl text-ivory-50 mb-3">Leasing</h3>
              <p className="text-sm text-ivory-200/60 leading-relaxed mb-4">
                Strategic leasing services to maximise rental returns and minimise void periods.
              </p>
              <CheckList items={[
                'Market-aligned rent setting',
                'Premium marketing channels',
                'Rigorous tenant vetting',
                'Lease negotiation',
              ]} />
            </div>
            <div className="border border-gold-400/20 p-8 card-institutional bg-navy-800/50">
              <ShieldCheck className="w-8 h-8 text-gold-400 mb-4" />
              <h3 className="font-serif text-xl text-ivory-50 mb-3">Advisory</h3>
              <p className="text-sm text-ivory-200/60 leading-relaxed mb-4">
                Strategic advisory for property owners, tenants and investors.
              </p>
              <CheckList items={[
                'Portfolio strategy',
                'Lease negotiation',
                'Market entry advisory',
                'Location strategy',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Discover our full service offering"
        description="Explore our eight specialised service lines, each delivered with institutional rigour and complete transparency."
        primaryLabel="Our Services"
        primaryLink="/services"
        secondaryLabel="Contact Us"
        secondaryLink="/contact"
      />
    </>
  );
}

export default AboutMurivestLettingsPage;
