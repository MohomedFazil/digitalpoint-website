import { Link } from 'react-router-dom';


const portfolioItems = [{
  id: 1,
  image: '/assets/projects-img/project01.jpeg',
  size: 'small',
}, {
  id: 2,
  image: '/assets/projects-img/project02.jpeg',
  size: 'small',
}, {
  id: 3,
  image: '/assets/projects-img/project03.jpeg',
  size: 'tall',
}, {
  id: 4,
  image: '/assets/projects-img/project10.jpeg',
  size: 'small',
}, {
  id: 5,
  image: '/assets/projects-img/project05.jpeg',
  size: 'wide',
}, {
  id: 6,
  image: '/assets/projects-img/project06.jpeg',
  size: 'small',
}, {
  id: 7,
  image: '/assets/projects-img/project07.jpeg',
  size: 'small',
}];

export function Portfolio() {
  return (
    <section className="py-24 bg-white relative overflow-hidden font-['Montserrat']">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-[40rem] h-[40rem] bg-blue-100/30 rounded-full blur-[120px] -translate-x-1/2 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-[40rem] h-[40rem] bg-pink-100/30 rounded-full blur-[120px] translate-x-1/2 animate-pulse [animation-delay:2s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase">
            <span className="block text-gray-900 leading-none">Our</span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] via-[#E91E63] to-[#ff8a00] bg-[length:200%_auto] animate-gradient-x italic pb-2 px-2">
              Featured Work
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1b63bb] to-[#E91E63] mx-auto rounded-full" />
          <p className="text-gray-500 text-sm lg:text-base font-bold max-w-3xl mx-auto tracking-[0.15em] uppercase">
            <span className="block sm:inline"><span className="text-gray-900 font-black">Bold</span> Designs</span>
            <span className="hidden sm:inline-block mx-4 text-[#E91E63]">•</span>
            <span className="inline sm:inline"><span className="text-gray-900 font-black">Premium</span> Quality</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] sm:auto-rows-[250px]">
          {portfolioItems.map((item, idx) => (
            <div
              key={item.id}
              className={`relative group overflow-hidden rounded-[2rem] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 ${idx === 2 ? 'row-span-2' : ''} ${idx === 4 ? 'md:col-span-2' : ''}`}
            >
              {/* Image with zoom effect */}
              <img
                src={item.image}
                alt={`Portfolio item ${item.id}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}

          {/* More Projects Link */}
          <Link
            to="/projects"
            className="relative group overflow-hidden rounded-[2rem] cursor-pointer bg-gray-50 flex items-center justify-center border-2 border-dashed border-gray-200 hover:border-[#E91E63] transition-colors duration-300 col-span-2 md:col-span-1"
          >
            <div className="text-center p-6">
              <span className="block text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] to-[#E91E63] mb-2">
                +200
              </span>
              <span className="text-sm font-bold text-gray-900 uppercase tracking-widest">
                More Projects
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}