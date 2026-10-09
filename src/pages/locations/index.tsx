import { Link } from 'react-router-dom';
import { MapPin, Building2, TrendingUp, Users, Factory, Store, Home, Briefcase } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LocationsIndexPage() {
  return (
    <>
      <Seo
        title="Property Locations | Murivest Lettings"
        description="Properties across Nairobi's key locations including Westlands, Kilimani, Riverside, Upper Hill, Lavington and more."
        path="/locations"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }]}
      />
      <PageHero
        label="Locations"
        title="Property locations"
        subtitle="Properties across Nairobi's key commercial districts."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Location Overview" title="Nairobi's diverse property landscape" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Nairobi's property market is defined by distinct districts, each with its own
                  character, tenant profile, rental dynamics and investment fundamentals. From
                  the established financial centre of Upper Hill to the leafy residential
                  suburbs of Lavington and Riverside, to the bustling mixed-use hubs of
                  Westlands and Kilimani — every location offers unique opportunities.
                </p>
                <p>
                  Our location guides provide detailed intelligence on each district: market
                  rents, vacancy trends, development pipelines, infrastructure projects,
                  demographic profiles and the property types that perform best. This granular
                  knowledge helps landlords position assets and tenants select optimal locations.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Nairobi cityscape"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { path: '/locations/westlands', name: 'Westlands', icon: Briefcase, desc: 'Premier mixed-use district', props: 'Office, Retail, Residential' },
              { path: '/locations/kilimani', name: 'Kilimani', icon: Building2, desc: 'High-density urban living', props: 'Residential, Commercial' },
              { path: '/locations/upper-hill', name: 'Upper Hill', icon: Briefcase, desc: 'Financial & diplomatic hub', props: 'Office, Institutional' },
              { path: '/locations/riverside', name: 'Riverside', icon: Home, desc: 'Leafy premium suburb', props: 'Residential, Office' },
              { path: '/locations/lavington', name: 'Lavington', icon: Home, desc: 'Upscale residential', props: 'Residential, Boutique Office' },
              { path: '/locations/kileleshwa', name: 'Kileleshwa', icon: Building2, desc: 'Established residential', props: 'Residential, Commercial' },
              { path: '/locations/nairobi-cbd', name: 'Nairobi CBD', icon: Building2, desc: 'Historic commercial core', props: 'Office, Retail, Industrial' },
              { path: '/locations/mombasa-road', name: 'Mombasa Road', icon: Factory, desc: 'Logistics corridor', props: 'Industrial, Warehouse, Office' },
              { path: '/locations/industrial-area', name: 'Industrial Area', icon: Factory, desc: 'Manufacturing heartland', props: 'Industrial, Warehouse' },
            ].map((loc) => (
              <Link key={loc.name} to={loc.path} className="card-institutional group p-6">
                <div className="w-10 h-10 bg-navy-50 flex items-center justify-center mb-4 transition-colors group-hover:bg-gold-400">
                  <loc.icon className="w-5 h-5 text-navy-700 transition-colors group-hover:text-navy-950" />
                </div>
                <h3 className="font-serif text-lg text-navy-900 mb-1 group-hover:text-navy-700">{loc.name}</h3>
                <p className="text-xs text-stone-500 mb-2">{loc.desc}</p>
                <p className="text-xs text-gold-500 font-medium">{loc.props}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Key Districts"
            title="District profiles at a glance"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <h4 className="font-serif text-lg text-navy-900 mb-4">Prime Office Districts</h4>
              <CheckList items={[
                'Upper Hill — Financial services, diplomatic missions',
                'Westlands — Tech, creative, professional services',
                'CBD — Government, banking, established corporates',
                'Riverside — NGOs, embassies, premium occupiers',
              ]} />
            </div>
            <div>
              <h4 className="font-serif text-lg text-navy-900 mb-4">Residential & Mixed-Use</h4>
              <CheckList items={[
                'Kilimani — High-density apartments, retail ground floors',
                'Lavington — Low-rise luxury, diplomatic housing',
                'Kileleshwa — Established family neighbourhood',
                'Riverside — Premium apartments, riverside living',
              ]} />
            </div>
            <div>
              <h4 className="font-serif text-lg text-navy-900 mb-4">Industrial & Logistics</h4>
              <CheckList items={[
                'Industrial Area — Manufacturing, light engineering',
                'Mombasa Road — Warehousing, logistics, cold storage',
                'Athi River/EPZ — Export manufacturing',
                'Thika Road — Emerging logistics corridor',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Explore properties by location"
        description="Browse available properties in your preferred district or contact us for location-specific market intelligence."
        primaryLabel="View All Properties"
        primaryLink="/properties"
        secondaryLabel="Request Location Report"
        secondaryLink="/contact"
      />
    </>
  );
}

export default LocationsIndexPage;