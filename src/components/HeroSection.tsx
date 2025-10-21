import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function HeroSection() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <motion.svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          >
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#00BFA6" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="80" fill="none" stroke="url(#goldGradient)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="url(#goldGradient)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="url(#goldGradient)" strokeWidth="0.5" />
            {[...Array(8)].map((_, i) => (
              <line
                key={i}
                x1="100"
                y1="100"
                x2={100 + 80 * Math.cos((i * Math.PI) / 4)}
                y2={100 + 80 * Math.sin((i * Math.PI) / 4)}
                stroke="url(#goldGradient)"
                strokeWidth="0.5"
              />
            ))}
          </motion.svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full border border-yellow-500/30 bg-yellow-500/5"
            animate={{ boxShadow: ['0 0 20px rgba(212, 175, 55, 0.2)', '0 0 40px rgba(212, 175, 55, 0.4)', '0 0 20px rgba(212, 175, 55, 0.2)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <span className="text-yellow-500 text-sm font-light tracking-wide">AI MEETS MINDFULNESS</span>
          </motion.div>

          <h1 className="text-7xl md:text-8xl font-extralight text-white mb-6 tracking-tight leading-tight">
            Bringing Zen to Your{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
                AI Adoption
              </span>
              <motion.span
                className="absolute inset-0 blur-xl bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 font-light mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            We help businesses adopt AI effortlessly — combining mindful strategy, powerful tools, and calm clarity to turn complexity into flow.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-4 bg-transparent border-2 border-yellow-500 text-yellow-500 rounded-full font-light tracking-wide text-lg overflow-hidden transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Talk AI Simplicity
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-yellow-500"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(212, 175, 55, 0.3)',
                    '0 0 40px rgba(212, 175, 55, 0.5)',
                    '0 0 20px rgba(212, 175, 55, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.a>

            <motion.button
              onClick={scrollToServices}
              className="px-10 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full font-light tracking-wide text-lg hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Services
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-yellow-500/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-yellow-500 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
