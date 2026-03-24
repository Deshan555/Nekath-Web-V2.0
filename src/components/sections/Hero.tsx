import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Hero = () => (
  <section className="min-h-screen flex flex-col items-center justify-center text-center px-10 pt-[120px] pb-20 relative">
    <motion.p 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 1 }}
      className="font-poppins text-lg text-[var(--gold-dim)] mb-4 tracking-[0.08em]"
    >
      නකත් — ශ්‍රී ලාංකික ජ්‍යෝතිෂ්‍ය
    </motion.p>
    
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="flex items-center gap-4 mb-4 text-[var(--gold-dim)] uppercase tracking-[0.45em] text-[0.68rem] font-cinzel"
    >
      <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[var(--gold-dim)]" />
      Traditional Sri Lankan Astrology
      <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[var(--gold-dim)]" />
    </motion.div>

    <motion.h1 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 1.2 }}
      className="font-cinzel-dec text-6xl md:text-9xl font-black leading-[0.95] tracking-[0.06em] text-gold-gradient relative"
    >
      NAKATH
      <span className="absolute inset-0 text-transparent [-webkit-text-stroke:1px_rgba(201,168,76,0.15)] animate-[shimmer_6s_ease-in-out_infinite]">NAKATH</span>
    </motion.h1>

    <motion.p 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 1 }}
      className="font-cinzel text-xs md:text-base tracking-[0.38em] uppercase text-[var(--cream-dim)] mt-5"
    >
      The Auspicious Moment &nbsp;·&nbsp; Your Stars &nbsp;·&nbsp; Your Destiny
    </motion.p>

    <motion.div 
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ delay: 0.9, duration: 1 }}
      className="flex items-center gap-4 my-10 w-full max-w-[520px]"
    >
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[var(--gold-dim)] to-transparent" />
      <div className="w-2 h-2 bg-[var(--gold)] rotate-45 shadow-[0_0_8px_var(--gold)]" />
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[var(--gold-dim)] to-transparent" />
    </motion.div>

    <motion.p 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.0, duration: 1 }}
      className="font-poppins italic text-lg md:text-2xl text-[var(--cream-dim)] max-w-2xl leading-relaxed mb-14"
    >
      Personalized horoscopes, auspicious day guidance, and partner matching
      rooted in authentic Sri Lankan Jyotisha tradition —
      in Sinhala, Tamil & English.
    </motion.p>

    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.1, duration: 1 }}
      className="flex gap-5 flex-wrap justify-center"
    >
      <Link to="/register" className="font-cinzel text-[0.72rem] tracking-[0.28em] uppercase text-[var(--midnight)] bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold)] px-10 py-4 no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)] relative overflow-hidden group">
        <span className="relative z-10">Begin Your Journey</span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
      </Link>
      <a href="#features" className="font-cinzel text-[0.72rem] tracking-[0.28em] uppercase text-[var(--gold)] bg-transparent border border-[var(--gold)]/40 px-10 py-4 no-underline transition-all duration-300 hover:border-[var(--gold)] hover:bg-[var(--gold)]/5">
        Explore Features
      </a>
    </motion.div>

    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.4, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
    >
      <span className="font-cinzel text-[0.55rem] tracking-[0.35em] uppercase text-[var(--cream-dim)]">Discover</span>
      <div className="w-[22px] h-[34px] border border-[var(--gold)]/40 rounded-xl flex justify-center pt-1.5">
        <div className="w-[3px] h-2 bg-[var(--gold)] rounded-sm animate-[scroll-dot_2s_ease-in-out_infinite]" />
      </div>
    </motion.div>
  </section>
);
