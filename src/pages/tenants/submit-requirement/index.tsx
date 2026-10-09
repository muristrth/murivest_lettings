import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Building, CreditCard, Calendar, User, Briefcase, ArrowRight } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function TenantsSubmitRequirementPage() {
  return (
    <>
      <Seo
        title="Submit Your Requirements | Murivest Lettings"
        description="Let us find the right property for you. Submit your requirements and our team will curate suitable options including off-market and upcoming availability."
        path="/tenants/submit-requirement"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'For Tenants', path: '/tenants' },
          { name: 'Submit Requirements', path: '/tenants/submit-requirement' }
        ]}
      />
      <PageHero
        label="Tenants"
        title="Submit your requirements"
        subtitle="Let us find the right property for you."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'For Tenants', path: '/tenants' },
          { name: 'Submit Requirements', path: '/tenants/submit-requirement' }
        ]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <SectionHeader label="Requirements Form" title="Tell us what you're looking for" />
              <p className="text-stone-500 leading-relaxed mb-8">
                The more detail you provide, the better we can match you to suitable properties — including those not yet publicly listed.
              </p>
              <form className="space-y-6 bg-white border border-stone-200 p-6 lg:p-8" onSubmit={(e) => { e.preventDefault(); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="label-text text-stone-500 mb-2 block">Full Name</label>
                    <input type="text" className="input-field" placeholder="John Mwangi" required />
                  </div>
                  <div>
                    <label className="label-text text-stone-500 mb-2 block">Email</label>
                    <input type="email" className="input-field" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="label-text text-stone-500 mb-2 block">Phone</label>
                    <input type="tel" className="input-field" placeholder="07XX XXX XXX" required />
                  </div>
                  <div>
                    <label className="label-text text-stone-500 mb-2 block">Company (if corporate)</label>
                    <input type="text" className="input-field" placeholder="ABC Ltd" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="label-text text-stone-500 mb-2 block">Property Type</label>
                    <select className="input-field" required>
                      <option value="">Select type...</option>
                      <option value="apartment">Apartment</option>
                      <option value="house">House / Villa</option>
                      <option value="commercial">Commercial / Office</option>
                      <option value="retail">Retail Space</option>
                      <option value="any">Any</option>
                    </select>
                  </div>
                  <div>
                    <label className="label-text text-stone-500 mb-2 block">Bedrooms / Size</label>
                    <select className="input-field">
                      <option value="">Any</option>
                      <option value="studio">Studio</option>
                      <option value="1">1 Bedroom</option>
                      <option value="2">2 Bedrooms</option>
                      <option value="3">3 Bedrooms</option>
                      <option value="4+">4+ Bedrooms</option>
                      <option value="custom">Custom (specify in notes)</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="label-text text-stone-500 mb-2 block">Budget (KES/month)</label>
                    <select className="input-field">
                      <option value="">Any</option>
                      <option value="0-50000">Up to 50,000</option>
                      <option value="50000-100000">50,000 - 100,000</option>
                      <option value="100000-200000">100,000 - 200,000</option>
                      <option value="200000-500000">200,000 - 500,000</option>
                      <option value="500000+">500,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="label-text text-stone-500 mb-2 block">Preferred Areas</label>
                    <input type="text" className="input-field" placeholder="Westlands, Kilimani, Lavington..." />
                  </div>
                </div>
                <div>
                  <label className="label-text text-stone-500 mb-2 block">Move-in Timeline</label>
                  <select className="input-field">
                    <option value="">Select...</option>
                    <option value="immediate">Immediate</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                <div>
                  <label className="label-text text-stone-500 mb-2 block">Additional Requirements</label>
                  <textarea className="input-field min-h-[100px] resize-y" placeholder="Parking, security, pet policy, furnishings, floor preference, amenities, etc." />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Submit Requirements
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-stone-400 text-center">
                  We'll acknowledge receipt within 4 hours and revert with a curated shortlist within 2 business days.
                </p>
              </form>
            </div>
            <div>
              <div className="bg-navy-950 p-8 h-full">
                <SectionHeader label="What Happens Next" title="Our matching process" light />
                <CheckList items={[
                  'We acknowledge your brief within 4 business hours',
                  'Our team searches active, upcoming and off-market inventory',
                  'You receive a curated shortlist with comparison analysis',
                  'We arrange viewings at your convenience — virtual or in-person',
                  'We support negotiation, lease review and move-in coordination',
                ]} light />
              </div>
            </div>
          </div>

          <div className="bg-white border border-stone-200 p-10 lg:p-12">
            <SectionHeader
              label="Why Use Our Search Service"
              title="More than a property portal"
              subtitle="Access, insight and advocacy — not just listings."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: Building, title: 'Off-Market Access', desc: 'Properties not yet advertised — landlord-direct and pre-launch opportunities.' },
                { icon: ShieldCheck, title: 'Vetted Quality', desc: 'Every property pre-inspected for condition, compliance and management standards.' },
                { icon: User, title: 'Dedicated Consultant', desc: 'One point of contact who understands your brief and advocates for you.' },
              ].map((feature) => (
                <div key={feature.title} className="text-center">
                  <div className="w-14 h-14 bg-navy-50 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <h3 className="font-serif text-lg text-navy-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Prefer to browse first?"
        description="View our current available properties online, then submit requirements for a more targeted search."
        primaryLabel="Browse Properties"
        primaryLink="/properties"
        secondaryLabel="Contact Us"
        secondaryLink="/contact"
      />
    </>
  );
}

export default TenantsSubmitRequirementPage;