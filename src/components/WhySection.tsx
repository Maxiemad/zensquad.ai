import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Users, Brain } from 'lucide-react';

const features = [
  { icon: Shield, text: 'Trusted by startups and SMB leaders' },
  { icon: Users, text: 'Guided by mindfulness and human-centered design' },
  { icon: Brain, text: 'Backed by AI expertise in automation, NLP, and data strategy' },
];

export default function WhySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <motion.svg
          width="600"
          height="600"
          viewBox="0 0 200 200"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        >
          <defs>
            <linearGradient id="mandalaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#00BFA6" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
          {[...Array(12)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 30} 100 100)`}>
              <circle cx="100" cy="30" r="3" fill="url(#mandalaGrad)" opacity="0.3" />
              <circle cx="100" cy="50" r="2" fill="url(#mandalaGrad)" opacity="0.3" />
              <line x1="100" y1="30" x2="100" y2="50" stroke="url(#mandalaGrad)" strokeWidth="0.5" opacity="0.3" />
            </g>
          ))}
          <circle cx="100" cy="100" r="70" fill="none" stroke="url(#mandalaGrad)" strokeWidth="0.5" opacity="0.3" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="url(#mandalaGrad)" strokeWidth="0.5" opacity="0.3" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="url(#mandalaGrad)" strokeWidth="0.5" opacity="0.3" />
        </motion.svg>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6 tracking-tight">
            Tech Expertise Meets{' '}
            <span className="bg-gradient-to-r from-teal-400 to-yellow-500 bg-clip-text text-transparent">
              Mindful Simplicity
            </span>
          </h2>

          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Our team bridges technology and mindfulness, combining enterprise AI expertise with human-centered calm.
          </p>
        </motion.div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <feature.icon className="w-6 h-6 text-yellow-500" strokeWidth={1.5} />
                </motion.div>

                <p className="text-lg text-gray-200 font-light group-hover:text-white transition-colors duration-300">
                  {feature.text}
                </p>

                <motion.div
                  className="ml-auto w-2 h-2 rounded-full bg-yellow-500"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  style={{
                    boxShadow: '0 0 10px rgba(212, 175, 55, 0.8)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
