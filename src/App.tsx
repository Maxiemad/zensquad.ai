import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ApproachSection from './components/ApproachSection';
import ServicesSection from './components/ServicesSection';
import WhySection from './components/WhySection';
import TestimonialsSection from './components/TestimonialsSection';
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
          <ParticleBackground />

          <div className="relative z-10">
            <HeroSection />
            <ProblemSection />
            <ApproachSection />
            <ServicesSection />
            <WhySection />
            <TestimonialsSection />
            <CTASection />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
