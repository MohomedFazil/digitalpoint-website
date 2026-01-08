import { Facebook, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Footer() {
  return (
    <footer className="pt-24 pb-12 border-t border-gray-200 relative overflow-hidden">
      {/* Full Soft Background Image Replacement */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-[0.2]">
        <img src="/footer-soft-glow.png" className="w-full h-full object-cover" alt="" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex flex-col space-y-4 group">
              <div className="flex items-center space-x-3">
                <img
                  src='/logo.png'
                  alt="DigitalPoint Logo"
                  className="w-28 h-auto group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(0,0,0,0.05)]"
                />
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2.5 rounded-xl bg-white text-[#E91E63] shrink-0 border border-gray-100 shadow-lg">
                <MapPin className="h-5 w-5" />
              </div>
              <p className="text-gray-600 text-sm font-medium leading-relaxed pt-0.5">
                11640, Makola, Mawaramandiya, <br />
                Kiribathgoda, Sri Lanka
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-extrabold text-lg mb-8 relative">
              Quick Links
              <span className="absolute -bottom-2.5 left-0 w-12 h-1 bg-[#E91E63] rounded-full shadow-[0_0_15px_rgba(233,30,99,0.3)]" />
            </h3>
            <ul className="space-y-4 text-sm font-semibold text-gray-500">
              {['Home', 'About Us', 'Leadership', 'Services', 'Projects', 'Blog'].map(item => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, '-') === 'home' ? '' : item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-gray-900 hover:translate-x-1 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-3 h-[2px] bg-[#E91E63] mr-0 group-hover:mr-2 transition-all opacity-0 rounded-full shadow-[0_0_8px_rgba(233,30,99,0.3)]" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-gray-900 font-extrabold text-lg mb-8 relative">
              Our Services
              <span className="absolute -bottom-2.5 left-0 w-12 h-1 bg-[#1b63bb] rounded-full shadow-[0_0_15px_rgba(27,99,187,0.3)]" />
            </h3>
            <ul className="space-y-4 text-sm font-semibold text-gray-500">
              {[
                'Flag Printing',
                'X-Banners Printing',
                'Flex Banner Printing',
                'Light and Name Boards Printing',
                'Funeral Banners Printing',
                'Sticker and Transparent sticker Printing'
              ].map(item => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="hover:text-gray-900 hover:translate-x-1 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-3 h-[2px] bg-[#1b63bb] mr-0 group-hover:mr-2 transition-all opacity-0 rounded-full shadow-[0_0_8px_rgba(27,99,187,0.3)]" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Us */}
          <div>
            <h3 className="text-gray-900 font-extrabold text-lg mb-8 relative">
              Connect Us
              <span className="absolute -bottom-2.5 left-0 w-12 h-1 bg-[#E91E63] rounded-full shadow-[0_0_15px_rgba(233,30,99,0.3)]" />
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/14RCixPvVDR/"
                className="w-12 h-12 rounded-2xl border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:bg-[#E91E63] hover:text-white hover:border-[#E91E63] hover:-translate-y-2 transition-all duration-300 shadow-md group"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="tel:+94740655900"
                className="w-12 h-12 rounded-2xl border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:bg-[#E91E63] hover:text-white hover:border-[#E91E63] hover:-translate-y-2 transition-all duration-300 shadow-md group"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col items-center text-sm text-gray-400 font-bold tracking-tight">
          <p>© {new Date().getFullYear()} DigitalPoint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}