import React from 'react';
import { ArrowRight } from 'lucide-react'; // Removed unused 'Award' import
import { Button } from './ui/Button';

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="z-10">
            <p className="text-[#1b63bb] font-medium mb-4 tracking-wide text-sm">
              What you want us to be!
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              We are Your Ideal <br />
              <span className="text-[#E91E63] relative inline-block">
                Printing
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#E91E63]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>{' '}
              Partner
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg leading-relaxed">
              We cater to all your printing needs, from posters to orientation
              kits, offering flexibility from 5 to 50,000 copies. Benefit from
              our cost advantages with high-quality printing at 50% lower costs
              due to our geographical location.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="group bg-[#1b63bb] hover:bg-[#144f8f] text-white transition-colors duration-300
                         focus:ring-2 focus:ring-[#1b63bb] focus:ring-offset-2 focus:outline-none"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Image Composition */}
          <div className="relative mt-10 lg:mt-0">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform lg:translate-x-8">
              <img src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=1632&auto=format&fit=crop" alt="Industrial Printing Press" className="w-full h-[400px] lg:h-[500px] object-cover" />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -top-10 -right-4 lg:-right-16 bg-white px-6 py-10 rounded-xl shadow-xl border border-gray-100 w-80 z-20">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">490,000</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Units of Prints Produced in 2025
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  <span className="text-[#E91E63] font-semibold">
                    Enough to wallpaper the Great Wall...
                  </span>{' '}
                  twice!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}