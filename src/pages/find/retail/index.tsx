import { Link } from 'react-router-dom';
import { ArrowRight, Store, Check, MapPin } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function FindRetailPage() {
  return (
    <>
      <Seo
        title="Retail Space for Lease | Murivest Lettings"
        description="Retail spaces for lease in prime Nairobi locations including Westlands, Kilimani and other key districts."
        path="/find/retail"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Find', path: '/find' }, { name: 'Retail', path: '/find/retail' }]}
      />
      <PageHero
        label="Retail"
        title="Retail spaces for lease"
        subtitle="Prime retail locations across Kenya's most trafficked commercial areas."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Find', path: '/find' }, { name: 'Retail', path: '/find/retail' }]}
      />

      {/* Retail Centers */}
      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Retail Markets"
            title="Nairobi's retail landscape"
            subtitle="We manage retail space in the city's premier shopping destinations."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Store, title: 'Westlands', desc: 'Premium retail in The Sarit Centre, Westgate and other major centres.', rent: 'KES 250–450/sq ft/month' },
              { icon: Store, title: 'Kilimani', desc: 'High-street retail with strong weekday footfall.', rent: 'KES 180–320/sq ft/month' },
              { icon: Store, title: 'CBD', desc: 'City centre retail with maximum exposure and accessibility.', rent: 'KES 400–650/sq ft/month' },
            ].map((center) => (
              <div key={center.title} className="card-institutional p-6">
                <div className="flex items-center gap-3 mb-3">
                  <center.icon className="w-6 h-6 text-gold-500" />
                  <h3 className="font-serif text-lg text-navy-900">{center.title}</h3>
                </div>
                <p className="text-sm text-stone-500 leading-relaxed mb-3">{center.desc}</p>
                <div className="text-xs font-medium text-navy-600">{center.rent}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retail Features */}
      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xi mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader label="Retail Benefits" title="What makes a great retail location?" />
              <CheckList items={[
                'Prime visibility and street frontage',
                'High pedestrian and vehicle footfall',
                'Complementary tenant mix',
                'Ample parking for customers',
                'Climate-controlled common areas',
                '24/7 security and CCTV monitoring',
                'Flexible fit-out allowances',
                'Prominent signage and brand exposure',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Retail storefront"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Find your ideal retail space"
        description="Browse our available retail properties or submit your requirements for a tailored shortlist."
        primaryLabel="View Available Properties"
        primaryLink="/properties"
        secondaryLabel="Submit Requirements"
        secondaryLink="/contact"
      />
    </>
  );
}

export default FindRetailPage;
