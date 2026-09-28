import { Link } from 'react-router-dom';
import {
  CreditCard, Wrench, FileText, Home, Calendar,
  Download, ArrowRight, CheckCircle, Clock, AlertCircle,
} from 'lucide-react';
import { PortalLayout, PortalStatCard, PortalSection, StatusBadge } from '@/components/PortalLayout';
import { formatKES } from '@/lib/data';

const NAV = [
  { label: 'Dashboard', path: '/portal/tenant', icon: 'LayoutDashboard' },
  { label: 'Payments', path: '/portal/tenant/payments', icon: 'CreditCard' },
  { label: 'Maintenance', path: '/portal/tenant/maintenance', icon: 'Wrench' },
  { label: 'Documents', path: '/portal/tenant/documents', icon: 'FileText' },
];

const MOCK_PAYMENTS: Array<Record<string, unknown>> = [];

const MOCK_MAINTENANCE: Array<Record<string, unknown>> = [];

const MOCK_DOCUMENTS: Array<Record<string, unknown>> = [];

export function TenantDashboardPage() {
  const nextPayment = { amount: 280000, dueDate: 'October 1, 2026', daysAway: 7 };

  return (
    <PortalLayout role="tenant" userName="James Mwangi" navItems={NAV}>
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-navy-900 mb-1">My Tenancy</h1>
        <p className="text-sm text-stone-500">Karen Villa — Garden · Karen, Nairobi</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <PortalStatCard label="Next Payment" value={formatKES(nextPayment.amount)} sublabel={`Due ${nextPayment.dueDate} (${nextPayment.daysAway} days)`} trend="neutral" icon={CreditCard} />
        <PortalStatCard label="Lease Status" value="Active" sublabel="Until January 14, 2027" trend="up" icon={Home} />
        <PortalStatCard label="Open Requests" value="1" sublabel="AC repair in progress" trend="neutral" icon={Wrench} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <PortalSection
            title="Payment History"
            action={<Link to="/portal/tenant/payments" className="text-sm text-navy-600 hover:text-navy-900 flex items-center gap-1">View All <ArrowRight className="w-3.5 h-3.5" /></Link>}
          >
            <div className="space-y-3">
              {MOCK_PAYMENTS.slice(0, 3).map((p) => (
                <div key={p.id} className="flex items-center justify-between p-4 border border-stone-100">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-forest-50 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-forest-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-navy-900">{p.period} Rent</div>
                      <div className="text-xs text-stone-400">{p.date} · {p.method}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm font-medium text-navy-900">{formatKES(p.amount)}</div>
                    <StatusBadge status={p.status} />
                  </div>
                </div>
              ))}
            </div>
          </PortalSection>
        </div>

        <div className="lg:col-span-1">
          <PortalSection title="Quick Actions">
            <div className="space-y-3">
              <Link to="/portal/tenant/payments" className="flex items-center gap-3 p-4 border border-stone-100 hover:border-navy-200 hover:bg-navy-50/30 transition-all group">
                <CreditCard className="w-5 h-5 text-navy-600" />
                <span className="text-sm font-medium text-navy-900">Pay Rent</span>
                <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-navy-700 group-hover:translate-x-1 transition-all ml-auto" />
              </Link>
              <Link to="/portal/tenant/maintenance" className="flex items-center gap-3 p-4 border border-stone-100 hover:border-navy-200 hover:bg-navy-50/30 transition-all group">
                <Wrench className="w-5 h-5 text-navy-600" />
                <span className="text-sm font-medium text-navy-900">Log Maintenance</span>
                <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-navy-700 group-hover:translate-x-1 transition-all ml-auto" />
              </Link>
              <Link to="/portal/tenant/documents" className="flex items-center gap-3 p-4 border border-stone-100 hover:border-navy-200 hover:bg-navy-50/30 transition-all group">
                <FileText className="w-5 h-5 text-navy-600" />
                <span className="text-sm font-medium text-navy-900">My Documents</span>
                <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-navy-700 group-hover:translate-x-1 transition-all ml-auto" />
              </Link>
            </div>
          </PortalSection>
        </div>
      </div>

      <PortalSection title="Maintenance Requests">
        <div className="space-y-3">
          {MOCK_MAINTENANCE.map((m) => (
            <div key={m.id} className="flex items-center justify-between p-4 border border-stone-100">
              <div className="flex items-center gap-4 min-w-0">
                {m.status === 'Resolved' ? (
                  <CheckCircle className="w-5 h-5 text-forest-600 shrink-0" />
                ) : (
                  <Clock className="w-5 h-5 text-gold-500 shrink-0" />
                )}
                <div className="min-w-0">
                  <div className="text-sm font-medium text-navy-900 truncate">{m.title}</div>
                  <div className="text-xs text-stone-400">Reported {m.date} · {m.priority} priority</div>
                </div>
              </div>
              <StatusBadge status={m.status} />
            </div>
          ))}
        </div>
      </PortalSection>
    </PortalLayout>
  );
}

