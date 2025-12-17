import React from 'react';
import { Printer, Flag, ScrollText, GalleryVertical, Frame, Monitor } from 'lucide-react';

const services = [{
  icon: Flag,
  label: 'Banner Printing (Flex / Vinyl)'
}, {
  icon: ScrollText,
  label: 'Roll-up Banner Printing'
}, {
  icon: GalleryVertical,
  label: 'X-Banner & L-Banner Printing'
}, {
  icon: Frame,
  label: 'Backdrop Printing'
}, {
  icon: Monitor,
  label: 'Window Graphics Printing'
}, {
  icon: Printer,
  label: 'Wall Sticker Printing'
}];

export function Services() {
  return <section className="pt-12 pb-12 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {services.map((service, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center group border border-gray-100 h-40">
          <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center mb-4 group-hover:bg-[#E91E63] transition-colors duration-300">
            <service.icon className="h-6 w-6 text-[#E91E63] group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-sm font-medium text-gray-900">
            {service.label}
          </h3>
        </div>)}
      </div>
    </div>
  </section>;
}