import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

export default function AboutSection() {
  return (
    <section id="about" className="bg-off-white section-spacing">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden"
          >
            <img
  src="/WhatsApp Image 2025-12-19 at 3.48.23 PM.jpeg"
  alt="Aryan Valley Landscape"
  className="
    w-full
    h-auto
    object-cover
    rounded-lg
    hover:scale-105
    transition-transform
    duration-500
  "
/>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              title="Welcome to Aryan Valley Camp"
              subtitle="Where Mountain Meets Heritage"
              align="left"
              className="mb-8"
            />

            <div className="space-y-6">
              <p className="text-lg text-stone-grey leading-relaxed">
                Nestled beside the pristine Indus River in Ladakh's Dah-Hanu region, Aryan Valley Camp is more than a destination—it's a portal to an ancient world.
              </p>

              <p className="text-lg text-stone-grey leading-relaxed">
                Our riverside campsite is thoughtfully designed to blend seamlessly with the natural landscape, offering authentic cultural immersion without compromising on comfort.
              </p>

              <p className="text-lg text-stone-grey leading-relaxed">
                Here, you'll experience the timeless traditions of the Brokpa community, explore breathtaking Himalayan vistas, and create memories that last a lifetime.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-light-taupe">
                {[
                  { icon: '🏔️', title: 'Riverside Location', desc: 'Beside the Indus River' },
                  { icon: '🌿', title: 'Eco-Friendly', desc: 'Sustainable tourism practices' },
                  { icon: '👥', title: 'Cultural Immersion', desc: 'Genuine Brokpa interaction' },
                  { icon: '⭐', title: 'Premium Comfort', desc: 'Luxury meets authenticity' },
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <span className="text-3xl flex-shrink-0">{feature.icon}</span>
                    <div>
                      <h4 className="font-semibold text-warm-brown mb-1">{feature.title}</h4>
                      <p className="text-sm text-stone-grey">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
