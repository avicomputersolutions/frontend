// app/course/page.tsx
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import WhyChooseBinaryQubit from "../components/WhyChooseUsSection";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import CourseCard from "./components/ThreeLogo";




const CoursePage = () => {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
            wheelMultiplier: 1,
            touchMultiplier: 1,
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <main className="relative w-full h-full overflow-hidden">
            <Navbar />
            {/* Full Page Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="fixed top-0 left-0 w-full h-full object-cover z-0"
            >
                <source
                    src="https://videos.pexels.com/video-files/16499931/16499931-hd_1920_1080_24fps.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="fixed inset-0 bg-black/60 z-10" />

            <div className="relative z-20">
                {/* Hero Section with Courses */}
                <section className="min-h-screen flex flex-col justify-center items-center text-white px-4 text-center py-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Explore Our Expert-Led Courses
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="max-w-2xl text-lg text-zinc-300 mb-12"
                    >
                        Learn from top mentors, build real-world projects, and get certified with BinaryQubit.
                    </motion.p>

                    <div className="max-w-6xl w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {[
                                {
                                    title: "Full Stack Web Development (MERN)",
                                    desc: "Master React, Node.js, Express, and MongoDB. Build scalable web apps from scratch.",
                                    model: "../models/react_logo.glb"
                                },
                                {
                                    title: "Data Science & Machine Learning",
                                    desc: "Learn Python, pandas, scikit-learn, and real-world data analysis with live projects.",
                                    model: "../models/chart.glb"
                                },
                                {
                                    title: "AI & Prompt Engineering",
                                    desc: "Explore cutting-edge AI, transformers, and prompt design for LLMs like GPT.",
                                    model: "../models/computer.glb"
                                },
                                {
                                    title: "Python Programming for Beginners",
                                    desc: "Start coding from scratch with Python basics, logic, and project building.",
                                    model: "../models/python-5.glb"
                                },
                                {
                                    title: "Data Analytics Master Program",
                                    desc: "Excel, Power BI, SQL, Python — learn everything for real-time business data analysis.",
                                    model: "../models/seaborn-1.glb"
                                },
                                {
                                    title: "DevOps & Cloud Deployment",
                                    desc: "Understand CI/CD, Docker, Kubernetes, Jenkins and AWS deployments.",
                                    model: "../models/jee-2.glb"
                                },
                            ].map((course, i) => (
                                <motion.div
                                    key={i}
                                    className="hover:bg-zinc-900/80 rounded-xl p-6 shadow-lg border border-zinc-800 hover:shadow-purple-700/40 transition"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >

                                    <CourseCard
                                        
                                        title={course.title}
                                        desc={course.desc}
                                        modelPath={course.model}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* <WhyChooseBinaryQubit/> */}
                {/* Why Choose Section
        <section className="py-32 px-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BinaryQubit?</h2>
            <p className="text-zinc-400">
              From full-stack development to AI/ML, all our courses are curated with hands-on experience, live mentorship, and career support.
            </p>
          </motion.div>
        </section> */}
            </div>
            <div className="fixed z-20 bottom-0">
            <Footer  />
            </div>

        </main>
    );
};

export default CoursePage;
