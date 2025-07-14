'use client'
import React from 'react'
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <div>
            {/* CTA Section */}
            <section className="py-20 px-6  text-white">
                <div className="max-w-4xl mx-auto text-center bg-transparent rounded-xl p-10 shadow-lg border border-zinc-700">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Ready to Transform Your Career?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-zinc-300 mb-6"
                    >
                        Join BinaryQubit today and learn from industry professionals through hands-on courses and mentorship.
                    </motion.p>
                    <motion.a
                        href="/courses"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition"
                    >
                        Chat On Whatsapp
                    </motion.a>
                </div>
            </section>
        </div>
    )
}

export default CTA