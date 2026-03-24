import { ConfigProvider } from 'antd';
import { Routes, Route } from 'react-router-dom';
import { Cosmos } from './components/Cosmos';
import { Yantra } from './components/Yantra';
import { Nav } from './components/sections/Nav';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { HowItWorks } from './components/sections/HowItWorks';
import { Plans } from './components/sections/Plans';
import { Footer } from './components/sections/Footer';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { MatchingPage } from './pages/MatchingPage';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#C9A84C',
          colorBgBase: '#060412',
          colorTextBase: '#F5EDD6',
          borderRadius: 0,
          fontFamily: "'Poppins', sans-serif",
        },
      }}
    >
      <Routes>
        <Route path="/" element={
          <div className="relative min-h-screen bg-[var(--midnight)] text-[var(--cream)] selection:bg-[var(--gold)] selection:text-[var(--midnight)] overflow-x-hidden">
            <Cosmos />
            <Yantra />
            
            <div className="relative z-10">
              <Nav />
              <Hero />
              <Features />
              <HowItWorks />
              <Plans />
              <Footer />
            </div>
          </div>
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/matching" element={<MatchingPage />} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
