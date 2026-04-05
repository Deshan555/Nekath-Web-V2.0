import React from 'react';
import systemLogo from '../assets/system.svg';

interface HoroscopeChartProps {
  planets?: { [key: number]: string[] };
  lagna?: number;
}

export const HoroscopeChart: React.FC<HoroscopeChartProps> = ({ 
  planets = {
    1: ['Lagna'],
    2: ['Sun'],
    4: ['Moon', 'Venus'],
    7: ['Jupiter'],
    10: ['Mars', 'Saturn'],
    12: ['Rahu']
  },
  lagna = 1 
}) => {
  // Traditional Sri Lankan 12-house square layout
  // Houses are mapped to a 4x3 grid where some cells are merged or empty
  // But for simpler web representation, we often use a 4x3 grid with the center empty or specialized.
  
  const houseOrder = [12, 1, 2, 11, 'center', 3, 10, 'center', 4, 9, 8, 7];

  return (
    <div className="aspect-square w-full max-w-[400px] mx-auto border border-[var(--gold)]/30 bg-[var(--panel-bg)] backdrop-blur-md relative p-2 shadow-[0_0_40px_rgba(201,168,76,0.1)] transition-all duration-500">
      {/* Corner Accents */}
      <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[var(--gold)]" />
      <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[var(--gold)]" />
      <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[var(--gold)]" />
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[var(--gold)]" />

      <div className="grid grid-cols-3 grid-rows-4 h-full gap-1">
        {houseOrder.map((house, idx) => {
          if (house === 'center') {
            return <div key={`empty-${idx}`} className="bg-transparent" />;
          }

          const hNum = house as number;
          const isLagna = hNum === lagna;
          const housePlanets = planets[hNum] || [];

          return (
            <div 
              key={hNum} 
              className={`border border-[var(--gold)]/10 flex flex-col items-center justify-center p-1 relative transition-all hover:bg-[var(--gold)]/5 ${isLagna ? 'bg-[var(--gold)]/10 border-[var(--gold)]/40 shadow-inner' : ''}`}
            >
              <span className={`absolute top-1 left-1.5 text-[0.45rem] font-cinzel opacity-40 ${isLagna ? 'text-[var(--gold)] opacity-100 font-bold' : 'text-[var(--text-main)]'}`}>
                {hNum}
              </span >
              <div className="flex flex-wrap justify-center gap-1 mt-1">
                {housePlanets.map((p, pi) => (
                  <span key={pi} className="text-[0.6rem] font-cinzel text-[var(--gold)] tracking-tighter">
                    {p.substring(0, 2).toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Center Decorative Element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-24 h-24 border border-[var(--gold)]/20 rotate-45 flex items-center justify-center shadow-inner">
            <div className="w-16 h-16 -rotate-45 flex items-center justify-center opacity-70">
                <img src={systemLogo} className="w-14 h-14 object-contain" alt="System Logo" />
            </div>
        </div>
      </div>
    </div>
  );
};
