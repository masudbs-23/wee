'use client';

import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-9/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              {/* Logo Icon */}
              <div className="w-8 h-8 bg-gradient-to-b from-yellow-400 via-orange-500 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full opacity-80"></div>
              </div>
              {/* Logo Text */}
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Weezard
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-purple-600 border-b-2 border-purple-600 pb-1 font-medium">
              Home
            </a>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">
              Portfolio
            </a>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 flex items-center">
                Blog
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">
              About Us
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-4 sm:px-6 py-2 border-2 border-purple-200 text-purple-600 rounded-full hover:bg-purple-50 transition-colors duration-200 font-medium text-sm sm:text-base">
              Get a Free Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none focus:text-purple-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#" className="text-purple-600 block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">
                Services
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">
                Portfolio
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">
                Blog
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">
                About Us
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">
                Contact
              </a>
              <div className="px-3 py-2">
                <button className="w-full px-4 sm:px-6 py-2 border-2 border-purple-200 text-purple-600 rounded-full hover:bg-purple-50 transition-colors duration-200 font-medium text-sm sm:text-base">
                  Get a Free Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
