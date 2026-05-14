import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { smoothScroll } from '../utils/helpers';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Culture', 'Experiences', 'Festivals', 'Gallery', 'Testimonials', 'Contact'];

  const handleNavClick = (link) => {
    const id = link.toLowerCase();
    smoothScroll(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-off-white/95 backdrop-blur-md border-b border-light-taupe">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-serif text-2xl font-bold text-warm-brown"
        >
          Aryan Valley
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="text-sm font-medium text-stone-grey hover:text-warm-brown transition-colors duration-300"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden absolute top-full left-0 right-0 bg-off-white border-b border-light-taupe ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col gap-4 p-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="text-left px-4 py-2 text-sm font-medium text-stone-grey hover:bg-beige rounded transition-colors duration-300"
            >
              {link}
            </button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
