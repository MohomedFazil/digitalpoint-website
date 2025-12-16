import React from 'react';
import { Play } from 'lucide-react';
export function VideoSection() {
  return <section className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-[21/9] group cursor-pointer">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" alt="Team working in printing press" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform duration-300">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Play className="h-6 w-6 text-[#E91E63] ml-1 fill-[#E91E63]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}