import { Link } from 'react-router-dom';
const portfolioItems = [{
  id: 1,
  color: 'bg-[#003366]',
  image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=500&auto=format&fit=crop',
  size: 'small'
}, {
  id: 2,
  color: 'bg-[#FFD700]',
  image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=500&auto=format&fit=crop',
  size: 'small'
}, {
  id: 3,
  color: 'bg-[#0EA5E9]',
  image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=500&auto=format&fit=crop',
  size: 'tall'
}, {
  id: 4,
  color: 'bg-[#4ADE80]',
  image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=500&auto=format&fit=crop',
  size: 'small'
}, {
  id: 5,
  color: 'bg-[#1a1a1a]',
  image: 'https://images.unsplash.com/photo-1606166325683-e6deb697d301?q=80&w=500&auto=format&fit=crop',
  size: 'wide'
}, {
  id: 6,
  color: 'bg-[#E91E63]',
  image: 'https://images.unsplash.com/photo-1541462608143-0afed760dd5c?q=80&w=500&auto=format&fit=crop',
  size: 'small'
}, {
  id: 7,
  color: 'bg-[#F97316]',
  image: 'https://images.unsplash.com/photo-1629367494173-c78a56567877?q=80&w=500&auto=format&fit=crop',
  size: 'small'
}];
export function Portfolio() {
  return <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hue has made education marketing an absolute breeze for universities
          and colleges around the world. Here's some of the work we have done
          over the years.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {portfolioItems.map((item, idx) => <div key={item.id} className={`relative group overflow-hidden rounded-xl cursor-pointer ${idx === 2 ? 'row-span-2' : ''} ${idx === 4 ? 'col-span-2' : ''}`}>
          <div className={`absolute inset-0 ${item.color} opacity-20 group-hover:opacity-0 transition-opacity z-10`}></div>
          <img src={item.image} alt={`Portfolio item ${item.id}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
            <span className="text-white font-medium border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
              View Project
            </span>
          </div>
        </div>)}

        {/* Placeholder for the last item to fill grid nicely if needed */}
        {/* Placeholder for the last item to fill grid nicely if needed */}
        <Link to="/projects" className="relative group overflow-hidden rounded-xl cursor-pointer bg-gray-100 flex items-center justify-center">
          <div className="text-center p-6">
            <span className="block text-3xl font-bold text-gray-300 mb-2">
              +200
            </span>
            <span className="text-sm text-gray-500">More Projects</span>
          </div>
        </Link>
      </div>
    </div>
  </section>;
}