import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { ServicesIndexPage, ServiceDetailPage } from '@/pages/ServicesPages';
import { PropertiesIndexPage, PropertyDetailPage } from '@/pages/PropertyPages';
import { AboutPage, ContactPage, LandlordsPage, TenantsPage } from '@/pages/InfoPages';
import { NotFoundPage } from '@/pages/NotFoundPage';
import {
  LandlordDashboardPage,
  LandlordPropertiesPage,
  LandlordFinancialsPage,
  LandlordDocumentsPage,
  LandlordApprovalsPage,
} from '@/pages/LandlordPortal';
import {
  TenantDashboardPage,
  TenantPaymentsPage,
  TenantMaintenancePage,
  TenantDocumentsPage,
} from '@/pages/TenantPortal';

// Lazy so the Studio bundle only loads on /studio.
const StudioPage = lazy(() => import('@/pages/StudioPage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Public site */}
        <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
        <Route path="/services" element={<PublicLayout><ServicesIndexPage /></PublicLayout>} />
        <Route path="/services/:slug" element={<PublicLayout><ServiceDetailPage /></PublicLayout>} />
        <Route path="/properties" element={<PublicLayout><PropertiesIndexPage /></PublicLayout>} />
        <Route path="/properties/:slug" element={<PublicLayout><PropertyDetailPage /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />
        <Route path="/landlords" element={<PublicLayout><LandlordsPage /></PublicLayout>} />
        <Route path="/tenants" element={<PublicLayout><TenantsPage /></PublicLayout>} />

        {/* Landlord portal */}
        <Route path="/portal/landlord" element={<LandlordDashboardPage />} />
        <Route path="/portal/landlord/properties" element={<LandlordPropertiesPage />} />
        <Route path="/portal/landlord/financials" element={<LandlordFinancialsPage />} />
        <Route path="/portal/landlord/documents" element={<LandlordDocumentsPage />} />
        <Route path="/portal/landlord/approvals" element={<LandlordApprovalsPage />} />

        {/* Tenant portal */}
        <Route path="/portal/tenant" element={<TenantDashboardPage />} />
        <Route path="/portal/tenant/payments" element={<TenantPaymentsPage />} />
        <Route path="/portal/tenant/maintenance" element={<TenantMaintenancePage />} />
        <Route path="/portal/tenant/documents" element={<TenantDocumentsPage />} />

        {/* Sanity Studio */}
        <Route path="/studio/*" element={<Suspense fallback={null}><StudioPage /></Suspense>} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
