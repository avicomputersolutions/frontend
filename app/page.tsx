import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import { div } from "framer-motion/client";
import ExpertsMarqueeSection from "./components/Experts";
import CoursesSection from "./components/CourseSection";
import AboutSection from "./components/AboutUsSection";
import WhyChooseBinaryQubit from "./components/WhyChooseUsSection";
import FAQSection from "./components/FAQSection";
import InstructorsSection from "./components/TeamSection";
import Footer from "./components/Footer";
import CTA from "./components/sub/CTA";

export default function Home() {
  return (
    <div>

      <Hero />
      <AboutSection />
      <CoursesSection />
      <WhyChooseBinaryQubit />
      <InstructorsSection />
      <FAQSection />
      <CTA />
    </div>
  );
}
