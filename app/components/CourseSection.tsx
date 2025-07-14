'use client'
import Reveal from "./backgrounds/Reveal";
import CourseCard from "./sub/CourseCard";



const CoursesSection = () => {
    const courses = [
        {
            title: 'Full Stack MERN Development',
            description: 'Build industry-ready full stack apps using MongoDB, Express, React, and Node.js.',
            image: 'https://images.unsplash.com/photo-1581090700227-1e8d57ae3b7d?fit=crop&w=800&q=80',
            duration: '6 Months',
            level: 'Intermediate',
            link: '/courses/mern',
        },
        {
            title: 'Data Science & Machine Learning',
            description: 'Master Python, Pandas, Scikit-learn, and real-world ML projects guided by experts.',
            image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?fit=crop&w=800&q=80',
            duration: '6 Months',
            level: 'Advanced',
            link: '/courses/ds-ml',
        },
        {
            title: 'AI & Prompt Engineering',
            description: 'Learn Generative AI, GPT-4, and prompt design with LLM integration in products.',
            image: 'https://images.unsplash.com/photo-1638913657334-458f60b535b5?fit=crop&w=800&q=80',
            duration: '3 Months',
            level: 'Intermediate',
            link: '/courses/ai',
        },
        {
            title: 'Python Programming Zero to Hero',
            description: 'Start from scratch and become a Python pro with problem-solving and projects.',
            image: 'https://images.unsplash.com/photo-1581092919534-6c50b235f3c2?fit=crop&w=800&q=80',
            duration: '3 Months',
            level: 'Beginner',
            link: '/courses/python',
        },
    ];

    return (
        <section className=" py-20 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">
                        Explore Our <span className="text-purple-500">Courses</span>
                    </h2>
                    <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
                        Upgrade your skills with expert-led, job-oriented training in the most in-demand domains.
                    </p>
                </div>
                <Reveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {courses.map((course, i) => (

                            <CourseCard key={i} {...course} />

                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default CoursesSection;
