import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ExperienceCard from '../components/ExperienceCard';
import { experiences } from '../data/content';

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="bg-off-white section-spacing">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Unique Experiences"
          subtitle="Immerse yourself in authentic Himalayan culture and nature"
          className="mb-16"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              title={experience.title}
              description={experience.description}
              image={experience.image}
              icon={experience.icon}
            />
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-warm-brown/5 to-olive/5 rounded-lg border border-light-taupe text-center"
        >
          <p className="text-lg text-stone-grey leading-relaxed max-w-3xl mx-auto">
            Each experience is carefully crafted to honor local culture while providing genuine comfort and safety. 
            All activities are conducted with the consent and participation of Brokpa community members.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
