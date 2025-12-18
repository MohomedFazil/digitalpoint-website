import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { useLocation } from 'react-router-dom'; // Assuming react-router-dom is used for navigation

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location object
  const navLinks = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'About Us',
    href: '/about-us'
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
    <header className={`sticky top-0 z-50 w-full border-b border-gray-100 ${isOpen ? 'bg-white' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img src='logo.png' alt='Digital Point' className='w-20' />
          </div>

          {/* Desktop Nav - Centered */}
          <div className="flex-1 flex justify-center">
            <nav className="hidden space-x-12 lg:flex items-center">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-medium transition-colors uppercase tracking-wide ${location.pathname === link.href ? 'text-[#E91E63]' : 'text-gray-600 hover:text-[#E91E63]'}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Desktop Contact Us Button */}
          <div className="hidden lg:flex items-center ml-auto">
            <Button variant="primary" size="sm" className="px-6 rounded-full">
              <a href={contactUsLink.href}>{contactUsLink.name}</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(true)} className="p-2 text-gray-600 rounded-md hover:text-gray-900 focus:outline-none">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay and sidebar are now conditionally rendered */}
      {isOpen && (
        <>
          {/* Mobile menu overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
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
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#E91E63] hover:bg-gray-50 mt-1"
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