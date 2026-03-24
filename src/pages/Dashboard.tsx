import { Card, Row, Col, Progress, Badge, Divider, List } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faInfinity, faCalendarAlt, faChartLine, faSignOutAlt, faBell, faCompass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Cosmos } from '../components/Cosmos';
import { HoroscopeChart } from '../components/HoroscopeChart';
import { NakathService } from '../components/NakathService';
import { MatchingService } from '../components/MatchingService';
import { Chatbot } from '../components/Chatbot';

export const Dashboard = () => {
  const navigate = useNavigate();

  const user = {
    name: localStorage.getItem('nakath_user_name') || "Deshan Ranasinghe",
    email: "deshan@example.com",
    tier: localStorage.getItem('nakath_user_tier') || "Nakath Plus",
    birthData: `${localStorage.getItem('nakath_user_dob') || '24 May 1998'} · ${localStorage.getItem('nakath_user_tob') || '10:45 AM'}`,
    location: localStorage.getItem('nakath_user_place') || "Colombo, Sri Lanka",
    risingSign: "Leo",
    nakshatra: "Pushya"
  };

  const dailyHoroscope = [
    { time: "Morning", text: "A fruitful time for creative ventures. The Moon aligns with your 5th house." },
    { time: "Evening", text: "Focus on inner peace. Avoid major financial commitments." }
  ];

  return (
    <div className="relative min-h-screen bg-[var(--midnight)] text-[var(--cream)] overflow-x-hidden font-poppins pb-20">
      <Cosmos />

      {/* Side Nav (Simple) */}
      <div className="fixed left-0 top-0 bottom-0 w-20 bg-[var(--midnight)]/80 backdrop-blur-md border-r border-[var(--gold)]/10 z-[100] flex flex-col items-center py-10 gap-8">
        <div className="text-[var(--gold)] text-2xl font-cinzel-dec cursor-pointer" onClick={() => navigate('/')}>✿</div>
        <div className="flex flex-col gap-6 mt-10">
          {[faCompass, faChartLine, faCalendarAlt, faBell].map((icon, i) => (
            <div key={i} className="w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all hover:bg-[var(--gold)]/10 hover:text-[var(--gold)] text-[var(--cream-dim)]">
              <FontAwesomeIcon icon={icon} className="text-xl" />
            </div>
          ))}
        </div>
        <div 
          onClick={() => navigate('/')}
          className="mt-auto w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer text-crimson-l hover:bg-crimson/10"
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="text-xl" />
        </div>
      </div>

      <div className="pl-28 pr-6 md:pr-14 py-10 relative z-10">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="font-cinzel text-2xl text-[var(--gold)] tracking-wider">Celestial Dashboard</h1>
            <p className="text-[var(--cream-dim)] opacity-60 italic text-sm">Welcome back, {user.name}</p>
          </div>
          <div className="flex items-center gap-4">
             <Badge count={3} offset={[-2, 6]} color="var(--gold)">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-[var(--gold)]/20 flex items-center justify-center text-[var(--gold)]">
                    <FontAwesomeIcon icon={faBell} />
                </div>
             </Badge>
            <div className="flex items-center gap-3 bg-white/5 border border-[var(--gold)]/20 pl-4 pr-1 py-1 rounded-full">
              <span className="text-xs font-cinzel text-[var(--gold-dim)] uppercase tracking-widest">{user.tier}</span>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dim)] flex items-center justify-center text-[var(--midnight)] font-bold text-xs uppercase">
                {user.name.substring(0,2)}
              </div>
            </div>
          </div>
        </header>

        <Row gutter={[24, 24]}>
          <Col xs={24} lg={16}>
            <Card className="bg-[var(--midnight)]/40 backdrop-blur-xl border border-[var(--gold)]/15 p-2 shadow-2xl mb-8 overflow-hidden relative">
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-[var(--gold)]/5 rounded-full blur-[100px]" />
              <h2 className="font-cinzel text-lg text-[var(--cream)] mb-8 flex items-center gap-3 p-4">
                <FontAwesomeIcon icon={faStar} className="text-[var(--gold)] text-xs" />
                Personal Janma Patrika (Birth Chart)
              </h2>
              
              <Row gutter={40} className="px-6 pb-6">
                <Col xs={24} md={12}>
                  <HoroscopeChart />
                </Col>
                <Col xs={24} md={12}>
                  <div className="flex flex-col gap-6 py-4">
                    <div className="bg-white/5 p-4 border-l-2 border-[var(--gold)]">
                      <p className="text-[0.6rem] uppercase tracking-widest text-[var(--gold-dim)] mb-1">Rising Sign (Lagna)</p>
                      <p className="font-cinzel text-xl text-[var(--cream)]">{user.risingSign}</p>
                    </div>
                    <div className="bg-white/5 p-4 border-l-2 border-[var(--teal)]">
                      <p className="text-[0.6rem] uppercase tracking-widest text-[var(--teal-l)] mb-1">Birth Star (Nakshatra)</p>
                      <p className="font-cinzel text-xl text-[var(--cream)]">{user.nakshatra}</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-[0.7rem] text-[var(--cream-dim)] flex justify-between mb-2">
                        <span>Celestial Alignment Depth</span>
                        <span>85%</span>
                      </p>
                      <Progress percent={85} strokeColor="var(--gold)" trailColor="rgba(255,255,255,0.05)" showInfo={false} />
                      <p className="text-[0.6rem] text-[var(--gold-dim)] mt-4 italic opacity-60 leading-relaxed">
                        "Your current Dasa indicates a period of spiritual growth. The planetary alignment in the 4th house favors stability."
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>

            <div className="mb-12">
               <h3 className="font-cinzel text-md text-[var(--gold)] tracking-widest uppercase mb-6 flex items-center gap-3">
                 <div className="h-px bg-[var(--gold)]/30 flex-1" />
                 Cosmic Services
                 <div className="h-px bg-[var(--gold)]/30 flex-1" />
               </h3>
               <Row gutter={[24, 24]}>
                 <Col xs={24} md={12}>
                   <NakathService />
                 </Col>
                 <Col xs={24} md={12}>
                   <MatchingService />
                 </Col>
               </Row>
            </div>

            <h3 className="font-cinzel text-md text-[var(--gold)] tracking-widest uppercase mb-6">Today's Guidance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dailyHoroscope.map((h, i) => (
                <div key={i} className="bg-white/5 border border-[var(--gold)]/10 p-6 relative group overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   <p className="font-cinzel text-[0.65rem] tracking-widest text-[var(--gold-dim)] uppercase mb-2">{h.time}</p>
                   <p className="text-[var(--cream-dim)] text-sm leading-relaxed">{h.text}</p>
                </div>
              ))}
            </div>
          </Col>

          <Col xs={24} lg={8}>
            <Card className="bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dim)] p-1 border-none shadow-2xl mb-8">
               <div className="bg-[var(--midnight)] p-6 h-full">
                  <h3 className="font-cinzel text-md text-[var(--gold)] mb-4 uppercase tracking-widest">Active Plan</h3>
                  <div className="mb-6">
                    <p className="text-2xl font-cinzel-dec text-[var(--cream)]">{user.tier}</p>
                    <p className="text-xs text-[var(--cream-dim)] opacity-60 underline cursor-pointer">View Tier Benefits</p>
                  </div>
                  <Divider className="border-white/10" />
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-sm text-[var(--cream-dim)]">
                      <FontAwesomeIcon icon={faInfinity} className="text-xs text-[var(--gold-dim)]" />
                      Unlimited Compatibility Checks
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[var(--cream-dim)]">
                      <FontAwesomeIcon icon={faInfinity} className="text-xs text-[var(--gold-dim)]" />
                      Priority Transit Alerts
                    </div>
                  </div>
               </div>
            </Card>

            <Card className="bg-white/5 border border-[var(--gold)]/15">
               <h3 className="font-cinzel text-xs text-[var(--gold-dim)] uppercase tracking-widest mb-4">Upcoming Nakaths</h3>
               <List
                dataSource={[
                  { title: "Grahapravesha", date: "Oct 12" },
                  { title: "Vivaha (Marriage)", date: "Nov 05" }
                ]}
                renderItem={item => (
                  <List.Item className="border-white/5 px-0">
                    <div className="flex justify-between w-full items-center">
                      <span className="text-sm text-[var(--cream)]">{item.title}</span>
                      <span className="text-[0.6rem] font-cinzel bg-white/5 border border-white/10 px-2 py-0.5 rounded text-[var(--gold-light)]">{item.date}</span>
                    </div>
                  </List.Item>
                )}
               />
            </Card>
          </Col>
        </Row>
      </div>
      <Chatbot />
    </div>
  );
};
