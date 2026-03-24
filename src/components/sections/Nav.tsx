import { Button } from 'antd';
import { motion } from 'framer-motion';

export const Nav = () => (
  <motion.nav 
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-14 py-6 bg-gradient-to-b from-[#060412]/95 to-transparent"
  >
    <a href="#" className="font-cinzel-dec text-xl font-bold text-[var(--gold)] tracking-[0.12em] flex items-center gap-2">
      <span className="text-2xl">✿</span>
      NAKATH
    </a>
    <ul className="hidden md:flex gap-9 list-none items-center">
      {['Features', 'How It Works', 'Pricing', 'Astrologers'].map((item) => (
        <li key={item}>
          <a 
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
            className="font-cinzel text-[0.72rem] tracking-[0.18em] uppercase text-[var(--cream-dim)] no-underline transition-colors duration-300 hover:text-[var(--gold)] relative group"
          >
            {item}
            <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
          </a>
        </li>
      ))}
    </ul>
    <Button 
      type="primary" 
      className="font-cinzel h-auto px-6 py-2.5 text-[0.7rem] tracking-[0.2em] uppercase rounded-none bg-[var(--gold)] border-none text-[var(--midnight)] hover:!bg-[var(--gold-light)] hover:!text-[var(--midnight)]"
    >
      Begin Your Journey
    </Button>
  </motion.nav>
);
