import { useState } from 'react';
import { Form, DatePicker, TimePicker, Input, Button, Row, Col, Steps, Card } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronRight, faChevronLeft, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import { Cosmos } from '../components/Cosmos';
import { Yantra } from '../components/Yantra';
import { haptics } from '../utils/haptics';

const plans = [
  {
    tier: "Free",
    name: "Aaramba",
    price: "LKR 0",
    period: "forever",
    features: ["Daily Horoscope", "Basic Calendar", "Birth Chart"]
  },
  {
    tier: "Basic",
    name: "Nakath",
    price: "LKR 490",
    period: "per month",
    featured: true,
    features: ["All Free features", "Monthly Reports", "Dasa Dashboard"]
  },
  {
    tier: "Plus",
    name: "Porondam",
    price: "LKR 990",
    period: "per month",
    features: ["All Basic features", "Partner Matching", "PDF Export"]
  },
  {
    tier: "Premium",
    name: "Nakath Premium",
    price: "LKR 2,490",
    period: "per month",
    features: ["All Plus features", "Live Sessions", "Priority Support"]
  }
];

export const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const selectedTier = Form.useWatch('tier', form);

  const next = async () => {
    try {
      const stepFields = [
        ['name', 'email', 'mobile', 'password'],
        ['dob', 'tob', 'birthplace', 'city'],
        ['tier']
      ];
      await form.validateFields(stepFields[currentStep]);
      haptics.medium();
      setCurrentStep(currentStep + 1);
    } catch (error) {
      haptics.error();
      console.log('Validation failed:', error);
    }
  };

  const prev = () => {
    haptics.light();
    setCurrentStep(currentStep - 1);
  };

  const onFinish = (values: any) => {
    haptics.success();
    localStorage.setItem('nakath_user_name', values.name || 'Seeker');
    localStorage.setItem('nakath_user_dob', values.dob ? values.dob.format('DD MMM YYYY') : 'Not Set');
    localStorage.setItem('nakath_user_tob', values.tob ? values.tob.format('hh:mm A') : 'Not Set');
    localStorage.setItem('nakath_user_place', values.birthplace || 'Not Set');
    localStorage.setItem('nakath_user_tier', values.tier || 'Free');
    
    console.log('Registration Success:', values);
    navigate('/dashboard');
  };

  return (
    <div className="relative min-h-screen bg-[var(--midnight)] text-[var(--cream)] overflow-hidden font-poppins">
      <Cosmos />
      <Yantra />

      <div className="relative z-10 container mx-auto px-6 py-20 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <button onClick={() => navigate('/')} className="font-cinzel text-[0.6rem] tracking-[0.2em] uppercase text-[var(--gold-dim)] hover:text-[var(--gold)] mb-6 flex items-center gap-2 mx-auto">
            <FontAwesomeIcon icon={faChevronLeft} /> Return to Cosmos
          </button>
          <h1 className="font-cinzel-dec text-4xl md:text-5xl text-gold-gradient mb-4">Join the Cosmos</h1>
          <p className="font-poppins text-[var(--cream-dim)] opacity-60 italic">Your journey towards celestial alignment starts here.</p>
        </motion.div>

        <div className="mb-12 max-w-2xl mx-auto">
          <Steps
            current={currentStep}
            className="custom-steps"
            items={[
              { title: 'Account' },
              { title: 'Celestial' },
              { title: 'Plan' },
            ]}
          />
        </div>

        <div className="bg-[var(--panel-bg)] backdrop-blur-xl border border-[var(--panel-border)] p-8 md:p-12 shadow-2xl relative transition-all duration-500">
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[var(--panel-border)]" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[var(--panel-border)]" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[var(--panel-border)]" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[var(--panel-border)]" />

          <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <Row gutter={24}>
                    <Col xs={24}>
                      <Form.Item label="Full Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
                        <Input placeholder="Enter your full name" />
                      </Form.Item>
                    </Col>
                    <Col xs={24}>
                      <Form.Item label="Email Address" name="email" rules={[{ required: true, type: 'email' }]}>
                        <Input placeholder="star-reader@example.com" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item label="Mobile Number" name="mobile" rules={[{ required: true }]}>
                        <Input placeholder="+94 7X XXX XXXX" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item label="Password" name="password" rules={[{ required: true, min: 8 }]}>
                        <Input.Password placeholder="Min 8 characters" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <div className="flex justify-end mt-8">
                    <Button type="primary" onClick={next} className="font-cinzel h-auto py-3 px-10 text-[0.7rem] tracking-[0.3em] uppercase rounded-none bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold)] border-none text-[var(--midnight)]">
                      Next Step <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <Row gutter={24}>
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
                    <Col xs={24}>
                      <Form.Item label="Birthplace" name="birthplace" rules={[{ required: true }]}>
                        <Input placeholder="City, Country" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <div className="flex justify-between mt-8">
                    <Button onClick={prev} className="font-cinzel h-auto py-3 px-8 text-[0.7rem] bg-transparent text-[var(--gold)] border-[var(--gold)]/30">Back</Button>
                    <Button type="primary" onClick={next} className="font-cinzel h-auto py-3 px-10 text-[0.7rem] tracking-[0.3em] uppercase rounded-none bg-gradient-to-br from-[var(--gold-light)] to(--gold) border-none text-[var(--midnight)]">
                      Continue <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {plans.map((p) => (
                      <Card
                        key={p.name}
                        onClick={() => form.setFieldsValue({ tier: p.name })}
                        className={`cursor-pointer transition-all border-[var(--panel-border)] bg-[var(--panel-bg)] hover:border-[var(--gold)]/40 ${selectedTier === p.name ? 'border-[var(--gold)] !bg-[var(--gold)]/20 shadow-[0_0_20px_rgba(201,168,76,0.3)]' : ''
                          }`}
                        styles={{ body: { padding: '16px' } }}
                      >
                        <p className="font-cinzel text-[0.5rem] tracking-widest text-[var(--gold-dim)] uppercase mb-1">{p.tier}</p>
                        <h4 className="font-cinzel text-xs text-[var(--cream)] mb-2">{p.name}</h4>
                        <p className="font-poppins text-lg font-bold text-[var(--gold)] leading-none mb-1">{p.price}</p>
                        <p className="text-[0.6rem] text-[var(--cream-dim)] font-poppins mb-4 opacity-50">{p.period}</p>
                        <ul className="list-none p-0 flex flex-col gap-1">
                          {p.features.map((f, fi) => (
                            <li key={fi} className="text-[0.65rem] text-[var(--cream-dim)] flex gap-1.5 items-center">
                              <FontAwesomeIcon icon={faCircleCheck} className="text-[var(--gold)] scale-75" /> {f}
                            </li>
                          ))}
                        </ul>
                      </Card>
                    ))}
                  </div>

                  <Form.Item name="tier" rules={[{ required: true, message: 'Select your path' }]}>
                    <Input type="hidden" />
                  </Form.Item>

                  <div className="flex justify-between mt-8">
                    <Button onClick={prev} className="font-cinzel h-auto py-3 px-8 text-[0.7rem] bg-transparent text-[var(--gold)] border-[var(--gold)]/30">Back</Button>
                    <Button type="primary" htmlType="submit" className="font-cinzel h-auto py-3 px-12 text-[0.7rem] tracking-[0.3em] uppercase rounded-none bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold)] border-none text-[var(--midnight)]">
                      Complete Registration <FontAwesomeIcon icon={faStar} className="ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Form>
        </div>
        <p className="text-center mt-8 font-poppins text-[var(--cream-dim)] text-[0.7rem] opacity-30 italic">Already have an account? <Link to="/login" className="text-[var(--gold)] hover:underline">Sign In</Link></p>
      </div>
    </div>
  );
};
