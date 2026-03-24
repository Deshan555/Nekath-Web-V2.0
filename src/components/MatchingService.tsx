import { Card, Progress, Row, Col, Divider, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faCheckCircle, faExclamationTriangle, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const MatchingService = () => {
  const navigate = useNavigate();
  const kootas = [
    { name: "Varna", score: 1, max: 1 },
    { name: "Vashya", score: 1.5, max: 2 },
    { name: "Tara", score: 3, max: 3 },
    { name: "Yoni", score: 2, max: 4 },
    { name: "Graha Maitri", score: 5, max: 5 },
    { name: "Gana", score: 0, max: 6 },
    { name: "Bhakoot", score: 7, max: 7 },
    { name: "Nadi", score: 8, max: 8 },
  ];

  const totalScore = kootas.reduce((acc, k) => acc + k.score, 0);

  return (
    <Card className="bg-[var(--midnight)]/40 backdrop-blur-xl border border-[var(--gold)]/15 p-0 shadow-2xl relative overflow-hidden h-full">
      <div className="p-6">
        <h3 className="font-cinzel text-md text-[var(--gold)] mb-6 flex items-center gap-2">
            <FontAwesomeIcon icon={faHeartPulse} className="text-xs" />
            Partner Matching (Porondam)
        </h3>

        <div className="flex flex-col items-center mb-8 bg-white/5 py-6 rounded border border-white/5 relative">
            <div className="absolute top-2 right-4 flex items-center gap-1 opacity-50">
                <span className="text-[0.4rem] font-cinzel uppercase tracking-[0.2em]">Vivaha Subha</span>
                <FontAwesomeIcon icon={faCheckCircle} className="text-[0.6rem] text-green-400" />
            </div>
            <Progress 
                type="dashboard" 
                percent={Math.round((totalScore/36)*100)} 
                strokeColor="var(--gold)" 
                trailColor="rgba(255,255,255,0.05)"
                format={() => (
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-cinzel text-[var(--gold)]">{totalScore}</span>
                        <span className="text-[0.5rem] uppercase text-[var(--cream-dim)]">out of 36</span>
                    </div>
                )}
            />
        </div>

        <Row gutter={[16, 12]}>
          {kootas.map((k, i) => (
            <Col span={12} key={i}>
              <div className="flex justify-between items-center bg-white/5 px-3 py-2 rounded">
                 <span className="text-[0.6rem] text-[var(--cream-dim)] font-poppins">{k.name}</span>
                 <span className={`text-[0.6rem] font-bold ${k.score === 0 ? 'text-red-400' : 'text-[var(--gold)]'}`}>
                   {k.score}/{k.max}
                 </span>
              </div>
            </Col>
          ))}
        </Row>

        <Divider className="border-white/5 my-6" />

        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 bg-red-400/5 border border-red-400/10 p-3">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-400 text-xs" />
                <div>
                    <span className="text-[0.65rem] font-bold text-red-400 uppercase block">Gana Dosha Detected</span>
                    <span className="text-[0.6rem] text-[var(--cream-dim)] leading-relaxed">Temperament mismatch.</span>
                </div>
            </div>
        </div>

        <Button 
            onClick={() => navigate('/matching')} 
            block 
            className="mt-6 font-cinzel text-[0.6rem] bg-[var(--gold)]/10 text-[var(--gold)] border-[var(--gold)]/30 h-auto py-2 hover:bg-[var(--gold)] hover:text-[var(--midnight)]"
        >
            Launch Full Analysis <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
        </Button>
      </div>
    </Card>
  );
};
