import { Card, Row, Col, Progress, Badge, Divider, List, Popover } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';
import { ServiceShortcut } from '../components/ServiceShortcut';
import { Cosmos } from '../components/Cosmos';
import { HoroscopeChart } from '../components/HoroscopeChart';
import { Chatbot } from '../components/Chatbot';
import { faCalendarAlt, faHeartPulse, faCrown, faInfinity, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export const Dashboard = () => {
  const navigate = useNavigate();

  const user = {
    name: localStorage.getItem('astrological_user_name') || "Deshan Ranasinghe",
    email: "deshan@example.com",
    tier: localStorage.getItem('astrological_user_tier') || "Astrological Plus",
    birthData: `${localStorage.getItem('astrological_user_dob') || '24 May 1998'} · ${localStorage.getItem('astrological_user_tob') || '10:45 AM'}`,
    location: localStorage.getItem('astrological_user_place') || "Colombo, Sri Lanka",
    risingSign: "Leo",
    nakshatra: "Pushya"
  };

  const dailyHoroscope = [
    { time: "Morning", text: "A fruitful time for creative ventures. The Moon aligns with your 5th house." },
    { time: "Evening", text: "Focus on inner peace. Avoid major financial commitments." }
  ];

  const dummyNotifications = [
    { title: "New Match Found", description: "You have a 95% compatibility match!", time: "10m ago" },
    { title: "Daily Horoscope", description: "Your daily reading is ready.", time: "1h ago" },
    { title: "Transit Alert", description: "Saturn is moving to your 5th house.", time: "3h ago" }
  ];

  return (
    <div className="relative min-h-screen bg-[var(--midnight)] text-[var(--cream)] overflow-x-hidden font-poppins pb-20">
      <Cosmos />

      <div className="px-4 sm:px-8 md:px-14 pt-10 pb-10 relative z-10">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="font-cinzel text-2xl text-[var(--gold)] tracking-wider">Celestial Dashboard</h1>
            <p className="text-[var(--cream-dim)] opacity-60 italic text-sm">Welcome back, {user.name}</p>
          </div>
          <div className="flex items-center gap-4">
             <ThemeToggle />
             
             <Popover
                placement="bottomRight"
                title={<span className="font-cinzel text-sm text-[var(--gold)] mb-2 block border-b border-[var(--gold)]/10 pb-2">Notifications</span>}
                content={
                  <List
                    size="small"
                    className="w-64 max-h-80 overflow-y-auto"
                    dataSource={dummyNotifications}
                    renderItem={item => (
                      <List.Item className="border-b border-[var(--gold)]/10 hover:bg-white/5 cursor-pointer transition-colors px-3 py-2 flex flex-col items-start gap-1 last:border-0 block w-full">
                         <div className="text-sm font-semibold text-[var(--cream)]">{item.title}</div>
                         <div className="text-xs text-[var(--cream-dim)]/80 mt-0.5">{item.description}</div>
                         <div className="text-[0.65rem] text-[var(--gold-dim)] mt-1">{item.time}</div>
                      </List.Item>
                    )}
                  />
                }
                trigger="click"
             >
               <Badge count={3} offset={[-2, 6]} color="var(--gold)">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-[var(--gold)]/20 flex items-center justify-center text-[var(--gold)] cursor-pointer hover:bg-white/10 transition-colors">
                      <FontAwesomeIcon icon={faBell} />
                  </div>
               </Badge>
             </Popover>

             <div
               onClick={() => navigate('/')}
               className="w-10 h-10 rounded-full bg-white/5 border border-[var(--gold)]/20 flex items-center justify-center text-[var(--gold)] opacity-70 hover:opacity-100 cursor-pointer hover:bg-white/10 transition-colors"
               title="Sign Out"
             >
                <FontAwesomeIcon icon={faSignOutAlt} />
             </div>

            <div className="flex items-center gap-3 bg-white/5 border border-[var(--gold)]/20 pl-4 pr-1 py-1 rounded-full hidden md:flex">
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
                <FontAwesomeIcon icon={faCrown} className="text-[var(--gold)] text-sm" />
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
                 Specialized Services
                 <div className="h-px bg-[var(--gold)]/30 flex-1" />
               </h3>
               <Row gutter={[20, 20]}>
                 <Col xs={24} sm={12}>
                   <ServiceShortcut 
                     title="Astrological Calendar" 
                     description="Auspicious timing for 10+ activities based on your birth star."
                     icon={faCalendarAlt}
                     path="/astrological"
                     color="var(--gold)"
                   />
                 </Col>
                 <Col xs={24} sm={12}>
                   <ServiceShortcut 
                     title="Partner Matching" 
                     description="Discover your celestial connection with full Ashtakoota analysis."
                     icon={faHeartPulse}
                     path="/matching"
                     color="var(--teal-l)"
                   />
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
                <h3 className="font-cinzel text-xs text-[var(--gold-dim)] uppercase tracking-widest mb-4">Upcoming Astrological Events</h3>
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
