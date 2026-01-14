import React, { useState, useEffect } from 'react';
import { Menu, Paintbrush, X } from 'lucide-react';
import { Button } from './ui/Button';
import { useLocation, Link } from 'react-router-dom'; // Assuming react-router-dom is used for navigation

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get the current location object
  const isContactPage = location.pathname === '/contact-us';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'About Us',
    href: '/about-us'
  }, {
    name: 'Leadership',
    href: '/leadership'
  }, {
    name: 'Services',
    href: '/services'
  }, {
    name: 'Projects',
    href: '/projects'
  }, {
    name: 'Blog',
    href: '/blog'
  }];
  const contactUsLink = {
    name: 'Contact Us',
    href: '/contact-us',
    isButton: true
  };

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isOpen || scrolled ? 'bg-white shadow-md border-b border-gray-100' : 'bg-transparent border-transparent'}`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 space-x-3 hover:opacity-80 transition-opacity">
            <img src='logo.png' alt='Digital Point' className='w-16 md:w-20 drop-shadow-[0_4px_14px_rgba(255,255,255,0.8)]' />
            <span className="text-sm md:text-base font-bold tracking-tight uppercase font-['Outfit'] leading-none">
              <span className="text-[#ff8a00]">Digital</span>
              <span className={`ml-1 ${scrolled || isOpen ? 'text-gray-900' : 'text-white'}`}>Point</span>
            </span>
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="flex-1 flex justify-center">
            <nav className="hidden space-x-12 lg:flex items-center">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-medium transition-colors uppercase tracking-wide ${location.pathname === link.href ? 'text-[#E91E63]' : (scrolled || isOpen ? 'text-gray-600 hover:text-[#E91E63]' : 'text-white hover:text-[#E91E63]')}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="hidden lg:flex items-center ml-auto">
            <Button
              variant="outline"
              size="sm"
              className={`px-8 rounded-full border-2 transition-all duration-300 font-bold uppercase tracking-widest text-[10px] ${isContactPage
                ? '!border-2 !border-[#E91E63] !text-[#E91E63] hover:bg-transparent pointer-events-none'
                : scrolled || isOpen
                  ? 'border-gray-900 text-gray-900 hover:!border-[#E91E63] hover:!text-[#E91E63] hover:bg-transparent'
                  : 'border-white text-white hover:!border-[#E91E63] hover:!text-[#E91E63] hover:bg-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                }`}
            >
              <a href={contactUsLink.href} className="text-inherit">{contactUsLink.name}</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(true)} className={`p-2 rounded-md focus:outline-none ${scrolled || isOpen ? 'text-gray-600 hover:text-gray-900' : 'text-white'}`}>
              <Paintbrush className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay and sidebar are now conditionally rendered */}
      {isOpen && (
        <>
          {/* Mobile menu overlay */}
          <div
            className="fixed inset-0 bg-black/5 backdrop-blur-md z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Mobile menu sidebar */}
          <div
            className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden translate-x-0`}
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="px-4 py-2 space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.href ? 'text-[#E91E63]' : 'text-gray-700 hover:text-[#E91E63] hover:bg-gray-50'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={contactUsLink.href}
                className={`block px-3 py-2 rounded-md text-base font-medium mt-1 ${location.pathname === contactUsLink.href ? 'text-[#E91E63]' : 'text-gray-700 hover:text-[#E91E63] hover:bg-gray-50'}`}
                onClick={() => setIsOpen(false)}
              >
                {contactUsLink.name}
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}