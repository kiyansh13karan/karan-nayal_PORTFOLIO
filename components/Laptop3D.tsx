import React from 'react';

const Laptop3D = () => {
  return (
    <div className="py-20 flex justify-center items-center">
      <div className="laptop-container">
        {/* Laptop Base */}
        <div className="relative" style={{ perspective: '1000px' }}>
          
          {/* Laptop Screen */}
          <div className="laptop-screen">
            <div className="relative backdrop-filter backdrop-blur-sm saturate-150 bg-opacity-30 bg-black-200 rounded-t-2xl border border-black-300 border-opacity-30 p-6 w-80 h-48">
              
              {/* Screen Content - Terminal UI */}
              <div className="font-mono text-xs text-white-200 space-y-2">
                <div className="text-green-400">$ whoami</div>
                <div className="text-white-200">Karan Nayal</div>
                <div className="text-green-400 mt-3">$ skills --list</div>
                <div className="text-white-200">Web Dev | ML | DSA</div>
                <div className="text-purple mt-3">$ status</div>
                <div className="text-blue-400">Building & Learning...</div>
              </div>

              {/* Screen Glow */}
              <div className="absolute inset-0 rounded-t-2xl bg-gradient-to-br from-purple/5 via-transparent to-blue-500/5 pointer-events-none"></div>
            </div>

            {/* Laptop Base/Keyboard */}
            <div className="relative">
              <div className="w-96 h-4 bg-black-200 bg-opacity-40 backdrop-filter backdrop-blur-sm border-x border-b border-black-300 border-opacity-30 rounded-b-2xl" 
                   style={{ 
                     transform: 'perspective(1000px) rotateX(60deg)',
                     transformOrigin: 'top center'
                   }}>
              </div>
            </div>
          </div>

          {/* Floating Shadow */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-8 bg-black rounded-full blur-2xl opacity-20 laptop-shadow"></div>
        </div>
      </div>
    </div>
  );
};

export default Laptop3D;