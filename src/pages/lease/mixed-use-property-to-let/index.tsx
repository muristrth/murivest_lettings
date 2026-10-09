import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, Globe, MapPin as MapPinIcon, Flag, Users as UsersIcon, Plane, Map, Landmark, Home, Building, ShoppingBag, Users as UsersIcon2 } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LeaseMixedUsePropertyToLetPage() {
  return (
    <>
      <Seo
        title="Mixed-Use Property for Lease | Murivest Lettings"
        description="Mixed-use commercial properties for lease combining retail, office and residential components."
        path="/lease/mixed-use-property-to-let"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties for Lease', path: '/lease' }, { name: 'Mixed-Use Property to Let', path: '/lease/mixed-use-property-to-let' }]}
      />
      <PageHero
        label="Lease"
        title="Mixed-use property to let"
        subtitle="Mixed-use properties combining multiple uses in prime locations."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties for Lease', path: '/lease' }, { name: 'Mixed-Use Property to Let', path: '/lease/mixed-use-property-to-let' }]}
      )

      {/* Property Mix */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Property Mix" title="Integrated environments for live-work-play" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Mixed-use developments create synergies between residential, office and retail uses —
                generating footfall for retailers, convenience for residents and amenity for office workers.
                We lease space in managed mixed-use schemes where service charges, common areas and
                tenant mix are actively curated to maximise value for all occupiers.
              </p>
              <CheckList items={[
                'Retail podium: F&B, convenience, services, experiential',
                'Office towers: Grade-A, flexible floors, dedicated lobbies',
                'Residential: serviced apartments, build-to-rent, owner-occupier',
                'Shared amenities: parking, landscaping, security, BMS',
                'Managed tenant mix: complementary uses, conflict avoidance',
                'Single service charge: transparent apportionment, annual audit',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Mixed-use property"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Location Benefits */}
          <div className="bg-white border border-stone-200 p-10 lg:p-12">
            <SectionHeader
              label="Location Benefits"
              title="Prime nodes with inherent mixed-use demand"
              subtitle="Locations where live-work-play dynamics are already established or emerging."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { name: 'Westlands', mix: 'Office + Retail + Residential', driver: 'Expat density, corporate HQs, nightlife', icon: Building },
                { name: 'Kilimani', mix: 'Residential + Retail + Office', driver: 'High-density living, walkability, amenities', icon: Home },
                { name: 'Upper Hill', mix: 'Office + Retail + Hotel', driver: 'Corporate & diplomatic, daytime population', icon: Building2 },
              ].map((location) => (
                <div key={location.name} className="bg-ivory-50 p-6 border border-stone-200">
                  <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                    <location.icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <h3 className="font-serif text-lg text-navy-900 mb-2">{location.name}</h3>
                  <p className="text-xs text-stone-500 mb-2"><strong>Mix:</strong> {location.mix}</p>
                  <p className="text-sm text-navy-700 font-medium">{location.driver}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Seeking space in a mixed-use environment?"
        description="Our leasing team understands the nuances of mixed-use schemes — service charge apportionment, use restrictions, synergy benefits — and matches you to the right component."
        primaryLabel="Discuss Your Requirements"
        primaryLink="/contact"
        secondaryLabel="Commercial Property to Let"
        secondaryLink="/lease/commercial-property-to-let"
      />
    </>
  );
}

export default LeaseMixedUsePropertyToLetPage;