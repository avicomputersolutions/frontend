'use client'
import CourseCard from "../testing/components/ThreeLogo";

import { motion } from 'framer-motion'



const CoursesSection = () => {
    // const courses: CourseCardProps[] = [
    //     {
    //         title: 'Full Stack MERN Development',
    //         description: 'Build industry-ready full stack apps using MongoDB, Express, React, and Node.js.',
    //         image: 'https://images.unsplash.com/photo-1581090700227-1e8d57ae3b7d?fit=crop&w=800&q=80',
    //         duration: '6 Months',
    //         level: 'Intermediate',
    //         link: '/courses/mern',
    //     },
    //     {
    //         title: 'Data Science & Machine Learning',
    //         description: 'Master Python, Pandas, Scikit-learn, and real-world ML projects guided by experts.',
    //         image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?fit=crop&w=800&q=80',
    //         duration: '6 Months',
    //         level: 'Advanced',
    //         link: '/courses/ds-ml',
    //     },
    //     {
    //         title: 'AI & Prompt Engineering',
    //         description: 'Learn Generative AI, GPT-4, and prompt design with LLM integration in products.',
    //         image: 'https://images.unsplash.com/photo-1638913657334-458f60b535b5?fit=crop&w=800&q=80',
    //         duration: '3 Months',
    //         level: 'Intermediate',
    //         link: '/courses/ai',
    //     },
    //     {
    //         title: 'Python Programming Zero to Hero',
    //         description: 'Start from scratch and become a Python pro with problem-solving and projects.',
    //         image: 'https://images.unsplash.com/photo-1581092919534-6c50b235f3c2?fit=crop&w=800&q=80',
    //         duration: '3 Months',
    //         level: 'Beginner',
    //         link: '/courses/python',
    //     },
    // ];

    return (
        <section className=" py-20 text-center text-white">
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
                className="max-w-2xl m-auto text-lg text-center text-zinc-300 mb-12"
            >
                Learn from top mentors, build real-world projects, and get certified with BinaryQubit.
            </motion.p>
            <div className="max-w-6xl w-full m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            title: "Full Stack Web Development (MERN)",
                            desc: "Master React, Node.js, Express, and MongoDB. Build scalable web apps from scratch.",
                            model: "../models/react-2.glb"
                        },
                        {
                            title: "Data Science & Machine Learning",
                            desc: "Learn Python, pandas, scikit-learn, and real-world data analysis with live projects.",
                            model: "../models/data-science.glb"
                        },
                        {
                            title: "AIML (Artificial Intelligence & Machine Learning)",
                            desc: "Gain hands-on experience in machine learning, deep learning, and AI with tools like Python, TensorFlow, and Scikit-learn.",
                            model: "../models/tensorflow-2.glb"
                        }
                        ,
                        {
                            title: "Python Full Stack Development",
                            desc: "Master Python backend with Flask/Django, integrate with frontend and databases. Build full-stack apps.",
                            model: "../models/python-5.glb"
                        }
                        ,
                        {
                            title: "Data Analytics Master Program",
                            desc: "Excel, Power BI, SQL, Python — learn everything for real-time business data analysis.",
                            model: "../models/seaborn-1.glb"
                        },
                        {
                            title: "Java Full Stack Development",
                            desc: "Master frontend and backend development using Java, Spring Boot, Hibernate, and modern frontend technologies.",
                            model: "../models/jee-2.glb"
                        }

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


        </section >
    );
};

export default CoursesSection;
