import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Check, MapPin, BarChart3 } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function FindOfficePage() {
  return (
    <>
      <Seo
        title="Office Space for Lease | Murivest Lettings"
        description="Office spaces for lease across Nairobi and Kenya. From CBD towers to suburban business parks."
        path="/find/office"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Find', path: '/find' }, { name: 'Office', path: '/find/office' }]}
      />
      <PageHero
        label="Office"
        title="Office spaces for lease"
        subtitle="Premium and mid-grade office spaces across Nairobi's key business districts."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Find', path: '/find' }, { name: 'Office', path: '/find/office' }]}
      />

      {/* Office Markets */}
      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xi mx-auto">
          <SectionHeader
            label="Office Markets"
            title="Nairobi's office landscape, mapped"
            subtitle="From Grade-A towers in the CBD to suburban business parks, we manage office space across every key market."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { icon: Building2, title: 'Nairobi CBD', desc: 'Central Business District towers with premium visibility and connectivity.', rent: 'KES 180–320/sq ft/month' },
              { icon: MapPin, title: 'Westlands', desc: 'The premier business district with modern towers and mixed-use developments.', rent: 'KES 150–280/sq ft/month' },
              { icon: MapPin, title: 'Upper Hill', desc: 'Emerging corporate hub with purpose-built office buildings.', rent: 'KES 120–200/sq ft/month' },
              { icon: MapPin, title: 'Kilimani', desc: 'Busy commercial node with mid-rise office buildings and good accessibility.', rent: 'KES 100–180/sq ft/month' },
            ].map((market) => (
              <div key={market.title} className="card-institutional p-6">
                <div className="flex items-center gap-3 mb-3">
                  <market.icon className="w-6 h-6 text-gold-500" />
                  <h3 className="font-serif text-lg text-navy-900">{market.title}</h3>
                </div>
                <p className="text-sm text-stone-500 leading-relaxed mb-3">{market.desc}</p>
                <div className="text-xs font-medium text-navy-600">{market.rent}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Features */}
      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader label="What You Get" title="Complete office solutions" />
              <CheckList items={[
                'Flexible lease terms from 1 to 10 years',
                'Fit-out advisory and contractor coordination',
                '24/7 building security with CCTV and access control',
                'Passenger and freight lift access',
                'Generator backup and power redundancy',
                'Meeting rooms and amenities for tenants',
                'On-site property management support',
                'Parking spaces allocated per lease terms',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Modern office space"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Find your ideal office space"
        description="Browse our available office properties or submit your requirements for a tailored shortlist."
        primaryLabel="View Available Offices"
        primaryLink="/properties"
        secondaryLabel="Submit Requirements"
        secondaryLink="/contact"
      />
    </>
  );
}

export default FindOfficePage;
