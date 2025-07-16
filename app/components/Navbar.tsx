'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars4Icon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50">
            <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold">
                    <Image src="/BQ.png" width={150} height={70} alt='Binary Qubit Logo' />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex md:items-center space-x-6 text-white">
                    <li><Link href="/" className="hover:text-purple-400">Home</Link></li>
                    <li><Link href="/courses" className="hover:text-purple-400">Courses</Link></li>
                    <li><Link href="/collabrations" className="hover:text-purple-400">Collabration</Link></li>
                    <li><Link href="/about" className="hover:text-purple-400">About</Link></li>
                    <li><Link href="/contact" className="hover:text-purple-400">Contact</Link></li>
                   
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars4Icon className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-[65px] text-white left-0 w-full bg-[#030014ee] backdrop-blur-md px-4 py-4 space-y-4 transition-all duration-300">
                    <Link href="/" className="block hover:text-purple-400">Home</Link>
                    <Link href="/courses" className="block hover:text-purple-400">Courses</Link>
                    <Link href="/collabrations" className="hover:text-purple-400">Collabration</Link>
                    <Link href="/about" className="block hover:text-purple-400">About</Link>
                    <Link href="/contact" className="block hover:text-purple-400">Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
