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
        image: "/projects/project22.jpeg",
        description: "Complete event branding solution with flex banners, stage backdrops, and directional signboards. Enhances visibility and consistency throughout the sports complex for maximum audience engagement.",
        duration: "7 Working Days",
        material: "Heavy-duty Flex & Vinyl",
        sample: "Site Mockup Available"
    },
    {
        id: 2,
        title: "Retail Shop Front Branding",
        category: "Shop Branding",
        image: "/projects/project02.jpeg",
        description: "End-to-end shop branding with illuminated boards, vinyl stickers, and exterior signage. Focused on improving storefront appeal and strengthening brand recognition for retail businesses.",
        duration: "5 Working Days",
        material: "Acrylic, LED & Vinyl",
        sample: "Digital Proofs"
    },
    {
        id: 3,
        title: "Large Format Flex & Banner Campaign",
        category: "Printing",
        image: "/projects/project03.jpeg",
        description: "High-resolution flex banners and hoarding boards for outdoor advertising. Weather-resistant materials and vibrant color accuracy ensure long-lasting visibility in high-traffic urban locations.",
        duration: "3 Working Days",
        material: "UV Resistant Flex",
        sample: "Material Swatch"
    },
    {
        id: 4,
        title: "3D LED Signage & Lettering",
        category: "Sign Boards",
        image: "/projects/project20.jpeg",
        description: "Custom-fabricated 3D plastic and stainless-steel letters with LED lighting. CNC and laser cutting techniques achieve precise detailing and premium finishes for a modern look.",
        duration: "10 Working Days",
        material: "Stainless Steel & Acrylic",
        sample: "3D Render"
    },
    {
        id: 5,
        title: "Exhibition Stall Design & Fabrication",
        category: "Marketing",
        image: "/projects/project24.jpeg",
        description: "Creative stall design for trade fairs, including structural panels, branded graphics, and lighting. Designed to attract visitors and clearly communicate brand messaging effectively.",
        duration: "12 Working Days",
        material: "MDF, Aluminum & Fabrics",
        sample: "3D Walkthrough"
    },
    {
        id: 6,
        title: "Vehicle Branding Project",
        category: "Branding",
        image: "/projects/project18.jpeg",
        description: "Professional vehicle branding using high-quality vinyl stickers and protective lamination. Ensures maximum brand exposure while maintaining durability against weather and daily wear and tear.",
        duration: "4 Working Days",
        material: "3M Cast Vinyl",
        sample: "Layout Design"
    },
    {
        id: 7,
        title: "Light Boards & Name Boards Installation",
        category: "Printing",
        image: "/projects/project23.jpeg",
        description: "Design, printing, and installation of LED light boards for commercial properties. Emphasizes clarity, nighttime visibility, and energy-efficient lighting solutions for any business storefront.",
        duration: "6 Working Days",
        material: "Polycarbonate & LED",
        sample: "Prototype Video"
    },
    {
        id: 8,
        title: "Sticker, Sublimation & Promotional Prints",
        category: "Marketing",
        image: "/projects/project06.jpeg",
        description: "High-quality sticker printing and sublimation prints for promotional merchandise. Delivered fast turnaround with sharp details and long-lasting print quality for all marketing needs.",
        duration: "2 Working Days",
        material: "Premium Glossy Paper",
        sample: "Physical Sample"
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
        <div className="min-h-screen bg-white font-sans selection:bg-[#E91E63] selection:text-white">
            <main>
                {/* Hero Section */}
                <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1506097425191-7ad538b29cef?q=80&w=2070&auto=format&fit=crop"
                            alt="Our Work"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/70"></div>
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center space-x-2 text-sm font-medium tracking-wider uppercase mb-4 text-[#E91E63]">
                                <span>Home</span>
                                <span className="text-gray-400">/</span>
                                <span className="text-[#E91E63]">Projects</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                                Our <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Creations.</span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                                Explore a showcase of our finest work, where creativity meets precision. From concept to execution, we deliver excellence.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Filter & Grid Section */}
                <section id="projects-grid" className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Filters */}
                        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                            <div className="mb-6 md:mb-0">
                                <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
                                <p className="text-gray-600 mt-2">Discover how we help brands stand out.</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                            ? "bg-[#E91E63] text-white shadow-lg shadow-pink-500/30"
                                            : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {currentProjects.map((project) => (
                                <div
                                    key={project.id}
                                    onClick={() => setSelectedProject(project)}
                                    className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-black rounded-full">
                                                View Case Study
                                            </Button>
                                        </div>
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#E91E63] uppercase tracking-wide">
                                            {project.category}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#E91E63] transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm line-clamp-2">
                                            {project.description}
                                        </p>
                                        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-[#E91E63] font-medium text-sm">
                                            Learn More <ArrowRight className="ml-2 w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Section */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-center space-x-2 mt-12">
                                <button
                                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                    className={`p-2 rounded-full border transition-all ${currentPage === 1
                                        ? 'text-gray-300 border-gray-100 cursor-not-allowed'
                                        : 'text-gray-600 border-gray-200 hover:border-[#E91E63] hover:text-[#E91E63]'
                                        }`}
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>

                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handlePageChange(i + 1)}
                                        className={`w-10 h-10 rounded-full font-bold transition-all ${currentPage === i + 1
                                            ? 'bg-[#E91E63] text-white shadow-md'
                                            : 'text-gray-600 hover:bg-gray-50 border border-gray-200'
                                            }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}

                                <button
                                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                    disabled={currentPage === totalPages}
                                    className={`p-2 rounded-full border transition-all ${currentPage === totalPages
                                        ? 'text-gray-300 border-gray-100 cursor-not-allowed'
                                        : 'text-gray-600 border-gray-200 hover:border-[#E91E63] hover:text-[#E91E63]'
                                        }`}
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* Reuse Testimonials Component */}
                <Testimonials />

                {/* CTA Section */}
                <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
                    {/* Background Image with Dark Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/printing-cta-bg.png"
                            className="w-full h-full object-cover opacity-30 select-none pointer-events-none"
                            alt=""
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/80" />
                    </div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Have a Vision? Let's Build It.</h2>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                            Whether it's a rebranding, a marketing campaign, or a custom print job, we are ready to bring your ideas to reality.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                onClick={() => window.location.href = '/contact-us'}
                                className="bg-[#1b63bb] hover:bg-[#1b63bb] text-white px-8 py-6 rounded-full font-bold text-lg transition-all group flex items-center gap-2"
                            >
                                Start a Project
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => window.location.href = '/services'}
                                className="rounded-full px-8 py-6 text-white border-white hover:bg-white hover:text-black font-bold text-lg"
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
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                    onClick={() => setSelectedProject(null)}
                >
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300" />

                    <div
                        className="relative w-full max-w-5xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] animate-in fade-in zoom-in duration-300"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-6 right-6 z-30 p-2 bg-white/20 hover:bg-white/40 text-white md:text-gray-800 md:bg-gray-100 md:hover:bg-gray-200 rounded-full transition-all backdrop-blur-md"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Image Section */}
                        <div className="w-full md:w-1/2 h-72 md:h-auto relative group">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                            <div className="absolute bottom-6 left-6 md:top-6 md:left-6 md:bottom-auto">
                                <span className="bg-[#E91E63] text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
                                    {selectedProject.category}
                                </span>
                            </div>


                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white flex flex-col">
                            <div className="flex-1">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                                    {selectedProject.title}
                                </h2>

                                <div className="space-y-8 mb-10">
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-[#E91E63] mb-3">Project Overview</h4>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            {selectedProject.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-pink-50 rounded-2xl text-[#E91E63]">
                                                <Clock className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Duration</p>
                                                <p className="text-gray-900 font-semibold">{selectedProject.duration}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                                                <Layers className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Material</p>
                                                <p className="text-gray-900 font-semibold">{selectedProject.material}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-green-50 rounded-2xl text-green-600">
                                                <FileCheck className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Sample</p>
                                                <p className="text-gray-900 font-semibold">{selectedProject.sample}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-100">
                                <button
                                    onClick={() => window.location.href = '/contact-us'}
                                    className="w-full bg-[#0A0A0A] hover:bg-[#E91E63] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all group"
                                >
                                    Request Similar Project
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
