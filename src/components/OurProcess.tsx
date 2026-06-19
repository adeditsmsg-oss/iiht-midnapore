'use client';

import { useEffect, useRef, useState } from 'react';

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Free Counseling',
    description:
      'Book a free counseling session to understand your career goals and find the perfect course for you',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="9" y1="10" x2="15" y2="10" />
        <line x1="12" y1="7" x2="12" y2="13" />
      </svg>
    ),
  },
  {
    step: 2,
    title: 'Choose Your Course',
    description:
      'Select from our range of industry-recognized certification programs tailored to market demands',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <line x1="9" y1="7" x2="15" y2="7" />
        <line x1="9" y1="11" x2="15" y2="11" />
      </svg>
    ),
  },
  {
    step: 3,
    title: 'Hands-on Training',
    description:
      'Learn from expert faculty with practical lab sessions, real projects, and industry-standard tools',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <polyline points="7 8 10 11 7 14" />
        <line x1="13" y1="14" x2="17" y2="14" />
      </svg>
    ),
  },
  {
    step: 4,
    title: 'Get Placed',
    description:
      'Leverage our placement assistance to land your dream job in top IT companies across India',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function OurProcess() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-20 md:py-28"
      style={{ backgroundColor: '#F7FCFE' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
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
            HOW IT WORKS
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
            Your Journey to an IT Career
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, #00B7E8, #1B2F6B)',
              }}
            >
              in 4 Simple Steps
            </span>
          </h2>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connector Line */}
            <div
              className={`absolute top-[60px] left-[calc(12.5%+30px)] right-[calc(12.5%+30px)] h-[3px] transition-all duration-1000 delay-500 ${
                isVisible ? 'scale-x-100' : 'scale-x-0'
              }`}
              style={{
                background: 'linear-gradient(90deg, #00B7E8, #1B2F6B)',
                transformOrigin: 'left',
              }}
            />

            {/* Steps */}
            <div className="grid grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${300 + index * 200}ms` : '0ms',
                  }}
                >
                  {/* Numbered Circle */}
                  <div className="relative mb-8">
                    {/* Outer ring pulse */}
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-20"
                      style={{
                        background: 'linear-gradient(135deg, #00B7E8, #1B2F6B)',
                        animationDuration: '3s',
                        animationDelay: `${index * 0.5}s`,
                      }}
                    />
                    {/* White background ring */}
                    <div
                      className="relative w-[120px] h-[120px] rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #00B7E8, #1B2F6B)',
                        padding: '3px',
                      }}
                    >
                      <div
                        className="w-full h-full rounded-full flex flex-col items-center justify-center"
                        style={{ backgroundColor: '#F7FCFE' }}
                      >
                        <span
                          className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                          style={{
                            color: '#00B7E8',
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '10px',
                          }}
                        >
                          Step
                        </span>
                        <span
                          className="text-3xl font-extrabold bg-clip-text text-transparent"
                          style={{
                            backgroundImage: 'linear-gradient(135deg, #00B7E8, #1B2F6B)',
                            fontFamily: 'Poppins, sans-serif',
                          }}
                        >
                          {step.step}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: 'rgba(0, 183, 232, 0.1)',
                      color: '#00B7E8',
                      border: '1px solid rgba(0, 183, 232, 0.15)',
                    }}
                  >
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{
                      color: '#1F2937',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed max-w-[240px]"
                    style={{
                      color: '#6B7280',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Connector Line */}
            <div
              className={`absolute left-[39px] top-0 bottom-0 w-[3px] transition-all duration-1000 delay-300 ${
                isVisible ? 'scale-y-100' : 'scale-y-0'
              }`}
              style={{
                background: 'linear-gradient(180deg, #00B7E8, #1B2F6B)',
                transformOrigin: 'top',
              }}
            />

            {/* Steps */}
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-6 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${300 + index * 200}ms` : '0ms',
                  }}
                >
                  {/* Numbered Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className="w-[80px] h-[80px] rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #00B7E8, #1B2F6B)',
                        padding: '3px',
                      }}
                    >
                      <div
                        className="w-full h-full rounded-full flex flex-col items-center justify-center"
                        style={{ backgroundColor: '#F7FCFE' }}
                      >
                        <span
                          className="text-[9px] font-semibold uppercase tracking-wider"
                          style={{ color: '#00B7E8', fontFamily: 'Inter, sans-serif' }}
                        >
                          Step
                        </span>
                        <span
                          className="text-2xl font-extrabold bg-clip-text text-transparent"
                          style={{
                            backgroundImage: 'linear-gradient(135deg, #00B7E8, #1B2F6B)',
                            fontFamily: 'Poppins, sans-serif',
                          }}
                        >
                          {step.step}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-3 flex-1">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{
                        background: 'rgba(0, 183, 232, 0.1)',
                        color: '#00B7E8',
                        border: '1px solid rgba(0, 183, 232, 0.15)',
                      }}
                    >
                      {step.icon}
                    </div>

                    <h3
                      className="text-lg font-bold mb-2"
                      style={{
                        color: '#1F2937',
                        fontFamily: 'Poppins, sans-serif',
                      }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: '#6B7280',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
