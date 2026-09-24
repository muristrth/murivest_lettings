import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Building2, ArrowRight } from 'lucide-react';
import { NAV_LINKS, SERVICES } from '@/lib/data';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    location.pathname === path || (path !== '/' && location.pathname.startsWith(path));

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy-950/95 backdrop-blur-md shadow-lg'
            : 'bg-navy-950/40 backdrop-blur-sm'
        }`}
      >
        <div className="section-padding">
          <div className="flex items-center justify-between h-20 max-w-9xl mx-auto">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gold-400 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Building2 className="w-5 h-5 text-navy-950" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg text-ivory-50 leading-none tracking-wide">
                  MURIVEST
                </span>
                <span className="label-text text-gold-300 leading-none mt-1" style={{ fontSize: '0.625rem' }}>
                  LETTINGS
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-300 ${
                        isActive(link.path) ? 'text-gold-300' : 'text-ivory-100 hover:text-gold-300'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                    </Link>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 pt-4 w-72">
                        <div className="bg-navy-900 border border-navy-700 shadow-2xl py-2 animate-fade-in">
                          {link.children.map((child) => {
                            const svc = SERVICES.find((s) => s.slug === child.path.split('/').pop());
                            return (
                              <Link
                                key={child.path}
                                to={child.path}
                                className="flex items-start gap-3 px-5 py-3 hover:bg-navy-800 transition-colors duration-200"
                              >
                                <div className="w-1 h-1 rounded-full bg-gold-400 mt-2 shrink-0" />
                                <div>
                                  <div className="text-sm text-ivory-50 font-medium">{child.label}</div>
                                  {svc && <div className="text-xs text-stone-400 mt-0.5 leading-snug">{svc.tagline}</div>}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isActive(link.path) ? 'text-gold-300' : 'text-ivory-100 hover:text-gold-300'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/portal/landlord"
                className="text-sm text-ivory-200 hover:text-gold-300 transition-colors duration-300"
              >
                Portal Login
              </Link>
              <Link to="/contact" className="btn-gold !py-2.5 !px-5">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <button
              className="lg:hidden text-ivory-50 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-navy-950/95 backdrop-blur-md pt-20 overflow-y-auto">
            <nav className="section-padding py-8 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    className="block py-3 text-lg text-ivory-50 border-b border-navy-700 font-serif"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="py-2 pl-4 flex flex-col gap-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="py-2 text-sm text-stone-300 hover:text-gold-300"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/portal/landlord"
                className="mt-4 py-3 text-ivory-200 border-b border-navy-700"
              >
                Portal Login
              </Link>
              <Link to="/contact" className="btn-gold mt-6 w-full">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
