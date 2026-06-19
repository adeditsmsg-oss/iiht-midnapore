'use client';

import React, { useState, type FormEvent } from 'react';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  courseInterest: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
}

const courseOptions = [
  'CCNA/CCNP',
  'Cloud/AWS',
  'Cybersecurity',
  'Python/Java',
  'Linux/RHCE',
  'Microsoft MCSA',
  'Hardware & Networking',
  'SAP/ERP',
  'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    courseInterest: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({ fullName: '', phone: '', email: '', courseInterest: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24" style={{ backgroundColor: '#F0F9FF' }}>
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
            GET IN TOUCH
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}
          >
            Ready to Start Your IT Career?
          </h2>
          <p
            className="max-w-2xl mx-auto text-base md:text-lg"
            style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}
          >
            Fill out the form below and our counselor will get back to you within 24 hours
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact Information */}
          <div className="space-y-4">
            {/* Phone */}
            <a
              href="tel:08880830077"
              className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'linear-gradient(135deg, #00B7E8, #1B2F6B)' }}
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}>
                  Phone
                </h3>
                <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif', color: '#00B7E8' }}>
                  08880830077
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918880830077?text=Hi%20IIHT%20Midnapore%2C%20I%27m%20interested%20in%20your%20courses"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: '#25D366' }}
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}>
                  WhatsApp
                </h3>
                <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif', color: '#25D366' }}>
                  Send Message
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@iihtmidnapore.com"
              className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'linear-gradient(135deg, #00B7E8, #1B2F6B)' }}
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}>
                  Email
                </h3>
                <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif', color: '#00B7E8' }}>
                  info@iihtmidnapore.com
                </p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #00B7E8, #1B2F6B)' }}
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}>
                  Address
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}>
                  Near Smart Computer, Dewan Babar Chawk, Judges Court Road, Dharma, Midnapore - 721101
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #00B7E8, #1B2F6B)' }}
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}>
                  Business Hours
                </h3>
                <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}>
                  Mon-Sat, 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100">
            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200">
                <p className="text-sm text-green-700 font-medium flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Thank you! Our counselor will contact you within 24 hours.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium mb-1.5"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none focus:ring-2 ${
                    errors.fullName
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-gray-200 focus:border-[#00B7E8] focus:ring-[#00B7E8]/20'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1.5"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your 10-digit phone number"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none focus:ring-2 ${
                    errors.phone
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-gray-200 focus:border-[#00B7E8] focus:ring-[#00B7E8]/20'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1.5"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm transition-all duration-200 outline-none focus:ring-2 focus:border-[#00B7E8] focus:ring-[#00B7E8]/20"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              {/* Course Interest */}
              <div>
                <label
                  htmlFor="courseInterest"
                  className="block text-sm font-medium mb-1.5"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}
                >
                  Course Interest
                </label>
                <select
                  id="courseInterest"
                  name="courseInterest"
                  value={formData.courseInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm transition-all duration-200 outline-none focus:ring-2 focus:border-[#00B7E8] focus:ring-[#00B7E8]/20 bg-white appearance-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <option value="">Select a course</option>
                  {courseOptions.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1.5"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your learning goals..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm transition-all duration-200 outline-none focus:ring-2 focus:border-[#00B7E8] focus:ring-[#00B7E8]/20 resize-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  background: 'linear-gradient(135deg, #F44336, #FF7043)',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
