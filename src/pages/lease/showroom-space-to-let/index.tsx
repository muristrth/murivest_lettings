import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, Globe, MapPin as MapPinIcon, Flag, Users as UsersIcon, Plane, Map, Landmark, ShoppingBag, Eye, Car, Truck, Ruler } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LeaseShowroomSpaceToLetPage() {
  return (
    <>
      <Seo
        title="Showroom Space for Lease | Murivest Lettings"
        description="Showroom and display spaces for lease across Kenya's key commercial areas."
        path="/lease/showroom-space-to-let"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties for Lease', path: '/lease' }, { name: 'Showroom Space to Let', path: '/lease/showroom-space-to-let' }]}
      />
      <PageHero
        label="Lease"
        title="Showroom space to let"
        subtitle="Premium showroom spaces in high-visibility locations."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties for Lease', path: '/lease' }, { name: 'Showroom Space to Let', path: '/lease/showroom-space-to-let' }]}
      )

      {/* Showroom Specifications */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Showroom Specifications" title="Designed for display, configured for sales" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Showroom space requires specific attributes: high visibility from main roads, generous
                glazing for product display, adequate ceiling height for vehicle or large-item display,
                customer parking, goods lift access and flexible internal layout. We lease showrooms
                across automotive, furniture, building materials, electronics and luxury goods sectors —
                each with tailored specifications.
              </p>
              <CheckList items={[
                'Frontage: minimum 15m, preferably corner or island site',
                'Glazing: floor-to-ceiling, 60-80% frontage coverage',
                'Height: 4.5m+ clear for vehicle/mezzanine display',
                'Access: ground floor, roller shutter, goods lift for upper floors',
                'Parking: 1 bay per 30-50 sq m GLA, customer + staff',
                'Services: 3-phase power, HVAC, fire suppression, signage zones',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Showroom space"
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
              title="High-visibility corridors for showroom exposure"
              subtitle="Strategic locations on major arterials with high traffic counts and target demographic alignment."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { name: 'Mombasa Road', desc: 'Automotive, building materials, logistics', traffic: '80,000+ vehicles/day', specs: 'Large floorplates, yard access', icon: Car },
                { name: 'Waiyaki Way / Westlands', desc: 'Furniture, electronics, lifestyle, luxury', traffic: '60,000+ vehicles/day', specs: 'High-glazing, premium finish', icon: Eye },
                { name: 'Thika Road / Ruiru', desc: 'Building materials, automotive, wholesale', traffic: '70,000+ vehicles/day', specs: 'Large spans, heavy loading', icon: Truck },
              ].map((location) => (
                <div key={location.name} className="bg-ivory-50 p-6 border border-stone-200">
                  <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                    <location.icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <h3 className="font-serif text-lg text-navy-900 mb-2">{location.name}</h3>
                  <p className="text-xs text-stone-500 mb-2">{location.desc}</p>
                  <p className="text-xs text-gold-500 mb-2">{location.traffic}</p>
                  <p className="text-sm text-navy-700 font-medium">{location.specs}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Seeking showroom or display space?"
        description="Our showroom leasing specialists understand the specific requirements of display-led businesses — visibility, access, height, parking — and match you with spaces that sell."
        primaryLabel="Discuss Showroom Needs"
        primaryLink="/contact"
        secondaryLabel="Retail Space"
        secondaryLink="/lease/retail-space-to-let"
      />
    </>
  );
}

export default LeaseShowroomSpaceToLetPage;