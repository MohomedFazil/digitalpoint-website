import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, MapPin } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <span className="text-4xl font-light tracking-tighter text-gray-900 block">
              hue<span className="text-[#E91E63] text-xs align-top">.</span>
            </span>
            <div className="flex items-start space-x-3 text-gray-500 text-sm leading-relaxed">
              <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <p>
                1102, Pinnacle Business Park, Corporate Road, <br />
                Prahladnagar, Ahmedabad, India - 380015
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {['About Us', 'Our Work', 'Clientele', 'Gallery', 'Blogs'].map(item => <li key={item}>
                    <a href="#" className="hover:text-[#E91E63] transition-colors">
                      {item}
                    </a>
                  </li>)}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {['Print', 'Merchandise', 'Warehousing', 'Distribution', 'Customized Merchandise'].map(item => <li key={item}>
                  <a href="#" className="hover:text-[#E91E63] transition-colors">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Connect Us */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Connect Us</h3>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#E91E63] hover:text-white hover:border-[#E91E63] transition-all duration-300">
                  <Icon className="h-4 w-4" />
                </a>)}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© Copyright Hue of 2024. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Website Design & Developed by Softqube Technologies LLC.
          </p>
        </div>
      </div>
    </footer>;
}