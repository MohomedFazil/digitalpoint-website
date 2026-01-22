import { Facebook, Phone, MapPin, Mail, Copyright } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-[#050505] relative overflow-hidden font-['Montserrat']">
      {/* Premium Background Effects */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1b63bb] via-[#E91E63] to-[#ff8a00] opacity-50" />
      <div className="absolute top-1/4 left-0 w-[40rem] h-[40rem] bg-blue-900/10 rounded-full blur-[120px] -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[40rem] h-[40rem] bg-pink-900/10 rounded-full blur-[120px] translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-10">

          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="inline-block group relative">
              <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full scale-75 group-hover:scale-110 transition-transform duration-500" />
              <img
                src='/logo.png'
                alt="DigitalPoint Logo"
                className="w-32 h-auto relative z-10 group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Elevating brands through precision printing and next-generation digital solutions.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 group cursor-default">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#E91E63] group-hover:bg-[#E91E63] group-hover:text-white transition-all duration-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">
                  11640, Makola, Mawaramandiya, <br />
                  Kiribathgoda, Sri Lanka
                </p>
              </div>

              <a href='tel:+94740655900' className="flex items-center space-x-4 group cursor-pointer">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#1b63bb] group-hover:bg-[#1b63bb] group-hover:text-white transition-all duration-300">
                  <Phone className="h-5 w-5" />
                </div>
                <p className="text-gray-400 text-sm font-medium">+94 74 065 5900</p>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-black text-xl mb-10 tracking-tight uppercase relative inline-block">
              Quick Links
              <span className="absolute -bottom-3 left-0 w-12 h-1.5 bg-gradient-to-r from-[#1b63bb] to-[#E91E63] rounded-full" />
            </h3>
            <ul className="space-y-4 text-sm font-bold text-gray-500">
              {['Home', 'About Us', 'Leadership', 'Services', 'Projects', 'Blog'].map(item => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, '-') === 'home' ? '' : item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-3 h-[2px] bg-[#E91E63] mr-0 group-hover:mr-2 transition-all opacity-0 rounded-full" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white font-black text-xl mb-10 tracking-tight uppercase relative inline-block">
              Our Services
              <span className="absolute -bottom-3 left-0 w-12 h-1.5 bg-gradient-to-r from-[#E91E63] to-[#ff8a00] rounded-full" />
            </h3>
            <ul className="space-y-4 text-sm font-bold text-gray-500">
              {[
                'Flag Printing',
                'X-Banners Printing',
                'Flex Banner Printing',
                'Light and Name Boards Printing',
                'Funeral Banners Printing',
                'Product Stickers'
              ].map(item => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-3 h-[2px] bg-[#1b63bb] mr-0 group-hover:mr-2 transition-all opacity-0 rounded-full" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Us */}
          <div>
            <h3 className="text-white font-black text-xl mb-10 tracking-tight uppercase relative inline-block">
              Connect Us
              <span className="absolute -bottom-3 left-0 w-12 h-1.5 bg-gradient-to-r from-[#1b63bb] to-white rounded-full" />
            </h3>
            <div className="flex flex-col space-y-6">
              <p className="text-gray-400 text-sm font-medium italic">
                Follow us for the latest work and updates.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/14RCixPvVDR/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-[#1b63bb] hover:to-[#E91E63] hover:border-transparent hover:-translate-y-2 transition-all duration-500 group shadow-2xl"
                >
                  <Facebook className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="tel:+94740655900"
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-[#E91E63] hover:to-[#ff8a00] hover:border-transparent hover:-translate-y-2 transition-all duration-500 group shadow-2xl"
                >
                  <Phone className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col items-center justify-center gap-6">
          <div className="flex items-center text-center space-x-2 text-xs text-gray-500 font-bold uppercase tracking-[0.2em]">
            <span>&copy; {new Date().getFullYear()} Digital Point. Crafted with Excellence.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}