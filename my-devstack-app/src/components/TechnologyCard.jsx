import React from 'react';

/**
 * Helper to get badge style based on badge label
 */
const getBadgeStyle = (badge) => {
  switch (badge?.toLowerCase()) {
    case 'popular':
    case 'containers':
    case 'essential':
    case 'top sql':
    case 'fullstack':
      return 'bg-sky-50 text-sky-600 border-sky-100';
    case 'versatile':
    case 'standard':
    case 'modern':
      return 'bg-emerald-50 text-emerald-600 border-emerald-100';
    case 'fast':
    case 'cache':
      return 'bg-amber-50 text-amber-600 border-amber-100';
    case 'ubiquitous':
      return 'bg-yellow-50 text-yellow-700 border-yellow-100';
    case 'robust':
    case 'vcs':
    case 'nosql':
    case 'ai & web':
      return 'bg-purple-50 text-purple-600 border-purple-100';
    default:
      return 'bg-slate-100 text-slate-600 border-slate-200';
  }
};

const TechnologyCard = ({ tech, onAdd }) => {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/70 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group">
      
      {/* Top Header: Icon + Badge */}
      <div>
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-slate-50 p-2 flex items-center justify-center border border-slate-100 group-hover:scale-105 transition-transform duration-300">
            <img 
              src={icon} 
              alt={`${name} icon`} 
              className="w-8 h-8 object-contain"
              loading="lazy"
            />
          </div>

          {badge && (
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getBadgeStyle(badge)}`}>
              {badge}
            </span>
          )}
        </div>

        {/* Technology Name */}
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-pink-600 transition-colors">
          {name}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>
      </div>

      {/* Footer Info & Action */}
      <div className="space-y-4 pt-2">
        {/* Chips and Meta Info */}
        <div className="flex items-center justify-between text-xs text-slate-500 gap-2 flex-wrap">
          {/* Category Chip */}
          <span className="bg-slate-100 text-slate-600 font-semibold px-3 py-1 rounded-md">
            {category}
          </span>

          {/* Difficulty & Rating */}
          <div className="flex items-center space-x-3">
            <span className="text-slate-500 font-medium">
              {difficulty}
            </span>

            {rating && (
              <div className="flex items-center space-x-1 font-bold text-slate-800">
                <span className="text-amber-400">★</span>
                <span>{rating}</span>
              </div>
            )}
          </div>
        </div>

        {/* Add to Stack Button */}
        <button
          onClick={() => onAdd && onAdd(tech)}
          className="w-full bg-[#0b132b] hover:bg-slate-800 text-white font-semibold text-sm py-3 px-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.99] cursor-pointer flex items-center justify-center"
        >
          Add to Stack
        </button>
      </div>

    </div>
  );
};

export default TechnologyCard;
