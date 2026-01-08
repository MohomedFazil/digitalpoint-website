import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Linkedin, Twitter, Award, Target, Users } from 'lucide-react';

// Data placeholders
const mainLeader = {
    name: "Mr.Maha Pathiranage Dinesh Sanjeewa",
    role: "Chairman",
    image: "/leadership/chairmen.jpg",
    bio: "It is my privilege to introduce Digital Point, a premier printing and marketing communications company founded in 2022. We are committed to delivering high-quality printing solutions and creative marcom services to businesses and individuals alike. At Digital Point, we understand that effective communication is the cornerstone of every successful brand. Our mission is to simplify your printing and marketing needs by providing precision, creativity, and reliability in every project, while building long-term relationships founded on trust, transparency, and professionalism. Quality, creativity, and client satisfaction are at the heart of everything we do, empowering businesses to communicate clearly, effectively, and beautifully with their audiences. We warmly invite you to experience the difference Digital Point can bring to your branding and printing projects."
};

const directors = [
    { name: "Mr.Lahiru Perera", role: "Director", image: "/leadership/director03.jpeg" },
    { name: "Mr.Manjula D. Perera", role: "Director", image: "/leadership/director01.jpeg" },
    { name: "Mr.Dilshan Perera", role: "Director", image: "/leadership/director02.jpeg" },
];

const managers = [
    { name: "Chandrani Kankanamge", role: "Secretary", image: "/leadership/secretary.jpeg" },
];

export function Leadership() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#E91E63] selection:text-white">
            <main>
                {/* Hero Section */}
                <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
                            alt="Leadership Team"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60"></div>
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center space-x-2 text-sm font-medium tracking-wider uppercase mb-4 text-[#E91E63]">
                                <span>Home</span>
                                <span className="text-gray-400">/</span>
                                <span>Leadership</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                                Guiding  <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Visionaries.</span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                                Guiding Digital Point towards innovation, excellence, and a future where every brand finds its voice.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Leader Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                            <div className="grid grid-cols-1 lg:grid-cols-12">
                                <div className="lg:col-span-5 h-[500px] lg:h-auto relative">
                                    <img
                                        src={mainLeader.image}
                                        alt={mainLeader.name}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>
                                <div className="lg:col-span-7 p-10 lg:p-16 flex flex-col justify-center">
                                    <div className="inline-block px-3 py-1 bg-[#E91E63]/10 text-[#E91E63] text-sm font-bold tracking-wide uppercase rounded-full mb-6 w-fit">
                                        Visionary
                                    </div>
                                    <h2 className="text-4xl font-bold text-gray-900 mb-2">{mainLeader.name}</h2>
                                    <p className="text-xl text-gray-500 mb-6 font-medium">{mainLeader.role}</p>
                                    <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                        "{mainLeader.bio}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Directors Section */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-[#1b63bb] font-bold uppercase tracking-wider text-sm mb-2 block">Our Guardians</span>
                            <h2 className="text-4xl font-bold text-gray-900">Board of Directors</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {directors.map((director, index) => (
                                <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={director.image}
                                            alt={director.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{director.name}</h3>
                                        <p className="text-[#E91E63] font-medium text-sm">{director.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Managers Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-[#1b63bb] font-bold uppercase tracking-wider text-sm mb-2 block">Operational Excellence</span>
                            <h2 className="text-4xl font-bold text-gray-900">Management Team</h2>
                        </div>
                        <div className="flex justify-center">
                            <div className="max-w-md w-full">
                                {managers.map((manager, index) => (
                                    <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                                        <div className="aspect-[4/3] overflow-hidden">
                                            <img
                                                src={manager.image}
                                                alt={manager.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">{manager.name}</h3>
                                            <p className="text-[#E91E63] font-medium text-sm">{manager.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* United by Purpose Section */}
                <section className="py-24 bg-[#1a1a1a] text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="w-16 h-16 bg-[#E91E63] rounded-2xl flex items-center justify-center mb-8">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-bold mb-6">United by Purpose</h2>
                                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                                    Our leadership team at Digital Point shares a common vision: to help businesses and individuals communicate effectively through high-quality printing and creative marcom solutions. Together, we are committed to delivering excellence and building lasting trust with every client.
                                </p>
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-3xl font-bold text-[#1b63bb] mb-2">100%</h4>
                                        <p className="text-sm text-gray-400 uppercase tracking-wider">Client Dedication</p>
                                    </div>
                                    <div>
                                        <h4 className="text-3xl font-bold text-[#E91E63] mb-2">24/7</h4>
                                        <p className="text-sm text-gray-400 uppercase tracking-wider">Commitment to Excellence</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-4 translate-y-8">
                                        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                                            <Award className="w-10 h-10 text-[#E91E63] mb-4" />
                                            <h3 className="font-bold text-lg mb-2">Excellence</h3>
                                            <p className="text-gray-400 text-sm">Setting the highest standards in every project.</p>
                                        </div>
                                        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                                            <Users className="w-10 h-10 text-[#1b63bb] mb-4" />
                                            <h3 className="font-bold text-lg mb-2">Collaboration</h3>
                                            <p className="text-gray-400 text-sm">Working together to achieve common goals.</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                                            <Target className="w-10 h-10 text-green-500 mb-4" />
                                            <h3 className="font-bold text-lg mb-2">Innovation</h3>
                                            <p className="text-gray-400 text-sm">Constantly evolving and improving our methods.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
