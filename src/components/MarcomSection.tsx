import React from 'react';
import { MoveRight } from 'lucide-react';
export function MarcomSection() {
  return <section className="bg-[#1a1a1a] pt-32 pb-24 relative overflow-hidden z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Your Trusted Printing Partner, Bringing Designs to Life.
          </h2>
        </div>
        <div className="text-gray-400 text-lg leading-relaxed space-y-6">
          <p>
            Imagine a place where every print reflects clarity, precision, and professional design. Where your message stands out whether it's displayed on a flag, banner, board, or sticker. At Digital Point, we transform ideas into high quality printed visuals that make a lasting impression.
          </p>
          <p>
            From vibrant flag and X-banner printing to durable flex banners, light boards, name boards, funeral banners, and premium stickers, we deliver designs crafted with care and printed to perfection. With a focus on quality materials, accurate colors, and clean finishes, Digital Point provides reliable printing solutions that elevate your brand presence every time.
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
          <MoveRight className="text-gray-400/20 w-8 h-8" />
        </div>
      </div>
    </div>
  </section>;
}