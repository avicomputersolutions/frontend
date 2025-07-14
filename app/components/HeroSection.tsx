'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Reveal from './backgrounds/Reveal';

const Hero = () => {
    return (
        <div className="relative  h-screen w-full overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="https://videos.pexels.com/video-files/12722063/12722063-uhd_2560_1440_24fps.mp4" type="video/mp4" />
            </video>
            {/* <StarsBackground /> */}

            {/* Overlay
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 via-black/20 to-black/30 backdrop-blur-sm z-10"></div> */}

            {/* Hero Content Grid */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="relative z-20 flex flex-col md:flex-row items-center justify-between h-full max-w-7xl mx-auto px-6"
            >
                {/* Left Section (Text) */}
                <div className="w-full pt-40 md:pt-0 md:w-1/2 text-white text-center md:text-left">
                    <Reveal>
                        <h1
                            className="text-4xl md:text-6xl font-extrabold mb-4"
                        >
                            Empower Your Future with <span className="text-purple-400">BinaryQubit</span>
                        </h1>
                    </Reveal>
                    <Reveal>
                        <p

                            className="text-lg md:text-xl text-gray-200 mb-6 max-w-md"
                        >
                            Learn Programming, Data Science, AI, and Web Development with industry-ready mentors.
                        </p>
                    </Reveal>
                    <Reveal>
                        <div>
                            <Link href="/courses">
                                <button className="px-6 py-3 text-lg font-semibold text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition duration-300">
                                    Explore Courses
                                </button>
                            </Link>
                        </div>
                    </Reveal>
                </div>

                {/* Right Section (Optional Illustration or CTA) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="w-full md:w-1/2 mt-10 md:mt-0 flex items-center justify-center"
                >
                    {/* Replace with an image or animated SVG if you prefer */}
                    <img
                        src=" /mainIconsdark.svg"
                        alt="AI Learning Illustration"
                        className="w-[300px] md:w-full object-cover pointer-events-none "
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
