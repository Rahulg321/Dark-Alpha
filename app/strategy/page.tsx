import StrategyHeroSection from "@/components/sections/strategy/hero-section";
import StrategyInvestmentApproach from "@/components/sections/strategy/investment-approach";
import StrategySectorFocus from "@/components/sections/strategy/sector-focus";
import StrategyOperationalExcellence from "@/components/sections/strategy/operational-excellence";
import StrategyExperienceBenefits from "@/components/sections/strategy/experience-benefits";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategy | Dark Alpha Capital",
  description: "Dark Alpha Capital's investment strategy",
};

const StrategyPage = () => {
  return (
    <div>
      <StrategyHeroSection />
      <StrategyInvestmentApproach />
      <StrategySectorFocus />
      <StrategyOperationalExcellence />
      <StrategyExperienceBenefits />
    </div>
  );
};

export default StrategyPage;
