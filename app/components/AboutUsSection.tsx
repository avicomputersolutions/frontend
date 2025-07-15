'use client';

import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="bg-neutral-950 text-white py-20 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl space-y-24">

        {/* Gradient Blob (optional glow effect) */}
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-purple-700 rounded-full blur-3xl opacity-20 animate-pulse z-0" />
        <div className="absolute top-20 right-[-100px] w-[300px] h-[300px] bg-purple-500 rounded-full blur-2xl opacity-30 animate-spin-slow z-0" />

        {/* ABOUT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white tracking-tight">
            About <span className="text-purple-500">BinaryQubit</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            BinaryQubit is not just another tech institute — it&apos;s a movement to empower learners with job-ready skills that actually matter. Our programs are crafted by industry leaders to ensure every learner becomes career-ready from Day 1.
          </p>
          <h2 className="text-xl md:text-2xl font-extrabold leading-tight text-white mb-6">
            From <span className="text-purple-500">Academic Learners </span>
            to <span className="text-purple-500">Tech Professionals</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            At <span className="text-white font-semibold">BinaryQubit</span>, we specialize in <span className="text-purple-400 font-medium">Data Science</span>, <span className="text-purple-400 font-medium">AI/ML</span>, and <span className="text-purple-400 font-medium">Web Development</span> — empowering learners with real-world tools and mentorship to build confident, job-ready tech careers.
          </p>

        </motion.div>

        {/* DIRECTOR'S MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Director’s <span className="text-purple-400">Message</span>
          </h3>

          <blockquote className="border-l-4 border-purple-500 pl-6 italic text-gray-400 text-lg leading-relaxed">
            “Our goal is not just to teach technologies, but to build thinkers, creators, and problem solvers. We’ve built BinaryQubit with the belief that the future belongs to those who learn how to learn, and apply it with courage.”
          </blockquote>
          <p className="mt-4 text-purple-400 font-semibold">– Aman Fouzdar, Director</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
