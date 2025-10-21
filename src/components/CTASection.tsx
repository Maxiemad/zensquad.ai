import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar } from 'lucide-react';

export default function CTASection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-yellow-500/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
            initial={{ x: '-100%' }}
            animate={inView ? { x: '100%' } : {}}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            style={{ top: `${30 + i * 20}%` }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            className="inline-block mb-8"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Calendar className="w-16 h-16 text-yellow-500" strokeWidth={1} />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6 tracking-tight">
            Ready to Bring{' '}
            <span className="bg-gradient-to-r from-yellow-500 to-teal-400 bg-clip-text text-transparent">
              Calm
            </span>
            <br />
            to Your AI Journey?
          </h2>

          <p className="text-xl text-gray-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's explore how we can simplify your AI adoption and bring clarity to your workflow.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative inline-block"
          >
            <motion.div
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-yellow-500 to-teal-500 opacity-20 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            <motion.a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-yellow-500 to-amber-500 text-black rounded-full font-light tracking-wide text-xl overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />

              <span className="relative z-10 flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                Book Your Free AI Flow Session
              </span>
            </motion.a>
          </motion.div>

          <motion.p
            className="mt-8 text-sm text-gray-400 font-light"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            30-minute consultation • No commitment required
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
