import { Link } from 'react-router-dom';
import { Factory, Warehouse, Truck, MapPin, ShieldCheck, FileText } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LeasingIndustrialLeasingPage() {
  return (
    <>
      <Seo
        title="Industrial Leasing | Murivest Lettings"
        description="Industrial and warehouse leasing advisory for logistics and manufacturing tenants."
        path="/leasing/industrial-leasing"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Leasing', path: '/leasing' }, { name: 'Industrial Leasing', path: '/leasing/industrial-leasing' }]}
      />
      <PageHero
        label="Leasing"
        title="Industrial leasing"
        subtitle="Specialised industrial leasing services."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Leasing', path: '/leasing' }, { name: 'Industrial Leasing', path: '/leasing/industrial-leasing' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Industrial Focus" title="Warehouse, manufacturing and logistics facilities across Kenya" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Kenya's industrial property market spans established zones like Industrial Area and
                  Mombasa Road to emerging logistics corridors along the Northern and Southern
                  Bypass routes. We advise landlords and tenants across the full spectrum of
                  industrial property — from light manufacturing and warehousing to cold storage
                  and specialised production facilities.
                </p>
                <p>
                  Our industrial leasing team understands the operational requirements that drive
                  location decisions: ceiling heights, loading configurations, power capacity,
                  yard space, and proximity to transport infrastructure. This technical knowledge
                  ensures we match occupiers with facilities that support their business efficiency.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Industrial warehouse facility"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <SectionHeader label="Facility Requirements" title="Technical specifications that matter" />
              <CheckList items={[
                'Clear ceiling heights from 8m to 12m+ for racking systems',
                'Dock-level and grade-level loading doors with levellers',
                'Floor loading capacities for heavy machinery and storage',
                'Three-phase power capacity and backup generator provisions',
                'Yard space for container manoeuvring and vehicle parking',
                'Fire suppression systems and compliance certifications',
                'Cold storage and temperature-controlled environments',
                'Office accommodation and staff welfare facilities',
              ]} />
            </div>
            <div>
              <SectionHeader label="Key Industrial Zones" title="Strategic locations for logistics and manufacturing" />
              <CheckList items={[
                'Industrial Area — established manufacturing and warehousing hub',
                'Mombasa Road — logistics corridor to port and airport',
                'Athi River / EPZ — export-oriented manufacturing zones',
                'Thika Road / Ruiru — northern logistics corridor',
                'Limuru Road — light industrial and warehousing',
                'Kiambu Road — emerging industrial development',
                'Mlolongo / Syokimau — airport-adjacent logistics',
                'Nairobi West / Enterprise Road — established industrial base',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Our Industrial Services"
            title="End-to-end industrial leasing support"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Factory, title: 'Tenant Representation', desc: 'Site search, negotiation and lease structuring for industrial occupiers.' },
              { icon: Warehouse, title: 'Landlord Leasing', desc: 'Marketing, tenant vetting and lease management for industrial property owners.' },
              { icon: MapPin, title: 'Location Analysis', desc: 'Supply chain optimisation and network planning for logistics operators.' },
            ].map((service) => (
              <Link key={service.title} to="/contact" className="card-institutional group p-8">
                <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-5 transition-colors group-hover:bg-gold-400">
                  <service.icon className="w-6 h-6 text-navy-700 transition-colors group-hover:text-navy-950" />
                </div>
                <h3 className="font-serif text-xl text-navy-900 mb-3 transition-colors group-hover:text-navy-700">{service.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Find your ideal industrial facility"
        description="Whether you need a 500sqm warehouse or a 20,000sqm manufacturing campus, our team knows the market."
        primaryLabel="Discuss Requirements"
        primaryLink="/contact"
        secondaryLabel="View Industrial Properties"
        secondaryLink="/properties?type=industrial"
      />
    </>
  );
}

export default LeasingIndustrialLeasingPage;