import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, Globe, MapPin as MapPinIcon, Flag, Users as UsersIcon, Plane, Map, Landmark, Clock, CheckCircle, Send, Mail, Phone, Loader2 } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LandlordsSubmitPropertyPage() {
  return (
    <>
      <Seo
        title="Submit Your Property | Murivest Lettings"
        description="Submit your property for management or leasing through our quick online form."
        path="/landlords/submit-property"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Landlords', path: '/landlords' }, { name: 'Submit Property', path: '/landlords/submit-property' }]}
      />
      <PageHero
        label="Landlords"
        title="Submit your property"
        subtitle="Let us help you maximise the value of your property. Submit your details and we'll be in touch within 24 hours."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'For Landlords', path: '/landlords' }, { name: 'Submit Property', path: '/landlords/submit-property' }]}
      )

      {/* Submission Form */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white p-8 lg:p-10">
              <h2 className="font-serif text-2xl text-navy-900 mb-6">Property details</h2>
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="label-text text-stone-500 mb-2 block">Property Name / Address</label>
                    <input type="text" className="input-field" placeholder="e.g. The Prism, Westlands" required />
                  </div>
                  <div>
                    <label className="label-text text-stone-500 mb-2 block">Property Type</label>
                    <select className="input-field" required>
                      <option value="">Select type...</option>
                      <option>Office Building</option>
                      <option>Retail / Mall</option>
                      <option>Industrial / Warehouse</option>
                      <option>Mixed-Use</option>
                      <option>Residential Block</option>
                      <option>Land / Development Site</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="label-text text-stone-500 mb-2 block">Location / Submarket</label>
                    <input type="text" className="input-field" placeholder="e.g. Westlands, Nairobi" required />
                  </div>
                  <div>
                    <label className="label-text text-stone-500 mb-2 block">Total Lettable Area (sq ft)</label>
                    <input type="number" className="input-field" placeholder="e.g. 50,000" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="label-text text-stone-500 mb-2 block">Current Occupancy</label>
                    <select className="input-field">
                      <option value="">Select...</option>
                      <option>Fully Occupied</option>
                      <option>Partially Occupied</option>
                      <option>Vacant</option>
                      <option>Under Development</option>
                    </select>
                  </div>
                  <div>
                    <label className="label-text text-stone-500 mb-2 block">Service Required</label>
                    <select className="input-field" required>
                      <option value="">Select service...</option>
                      <option>Full Property Management</option>
                      <option>Leasing / Tenant Placement Only</option>
                      <option>Lease-Up (New Development)</option>
                      <option>Asset Positioning Advisory</option>
                      <option>Landlord Advisory</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="label-text text-stone-500 mb-2 block">Additional Information</label>
                  <textarea className="input-field min-h-[100px] resize-y" placeholder="Current tenants, lease expiries, known issues, specific requirements..." />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Submit Property
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-stone-400 text-center mt-3">
                  We typically respond within 24 hours. All information is treated confidentially.
                </p>
              </form>
            </div>

            {/* Process Overview */}
            <div>
              <SectionHeader label="Process Overview" title="What happens after you submit" />
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Initial Review', desc: 'Our team reviews your submission within 4 business hours and assigns a dedicated advisor.' },
                  { step: '02', title: 'Desktop Analysis', desc: 'We conduct preliminary market analysis, comparable rent benchmarking and yield modelling.' },
                  { step: '03', title: 'Site Inspection', desc: 'We schedule a physical inspection (virtual option available) within 3 business days.' },
                  { step: '04', title: 'Proposal', desc: 'You receive a tailored service proposal with fee structure, strategy and timeline within 48 hours of inspection.' },
                  { step: '05', title: 'Onboarding', desc: 'Upon acceptance, we execute the management agreement and begin onboarding within 5 business days.', },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-navy-50 flex items-center justify-center rounded-full">
                      <span className="label-text text-navy-700">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-navy-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-stone-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Prefer to speak directly?"
        description="Call our landlord advisory team on 0115 277 610 or email capital@murivest.com for an immediate discussion about your property."
        primaryLabel="Call Us Now"
        primaryLink="tel:0115277610"
        secondaryLabel="Email Us"
        secondaryLink="mailto:capital@murivest.com"
      />
    </>
  );
}

export default LandlordsSubmitPropertyPage;