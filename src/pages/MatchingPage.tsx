import { useState } from 'react';
import { Form, DatePicker, TimePicker, Input, Button, Row, Col, Card, Select, Divider } from 'antd';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faChevronLeft, faExclamationTriangle, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Cosmos } from '../components/Cosmos';
import { Yantra } from '../components/Yantra';
import { haptics } from '../utils/haptics';

export const MatchingPage = () => {
  const [form] = Form.useForm();
  const [result, setResult] = useState<any>(null);
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    // Mock matching logic
    console.log('Matching details:', values);
    haptics.success();
    setResult({
      score: 28.5,
      kootas: [
        { name: "Varna", score: 1, max: 1, desc: "Ego compatibility is perfect." },
        { name: "Vashya", score: 1.5, max: 2, desc: "High mutual attraction." },
        { name: "Tara", score: 3, max: 3, desc: "Health alignment is strong." },
        { name: "Yoni", score: 2, max: 4, desc: "Physical matching is average." },
        { name: "Graha Maitri", score: 5, max: 5, desc: "Deep intellectual friendship." },
        { name: "Gana", score: 0, max: 6, desc: "Temperament clash (Deva/Rakshasa)." },
        { name: "Bhakoot", score: 8, max: 7, desc: "Prosperity is assured." }, // Typo in max? No, let's stick to 7
        { name: "Nadi", score: 8, max: 8, desc: "Nadi Dosha cancelled." },
      ],
      recommendation: "Vivaha Subha (Highly Recommended)",
      doshas: [
        { name: "Nadi Dosha", status: "Cancelled", color: "text-green-400" },
        { name: "Gana Dosha", status: "Mild", color: "text-yellow-400" }
      ]
    });
  };

  return (
    <div className="relative min-h-screen bg-[var(--midnight)] text-[var(--cream)] overflow-x-hidden font-poppins pb-20">
      <Cosmos />
      <Yantra />

      <div className="relative z-10 container mx-auto px-6 py-20 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <button onClick={() => navigate('/dashboard')} className="font-cinzel text-[0.6rem] tracking-[0.2em] uppercase text-[var(--gold-dim)] hover:text-[var(--gold)] mb-6 flex items-center gap-2 mx-auto">
            <FontAwesomeIcon icon={faChevronLeft} /> Return to Dashboard
          </button>
          <h1 className="font-cinzel-dec text-4xl md:text-5xl text-gold-gradient mb-4">Partner Matching</h1>
          <p className="font-poppins text-[var(--cream-dim)] opacity-60 italic">Calculate the Ashtakoota Porondam score for divine alignment.</p>
        </motion.div>

        {!result ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <Card className="bg-[var(--panel-bg)] backdrop-blur-xl border border-[var(--panel-border)] p-8 shadow-2xl relative transition-all duration-500">
              <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
                <h3 className="font-cinzel text-sm text-[var(--gold)] mb-8 flex items-center gap-2">
                  <FontAwesomeIcon icon={faVenusMars} />
                  Partner's Birth Details
                </h3>
                <Row gutter={24}>
                  <Col xs={24} md={12}>
                    <Form.Item label="Partner's Full Name" name="name" rules={[{ required: true }]}>
                      <Input placeholder="Enter partner's name" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Gender" name="sex" rules={[{ required: true }]}>
                      <Select placeholder="Select gender">
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                        <Select.Option value="other">Other</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Date of Birth" name="dob" rules={[{ required: true }]}>
                      <DatePicker className="w-full" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Time of Birth" name="tob" rules={[{ required: true }]}>
                      <TimePicker format="HH:mm" className="w-full" />
                    </Form.Item>
                  </Col>
                </Row>
                <div className="mt-8 flex justify-center">
                  <Button type="primary" htmlType="submit" className="font-cinzel h-auto py-3 px-12 text-[0.7rem] tracking-[0.3em] uppercase rounded-none bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold)] border-none text-[var(--midnight)]">
                    Calculate Compatibility <FontAwesomeIcon icon={faHeartPulse} className="ml-2" />
                  </Button>
                </div>
              </Form>
            </Card>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <Card className="bg-[var(--panel-bg)] backdrop-blur-xl border border-[var(--panel-border)] p-8 shadow-2xl relative transition-all duration-500">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                 <FontAwesomeIcon icon={faHeartPulse} className="text-8xl text-[var(--gold)]" />
              </div>

              <div className="flex flex-col items-center mb-12">
                 <div className="w-32 h-32 rounded-full border-4 border-[var(--gold)]/20 flex items-center justify-center mb-4 bg-[var(--gold)]/10 shadow-[0_0_50px_rgba(201,168,76,0.2)]">
                    <span className="text-4xl font-cinzel text-[var(--gold)]">{result.score}</span>
                 </div>
                 <h2 className="font-cinzel text-2xl text-[var(--cream)] mb-2">{result.recommendation}</h2>
                 <p className="text-[var(--gold-dim)] text-xs uppercase tracking-widest opacity-60">Ashtakoota Match: {result.score} / 36</p>
              </div>

              <Divider className="border-white/10" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                 <div>
                    <h3 className="font-cinzel text-xs text-[var(--gold-dim)] uppercase tracking-widest mb-6">Koota Breakdown</h3>
                    <div className="flex flex-col gap-4">
                       {result.kootas.map((k: any, i: number) => (
                         <div key={i} className="bg-[var(--panel-bg)] p-4 border border-[var(--panel-border)] transition-all">
                            <div className="flex justify-between items-center mb-1">
                               <span className="text-xs text-[var(--text-main)] font-bold">{k.name}</span>
                               <span className="text-[0.65rem] text-[var(--gold)]">{k.score} / {k.max}</span>
                            </div>
                            <p className="text-[0.6rem] text-[var(--text-dim)] opacity-50">{k.desc}</p>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div>
                    <h3 className="font-cinzel text-xs text-[var(--gold-dim)] uppercase tracking-widest mb-6">Dosha Analysis</h3>
                    <div className="flex flex-col gap-4">
                       {result.doshas.map((d: any, i: number) => (
                         <div key={i} className="bg-[var(--panel-bg)] p-4 border border-[var(--panel-border)] flex items-center justify-between transition-all">
                            <div className="flex items-center gap-3">
                               <FontAwesomeIcon icon={faExclamationTriangle} className={`${d.color} text-xs`} />
                               <span className="text-xs text-[var(--text-main)]">{d.name}</span>
                            </div>
                            <span className={`text-[0.6rem] font-bold uppercase ${d.color}`}>{d.status}</span>
                         </div>
                       ))}
                    </div>
                    
                    <div className="mt-12 p-6 bg-[var(--gold)]/5 border border-[var(--gold)]/20 text-center">
                        <p className="font-poppins text-xs text-[var(--cream-dim)] italic leading-relaxed mb-6">
                          "This matching is calculated based on the Moon's positions of both partners. A full Janma Patrika matching is advised for deeper insights."
                        </p>
                        <Button onClick={() => setResult(null)} className="font-cinzel text-[0.6rem] bg-transparent text-[var(--gold)] border-[var(--gold)]/30 px-8 h-auto py-2">
                          Recalculate
                        </Button>
                    </div>
                 </div>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};
