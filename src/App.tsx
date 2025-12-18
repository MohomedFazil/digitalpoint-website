import { Routes, Route } from 'react-router-dom';
import { AboutUs } from './pages/AboutUs';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { Blog } from './pages/Blog';
import { ContactUs } from './pages/ContactUs';
import { LandingPage } from './pages/LandingPage';


export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}