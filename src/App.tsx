import { ConfigProvider, Button, Divider } from 'antd';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCircleCheck, 
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { Cosmos } from './components/Cosmos';
import { Yantra } from './components/Yantra';

const Nav = () => (
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

const Hero = () => (
  <section className="min-h-screen flex flex-col items-center justify-center text-center px-10 pt-[120px] pb-20 relative">
    <motion.p 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 1 }}
      className="font-garamond text-lg text-[var(--gold-dim)] mb-4 tracking-[0.08em]"
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
      className="font-garamond italic text-lg md:text-2xl text-[var(--cream-dim)] max-w-2xl leading-relaxed mb-14"
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
      <a href="#" className="font-cinzel text-[0.72rem] tracking-[0.28em] uppercase text-[var(--midnight)] bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold)] px-10 py-4 no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)] relative overflow-hidden group">
        <span className="relative z-10">Reveal My Chart</span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
      </a>
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

const Features = () => {
  const features = [
    {
      glyph: "🪐",
      num: "01 — Horoscopes",
      name: "Personalized Jathaka",
      desc: "Daily, weekly, and annual readings built on your Lagna, Moon sign, and Vimshottari Dasa periods — not generic sun-sign columns.",
      tag: "Sinhala · Tamil · English"
    },
    {
      glyph: "📅",
      num: "02 — Nakath Calendar",
      name: "Auspicious Day Finder",
      desc: "Select the perfect moment for weddings, business ventures, home entry, and travel. Tithi, Nakshatra, Rahu Kala, and Yoga.",
      tag: "10 Activity Types"
    },
    {
      glyph: "💍",
      num: "03 — Porondam",
      name: "Partner Matching",
      desc: "Full Ashtakoota compatibility analysis with Mangala Dosha, Nadi Dosha checks, and cancellation logic — trusted Sri Lankan guidance.",
      tag: "36-Point Analysis"
    }
  ];

  return (
    <section id="features" className="px-6 md:px-14 py-32 max-w-[1200px] mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
        }}
        className="text-center mb-16"
      >
        <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="font-cinzel text-[0.65rem] tracking-[0.45em] uppercase text-[var(--gold-dim)] mb-4">Three Sacred Pillars</motion.p>
        <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="font-cinzel-dec text-3xl md:text-5xl text-[var(--cream)] mb-4">What Nakath Offers</motion.h2>
        <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="font-garamond italic text-xl text-[var(--cream-dim)] mb-20">Ancient wisdom. Precise calculation. Modern access.</motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--gold)]/10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="bg-[var(--midnight)]/50 backdrop-blur-sm border border-[var(--gold)]/10 p-10 text-left relative overflow-hidden group hover:bg-[var(--gold)]/[0.04] hover:border-[var(--gold)]/20 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <span className="text-5xl mb-6 block drop-shadow-[0_0_12px_rgba(201,168,76,0.4)]">{f.glyph}</span>
              <span className="font-cinzel text-[0.6rem] tracking-[0.4em] text-[var(--gold-dim)] uppercase mb-3 block">{f.num}</span>
              <h3 className="font-cinzel text-lg text-[var(--cream)] mb-4 leading-tight">{f.name}</h3>
              <p className="font-garamond text-base text-[var(--cream-dim)] leading-relaxed mb-6">{f.desc}</p>
              <span className="inline-block font-cinzel text-[0.58rem] tracking-[0.25em] uppercase text-[var(--gold-dim)] border border-[var(--gold)]/20 px-3.5 py-1">{f.tag}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      circle: "I",
      label: "Step One",
      title: "Enter Your Birth Details",
      text: "Provide your date and exact time of birth — the two pillars on which accurate Vedic astrology stands. Birthplace is recommended for precise Lagna calculation."
    },
    {
      circle: "II",
      label: "Step Two",
      title: "Your Chart Is Cast",
      text: "Our astrological engine — powered by the Swiss Ephemeris with Lahiri Ayanamsa — calculates your Rasi chart, Navamsa, Nakshatra, and full Dasa timeline instantly."
    },
    {
      circle: "III",
      label: "Step Three",
      title: "Receive Daily Guidance",
      text: "Read your personalized horoscope each morning. Browse your Nakath calendar for the month. Get notified before major planetary transits affect your chart."
    },
    {
      circle: "IV",
      label: "Step Four",
      title: "Go Deeper When You Need It",
      text: "Generate a partner compatibility report before an important proposal. Book a live session with a verified Sri Lankan astrologer. Download your full Jathaka as a PDF."
    }
  ];

  return (
    <section id="how-it-works" className="px-6 md:px-14 py-32 bg-white/5 border-y border-[var(--gold)]/10">
      <div className="max-w-[900px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-center mb-16"
        >
          <p className="font-cinzel text-[0.65rem] tracking-[0.45em] uppercase text-[var(--gold-dim)] mb-4">Your Path</p>
          <h2 className="font-cinzel-dec text-3xl md:text-5xl text-[var(--cream)] mb-4">How It Works</h2>
          <p className="font-garamond italic text-xl text-[var(--cream-dim)]">Precision astrology requires only your birth details</p>
        </motion.div>

        <div className="flex flex-col">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="grid grid-cols-[80px_1fr] gap-0 md:gap-10 group"
            >
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 border border-[var(--gold)]/40 rounded-full flex items-center justify-center font-cinzel text-sm text-[var(--gold)] bg-[var(--gold)]/5 group-hover:bg-[var(--gold)]/15 transition-all duration-300">
                  {s.circle}
                </div>
                {i !== steps.length - 1 && (
                  <div className="flex-1 w-px bg-gradient-to-b from-[var(--gold)]/30 to-[var(--gold)]/5 py-4" />
                )}
              </div>
              <div className="pt-3 pb-12">
                <p className="font-cinzel text-[0.62rem] tracking-[0.35em] uppercase text-[var(--gold-dim)] mb-2">{s.label}</p>
                <h4 className="font-cinzel text-lg text-[var(--cream)] mb-2.5">{s.title}</h4>
                <p className="font-garamond text-base text-[var(--cream-dim)] leading-relaxed max-w-xl">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Plans = () => {
  const plans = [
    {
      tier: "Free",
      name: "Aaramba",
      price: "LKR 0",
      period: "forever",
      features: [
        { name: "Daily & Weekly Horoscope", included: true },
        { name: "Basic Nakath Calendar", included: true },
        { name: "Birth Chart View", included: true },
        { name: "Personalized Calendar", included: false },
        { name: "Partner Matching", included: false },
        { name: "PDF Reports", included: false }
      ]
    },
    {
      tier: "Basic",
      name: "Nakath",
      price: "LKR 490",
      period: "per month",
      features: [
        { name: "All Free features", included: true },
        { name: "Monthly & Annual Reports", included: true },
        { name: "Personalized Nakath Calendar", included: true },
        { name: "Dasa Period Dashboard", included: true },
        { name: "Transit Alerts", included: true },
        { name: "Partner Matching", included: false }
      ]
    },
    {
      tier: "Plus",
      name: "Porondam",
      price: "LKR 990",
      period: "per month",
      featured: true,
      features: [
        { name: "All Basic features", included: true },
        { name: "Partner Matching Report", included: true },
        { name: "PDF Compatibility Export", included: true },
        { name: "Dosha Remedies Guide", included: true },
        { name: "Calendar Sync (Google/iCal)", included: true },
        { name: "Ad-free Experience", included: true }
      ]
    },
    {
      tier: "Premium",
      name: "Nakath Premium",
      price: "LKR 2,490",
      period: "per month",
      features: [
        { name: "All Plus features", included: true },
        { name: "Live Astrologer Session", included: true },
        { name: "Unlimited Matching Reports", included: true },
        { name: "Custom Report Requests", included: true },
        { name: "Vivaha Nakath Guidance", included: true },
        { name: "Priority Support", included: true }
      ]
    }
  ];

  return (
    <section id="pricing" className="px-6 md:px-14 py-32 max-w-[1200px] mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        className="text-center mb-16"
      >
        <p className="font-cinzel text-[0.65rem] tracking-[0.45em] uppercase text-[var(--gold-dim)] mb-4">Subscription Plans</p>
        <h2 className="font-cinzel-dec text-3xl md:text-5xl text-[var(--cream)] mb-4">Choose Your Path</h2>
        <p className="font-garamond italic text-xl text-[var(--cream-dim)]">Start free. Upgrade when the stars align.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`p-10 border border-[var(--gold)]/10 bg-[var(--white)]/5 relative transition-all duration-300 group hover:border-[var(--gold)]/30 ${p.featured ? 'bg-[var(--gold)]/[0.06] border-[var(--gold)]/35 -translate-y-2' : ''}`}
          >
            {p.featured && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--gold)] text-[var(--midnight)] font-cinzel text-[0.55rem] tracking-[0.25em] uppercase px-4 py-1.5 whitespace-nowrap z-20">
                Most Popular
              </div>
            )}
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[var(--gold-dim)] mb-2.5">{p.tier}</p>
            <h3 className="font-cinzel-dec text-xl text-[var(--cream)] mb-6">{p.name}</h3>
            <p className="font-cinzel text-3xl text-[var(--gold)] mb-1 leading-none">{p.price}</p>
            <p className="font-garamond text-sm text-[var(--cream-dim)] mb-7">{p.period}</p>
            
            <Divider className="border-[var(--gold)]/20 my-7" />
            
            <ul className="flex flex-col gap-2.5 mb-8 list-none p-0">
              {p.features.map((f, fi) => (
                <li key={fi} className="font-garamond text-[0.95rem] text-[var(--cream-dim)] flex gap-2.5 items-start leading-tight">
                  {f.included ? (
                    <FontAwesomeIcon icon={faCircleCheck} className="text-[var(--gold)] mt-1 flex-shrink-0" />
                  ) : (
                    <FontAwesomeIcon icon={faXmark} className="text-white/20 mt-1 flex-shrink-0" />
                  )}
                  {f.name}
                </li>
              ))}
            </ul>

            <Button 
              type={p.featured ? 'primary' : 'default'}
              block
              className={`font-cinzel h-auto py-3.5 text-[0.65rem] tracking-[0.25em] uppercase rounded-none border-[var(--gold)]/30 bg-transparent text-[var(--gold)] hover:!bg-[var(--gold)]/10 hover:!border-[var(--gold)] ${p.featured ? '!bg-gradient-to-br !from-[var(--gold-light)] !to-[var(--gold)] !text-[var(--midnight)] !border-none hover:!filter hover:!brightness-110' : ''}`}
            >
              Get {p.name}
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t border-[var(--gold)]/10 px-6 md:px-14 py-16 flex flex-col md:flex-row items-center justify-between gap-6 mt-16 text-center md:text-left">
    <div className="font-cinzel-dec text-xl text-[var(--gold)] tracking-[0.1em]">✿ NAKATH</div>
    <p className="font-garamond text-sm text-[var(--cream-dim)]/40 italic">© 2026 Nakath Platform · Rooted in tradition, built for today</p>
    <div className="flex gap-5">
      {['සිංහල', 'தமிழ்', 'English'].map(lang => (
        <a key={lang} href="#" className="font-cinzel text-[0.6rem] tracking-[0.2em] uppercase text-[var(--cream-dim)]/50 no-underline transition-all hover:text-[var(--gold)] hover:opacity-100">{lang}</a>
      ))}
    </div>
  </footer>
);

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#C9A84C',
          colorBgBase: '#060412',
          colorTextBase: '#F5EDD6',
          borderRadius: 0,
          fontFamily: "'EB Garamond', serif",
        },
      }}
    >
      <div className="relative min-h-screen bg-[var(--midnight)] text-[var(--cream)] selection:bg-[var(--gold)] selection:text-[var(--midnight)] overflow-x-hidden">
        <Cosmos />
        <Yantra />
        
        <div className="relative z-10">
          <Nav />
          <Hero />
          <Features />
          <HowItWorks />
          <Plans />
          <Footer />
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
