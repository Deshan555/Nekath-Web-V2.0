import React from 'react';

export const Yantra: React.FC = () => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-[0.045] animate-[slow-spin_200s_linear_infinite]">
      <svg width="900" height="900" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#C9A84C" strokeWidth="0.8">
          <circle cx="450" cy="450" r="420" strokeDasharray="4 8"/>
          <circle cx="450" cy="450" r="380"/>
          <circle cx="450" cy="450" r="340" strokeDasharray="2 6"/>
          <circle cx="450" cy="450" r="300"/>
          <circle cx="450" cy="450" r="260" strokeDasharray="3 9"/>
          <circle cx="450" cy="450" r="200"/>
          <circle cx="450" cy="450" r="140"/>
          <circle cx="450" cy="450" r="80"/>

          <g transform="translate(450,450)">
            {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map(deg => (
              <ellipse key={`outer-${deg}`} cx="0" cy="-370" rx="22" ry="60" transform={`rotate(${deg})`}/>
            ))}
            {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
              <ellipse key={`inner-${deg}`} cx="0" cy="-250" rx="16" ry="42" transform={`rotate(${deg})`}/>
            ))}

            <polygon points="0,-290 251,145 -251,145" strokeWidth="1.5"/>
            <polygon points="0,290 251,-145 -251,-145" strokeWidth="1.5"/>
            <polygon points="0,-220 190,110 -190,110"/>
            <polygon points="0,220 190,-110 -190,-110"/>
            <polygon points="0,-155 134,77 -134,77"/>
            <polygon points="0,155 134,-77 -134,-77"/>
            <polygon points="0,-100 87,50 -87,50"/>
            <polygon points="0,100 87,-50 -87,-50"/>
            <circle cx="0" cy="0" r="6" fill="#C9A84C" stroke="none"/>
          </g>

          <rect x="80" y="80" width="740" height="740" strokeDasharray="5 15"/>
          <rect x="60" y="60" width="780" height="780"/>
        </g>
      </svg>
    </div>
  );
};
