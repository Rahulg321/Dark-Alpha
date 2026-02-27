import React from "react";
import AboutHeroSection from "@/components/sections/about-hero-section";
import AboutApproachSection from "@/components/sections/about-approach-section";
import AboutProcessInfographic from "@/components/sections/about-process-infographic";
import AboutAdvantagesSection from "@/components/sections/about-advantages-section";
import AboutPrinciplesSection from "@/components/sections/about-principles-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Dark Alpha Capital",
  description: "Dark Alpha Capital's about page",
};

const AboutPage = () => {
  return (
    <div>
      <AboutHeroSection />
      <AboutApproachSection />
      <AboutProcessInfographic />
      <AboutAdvantagesSection />
      <AboutPrinciplesSection />
    </div>
  );
};

export default AboutPage;
