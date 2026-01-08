import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import {
    Printer,
    Flag,
    Monitor,
    PenTool,
    Briefcase,
    Settings,
    Truck,
    CheckCircle,
    Clock,
    Award,
    Users,
    MapPin,
    ChevronLeft,
    ChevronRight,
    Palette,
    Store,
    LayoutGrid,
    Gem,
    Tent,
    Car,
    Layers,
    Scissors,
    Type,
    Lightbulb
} from 'lucide-react';
import { Button } from '../components/ui/Button';

interface Service {
    icon: React.ElementType;
    title: string;
    description: string;
    features: string[];
}

const ALL_SERVICES: Service[] = [
    {
        icon: Palette,
        title: "Event Branding",
        description: "Complete branding solutions for events, exhibitions, and promotions with impactful visual designs.",
        features: ["Stage Branding", "Backdrop Design", "Directional Signage"]
    },
    {
        icon: Store,
        title: "Shop Branding",
        description: "Attractive shop branding solutions to enhance visibility and create a strong brand presence.",
        features: ["Shop Front Branding", "Window Graphics"]
    },
    {
        icon: LayoutGrid,
        title: "Display Racks",
        description: "Custom-designed display racks for retail and promotional product showcasing.",
        features: ["Metal Racks", "Acrylic Racks", "Custom Sizes"]
    },
    {
        icon: Gem,
        title: "Crystal & Panel Works",
        description: "Premium crystal panels and decorative panels for signage and interior branding.",
        features: ["Crystal Letters", "Acrylic Panels", "LED Panels"]
    },
    {
        icon: Tent,
        title: "Stall Design",
        description: "Creative and functional stall designs for exhibitions, trade fairs, and expos.",
        features: ["3D Stall Design", "Fabrication", "On-site Installation"]
    },
    {
        icon: Car,
        title: "Vehicle Branding",
        description: "High-quality vehicle branding solutions to promote your business on the move.",
        features: ["Full Wraps", "Partial Wraps", "Sticker Branding"]
    },
    {
        icon: Layers,
        title: "Pylon & Hoarding Boards",
        description: "Large-scale outdoor advertising solutions for maximum brand visibility.",
        features: ["Pylon Boards", "Roadside Hoardings", "Weather-Resistant Prints"]
    },
    {
        icon: Monitor,
        title: "Display Dummies",
        description: "Eye-catching display dummies and standees for promotions and product launches.",
        features: ["Standee Displays", "Foam Board Prints", "Life-size Cutouts"]
    },
    {
        icon: Scissors,
        title: "CNC & Laser Cutting",
        description: "Precision cutting services for branding and signage materials.",
        features: ["CNC Routing", "Laser Cutting", "Custom Shapes"]
    },
    {
        icon: Type,
        title: "Plastic & S.S Letters",
        description: "Durable and stylish lettering solutions for indoor and outdoor signage.",
        features: ["Plastic Letters", "Stainless Steel Letters", "LED Letters"]
    },
    {
        icon: Flag,
        title: "Flex, Banner & Flag Printing",
        description: "Fast, affordable, and high-resolution printing for all promotional needs.",
        features: ["Flex Printing", "Flag Printing", "Funeral Banners"]
    },
    {
        icon: Printer,
        title: "Sticker & Sublimation Printing",
        description: "High-quality sticker and sublimation printing for branding and merchandise.",
        features: ["Transparent Stickers"]
    },
    {
        icon: Lightbulb,
        title: "Light Boards & Name Boards",
        description: "Illuminated and non-illuminated boards for professional business identification.",
        features: ["LED Light Boards", "Name Boards"]
    }
];

function ServiceCard({ service }: { service: Service }) {
    return (
        <div className="group w-full p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-[#E91E63] transition-colors">
                <service.icon className="w-7 h-7 text-[#E91E63] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-4 h-20 line-clamp-3">
                {service.description}
            </p>
            <ul className="space-y-2 mb-2">
                {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-[#E91E63] mr-2" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function Services() {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 6;
    const totalPages = Math.ceil(ALL_SERVICES.length / ITEMS_PER_PAGE);

    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentServices = ALL_SERVICES.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        const section = document.getElementById('services-grid');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#E91E63] selection:text-white">
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
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Capabilities.</span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                                Comprehensive printing and marketing solutions designed to elevate your brand visibility. We bring your vision to life.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Services Grid */}
                <section id="services-grid" className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-[#E91E63] font-bold uppercase tracking-wider text-sm mb-2 block">What We Do</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Premium Printing Solutions</h2>
                            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                                From large format printing to intricate custom fabrication, we deliver quality that speaks for itself.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {currentServices.map((service, index) => (
                                <ServiceCard key={index} service={service} />
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

                {/* Why Choose Us Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-[#E91E63] font-bold uppercase tracking-wider text-sm mb-2 block">Our Value</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Why Choose Us?</h2>
                            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                                We combine industry expertise with state-of-the-art technology to deliver exceptional results for every client.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Feature 1 */}
                            <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-[#E91E63]">
                                    <Clock className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Open 24 Hours</h3>
                                <p className="text-gray-600 text-sm">
                                    We are always available for your urgent needs. Day or night, we're here to help.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-[#1b63bb]">
                                    <Award className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">High Quality</h3>
                                <p className="text-gray-600 text-sm">
                                    We use modern equipment to ensure the best results. Premium materials for a premium finish.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-[#E91E63]">
                                    <Users className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Team</h3>
                                <p className="text-gray-600 text-sm">
                                    Pioneers in the advertising field. Our expertise translates into your success.
                                </p>
                            </div>

                            {/* Feature 4 */}
                            <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-[#1b63bb]">
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Local & Convenient</h3>
                                <p className="text-gray-600 text-sm">
                                    Located in the heart of Makola, Kiribathgoda. Easy access for all our local partners.
                                </p>
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
                                    <div className="md:absolute top-0 left-0 w-8 h-8 rounded-full bg-amber-600 border-4 border-white shadow-sm z-10 hidden md:block transform -translate-y-1/2"></div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-4 text-amber-600">
                                            <PenTool className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">2. Design & Prep</h3>
                                        <p className="text-gray-600 text-sm">Our team creates or verifies your designs to ensure they meet high print quality standards.</p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="relative pt-8 md:pt-0 text-center md:text-left">
                                    <div className="md:absolute top-0 left-0 w-8 h-8 rounded-full bg-red-600 border-4 border-white shadow-sm z-10 hidden md:block transform -translate-y-1/2"></div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4 text-red-600">
                                            <Settings className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">3. Production</h3>
                                        <p className="text-gray-600 text-sm">Using state-of-the-art machinery, we bring your vision to life with precision and care.</p>
                                    </div>
                                </div>

                                {/* Step 4 */}
                                <div className="relative pt-8 md:pt-0 text-center md:text-left">
                                    <div className="md:absolute top-0 left-0 w-8 h-8 rounded-full bg-green-600 border-4 border-white shadow-sm z-10 hidden md:block transform -translate-y-1/2"></div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 text-green-600">
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
                            <Button
                                onClick={() => window.location.href = '/contact-us'}
                                className="bg-[#1b63bb] hover:bg-[#1b63bb] text-white px-8 py-6 rounded-full font-bold text-lg transition-all group flex items-center gap-2 mx-auto"
                            >
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
