import React, { useState, useEffect, useCallback } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Testimonials } from '../components/Testimonials';
import { Button } from '../components/ui/Button';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Project Data
const projects = [
    {
        id: 1,
        title: "TechFlow Brand Identity",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2000&auto=format&fit=crop",
        description: "Complete corporate identity overhaul for a leading fintech startup, including logo design, stationery, and brand guidelines."
    },
    {
        id: 2,
        title: "EcoScape Large Format",
        category: "Printing",
        image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2000&auto=format&fit=crop",
        description: "Massive outdoor advertising campaign featuring weather-resistant vinyl banners and building wraps for an environmental initiative."
    },
    {
        id: 3,
        title: "Urban Coffee Packaging",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2000&auto=format&fit=crop",
        description: "Sustainable and eye-catching packaging design for a premium coffee chain, focusing on organic textures and vibrant colors."
    },
    {
        id: 4,
        title: "Neon Nights Signage",
        category: "Printing",
        image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2000&auto=format&fit=crop",
        description: "Custom fabrication of 3D acrylic LED signage for a downtown nightlife district, ensuring high visibility and durability."
    },
    {
        id: 5,
        title: "Global Summit Expo",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2000&auto=format&fit=crop",
        description: "End-to-end event branding including booth design, roll-up banners, and promotional merchandise for an international conference."
    },
    {
        id: 6,
        title: "Luxe Interiors Brochure",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2000&auto=format&fit=crop",
        description: "Premium offset printing for a luxury real estate brochure, utilizing spot UV coating and high-grade matte paper."
    }
];

const categories = ["All", "Branding", "Printing", "Marketing"];

export function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

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
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Projects.</span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                                Explore a showcase of our finest work, where creativity meets precision. From concept to execution, we deliver excellence.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Filter & Grid Section */}
                <section className="py-20 bg-gray-50">
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
                            {filteredProjects.map((project) => (
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
                    </div>
                </section>

                {/* Reuse Testimonials Component */}
                <Testimonials />

                {/* CTA Section */}
                <section className="py-24 bg-[#111] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524146120755-471253493e82?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Have a Vision? Let's Build It.</h2>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                            Whether it's a rebranding, a marketing campaign, or a custom print job, we are ready to bring your ideas to reality.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                onClick={() => window.location.href = '/contactus'}
                                className="bg-[#1b63bb] hover:bg-[#0045b4] text-white px-8 py-6 rounded-full font-bold text-lg transition-all group flex items-center gap-2"
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
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300" />

                    <div
                        className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 z-20 p-2 bg-black/10 hover:bg-black/20 text-gray-800 rounded-full transition-colors backdrop-blur-md"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Image Section */}
                        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-[#E91E63] uppercase tracking-wide">
                                    {selectedProject.category}
                                </span>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                {selectedProject.title}
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {selectedProject.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
