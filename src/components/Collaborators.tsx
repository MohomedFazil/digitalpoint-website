import React from 'react';
const logos = ['Purdue University', 'Cornell Education', 'IN-COUNTRY', 'Sault College', 'Montpellier Business School', 'Austin Peay', 'Woodbury University'];
export function Collaborators() {
  return <section className="py-16 bg-white overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Trusted Collaborators
        </h2>
        <p className="text-gray-500 text-sm">
          From bustling universities to innovative recruitment institutions, our
          family spans the globe.
        </p>
      </div>

      <div className="relative w-full h-32 bg-white">
        {/* Wavy Background Container */}
        <div className="absolute inset-0 flex items-center justify-center transform -skew-y-3 scale-110">
          <div className="w-full bg-gray-50 border-y border-gray-100 py-8 overflow-hidden">
            <div className="flex space-x-12 animate-marquee whitespace-nowrap">
              {[...logos, ...logos, ...logos].map((logo, i) => <div key={i} className="inline-flex items-center justify-center px-8 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <span className="text-xl font-bold text-gray-800 font-serif">
                    {logo}
                  </span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}