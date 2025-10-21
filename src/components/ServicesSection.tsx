import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Feather, Workflow, Cpu } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'AI Strategy & Consulting',
    description: 'Calm, clear roadmap for transformation. We assess your workflows, identify automation opportunities, and create a mindful implementation plan.',
  },
  {
    icon: Feather,
    title: 'Content Creation & Automation',
    description: 'Create more with less effort. Automate blogs, emails, video scripts, and social media with AI-powered content systems.',
  },
  {
    icon: Workflow,
    title: 'Workflow Integration',
    description: 'Automate tasks across Notion, HubSpot, Slack, and more. Seamlessly connect your tools for effortless productivity.',
  },
  {
    icon: Cpu,
    title: 'Custom AI Systems',
    description: 'Fine-tuned GPTs & multimodal models tailored to your business. From chatbots to predictive analytics.',
  },
];

export default function ServicesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" ref={ref} className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6 tracking-tight">
            AI Services That Feel{' '}
            <span className="italic text-yellow-500">Effortless</span>
          </h2>

          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            From content automation to full-scale AI adoption, we bring a zen mindset to every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-3xl bg-black/40 backdrop-blur-md border border-yellow-500/20 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/5 to-teal-500/5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />

                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 mb-6"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-7 h-7 text-yellow-500" strokeWidth={1.5} />
                  </motion.div>

                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-yellow-500 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <motion.div
                  className="absolute inset-0 border-2 border-yellow-500/0 rounded-3xl"
                  whileHover={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: '0 0 0 0 rgba(212, 175, 55, 0)',
                  }}
                  whileHoverStyle={{
                    boxShadow: '0 0 40px 0 rgba(212, 175, 55, 0.2)',
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
