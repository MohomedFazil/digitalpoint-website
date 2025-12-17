import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export function ContactUs() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#E91E63] selection:text-white">
            <Header />

            <main className="pt-20 pb-20">
                {/* Hero Section */}
                <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 text-center">
                    <span className="text-[#E91E63] font-semibold tracking-wider uppercase text-sm mb-4 block">
                        Get in Touch
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
                        Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] to-purple-600">Conversation</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Have a project in mind? We'd love to hear about it. Let's discuss how we can help you achieve your digital goals.
                    </p>
                </section>

                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                        {/* Contact Information Column */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                                <div className="space-y-8">
                                    <div className="flex items-start group">
                                        <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[#E91E63] group-hover:bg-[#E91E63] group-hover:text-white transition-colors duration-300 shrink-0">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div className="ml-6">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">Our Location</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                123 Digital Avenue, Tech District<br />
                                                Colombo 03, Sri Lanka
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start group">
                                        <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[#E91E63] group-hover:bg-[#E91E63] group-hover:text-white transition-colors duration-300 shrink-0">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div className="ml-6">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone Number</h3>
                                            <p className="text-gray-600">+94 11 234 5678</p>
                                            <p className="text-gray-500 text-sm mt-1">Mon-Fri 9am-6pm</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start group">
                                        <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[#E91E63] group-hover:bg-[#E91E63] group-hover:text-white transition-colors duration-300 shrink-0">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div className="ml-6">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Address</h3>
                                            <p className="text-gray-600">hello@digitalpoint.com</p>
                                            <p className="text-gray-600">support@digitalpoint.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="h-64 md:h-80 w-full bg-gray-100 rounded-3xl overflow-hidden relative group">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585979669!2d79.78616443422238!3d6.921922576115978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1710321456789!5m2!1sen!2slk"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="transition-all duration-500"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form Column */}
                        <div className="bg-gray-50 rounded-3xl p-8 md:p-10 lg:p-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#E91E63] focus:border-transparent outline-none transition-all bg-white"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#E91E63] focus:border-transparent outline-none transition-all bg-white"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#E91E63] focus:border-transparent outline-none transition-all bg-white"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <select
                                        id="subject"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#E91E63] focus:border-transparent outline-none transition-all bg-white text-gray-600"
                                    >
                                        <option>General Inquiry</option>
                                        <option>Project Proposal</option>
                                        <option>Technical Support</option>
                                        <option>Careers</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#E91E63] focus:border-transparent outline-none transition-all bg-white resize-none"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#1a1a1a] text-white font-medium py-4 rounded-xl hover:bg-[#E91E63] transition-colors duration-300 flex items-center justify-center gap-2 group"
                                >
                                    Send Message
                                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
