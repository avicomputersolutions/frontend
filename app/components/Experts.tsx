'use client';

import { CompanyLogos } from '@/constants';
import { motion } from 'framer-motion';

import Reveal from './backgrounds/Reveal';
import Image from 'next/image';

const MarqueeRow = ({ reverse = false }: { reverse?: boolean }) => {
    return (
        <div className="overflow-hidden whitespace-nowrap w-full py-4">
            <motion.div
                className="flex gap-16"
                animate={{
                    x: reverse ? ['-100%', '0%'] : ['0%', '-100%'],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 25,
                    ease: 'linear',
                }}
            >
                {CompanyLogos.map((src, i) => (
                    <div key={i} className="w-32 h-16 flex items-center justify-center ">
                        <Image
                            src={src.Image}
                            alt={src.company_name}
                            width={src.width}
                            height={src.height}
                            className="object-contain h-64"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const ExpertsMarqueeSection = () => {


    return (
        <section className=" text-white  rounded-xl mx-auto py-16  relative z-10">
            <Reveal>
                <div className="container mx-auto px-4">
                    <div
                    >
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Learn from <span className="text-purple-400">Experts</span> by Industries
                            </h2>
                            <p className="mt-2 text-gray-400 text-sm md:text-base">
                                Our mentors are from top global tech companies.
                            </p>
                        </div>

                        {/* Marquee appears only when in view */}
                        <MarqueeRow reverse={false} />

                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export default ExpertsMarqueeSection;
