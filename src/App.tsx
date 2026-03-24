import { ConfigProvider } from 'antd';
import { Cosmos } from './components/Cosmos';
import { Yantra } from './components/Yantra';
import { Nav } from './components/sections/Nav';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { HowItWorks } from './components/sections/HowItWorks';
import { Plans } from './components/sections/Plans';
import { Footer } from './components/sections/Footer';

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
    </ConfigProvider>
  );
}

export default App;
