import { Printer, Flag, ScrollText, GalleryVertical, Frame, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [{
  icon: Flag,
  label: 'Flag Printing'
}, {
  icon: ScrollText,
  label: 'X-Banners Printing'
}, {
  icon: GalleryVertical,
  label: 'Flex Banner Printing'
}, {
  icon: Frame,
  label: 'Light and Name Boards Printing'
}, {
  icon: Monitor,
  label: 'Funeral Banners Printing'
}, {
  icon: Printer,
  label: 'Sticker and Transparent sticker Printing'
}];

export function Services() {
  return <section className="pt-12 pb-12 bg-gray-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          We provide posters, banners, business cards, mugs, and custom prints with consistent quality, flexible quantities, and timely delivery.
        </p>
      </div>
    </div>

    <div className="relative flex overflow-hidden group">
      <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
        {[...services, ...services, ...services].map((service, index) => (
          <Link
            to="/services"
            key={index}
            className="inline-flex flex-col items-center justify-center text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-48 w-72 mx-4 flex-shrink-0 group/card"
          >
            <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center mb-4 group-hover/card:bg-[#E91E63] transition-colors duration-300">
              <service.icon className="h-6 w-6 text-[#E91E63] group-hover/card:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
              {service.label}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  </section>;
}