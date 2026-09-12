import React, { useState, useEffect } from 'react';
import TechnologyCard from './TechnologyCard';

const TechnologiesSection = ({ onAddToStack }) => {
  const [technologies, setTechnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch technologies (Status ${res.status})`);
        }
        return res.json();
      })
      .then((data) => {
        setTechnologies(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error loading technologies data:', err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <section id="technologies" className="py-12 md:py-16 lg:py-20 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore the{' '}
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-3 text-slate-500 text-base sm:text-lg max-w-2xl">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-xs animate-pulse space-y-4 h-72 flex flex-col justify-between"
              >
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 bg-slate-200 rounded-xl"></div>
                  <div className="w-16 h-6 bg-slate-200 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-6 bg-slate-200 rounded-md w-3/4"></div>
                  <div className="h-4 bg-slate-100 rounded-md w-full"></div>
                  <div className="h-4 bg-slate-100 rounded-md w-5/6"></div>
                </div>
                <div className="h-10 bg-slate-200 rounded-xl w-full"></div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="p-8 text-center bg-rose-50 border border-rose-200 rounded-2xl max-w-md mx-auto">
            <p className="text-rose-600 font-semibold mb-2">Unable to load technologies data</p>
            <p className="text-slate-500 text-sm mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-rose-600 text-white rounded-xl text-sm font-medium hover:bg-rose-700 transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {/* 3-Column Responsive Technology Grid */}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {technologies.map((tech) => (
              <TechnologyCard 
                key={tech.id} 
                tech={tech} 
                onAdd={onAddToStack}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default TechnologiesSection;
