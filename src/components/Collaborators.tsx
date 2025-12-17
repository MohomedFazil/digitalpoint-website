import React from 'react';
const logos = ['Purdue University', 'Cornell Education', 'IN-COUNTRY', 'Sault College', 'Montpellier Business School', 'Austin Peay', 'Woodbury University'];
export function Collaborators() {
  return <section className="py-16 bg-white relative z-20">
    <div className="text-center mb-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Trusted Collaborators
      </h2>
      <p className="text-gray-500 text-sm">
        From bustling universities to innovative recruitment institutions, our
        family spans the globe.
      </p>
    </div>

    <div className="-mb-28 relative z-30 w-full h-[75px] bg-white flex items-center justify-center"> {/* Added flex and centering */}
      {/* Wavy Background Container 1 */}
      <div className="absolute w-full h-1/2 flex items-center justify-center transform -skew-y-6 scale-100 origin-center" > {/* Adjusted top for a small gap */}
        <div className="w-full bg-gray-50 border-y border-black py-6 overflow-hidden">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap">
            {[...logos, ...logos, ...logos].map((logo, i) => <div key={`top-${i}`} className="inline-flex items-center justify-center px-8 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <span className="text-xl font-bold text-gray-800 font-serif">
                {logo}
              </span>
            </div>)}
          </div>
        </div>
      </div>

      {/* Wavy Background Container 2 */}
      <div className="absolute w-full h-1/2 flex items-center justify-center transform skew-y-6 scale-100 origin-center" > {/* Adjusted bottom for a small gap */}
        <div className="w-full bg-gray-50 border-y border-black py-6 overflow-hidden">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap">
            {[...logos, ...logos, ...logos].map((logo, i) => <div key={`bottom-${i}`} className="inline-flex items-center justify-center px-8 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
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
