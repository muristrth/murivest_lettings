import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

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
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl text-navy-900 mb-6">Send us a message</h2>
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

            {/* Contact Details */}
            <div>
              <h2 className="font-serif text-2xl text-navy-900 mb-6">Contact details</h2>
              <div className="space-y-6 mb-10">
                {[
                  { icon: Phone, label: 'Phone', value: '0115 277 610', href: 'tel:0115277610' },
                  { icon: Mail, label: 'Email', value: 'capital@murivest.com', href: 'mailto:capital@murivest.com' },
                  { icon: MapPin, label: 'Office', value: 'Nairobi, Kenya' },
                  { icon: Clock, label: 'Hours', value: 'Mon–Fri, 8:00 AM – 5:00 PM EAT' },
                ].map((item) => (
                  <div key={item.label} className="border-l border-gold-400/40 pl-5">
                    <div className="label-text text-gold-500 mb-1 flex items-center gap-2">
                      <item.icon className="w-3.5 h-3.5" />
                      {item.label}
                    </div>
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
        secondaryLabel="Browse Services"
        secondaryLink="/services"
      />
    </>
  );
}

export default ContactPage;
