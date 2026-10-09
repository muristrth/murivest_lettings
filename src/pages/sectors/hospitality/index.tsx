import { Link } from 'react-router-dom';
import { ArrowRight, Hotel, Utensils } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function SectorsHospitalityPage() {
  return (
    <>
      <Seo
        title="Hospitality Properties | Murivest Lettings"
        description="Property services for hospitality venues across Kenya — hotels, serviced apartments and resorts with tourism licensing and operational support."
        path="/sectors/hospitality"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Hospitality', path: '/sectors/hospitality' }]}
      />
      <PageHero
        label="Sectors"
        title="Hospitality"
        subtitle="Property services for hospitality venues."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sectors', path: '/sectors' }, { name: 'Hospitality', path: '/sectors/hospitality' }]}
      />

      {/* Sector Overview */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Sector Overview" title="Hospitality property portfolio management" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Kenya's hospitality sector spans international hotel brands, boutique lodges, serviced apartments
                and coastal resorts — each with distinct operational needs. We manage hospitality properties across
                Nairobi, the Coast and the safari circuit, coordinating housekeeping, guest services, licensing and
                maintenance to keep properties guest-ready and profitable year-round.
              </p>
              <CheckList items={[
                'Hotels and lodges (luxury to mid-market)',
                'Serviced apartments and furnished suites',
                'Conference and event venues',
                'Restaurants and entertainment outlets',
                'Resorts and coastal properties',
              ]} />
              <div className="mt-8">
                <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-gold-500 hover:text-gold-300">
                  Explore our sector-specialist services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Hospitality property"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Operational Needs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Hotel className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Guest Experience Standards</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Operational standards that keep hospitality properties guest-ready.
              </p>
              <CheckList items={[
                'Housekeeping and hygiene protocols',
                '24-hour front desk and concierge support',
                'Guest safety and security systems',
                'Food safety and HACCP compliance',
                'Accessibility and inclusive service design',
                'Preventive maintenance on guest-facing assets',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Utensils className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Operational Compliance</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Licensing and regulatory requirements for hospitality venues.
              </p>
              <CheckList items={[
                'Tourism Regulatory Authority licensing',
                'Fire safety and emergency evacuation plans',
                'Liquor and entertainment permits',
                'Pool and recreational facility standards',
                'Insurance and risk management coverage',
                'Annual compliance audits and renewals',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Sector-specialist property services"
        description="Our hospitality team manages hotels, lodges and serviced apartments with operational standards that protect guest experience and asset value."
        primaryLabel="Discuss Your Requirements"
        primaryLink="/contact"
        secondaryLabel="All Sectors"
        secondaryLink="/sectors"
      />
    </>
  );
}

export default SectorsHospitalityPage;
