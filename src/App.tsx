import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ApproachSection from './components/ApproachSection';
import ServicesSection from './components/ServicesSection';
import WhySection from './components/WhySection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {!loading && (
        <div className="relative bg-black min-h-screen overflow-x-hidden">
          <CustomCursor />
          <Navbar />

          <div className="relative z-10">
            <HeroSection />
            <ProblemSection />
            <ApproachSection />
            <ServicesSection />
            <WhySection />
            <CTASection />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
