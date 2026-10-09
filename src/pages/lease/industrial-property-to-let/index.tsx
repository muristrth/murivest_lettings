import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, Globe, MapPin as MapPinIcon, Flag, Users as UsersIcon, Plane, Map, Landmark, Factory, Truck, Warehouse, Zap } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LeaseIndustrialPropertyToLetPage() {
  return (
    <>
      <Seo
        title="Industrial Property for Lease | Murivest Lettings"
        description="Industrial and warehouse properties for lease across Kenya's industrial corridors."
        path="/lease/industrial-property-to-let"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties for Lease', path: '/lease' }, { name: 'Industrial Property to Let', path: '/lease/industrial-property-to-let' }]}
      />
      <PageHero
        label="Lease"
        title="Industrial property to let"
        subtitle="High-bay industrial and warehouse facilities across Kenya."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties for Lease', path: '/lease' }, { name: 'Industrial Property to Let', path: '/lease/industrial-property-to-let' }]}
      )

      {/* Facility Specifications */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Facility Specifications" title="Modern industrial space for evolving operations" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Kenya's industrial property market is modernising rapidly. We manage and lease facilities
                that meet contemporary operational requirements: high clear heights for racking, heavy
                power supply, good yard circulation, modern loading docks, office accommodation and
                compliance with NEMA, NCA and fire regulations. Locations span the key corridors:
                Mombasa Road, Athi River, Ruiru, Thika Road and Naivasha.
              </p>
              <CheckList items={[
                'Clear height: 8-12m for racking & mezzanine',
                'Power: 3-phase, 200-500kVA available',
                'Loading: dock levellers, roller shutters, ramp access',
                'Yard: concrete surfacing, circulation, parking',
                'Office: 10-20% of GLA, fitted, air-conditioned',
                'Compliance: fire, NEMA, NCA, structural certification',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Industrial property"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="bg-white border border-stone-200 p-10 lg:p-12">
            <SectionHeader
              label="Locations"
              title="Industrial corridors with connectivity"
              subtitle="Strategic locations on major transport arteries with port, airport and market access."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                { name: 'Mombasa Road', desc: 'Port access, SGR, JKIA proximity', specs: 'Prime logistics, cold storage', icon: Truck },
                { name: 'Athi River / Kitengela', desc: 'EPZ zone, highway, affordable land', specs: 'Manufacturing, warehousing', icon: Factory },
                { name: 'Ruiru / Thika Road', desc: 'Nairobi North, residential catchment', specs: 'Light industrial, distribution', icon: Warehouse },
                { name: 'Naivasha', desc: 'SGR dry port, agro-processing', specs: 'Logistics, cold chain, manufacturing', icon: Zap },
              ].map((location) => (
                <div key={location.name} className="bg-ivory-50 p-6 border border-stone-200">
                  <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                    <location.icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <h3 className="font-serif text-lg text-navy-900 mb-2">{location.name}</h3>
                  <p className="text-xs text-stone-500 mb-2">{location.desc}</p>
                  <p className="text-sm text-navy-700 font-medium">{location.specs}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Seeking industrial or warehouse space?"
        description="Our industrial leasing specialists understand operational requirements — power, height, loading, compliance — and match you with facilities that work."
        primaryLabel="Discuss Your Requirements"
        primaryLink="/contact"
        secondaryLabel="Warehouses to Let"
        secondaryLink="/lease/warehouses-to-let"
      />
    </>
  );
}

export default LeaseIndustrialPropertyToLetPage;