'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  {
    target: 5000,
    suffix: '+',
    label: 'Students Trained',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    target: 350,
    suffix: '+',
    label: 'Centers Nationwide',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    target: 95,
    suffix: '%',
    label: 'Placement Rate',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    target: 30,
    suffix: '+',
    label: 'Years of Excellence',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
];

function useCounter(target: number, isActive: boolean, duration: number = 2000): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [isActive, target, duration]);

  return count;
}

function StatCard({
  stat,
  index,
  isVisible,
}: {
  stat: StatItem;
  index: number;
  isVisible: boolean;
}) {
  const count = useCounter(stat.target, isVisible, 2200);

  return (
    <div
      className={`relative group text-center p-8 md:p-10 rounded-2xl transition-all duration-700 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
      }}
    >
      {/* Subtle hover border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          border: '1px solid rgba(255, 255, 255, 0.25)',
        }}
      />

      {/* Icon */}
      <div
        className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'rgba(255, 255, 255, 0.6)',
        }}
      >
        {stat.icon}
      </div>

      {/* Counter */}
      <div
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2 tabular-nums"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {count.toLocaleString()}
        <span style={{ color: '#00B7E8' }}>{stat.suffix}</span>
      </div>

      {/* Label */}
      <p
        className="text-sm sm:text-base font-medium tracking-wide uppercase"
        style={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '0.08em',
        }}
      >
        {stat.label}
      </p>
    </div>
  );
}

export default function Achievements() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #00B7E8 0%, #1B2F6B 100%)',
      }}
    >
      {/* Decorative mesh pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="achievement-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#achievement-grid)" />
        </svg>
      </div>

      {/* Background glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-1/4 w-80 h-80 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1), transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block px-5 py-2 rounded-full text-xs font-semibold tracking-[0.2em] uppercase mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              color: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            OUR ACHIEVEMENTS
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Numbers That Speak{' '}
            <span className="block sm:inline">for Themselves</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
