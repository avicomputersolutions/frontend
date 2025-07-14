
import Hero from "./components/HeroSection";

import CoursesSection from "./components/CourseSection";
import AboutSection from "./components/AboutUsSection";
import WhyChooseBinaryQubit from "./components/WhyChooseUsSection";
import FAQSection from "./components/FAQSection";
import InstructorsSection from "./components/TeamSection";

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
