import { Link } from 'react-router-dom';
import { ArrowRight, Building2, ShieldCheck, Target, Eye, Heart, Users, Briefcase } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function AboutPage() {
  return (
    <>
      <Seo
        title="About Murivest Lettings | Murivest Group Ltd"
        description="Murivest Lettings is the property management and advisory division of Murivest Group Ltd, providing institutional-grade real estate services in Kenya."
        path="/about"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]}
      />
      <PageHero
        label="About Us"
        title="Institutional real estate. Built on relationships."
        subtitle="Murivest Lettings is the property management, leasing and advisory division of Murivest Group Ltd — bringing institutional discipline to the stewardship of property in Kenya."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]}
      />

      {/* Story */}
      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader label="Our Story" title="A division built on a simple principle" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Murivest Group Ltd was established with a vision to bring institutional-quality
                  real estate services to the Kenyan market — a market historically served by
                  informal agents and fragmented service providers.
                </p>
                <p>
                  Murivest Lettings was created as the operational arm of that vision: a division
                  dedicated to the professional management, leasing and advisory of residential and
                  commercial property, with the documentation, transparency and analytical rigour
                  that institutional investors expect.
                </p>
                <p>
                  Today, we manage a growing portfolio across Nairobi and key Kenyan markets, serving
                  landlords ranging from single-property owners to diaspora investors and institutional
                  portfolios. Every property receives the same standard of care.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Murivest team in professional setting"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-navy-950 p-6 max-w-[240px] hidden md:block">
                <div className="label-text text-gold-300 mb-2">Murivest Group Ltd</div>
                <div className="text-sm text-ivory-200/80 leading-relaxed">Parent company and registered legal entity behind Murivest Lettings.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Our Values"
            title="What we stand for"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { icon: ShieldCheck, title: 'Discretion', desc: 'We protect client confidentiality and handle every transaction with the utmost discretion.' },
              { icon: Target, title: 'Competence', desc: 'Institutional-grade systems, documentation and processes applied to every property.' },
              { icon: Eye, title: 'Transparency', desc: 'Full visibility into financials, operations and property condition through our portal.' },
              { icon: Heart, title: 'Relationships', desc: 'Long-term partnerships built on trust, not transactional interactions.' },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-navy-50 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-navy-700" />
                </div>
                <h3 className="font-serif text-xl text-navy-900 mb-3">{value.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding py-20 bg-navy-900 text-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="border-l border-gold-400/30 pl-8">
              <div className="label-text text-gold-300 mb-4">Our Mission</div>
              <h2 className="font-serif text-3xl text-ivory-50 mb-5 leading-tight">
                To professionalise property ownership in Kenya
              </h2>
              <p className="text-ivory-200/70 leading-relaxed">
                We exist to give every property owner — regardless of portfolio size — access to
                institutional-grade management, transparent reporting and intelligent advisory that
                protects and grows their real estate investment over the long term.
              </p>
            </div>
            <div className="border-l border-gold-400/30 pl-8">
              <div className="label-text text-gold-300 mb-4">Our Vision</div>
              <h2 className="font-serif text-3xl text-ivory-50 mb-5 leading-tight">
                The trusted operating platform for Kenyan real estate
              </h2>
              <p className="text-ivory-200/70 leading-relaxed">
                To be the platform that landlords, tenants and investors turn to when they want
                property managed with the same rigour, documentation and performance focus as an
                institutional real estate fund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 'KES 4.2B+', label: 'Assets Under Management' },
              { value: '340+', label: 'Units Managed' },
              { value: '15+', label: 'Years Combined Experience' },
              { value: '98.4%', label: 'Rent Collection Rate' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-4xl lg:text-5xl text-navy-900 mb-2">{stat.value}</div>
                <div className="text-sm text-stone-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's discuss your property"
        description="Whether you're a single-property owner or managing a portfolio, our team is ready to help."
        primaryLabel="Get in Touch"
        primaryLink="/contact"
        secondaryLabel="Our Services"
        secondaryLink="/services"
      />
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Murivest Lettings"
        description="Contact Murivest Lettings for property management, leasing and advisory services in Nairobi and Kenya. Request a consultation with our team."
        path="/contact"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]}
      />
      <PageHero
        label="Contact"
        title="Speak with our team"
        subtitle="Whether you're a landlord, tenant or investor, we're here to discuss your property needs."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-serif text-2xl text-navy-900 mb-6">Request a consultation</h2>
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="label-text text-stone-500 mb-2 block">First Name</label>
                    <input type="text" className="input-field" placeholder="John" required />
                  </div>
                  <div>
                    <label className="label-text text-stone-500 mb-2 block">Last Name</label>
                    <input type="text" className="input-field" placeholder="Mwangi" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="label-text text-stone-500 mb-2 block">Email</label>
                    <input type="email" className="input-field" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <label className="label-text text-stone-500 mb-2 block">Phone</label>
                    <input type="tel" className="input-field" placeholder="07XX XXX XXX" />
                  </div>
                </div>
                <div>
                  <label className="label-text text-stone-500 mb-2 block">I am a...</label>
                  <select className="input-field" required>
                    <option value="">Select...</option>
                    <option>Landlord / Property Owner</option>
                    <option>Tenant</option>
                    <option>Investor</option>
                    <option>Diaspora Owner</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="label-text text-stone-500 mb-2 block">Service of Interest</label>
                  <select className="input-field">
                    <option value="">Select a service...</option>
                    <option>Property Management</option>
                    <option>Leasing & Tenant Placement</option>
                    <option>Landlord Advisory</option>
                    <option>Tenant Advisory</option>
                    <option>International Client Services</option>
                    <option>Takeover Management</option>
                    <option>Audit & Valuation</option>
                  </select>
                </div>
                <div>
                  <label className="label-text text-stone-500 mb-2 block">Message</label>
                  <textarea className="input-field min-h-[120px] resize-y" placeholder="Tell us about your property or requirements..." required />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-stone-400 text-center">
                  We typically respond within one business day.
                </p>
              </form>
            </div>

            {/* Contact info */}
            <div>
              <h2 className="font-serif text-2xl text-navy-900 mb-6">Contact details</h2>
              <div className="space-y-6 mb-10">
                {[
                  { label: 'Phone', value: '0115 277 610', href: 'tel:0115277610' },
                  { label: 'Email', value: 'capital@murivest.com', href: 'mailto:capital@murivest.com' },
                  { label: 'Office', value: 'Nairobi, Kenya' },
                  { label: 'Hours', value: 'Mon–Fri, 8:00 AM – 5:00 PM EAT' },
                ].map((item) => (
                  <div key={item.label} className="border-l border-gold-400/40 pl-5">
                    <div className="label-text text-gold-500 mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-lg text-navy-900 hover:text-navy-700 transition-colors">{item.value}</a>
                    ) : (
                      <div className="text-lg text-navy-900">{item.value}</div>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-navy-950 p-8">
                <h3 className="font-serif text-xl text-ivory-50 mb-4">Prefer to speak directly?</h3>
                <p className="text-sm text-ivory-200/70 leading-relaxed mb-6">
                  Our team is available during business hours to discuss your property management
                  or advisory needs. Call us or send a message and we'll respond promptly.
                </p>
                <a href="tel:0115277610" className="btn-gold w-full">
                  Call Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function LandlordsPage() {
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

      <section className="section-padding py-20 bg-ivory-50">
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

export function TenantsPage() {
  return (
    <>
      <Seo
        title="For Tenants | Murivest Lettings"
        description="Find your next home or commercial space with Murivest Lettings. Browse available properties, pay rent online, log maintenance requests and manage your tenancy through our tenant portal."
        path="/tenants"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Tenants', path: '/tenants' }]}
      />
      <PageHero
        label="For Tenants"
        title="A simpler, better tenancy experience"
        subtitle="Find your next home or commercial space, pay rent online, log maintenance requests and manage every aspect of your tenancy through our tenant portal."
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

          {/* Portal features */}
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
                { icon: Target, title: 'Dashboard', desc: 'Overview of your tenancy — rent status, upcoming dates and recent activity.' },
                { icon: ArrowRight, title: 'Pay Rent', desc: 'Secure online rent payment with automatic receipts and payment history.' },
                { icon: ShieldCheck, title: 'Maintenance', desc: 'Log maintenance requests with photos and track progress to resolution.' },
                { icon: Briefcase, title: 'Documents', desc: 'Access your lease agreement, payment receipts and tenancy documents.' },
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
                <ArrowRight className="w-4 h-4" />
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
