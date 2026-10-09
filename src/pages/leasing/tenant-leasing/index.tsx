import { Link } from 'react-router-dom';
import { Home, Shield, FileText, Calculator, Target, ShieldCheck } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LeasingTenantLeasingPage() {
  return (
    <>
      <Seo
        title="Tenant Leasing Advisory | Murivest Lettings"
        description="Tenant representation and leasing advisory for commercial occupiers seeking optimal terms."
        path="/leasing/tenant-leasing"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Leasing', path: '/leasing' }, { name: 'Tenant Leasing', path: '/leasing/tenant-leasing' }]}
      />
      <PageHero
        label="Leasing"
        title="Tenant leasing"
        subtitle="Representing tenant interests in lease negotiations."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Leasing', path: '/leasing' }, { name: 'Tenant Leasing', path: '/leasing/tenant-leasing' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Tenant Advocacy" title="Exclusive representation for commercial occupiers" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Tenants often face information asymmetry when negotiating with professional
                  landlords and their agents. Our tenant leasing advisory levels the playing field
                  by providing expert representation focused solely on your interests — from
                  initial search through to lease execution and ongoing management.
                </p>
                <p>
                  We act exclusively for tenants, never for landlords. This means no conflicts
                  of interest, transparent advice, and a fee structure aligned with your
                  objectives. Whether you are a startup seeking your first office or a
                  multinational negotiating a regional headquarters, we bring the same rigour.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Tenant advisory consultation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="bg-white border border-stone-200 p-10 lg:p-12">
            <SectionHeader
              label="Lease Structuring"
              title="Key terms we negotiate on your behalf"
              subtitle="A commercial lease is more than rent — it's a framework of rights, obligations and costs."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                { icon: Calculator, title: 'Rent & Reviews', desc: 'Base rent, escalation mechanisms, market review provisions and caps.' },
                { icon: FileText, title: 'Lease Term & Breaks', desc: 'Term certainty aligned to business plan, break clauses with fair conditions.' },
                { icon: Shield, title: 'Service Charges', desc: 'Transparent budgets, caps, exclusions and audit rights for occupier protection.' },
                { icon: Target, title: 'Fit-out & Reinstatement', desc: 'Landlord contributions, approval processes, end-of-term obligations.' },
                { icon: Home, title: 'Assignment & Subletting', desc: 'Flexibility for business changes with reasonable landlord consent provisions.' },
                { icon: ShieldCheck, title: 'Compliance & Risk', desc: 'Insurance, indemnities, force majeure and regulatory compliance allocation.' },
              ].map((term) => (
                <div key={term.title}>
                  <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                    <term.icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <h3 className="font-serif text-lg text-navy-900 mb-2">{term.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{term.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-navy-900 text-ivory-50">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Why Tenants Choose Us"
            title="Conflict-free advocacy with measurable results"
            centered
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <CheckList light items={[
              'Exclusive tenant representation — no landlord listings',
              'Market-wide access including off-market opportunities',
              'Total occupancy cost modelling, not just headline rent',
              'Benchmarking against comparable transactions',
              'Project management of fit-out and relocation',
              'Ongoing lease administration and critical date tracking',
            ]} />
            <CheckList light items={[
              'Specialist knowledge across office, retail, industrial',
              'Negotiation track record with institutional landlords',
              'Legal and financial advisory coordination',
              'International client services for diaspora and MNCs',
              'Portfolio-level lease strategy for multi-site occupiers',
              'Dispute resolution and lease restructuring support',
            ]} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Negotiate from a position of strength"
        description="Engage our tenant advisory team early — ideally 12–18 months before your lease event — for optimal outcomes."
        primaryLabel="Request Representation"
        primaryLink="/contact"
        secondaryLabel="Tenant Advisory Services"
        secondaryLink="/services/tenant-advisory"
      />
    </>
  );
}

export default LeasingTenantLeasingPage;