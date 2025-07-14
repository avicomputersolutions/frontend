'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Building2, Users, BookOpenCheck, Send } from 'lucide-react'
import Link from 'next/link'

const points = [
    {
        icon: <GraduationCap className="w-8 h-8 text-green-500" />,
        title: "Industry-Aligned Curriculum",
        desc: "Equip your students with real-world tech skills like AI, ML, Data Science, and Full Stack."
    },
    {
        icon: <Building2 className="w-8 h-8 text-green-500" />,
        title: "Corporate Collaboration",
        desc: "We connect academia with industry by bringing corporate projects and mentors to classrooms."
    },
    {
        icon: <Users className="w-8 h-8 text-green-500" />,
        title: "Expert Mentors",
        desc: "Our instructors include working professionals from Google, Amazon, and top startups."
    },
    {
        icon: <BookOpenCheck className="w-8 h-8 text-green-500" />,
        title: "Flexible Learning Modes",
        desc: "Offer live, hybrid, or recorded sessions to suit institutional needs."
    },
]

export default function InstitutionsPage() {
    return (
        <main className="bg-zinc-950 pt-20 text-white">
            {/* Hero Section */}
            <section className="py-20 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Partner With BinaryQubit
                    </h1>
                    <p className="text-zinc-400 text-lg mb-6">
                        Transform your students into job-ready professionals by offering modern tech courses, mentorship, and placement support.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-semibold transition"
                    >
                        <Send className="w-4 h-4" />
                        Get in Touch
                    </Link>
                </motion.div>
            </section>
            {/* Programs Offered */}
            <section className="py-20 px-6 bg-zinc-950">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Flagship Programs</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            {
                                title: "Data Science & AI Program",
                                duration: "6 Months",
                                mode: "Hybrid / Live",
                                skills: ["Python", "Machine Learning", "Deep Learning", "NLP", "Power BI"],
                            },
                            {
                                title: "Full Stack Web Development",
                                duration: "6 Months",
                                mode: "Live / Recorded",
                                skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
                            },
                            {
                                title: "Python Programming Essentials",
                                duration: "2 Months",
                                mode: "Live / Recorded",
                                skills: ["Python", "OOP", "File Handling", "Projects"],
                            },
                            {
                                title: "AI for Non-Tech Students",
                                duration: "3 Months",
                                mode: "Live Sessions",
                                skills: ["Prompt Engineering", "No-Code AI", "ChatGPT", "AI Tools"],
                            },
                            {
                                title: "SQL & Data Analytics",
                                duration: "2 Months",
                                mode: "Online",
                                skills: ["MySQL", "Excel", "Power BI", "Dashboarding"],
                            },
                            {
                                title: "Campus-to-Corporate Program",
                                duration: "Custom",
                                mode: "Live + Mentorship",
                                skills: ["Soft Skills", "Mock Interviews", "Resume Building", "LinkedIn"],
                            },
                        ].map((program, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-md"
                            >
                                <h4 className="text-xl font-semibold mb-2 text-green-400">{program.title}</h4>
                                <p className="text-zinc-400 text-sm mb-2"><strong>Duration:</strong> {program.duration}</p>
                                <p className="text-zinc-400 text-sm mb-4"><strong>Mode:</strong> {program.mode}</p>
                                <div className="text-sm text-zinc-300">
                                    <strong>Skills Covered:</strong>
                                    <ul className="list-disc list-inside mt-1 space-y-1">
                                        {program.skills.map((skill, j) => (
                                            <li key={j}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Why Collaborate */}
            <section className="py-20 px-6 bg-zinc-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Collaborate with Us?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
                        {points.map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                                className="bg-zinc-800/70 p-6 rounded-xl border border-zinc-700 shadow-md"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    {point.icon}
                                    <h3 className="text-xl font-semibold">{point.title}</h3>
                                </div>
                                <p className="text-zinc-400 text-sm leading-relaxed">{point.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 text-center">
                <div className="max-w-3xl mx-auto bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg p-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold mb-4"
                    >
                        Let’s Empower Education Together
                    </motion.h2>
                    <p className="text-zinc-400 mb-6">
                        Ready to bring real-world tech skills to your institution? Let’s collaborate and make learning job-focused and impactful.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-semibold transition"
                    >
                        <Send className="w-4 h-4" />
                        Schedule a Call
                    </Link>
                </div>
            </section>
        </main>
    )
}
