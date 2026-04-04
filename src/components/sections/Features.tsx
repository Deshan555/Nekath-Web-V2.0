import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSun, 
  faCalendarAlt, 
  faHeart 
} from '@fortawesome/free-solid-svg-icons';

export const Features = () => {
  const features = [
    {
      icon: faSun,
      color: "var(--indigo)",
      glow: "rgba(201,168,76,0.4)",
      num: "01 — Horoscopes",
      name: "Personalized Jathaka",
      desc: "Daily, weekly, and annual readings built on your Lagna, Moon sign, and Vimshottari Dasa periods — not generic sun-sign columns.",
      tag: "Sinhala · Tamil · English"
    },
    {
      icon: faCalendarAlt,
      color: "var(--teal)",
      glow: "rgba(42,152,152,0.4)",
      num: "02 — Astrological Calendar",
      name: "Auspicious Day Finder",
      desc: "Select the perfect moment for weddings, business ventures, home entry, and travel. Tithi, Nakshatra, Rahu Kala, and Yoga.",
      tag: "10 Activity Types"
    },
    {
      icon: faHeart,
      color: "var(--crimson)",
      glow: "rgba(139,26,26,0.4)",
      num: "03 — Porondam",
      name: "Partner Matching",
      desc: "Full Ashtakoota compatibility analysis with Mangala Dosha, Nadi Dosha checks, and cancellation logic — trusted Sri Lankan guidance.",
      tag: "36-Point Analysis"
    }
  ];

  return (
    <section id="features" className="px-6 md:px-14 py-20 md:py-32 max-w-[1200px] mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
        }}
        className="text-center mb-10 md:mb-16"
      >
        <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="font-cinzel text-[0.55rem] md:text-[0.65rem] tracking-[0.3em] md:tracking-[0.45em] uppercase text-[var(--gold-dim)] mb-4">Three Sacred Pillars</motion.p>
        <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="font-cinzel-dec text-2xl md:text-5xl text-[var(--cream)] mb-4">What Astrological Offers</motion.h2>
        <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="font-garamond italic text-lg md:text-xl text-[var(--cream-dim)] mb-12 md:mb-20">Ancient wisdom. Precise calculation. Modern access.</motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--gold)]/10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="bg-[var(--midnight)]/50 backdrop-blur-sm border border-[var(--gold)]/10 p-8 md:p-10 text-left relative overflow-hidden group hover:bg-[var(--gold)]/[0.04] hover:border-[var(--gold)]/20 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div 
                className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 md:mb-8 bg-white/5 border border-white/10 group-hover:border-[var(--gold)]/30 transition-colors duration-500"
                style={{ filter: `drop-shadow(0 0 12px ${f.glow})` }}
              >
                <FontAwesomeIcon icon={f.icon} className="text-2xl md:text-3xl text-[var(--gold)]" />
              </div>
              <span className="font-cinzel text-[0.55rem] md:text-[0.6rem] tracking-[0.4em] text-[var(--gold-dim)] uppercase mb-3 block">{f.num}</span>
              <h3 className="font-cinzel text-lg text-[var(--cream)] mb-4 leading-tight">{f.name}</h3>
              <p className="font-poppins text-sm md:text-base text-[var(--cream-dim)] leading-relaxed mb-6">{f.desc}</p>
              <span className="inline-block font-cinzel text-[0.55rem] md:text-[0.58rem] tracking-[0.25em] uppercase text-[var(--gold-dim)] border border-[var(--gold)]/20 px-3 py-1">{f.tag}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
