import { Button, Divider } from 'antd';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

export const Plans = () => {
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
