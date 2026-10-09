import { Link } from 'react-router-dom';
import { Building2, Key, ShieldCheck, CreditCard, Wrench, FileText, Users, Mail } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function TenantsIndexPage() {
  return (
    <>
      <Seo
        title="For Tenants | Murivest Lettings"
        description="Find your next property with Murivest Lettings. Browse available properties, pay rent online, log maintenance requests."
        path="/tenants"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Tenants', path: '/tenants' }]}
      />
      <PageHero
        label="For Tenants"
        title="A simpler, better tenancy experience"
        subtitle="Find your next property, pay rent online, log maintenance requests."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Tenants', path: '/tenants' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7586519/pexels-photo-7586519.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Happy tenant in their new home"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeader label="Why Rent Through Us" title="The benefits of a Murivest-managed tenancy" />
              <CheckList items={[
                'Professionally managed properties that are well-maintained',
                'Online rent payment — no queues, no cheques, no hassle',
                'Log maintenance requests online and track their progress',
                'Access your lease documents and payment history anytime',
                'Direct communication with your property manager',
                'Fair, transparent and compliant tenancy agreements',
                'Proper move-in and move-out inspections with documentation',
                'Properties that meet safety and compliance standards',
              ]} />
            </div>
          </div>

          <div className="bg-navy-950 p-10 lg:p-12">
            <SectionHeader
              label="Tenant Portal"
              title="Everything you need, in one place"
              subtitle="Our tenant portal puts your tenancy at your fingertips — pay rent, report issues, access documents and communicate with your manager."
              centered
              light
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                { icon: Key, title: 'Dashboard', desc: 'Overview of your tenancy — rent status, upcoming dates and recent activity.' },
                { icon: CreditCard, title: 'Pay Rent', desc: 'Secure online rent payment with automatic receipts and payment history.' },
                { icon: Wrench, title: 'Maintenance', desc: 'Log maintenance requests with photos and track progress to resolution.' },
                { icon: FileText, title: 'Documents', desc: 'Access your lease agreement, payment receipts and tenancy documents.' },
              ].map((feature) => (
                <div key={feature.title} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-gold-300" />
                  </div>
                  <h3 className="font-serif text-lg text-ivory-50 mb-2">{feature.title}</h3>
                  <p className="text-sm text-ivory-200/60 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/portal/tenant" className="btn-gold">
                Access Tenant Portal
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Looking for a property to rent?"
        description="Browse our available listings or contact us with your requirements — we'll match you to suitable options."
        primaryLabel="Browse Properties"
        primaryLink="/properties"
        secondaryLabel="Contact Us"
        secondaryLink="/contact"
      />
    </>
  );
}

export default TenantsIndexPage;