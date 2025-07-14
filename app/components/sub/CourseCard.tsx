'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type CourseCardProps = {
    title: string;
    description: string;
    image: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    link: string;
};

const levelColors = {
    Beginner: 'bg-green-600',
    Intermediate: 'bg-yellow-500',
    Advanced: 'bg-red-500',
};

const CourseCard = ({
    title,
    description,
    image,
    duration,
    level,
    link,
}: CourseCardProps) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.25 }}
        whileHover={{ scale: 1.03,resize:2.0 }}
        className="bg-zinc-950 hover:bg-white  text-white hover:text-black border border-zinc-950 rounded-2xl overflow-hidden shadow-md hover:shadow-purple-900/40 transition duration-300"
    >
        <a href={link} className="block h-full">
            <div className="relative h-40 w-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    unoptimized
                />
            </div>
            <div className="p-5 flex flex-col justify-between h-[calc(100%-160px)]">
                <div>
                    <div className="flex justify-between items-center mb-2 text-sm">
                        <span className={`px-3 py-1 rounded-full text-white ${levelColors[level]}`}>
                            {level}
                        </span>
                        <span className="text-gray-400">{duration}</span>
                    </div>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="text-gray-400 text-sm mt-2 line-clamp-3">{description}</p>
                </div>
                <button className="mt-4 w-full py-2 bg-purple-600 rounded-full text-sm hover:bg-purple-700 transition">
                    View Course
                </button>
            </div>
        </a>
    </motion.div>
);

export default CourseCard
