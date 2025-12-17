import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, CheckCircle2, Target, Award, Printer, ShieldCheck, Zap, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function AboutUs() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#E91E63] selection:text-white">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
                            alt="Modern Office"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60"></div>
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center space-x-2 text-sm font-medium tracking-wider uppercase mb-4 text-[#E91E63]">
                                <span>Home</span>
                                <span className="text-gray-400">/</span>
                                <span>About Us</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                                We Are <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Digital Point.</span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                                Your trusted partner for premium printing and integrated marketing communications. We transform ideas into tangible excellence.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                <div className="grid grid-cols-2 gap-4">
                                    <img src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=800&auto=format&fit=crop" className="rounded-2xl shadow-xl w-full h-64 object-cover transform translate-y-8" alt="Printing" />
                                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" className="rounded-2xl shadow-xl w-full h-64 object-cover" alt="Team meeting" />
                                </div>
                                <div className="absolute -bottom-8 -right-8 bg-[#E91E63] p-8 rounded-xl shadow-lg hidden md:block">
                                    <div className="text-4xl font-bold text-white mb-1">15+</div>
                                    <div className="text-white/90 text-sm uppercase tracking-wide">Years of<br />Experience</div>
                                </div>
                            </div>
                            <div>
                                <span className="text-[#1b63bb] font-bold uppercase tracking-wider text-sm mb-2 block">Our Story</span>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">From Press to Partner</h2>
                                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                    <p>
                                        Founded with a passion for precision, Digital Point began as a high-quality printing press. But we quickly realized our clients needed more than just ink on paper—they needed a voice.
                                    </p>
                                    <p>
                                        Today, we stand as a comprehensive Marcom partner, bridging the gap between physical collateral and digital presence. Our evolution is driven by a single mission: to empower brands to communicate with clarity, impact, and style.
                                    </p>
                                    <div className="grid grid-cols-2 gap-6 pt-4">
                                        <div className="flex items-start space-x-3">
                                            <div className="bg-blue-50 p-2 rounded-lg">
                                                <CheckCircle2 className="w-5 h-5 text-[#1b63bb]" />
                                            </div>
                                            <span className="font-medium text-gray-900">Premium Quality</span>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="bg-pink-50 p-2 rounded-lg">
                                                <CheckCircle2 className="w-5 h-5 text-[#E91E63]" />
                                            </div>
                                            <span className="font-medium text-gray-900">Global Reach</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6">
                                    <Target className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    To deliver exceptional visibility to our clients through high-quality printing and strategic marketing, ensuring every project we touch turns into a success story. We aim to be the silent engine behind your loud success.
                                </p>
                            </div>
                            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-[#E91E63] rounded-2xl flex items-center justify-center mb-6">
                                    <Zap className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    To be the global benchmark in integrated marketing communications, where innovation meets execution. We envision a world where every brand, no matter the size, has access to world-class presentation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-[#1a1a1a] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E91E63]/10 transform skew-x-12"></div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                            Whether you need 50,000 prints or a complete brand overhaul, we are here to make it happen efficiently and beautifully.
                        </p>
                        <Button variant="cyan" size="lg" className="rounded-full px-10">
                            Get in Touch
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
