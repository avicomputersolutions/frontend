'use client'

import { motion } from 'framer-motion'
import { Briefcase, Users, Code2, ShieldCheck, Brain, Rocket } from 'lucide-react'

const values = [
    {
      icon: <Briefcase className="w-8 h-8 text-green-400" />,
      title: "Industry Focused",
      desc: "Our curriculum is aligned with real tech jobs and future skills."
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Mentor-Led",
      desc: "Learn directly from experts working at Google, Amazon, and top startups."
    },
    {
      icon: <Code2 className="w-8 h-8 text-green-400" />,
      title: "Project Based",
      desc: "Build hands-on projects that showcase your practical knowledge."
    },
    {
      icon: <Rocket className="w-8 h-8 text-green-400" />,
      title: "Career Driven",
      desc: "Everything we teach is designed to boost your job-readiness and career confidence."
    },
    {
      icon: <Brain className="w-8 h-8 text-green-400" />,
      title: "Continuous Learning",
      desc: "Stay ahead with constant updates and new modules based on tech trends."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
      title: "Real Accountability",
      desc: "Regular evaluations, peer reviews, and mentor feedback to keep you on track."
    }
  ]
  

const OurValues = () => {
  return (
    <section className="py-20 px-6 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Values
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-md transition-transform"
            >
              <div className="mb-4 flex justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {value.icon}
                </motion.div>
              </div>
              <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurValues;
