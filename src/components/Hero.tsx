'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const TRUST_INDICATORS = [
  { value: '350+', label: 'Centers', icon: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )},
  { value: '30+', label: 'Years Legacy', icon: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )},
  { value: '4.3★', label: 'Rating', icon: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  )},
  { value: 'Global', label: 'Certifications', icon: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )},
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('hero-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* ---- CSS for entrance animations ---- */}
      <style jsx>{`
        .hero-content > * {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
        }
        .hero-visible .hero-content > *:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0.1s; }
        .hero-visible .hero-content > *:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 0.25s; }
        .hero-visible .hero-content > *:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: 0.4s; }
        .hero-visible .hero-content > *:nth-child(4) { opacity: 1; transform: translateY(0); transition-delay: 0.55s; }
        .hero-visible .hero-content > *:nth-child(5) { opacity: 1; transform: translateY(0); transition-delay: 0.7s; }
        .hero-visible .hero-content > *:nth-child(6) { opacity: 1; transform: translateY(0); transition-delay: 0.85s; }
      `}</style>

      {/* ---- Background image ---- */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-banner.png"
          alt="IIHT Midnapore campus and students"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B2F6B]/90 via-[#1B2F6B]/75 to-[#00B7E8]/50" />
        {/* Extra bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#1B2F6B]/60 to-transparent" />
      </div>

      {/* ---- Decorative shapes ---- */}
      <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-[#00B7E8]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full bg-[#F44336]/8 blur-3xl pointer-events-none" />

      {/* ---- Content ---- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-36 lg:py-40 w-full">
        <div className="hero-content max-w-3xl">
          {/* Badge */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs sm:text-sm font-inter font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              Admissions Open — Limited Seats
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-6 font-poppins font-extrabold text-white text-[2.2rem] sm:text-5xl lg:text-[3.4rem] leading-[1.12] tracking-tight">
            Launch Your IT Career with{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#00B7E8] to-[#67d4f1] bg-clip-text text-transparent">
                Industry-Leading
              </span>
            </span>{' '}
            Training
          </h1>

          {/* Subheadline */}
          <p className="mt-5 text-white/80 text-base sm:text-lg lg:text-xl font-inter leading-relaxed max-w-2xl">
            Master Networking, Cloud Computing &amp; Cybersecurity with Globally Recognized
            Certifications from <span className="text-white font-semibold">IIHT Midnapore</span>
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Primary CTA */}
            <a
              href="#courses"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00B7E8] to-[#1B2F6B] text-white font-inter font-semibold text-sm sm:text-base shadow-xl shadow-[#00B7E8]/25 hover:shadow-2xl hover:shadow-[#00B7E8]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Explore Courses</span>
              <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span className="absolute inset-0 bg-gradient-to-r from-[#1B2F6B] to-[#00B7E8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918880830077?text=Hi%20IIHT%20Midnapore%2C%20I%27m%20interested%20in%20your%20courses"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] text-white font-inter font-semibold text-sm sm:text-base shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.01a9.865 9.865 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.14 12.07C2.14 6.6 6.58 2.16 12.06 2.16a9.84 9.84 0 016.982 2.893 9.84 9.84 0 012.893 6.994c-.004 5.468-4.443 9.91-9.885 9.738zM20.52 3.449A11.8 11.8 0 0012.05.16C5.495.16.16 5.494.16 12.053a11.86 11.86 0 001.587 5.945L0 24l6.168-1.617a11.85 11.85 0 005.87 1.544h.01c6.555 0 11.89-5.335 11.893-11.893A11.82 11.82 0 0020.52 3.449z"/>
              </svg>
              WhatsApp
            </a>

            {/* Call */}
            <a
              href="tel:08880830077"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-inter font-semibold text-sm sm:text-base hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>

          {/* Vendor partners mini */}
          <div className="mt-8">
            <p className="text-white/50 text-xs font-inter font-medium uppercase tracking-widest mb-3">
              Certification Partners
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {['Microsoft', 'Cisco', 'CompTIA', 'Red Hat', 'AWS'].map((name) => (
                <span
                  key={name}
                  className="text-white/60 text-xs sm:text-sm font-inter font-semibold tracking-wide hover:text-white/90 transition-colors cursor-default"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {TRUST_INDICATORS.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.07] backdrop-blur-md border border-white/10 hover:bg-white/[0.12] transition-colors"
              >
                <span className="text-[#00B7E8] flex-shrink-0">{item.icon}</span>
                <div className="min-w-0">
                  <p className="font-poppins font-bold text-white text-sm sm:text-base leading-tight">
                    {item.value}
                  </p>
                  <p className="text-white/60 text-[0.65rem] sm:text-xs font-inter leading-tight truncate">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---- Scroll hint ---- */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-[0.65rem] font-inter uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
