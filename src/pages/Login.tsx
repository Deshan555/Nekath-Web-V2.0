import { Form, Input, Button, Card } from 'antd';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faSun } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import { Cosmos } from '../components/Cosmos';
import { Yantra } from '../components/Yantra';

export const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    if (values.name) localStorage.setItem('nakath_user_name', values.name);
    console.log('Login Success:', values);
    navigate('/dashboard');
  };

  return (
    <div className="relative min-h-screen bg-[var(--midnight)] text-[var(--cream)] overflow-hidden font-poppins">
      <Cosmos />
      <Yantra />

      <div className="relative z-10 container mx-auto px-6 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-[400px]"
        >
          <div className="text-center mb-10">
            <button onClick={() => navigate('/')} className="font-cinzel text-[0.6rem] tracking-[0.2em] uppercase text-[var(--gold-dim)] hover:text-[var(--gold)] mb-6 flex items-center gap-2 mx-auto">
              <FontAwesomeIcon icon={faChevronLeft} /> Return
            </button>
            <div className="w-16 h-16 bg-[var(--gold)]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[var(--gold)]/20">
              <FontAwesomeIcon icon={faSun} className="text-[var(--gold)] text-2xl" />
            </div>
            <h1 className="font-cinzel-dec text-3xl text-gold-gradient">Welcome Back</h1>
            <p className="font-poppins text-[var(--cream-dim)] text-xs opacity-60">Enter your credentials to access the cosmos.</p>
          </div>

          <Card className="bg-[var(--panel-bg)] backdrop-blur-xl border border-[var(--panel-border)] p-4 shadow-2xl relative transition-all duration-500">
             {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[var(--panel-border)]" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[var(--panel-border)]" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[var(--panel-border)]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[var(--panel-border)]" />

            <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
              <Form.Item label="Full Name (Optional for Demo)" name="name">
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item label="Email or Mobile" name="identifier" rules={[{ required: true }]}>
                <Input placeholder="Enter your identifier" />
              </Form.Item>
              <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                <Input.Password placeholder="Enter your password" />
              </Form.Item>
              <Form.Item className="mt-8 mb-0">
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  block
                  className="font-cinzel h-auto py-3 text-[0.7rem] tracking-[0.3em] uppercase rounded-none bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold)] border-none text-[var(--midnight)]"
                >
                  Sign In
                </Button>
              </Form.Item>
            </Form>
          </Card>
          
          <p className="text-center mt-8 font-poppins text-[var(--cream-dim)] text-[0.7rem] opacity-40 italic">
            New to the platform? <Link to="/register" className="text-[var(--gold)] hover:underline">Register Now</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};
