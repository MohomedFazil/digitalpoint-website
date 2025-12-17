import React from 'react';
import { MoveRight } from 'lucide-react';
export function MarcomSection() {
  return <section className="bg-[#1a1a1a] pt-32 pb-24 relative overflow-hidden z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Your Ideal Marcom Partner, Delivering Brilliance Globally.
          </h2>
        </div>
        <div className="text-gray-400 text-lg leading-relaxed space-y-6">
          <p>
            Imagine a world where attracting students is effortless. A world
            where your brand voice resonates across all platforms, from
            vibrant brochures to engaging social media campaigns. At Hue, we
            turn that vision into reality.
          </p>
          <p>
            Over more than a decade, Hue Marcom has gradually evolved into a
            space that offers a comprehensive suite of marketing and
            communication (marcom) solutions designed to supercharge your
            student recruitment.
          </p>
        </div>
      </div>
    </div>

    {/* Decorative Elements */}
    <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-full h-full text-white/20" viewBox="0 0 100 100">
            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
            <text className="text-[10px] uppercase tracking-widest fill-current">
              <textPath href="#circlePath" startOffset="0%">
                Learn More • Learn More • Learn More •
              </textPath>
            </text>
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <MoveRight className="text-white w-8 h-8" />
        </div>
      </div>
    </div>
  </section>;
}