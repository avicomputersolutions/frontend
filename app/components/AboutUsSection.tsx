'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="bg-neutral-950 text-white py-20 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              About <span className="text-purple-500">BinaryQubit</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              BinaryQubit is a modern tech-education company dedicated to bridging the gap between academic learning and industry demands. We offer immersive, hands-on programs in Data Science, AI/ML, Web Development, and emerging technologies—designed by experts from companies like Google, Microsoft, and Amazon.
            </p>
            <p className="text-gray-500 text-sm">
              From job-ready curriculums to personalized mentorship and real-world projects, BinaryQubit empowers learners to confidently build future-proof careers.
            </p>
          </motion.div>

          {/* Optional Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg shadow-purple-900/30"
          >
            <Image
              src="https://images.unsplash.com/photo-1665686302000-2517ba96b8e3?auto=format&fit=crop&w=800&q=80"
              alt="Team working at BinaryQubit"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
