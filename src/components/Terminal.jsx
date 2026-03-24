import React from 'react';

const Terminal = ({ children }) => {
  return (
    <div className="min-h-screen bg-ctp-base text-ctp-text p-4 md:p-8 flex items-center justify-center font-mono">
      <div className="w-full max-w-5xl bg-ctp-mantle rounded-lg shadow-2xl overflow-hidden border border-ctp-surface0 flex flex-col h-[85vh]">
        {/* Terminal Header */}
        <div className="bg-ctp-crust px-4 py-3 flex items-center gap-2 border-b border-ctp-surface0 shrink-0">
          <div className="w-3.5 h-3.5 rounded-full bg-ctp-red shadow-[0_0_8px_rgba(243,139,168,0.4)]"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-ctp-yellow shadow-[0_0_8px_rgba(249,226,175,0.4)]"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-ctp-green shadow-[0_0_8px_rgba(166,227,161,0.4)]"></div>
          <div className="flex-1 text-center text-sm text-ctp-overlay1 select-none font-bold tracking-wider">
            sgtcmi@portfolio: ~
          </div>
        </div>
        
        {/* Terminal Body */}
        <div className="p-6 overflow-y-auto flex-1 text-ctp-text">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
