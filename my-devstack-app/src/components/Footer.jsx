import React from 'react';
import logoImg from '../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-12 md:pt-16 pb-8 md:pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ======================================================== */}
        {/* MOBILE VIEW (< md) - Centered Layout matching UI Mockup   */}
        {/* ======================================================== */}
        <div className="block md:hidden text-center pb-6">
          {/* Centered Brand Logo & Name */}
          <div className="flex items-center justify-center space-x-2.5 mb-5 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center text-white text-xs font-black shadow-xs">
              DS
            </div>
            <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Dev <span className="text-brand-gradient">Stack</span>
            </span>
          </div>

          {/* Centered Description */}
          <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto mb-6">
            Curated tools, technologies, and resources for developers building modern software.
          </p>

          {/* Centered Social Links with Bullet Separators */}
          <div className="flex items-center justify-center space-x-4 text-sm font-medium text-slate-600 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 transition-colors"
            >
              GitHub
            </a>
            <span className="text-slate-400 font-bold">•</span>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 transition-colors"
            >
              Twitter
            </a>
            <span className="text-slate-400 font-bold">•</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* Divider Line */}
          <div className="border-t border-slate-100 pt-6 flex flex-row items-center justify-between text-xs text-slate-400">
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <a href="#privacy" className="hover:text-slate-600 transition-colors">
                Privacy
              </a>
              <a href="#terms" className="hover:text-slate-600 transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP VIEW (>= md) - Multi-Column Grid Layout          */}
        {/* ======================================================== */}
        <div className="hidden md:block">
          <div className="grid grid-cols-5 gap-8 pb-12">
            
            {/* Brand Block */}
            <div className="col-span-2 space-y-4 pr-8">
              <div className="flex items-center space-x-3 cursor-pointer">
                {logoImg ? (
                  <img 
                    src={logoImg} 
                    alt="Dev Stack Logo" 
                    className="h-9 object-contain"
                  />
                ) : (
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center text-white text-xs font-black shadow-xs">
                      DS
                    </div>
                    <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                      Dev <span className="text-brand-gradient">Stack</span>
                    </span>
                  </div>
                )}
              </div>

              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Curated tools, technologies, and resources for developers building modern software.
              </p>

              <div className="flex items-center space-x-5 pt-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-600 hover:text-pink-600 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-600 hover:text-pink-600 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-600 hover:text-pink-600 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Link Group 1: PRODUCT */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                PRODUCT
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#home" className="text-slate-500 hover:text-pink-600 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-slate-500 hover:text-pink-600 transition-colors">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-slate-500 hover:text-pink-600 transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Link Group 2: COMPANY */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                COMPANY
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#about" className="text-slate-500 hover:text-pink-600 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-500 hover:text-pink-600 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#careers" className="text-slate-500 hover:text-pink-600 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Link Group 3: LEGAL */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                LEGAL
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#privacy-policy" className="text-slate-500 hover:text-pink-600 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms-of-service" className="text-slate-500 hover:text-pink-600 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Desktop Bottom Bar Separator */}
          <div className="border-t border-slate-100 pt-8 flex flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <a href="#privacy" className="hover:text-slate-600 transition-colors">
                Privacy
              </a>
              <a href="#terms" className="hover:text-slate-600 transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
