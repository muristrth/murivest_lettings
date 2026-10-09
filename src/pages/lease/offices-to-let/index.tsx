import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, Globe, MapPin as MapPinIcon, Flag, Users as UsersIcon, Plane, Map, Landmark, Building, Wifi, Coffee, Car, Shield as ShieldIcon } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LeaseOfficesToLetPage() {
  return (
    <>
      <Seo
        title="Offices for Lease | Murivest Lettings"
        description="Office spaces for lease across Nairobi and Kenya. Grade-A and mid-grade office buildings available."
        path="/lease/offices-to-let"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties for Lease', path: '/lease' }, { name: 'Offices to Let', path: '/lease/offices-to-let' }]}
      />
      <PageHero
        label="Lease"
        title="Offices to let"
        subtitle="Office spaces across Nairobi's key business districts."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties for Lease', path: '/lease' }, { name: 'Offices to Let', path: '/lease/offices-to-let' }]}
      )

      {/* Office Buildings */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Office Buildings" title="Grade-A to mid-grade office accommodation" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Nairobi's office market offers a spectrum from iconic Grade-A landmarks to well-managed
                mid-grade buildings. We lease space across the quality spectrum — from fully-fitted
                plug-and-play suites to shell & core floors for custom fit-out. All buildings under
                our management meet institutional standards: 24/7 security, backup power, fibre
                connectivity, modern HVAC and professional reception.
              </p>
              <CheckList items={[
                'Grade-A: The Prism, Delta Corner, Two Rivers, Britam Tower',
                'Prime Grade-B: Lavington, Kilimani, Riverside, Westlands',
                'Flexible terms: 3-6 years, break options, fitted suites available',
                'Plug-and-play: furnished, cabled, meeting rooms, reception',
                'Shell & core: tenant fit-out with landlord contribution',
                'Green buildings: EDGE, LEED, Green Star certified options',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Office building"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Floorplates & Amenities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Floorplates</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Typical floorplate configurations by building grade.
              </p>
              <CheckList items={[
                'Grade-A: 1,500-3,000 sq m, column-free, raised floor',
                'Grade-B: 500-1,500 sq m, efficient cores, good daylight',
                'Sub-divisible: demisable from 150 sq m with separate access',
                'Efficiency: 80-85% net-to-gross on modern buildings',
                'Floor loading: 3-5 kN/sq m standard, higher on request',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Wifi className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Amenities</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Building amenities that support modern workplace needs.
              </p>
              <CheckList items={[
                'Connectivity: multiple fibre providers, 5G ready, backup',
                'Power: 100% backup generation, UPS for critical loads',
                'Wellness: showers, bike storage, green space, gym access',
                'F&B: ground floor cafes, restaurants, catering kitchens',
                'Transport: basement parking, EV charging, shuttle access',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Looking for office space?"
        description="Our office leasing specialists match your headcount, budget, location and amenity requirements with the best available options — from single floors to entire buildings."
        primaryLabel="Submit Office Requirements"
        primaryLink="/contact"
        secondaryLabel="Browse Office Listings"
        secondaryLink="/properties"
      />
    </>
  );
}

export default LeaseOfficesToLetPage;