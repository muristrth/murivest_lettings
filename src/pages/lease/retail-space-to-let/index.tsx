import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, Globe, MapPin as MapPinIcon, Flag, Users as UsersIcon, Plane, Map, Landmark, ShoppingBag, Store, Users as UsersIcon2, MapPin as MapPin2 } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LeaseRetailSpaceToLetPage() {
  return (
    <>
      <Seo
        title="Retail Space for Lease | Murivest Lettings"
        description="Retail spaces for lease in prime Nairobi locations including Westlands, Kilimani and other key districts."
        path="/lease/retail-space-to-let"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties for Lease', path: '/lease' }, { name: 'Retail Space to Let', path: '/lease/retail-space-to-let' }]}
      />
      <PageHero
        label="Lease"
        title="Retail space to let"
        subtitle="Prime retail locations across Kenya."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties for Lease', path: '/lease' }, { name: 'Retail Space to Let', path: '/lease/retail-space-to-let' }]}
      )

      {/* Retail Locations */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Retail Locations" title="High-footfall locations for every retail format" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Kenya's retail landscape spans regional malls, neighbourhood centres, high-street parades
                and standalone showrooms. We lease space across the format spectrum — from 50 sq m
                boutique units to 5,000 sq m anchor spaces. Our retail leasing team understands the
                nuances: turnover rent structures, fit-out periods, trading hour flexibility, signage
                rights and tenant mix protection.
              </p>
              <CheckList items={[
                'Regional malls: Two Rivers, Garden City, The Hub, Sarit Centre',
                'Neighbourhood centres: Lavington, Yaya, Junction, Village Market',
                'High-street: Westlands, Kilimani, Ngong Rd, Kileleshwa, Kitisuru',
                'Standalone: highway frontage, destination retail, drive-through',
                'Pop-up & short-term: seasonal, experiential, brand activation',
                'Food & beverage: food courts, standalone restaurants, cloud kitchens',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Retail space"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Store Formats */}
          <div className="bg-white border border-stone-200 p-10 lg:p-12">
            <SectionHeader
              label="Store Formats"
              title="Space specifications by retail category"
              subtitle="Typical size ranges, fit-out requirements and lease structures for key retail formats."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { name: 'Fashion & Lifestyle', size: '80-500 sq m', fitout: 'Shell & core, 3-6 mo rent-free', rent: 'Base + 3-5% turnover', icon: ShoppingBag },
                { name: 'F&B / Hospitality', size: '100-1,000 sq m', fitout: 'Landlord contribution KES 15-25k/sq m', rent: 'Base + 5-7% turnover', icon: Store },
                { name: 'Services & Convenience', size: '50-200 sq m', fitout: 'Fitted options available', rent: 'Base + 2-4% turnover', icon: UsersIcon2 },
              ].map((format) => (
                <div key={format.name} className="bg-ivory-50 p-6 border border-stone-200">
                  <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                    <format.icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <h3 className="font-serif text-lg text-navy-900 mb-3">{format.name}</h3>
                  <div className="space-y-1 text-sm text-stone-500">
                    <p><strong>Size:</strong> {format.size}</p>
                    <p><strong>Fit-out:</strong> {format.fitout}</p>
                    <p><strong>Rent:</strong> {format.rent}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Seeking retail premises?"
        description="Our retail leasing team secures the right location, format and lease terms for your brand — whether you're a first-time entrant or expanding a national portfolio."
        primaryLabel="Discuss Retail Requirements"
        primaryLink="/contact"
        secondaryLabel="Showroom Space"
        secondaryLink="/lease/showroom-space-to-let"
      />
    </>
  );
}

export default LeaseRetailSpaceToLetPage;