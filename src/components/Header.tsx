import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [{
    name: 'About Us',
    href: '#'
  }, {
    name: 'Services',
    href: '#'
  }, {
    name: 'Our Work',
    href: '#'
  }, {
    name: 'Clientele',
    href: '#'
  }, {
    name: 'Gallery',
    href: '#'
  }, {
    name: 'Testimonials',
    href: '#'
  }, {
    name: 'Blogs',
    href: '#'
  }, {
    name: 'Contact Us',
    href: '#'
  }];
  return <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img src='/logo.jpeg' className='w-20' />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden space-x-6 lg:flex">
          {navLinks.map(link => <a key={link.name} href={link.href} className="text-xs font-medium text-gray-600 hover:text-[#E91E63] transition-colors uppercase tracking-wide">
            {link.name}
          </a>)}
        </nav>

        {/* CTA */}
        <div className="items-center hidden lg:flex">
          <Button variant="primary" size="sm" className="px-6 rounded-full">
            Huescape Login
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600 rounded-md hover:text-gray-900 focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile menu */}
    {isOpen && <div className="bg-white border-t border-gray-100 lg:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navLinks.map(link => <a key={link.name} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#E91E63] hover:bg-gray-50">
          {link.name}
        </a>)}
        <div className="px-3 mt-4">
          <Button variant="primary" className="w-full">
            Huescape Login
          </Button>
        </div>
      </div>
    </div>}
  </header>;
}