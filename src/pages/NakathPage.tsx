import { Card, Row, Col, Tag, Button, Progress, Divider } from 'antd';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faClock, faLocationDot, faSun, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Cosmos } from '../components/Cosmos';
import { haptics } from '../utils/haptics';

export const NakathPage = () => {
  const navigate = useNavigate();

  const pancanga = [
    { label: "Tithi", value: "Shukla Dwadashi", desc: "Auspicious for religious acts and travel.", color: "var(--gold)" },
    { label: "Vara", value: "Tuesday (Kuja)", desc: "Ruled by Mars. Favors mechanical work.", color: "var(--cream)" },
    { label: "Nakshatra", value: "Pushya", desc: "Best for nourishing and growth activities.", color: "var(--teal-l)" },
    { label: "Yoga", value: "Siddha", desc: "Guarantees success in started ventures.", color: "var(--gold-dim)" },
    { label: "Karana", value: "Bava", desc: "Favors rural and agricultural works.", color: "var(--cream-dim)" },
  ];

  const activities = [
    { name: "House Blessing / Warming", status: "Highly Auspicious", logic: "Pushya Nakshatra + Siddha Yoga align perfectly for stability." },
    { name: "New Business Venture", status: "Auspicious", logic: "Shukla Paksha (Waxing Moon) provides growth energy." },
    { name: "Wedding Rituals", status: "Neutral", logic: "Tithi is favorable but Vara (Mars) requires specific remedies." },
    { name: "International Travel", status: "Asubha", logic: "Rahu Kala overlap in the evening peak hours." },
    { name: "Vehicle Purchase", status: "Highly Auspicious", logic: "Mars ruler favors metallic and transit related assets today." }
  ];

  return (
    <div className="relative min-h-screen bg-[var(--midnight)] text-[var(--text-main)] overflow-x-hidden font-poppins pb-20 transition-colors duration-500">
      <Cosmos />

      <div className="relative z-10 container mx-auto px-6 py-20 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <button 
            onClick={() => {
              haptics.light();
              navigate('/dashboard');
            }} 
            className="font-cinzel text-[0.6rem] tracking-[0.2em] uppercase text-[var(--gold-dim)] hover:text-[var(--gold)] mb-6 flex items-center gap-2 mx-auto transition-colors"
          >
            <FontAwesomeIcon icon={faChevronLeft} /> Return to Dashboard
          </button>
          <h1 className="font-cinzel-dec text-4xl md:text-5xl text-gold-gradient mb-4">Nakath Calendar</h1>
          <p className="font-poppins text-[var(--text-dim)] opacity-60 italic max-w-2xl mx-auto">Master the elements of time. Align your actions with the pulse of the universe.</p>
        </motion.div>

        <Row gutter={[24, 24]}>
          <Col xs={24} lg={16}>
            <h3 className="font-cinzel text-xs text-[var(--gold-dim)] uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
              Today's Pancanga <div className="h-px bg-[var(--gold)]/20 flex-1" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
               {pancanga.map((p, i) => (
                 <Card key={i} className="bg-[var(--panel-bg)] border border-[var(--panel-border)] p-4 shadow-xl transition-all hover:border-[var(--gold)]/20">
                   <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[0.55rem] uppercase tracking-widest text-[var(--gold-dim)] opacity-50 block mb-1">{p.label}</span>
                        <h4 className="font-cinzel text-lg" style={{ color: p.color }}>{p.value}</h4>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[var(--panel-bg)] flex items-center justify-center opacity-30 border border-[var(--panel-border)]">
                        <FontAwesomeIcon icon={faSun} className="text-xs" />
                      </div>
                   </div>
                   <p className="text-[0.65rem] text-[var(--cream-dim)] leading-relaxed">{p.desc}</p>
                 </Card>
               ))}
            </div>

            <h3 className="font-cinzel text-xs text-[var(--gold-dim)] uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
              Auspicious Activities <div className="h-px bg-[var(--gold)]/20 flex-1" />
            </h3>
            <div className="flex flex-col gap-3">
              {activities.map((a, i) => (
                <div key={i} className="bg-[var(--panel-bg)] border border-[var(--panel-border)] p-6 group hover:border-[var(--gold)]/30 transition-all">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-cinzel tracking-wider text-[var(--text-main)]">{a.name}</span>
                    <Tag 
                      color={a.status.includes('Highly') ? 'gold' : a.status === 'Asubha' ? 'error' : a.status === 'Neutral' ? 'default' : 'success'}
                      className="text-[0.6rem] uppercase tracking-widest bg-transparent px-3 py-0.5"
                    >
                      {a.status}
                    </Tag>
                  </div>
                  <p className="text-[0.65rem] text-[var(--text-dim)] opacity-60 leading-relaxed italic">{a.logic}</p>
                </div>
              ))}
            </div>
          </Col>

          <Col xs={24} lg={8}>
            <Card className="bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dim)] p-1 border-none shadow-2xl mb-8">
               <div className="bg-[var(--panel-bg)] p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <FontAwesomeIcon icon={faClock} className="text-[var(--gold)]" />
                    <h3 className="font-cinzel text-sm text-[var(--gold)] uppercase tracking-widest">Rahu Kala</h3>
                  </div>
                  <div className="mb-8">
                    <p className="text-4xl font-cinzel text-[var(--text-main)] mb-2">15:12 - 16:45</p>
                    <p className="text-[0.65rem] text-[var(--gold-dim)] uppercase tracking-[0.2em] font-bold">Current Status: Inauspicious</p>
                  </div>
                  <Progress percent={100} strokeColor="#ff4d4f" showInfo={false} className="mb-6 opacity-40" />
                  <p className="text-[0.6rem] text-[var(--text-dim)] opacity-60 leading-relaxed">
                    Avoid starting new ventures or travel during this period. Best suited for quiet introspection or completing routine tasks.
                  </p>
                  <Divider className="border-[var(--panel-border)] my-8" />
                  <div className="flex items-center gap-4 text-[var(--text-dim)]">
                    <FontAwesomeIcon icon={faLocationDot} className="text-xs text-[var(--gold-dim)]" />
                    <span className="text-[0.6rem] uppercase tracking-widest">Calculated for: <b className="text-[var(--gold)]">Colombo</b></span>
                  </div>
               </div>
            </Card>

            <Card className="bg-[var(--panel-bg)] border border-[var(--panel-border)] p-6 shadow-xl transition-all duration-500">
               <h3 className="font-cinzel text-xs text-[var(--gold-dim)] uppercase tracking-widest mb-4">Aitificial Insight</h3>
               <p className="text-[0.65rem] text-[var(--text-dim)] leading-relaxed mb-6 italic opacity-80">
                 "Seeker, today's Siddha Yoga provides a massive boost to financial decisions. However, wait until Rahu Kala passes at 4:45 PM for house-related sigils."
               </p>
               <Button 
                block 
                className="bg-[var(--gold)]/10 border-[var(--gold)]/30 text-[var(--gold)] font-cinzel text-[0.6rem] h-auto py-2 uppercase tracking-widest"
                onClick={() => haptics.light()}
               >
                 Ask AI Assistant <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
               </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
