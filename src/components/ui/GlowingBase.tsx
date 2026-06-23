import React from 'react';

interface GlowingBaseProps {
  color?: "purple" | "blue";
  className?: string;
}

export default function GlowingBase({ color = "blue", className = "" }: GlowingBaseProps) {
  const colorClass = color === "purple" ? "border-purple-500 shadow-[0_0_40px_rgba(139,92,246,0.8),inset_0_0_20px_rgba(139,92,246,0.5)]" : "border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.8),inset_0_0_20px_rgba(59,130,246,0.5)]";
  const beamClass = color === "purple" ? "from-purple-500/30" : "from-blue-500/30";
  
  return (
    <div className={`relative w-64 h-24 md:w-80 md:h-28 mx-auto ${className}`} style={{ perspective: '800px' }}>
      {/* The 3D Rings */}
      <div 
        className="absolute inset-0 rounded-[100%] border-4 border-[#0a0a1a] ring-2 ring-white/10 flex items-center justify-center bg-[#02020a]"
        style={{ transform: 'rotateX(70deg)' }}
      >
        <div className={`w-[85%] h-[85%] rounded-[100%] border-2 ${colorClass} bg-[#050511] flex items-center justify-center relative`}>
          {/* Inner core */}
          <div className="w-[60%] h-[60%] rounded-[100%] border border-white/20 bg-gradient-to-b from-transparent to-white/10 shadow-[inset_0_0_15px_rgba(255,255,255,0.2)]"></div>
          
          {/* Small decorative nodes */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
        </div>
      </div>
      
      {/* Light beam shooting up */}
      <div className={`absolute bottom-1/2 left-1/2 -translate-x-1/2 w-48 h-64 bg-gradient-to-t ${beamClass} to-transparent blur-xl -z-10 pointer-events-none transform -translate-y-10`}></div>
    </div>
  );
}
