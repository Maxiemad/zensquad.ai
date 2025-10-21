import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'ZenSquad helped us streamline our content production with AI — it now feels intuitive and joyful.',
    author: 'Sarah Chen',
    role: 'Creative Director, Wellness Brand',
  },
  {
    quote: 'Finally, an AI partner that understands people as much as technology.',
    author: 'Marcus Rodriguez',
    role: 'COO, Tech Startup',
  },
  {
    quote: 'The calm, methodical approach to AI adoption made all the difference for our team.',
    author: 'Emily Watson',
    role: 'Director of Operations, E-commerce',
  },
];

export default function TestimonialsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
            What Our{' '}
            <span className="bg-gradient-to-r from-yellow-500 to-teal-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <motion.div
                className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-yellow-500 to-teal-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              />

              <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-yellow-500/20 group-hover:border-yellow-500/40 transition-all duration-300">
                <motion.div
                  className="absolute top-6 right-6 text-yellow-500/20"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.7 }}
                >
                  <Quote className="w-12 h-12" />
                </motion.div>

                <div className="relative z-10 space-y-6">
                  <p className="text-gray-200 font-light text-lg leading-relaxed">
                    {testimonial.quote}
                  </p>

                  <div className="pt-6 border-t border-yellow-500/20">
                    <p className="text-white font-light text-lg mb-1">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-400 text-sm font-light">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-teal-500 rounded-b-3xl"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    transformOrigin: 'left',
                    boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
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
