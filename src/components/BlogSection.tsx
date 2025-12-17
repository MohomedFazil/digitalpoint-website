import React from 'react';
import { ArrowRight } from 'lucide-react';
const blogs = [{
  date: '5 Jun | Video Design',
  title: 'Welcoming Freshman Kit: Helps Students Connect With University',
  image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=200&auto=format&fit=crop'
}, {
  date: '29 Aug | Trends',
  title: 'The Importance of Physical Outreach for Universities',
  image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=200&auto=format&fit=crop'
}, {
  date: '23 Apr | Video Design',
  title: '5 Universities With Unique Graduation Traditions',
  image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=200&auto=format&fit=crop'
}, {
  date: '17 Feb | Printing',
  title: 'Top 5 Social Media Marketing Trends of 2024 that are Here to Stay',
  image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=200&auto=format&fit=crop'
}];
export function BlogSection() {
  return <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Blogs</h2>
        <a href="#" className="text-[#1b63bb] font-medium flex items-center hover:underline">
          View All <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Featured Blog */}
        <div className="group cursor-pointer">
          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-6 bg-black">
            <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1000&auto=format&fit=crop" alt="Featured Blog" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-thin text-white tracking-tighter">
                Digital Point<span className="text-[#E91E63]">.</span>
              </span>
            </div>
            <div className="absolute bottom-6 left-6 text-white text-xs tracking-widest uppercase">
              • create • publish • deliver
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-medium text-gray-500">
              17 Feb | Printing
            </span>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#E91E63] transition-colors">
              Marketing Is Made Simple With Hue
            </h3>
          </div>
        </div>

        {/* Blog List */}
        <div className="space-y-6">
          {blogs.map((blog, index) => <div key={index} className="flex gap-4 group cursor-pointer items-start">
            <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
              <img src={blog.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex-1 py-1">
              <span className="text-xs font-medium text-gray-500 block mb-1">
                {blog.date}
              </span>
              <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-[#E91E63] transition-colors">
                {blog.title}
              </h3>
            </div>
          </div>)}

          {/* Featured secondary item */}
          <div className="bg-[#1b63bb]/10 p-6 rounded-xl mt-4 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#1b63bb] uppercase tracking-wider mb-1 block">
                New Guide
              </span>
              <h4 className="font-bold text-gray-900">
                Customized Graduation Kits: Bring Graduation to Your Doorstep
              </h4>
            </div>
            <div className="w-10 h-10 bg-[#1b63bb] rounded-full flex items-center justify-center text-white flex-shrink-0">
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
}