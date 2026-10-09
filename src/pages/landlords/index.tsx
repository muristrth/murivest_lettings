import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, Globe, MapPin as MapPinIcon, Flag, Users as UsersIcon, Plane, Map, Landmark, KeySquare, ClipboardCheck, DollarSign, Shield, Award, TrendingUp as TrendingUp2 } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LandlordsIndexPage() {
  return (
    <>
      <Seo
        title="For Landlords | Murivest Lettings"
        description="Professional property management for landlords in Kenya. Full-service management, leasing, financial reporting and advisory with a dedicated property manager."
        path="/landlords"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Landlords', path: '/landlords' }]}
      />
      <PageHero
        label="For Landlords"
        title="Your property. Professionally managed."
        subtitle="Full-service property management with institutional-grade reporting, transparent financials and a dedicated property manager who knows your portfolio by name."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Landlords', path: '/landlords' }]}
      />

      {/* Services Overview */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="What You Get" title="Everything you need to manage your property — without the hassle" />
              <CheckList items={[
                'A dedicated property manager assigned to your portfolio',
                'Systematic rent collection with automated reminders and arrears tracking',
                'Same-month remittance to your account with detailed statements',
                'Pre-vetted contractor network for all maintenance and repairs',
                'Periodic inspections with photographic condition reports',
                'Full compliance with Kenyan landlord-tenant law and statutory requirements',
                'Monthly statements and quarterly performance reviews',
                '24/7 access to your portfolio through our landlord portal',
                'Document vault for leases, certificates and correspondence',
                'Approval workflows for maintenance spending above your threshold',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Professional property management consultation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Portal features */}
          <div className="bg-white border border-stone-200 p-10 lg:p-12">
            <SectionHeader
              label="Landlord Portal"
              title="Your portfolio, visible at all times"
              subtitle="Our secure online portal gives you real-time access to everything happening with your properties — from rent collection to maintenance, documents to approvals."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                { icon: Building2, title: 'Portfolio Dashboard', desc: 'A complete overview of all your properties, occupancy, rent collection and performance metrics.' },
                { icon: Briefcase, title: 'Financial Statements', desc: 'Monthly statements with rent collected, expenses, arrears and net remittance — downloadable as PDF.' },
                { icon: Users, title: 'Tenant Management', desc: 'View tenant profiles, lease terms, renewal dates and communication history.' },
                { icon: ShieldCheck, title: 'Document Vault', desc: 'All leases, certificates, inspection reports and correspondence stored securely.' },
                { icon: Target, title: 'Approval Workflows', desc: 'Review and approve maintenance requests above your spending threshold before work proceeds.' },
                { icon: ArrowRight, title: 'Performance Reports', desc: 'Quarterly reviews with market commentary, benchmarking and strategic recommendations.' },
              ].map((feature) => (
                <div key={feature.title}>
                  <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <h3 className="font-serif text-lg text-navy-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/portal/landlord" className="btn-primary">
                Explore the Portal
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to professionalise your property management?"
        description="Speak with our team about taking on your property or portfolio. We'll provide a tailored proposal within 48 hours."
        primaryLabel="Request a Consultation"
        primaryLink="/contact"
        secondaryLabel="Our Services"
        secondaryLink="/services"
      />
    </>
  );
}

export default LandlordsIndexPage;