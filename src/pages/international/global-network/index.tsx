import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Target, ShieldCheck, FileBarChart, Users, Handshake, Briefcase, Scale, Lightbulb, MapPin, Search, BarChart3, TrendingUp, RefreshCw, Globe, MapPin as MapPinIcon, Flag, Users as UsersIcon, Plane, Map, Landmark, Network, Handshake as HandshakeIcon, Award } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function InternationalGlobalNetworkPage() {
  return (
    <>
      <Seo
        title="Global Network | Murivest Lettings"
        description="Our global network of partners and associates across key real estate markets."
        path="/international/global-network"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'International', path: '/international' }, { name: 'Global Network', path: '/international/global-network' }]}
      />
      <PageHero
        label="International"
        title="Global network"
        subtitle="Our network of partners across key markets."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'International', path: '/international' }, { name: 'Global Network', path: '/international/global-network' }]}
      />

      {/* Network Overview */}
      <section className="section-padding py-20 lg:py-28 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Network Overview" title="Curated partnerships, not directory listings" />
              <p className="text-stone-500 leading-relaxed mb-6">
                We don't maintain a passive directory — we build active, governed relationships with
                best-in-class firms in key markets. Each partner undergoes due diligence, signs a
                cooperation agreement with service standards, and participates in quarterly alignment
                reviews. This ensures consistent quality whether you're in Nairobi, London, Dubai or New York.
              </p>
              <CheckList items={[
                '15+ active partner firms across Africa, Europe, Middle East, North America',
                'Annual partner summit: strategy, market intelligence, collaboration pipeline',
                'Shared reporting standards, data protocols and compliance frameworks',
                'Cross-referral protocol with fee transparency and client protection',
                'Joint marketing: thought leadership, market reports, investor events',
                'Dispute resolution & escalation mechanisms in every agreement',
              ]} />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Global network partnership"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Partnership Model */}
          <div className="bg-white border border-stone-200 p-10 lg:p-12">
            <SectionHeader
              label="Partnership Model"
              title="How we structure global collaborations"
              subtitle="Three tiers of partnership depth, each with defined scope, standards and governance."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: Network, title: 'Strategic Partners', desc: 'Deep integration: shared clients, co-branded reports, joint pitches, aligned technology, dedicated relationship leads.' },
                { icon: HandshakeIcon, title: 'Service Partners', desc: 'Defined scope: market entry, valuation, legal, tax, project management. SLA-governed, quality-monitored.' },
                { icon: Award, title: 'Referral Network', desc: 'Vetted introductions for niche needs: litigation, arbitration, specialised consulting, proprietary deal flow.', },
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
        title="Seeking global property partner access?"
        description="Our network opens doors to trusted partners in key markets — with the governance and quality assurance that protects your interests."
        primaryLabel="Explore Network Capabilities"
        primaryLink="/contact"
        secondaryLabel="International Services"
        secondaryLink="/international"
      />
    </>
  );
}

export default InternationalGlobalNetworkPage;