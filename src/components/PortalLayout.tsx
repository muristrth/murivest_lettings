import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Building2, LayoutDashboard, Wallet, FileText, CheckSquare,
  CreditCard, Wrench, LogOut, Menu, X, ChevronRight, Bell,
} from 'lucide-react';

interface PortalLayoutProps {
  role: 'landlord' | 'tenant' | 'manager';
  userName: string;
  navItems: { label: string; path: string; icon: string }[];
  children: React.ReactNode;
}

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard, Building2, Wallet, FileText, CheckSquare,
  CreditCard, Wrench, Bell,
};

export function PortalLayout({ role, userName, navItems, children }: PortalLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const roleLabel = role.charAt(0).toUpperCase() + role.slice(1);

  return (
    <div className="min-h-screen bg-stone-50 flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-navy-950 text-ivory-100 z-40 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-navy-700">
            <Link to="/" className="flex items-center gap-3 mb-1">
              <div className="w-9 h-9 bg-gold-400 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-navy-950" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base text-ivory-50 leading-none">MURIVEST</span>
                <span className="label-text text-gold-300 mt-1" style={{ fontSize: '0.55rem' }}>LETTINGS</span>
              </div>
            </Link>
            <div className="mt-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center text-gold-300 font-serif text-lg">
                {userName.charAt(0)}
              </div>
              <div>
                <div className="text-sm text-ivory-50 font-medium">{userName}</div>
                <div className="text-xs text-gold-300">{roleLabel} Portal</div>
              </div>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto py-4">
            {navItems.map((item) => {
              const Icon = ICONS[item.icon] || LayoutDashboard;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-6 py-3 text-sm transition-all duration-200 relative ${
                    active
                      ? 'text-gold-300 bg-navy-900'
                      : 'text-stone-400 hover:text-ivory-50 hover:bg-navy-900/50'
                  }`}
                >
                  {active && <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold-400" />}
                  <Icon className="w-4.5 h-4.5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="p-6 border-t border-navy-700">
            <Link
              to="/"
              className="flex items-center gap-3 text-sm text-stone-400 hover:text-gold-300 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Back to Website
            </Link>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-navy-950/60 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-20 bg-white border-b border-stone-200 px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden text-navy-900 p-1"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-xs text-stone-400">
              <Link to="/portal/landlord" className="hover:text-navy-700">Portal</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-navy-700 font-medium">{roleLabel}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-stone-500 hover:text-navy-900 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold-400" />
            </button>
            <div className="w-9 h-9 rounded-full bg-navy-100 flex items-center justify-center text-navy-700 font-serif text-sm">
              {userName.charAt(0)}
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}

export function PortalStatCard({
  label, value, sublabel, trend, icon: Icon,
}: {
  label: string; value: string; sublabel?: string; trend?: 'up' | 'down' | 'neutral'; icon: React.ComponentType<{ className?: string }>;
}) {
  const trendColor = trend === 'up' ? 'text-forest-600' : trend === 'down' ? 'text-red-600' : 'text-stone-500';
  return (
    <div className="bg-white border border-stone-200 p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div className="w-11 h-11 bg-navy-50 flex items-center justify-center">
          <Icon className="w-5 h-5 text-navy-700" />
        </div>
        {trend && <span className={`text-xs font-medium ${trendColor}`}>●</span>}
      </div>
      <div className="text-2xl font-serif text-navy-900 mb-1">{value}</div>
      <div className="text-sm text-stone-500">{label}</div>
      {sublabel && <div className={`text-xs mt-1 ${trendColor}`}>{sublabel}</div>}
    </div>
  );
}

export function PortalSection({
  title, action, children,
}: {
  title: string; action?: React.ReactNode; children: React.ReactNode;
}) {
  return (
    <section className="bg-white border border-stone-200">
      <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100">
        <h2 className="font-serif text-lg text-navy-900">{title}</h2>
        {action}
      </div>
      <div className="p-6">{children}</div>
    </section>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    'Available': 'bg-forest-50 text-forest-700 border-forest-200',
    'Leased': 'bg-navy-50 text-navy-700 border-navy-200',
    'Under Application': 'bg-gold-50 text-gold-700 border-gold-200',
    'Paid': 'bg-forest-50 text-forest-700 border-forest-200',
    'Pending': 'bg-gold-50 text-gold-700 border-gold-200',
    'Overdue': 'bg-red-50 text-red-700 border-red-200',
    'Open': 'bg-gold-50 text-gold-700 border-gold-200',
    'In Progress': 'bg-navy-50 text-navy-700 border-navy-200',
    'Resolved': 'bg-forest-50 text-forest-700 border-forest-200',
    'Approved': 'bg-forest-50 text-forest-700 border-forest-200',
    'Awaiting': 'bg-gold-50 text-gold-700 border-gold-200',
    'Active': 'bg-forest-50 text-forest-700 border-forest-200',
  };
  const cls = colors[status] || 'bg-stone-100 text-stone-600 border-stone-200';
  return (
    <span className={`inline-flex items-center px-2.5 py-1 text-xs font-medium border ${cls}`}>
      {status}
    </span>
  );
}
