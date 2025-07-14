"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <main className="relative bg-neutral-950 pt-15 text-white min-h-screen">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source
                    src="https://videos.pexels.com/video-files/15283124/15283124-uhd_2560_1440_30fps.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10" />

            <div className="relative z-20 py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl font-bold text-center mb-6"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-zinc-300 text-center max-w-xl mx-auto mb-12"
                    >
                        Have questions, ideas, or collaboration opportunities? We&apos;d love to hear from you!
                    </motion.p>

                    {/* Info Cards */}
                    <div className="grid sm:grid-cols-2 gap-6 mb-12">
                        {[
                            {
                                title: "Email Us",
                                desc: "Reach out to us via email for all inquiries.",
                                info: "contact@binaryqubit.com",
                            },
                            {
                                title: "Call Us",
                                desc: "We're available from 9AM to 6PM IST.",
                                info: "+91 9876543210",
                            },
                            {
                                title: "Visit Us",
                                desc: "Come say hello at our head office.",
                                info: "Gurugram, India",
                            },
                            {
                                title: "Support",
                                desc: "Need help with a course? We're here.",
                                info: "support@binaryqubit.com",
                            },
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-6 shadow-md"
                            >
                                <h4 className="text-xl font-semibold mb-2 text-white">{card.title}</h4>
                                <p className="text-zinc-400 text-sm mb-1">{card.desc}</p>
                                <p className="text-purple-400 text-sm font-medium">{card.info}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-zinc-900/80 p-8 rounded-lg shadow-md border border-zinc-800 space-y-6"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-zinc-800 border border-zinc-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-zinc-800 border border-zinc-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm mb-1">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-zinc-800 border border-zinc-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded transition duration-200"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Optional Contact Info */}
                    <div className="mt-16 text-center text-zinc-300 space-y-2">
                        <p>Email: contact@binaryqubit.com</p>
                        <p>Phone: +91 9876543210</p>
                        <p>Address: Gurugram, India</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