export function TenantPaymentsPage() {
  return (
    <PortalLayout role="tenant" userName="James Mwangi" navItems={NAV}>
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-navy-900 mb-1">Payments</h1>
        <p className="text-sm text-stone-500">Pay rent and view your payment history.</p>
      </div>

      {/* Payment Due Card */}
      <div className="bg-navy-950 p-8 mb-8">
        <div className="flex items-center justify-between flex-wrap gap-6">
          <div>
            <div className="label-text text-gold-300 mb-2">Next Payment Due</div>
            <div className="font-serif text-4xl text-ivory-50 mb-2">{formatKES(280000)}</div>
            <div className="text-sm text-ivory-200/60">Due October 1, 2026 · 7 days remaining</div>
          </div>
          <button className="btn-gold">
            Pay Now
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <PortalSection title="Payment History">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-200 text-xs text-stone-400 uppercase tracking-wider">
                <th className="text-left py-3 font-medium">Period</th>
                <th className="text-right py-3 font-medium">Amount</th>
                <th className="text-left py-3 font-medium pl-6">Date Paid</th>
                <th className="text-left py-3 font-medium">Method</th>
                <th className="text-center py-3 font-medium">Status</th>
                <th className="text-right py-3 font-medium">Receipt</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_PAYMENTS.map((p) => (
                <tr key={p.id} className="border-b border-stone-100 hover:bg-stone-50 transition-colors">
                  <td className="py-3.5 text-navy-900 font-medium">{p.period}</td>
                  <td className="py-3.5 text-right text-navy-900">{formatKES(p.amount)}</td>
                  <td className="py-3.5 pl-6 text-stone-500">{p.date}</td>
                  <td className="py-3.5 text-stone-500">{p.method}</td>
                  <td className="py-3.5 text-center"><StatusBadge status={p.status} /></td>
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

export function TenantMaintenancePage() {
  return (
    <PortalLayout role="tenant" userName="James Mwangi" navItems={NAV}>
      <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-serif text-3xl text-navy-900 mb-1">Maintenance</h1>
          <p className="text-sm text-stone-500">Report issues and track their resolution.</p>
        </div>
        <button className="btn-primary">
          <Wrench className="w-4 h-4" />
          New Request
        </button>
      </div>

      <div className="space-y-6">
        {MOCK_MAINTENANCE.map((m) => (
          <div key={m.id} className="bg-white border border-stone-200 p-6">
            <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-serif text-lg text-navy-900">{m.title}</h3>
                  <StatusBadge status={m.status} />
                </div>
                <div className="text-sm text-stone-400 flex items-center gap-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {m.date}</span>
                  <span className="flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {m.priority} priority</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed mb-4">{m.description}</p>
            <div className="pt-4 border-t border-stone-100 flex items-center gap-2">
              {m.status === 'Resolved' ? (
                <span className="text-sm text-forest-600 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Resolved on {m.date}
                </span>
              ) : (
                <span className="text-sm text-gold-600 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Technician scheduled — we'll update you
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </PortalLayout>
  );
}

export function TenantDocumentsPage() {
  return (
    <PortalLayout role="tenant" userName="James Mwangi" navItems={NAV}>
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-navy-900 mb-1">Documents</h1>
        <p className="text-sm text-stone-500">Your lease agreement, payment receipts and tenancy documents.</p>
      </div>

      <PortalSection title="My Documents">
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
                <button className="p-2 text-stone-400 hover:text-navy-700 transition-colors">
                  <FileText className="w-4 h-4" />
                </button>
                <button className="p-2 text-stone-400 hover:text-navy-700 transition-colors">
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
