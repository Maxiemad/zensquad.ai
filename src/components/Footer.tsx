import { motion } from 'framer-motion';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-yellow-500/10">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-extralight text-white mb-2 tracking-wider">
              ZenSquad.ai
            </h3>
            <p className="text-gray-400 text-sm font-light">
              Bringing Zen to Your AI Adoption
            </p>
          </motion.div>

          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-colors duration-300"
                  whileHover={{
                    boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
                  }}
                />
                <social.icon className="w-5 h-5 text-white group-hover:text-yellow-500 transition-colors duration-300 relative z-10" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-gray-400 text-sm font-light text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            © 2025 ZenSquad.ai • All Rights Reserved
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <a href="#" className="hover:text-yellow-500 transition-colors duration-300">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-yellow-500 transition-colors duration-300">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-yellow-500 transition-colors duration-300">
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
