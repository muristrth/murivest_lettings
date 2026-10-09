import { Link } from 'react-router-dom';
import {
  ArrowRight, Landmark, GraduationCap, PieChart, Stethoscope, Hotel,
  Factory, Cpu, LayoutGrid, HeartHandshake, Building2, Briefcase,
  ShoppingBag, Laptop,
} from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader } from '@/components/ui';

const SECTORS = [
  { slug: 'diplomatic', icon: Landmark, title: 'Diplomatic Properties', tagline: 'Embassies, high commissions and diplomatic missions.', href: '/sectors/diplomatic' },
  { slug: 'education', icon: GraduationCap, title: 'Education', tagline: 'Schools, universities and educational institutions.', href: '/sectors/education' },
  { slug: 'financial-services', icon: PieChart, title: 'Financial Services', tagline: 'Banks, insurers and financial institutions.', href: '/sectors/financial-services' },
  { slug: 'healthcare', icon: Stethoscope, title: 'Healthcare', tagline: 'Hospitals, clinics and healthcare providers.', href: '/sectors/healthcare' },
  { slug: 'hospitality', icon: Hotel, title: 'Hospitality', tagline: 'Hotels, serviced apartments and leisure venues.', href: '/sectors/hospitality' },
  { slug: 'industrial-logistics', icon: Factory, title: 'Industrial & Logistics', tagline: 'Warehouses, logistics hubs and industrial facilities.', href: '/sectors/industrial-logistics' },
  { slug: 'manufacturing', icon: Cpu, title: 'Manufacturing', tagline: 'Factories, plants and production facilities.', href: '/sectors/manufacturing' },
  { slug: 'mixed-use', icon: LayoutGrid, title: 'Mixed-Use', tagline: 'Integrated developments combining multiple uses.', href: '/sectors/mixed-use' },
  { slug: 'ngos-development', icon: HeartHandshake, title: 'NGOs & Development', tagline: 'Non-profits and international development agencies.', href: '/sectors/ngos-development' },
  { slug: 'office', icon: Building2, title: 'Office', tagline: 'Grade-A and mid-grade office buildings.', href: '/sectors/office' },
  { slug: 'professional-services', icon: Briefcase, title: 'Professional Services', tagline: 'Law firms, consultancies and advisory practices.', href: '/sectors/professional-services' },
  { slug: 'retail', icon: ShoppingBag, title: 'Retail', tagline: 'Shopping centres, high-street and neighbourhood retail.', href: '/sectors/retail' },
  { slug: 'technology', icon: Laptop, title: 'Technology', tagline: 'Tech offices, data centres and innovation hubs.', href: '/sectors/technology' },
];

export function SectorsIndexPage() {
  return (
    <>
      <Seo
        title="Property Sectors | Murivest Lettings"
        description="Property services across all commercial sectors including office, retail, industrial, hospitality and more. Institutional property management and advisory in Kenya."
        path="/sectors"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }]}
      />
      <PageHero
        label="Sectors"
        title="Property sectors"
        subtitle="Specialised services across every commercial property sector."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }]}
      />

      {/* Sector Grid */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Commercial Sectors"
            title="Specialised services across property sectors"
            subtitle="Each commercial property segment brings distinct requirements — from security protocols in diplomatic missions to clinical standards in healthcare. Our sector teams apply institutional rigour while understanding the nuances of each market."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 mt-12">
            {SECTORS.map((sector) => (
              <Link
                key={sector.slug}
                to={sector.href}
                className="group bg-white p-8 transition-all duration-500 hover:bg-navy-950 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-gold-400">
                  <sector.icon className="w-6 h-6 text-navy-700 transition-colors duration-300 group-hover:text-navy-950" />
                </div>
                <h3 className="font-serif text-xl text-navy-900 mb-3 transition-colors duration-300 group-hover:text-ivory-50">
                  {sector.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed transition-colors duration-300 group-hover:text-ivory-200/70 mb-4">
                  {sector.tagline}
                </p>
                <div className="flex items-center gap-2 text-xs font-medium text-gold-500 transition-colors duration-300 group-hover:text-gold-300">
                  Explore sector
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need sector-specific expertise?"
        description="Each of our sector teams combines local market knowledge with institutional standards to deliver tailored property services across Kenya."
        primaryLabel="Discuss Requirements"
        primaryLink="/contact"
        secondaryLabel="View Properties"
        secondaryLink="/properties"
      />
    </>
  );
}

export default SectorsIndexPage;
