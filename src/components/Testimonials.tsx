import React from 'react';
const testimonials = [{
  name: 'Susan Carvalho',
  role: 'Associate Provost, University of Alabama',
  image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  quote: 'Hue Marcom has been a great catalyst both for the events to which we travel and for our correspondence with global partners.'
}, {
  name: 'Zach Wittmann',
  role: 'Associate Director, Recruitment College',
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  quote: 'I have found that Hue Marcom is an extremely professional company with employees that genuinely care about delivering the highest quality.'
}, {
  name: 'Ragh Singh',
  role: 'Program Manager, Strategic Global',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  quote: 'At Northern Arizona University we have had a fantastic experience working with the Hue Marcom team on a number of projects.'
}, {
  name: 'Claudia Espinoza',
  role: 'Director, International Student Recruitment',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
  quote: 'As director of international student recruitment and strategic initiatives at Wright State University I have been very satisfied.'
}];
export function Testimonials() {
  return <section className="bg-[#1a1a1a] py-24 text-white">
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
                <p className="text-xs text-gray-500 mb-4 h-8 overflow-hidden">
                  {testimonial.role}
                </p>
                <p className="text-sm text-gray-400 italic leading-relaxed flex-grow">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}