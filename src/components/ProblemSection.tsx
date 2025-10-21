import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertCircle, TrendingUp } from 'lucide-react';

export default function ProblemSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <AlertCircle className="w-16 h-16 text-yellow-500" strokeWidth={1} />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-extralight text-white mb-8 tracking-tight">
            AI Doesn't Have to Feel{' '}
            <span className="italic text-yellow-500">Overwhelming</span>
          </h2>

          <motion.div
            className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-gray-300 font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p>
              Most teams struggle to integrate AI because of fragmented tools, confusing jargon, and steep learning curves.
            </p>
            <p className="text-yellow-500/80">
              At ZenSquad.ai, we believe technology should bring peace — not chaos.
            </p>
            <p>
              We simplify your AI journey so you can focus on creativity, efficiency, and growth.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative h-2 max-w-4xl mx-auto mt-16 overflow-hidden rounded-full bg-white/5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-500/50 via-yellow-500 to-teal-500"
            initial={{ x: '-100%' }}
            animate={inView ? { x: '100%' } : {}}
            transition={{ delay: 1, duration: 2, ease: 'easeInOut' }}
            style={{
              boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)',
            }}
          />
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-3 mt-8 text-teal-400"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <span className="text-sm font-light tracking-wider">CHAOS</span>
          <TrendingUp className="w-5 h-5" />
          <span className="text-sm font-light tracking-wider">CLARITY</span>
        </motion.div>
      </div>
    </section>
  );
}
