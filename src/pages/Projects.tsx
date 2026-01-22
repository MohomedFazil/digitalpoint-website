import React, { useState, useEffect, useCallback } from 'react';
import { Footer } from '../components/Footer';
import { Testimonials } from '../components/Testimonials';
import { Button } from '../components/ui/Button';
import { ArrowRight, X, Clock, Layers, FileCheck, ChevronRight, ChevronLeft } from 'lucide-react';

// Project Data
const projects = [
  {
    id: 1,
    title: "Empire Sports Complex Branding",
    category: "Event Branding",
    image: "/assets/projects-img/project22.jpeg",
    description: "Complete event branding solution with flex banners, stage backdrops, and directional signboards. Enhances visibility and consistency throughout the sports complex for maximum audience engagement.",
    duration: "7 Working Days",
    material: "Heavy-duty Flex & Vinyl",
    sample: "Site Mockup Available"
  },
  {
    id: 2,
    title: "Retail Shop Front Branding",
    category: "Shop Branding",
    image: "/assets/projects-img/project02.jpeg",
    description: "End-to-end shop branding with illuminated boards, vinyl stickers, and exterior signage. Focused on improving storefront appeal and strengthening brand recognition for retail businesses.",
    duration: "5 Working Days",
    material: "Acrylic, LED & Vinyl",
    sample: "Digital Proofs"
  },
  {
    id: 3,
    title: "Large Format Flex & Banner Campaign",
    category: "Printing",
    image: "/assets/projects-img/project03.jpeg",
    description: "High-resolution flex banners and hoarding boards for outdoor advertising. Weather-resistant materials and vibrant color accuracy ensure long-lasting visibility in high-traffic urban locations.",
    duration: "3 Working Days",
    material: "UV Resistant Flex",
    sample: "Material Swatch"
  },
  {
    id: 4,
    title: "3D LED Signage & Lettering",
    category: "Sign Boards",
    image: "/assets/projects-img/project20.jpeg",
    description: "Custom-fabricated 3D plastic and stainless-steel letters with LED lighting. CNC and laser cutting techniques achieve precise detailing and premium finishes for a modern look.",
    duration: "10 Working Days",
    material: "Stainless Steel & Acrylic",
    sample: "3D Render"
  },
  {
    id: 5,
    title: "Exhibition Stall Design & Fabrication",
    category: "Marketing",
    image: "/assets/projects-img/project24.jpeg",
    description: "Creative stall design for trade fairs, including structural panels, branded graphics, and lighting. Designed to attract visitors and clearly communicate brand messaging effectively.",
    duration: "12 Working Days",
    material: "MDF, Aluminum & Fabrics",
    sample: "3D Walkthrough"
  },
  {
    id: 6,
    title: "Vehicle Branding Project",
    category: "Branding",
    image: "/assets/projects-img/project18.jpeg",
    description: "Professional vehicle branding using high-quality vinyl stickers and protective lamination. Ensures maximum brand exposure while maintaining durability against weather and daily wear and tear.",
    duration: "4 Working Days",
    material: "3M Cast Vinyl",
    sample: "Layout Design"
  },
  {
    id: 7,
    title: "Light Boards & Name Boards Installation",
    category: "Printing",
    image: "/assets/projects-img/project23.jpeg",
    description: "Design, printing, and installation of LED light boards for commercial properties. Emphasizes clarity, nighttime visibility, and energy-efficient lighting solutions for any business storefront.",
    duration: "6 Working Days",
    material: "Polycarbonate & LED",
    sample: "Prototype Video"
  },
  {
    id: 8,
    title: "Sticker, Sublimation & Promotional Prints",
    category: "Marketing",
    image: "/assets/projects-img/project06.jpeg",
    description: "High-quality sticker printing and sublimation prints for promotional merchandise. Delivered fast turnaround with sharp details and long-lasting print quality for all marketing needs.",
    duration: "2 Working Days",
    material: "Premium Glossy Paper",
    sample: "Physical Sample"
  },
  {
    id: 9,
    title: "Commercial Vehicle Branding Project",
    category: "Branding",
    image: "/assets/projects-img/project25.jpeg",
    description: "Transform your vehicle into a mobile billboard with our premium full-wrap branding. High-resolution graphics and expert application ensure a seamless, professional finish that drives brand awareness on every road.",
    duration: "5 Working Days",
    material: "3M Premium Cast Vinyl",
    sample: "Digital Mockup"
  }
];

