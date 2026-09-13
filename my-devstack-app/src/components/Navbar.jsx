import React, { useState } from 'react';
import logoImg from '../assets/logo-text.png';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

  const handleNavClick = (linkName) => {
    setActiveNav(linkName);
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Left: Brand Logo + Dev Stack Name */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setActiveNav('Home')}
          >
            <img
              src={logoImg}
              alt="Dev Stack Logo"
              className="h-8 sm:h-9 object-contain"
            />
          </div>

          {/* Center: Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className={`text-sm md:text-base font-medium transition-colors duration-200 cursor-pointer ${
                  activeNav === link
                    ? 'text-pink-600 font-semibold'
                    : 'text-slate-600 hover:text-pink-600'
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Right: Auth Buttons */}
          <div className="hidden md:flex items-center space-x-5">
            <button className="text-sm md:text-base font-medium text-slate-700 hover:text-pink-600 transition-colors cursor-pointer px-2 py-1">
              Sign In
            </button>

            <button className="text-sm md:text-base font-medium text-white bg-brand-gradient hover:opacity-90 px-6 py-2.5 rounded-full shadow-sm hover:shadow-md shadow-pink-200 transition-all transform hover:-translate-y-0.5 cursor-pointer">
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-pink-600 p-2 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className={`text-left px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                  activeNav === link
                    ? 'text-pink-600 bg-pink-50 font-semibold'
                    : 'text-slate-600 hover:text-pink-600 hover:bg-slate-50'
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2">
            <button className="w-full text-center py-2 text-slate-700 font-medium hover:text-pink-600">
              Sign In
            </button>
            <button className="w-full text-center py-2.5 text-white bg-brand-gradient hover:opacity-90 rounded-full font-medium shadow-md shadow-pink-200">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
