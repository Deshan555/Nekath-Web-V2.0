import { Card, Tag, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faClock, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export const AstrologicalService = () => {
  const pancanga = [
    { label: "Tithi", value: "Shukla Dwadashi", color: "var(--gold)" },
    { label: "Vara", value: "Tuesday (Kuja)", color: "var(--cream)" },
    { label: "Nakshatra", value: "Pushya", color: "var(--teal-l)" },
    { label: "Yoga", value: "Siddha", color: "var(--gold-dim)" },
    { label: "Karana", value: "Bava", color: "var(--cream-dim)" },
  ];

  const activities = [
    { name: "House Blessing", status: "Highly Auspicious", rule: "Fixed Stars" },
    { name: "Business Launch", status: "Neutral", rule: "Waxing Moon" },
    { name: "Long Travel", status: "Asubha", rule: "Vara Conflict" },
  ];

  return (
    <Card className="bg-[var(--midnight)]/40 backdrop-blur-xl border border-[var(--gold)]/15 p-1 shadow-2xl relative overflow-hidden h-full">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <FontAwesomeIcon icon={faCalendarCheck} className="text-6xl text-[var(--gold)]" />
      </div>
      <h3 className="font-cinzel text-md text-[var(--gold)] mb-6 flex items-center gap-2">
        <FontAwesomeIcon icon={faCalendarCheck} className="text-xs" />
        Astrological Calendar (Pancanga)
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
        {pancanga.map((p, i) => (
          <div key={i} className="bg-white/5 border border-white/5 p-3 rounded flex flex-col items-center">
            <span className="text-[0.55rem] uppercase tracking-widest text-[var(--cream-dim)] opacity-40 mb-1">{p.label}</span>
            <span className="text-[0.7rem] font-poppins font-medium text-center" style={{ color: p.color }}>{p.value}</span>
          </div>
        ))}
      </div>

      <div className="bg-[var(--gold)]/5 border border-[var(--gold)]/10 p-4 mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[0.65rem] font-cinzel text-[var(--gold-dim)] uppercase tracking-wider">Rahu Kala Today</span>
          <Tag color="error" className="text-[0.6rem] m-0 bg-transparent border-red-500/30 text-red-400">Inauspicious</Tag>
        </div>
        <p className="font-poppins text-lg text-[var(--cream)] flex items-center gap-2">
          <FontAwesomeIcon icon={faClock} className="text-xs opacity-40" />
          03:12 PM - 04:45 PM
        </p>
      </div>

      <h4 className="font-cinzel text-[0.6rem] text-[var(--cream-dim)] uppercase tracking-widest mb-4">Activity Compatibility</h4>
      <div className="flex flex-col gap-3">
        {activities.map((a, i) => (
          <div key={i} className="flex justify-between items-center p-2 border-b border-white/5 last:border-0">
            <span className="text-xs text-[var(--cream)]">{a.name}</span>
            <div className="flex items-center gap-3">
               <span className={`text-[0.6rem] font-bold ${a.status === 'Highly Auspicious' ? 'text-green-400' : a.status === 'Asubha' ? 'text-red-400' : 'text-yellow-400'}`}>
                 {a.status}
               </span>
               <Tooltip title={a.rule}>
                 <FontAwesomeIcon icon={faInfoCircle} className="text-[0.6rem] opacity-30 cursor-help" />
               </Tooltip>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
