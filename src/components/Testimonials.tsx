import React from 'react';
const testimonials = [{
  name: 'Chandana Lakmal Rubasinghe',
  image: '/testimonials/test01.jpeg',
  quote: 'Highly recommended. Excellent service with outstanding quality finished products. Thank you to the entire team.'
}, {
  name: 'Subhash Gunawardhane',
  image: '/testimonials/test02.jpeg',
  quote: 'Excellent service with prompt responses. DIGITAL Point delivers high-quality printing and advertising products at affordable prices. Friendly staff, flexible pricing, on-time delivery. Highly recommended.'
},  {
  name: 'Sampath Lanka Oil Mart',
  image: '/testimonials/test03.jpeg',
  quote: 'Highly professional service with excellent quality finished products. Very satisfied with the overall experience. Strongly recommended.'
},  {
  name: 'Simarol Car Care',
  image: '/testimonials/test04.jpeg',
  quote: 'Great service, timely delivery, and top-quality results. The team was supportive and professional throughout. Highly recommended.'
}];
export function Testimonials() {
  return <section className="bg-[#1a1a1a] pt-48 pb-24 text-white relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-4">
          What They Have To Say About Us?
        </h2>
        <p className="text-gray-400">
          But don't just take our word for it — here's what some of our
          satisfied clients have to say
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((testimonial, index) => <div key={index} className="flex flex-col items-center text-center group">
          <div className="relative mb-8">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-[#E91E63] transition-colors duration-300">
              <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gray-700 group-hover:bg-[#E91E63] transition-colors duration-300"></div>
          </div>

          <div className="bg-[#222] p-6 rounded-2xl border border-gray-800 relative hover:border-gray-700 transition-colors h-full flex flex-col">
            <h3 className="text-lg font-bold text-white mb-1">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-400 italic leading-relaxed flex-grow">
              "{testimonial.quote}"
            </p>
          </div>
        </div>)}
      </div>
    </div>
  </section>;
}