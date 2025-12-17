import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { VideoSection } from '../components/VideoSection';
import { MarcomSection } from '../components/MarcomSection';
import { Portfolio } from '../components/Portfolio';
import { Collaborators } from '../components/Collaborators';
import { Testimonials } from '../components/Testimonials';
import { BlogSection } from '../components/BlogSection';
import { Footer } from '../components/Footer';
export function LandingPage() {
  return <div className="min-h-screen bg-white font-sans selection:bg-[#E91E63] selection:text-white">
    <Header />
    <main>
      <Hero />
      <Services />
      <VideoSection />
      <MarcomSection />
      <Portfolio />
      <Collaborators />
      <Testimonials />
      <BlogSection />
    </main>
    <Footer />
  </div>;
}