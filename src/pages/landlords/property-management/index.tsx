import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, Globe, MapPin as MapPinIcon, Flag, Users as UsersIcon, Plane, Map, Landmark, ClipboardCheck, DollarSign, Shield, Award, TrendingUp as TrendingUp2, FileText, Settings } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LandlordsPropertyManagementPage() {
  return (
    <>
      <Seo
        title="Property Management for Landlords | Murivest Lettings"
        description="Comprehensive property management services for landlords with transparent reporting and dedicated account management."
        path="/landlords/property-management"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Landlords', path: '/landlords' }, { name: 'Property Management', path: '/landlords/property-management' }]}
      />
      <PageHero
        label="Landlords"
        title="Property management"
        subtitle="Full-cycle property management with institutional reporting standards."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Landlords', path: '/landlords' }, { name: 'Property Management', path: '/landlords/property-management' }]}
      )

      {/* Management Services */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Management Services" title="Comprehensive operations, delivered to institutional standards" />
              <p className="text-stone-500 leading-relaxed mb-6">
                We manage the full property lifecycle: rent collection, arrears management, maintenance
                coordination, statutory compliance, financial reporting, insurance, service charge
                administration and tenant relationship management. Every task is documented, every
                decision is auditable, every penny is accounted for.
              </p>
              <CheckList items={[
                'Rent collection: automated reminders, arrears escalation, legal action coordination',
                'Maintenance: 24/7 reporting, vetted contractors, PPM schedules, capex planning',
                'Compliance: fire, lifts, electrical, NEMA, NCA, insurance, statutory returns',
                'Financials: monthly statements, quarterly reviews, annual budgets, audit support',
                'Tenant management: onboarding, lease admin, renewals, disputes, exit inspections',
                'Reporting: portfolio dashboard, KPI tracking, benchmarking, strategic recommendations',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Property management operations"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Reporting */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Reporting</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Transparent, timely, audit-ready financial and operational reporting.
              </p>
              <CheckList items={[
                'Monthly: rent roll, arrears, income/expense, cashflow, remittance',
                'Quarterly: performance vs budget, KPI trends, market commentary',
                'Annual: full accounts, service charge reconciliation, tax schedules',
                'Ad-hoc: capex approvals, insurance claims, legal updates',
                'Portal access: 24/7, downloadable, multi-user permissions',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Dedicated Manager</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                A single point of accountability who knows your portfolio by name.
              </p>
              <CheckList items={[
                'Assigned property manager with relevant sector experience',
                'Direct contact: phone, email, portal messaging',
                'Monthly portfolio review calls (quarterly for smaller portfolios)',
                'Proactive communication: issues, opportunities, decisions needed',
                'Escalation path to Director level for complex matters',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Seeking professional property management?"
        description="Whether you own one building or a diverse portfolio, our management team delivers institutional operations with personal accountability."
        primaryLabel="Request Management Proposal"
        primaryLink="/contact"
        secondaryLabel="Landlord Portal"
        secondaryLink="/portal/landlord"
      />
    </>
  );
}

export default LandlordsPropertyManagementPage;