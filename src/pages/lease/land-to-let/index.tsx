import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, Globe, MapPin as MapPinIcon, Flag, Users as UsersIcon, Plane, Map, Landmark, LandPlot, Gavel, Calculator, TreePine } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LeaseLandToLetPage() {
  return (
    <>
      <Seo
        title="Land for Lease | Murivest Lettings"
        description="Commercial land for lease across Kenya. Development sites and investment opportunities."
        path="/lease/land-to-let"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties for Lease', path: '/lease' }, { name: 'Land to Let', path: '/lease/land-to-let' }]}
      />
      <PageHero
        label="Lease"
        title="Land to let"
        subtitle="Commercial land and development sites available for lease."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Properties for Lease', path: '/lease' }, { name: 'Land to Let', path: '/lease/land-to-let' }]}
      )

      {/* Land Parcels */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Land Parcels" title="Strategic land for development and investment" />
              <p className="text-stone-500 leading-relaxed mb-6">
                We offer commercial land for lease across Kenya's growth corridors — from prime urban
                infill sites to greenfield development land on major highways. Lease terms are typically
                long-term (25-99 years) providing security for development investment. All parcels
                undergo due diligence: title verification, zoning confirmation, services availability
                and environmental screening.
              </p>
              <CheckList items={[
                'Urban infill: redevelopment sites in established nodes',
                'Highway frontage: Mombasa Rd, Thika Rd, Northern Bypass',
                'Satellite towns: Kitengela, Ruiru, Ngong, Limuru, Kiambu',
                'Industrial zones: Athi River, Naivasha, Mombasa port hinterland',
                'Mixed-use zones: designated for integrated development',
                'Lease terms: 25-99 years, renewable, bankable',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Commercial land for development"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Development Potential */}
          <div className="bg-white border border-stone-200 p-10 lg:p-12">
            <SectionHeader
              label="Development Potential"
              title="Assessing land for your project"
              subtitle="Key due diligence factors we evaluate and disclose for every land parcel."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: Gavel, title: 'Legal & Title', desc: 'Clean title, lease term remaining, encumbrances, caveats, registration status, lessor consent.' },
                { icon: Calculator, title: 'Planning & Zoning', desc: 'Permitted use, plot ratio, height limits, setbacks, parking ratios, change of use process.' },
                { icon: TreePine, title: 'Services & Infrastructure', desc: 'Road access, power capacity, water/sewer, fibre, storm drainage, utility wayleaves.', },
              ].map((item) => (
                <div key={item.title}>
                  <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <h3 className="font-serif text-lg text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Seeking land for development or investment?"
        description="Our land advisory team identifies suitable parcels, conducts due diligence and negotiates lease terms that protect your development value."
        primaryLabel="Discuss Land Requirements"
        primaryLink="/contact"
        secondaryLabel="Site Selection Advisory"
        secondaryLink="/advisory/site-selection"
      />
    </>
  );
}

export default LeaseLandToLetPage;