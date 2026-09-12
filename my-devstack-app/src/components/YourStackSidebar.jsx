import React from 'react';

const YourStackSidebar = ({ selectedStack = [], onRemoveFromStack, onClearStack }) => {
  const count = selectedStack.length;

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200/70 shadow-xs sticky top-24">
      {/* Panel Header */}
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
        Your Stack
      </h3>
      
      {/* Subtitle / Selected Count */}
      <p className={`text-sm mt-1 mb-6 transition-colors ${count === 0 ? 'text-slate-400' : 'text-pink-600 font-semibold'}`}>
        {count === 0 ? 'No technologies selected yet.' : `${count} ${count === 1 ? 'Technology' : 'Technologies'} Selected`}
      </p>

      {/* Empty State Box */}
      {count === 0 ? (
        <div className="border border-dashed border-slate-200 rounded-2xl py-10 px-4 text-center my-2">
          <p className="text-slate-400 text-sm font-normal">
            Your stack is empty.
          </p>
        </div>
      ) : (
        /* Selected Items List */
        <div className="space-y-3">
          <div className="max-h-[420px] overflow-y-auto pr-1 space-y-3">
            {selectedStack.map((tech) => (
              <div 
                key={tech.id} 
                className="flex items-center justify-between bg-slate-50/80 border border-slate-100 p-3 rounded-2xl hover:border-pink-100 hover:bg-pink-50/20 transition-all group"
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-white p-1 border border-slate-100 flex items-center justify-center shrink-0">
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-slate-800 truncate group-hover:text-pink-600 transition-colors">
                      {tech.name}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {tech.category}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveFromStack && onRemoveFromStack(tech.id)}
                  className="text-slate-400 hover:text-rose-500 hover:bg-rose-50 p-1.5 rounded-lg transition-colors cursor-pointer shrink-0 ml-2"
                  aria-label={`Remove ${tech.name} from stack`}
                  title="Remove from stack"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Clear Stack Button */}
          {onClearStack && (
            <button
              onClick={onClearStack}
              className="w-full text-xs text-slate-400 hover:text-rose-500 font-medium py-2 transition-colors cursor-pointer text-center hover:underline"
            >
              Clear Stack
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default YourStackSidebar;
