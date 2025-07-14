'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Rocket } from 'lucide-react'

const WhoWeAre = () => {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-zinc-900 to-zinc-950 text-white">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-12"
                >
                    Who We Are
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Block 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-zinc-800/70 p-6 rounded-xl border border-zinc-700 shadow-md"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Lightbulb className="text-green-400" />
                            <h3 className="text-xl font-semibold">Industry-Focused Learning</h3>
                        </div>
                        <p className="text-zinc-300 leading-relaxed">
                            BinaryQubit is a next-gen education platform built by industry experts for learners who want to stand out in the job market. We focus on practical, career-driven training across programming, data science, AI, and full-stack development.
                        </p>
                    </motion.div>

                    {/* Block 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-zinc-800/70 p-6 rounded-xl border border-zinc-700 shadow-md"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Rocket className="text-green-400" />
                            <h3 className="text-xl font-semibold">Transformative Approach</h3>
                        </div>
                        <p className="text-zinc-300 leading-relaxed">
                            Our approach blends real-world projects, expert-led classes, and personalized mentorship to create a truly transformative learning experience tailored for your success.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre;
