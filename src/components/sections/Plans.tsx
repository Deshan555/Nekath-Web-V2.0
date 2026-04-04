import { Divider } from 'antd';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Plans = () => {
  const plans = [
    {
      tier: "Starter",
      name: "Basic",
      price: "LKR 0",
      period: "forever",
      features: [
        { name: "Daily & Weekly Horoscope", included: true },
        { name: "Basic Astrological Calendar", included: true },
        { name: "Birth Chart View", included: true },
        { name: "Personalized Calendar", included: false },
        { name: "Partner Matching", included: false },
        { name: "PDF Reports", included: false }
      ]
    },
    {
      tier: "Enhanced",
      name: "Standard",
      price: "LKR 490",
      period: "per month",
      features: [
        { name: "All Free features", included: true },
        { name: "Monthly & Annual Reports", included: true },
        { name: "Personalized Astrological Calendar", included: true },
        { name: "Dasa Period Dashboard", included: true },
        { name: "Transit Alerts", included: true },
        { name: "Partner Matching", included: false }
      ]
    },
    {
      tier: "Popular",
      name: "Plus",
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
      tier: "Ultimate",
      name: "Premium",
      price: "LKR 2,490",
      period: "per month",
      features: [
        { name: "All Plus features", included: true },
        { name: "Live Astrologer Session", included: true },
        { name: "Unlimited Matching Reports", included: true },
        { name: "Custom Report Requests", included: true },
        { name: "Vivaha Astrological Guidance", included: true },
        { name: "Priority Support", included: true }
      ]
    }
  ];

  return (
    <section id="pricing" className="px-6 md:px-14 py-20 md:py-32 max-w-[1200px] mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        className="text-center mb-10 md:mb-16"
      >
        <p className="font-cinzel text-[0.55rem] md:text-[0.65rem] tracking-[0.3em] md:tracking-[0.45em] uppercase text-[var(--gold-dim)] mb-4">Subscription Plans</p>
        <h2 className="font-cinzel-dec text-2xl md:text-5xl text-[var(--cream)] mb-4">Choose Your Path</h2>
        <p className="font-garamond italic text-lg md:text-xl text-[var(--cream-dim)]">Start free. Upgrade when the stars align.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 mt-12 md:mt-16">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`flex flex-col p-8 md:p-10 border border-[var(--gold)]/10 bg-[var(--white)]/5 relative transition-all duration-300 group hover:border-[var(--gold)]/30 ${p.featured ? 'bg-[var(--gold)]/[0.06] border-[var(--gold)]/35 md:-translate-y-2' : ''}`}
          >
            {p.featured && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--gold)] text-[var(--midnight)] font-cinzel text-[0.55rem] tracking-[0.25em] uppercase px-4 py-1.5 whitespace-nowrap z-20">
                Most Popular
              </div>
            )}
            <p className="font-cinzel text-[0.55rem] md:text-[0.65rem] tracking-[0.3em] md:tracking-[0.4em] uppercase text-[var(--gold-dim)] mb-2.5">{p.tier}</p>
            <h3 className="font-cinzel-dec text-lg md:text-xl text-[var(--cream)] mb-6">{p.name}</h3>
            <p className="font-cinzel text-2xl md:text-3xl text-[var(--gold)] mb-1 leading-none">{p.price}</p>
            <p className="font-poppins text-xs md:text-sm text-[var(--cream-dim)] mb-7">{p.period}</p>
            
            <Divider className="border-[var(--gold)]/20 my-6 md:my-7" />
            
            <ul className="flex flex-col gap-2.5 mb-8 list-none p-0 flex-grow">
              {p.features.map((f, fi) => (
                <li key={fi} className="font-poppins text-[0.85rem] md:text-[0.95rem] text-[var(--cream-dim)] flex gap-2.5 items-start leading-tight">
                  {f.included ? (
                    <FontAwesomeIcon icon={faCircleCheck} className="text-[var(--gold)] mt-0.5 md:mt-1 flex-shrink-0 text-sm" />
                  ) : (
                    <FontAwesomeIcon icon={faXmark} className="text-white/20 mt-0.5 md:mt-1 flex-shrink-0 text-sm" />
                  )}
                  {f.name}
                </li>
              ))}
            </ul>

            <Link to="/register" className="block mt-7 text-center">
              <div 
                className={`py-3.5 px-6 font-cinzel text-[0.65rem] tracking-[0.25em] uppercase transition-all duration-300 border ${
                  p.featured 
                    ? 'bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold)] text-[var(--midnight)] border-none shadow-[0_4px_15px_rgba(201,168,76,0.3)] hover:brightness-110' 
                    : 'bg-transparent text-[var(--gold)] border-[var(--gold)]/30 hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]'
                }`}
              >
                Choose Your Path
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
