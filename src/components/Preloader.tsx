import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 1000);
    const timer2 = setTimeout(() => setStage(2), 2500);
    const timer3 = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: stage === 2 ? 0 : 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative w-64 h-64 flex items-center justify-center">
        <motion.div
          className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-yellow-500 via-amber-400 to-yellow-600"
          style={{
            boxShadow: '0 0 60px rgba(212, 175, 55, 0.8), 0 0 100px rgba(212, 175, 55, 0.4)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: stage >= 1 ? [1, 1.5, 20] : 0,
            opacity: stage >= 1 ? [1, 1, 0] : 0,
          }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />

        {stage >= 1 && (
          <>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: i % 2 === 0 ? '#D4AF37' : '#00BFA6',
                  boxShadow: i % 2 === 0
                    ? '0 0 10px rgba(212, 175, 55, 0.8)'
                    : '0 0 10px rgba(0, 191, 166, 0.8)',
                }}
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{
                  x: Math.cos((i / 20) * Math.PI * 2) * 300,
                  y: Math.sin((i / 20) * Math.PI * 2) * 300,
                  opacity: 0,
                }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            ))}
          </>
        )}

        {stage >= 1 && stage < 2 && (
          <motion.div
            className="absolute text-white text-4xl font-light tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            ZenSquad.ai
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
