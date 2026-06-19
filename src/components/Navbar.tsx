'use client';

import { useState, useEffect, useCallback } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/70 backdrop-blur-xl shadow-lg shadow-[#00B7E8]/5 border-b border-white/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* ---- Logo ---- */}
            <button
              onClick={() => scrollTo('#home')}
              className="flex items-center gap-2 group"
              aria-label="Go to home"
            >
              {/* Logo mark */}
              <span className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#00B7E8] to-[#1B2F6B] shadow-md shadow-[#00B7E8]/30 group-hover:shadow-lg group-hover:shadow-[#00B7E8]/40 transition-shadow">
                <span className="font-poppins font-extrabold text-white text-sm tracking-tight leading-none">
                  IIHT
                </span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-poppins font-bold text-[1.2rem] tracking-tight bg-gradient-to-r from-[#00B7E8] to-[#1B2F6B] bg-clip-text text-transparent">
                  IIHT
                </span>
                <span className="font-poppins text-[0.65rem] font-medium text-[#1B2F6B]/70 tracking-[0.12em] uppercase -mt-[1px]">
                  Midnapore
                </span>
              </span>
            </button>

            {/* ---- Desktop links ---- */}
            <ul className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className={`relative px-4 py-2 text-[0.9rem] font-inter font-medium rounded-lg transition-all duration-300 ${
                        isActive
                          ? 'text-[#00B7E8]'
                          : 'text-[#1F2937] hover:text-[#00B7E8]'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2.5px] rounded-full bg-gradient-to-r from-[#00B7E8] to-[#1B2F6B]" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* ---- Desktop CTA ---- */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:08880830077"
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-inter font-medium text-[#1B2F6B] hover:text-[#00B7E8] transition-colors rounded-lg hover:bg-[#00B7E8]/5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
              <button
                onClick={() => scrollTo('#courses')}
                className="relative px-6 py-2.5 text-sm font-inter font-semibold text-white rounded-xl bg-gradient-to-r from-[#F44336] to-[#FF7043] shadow-md shadow-[#F44336]/25 hover:shadow-lg hover:shadow-[#F44336]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">Enroll Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#FF7043] to-[#F44336] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            {/* ---- Hamburger ---- */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#00B7E8]/10 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <div className="w-5 flex flex-col gap-[5px]">
                <span
                  className={`block h-[2px] bg-[#1B2F6B] rounded-full transition-all duration-300 origin-center ${
                    mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
                  }`}
                />
                <span
                  className={`block h-[2px] bg-[#1B2F6B] rounded-full transition-all duration-300 ${
                    mobileOpen ? 'opacity-0 scale-0' : ''
                  }`}
                />
                <span
                  className={`block h-[2px] bg-[#1B2F6B] rounded-full transition-all duration-300 origin-center ${
                    mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ---- Mobile overlay ---- */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ---- Mobile slide-in panel ---- */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-white/95 backdrop-blur-2xl shadow-2xl transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)] lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-6">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-inter font-medium text-[0.95rem] transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#00B7E8]/10 to-transparent text-[#00B7E8] border-l-[3px] border-[#00B7E8]'
                        : 'text-[#1F2937] hover:bg-[#F7FCFE] hover:text-[#00B7E8]'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-auto flex flex-col gap-3">
            <a
              href="tel:08880830077"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#1B2F6B]/15 text-[#1B2F6B] font-inter font-medium text-sm hover:bg-[#1B2F6B]/5 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              08880 830 077
            </a>
            <button
              onClick={() => scrollTo('#courses')}
              className="px-4 py-3 rounded-xl bg-gradient-to-r from-[#F44336] to-[#FF7043] text-white font-inter font-semibold text-sm shadow-lg shadow-[#F44336]/25 active:scale-[0.97] transition-transform"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
