import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import {
    Printer,
    Flag,
    ScrollText,
    GalleryVertical,
    Frame,
    Monitor,
    PenTool,
    Briefcase,
    Settings,
    Truck,
    CheckCircle
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export function Services() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#E91E63] selection:text-white">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
                            alt="Printing Services"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60"></div>
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center space-x-2 text-sm font-medium tracking-wider uppercase mb-4 text-[#E91E63]">
                                <span>Home</span>
                                <span className="text-gray-400">/</span>
                                <span className="text-[#E91E63]">Services</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                                Our <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Services.</span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                                Comprehensive printing and marketing solutions designed to elevate your brand visibility. We bring your vision to life.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Services Grid */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-[#E91E63] font-bold uppercase tracking-wider text-sm mb-2 block">What We Do</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Premium Printing Solutions</h2>
                            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                                From large format printing to intricate custom fabrication, we deliver quality that speaks for itself.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Service 1 */}
                            <div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-[#E91E63] transition-colors">
                                    <Flag className="w-7 h-7 text-[#E91E63] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Large Format Banners</h3>
                                <p className="text-gray-600 mb-4">
                                    High-impact flex and vinyl banners perfect for outdoor advertising, events, and building wraps. Weather-resistant and vibrant.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-sm text-gray-500">
                                        <CheckCircle className="w-4 h-4 text-[#E91E63] mr-2" />
                                        <span>Flex Face / PVC</span>
                                    </li>
                                    <li className="flex items-center text-sm text-gray-500">
                                        <CheckCircle className="w-4 h-4 text-[#E91E63] mr-2" />
                                        <span>Mesh Banners</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Service 2 */}
                            <div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-[#E91E63] transition-colors">
                                    <ScrollText className="w-7 h-7 text-[#E91E63] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Display Systems</h3>
                                <p className="text-gray-600 mb-4">
                                    Portable and professional display solutions for exhibitions, trade shows, and retail environments.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-sm text-gray-500">
                                        <CheckCircle className="w-4 h-4 text-[#E91E63] mr-2" />
                                        <span>Roll-up Banners</span>
                                    </li>
                                    <li className="flex items-center text-sm text-gray-500">
                                        <CheckCircle className="w-4 h-4 text-[#E91E63] mr-2" />
                                        <span>Pop-up Stands</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Service 3 */}
                            <div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-[#E91E63] transition-colors">
                                    <Printer className="w-7 h-7 text-[#E91E63] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Vehicle Branding</h3>
                                <p className="text-gray-600 mb-4">
                                    Turn your fleet into moving billboards with high-quality vinyl wraps and decals that last.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-sm text-gray-500">
                                        <CheckCircle className="w-4 h-4 text-[#E91E63] mr-2" />
                                        <span>Full Wraps</span>
                                    </li>
                                    <li className="flex items-center text-sm text-gray-500">
                                        <CheckCircle className="w-4 h-4 text-[#E91E63] mr-2" />
                                        <span>Decals & Lettering</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Service 4 */}
                            <div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-[#E91E63] transition-colors">
                                    <Monitor className="w-7 h-7 text-[#E91E63] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Window & Glass</h3>
                                <p className="text-gray-600 mb-4">
                                    Enhance privacy or promote sales with custom frosted films, one-way vision, and vinyl cutouts.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-sm text-gray-500">
                                        <CheckCircle className="w-4 h-4 text-[#E91E63] mr-2" />
                                        <span>One-Way Vision</span>
                                    </li>
                                    <li className="flex items-center text-sm text-gray-500">
                                        <CheckCircle className="w-4 h-4 text-[#E91E63] mr-2" />
                                        <span>Frosted Films</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Service 5 */}
                            <div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-[#E91E63] transition-colors">
                                    <Frame className="w-7 h-7 text-[#E91E63] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Signage & Fabrication</h3>
                                <p className="text-gray-600 mb-4">
                                    Custom 3D signage, lightboxes, and acrylic fabrication to make your brand stand out day and night.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-sm text-gray-500">
                                        <CheckCircle className="w-4 h-4 text-[#E91E63] mr-2" />
                                        <span>3D Letters</span>
                                    </li>
                                    <li className="flex items-center text-sm text-gray-500">
                                        <CheckCircle className="w-4 h-4 text-[#E91E63] mr-2" />
                                        <span>Lightboxes</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Service 6 */}
                            <div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-[#E91E63] transition-colors">
                                    <GalleryVertical className="w-7 h-7 text-[#E91E63] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Offset & Digital</h3>
                                <p className="text-gray-600 mb-4">
                                    High-volume printing for brochures, business cards, flyers, and corporate stationery with perfect color accuracy.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-sm text-gray-500">
                                        <CheckCircle className="w-4 h-4 text-[#E91E63] mr-2" />
                                        <span>Business Cards</span>
                                    </li>
                                    <li className="flex items-center text-sm text-gray-500">
                                        <CheckCircle className="w-4 h-4 text-[#E91E63] mr-2" />
                                        <span>Brochures</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Workflow Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-[#1b63bb] font-bold uppercase tracking-wider text-sm mb-2 block">How We Work</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our Process</h2>
                        </div>

                        <div className="relative">
                            {/* Connector Line (Desktop) */}
                            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200"></div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {/* Step 1 */}
                                <div className="relative pt-8 md:pt-0 text-center md:text-left">
                                    <div className="md:absolute top-0 left-0 w-8 h-8 rounded-full bg-[#1b63bb] border-4 border-white shadow-sm z-10 hidden md:block transform -translate-y-1/2"></div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-[#1b63bb]">
                                            <Briefcase className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">1. Consultation</h3>
                                        <p className="text-gray-600 text-sm">We discuss your needs, budget, and timeline to understand exactly what you are looking for.</p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="relative pt-8 md:pt-0 text-center md:text-left">
                                    <div className="md:absolute top-0 left-0 w-8 h-8 rounded-full bg-[#1b63bb] border-4 border-white shadow-sm z-10 hidden md:block transform -translate-y-1/2"></div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-[#1b63bb]">
                                            <PenTool className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">2. Design & Prep</h3>
                                        <p className="text-gray-600 text-sm">Our team creates or verifies your designs to ensure they meet high print quality standards.</p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="relative pt-8 md:pt-0 text-center md:text-left">
                                    <div className="md:absolute top-0 left-0 w-8 h-8 rounded-full bg-[#1b63bb] border-4 border-white shadow-sm z-10 hidden md:block transform -translate-y-1/2"></div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-[#1b63bb]">
                                            <Settings className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">3. Production</h3>
                                        <p className="text-gray-600 text-sm">Using state-of-the-art machinery, we bring your vision to life with precision and care.</p>
                                    </div>
                                </div>

                                {/* Step 4 */}
                                <div className="relative pt-8 md:pt-0 text-center md:text-left">
                                    <div className="md:absolute top-0 left-0 w-8 h-8 rounded-full bg-[#E91E63] border-4 border-white shadow-sm z-10 hidden md:block transform -translate-y-1/2"></div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center mb-4 text-[#E91E63]">
                                            <Truck className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">4. Delivery</h3>
                                        <p className="text-gray-600 text-sm">We ensure safe packaging and timely delivery or installation at your specified location.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-[#111] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Need a Custom Quote?</h2>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                            Get the best prices for your bulk printing needs. Our team is ready to assist you.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button variant="cyan" size="lg" className="rounded-full px-8 w-full sm:w-auto">
                                Request Quote
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full px-8 w-full sm:w-auto text-white border-white hover:bg-white hover:text-black">
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
