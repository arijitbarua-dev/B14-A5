import React, { useState, useEffect } from 'react';
import TechnologyCard from './TechnologyCard';
import YourStackSidebar from './YourStackSidebar';

const TechnologiesSection = ({ 
  selectedStack = [], 
  onAddToStack, 
  onRemoveFromStack, 
  onClearStack 
}) => {
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
            <span className="text-brand-gradient">
              Technologies
            </span>
          </h2>
          <p className="mt-3 text-slate-500 text-base sm:text-lg max-w-2xl">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Loading State with Message & Spinner */}
        {isLoading && (
          <div className="space-y-8">
            {/* Centered Loading Spinner & Message */}
            <div className="flex items-center justify-center space-x-3 py-6 bg-white/80 border border-slate-200/60 rounded-2xl shadow-xs">
              <svg className="animate-spin h-6 w-6 text-pink-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-slate-700 font-semibold text-base">
                Loading technologies...
              </span>
            </div>

            {/* Skeleton Grid Placeholders */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
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
              <div className="w-full lg:w-80 shrink-0">
                <YourStackSidebar selectedStack={[]} />
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="p-8 text-center bg-rose-50 border border-rose-200 rounded-2xl max-w-md mx-auto">
            <p className="text-rose-600 font-semibold mb-2">Unable to load technologies data</p>
            <p className="text-slate-500 text-sm mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-rose-600 text-white rounded-xl text-sm font-medium hover:bg-rose-700 transition-colors cursor-pointer"
            >
              Retry
            </button>
          </div>
        )}

        {/* Main Content Layout: Tech Grid + Your Stack Sidebar */}
        {!isLoading && !error && (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* 3-Column Responsive Technology Grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
              {technologies.map((tech) => (
                <TechnologyCard 
                  key={tech.id} 
                  tech={tech} 
                  isSelected={selectedStack.some((item) => item.id === tech.id)}
                  onAdd={onAddToStack}
                />
              ))}
            </div>

            {/* "Your Stack" Sidebar Panel */}
            <div className="w-full lg:w-80 shrink-0">
              <YourStackSidebar 
                selectedStack={selectedStack}
                onRemoveFromStack={onRemoveFromStack}
                onClearStack={onClearStack}
              />
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default TechnologiesSection;
