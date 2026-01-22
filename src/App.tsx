import { Routes, Route } from 'react-router-dom';
import { AboutUs } from './pages/AboutUs';
import { LandingPage } from './pages/LandingPage';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { Blog } from './pages/Blog';
import { ContactUs } from './pages/ContactUs';
import { Leadership } from './pages/Leadership';
import { Header } from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/leadership" element={<Leadership />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}