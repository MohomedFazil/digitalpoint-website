import { Printer, Flag, ScrollText, GalleryVertical, Frame, Monitor, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [{
  icon: Flag,
  label: 'Flag Printing',
  image: '/assets/services-img/flag.png'
}, {
  icon: ScrollText,
  label: 'X-Banners Printing',
  image: '/assets/services-img/x_banner.png'
}, {
  icon: GalleryVertical,
  label: 'Flex Banner Printing',
  image: '/assets/services-img/flex.png'
}, {
  icon: Frame,
  label: 'Light and Name Boards Printing',
  image: '/assets/services-img/light_Name.png'
}, {
  icon: Monitor,
  label: 'Funeral Banners Printing',
  image: '/assets/services-img/funeral.png'
}, {
  icon: Printer,
  label: 'Sticker Printing',
  image: '/assets/services-img/sticker.png'
}, {
  icon: Printer,
  label: 'Transparent Sticker Printing',
  image: '/assets/services-img/transparent.png'
}];

export function Services() {
  return (
    <section className="py-24 bg-white relative overflow-hidden font-['Montserrat']">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-blue-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-pink-100/30 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 animate-pulse [animation-delay:2s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="text-center space-y-3">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase">
            <span className="block text-gray-900 leading-none">Our</span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] via-[#E91E63] to-[#ff8a00] bg-[length:200%_auto] animate-gradient-x italic pb-2 px-2">
              Premium Services
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1b63bb] to-[#E91E63] mx-auto rounded-full" />
          <p className="text-gray-500 text-sm lg:text-base font-bold max-w-3xl mx-auto tracking-[0.15em] uppercase">
            <span className="text-gray-900 font-black">Precision</span> in Every Pixel <br className="sm:hidden" />
            <span className="hidden sm:inline-block mx-4 text-[#E91E63]">•</span>
            <span className="text-gray-900 font-black">Excellence</span> in Every Print
          </p>
        </div>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Modern fade effect for marquee edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white/80 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white/80 to-transparent z-10" />

        <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap py-6">
          {[...services, ...services, ...services].map((service, index) => (
            <Link
              to="/services"
              key={index}
              className="group/card relative flex flex-col items-start justify-end text-left bg-white border border-gray-100 p-8 rounded-[2rem] shadow-[0_15px_40px_-20px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(233,30,99,0.2)] transition-all duration-700 h-72 w-80 mx-6 flex-shrink-0 overflow-hidden"
            >
              {/* Image Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.label}
                  className="w-full h-full object-cover opacity-[0.55] group-hover/card:opacity-[0.75] scale-110 group-hover/card:scale-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-black text-gray-900 transition-all duration-500 group-hover/card:text-[#E91E63] whitespace-normal max-w-[220px] leading-tight uppercase tracking-tight group-hover/card:translate-x-2">
                  {service.label}
                </h3>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-[#1b63bb] to-[#E91E63] w-full transition-all duration-700" />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center relative z-10">
        <Link
          to="/services"
          className="group relative inline-flex items-center gap-4 px-12 py-5 bg-gradient-to-r from-[#1b63bb] to-[#E91E63] text-white rounded-full font-black tracking-widest uppercase text-sm shadow-[0_10px_30px_-10px_rgba(233,30,99,0.3)] hover:shadow-[0_20px_50px_-10px_rgba(233,30,99,0.5)] transition-all duration-500 overflow-hidden hover:scale-110 active:scale-95"
        >
          <span className="relative z-10 text-white">View All Services</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10 text-white" />

          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite] transition-transform" />
        </Link>
      </div>
    </section>
  );
}