'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const WHY_CHOOSE = [
  '30+ Years of Excellence',
  'Certified Expert Faculty',
  '100% Placement Assistance',
  'Hands-on Lab Training',
  'Industry-Recognized Certifications',
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('about-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-32 bg-[#F7FCFE] overflow-hidden"
    >
      <style jsx>{`
        .about-fade {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
        }
        .about-visible .about-fade { opacity: 1; transform: translateY(0); }
        .about-visible .about-fade.delay-1 { transition-delay: 0.15s; }
        .about-visible .about-fade.delay-2 { transition-delay: 0.3s; }
        .about-visible .about-fade.delay-3 { transition-delay: 0.45s; }
        .about-visible .about-fade.delay-4 { transition-delay: 0.6s; }
      `}</style>

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#00B7E8]/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#1B2F6B]/[0.03] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ---- Left: Image ---- */}
          <div className="about-fade relative">
            <div className="relative">
              {/* Decorative accent frame */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-[#00B7E8]/30 pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 rounded-2xl bg-gradient-to-br from-[#00B7E8]/20 to-[#1B2F6B]/10 pointer-events-none" />

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#1B2F6B]/10">
                <Image
                  src="/images/about-section.png"
                  alt="IIHT Midnapore training center"
                  width={640}
                  height={480}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Floating badge */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/90 backdrop-blur-md shadow-lg">
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-[#00B7E8] to-[#1B2F6B]">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-poppins font-bold text-[#1B2F6B] text-sm leading-tight">Since 1993</p>
                    <p className="text-[#1F2937]/60 text-[0.65rem] font-inter">30+ Years Legacy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---- Right: Content ---- */}
          <div className="flex flex-col">
            {/* Section tag */}
            <div className="about-fade delay-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00B7E8]/10 text-[#00B7E8] text-xs font-inter font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B7E8]" />
                About IIHT Midnapore
              </span>
            </div>

            {/* Heading */}
            <h2 className="about-fade delay-1 mt-4 font-poppins font-extrabold text-[#1F2937] text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.15] tracking-tight">
              Building IT Professionals{' '}
              <span className="bg-gradient-to-r from-[#00B7E8] to-[#1B2F6B] bg-clip-text text-transparent">
                Since 1993
              </span>
            </h2>

            {/* Body text */}
            <div className="about-fade delay-2 mt-5 space-y-4 text-[#1F2937]/75 font-inter text-[0.95rem] sm:text-base leading-relaxed">
              <p>
                The <strong className="text-[#1F2937]">Indian Institute of Hardware Technology (IIHT)</strong> is
                one of India&apos;s most trusted IT training brands with a legacy spanning over three decades.
                With <strong className="text-[#1F2937]">350+ centers across 20+ countries</strong>, IIHT has
                transformed millions of aspiring tech professionals into industry-ready experts.
              </p>
              <p>
                The <strong className="text-[#1F2937]">IIHT Midnapore branch</strong> proudly serves students
                across the Paschim Medinipur district and surrounding regions, bringing world-class IT education
                to the doorstep of West Bengal&apos;s youth. Our mission is to bridge the gap between academic
                knowledge and real-world industry demands through hands-on training, certified coursework, and
                dedicated placement support.
              </p>
              <p>
                We are proud partners of global technology leaders including{' '}
                <strong className="text-[#1F2937]">Microsoft, Cisco, CompTIA, Red Hat, and HP</strong>, ensuring
                our certifications are recognized and valued by employers worldwide.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="about-fade delay-3 mt-8 grid sm:grid-cols-2 gap-4">
              {/* Mission */}
              <div className="group p-5 rounded-2xl bg-white border border-[#00B7E8]/10 shadow-sm hover:shadow-md hover:border-[#00B7E8]/25 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#00B7E8]/10 to-[#1B2F6B]/10 text-[#00B7E8] group-hover:from-[#00B7E8] group-hover:to-[#1B2F6B] group-hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  <h3 className="font-poppins font-bold text-[#1F2937] text-base">Our Mission</h3>
                </div>
                <p className="text-[#1F2937]/70 text-sm font-inter leading-relaxed">
                  To empower students with industry-relevant IT skills and globally recognized certifications
                  for successful careers.
                </p>
              </div>

              {/* Vision */}
              <div className="group p-5 rounded-2xl bg-white border border-[#1B2F6B]/10 shadow-sm hover:shadow-md hover:border-[#1B2F6B]/25 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#1B2F6B]/10 to-[#00B7E8]/10 text-[#1B2F6B] group-hover:from-[#1B2F6B] group-hover:to-[#00B7E8] group-hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                  <h3 className="font-poppins font-bold text-[#1F2937] text-base">Our Vision</h3>
                </div>
                <p className="text-[#1F2937]/70 text-sm font-inter leading-relaxed">
                  To be the most trusted IT training institute in Paschim Medinipur, creating a pipeline
                  of skilled technology professionals.
                </p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="about-fade delay-4 mt-8">
              <h3 className="font-poppins font-bold text-[#1F2937] text-lg mb-4">Why Choose Us</h3>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {WHY_CHOOSE.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#00B7E8] to-[#1B2F6B] flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="font-inter text-sm text-[#1F2937] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
