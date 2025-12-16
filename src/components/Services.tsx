import React from 'react';
import { Printer, Package, Truck, Layers, Zap, BoxIcon } from 'lucide-react';
const services = [{
  icon: Printer,
  label: 'Printing Partner'
}, {
  icon: BoxIcon,
  label: 'Warehousing Partner'
}, {
  icon: Package,
  label: 'Packaging Partner'
}, {
  icon: Zap,
  label: 'Swag Partner'
}, {
  icon: Truck,
  label: 'Logistic Partner'
}, {
  icon: Layers,
  label: 'Digital Partner'
}];
export function Services() {
  return <section className="py-12 bg-gray-50">
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