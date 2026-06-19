import React from 'react';

export default function MapEmbed() {
  return (
    <section id="location" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}
          >
            Find Us on the Map
          </h2>
        </div>
      </div>

      {/* Map Embed */}
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.342!2d87.3116577!3d22.4161484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI0JzU4LjEiTiA4N8KwMTgnNDIuMCJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="IIHT Midnapore Location"
          className="w-full"
        />
      </div>
    </section>
  );
}
