import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, align = 'center', className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${align === 'center' ? 'text-center' : ''} ${className}`}
    >
      <h2 className="heading-lg text-warm-brown mb-4 font-serif">{title}</h2>
      {subtitle && <p className="text-lg text-stone-grey max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}
