import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(localStorage.getItem('theme') === 'light');

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLight]);

  return (
    <button
      onClick={() => setIsLight(!isLight)}
      className="p-2 w-10 h-10 rounded-full bg-[var(--panel-bg)] border border-[var(--panel-border)] text-[var(--gold)] hover:bg-[var(--gold)]/10 transition-all flex items-center justify-center cursor-pointer"
      title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      <FontAwesomeIcon icon={isLight ? faMoon : faSun} />
    </button>
  );
};
