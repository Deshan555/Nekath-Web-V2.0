import React, { useEffect, useState } from 'react';

export const Cosmos: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setMousePos({
        x: (e.clientX - cx) / cx,
        y: (e.clientY - cy) / cy,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[var(--midnight)] transition-colors duration-500">
      <div className="absolute inset-0 opacity-100 dark-only:block light-mode:opacity-0 transition-opacity duration-500">
      {/* Nebula glows */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[80px] bg-[radial-gradient(circle,rgba(42,22,100,0.6)_0%,transparent_70%)] -top-[150px] -left-[100px] animate-[drift1_20s_ease-in-out_infinite_alternate]"
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full blur-[80px] bg-[radial-gradient(circle,rgba(139,26,26,0.25)_0%,transparent_70%)] bottom-[10%] -right-[80px] animate-[drift2_25s_ease-in-out_infinite_alternate]"
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full blur-[80px] bg-[radial-gradient(circle,rgba(26,107,107,0.2)_0%,transparent_70%)] top-[40%] left-[45%] animate-[drift3_18s_ease-in-out_infinite_alternate]"
        style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }}
      />

      {/* Star layers */}
      <div 
        id="stars1"
        className="stars-layer absolute inset-0 animate-[twinkle1_7s_ease-in-out_infinite_alternate]"
        style={{ 
          transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 12}px)`,
          backgroundImage: `
            radial-gradient(1px 1px at 8% 18%, rgba(255,255,220,0.9) 0%, transparent 100%),
            radial-gradient(1px 1px at 23% 52%, rgba(200,200,255,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 38% 8%, rgba(255,255,255,0.8) 0%, transparent 100%),
            radial-gradient(1px 1px at 57% 77%, rgba(255,240,200,0.9) 0%, transparent 100%),
            radial-gradient(1px 1px at 72% 32%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 91% 61%, rgba(200,220,255,0.8) 0%, transparent 100%)
          `,
          backgroundSize: '400px 400px'
        }}
      />
      <div 
        id="stars2"
        className="stars-layer absolute inset-0 opacity-70 animate-[twinkle2_9s_ease-in-out_infinite_alternate]"
        style={{ 
          transform: `translate(${mousePos.x * 8}px, ${mousePos.y * 8}px)`,
          backgroundImage: `
            radial-gradient(1px 1px at 15% 72%, rgba(255,255,220,0.9) 0%, transparent 100%),
            radial-gradient(1px 1px at 33% 14%, rgba(200,200,255,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 51% 88%, rgba(255,255,255,0.8) 0%, transparent 100%),
            radial-gradient(1px 1px at 68% 41%, rgba(255,240,200,0.9) 0%, transparent 100%),
            radial-gradient(1px 1px at 82% 67%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 5% 44%, rgba(200,220,255,0.8) 0%, transparent 100%)
          `,
          backgroundSize: '300px 300px'
        }}
      />
      <div 
        id="stars3"
        className="stars-layer absolute inset-0 opacity-50 animate-[twinkle3_11s_ease-in-out_infinite_alternate]"
        style={{ 
          transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 5}px)`,
          backgroundImage: `
            radial-gradient(1px 1px at 12% 33%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 29% 71%, rgba(255,200,150,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 44% 22%, rgba(200,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 63% 55%, rgba(255,255,200,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 78% 88%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 95% 12%, rgba(255,200,200,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 3% 60%, rgba(200,200,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 50% 95%, rgba(255,255,255,0.4) 0%, transparent 100%)
          `,
          backgroundSize: '500px 500px'
        }}
      />

      {/* Orbiting Planets */}
      <div 
        className="absolute w-[700px] h-[700px] border border-[rgba(201,168,76,0.08)] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin-cw_80s_linear_infinite]"
      >
        <div className="absolute w-[10px] h-[10px] bg-[#D45555] rounded-full shadow-[0_0_12px_rgba(212,85,85,0.5),0_0_30px_rgba(212,85,85,0.5)] -top-[5px] left-1/2 -translate-x-1/2" />
        <div className="absolute w-[7px] h-[7px] bg-[#AAAACC] rounded-full shadow-[0_0_12px_rgba(170,170,200,0.4),0_0_30px_rgba(170,170,200,0.4)] -bottom-[4px] left-1/2 -translate-x-1/2" />
      </div>
      <div 
        className="absolute w-[1000px] h-[1000px] border border-[rgba(201,168,76,0.05)] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin-ccw_120s_linear_infinite]"
      >
        <div className="absolute w-[16px] h-[16px] bg-[#C9A84C] rounded-full shadow-[0_0_12px_rgba(201,168,76,0.5),0_0_30px_rgba(201,168,76,0.5)] -top-[8px] left-1/2 -translate-x-1/2" />
        <div className="absolute w-[12px] h-[12px] bg-[#B8A070] rounded-full shadow-[0_0_12px_rgba(184,160,112,0.4),0_0_30px_rgba(184,160,112,0.4)] -bottom-[6px] left-1/2 -translate-x-1/2" />
      </div>
      </div>
    </div>
  );
};
