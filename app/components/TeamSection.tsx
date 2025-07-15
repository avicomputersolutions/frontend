'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const instructors = [
    {
        name: 'Avinash Kumar',
        role: 'Data Science Expert, IBM',
        image: '/instructors/Avinash.png',
        companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    },
    {
        name: 'Nandini Agrawal',
        role: 'MERN Stack Expert, IBM',
        image: '/instructors/trainer3.jpeg',
        companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    },
    {
        name: 'Himanshu Arora',
        role: 'Artificial Intelliegence Expert',
        image: '/instructors/trainer2.jpeg',
        companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    },
    {
        name: 'Rahul Kumar',
        role: 'Cloud Expert, Google',
        image: '/instructors/trainer4.jpeg',
        companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/544px-Google_2015_logo.svg.png',
    },
];

const InstructorsSection = () => {
    return (
        <section className="bg-neutral-950 text-white py-20">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">
                        Learn from <span className="text-purple-500">Industry Experts</span>
                    </h2>
                    <p className="text-zinc-400 mt-3">
                        Our mentors come from the world’s top tech companies and bring real-world experience to the classroom.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {instructors.map((instructor, index) => (
                        <motion.div
                            key={index}
                            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-md hover:shadow-purple-700/40 transition"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="relative w-full h-44 mb-4 rounded-lg overflow-hidden">
                                <Image
                                    src={instructor.image}
                                    alt={instructor.name}
                                    width={500}
                                    height={500}
                                    className="w-full h-48 "
                                />
                            </div>
                            <h3 className="text-lg font-semibold">{instructor.name}</h3>
                            <p className="text-purple-400 text-sm mb-2">{instructor.role}</p>
                            <div className="mt-2">
                                <Image
                                    src={instructor.companyLogo}
                                    alt="Company logo"
                                    width={100}
                                    height={100}
                                    className="w-10 h-6 object-contain"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstructorsSection;
