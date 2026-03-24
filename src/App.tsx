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
import { ScrollHaptics } from './components/ScrollHaptics';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { MatchingPage } from './pages/MatchingPage';
import { NakathPage } from './pages/NakathPage';

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
              <ScrollHaptics>
                <section><Hero /></section>
                <section><Features /></section>
                <section><HowItWorks /></section>
                <section><Plans /></section>
                <Footer />
              </ScrollHaptics>
            </div>
          </div>
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/matching" element={<MatchingPage />} />
        <Route path="/nakath" element={<NakathPage />} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
