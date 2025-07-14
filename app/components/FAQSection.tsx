'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'What kind of courses does BinaryQubit offer?',
    answer:
      'BinaryQubit offers industry-focused courses in Data Science, AI/ML, Full Stack Web Development, and other emerging tech domains.',
  },
  {
    question: 'Are the courses live or recorded?',
    answer:
      'All courses are conducted live with experienced instructors. Recordings are provided for lifetime access after each session.',
  },
  {
    question: 'Do I receive a certificate after completing a course?',
    answer:
      'Yes, you will receive a verifiable certificate from BinaryQubit upon successful course completion.',
  },
  {
    question: 'Is placement assistance provided?',
    answer:
      'Yes, we provide dedicated placement support, resume building, mock interviews, and connections with hiring partners.',
  },
  {
    question: 'Can beginners join the program?',
    answer:
      'Absolutely! We offer beginner-friendly courses and mentorship to guide you from zero to job-ready.',
  },
];

const FAQItem = ({ item, isOpen, onClick }: { item: FAQItem; isOpen: boolean; onClick: () => void }) => (
  <div className="border-b border-zinc-800 py-4">
    <button onClick={onClick} className="w-full flex justify-between items-center text-left">
      <span className="text-white font-medium text-lg">{item.question}</span>
      <motion.span
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-purple-500 text-xl"
      >
        +
      </motion.span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="text-zinc-400 text-sm mt-2"
        >
          {item.answer}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-neutral-950 text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            Frequently Asked <span className="text-purple-500">Questions</span>
          </h2>
          <p className="text-zinc-400 mt-2">
            Everything you need to know before starting with BinaryQubit.
          </p>
        </div>

        <div className="divide-y divide-zinc-800">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
