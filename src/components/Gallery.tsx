'use client';

import { useEffect, useRef, useState } from 'react';

interface GalleryItem {
  title: string;
  gradient: string;
  span: string; // Tailwind grid span classes
  icon: React.ReactNode;
}

const galleryItems: GalleryItem[] = [
  {
    title: 'Modern Computer Lab',
    gradient: 'linear-gradient(135deg, #00B7E8, #0091b8)',
    span: 'md:col-span-2 md:row-span-2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Networking Equipment',
    gradient: 'linear-gradient(135deg, #1B2F6B, #0f1d45)',
    span: 'md:col-span-1',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="6" width="22" height="5" rx="1" />
        <rect x="1" y="13" width="22" height="5" rx="1" />
        <circle cx="5" cy="8.5" r="1" />
        <circle cx="5" cy="15.5" r="1" />
        <line x1="9" y1="8.5" x2="19" y2="8.5" />
        <line x1="9" y1="15.5" x2="19" y2="15.5" />
      </svg>
    ),
  },
  {
    title: 'Classroom Session',
    gradient: 'linear-gradient(135deg, #4dd9ff, #00B7E8)',
    span: 'md:col-span-1',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
  },
  {
    title: 'Student Activities',
    gradient: 'linear-gradient(135deg, #0d9488, #0f766e)',
    span: 'md:col-span-1',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Certification Ceremony',
    gradient: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
    span: 'md:col-span-1',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
  {
    title: 'Campus Exterior',
    gradient: 'linear-gradient(135deg, #14274e, #0a1230)',
    span: 'md:col-span-2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
        <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
      </svg>
    ),
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-20 md:py-28"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block px-5 py-2 rounded-full text-xs font-semibold tracking-[0.2em] uppercase mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              background: 'rgba(0, 183, 232, 0.1)',
              color: '#00B7E8',
              border: '1px solid rgba(0, 183, 232, 0.2)',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            OUR CAMPUS
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              color: '#1F2937',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Experience Our World-Class{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, #00B7E8, #1B2F6B)',
              }}
            >
              Training Facility
            </span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5 auto-rows-[200px] md:auto-rows-[220px]">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${item.span} transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms',
              }}
            >
              {/* Gradient Background (placeholder for real image) */}
              <div
                className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110"
                style={{ background: item.gradient }}
              />

              {/* Subtle pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                }}
              />

              {/* Center icon (visible by default, fades on hover) */}
              <div className="absolute inset-0 flex items-center justify-center text-white/20 transition-opacity duration-300 group-hover:opacity-0">
                {item.icon}
              </div>

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400"
                style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(4px)',
                  WebkitBackdropFilter: 'blur(4px)',
                }}
              >
                {/* Icon on hover */}
                <div className="text-white/80 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                  {item.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-white text-lg sm:text-xl font-bold text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400 delay-75"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.title}
                </h3>

                {/* Underline accent */}
                <div
                  className="w-10 h-0.5 mt-3 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 delay-150"
                  style={{ backgroundColor: '#00B7E8' }}
                />
              </div>

              {/* Bottom label (always visible on mobile) */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4 md:hidden"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                }}
              >
                <h3
                  className="text-white text-sm font-semibold"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
