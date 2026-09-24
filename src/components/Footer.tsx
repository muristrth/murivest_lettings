import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { SERVICES, SITE_CONFIG } from '@/lib/data';
import { SITE_CONFIG as SC } from '@/lib/seo';

export function Footer() {
  return (
    <footer className="bg-navy-950 text-ivory-100">
      <div className="section-padding pt-20 pb-8">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gold-400 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-navy-950" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg text-ivory-50 leading-none tracking-wide">MURIVEST</span>
                  <span className="label-text text-gold-300 leading-none mt-1" style={{ fontSize: '0.625rem' }}>LETTINGS</span>
                </div>
              </Link>
              <p className="text-sm text-stone-400 leading-relaxed mb-6">
                The property management, leasing and advisory division of Murivest Group Ltd.
                Connecting the complete property lifecycle with institutional competence.
              </p>
              <div className="flex flex-col gap-3 text-sm">
                <a href={`tel:${SC.phone}`} className="flex items-center gap-3 text-stone-300 hover:text-gold-300 transition-colors">
                  <Phone className="w-4 h-4 text-gold-400" />
                  {SC.phone}
                </a>
                <a href={`mailto:${SC.email}`} className="flex items-center gap-3 text-stone-300 hover:text-gold-300 transition-colors">
                  <Mail className="w-4 h-4 text-gold-400" />
                  {SC.email}
                </a>
                <div className="flex items-center gap-3 text-stone-300">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  {SC.address.locality}, {SC.address.country}
                </div>
              </div>
            </div>

            <div>
              <h4 className="label-text text-gold-300 mb-5">Services</h4>
              <ul className="space-y-3">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="text-sm text-stone-300 hover:text-gold-300 transition-colors link-underline"
                    >
                      {s.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="label-text text-gold-300 mb-5">Company</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-sm text-stone-300 hover:text-gold-300 transition-colors">About Us</Link></li>
                <li><Link to="/properties" className="text-sm text-stone-300 hover:text-gold-300 transition-colors">Properties</Link></li>
                <li><Link to="/landlords" className="text-sm text-stone-300 hover:text-gold-300 transition-colors">For Landlords</Link></li>
                <li><Link to="/tenants" className="text-sm text-stone-300 hover:text-gold-300 transition-colors">For Tenants</Link></li>
                <li><Link to="/contact" className="text-sm text-stone-300 hover:text-gold-300 transition-colors">Contact</Link></li>
              </ul>
              <h4 className="label-text text-gold-300 mt-8 mb-5">Portals</h4>
              <ul className="space-y-3">
                <li><Link to="/portal/landlord" className="text-sm text-stone-300 hover:text-gold-300 transition-colors">Landlord Portal</Link></li>
                <li><Link to="/portal/tenant" className="text-sm text-stone-300 hover:text-gold-300 transition-colors">Tenant Portal</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="label-text text-gold-300 mb-5">Get in touch</h4>
              <p className="text-sm text-stone-400 leading-relaxed mb-5">
                Speak with our team about your property management or advisory needs.
              </p>
              <Link to="/contact" className="btn-outline-light w-full mb-4">
                Request a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-stone-500 leading-relaxed">
                A division of Murivest Group Ltd.
                <br />
                Registered in {SC.address.country}.
              </p>
            </div>
          </div>

          <div className="border-t border-navy-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-stone-500">
              © {new Date().getFullYear()} {SC.legalName}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/terms" className="text-xs text-stone-500 hover:text-gold-300 transition-colors">Terms</Link>
              <Link to="/privacy" className="text-xs text-stone-500 hover:text-gold-300 transition-colors">Privacy</Link>
              <Link to="/cookies" className="text-xs text-stone-500 hover:text-gold-300 transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
