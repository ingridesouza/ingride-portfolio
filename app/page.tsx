"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Terminal from "@/components/sections/Terminal";
import Timeline from "@/components/sections/Timeline";
import Gallery from "@/components/sections/Gallery";
import GitHubSection from "@/components/sections/GitHubSection";
import Certifications from "@/components/sections/Certifications";
import LinkedInPosts from "@/components/sections/LinkedInPosts";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import EasterEggs from "@/components/ui/EasterEggs";
import SkillMarquee from "@/components/ui/SkillMarquee";
import ScrollToTop from "@/components/ui/ScrollToTop";

const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), { ssr: false });

export default function Home() {
  return (
    <>
      <EasterEggs />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <SkillMarquee />
        <About />
        <TechStack />
        <Projects />
        <Terminal />
        <Timeline />
        <Gallery />
        <GitHubSection />
        <Certifications />
        <LinkedInPosts />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
