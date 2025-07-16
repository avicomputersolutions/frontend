'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'

const teamMembers = [
  { name: "Anil Fauzdar", role: "COO", img: "/instructors/anil.png", linkedin: "#" },

  { name: "Avinash Kumar", role: "CEO & CTO", img: "/instructors/Avinash.png", linkedin: "#" },
  { name: "Sajid Khan", role: "Business Head", img: "/instructors/team3.png", linkedin: "#" },
]

const OurTeam = () => {
  return (
    <section className="py-20 px-6 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Meet Our Team
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="bg-zinc-900 rounded-xl p-6 text-center border border-zinc-800 shadow-md transition-transform"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative w-24 h-24 mx-auto mb-4 rounded-full ring-2 ring-green-500 overflow-hidden"
              >
                <Image src={member.img} alt={member.name} layout="fill" objectFit="cover" />
              </motion.div>
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-sm text-zinc-400 mb-3">{member.role}</p>

              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-green-400 text-sm hover:underline">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam
