import { Link } from 'react-router-dom';
import {
  Building2, Wallet, FileText, CheckSquare, TrendingUp,
  ArrowRight, Download, Eye, Calendar, MapPin, Wrench,
} from 'lucide-react';
import { PortalLayout, PortalStatCard, PortalSection, StatusBadge } from '@/components/PortalLayout';
import { formatKES } from '@/lib/data';

const NAV = [
  { label: 'Dashboard', path: '/portal/landlord', icon: 'LayoutDashboard' },
  { label: 'Properties', path: '/portal/landlord/properties', icon: 'Building2' },
  { label: 'Financials', path: '/portal/landlord/financials', icon: 'Wallet' },
  { label: 'Documents', path: '/portal/landlord/documents', icon: 'FileText' },
  { label: 'Approvals', path: '/portal/landlord/approvals', icon: 'CheckSquare' },
];

const MOCK_PROPERTIES: Array<Record<string, unknown>> = [];

const MOCK_STATEMENTS = [
  { month: 'September 2026', collected: 1102000, expenses: 84500, net: 1017500, status: 'Paid' },
  { month: 'August 2026', collected: 1102000, expenses: 156000, net: 946000, status: 'Paid' },
  { month: 'July 2026', collected: 952000, expenses: 72000, net: 880000, status: 'Paid' },
  { month: 'June 2026', collected: 952000, expenses: 95000, net: 857000, status: 'Paid' },
];

const MOCK_APPROVALS = [
  { id: 'a1', property: 'Karen Villa', title: 'Water heater replacement', cost: 45000, urgency: 'High', date: '2026-09-22', status: 'Awaiting' },
  { id: 'a2', property: 'Kilimani Apartment 4B', title: 'AC servicing — annual', cost: 18000, urgency: 'Routine', date: '2026-09-20', status: 'Awaiting' },
  { id: 'a3', property: 'Westlands Office', title: 'Lift certificate renewal', cost: 32000, urgency: 'Compliance', date: '2026-09-18', status: 'Approved' },
];

const MOCK_DOCUMENTS = [
  { id: 'd1', name: 'Karen Villa — Lease Agreement.pdf', type: 'Lease', date: '2026-01-15', size: '2.4 MB' },
  { id: 'd2', name: 'Westlands Office — Lease Agreement.pdf', type: 'Lease', date: '2026-03-01', size: '3.1 MB' },
  { id: 'd3', name: 'September 2026 Statement.pdf', type: 'Statement', date: '2026-09-30', size: '1.2 MB' },
  { id: 'd4', name: 'Karen Villa — Inspection Report Q3.pdf', type: 'Inspection', date: '2026-09-05', size: '4.8 MB' },
  { id: 'd5', name: 'Landlord Licence Renewal.pdf', type: 'Compliance', date: '2026-08-20', size: '0.8 MB' },
  { id: 'd6', name: 'Kilimani 4B — Inspection Report Q3.pdf', type: 'Inspection', date: '2026-09-07', size: '3.2 MB' },
];

