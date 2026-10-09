import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, Globe, MapPin as MapPinIcon, Flag, Users as UsersIcon, Plane, Map, Landmark, Building, Factory, ShoppingBag, Home, LandPlot } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

const PROPERTY_CATEGORIES = [
  { slug: 'offices-to-let', icon: Building, title: 'Offices to Let', desc: 'Grade-A and mid-grade office space across Nairobi\'s key business districts.', count: '47 listings' },
  { slug: 'retail-space-to-let', icon: ShoppingBag, title: 'Retail Space to Let', desc: 'Prime retail locations in malls and high streets across Kenya.', count: '32 listings' },
  { slug: 'industrial-property-to-let', icon: Factory, title: 'Industrial Property to Let', desc: 'Warehouse and logistics facilities across industrial corridors.', count: '28 listings' },
  { slug: 'warehouses-to-let', icon: Factory, title: 'Warehouses to Let', desc: 'High-bay warehouse facilities with yard and loading bays.', count: '24 listings' },
  { slug: 'commercial-property-to-let', icon: Building2, title: 'Commercial Property to Let', desc: 'Mixed commercial buildings with office and retail components.', count: '19 listings' },
  { slug: 'mixed-use-property-to-let', icon: Home, title: 'Mixed-Use Property to Let', desc: 'Properties combining residential, office and retail uses.', count: '15 listings' },
  { slug: 'showroom-space-to-let', icon: ShoppingBag, title: 'Showroom Space to Let', desc: 'High-visibility showroom and display spaces.', count: '11 listings' },
  { slug: 'land-to-let', icon: LandPlot, title: 'Land to Let', desc: 'Commercial land and development sites for lease.', count: '8 listings' },
];

export function LeaseIndexPage() {
  return (
    <>
      <Seo
        title="Commercial Property for Lease | Murivest Lettings"
        description="Browse commercial properties for lease across Kenya including offices, retail, warehouse and industrial space."
        path="/lease"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties for Lease', path: '/lease' }]}
      />
      <PageHero
        label="Lease"
        title="Properties for lease"
        subtitle="Commercial properties available for lease across Kenya."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties for Lease', path: '/lease' }]}
      )

      {/* Property Categories */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Property Categories"
            title="Commercial space for every business need"
            subtitle="Eight property categories, each with dedicated leasing specialists who understand the specific requirements of that sector."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {PROPERTY_CATEGORIES.map((category) => {
              const Icon = (() => {
                switch (category.icon) {
                  case Building: return Building;
                  case ShoppingBag: return ShoppingBag;
                  case Factory: return Factory;
                  case Building2: return Building2;
                  case Home: return Home;
                  case LandPlot: return MapPin;
                  default: return Building2;
                }
              })();
              return (
                <Link
                  key={category.slug}
                  to={`/lease/${category.slug}`}
                  className="bg-white border border-stone-200 p-8 hover:border-gold-400 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <h3 className="font-serif text-lg text-navy-900 mb-2">{category.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed mb-3">{category.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="label-text text-gold-500">{category.count}</span>
                    <span className="text-sm font-medium text-gold-500">View Listings <ArrowRight className="w-3.5 h-3.5 ml-1" /></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Overview */}
      <section className="section-padding py-20 lg:py-28 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Location Overview"
            title="Prime commercial locations across Kenya"
            subtitle="Our leasing portfolio spans Kenya's key commercial hubs — each with distinct dynamics, rental levels and occupier profiles."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { name: 'Nairobi', areas: ['Westlands', 'Upper Hill', 'Kilimani', 'CBD', 'Gigiri', 'Karen'], icon: Building2 },
              { name: 'Mombasa', areas: ['Nyali', 'CBD', 'Changamwe', 'Mtwapa'], icon: MapPin },
              { name: 'Kisumu', areas: ['CBD', 'Milimani', 'Kibos'], icon: MapPin },
              { name: 'Other Towns', areas: ['Eldoret', 'Nakuru', 'Thika', 'Naivasha', 'Kitengela'], icon: MapPin },
            ].map((location) => (
              <div key={location.name} className="bg-ivory-50 p-8 border border-stone-200">
                <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                  <location.icon className="w-6 h-6 text-navy-700" />
                </div>
                <h3 className="font-serif text-lg text-navy-900 mb-3">{location.name}</h3>
                <ul className="space-y-1 text-sm text-stone-500">
                  {location.areas.map((area) => (
                    <li key={area} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Looking for commercial space?"
        description="Our leasing specialists work with you to understand your requirements and match you with suitable properties — saving you time and securing better terms."
        primaryLabel="Submit Your Requirements"
        primaryLink="/contact"
        secondaryLabel="Browse All Listings"
        secondaryLink="/properties"
      />
    </>
  );
}

export default LeaseIndexPage;