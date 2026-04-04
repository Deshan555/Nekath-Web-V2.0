import { motion } from 'framer-motion';

export const HowItWorks = () => {
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
      text: "Read your personalized horoscope each morning. Browse your Astrological calendar for the month. Get notified before major planetary transits affect your chart."
    },
    {
      circle: "IV",
      label: "Step Four",
      title: "Go Deeper When You Need It",
      text: "Generate a partner compatibility report before an important proposal. Book a live session with a verified Sri Lankan astrologer. Download your full Jathaka as a PDF."
    }
  ];

  return (
    <section id="how-it-works" className="px-6 md:px-14 py-20 md:py-32 bg-white/5 border-y border-[var(--gold)]/10">
      <div className="max-w-[900px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="font-cinzel text-[0.55rem] md:text-[0.65rem] tracking-[0.3em] md:tracking-[0.45em] uppercase text-[var(--gold-dim)] mb-4">Your Path</p>
          <h2 className="font-cinzel-dec text-2xl md:text-5xl text-[var(--cream)] mb-4">How It Works</h2>
          <p className="font-garamond italic text-lg md:text-xl text-[var(--cream-dim)]">Precision astrology requires only your birth details</p>
        </motion.div>

        <div className="flex flex-col">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-4 md:gap-10 group"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 md:w-14 md:h-14 border border-[var(--gold)]/40 rounded-full flex items-center justify-center font-cinzel text-xs md:text-sm text-[var(--gold)] bg-[var(--gold)]/5 group-hover:bg-[var(--gold)]/15 transition-all duration-300">
                  {s.circle}
                </div>
                {i !== steps.length - 1 && (
                  <div className="flex-1 w-px bg-gradient-to-b from-[var(--gold)]/30 to-[var(--gold)]/5 py-4" />
                )}
              </div>
              <div className="pt-1.5 md:pt-3 pb-8 md:pb-12">
                <p className="font-cinzel text-[0.55rem] md:text-[0.62rem] tracking-[0.3em] md:tracking-[0.35em] uppercase text-[var(--gold-dim)] mb-1.5 md:mb-2">{s.label}</p>
                <h4 className="font-cinzel text-md md:text-lg text-[var(--cream)] mb-2 md:mb-2.5">{s.title}</h4>
                <p className="font-poppins text-sm md:text-base text-[var(--cream-dim)] leading-relaxed max-w-xl">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
