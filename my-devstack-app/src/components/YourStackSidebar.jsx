import React from 'react';

const YourStackSidebar = ({ selectedStack = [], onRemoveFromStack, onClearStack }) => {
  const count = selectedStack.length;

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200/70 shadow-xs lg:sticky lg:top-24">
      {/* Panel Header */}
      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
        Your Stack
      </h3>
      
      {/* Subtitle / Selected Count */}
      <p className="text-sm mt-1 mb-6 text-slate-400 font-medium">
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
        /* Selected Items List (1 Column Layout) */
        <div className="space-y-4">
          <div className="max-h-[420px] overflow-y-auto pr-1 space-y-3 flex flex-col">
            {selectedStack.map((tech) => (
              <div 
                key={tech.id} 
                className="flex items-center justify-between bg-white border border-slate-200/80 p-3.5 rounded-2xl shadow-xs hover:border-slate-300 transition-all group"
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 p-1.5 border border-slate-100 flex items-center justify-center shrink-0">
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-slate-900 truncate">
                      {tech.name}
                    </h4>
                    <span className="text-xs text-slate-400 font-medium block">
                      {tech.category}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveFromStack && onRemoveFromStack(tech.id)}
                  className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg transition-colors cursor-pointer shrink-0 ml-2"
                  aria-label={`Remove ${tech.name} from stack`}
                  title="Remove from stack"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Remove All Button */}
          {onClearStack && (
            <div className="pt-2">
              <button
                onClick={onClearStack}
                className="w-full text-base font-bold text-rose-600 border border-rose-200 hover:border-rose-300 hover:bg-rose-50/50 py-3 rounded-2xl transition-all cursor-pointer text-center"
              >
                Remove All
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default YourStackSidebar;
