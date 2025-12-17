import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { AboutUs } from './pages/AboutUs';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { Blog } from './pages/Blog';
import { ContactUs } from './pages/ContactUs';


export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
  );
}