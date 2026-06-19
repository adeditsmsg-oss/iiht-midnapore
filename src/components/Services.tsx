'use client';

import { useEffect, useRef } from 'react';

interface Course {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const COURSES: Course[] = [
  {
    title: 'CCNA & CCNP Networking',
    description:
      'Master enterprise networking with Cisco certifications. Learn routing, switching, and network security fundamentals.',
    color: '#00B7E8',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <circle cx="24" cy="10" r="4" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="10" cy="38" r="4" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="38" cy="38" r="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 14v6m0 0l-10 14m10-14l10 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M14 38h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Cloud Computing & AWS',
    description:
      'Build and manage cloud infrastructure. Get certified in AWS, Azure, and OpenStack technologies.',
    color: '#1B2F6B',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path
          d="M12 32a8 8 0 01-.5-15.98A12 12 0 0135.5 18 7 7 0 0136 32H12z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M20 28l4-4 4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 24v10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Cybersecurity & Ethical Hacking',
    description:
      'Protect organizations from cyber threats. Learn penetration testing, security auditing, and incident response.',
    color: '#F44336',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path
          d="M24 4L8 12v10c0 10.55 6.84 20.42 16 23 9.16-2.58 16-12.45 16-23V12L24 4z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M18 24l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Python & Java Programming',
    description:
      'Master in-demand programming languages. Build applications, automate tasks, and develop software solutions.',
    color: '#FF7043',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M16 14l-8 10 8 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 14l8 10-8 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 8L20 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Red Hat Linux (RHCE)',
    description:
      'Become a certified Linux administrator. Master server deployment, configuration, and management.',
    color: '#CC0000',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect x="8" y="8" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M8 16h32" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 32v8M18 40h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="13" cy="12" r="1.5" fill="currentColor" />
        <circle cx="18" cy="12" r="1.5" fill="currentColor" />
        <circle cx="23" cy="12" r="1.5" fill="currentColor" />
        <path d="M13 22h10M13 26h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Microsoft MCSA/MCSE',
    description:
      'Administer Windows Server environments. Deploy, manage, and maintain enterprise IT infrastructure.',
    color: '#0078D4',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect x="6" y="6" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <rect x="26" y="6" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <rect x="6" y="26" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <rect x="26" y="26" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    title: 'Hardware & Networking',
    description:
      'Build expertise in computer hardware, troubleshooting, and network infrastructure setup.',
    color: '#00B7E8',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect x="14" y="14" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <rect x="20" y="20" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
        <path d="M18 14V8M24 14V8M30 14V8M18 34v6M24 34v6M30 34v6M14 18H8M14 24H8M14 30H8M34 18h6M34 24h6M34 30h6"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'SAP & ERP Solutions',
    description:
      'Learn enterprise resource planning with SAP modules. Prepare for careers in business technology consulting.',
    color: '#1B2F6B',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <ellipse cx="24" cy="14" rx="14" ry="6" stroke="currentColor" strokeWidth="2.5" />
        <path d="M10 14v10c0 3.314 6.268 6 14 6s14-2.686 14-6V14" stroke="currentColor" strokeWidth="2.5" />
        <path d="M10 24v10c0 3.314 6.268 6 14 6s14-2.686 14-6V24" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('services-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="courses"
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-32 bg-white overflow-hidden"
    >
      <style jsx>{`
        .srv-fade {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.6s cubic-bezier(.4,0,.2,1), transform 0.6s cubic-bezier(.4,0,.2,1);
        }
        .services-visible .srv-fade {
          opacity: 1;
          transform: translateY(0);
        }
        .services-visible .srv-card {
          opacity: 1;
          transform: translateY(0);
        }
        .srv-card {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.5s cubic-bezier(.4,0,.2,1), transform 0.5s cubic-bezier(.4,0,.2,1);
        }
      `}</style>

      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#00B7E8]/[0.03] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---- Header ---- */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="srv-fade">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00B7E8]/10 text-[#00B7E8] text-xs font-inter font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B7E8]" />
              Our Courses
            </span>
          </div>
          <h2 className="srv-fade mt-4 font-poppins font-extrabold text-[#1F2937] text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.15] tracking-tight">
            Industry-Driven IT{' '}
            <span className="bg-gradient-to-r from-[#00B7E8] to-[#1B2F6B] bg-clip-text text-transparent">
              Training Programs
            </span>
          </h2>
          <p className="srv-fade mt-4 text-[#1F2937]/65 font-inter text-base sm:text-lg leading-relaxed">
            Choose from our comprehensive range of certification courses designed to fast-track your IT career
          </p>
        </div>

        {/* ---- Course Cards Grid ---- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {COURSES.map((course, idx) => (
            <div
              key={course.title}
              className="srv-card group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 overflow-hidden"
              style={{ transitionDelay: `${0.08 * idx + 0.2}s` }}
            >
              {/* Top accent bar */}
              <div
                className="h-1 w-full transition-all duration-300 group-hover:h-1.5"
                style={{
                  background: `linear-gradient(90deg, ${course.color}, ${course.color}88)`,
                  opacity: 0.25,
                }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                style={{ background: course.color }}
              />

              <div className="p-6">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                  style={{
                    background: `${course.color}12`,
                    color: course.color,
                  }}
                >
                  {course.icon}
                </div>

                {/* Title */}
                <h3 className="font-poppins font-bold text-[#1F2937] text-[1.05rem] leading-snug mb-2.5 group-hover:text-[#1B2F6B] transition-colors">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-[#1F2937]/60 font-inter text-[0.85rem] leading-relaxed mb-5">
                  {course.description}
                </p>

                {/* Learn more link */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-sm font-inter font-semibold transition-all duration-300 group-hover:gap-2.5"
                  style={{ color: course.color }}
                >
                  Learn More
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ---- Bottom CTA ---- */}
        <div className="srv-fade mt-14 text-center" style={{ transitionDelay: '0.9s' }}>
          <p className="text-[#1F2937]/60 font-inter text-sm mb-5">
            Not sure which course is right for you? Our counselors can help.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/918880830077?text=Hi%20IIHT%20Midnapore%2C%20I%27m%20interested%20in%20your%20courses"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00B7E8] to-[#1B2F6B] text-white font-inter font-semibold text-sm shadow-lg shadow-[#00B7E8]/20 hover:shadow-xl hover:shadow-[#00B7E8]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Get Free Counseling
            </a>
            <a
              href="tel:08880830077"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#1B2F6B]/15 text-[#1B2F6B] font-inter font-semibold text-sm hover:bg-[#1B2F6B]/5 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: 08880 830 077
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
