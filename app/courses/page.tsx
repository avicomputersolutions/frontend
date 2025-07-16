// app/course/page.tsx
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import CoursesSection from "../components/CourseSection";



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
    <main className="relative bg-neutral-950 pt-15 text-white min-h-screen">

      {/* Full Page Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://videos.pexels.com/video-files/16499931/16499931-hd_1920_1080_24fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20">
        {/* Hero Section with Courses */}
        <CoursesSection />

      </div>

    </main>
  );
};

export default CoursePage;
