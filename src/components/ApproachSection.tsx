import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Eye, Waves, Sparkles } from 'lucide-react';

const pillars = [
  {
    icon: Eye,
    title: 'Clarity',
    description: 'We translate AI complexity into actionable insight.',
    color: 'from-yellow-500/20 to-yellow-600/20',
    borderColor: 'border-yellow-500/30',
    iconColor: 'text-yellow-500',
  },
  {
    icon: Waves,
    title: 'Flow',
    description: 'We automate intelligently, not excessively.',
    color: 'from-teal-500/20 to-cyan-600/20',
    borderColor: 'border-teal-500/30',
    iconColor: 'text-teal-400',
  },
  {
    icon: Sparkles,
    title: 'Harmony',
    description: 'We align technology with your people and purpose.',
    color: 'from-amber-500/20 to-yellow-500/20',
    borderColor: 'border-amber-500/30',
    iconColor: 'text-amber-400',
  },
];

export default function ApproachSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6 tracking-tight">
            Mindful AI Integration,{' '}
            <span className="bg-gradient-to-r from-yellow-500 to-teal-400 bg-clip-text text-transparent">
              Made Simple
            </span>
          </h2>

          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            We approach AI adoption like meditation — step-by-step, intentional, and deeply human.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${pillar.color} backdrop-blur-sm border ${pillar.borderColor} overflow-hidden transition-all duration-300`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-yellow-500/10 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-black/30 mb-6 ${pillar.iconColor}`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <pillar.icon className="w-8 h-8" strokeWidth={1.5} />
                  </motion.div>

                  <h3 className="text-2xl font-light text-white mb-4">{pillar.title}</h3>
                  <p className="text-gray-300 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color}`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    transformOrigin: 'left',
                    boxShadow: `0 0 20px ${pillar.iconColor}`,
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
