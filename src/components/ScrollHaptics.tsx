import React, { useEffect, useRef } from 'react';
import { haptics } from '../utils/haptics';

interface ScrollHapticsProps {
  children: React.ReactNode;
}

export const ScrollHaptics: React.FC<ScrollHapticsProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            haptics.tiny();
          }
        });
      },
      {
        threshold: 0.6, // Trigger when 60% of the section is visible
      }
    );

    const sections = containerRef.current?.querySelectorAll('section, footer');
    sections?.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return <div ref={containerRef}>{children}</div>;
};