export function LandlordDashboardPage() {
  return (
    <PortalLayout role="landlord" userName="David Otieno" navItems={NAV}>
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-navy-900 mb-1">Portfolio Overview</h1>
        <p className="text-sm text-stone-500">Welcome back, David. Here's how your portfolio is performing.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <PortalStatCard label="Total Monthly Rent" value={formatKES(1339000)} sublabel="+12% vs last year" trend="up" icon={Wallet} />
        <PortalStatCard label="Collected This Month" value={formatKES(1102000)} sublabel="82.2% of total" trend="up" icon={TrendingUp} />
        <PortalStatCard label="Occupancy Rate" value="80%" sublabel="4 of 5 units leased" trend="neutral" icon={Building2} />
        <PortalStatCard label="Open Approvals" value="2" sublabel="1 high priority" trend="neutral" icon={CheckSquare} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <PortalSection
            title="Your Properties"
            action={<Link to="/portal/landlord/properties" className="text-sm text-navy-600 hover:text-navy-900 flex items-center gap-1">View All <ArrowRight className="w-3.5 h-3.5" /></Link>}
          >
            <div className="space-y-3">
              {MOCK_PROPERTIES.slice(0, 4).map((p) => (
                <div key={p.id} className="flex items-center justify-between p-4 border border-stone-100 hover:border-stone-200 transition-colors">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-10 h-10 bg-navy-50 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-navy-600" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-navy-900 truncate">{p.name}</div>
                      <div className="text-xs text-stone-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" /> {p.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-right hidden sm:block">
                      <div className="text-sm font-medium text-navy-900">{formatKES(p.rent)}</div>
                      <div className="text-xs text-stone-400">/month</div>
                    </div>
                    <StatusBadge status={p.status} />
                  </div>
                </div>
              ))}
            </div>
          </PortalSection>
        </div>

        <div className="lg:col-span-1">
          <PortalSection title="Pending Approvals">
            <div className="space-y-3">
              {MOCK_APPROVALS.filter((a) => a.status === 'Awaiting').map((a) => (
                <div key={a.id} className="p-4 border border-stone-100">
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-sm font-medium text-navy-900">{a.title}</div>
                    <StatusBadge status={a.status} />
                  </div>
                  <div className="text-xs text-stone-400 mb-3">{a.property} · {a.date}</div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-navy-900">{formatKES(a.cost)}</div>
                    <Link to="/portal/landlord/approvals" className="text-xs text-navy-600 hover:text-navy-900 font-medium">Review →</Link>
                  </div>
                </div>
              ))}
            </div>
          </PortalSection>
        </div>
      </div>

      <PortalSection
        title="Recent Financial Activity"
        action={<Link to="/portal/landlord/financials" className="text-sm text-navy-600 hover:text-navy-900 flex items-center gap-1">Full Statements <ArrowRight className="w-3.5 h-3.5" /></Link>}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-200 text-xs text-stone-400 uppercase tracking-wider">
                <th className="text-left py-3 font-medium">Period</th>
                <th className="text-right py-3 font-medium">Collected</th>
                <th className="text-right py-3 font-medium">Expenses</th>
                <th className="text-right py-3 font-medium">Net Remittance</th>
                <th className="text-center py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_STATEMENTS.map((s) => (
                <tr key={s.month} className="border-b border-stone-100 hover:bg-stone-50 transition-colors">
                  <td className="py-3 text-navy-900">{s.month}</td>
                  <td className="py-3 text-right text-navy-900">{formatKES(s.collected)}</td>
                  <td className="py-3 text-right text-stone-500">-{formatKES(s.expenses)}</td>
                  <td className="py-3 text-right font-medium text-navy-900">{formatKES(s.net)}</td>
                  <td className="py-3 text-center"><StatusBadge status={s.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PortalSection>
    </PortalLayout>
  );
}

export function LandlordPropertiesPage() {
  return (
    <PortalLayout role="landlord" userName="David Otieno" navItems={NAV}>
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-navy-900 mb-1">Properties</h1>
        <p className="text-sm text-stone-500">All properties under your ownership and our management.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_PROPERTIES.map((p) => (
          <div key={p.id} className="bg-white border border-stone-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-[16/10] bg-stone-200">
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-serif text-base text-navy-900 leading-snug">{p.name}</h3>
                <StatusBadge status={p.status} />
              </div>
              <div className="text-xs text-stone-400 flex items-center gap-1 mb-3">
                <MapPin className="w-3 h-3" /> {p.location}
              </div>
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-stone-100">
                <div>
                  <div className="text-xs text-stone-400">Monthly Rent</div>
                  <div className="text-sm font-medium text-navy-900">{formatKES(p.rent)}</div>
                </div>
                <div>
                  <div className="text-xs text-stone-400">Tenant</div>
                  <div className="text-sm font-medium text-navy-900 truncate">{p.tenant}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PortalLayout>
  );
}

export function LandlordFinancialsPage() {
  return (
    <PortalLayout role="landlord" userName="David Otieno" navItems={NAV}>
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-navy-900 mb-1">Financials</h1>
        <p className="text-sm text-stone-500">Monthly statements, rent collection and expense tracking.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <PortalStatCard label="YTD Collected" value={formatKES(8876000)} sublabel="On track for target" trend="up" icon={Wallet} />
        <PortalStatCard label="YTD Expenses" value={formatKES(627500)} sublabel="7.1% of collected" trend="neutral" icon={TrendingUp} />
        <PortalStatCard label="YTD Net Remittance" value={formatKES(8248500)} sublabel="Remitted to your account" trend="up" icon={ArrowRight} />
      </div>

      <PortalSection title="Monthly Statements">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-200 text-xs text-stone-400 uppercase tracking-wider">
                <th className="text-left py-3 font-medium">Period</th>
                <th className="text-right py-3 font-medium">Collected</th>
                <th className="text-right py-3 font-medium">Expenses</th>
                <th className="text-right py-3 font-medium">Net</th>
                <th className="text-center py-3 font-medium">Status</th>
                <th className="text-right py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_STATEMENTS.map((s) => (
                <tr key={s.month} className="border-b border-stone-100 hover:bg-stone-50 transition-colors">
                  <td className="py-3.5 text-navy-900 font-medium">{s.month}</td>
                  <td className="py-3.5 text-right text-navy-900">{formatKES(s.collected)}</td>
                  <td className="py-3.5 text-right text-stone-500">-{formatKES(s.expenses)}</td>
                  <td className="py-3.5 text-right font-medium text-navy-900">{formatKES(s.net)}</td>
                  <td className="py-3.5 text-center"><StatusBadge status={s.status} /></td>
                  <td className="py-3.5 text-right">
                    <button className="text-navy-600 hover:text-navy-900 inline-flex items-center gap-1 text-xs font-medium">
                      <Download className="w-3.5 h-3.5" /> PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PortalSection>
    </PortalLayout>
  );
}

export function LandlordDocumentsPage() {
  return (
    <PortalLayout role="landlord" userName="David Otieno" navItems={NAV}>
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-navy-900 mb-1">Documents</h1>
        <p className="text-sm text-stone-500">Lease agreements, statements, inspection reports and compliance records.</p>
      </div>

      <PortalSection title="Document Vault">
        <div className="space-y-2">
          {MOCK_DOCUMENTS.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between p-4 border border-stone-100 hover:border-stone-200 transition-colors group">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 bg-stone-100 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-stone-500" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium text-navy-900 truncate">{doc.name}</div>
                  <div className="text-xs text-stone-400 mt-0.5">{doc.type} · {doc.date} · {doc.size}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button className="p-2 text-stone-400 hover:text-navy-700 transition-colors" title="View">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-stone-400 hover:text-navy-700 transition-colors" title="Download">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </PortalSection>
    </PortalLayout>
  );
}

export function LandlordApprovalsPage() {
  return (
    <PortalLayout role="landlord" userName="David Otieno" navItems={NAV}>
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-navy-900 mb-1">Approvals</h1>
        <p className="text-sm text-stone-500">Review and approve maintenance requests and expenditure above your threshold.</p>
      </div>

      <div className="space-y-6">
        {MOCK_APPROVALS.map((a) => (
          <div key={a.id} className="bg-white border border-stone-200 p-6">
            <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-serif text-lg text-navy-900">{a.title}</h3>
                  <StatusBadge status={a.status} />
                </div>
                <div className="text-sm text-stone-400 flex items-center gap-4">
                  <span className="flex items-center gap-1"><Building2 className="w-3.5 h-3.5" /> {a.property}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {a.date}</span>
                  <span className="flex items-center gap-1"><Wrench className="w-3.5 h-3.5" /> {a.urgency}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="font-serif text-2xl text-navy-900">{formatKES(a.cost)}</div>
                <div className="text-xs text-stone-400">Estimated cost</div>
              </div>
            </div>
            {a.status === 'Awaiting' ? (
              <div className="flex gap-3 pt-4 border-t border-stone-100">
                <button className="btn-primary !py-2.5 !px-5 text-sm">Approve</button>
                <button className="btn-outline !py-2.5 !px-5 text-sm">Request More Info</button>
                <button className="px-5 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">Decline</button>
              </div>
            ) : (
              <div className="pt-4 border-t border-stone-100 text-sm text-stone-400">
                This request has been {a.status.toLowerCase()}.
              </div>
            )}
          </div>
        ))}
      </div>
    </PortalLayout>
  );
}
