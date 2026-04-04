import { useState } from 'react';
import { Button } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Features', 'How It Works', 'Pricing', 'Astrologers'];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-14 py-5 bg-gradient-to-b from-[#060412]/95 to-transparent backdrop-blur-sm"
    >
      <Link to="/" className="font-cinzel-dec text-lg md:text-2xl font-bold text-[var(--gold)] tracking-[0.12em] flex items-center gap-3 md:gap-4 no-underline transition-transform hover:scale-105 z-[110]">
        ASTROLOGICAL
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-9 list-none items-center m-0 p-0">
        {menuItems.map((item) => (
          <li key={item}>
            <a 
              href={`/#${item.toLowerCase().replace(/\s+/g, '-')}`} 
              className="font-cinzel text-[0.72rem] tracking-[0.18em] uppercase text-[var(--cream-dim)] no-underline transition-colors duration-300 hover:text-[var(--gold)] relative group"
            >
              {item}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      {/* Side Actions (Sign In / Register) */}
      <div className="flex items-center gap-4 md:gap-6 z-[110]">
        <Link to="/login" className="hidden sm:block font-cinzel text-[0.65rem] tracking-[0.2em] uppercase text-[var(--cream-dim)] hover:text-[var(--gold)] transition-colors no-underline">
          Sign In
        </Link>
        <Link to="/register" className="hidden sm:block">
          <Button 
            type="primary" 
            className="font-cinzel h-auto px-4 md:px-6 py-2 md:py-2.5 text-[0.6rem] md:text-[0.7rem] tracking-[0.2em] uppercase rounded-none bg-[var(--gold)] border-none text-[var(--midnight)] hover:!bg-[var(--gold-light)] hover:!text-[var(--midnight)] shadow-[0_0_15px_rgba(201,168,76,0.2)]"
          >
            Join Now
          </Button>
        </Link>
        
        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden bg-transparent border-none text-[var(--gold)] text-xl cursor-pointer p-2 flex items-center justify-center transition-transform active:scale-90"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#060412] z-[105] flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('/stars-pattern.png')] pointer-events-none" />
            
            <ul className="flex flex-col gap-8 list-none items-center m-0 p-0 text-center">
              {menuItems.map((item) => (
                <li key={item}>
                  <a 
                    href={`/#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    onClick={() => setIsOpen(false)}
                    className="font-cinzel text-xl tracking-[0.2em] uppercase text-[var(--cream)] no-underline hover:text-[var(--gold)] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="h-px w-20 bg-[var(--gold)]/20 my-4" />

            <div className="flex flex-col items-center gap-6 w-full px-12">
              <Link 
                to="/login" 
                onClick={() => setIsOpen(false)}
                className="font-cinzel text-sm tracking-[0.2em] uppercase text-[var(--cream-dim)] hover:text-[var(--gold)] no-underline"
              >
                Sign In
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)} className="w-full">
                <Button 
                  type="primary" 
                  block
                  className="font-cinzel h-auto py-4 text-[0.8rem] tracking-[0.2em] uppercase rounded-none bg-[var(--gold)] border-none text-[var(--midnight)]"
                >
                  Begin Your Journey
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
