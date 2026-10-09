import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, Globe, MapPin as MapPinIcon, Flag, Users as UsersIcon, Plane, Map, Landmark, Warehouse, Truck, Zap, Ruler, Shield as ShieldIcon } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LeaseWarehousesToLetPage() {
  return (
    <>
      <Seo
        title="Warehouses for Lease | Murivest Lettings"
        description="Warehouse and distribution properties for lease across Kenya's industrial zones."
        path="/lease/warehouses-to-let"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties for Lease', path: '/lease' }, { name: 'Warehouses to Let', path: '/lease/warehouses-to-let' }]}
      />
      <PageHero
        label="Lease"
        title="Warehouses to let"
        subtitle="High-bay warehouse facilities across Kenya."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties for Lease', path: '/lease' }, { name: 'Warehouses to Let', path: '/lease/warehouses-to-let' }]}
      )

      {/* Warehouse Specifications */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Warehouse Specifications" title="Modern logistics facilities for efficient operations" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Modern warehousing demands more than four walls and a roof. Today's occupiers require
                high clear heights for multi-level racking, heavy floor loading for MHE, multiple
                dock levellers for cross-docking, yard depth for trailer staging, office accommodation
                for management teams and robust power for automation. We lease facilities that meet
                these specifications across Kenya's key logistics corridors.
              </p>
              <CheckList items={[
                'Clear height: 10-12m for 3-4 level racking',
                'Floor loading: 5-10 kN/sq m for heavy MHE',
                'Dock levellers: 1 per 1,000-1,500 sq m, levelled',
                'Yard depth: 35-45m for trailer manoeuvring',
                'Column grid: 11-12m bays for racking optimisation',
                'Power: 300-500kVA 3-phase, scalable, backup ready',
                'Fire: ESFR sprinklers, detection, compartmentation',
                'Office: 10-15% GLA, fitted, AC, separate entrance',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Warehouse facility"
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
              title="Logistics corridors with multi-modal connectivity"
              subtitle="Warehouse clusters on major transport arteries with port, airport and market access."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                { name: 'Mombasa Road', desc: 'JKIA, SGR, Port access', specs: 'Grade-A logistics parks, cold chain', icon: Zap },
                { name: 'Athi River / EPZ', desc: 'Highway, SGR, affordable', specs: 'Manufacturing, distribution, bonded', icon: Warehouse },
                { name: 'Ruiru / Thika Rd', desc: 'Northern corridor, residential', specs: 'Last-mile, light industrial, 3PL', icon: Truck },
                { name: 'Naivasha ICD', desc: 'SGR dry port, agro-export', specs: 'Cold storage, consolidation, bonded', icon: Ruler },
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
        title="Seeking warehouse or distribution space?"
        description="Our industrial leasing team understands the operational specs that drive logistics efficiency — height, loading, power, yard, docks — and matches you with facilities that perform."
        primaryLabel="Discuss Warehouse Requirements"
        primaryLink="/contact"
        secondaryLabel="Industrial Property"
        secondaryLink="/lease/industrial-property-to-let"
      />
    </>
  );
}

export default LeaseWarehousesToLetPage;