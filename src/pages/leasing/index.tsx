import { Link } from 'react-router-dom';
import { Building2, KeySquare, Factory, Store, Home, Briefcase } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero, CtaBand, SectionHeader, CheckList } from '@/components/ui';

export function LeasingIndexPage() {
  return (
    <>
      <Seo
        title="Leasing Services | Murivest Lettings"
        description="Commercial leasing services across all property types — office, retail, industrial, warehouse and mixed-use."
        path="/leasing"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Leasing', path: '/leasing' }]}
      />
      <PageHero
        label="Leasing"
        title="Leasing services"
        subtitle="Specialised leasing services across all commercial property types."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Leasing', path: '/leasing' }]}
      />

      <section className="section-padding py-20 bg-ivory-50">
        <div className="max-w-9xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionHeader label="Service Overview" title="Comprehensive leasing expertise" />
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Murivest Lettings provides end-to-end leasing services for landlords and tenants
                  across Kenya's commercial property market. Our team combines deep local market
                  knowledge with institutional-grade processes to deliver optimal outcomes for
                  every transaction.
                </p>
                <p>
                  Whether you are a landlord seeking to minimise void periods and maximise rental
                  returns, or a tenant looking for the right space at the right terms, we apply
                  the same rigour, transparency and analytical discipline to every assignment.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Commercial leasing consultation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/leasing/office-leasing" className="card-institutional group p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-5 transition-colors group-hover:bg-gold-400">
                <Building2 className="w-6 h-6 text-navy-700 transition-colors group-hover:text-navy-950" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3 transition-colors group-hover:text-navy-700">Office Leasing</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">Premium office space across Nairobi's business districts</p>
              <div className="flex items-center gap-2 text-xs font-medium text-gold-500">View Details <ArrowRight className="w-3.5 h-3.5" /></div>
            </Link>
            <Link to="/leasing/retail-leasing" className="card-institutional group p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-5 transition-colors group-hover:bg-gold-400">
                <Store className="w-6 h-6 text-navy-700 transition-colors group-hover:text-navy-950" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3 transition-colors group-hover:text-navy-700">Retail Leasing</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">Prime retail locations and shopping centre placements</p>
              <div className="flex items-center gap-2 text-xs font-medium text-gold-500">View Details <ArrowRight className="w-3.5 h-3.5" /></div>
            </Link>
            <Link to="/leasing/industrial-leasing" className="card-institutional group p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-5 transition-colors group-hover:bg-gold-400">
                <Factory className="w-6 h-6 text-navy-700 transition-colors group-hover:text-navy-950" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3 transition-colors group-hover:text-navy-700">Industrial Leasing</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">Warehouse, manufacturing and logistics facilities</p>
              <div className="flex items-center gap-2 text-xs font-medium text-gold-500">View Details <ArrowRight className="w-3.5 h-3.5" /></div>
            </Link>
            <Link to="/leasing/corporate-leasing" className="card-institutional group p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-5 transition-colors group-hover:bg-gold-400">
                <Briefcase className="w-6 h-6 text-navy-700 transition-colors group-hover:text-navy-950" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3 transition-colors group-hover:text-navy-700">Corporate Leasing</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">Strategic leasing for large corporate occupiers</p>
              <div className="flex items-center gap-2 text-xs font-medium text-gold-500">View Details <ArrowRight className="w-3.5 h-3.5" /></div>
            </Link>
            <Link to="/leasing/landlord-leasing" className="card-institutional group p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-5 transition-colors group-hover:bg-gold-400">
                <KeySquare className="w-6 h-6 text-navy-700 transition-colors group-hover:text-navy-950" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3 transition-colors group-hover:text-navy-700">Landlord Leasing</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">Proactive leasing management to maximise returns</p>
              <div className="flex items-center gap-2 text-xs font-medium text-gold-500">View Details <ArrowRight className="w-3.5 h-3.5" /></div>
            </Link>
            <Link to="/leasing/tenant-leasing" className="card-institutional group p-8">
              <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-5 transition-colors group-hover:bg-gold-400">
                <Home className="w-6 h-6 text-navy-700 transition-colors group-hover:text-navy-950" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-3 transition-colors group-hover:text-navy-700">Tenant Leasing</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">Representation and advisory for commercial tenants</p>
              <div className="flex items-center gap-2 text-xs font-medium text-gold-500">View Details <ArrowRight className="w-3.5 h-3.5" /></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 bg-white">
        <div className="max-w-9xl mx-auto">
          <SectionHeader
            label="Leasing Categories"
            title="Specialised services for every requirement"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <SectionHeader label="For Landlords" title="Maximise occupancy and rental income" />
              <CheckList items={[
                'Strategic marketing across premium channels and networks',
                'Rigorous tenant vetting with financial and reference checks',
                'Lease negotiation to protect landlord interests',
                'Market-aligned rent reviews and lease renewals',
                'Void reduction through proactive re-letting programmes',
                'Full legal and regulatory compliance management',
              ]} />
            </div>
            <div>
              <SectionHeader label="For Tenants" title="Secure the right space on optimal terms" />
              <CheckList items={[
                'Market-wide search including off-market opportunities',
                'Detailed property shortlisting with comparative analysis',
                'Lease term negotiation and commercial structuring',
                'Fit-out and reinstatement advisory',
                'Cost modelling including service charges and outgoings',
                'Ongoing lease management and renewal strategy',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Discuss your leasing requirements"
        description="Whether you have a single unit or a multi-property portfolio, our leasing team is ready to help you achieve your objectives."
        primaryLabel="Request a Consultation"
        primaryLink="/contact"
        secondaryLabel="View Available Properties"
        secondaryLink="/properties"
      />
    </>
  );
}

export default LeasingIndexPage;