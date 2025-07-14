"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CTA from "../components/sub/CTA";
import AboutSection from "../components/AboutUsSection";
import WhoWeAre from "./components/AboutusSection";
import OurValues from "./components/values";
import OurTeam from "./components/team";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section className="py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-8 text-center"
            >
                {title}
            </motion.h2>
            {children}
        </div>
    </section>
);

const AboutPage = () => {
    return (
        <main className="bg-neutral-950 min-h-screen">
            {/* Hero Section */}
            <section className="h-[60vh] flex items-center justify-center text-center text-white px-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-800/30 to-black/70 z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="https://videos.pexels.com/video-files/12722063/12722063-uhd_2560_1440_24fps.mp4" type="video/mp4" />
                </video>
                <div className="relative z-20 max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-6xl font-bold mb-4"
                    >
                        Empowering Tech Careers with Real-World Skills
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-zinc-300 text-lg"
                    >
                        At BinaryQubit, we combine expert mentorship with hands-on experience to build future-ready professionals.
                    </motion.p>
                </div>
            </section>
            < WhoWeAre />
            {/* Our Vision */}
            <Section title="Our Vision">
                <p className="text-center text-zinc-400 max-w-3xl mx-auto">
                    We envision a world where anyone, regardless of background, can access high-quality, industry-aligned education and break into top tech careers. At BinaryQubit, we're building the tools, community, and opportunities to make that vision a reality.
                </p>
            </Section>

            <OurTeam/>
            
            <OurValues/>
           
            <CTA />

        </main>
    );
};

export default AboutPage;
