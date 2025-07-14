'use client';

import { motion } from 'framer-motion';

const benefits = [
    { title: 'Live Instructor-Led Classes', binaryQubit: true, others: false },
    { title: 'Industry Mentors from Google, Amazon, etc.', binaryQubit: true, others: false },
    { title: 'Capstone Projects & Internship Support', binaryQubit: true, others: false },
    { title: 'Lifetime Access to Recordings', binaryQubit: true, others: false },
    { title: '1:1 Career Mentorship & Doubt Sessions', binaryQubit: true, others: false },
    { title: 'Affordable Pricing', binaryQubit: true, others: false },
    { title: 'Job-Ready Curriculum', binaryQubit: true, others: true },
    { title: 'Certificate of Completion', binaryQubit: true, others: true },
];

const CheckIcon = () => (
    <span className="text-green-400 text-xl font-bold">✔</span>
);
const CrossIcon = () => (
    <span className="text-red-500 text-xl font-bold">✘</span>
);

const WhyChooseBinaryQubit = () => {
    return (
        <section className="bg-neutral-950 text-white py-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">
                        Why Choose <span className="text-purple-500">BinaryQubit</span>
                    </h2>
                    <p className="text-gray-400 mt-3">
                        Compare how BinaryQubit stands out from typical training providers.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="overflow-x-auto"
                >
                    <table className="w-full border border-zinc-800 rounded-xl overflow-hidden">
                        <thead className="bg-zinc-900 text-sm uppercase tracking-widest">
                            <tr>
                                <th className="py-4 px-6 text-left w-2/5">Features</th>
                                <th className="py-4 px-6 text-center">BinaryQubit</th>
                                <th className="py-4 px-6 text-center">Others</th>
                            </tr>
                        </thead>
                        <tbody>
                            {benefits.map((item, i) => (
                                <tr
                                    key={i}
                                    className={`${i % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-800/40'
                                        } border-t border-zinc-800`}
                                >
                                    <td className="py-4 px-6 text-left text-gray-200">{item.title}</td>
                                    <td className="py-4 px-6 text-center">
                                        {item.binaryQubit ? <CheckIcon /> : <CrossIcon />}
                                    </td>
                                    <td className="py-4 px-6 text-center">
                                        {item.others ? <CheckIcon /> : <CrossIcon />}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseBinaryQubit;
