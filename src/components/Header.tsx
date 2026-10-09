import { Fragment, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Building2, ArrowRight } from 'lucide-react';
import { NAV_LINKS, SERVICES } from '@/lib/data';
import { EXPLORE_GROUPS } from '@/lib/nav';

function ExploreMenu({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); btnRef.current?.focus(); }
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false); }}
    >
      <button
        ref={btnRef}
        type="button"
        aria-expanded={open}
        aria-controls="explore-menu"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-300 ${
          active || open ? 'text-gold-300' : 'text-ivory-100 hover:text-gold-300'
        }`}
      >
        Explore
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      {open && (
        <div id="explore-menu" className="absolute top-full -left-24 pt-4 w-[44rem] max-w-[calc(100vw-3rem)]">
          <div className="bg-navy-900 border border-navy-700 shadow-2xl p-6 grid grid-cols-2 gap-x-8 gap-y-6 animate-fade-in">
            {EXPLORE_GROUPS.map((g) => (
              <div key={g.heading}>
                <div className="label-text text-gold-300 mb-3">{g.heading}</div>
                <ul className="space-y-1.5">
                  {g.links.map((l) => (
                    <li key={l.path}>
                      <Link to={l.path} className="block py-1 text-sm text-ivory-100 hover:text-gold-300 transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

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

  const exploreActive = EXPLORE_GROUPS.some((g) => g.links.some((l) => l.path !== '/properties' && isActive(l.path)));

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy-950/95 backdrop-blur-md shadow-lg'
            : 'bg-navy-950/40 backdrop-blur-sm'
        }`}
      >
        <div className="px-6 md:px-8 xl:px-20 2xl:px-24">
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

            <nav aria-label="Primary" className="hidden lg:flex items-center gap-5 xl:gap-8">
              {NAV_LINKS.map((link) => (
                <Fragment key={link.path}>
                {link.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    onFocus={() => setServicesOpen(true)}
                    onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setServicesOpen(false); }}
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
                    to={link.path}
                    className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isActive(link.path) ? 'text-gold-300' : 'text-ivory-100 hover:text-gold-300'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
                {link.path === '/properties' && <ExploreMenu active={exploreActive} />}
                </Fragment>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/portal/landlord"
                className="text-sm whitespace-nowrap text-ivory-200 hover:text-gold-300 transition-colors duration-300"
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
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              type="button"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-navy-950/95 backdrop-blur-md pt-20 overflow-y-auto">
            <nav id="mobile-nav" aria-label="Mobile" className="section-padding py-8 flex flex-col gap-1">
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
              <div className="border-b border-navy-700">
                <details className="group">
                  <summary className="py-3 text-lg text-ivory-50 font-serif cursor-pointer list-none flex items-center justify-between">
                    Explore
                    <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" aria-hidden="true" />
                  </summary>
                  <div className="pb-3 pl-4 space-y-4">
                    {EXPLORE_GROUPS.map((g) => (
                      <div key={g.heading}>
                        <div className="label-text text-gold-300 mb-1">{g.heading}</div>
                        {g.links.map((l) => (
                          <Link key={l.path} to={l.path} className="block py-2 text-sm text-stone-300 hover:text-gold-300">
                            {l.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </details>
              </div>
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
