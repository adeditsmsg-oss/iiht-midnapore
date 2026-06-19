'use client';

import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  review: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Rajesh Kumar',
    role: 'Network Administrator',
    rating: 5,
    initials: 'RK',
    review:
      'The CCNA training at IIHT Midnapore was exceptional. The hands-on lab sessions gave me practical skills that helped me land my first networking job within 2 months of completing the course.',
  },
  {
    name: 'Priya Sharma',
    role: 'System Engineer',
    rating: 5,
    initials: 'PS',
    review:
      "IIHT's placement assistance was outstanding. The faculty went above and beyond to ensure we were industry-ready. I'm now working at a leading IT company in Kolkata.",
  },
  {
    name: 'Amit Ghosh',
    role: 'Cloud Engineer',
    rating: 4,
    initials: 'AG',
    review:
      'The cloud computing and AWS course was comprehensive and up-to-date. The practical approach to learning made complex concepts easy to understand. Highly recommend!',
  },
  {
    name: 'Sneha Das',
    role: 'Cybersecurity Analyst',
    rating: 5,
    initials: 'SD',
    review:
      'IIHT Midnapore transformed my career. Coming from a non-technical background, the structured curriculum and patient faculty helped me transition into cybersecurity seamlessly.',
  },
  {
    name: 'Sourav Mondal',
    role: 'Desktop Support Engineer',
    rating: 5,
    initials: 'SM',
    review:
      "Best investment I've made in my career. The hardware and networking course was thorough, and the placement cell actively connected me with employers.",
  },
  {
    name: 'Ananya Roy',
    role: 'Python Developer',
    rating: 4,
    initials: 'AR',
    review:
      "The programming course covered both fundamentals and advanced topics. The faculty's industry experience and real-world examples made learning engaging and practical.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-24"
      style={{ backgroundColor: '#F7FCFE' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4"
            style={{
              background: 'linear-gradient(135deg, rgba(0,183,232,0.1), rgba(27,47,107,0.1))',
              color: '#00B7E8',
            }}
          >
            STUDENT TESTIMONIALS
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}
          >
            What Our Students Say About Us
          </h2>
          <p
            className="max-w-2xl mx-auto text-base md:text-lg"
            style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}
          >
            Join thousands of successful IT professionals who started their career journey at IIHT
            Midnapore
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #00B7E8, #1B2F6B)',
                    }}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3
                      className="text-sm font-semibold leading-tight"
                      style={{ fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}
                    >
                      {testimonial.name}
                    </h3>
                    <p
                      className="text-xs mt-0.5"
                      style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                {/* Google Logo */}
                <GoogleIcon />
              </div>

              {/* Star Rating */}
              <div className="mb-3">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Review Text */}
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ fontFamily: 'Inter, sans-serif', color: '#4B5563' }}
              >
                &ldquo;{testimonial.review}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
