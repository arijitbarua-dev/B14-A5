import React from 'react';
import bannerImg from '../assets/banner-stack.png';

/**
 * Hero / Banner Component
 * 
 * Features:
 * - Two-tone heading (solid dark text + vibrant gradient text)
 * - Description text comparing frontend, backend, database, and tooling options
 * - Two action buttons: "Explore Technologies" (gradient pill) and "Learn More" (outlined pill)
 * - High quality 3D stack illustration image on the right
 */
const Hero = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="space-y-6 md:space-y-8 text-left">
            {/* Two-Tone Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-tight">
              Build Your Ideal{' '}
              <span className="text-brand-gradient block sm:inline-block">
                Development Stack
              </span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-xl">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="bg-brand-gradient hover:opacity-90 text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-xl shadow-md shadow-pink-100 hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer">
                Explore Technologies
              </button>

              <button className="bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 font-semibold text-sm sm:text-base px-6 py-3 rounded-xl transition-all cursor-pointer">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Banner Image */}
          <div className="flex justify-center lg:justify-end items-center">
            <img 
              src={bannerImg} 
              alt="Development Stack Illustration" 
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
