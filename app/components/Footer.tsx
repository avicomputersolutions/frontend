'use client';

import Link from 'next/link';
import { FaLinkedin, FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo + About */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-purple-500">BinaryQubit</h2>
          <p className="text-zinc-400 mt-4 text-sm leading-relaxed">
            BinaryQubit is a modern tech education platform focused on building future-ready skills through live courses, industry mentors, and hands-on projects.
          </p>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Courses</h3>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li><Link href="/courses/mern">Full Stack MERN</Link></li>
            <li><Link href="/courses/data-science">Data Science & ML</Link></li>
            <li><Link href="/courses/ai">AI & Prompt Engineering</Link></li>
            <li><Link href="/courses/python">Python for Beginners</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Policies</h3>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link href="/refund-cancellation">Refund & Cancellation</Link></li>
            <li><Link href="/shipping-delivery">Shipping & Delivery</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-zinc-800 pt-6 px-4 text-sm text-zinc-500 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} BinaryQubit. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0 text-xl">
          <a href="https://linkedin.com/company/binaryqubit" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-purple-400 transition" />
          </a>
          <a href="https://youtube.com/@binaryqubit" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="hover:text-purple-400 transition" />
          </a>
          <a href="https://instagram.com/binaryqubit" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="hover:text-purple-400 transition" />
          </a>
          <a href="mailto:hello@binaryqubit.com" aria-label="Email">
            <FaEnvelope className="hover:text-purple-400 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