const categories = ["All", "Branding", "Printing", "Marketing"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentProjects = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const section = document.getElementById('projects-grid');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const handleNextProject = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  }, [selectedProject, filteredProjects]);

  const handlePrevProject = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  }, [selectedProject, filteredProjects]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === 'Escape') setSelectedProject(null);
      if (e.key === 'ArrowRight') handleNextProject();
      if (e.key === 'ArrowLeft') handlePrevProject();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, handleNextProject, handlePrevProject]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);


  return (
    <div className="min-h-screen bg-white font-['Montserrat'] selection:bg-[#E91E63] selection:text-white uppercase-none">
      <main>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#050505] font-['Outfit']">
          {/* Background Visuals */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
              alt="Our Project Showcase"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/10 via-transparent to-[#050505]/60"></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-1/4 w-[50rem] h-[50rem] bg-[#1b63bb]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[50rem] h-[50rem] bg-[#E91E63]/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 animate-pulse [animation-delay:1s]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <div className="inline-flex items-center space-x-3 text-xs font-black tracking-[0.5em] uppercase mb-12 text-[#E91E63] animate-fade-in-up bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
              <span className="w-2 h-2 bg-[#E91E63] rounded-full animate-ping"></span>
              <span>Project Showcase</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mb-12 leading-none animate-fade-in-up select-none uppercase overflow-visible">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/40 [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] drop-shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
                Our
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] via-[#E91E63] to-[#ff8a00] bg-[length:200%_auto] animate-gradient-x drop-shadow-[0_0_50px_rgba(233,30,99,0.3)] italic mt-2 pr-4">
                Creations.
              </span>
            </h1>

            <div className="relative max-w-3xl animate-fade-in-up [animation-delay:0.4s]">
              <p className="text-white/95 text-lg md:text-2xl lg:text-3xl leading-relaxed font-bold tracking-wider [text-shadow:_0_4px_15px_rgba(0,0,0,0.5)]">
                <span className="opacity-80 font-light italic">Where creativity meets precision.</span>
                <br />
                <span>Design that speaks louder.</span>
              </p>
            </div>
          </div>

          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Filter & Grid Section */}
        <section id="projects-grid" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filters */}
            <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8 pb-8 border-b border-gray-100">
              <div className="max-w-2xl text-center lg:text-left">
                <span className="text-[#1b63bb] font-black uppercase tracking-[0.4em] text-[10px] mb-3 block">Portfolio</span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter uppercase mb-2 overflow-visible">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] to-[#E91E63] italic pr-4">Projects</span></h2>
                <p className="text-gray-600 text-lg font-['Outfit'] leading-relaxed max-w-xl">Discover our premium digital solutions and brand success stories.</p>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-end gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${activeCategory === category
                      ? "bg-gradient-to-r from-[#1b63bb] to-[#E91E63] text-white shadow-xl shadow-pink-500/10 scale-105"
                      : "bg-gray-50 text-gray-400 hover:bg-gray-100 border border-gray-100"
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {currentProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-50 hover:-translate-y-2"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black text-[#E91E63] uppercase tracking-[0.2em] shadow-lg">
                      {project.category}
                    </div>
                    <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 lg:hidden">
                      <div className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-[0.2em]">
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-[#E91E63] transition-colors uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 font-medium line-clamp-2 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="pt-6 border-t border-gray-100 flex items-center text-[#1b63bb] font-black text-[10px] uppercase tracking-[0.3em] group-hover:text-[#E91E63] transition-colors">
                      Learn More <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Section */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-4 mt-24">
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`p-4 rounded-2xl border transition-all duration-300 ${currentPage === 1
                    ? 'text-gray-300 border-gray-100 cursor-not-allowed'
                    : 'text-gray-600 border-gray-200 hover:border-[#E91E63] hover:text-[#E91E63] hover:shadow-lg'
                    }`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-14 h-14 rounded-2xl font-black transition-all duration-300 ${currentPage === i + 1
                      ? 'bg-gradient-to-r from-[#1b63bb] to-[#E91E63] text-white shadow-xl scale-110'
                      : 'text-gray-600 hover:bg-gray-50 border border-gray-200'
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`p-4 rounded-2xl border transition-all duration-300 ${currentPage === totalPages
                    ? 'text-gray-300 border-gray-100 cursor-not-allowed'
                    : 'text-gray-600 border-gray-200 hover:border-[#E91E63] hover:text-[#E91E63] hover:shadow-lg'
                    }`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Reuse Testimonials Component if it exists, or update the design here */}
        <Testimonials />

        {/* CTA Section */}
        <section className="py-40 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=2070&auto=format&fit=crop"
              className="w-full h-full object-cover opacity-20 select-none pointer-events-none"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none overflow-visible">
              Have a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] to-[#E91E63] pr-4">Vision?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Whether it's a rebranding, a marketing campaign, or a custom print job, we are ready to bring your ideas to reality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                onClick={() => window.location.href = '/contact-us'}
                className="group relative overflow-hidden bg-gradient-to-r from-[#1b63bb] to-[#E91E63] text-white px-12 py-8 rounded-full font-black text-xl transition-all duration-500 transform hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(233,30,99,0.4)] flex items-center gap-4 w-full sm:w-auto"
              >
                <span className="relative z-10">Start a Project</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite] transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => window.location.href = '/services'}
                className="rounded-full px-12 py-8 text-white border-white/20 hover:border-[#E91E63] hover:text-white font-black text-xl bg-white/5 backdrop-blur-xl transition-all hover:bg-white/10 w-full sm:w-auto"
              >
                View Services
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedProject(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl transition-opacity animate-in fade-in duration-500" />

          <div
            className="relative w-full max-w-6xl bg-white rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col lg:grid lg:grid-cols-12 max-h-[90vh] lg:h-[80vh] animate-in fade-in zoom-in duration-500 z-10"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button - Always visible */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 lg:top-8 lg:right-8 z-50 p-3 lg:p-4 bg-gray-900/90 hover:bg-[#E91E63] text-white rounded-full transition-all backdrop-blur-md group border border-white/10 shadow-2xl"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 lg:w-6 lg:h-6 group-hover:rotate-90 transition-transform" />
            </button>

            {/* Image Section */}
            <div className="lg:col-span-7 h-80 lg:h-full relative overflow-hidden group">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <span className="bg-white/95 backdrop-blur-sm text-[#E91E63] px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            {/* Content Section - Independent Internal Scroll for Large Screens */}
            <div className="lg:col-span-5 p-8 lg:p-14 overflow-y-auto bg-white flex flex-col h-full custom-scrollbar">
              <style dangerouslySetInnerHTML={{
                __html: `
                                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                                .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
                                .custom-scrollbar::-webkit-scrollbar-thumb { background: #E91E63; border-radius: 10px; }
                            `}} />

              <div className="flex-1">
                <div className="mb-10 lg:mb-12">
                  <span className="text-[#1b63bb] font-black uppercase tracking-[0.4em] text-[10px] mb-3 block">Case Study</span>
                  <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase tracking-tight">
                    {selectedProject.title}
                  </h2>
                  <div className="w-16 h-1.5 bg-gradient-to-r from-[#1b63bb] to-[#E91E63] rounded-full"></div>
                </div>

                <div className="space-y-10 lg:space-y-12">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6 flex items-center gap-4">
                      Project Overview
                      <span className="h-px flex-1 bg-gray-100"></span>
                    </h4>
                    <p className="text-gray-600 text-base lg:text-lg lg:leading-relaxed font-medium">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div className="flex items-center gap-5 p-6 lg:p-8 rounded-[2rem] bg-gray-50 border border-gray-100 group/item hover:border-[#E91E63]/20 transition-all hover:bg-white hover:shadow-xl">
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#E91E63] group-hover/item:scale-110 group-hover/item:bg-[#E91E63] group-hover/item:text-white transition-all duration-500">
                        <Clock className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Duration</p>
                        <p className="text-gray-900 font-black uppercase tracking-tight text-lg lg:text-xl">{selectedProject.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 p-6 lg:p-8 rounded-[2rem] bg-gray-50 border border-gray-100 group/item hover:border-[#1b63bb]/20 transition-all hover:bg-white hover:shadow-xl">
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#1b63bb] group-hover/item:scale-110 group-hover/item:bg-[#1b63bb] group-hover/item:text-white transition-all duration-500">
                        <Layers className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Material</p>
                        <p className="text-gray-900 font-black uppercase tracking-tight text-lg lg:text-xl">{selectedProject.material}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 p-6 lg:p-8 rounded-[2rem] bg-gray-50 border border-gray-100 group/item hover:border-green-500/20 transition-all hover:bg-white hover:shadow-xl">
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-green-600 group-hover/item:scale-110 group-hover/item:bg-green-600 group-hover/item:text-white transition-all duration-500">
                        <FileCheck className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Sample</p>
                        <p className="text-gray-900 font-black uppercase tracking-tight text-lg lg:text-xl">{selectedProject.sample}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

