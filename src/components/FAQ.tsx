'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What courses does IIHT Midnapore offer?',
    answer:
      'We offer a comprehensive range of IT certification courses including CCNA, CCNP (Networking), MCSA/MCSE (Microsoft), RHCE (Linux), Cloud Computing (AWS/Azure), Cybersecurity & Ethical Hacking, Python & Java Programming, Hardware & Networking, and SAP & ERP Solutions.',
  },
  {
    question: 'Does IIHT provide placement assistance?',
    answer:
      'Yes! We provide 100% placement assistance to all our students. Our dedicated placement cell connects graduates with top IT companies for roles like Network Administrator, System Engineer, Cloud Engineer, and more.',
  },
  {
    question: 'What is the duration of the courses?',
    answer:
      'Course duration varies: Short-term certification courses range from 2-4 months, while comprehensive diploma programs can last 6-12 months. We also offer weekend batches and fast-track options.',
  },
  {
    question: 'Are the certifications globally recognized?',
    answer:
      'Absolutely! Our courses prepare you for globally recognized certifications from Cisco, Microsoft, CompTIA, Red Hat, and other industry leaders. These certifications are valued by employers worldwide.',
  },
  {
    question: 'What are the eligibility requirements?',
    answer:
      'Most courses require 10+2 or graduation. No prior IT experience is needed — our programs are designed to take you from beginner to job-ready professional.',
  },
  {
    question: 'Do you offer flexible batch timings?',
    answer:
      'Yes, we offer morning, afternoon, and weekend batches to accommodate working professionals and students. We also provide fast-track intensive programs.',
  },
  {
    question: 'What kind of lab facilities do you have?',
    answer:
      'Our Midnapore center features state-of-the-art computer labs with modern workstations, dedicated networking equipment (routers, switches), and high-speed internet for hands-on practical training.',
  },
  {
    question: 'How can I enroll at IIHT Midnapore?',
    answer:
      'Simply call us at 08880830077, send a WhatsApp message, or visit our center at Judges Court Road, Dewan Babar Chawk, Midnapore. Walk-in counseling is available during business hours!',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4"
            style={{
              background: 'linear-gradient(135deg, rgba(0,183,232,0.1), rgba(27,47,107,0.1))',
              color: '#00B7E8',
            }}
          >
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}
          >
            Got Questions? We Have Answers
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  boxShadow: isOpen
                    ? '0 4px 20px rgba(0, 183, 232, 0.1)'
                    : '0 1px 3px rgba(0,0,0,0.04)',
                  borderColor: isOpen ? '#00B7E8' : undefined,
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 group"
                  style={{ focusVisibleRingColor: '#00B7E8' } as React.CSSProperties}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className="text-sm md:text-base font-semibold pr-4"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      color: isOpen ? '#00B7E8' : '#1F2937',
                    }}
                  >
                    {item.question}
                  </span>
                  {/* Plus / Minus Icon */}
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isOpen
                        ? 'linear-gradient(135deg, #00B7E8, #1B2F6B)'
                        : '#F3F4F6',
                      color: isOpen ? '#FFFFFF' : '#6B7280',
                    }}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                {/* Answer Panel */}
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '500px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-5">
                    <p
                      className="text-sm md:text-base leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
