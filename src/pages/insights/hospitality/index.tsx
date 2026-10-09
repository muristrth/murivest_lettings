import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, FileText, BookOpen, Globe, MapPin as MapPinIcon, TrendingUp as TrendingUpIcon, Flag, Map, Landmark, Hotel, Utensils, Waves } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function InsightsHospitalityPage() {
  return (
    <>
      <Seo
        title="Hospitality Property Insights | Murivest Lettings"
        description="Market intelligence for hospitality and leisure properties across Kenya."
        path="/insights/hospitality"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: 'Hospitality Sector', path: '/insights/hospitality' }]}
      />
      <PageHero
        label="Insights"
        title="Hospitality sector"
        subtitle="Property market insights for the hospitality sector."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: 'Hospitality Sector', path: '/insights/hospitality' }]}
      />

      {/* Sector Overview */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Sector Overview" title="Kenya's hospitality property landscape" />
              <p className="text-stone-500 leading-relaxed mb-6">
                Kenya's hospitality sector spans international hotel brands, boutique lodges, serviced apartments
                and coastal resorts. Post-pandemic recovery has been strong, driven by regional business travel,
                conference tourism and a growing domestic leisure market. Property structures range from owner-operated
                to management contracts and lease arrangements.
              </p>
              <CheckList items={[
                'Nairobi: Business hotel & serviced apartment demand',
                'Coast: Resort & boutique lodge investment',
                'National parks: Safari lodge & tented camp properties',
                'Secondary cities: Limited-service & budget hotel gap',
                'Conference & MICE infrastructure development',
              ]} />
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

          {/* Market Trends */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Hotel className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Market Trends</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Key trends shaping hospitality property performance and investment.
              </p>
              <CheckList items={[
                'RevPAR recovery exceeding 2019 levels in Nairobi',
                'Serviced apartments outperforming traditional hotels',
                'Domestic leisure demand supporting coastal occupancy',
                'Brand conversion & repositioning activity increasing',
                'ESG & sustainability certifications becoming standard',
              ]} />
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3">Investment Opportunities</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Current investment theses in hospitality property.
              </p>
              <CheckList items={[
                'Nairobi: Upper Hill & Westlands serviced apartment development',
                'Coast: Boutique resort acquisition & repositioning',
                'Secondary cities: Branded limited-service hotel gap',
                'Safari circuit: Lodge renovation & brand affiliation',
                'Mixed-use: Hotel-led developments with residential/retail',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Hospitality property advisory or research?"
        description="Our team advises on hotel acquisitions, dispositions, lease restructuring, brand selection and feasibility studies across Kenya and East Africa."
        primaryLabel="Discuss Your Project"
        primaryLink="/contact"
        secondaryLabel="All Insights"
        secondaryLink="/insights"
      />
    </>
  );
}

export default InsightsHospitalityPage;