import React from 'react';
import { ArrowRight } from 'lucide-react'; // Removed unused 'Award' import
import { Button } from './ui/Button';

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-white lg:pt-20 lg:pb-28">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="z-10">
            <p className="text-[#0640a3] font-medium mb-4 tracking-wide text-sm">
              What you want us to be!
            </p>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">
              We are Your Ideal <br />
              <span className="text-[#E91E63] relative inline-block">
                Printing
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#E91E63]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>{' '}
              Partner
            </h1>
            <p className="max-w-lg mb-8 text-lg leading-relaxed text-gray-600">
              Digital Point delivers premium printing solutions for every need, from small batches to large scale orders. With a focus on quality, precision, and affordability, we bring your ideas to life beautifully and efficiently.
            </p>
            <Button
              size="lg"
              className="group bg-[#1c3eab] hover:bg-[#0a3db3] text-white transition-colors duration-300 disabled:bg-gray-100 disabled:text-gray-400 focus:outline-none focus:ring-5 focus:ring-[#0a3db3]"
              onClick={() => window.location.href = '/about-us'}
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right Content - Image Composition */}
          <div className="relative mt-10 lg:mt-0">
            {/* Main Image */}
            <div className="relative overflow-hidden transform shadow-2xl rounded-2xl lg:translate-x-8">
              <img
                src="/hero.png"
                alt="Industrial Printing Press"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute z-20 px-6 py-10 bg-white border border-gray-100 shadow-xl -top-10 -right-4 lg:-right-16 rounded-xl w-80">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">10,000+</h3>
                  <p className="text-xs tracking-wider text-gray-500 uppercase">
                    Units of Prints Produced in 2025
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-100">
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