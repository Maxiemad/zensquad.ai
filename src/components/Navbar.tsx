import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import logo from '../assets/ChatGPT_Image_Oct_21__2025__05_38_55_PM-removebg-preview.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-white/30 shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="ZenSquad.ai Logo"
              className="h-20 w-20 lg:h-40 lg:w-40 object-contain"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -2 }}
                className="text-gray-800 hover:text-yellow-600 transition-colors duration-300 font-medium relative group cursor-pointer"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-300 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 text-black px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 cursor-pointer"
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-800 hover:text-yellow-600 transition-colors duration-300 cursor-pointer flex items-center justify-center"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-white/20"
        >
          <div className="px-4 py-6 space-y-3">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20,
                }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-800 hover:text-yellow-600 transition-colors duration-300 font-medium py-2 cursor-pointer"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -20,
              }}
              transition={{ delay: navItems.length * 0.1 }}
              className="w-full bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 text-black px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 cursor-pointer"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
