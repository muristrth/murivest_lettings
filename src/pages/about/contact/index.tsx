import { Seo } from '@/components/Seo';
import { PageHero, CtaBand } from '@/components/ui';
import { ArrowRight } from 'lucide-react';

export function AboutContactPage() {
  return (
    <>
      <Seo
        title="Contact Our Team | Murivest Lettings"
        description="Contact the Murivest Lettings advisory and management team. We typically respond within one business day."
        path="/about/contact"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }, { name: 'Contact', path: '/about/contact' }]}
      />
      <PageHero
        label="Contact"
        title="Speak with our team"
        subtitle="Whether you're a landlord, tenant or investor, we're here to discuss your property needs."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }, { name: 'Contact', path: '/about/contact' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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

      <CtaBand
        title="Need immediate assistance?"
        description="For urgent property management issues, call us directly during business hours."
        primaryLabel="Call Now"
        primaryLink="tel:0115277610"
        secondaryLabel="Send Email"
        secondaryLink="mailto:capital@murivest.com"
      />
    </>
  );
}

export default AboutContactPage;
