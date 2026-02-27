import React from "react";
import { Metadata } from "next";
import CriteriaHeroSection from "@/components/sections/criteria/hero-section";
import { InvestmentCriteria } from "@/components/sections/criteria/investment-criteria";
import CriteriaIndustrySectors from "@/components/sections/criteria/industry-sectors";
import CriteriaProcessComparison from "@/components/sections/criteria/process-comparison";
import CriteriaGetStarted from "@/components/sections/criteria/get-started";

export const metadata: Metadata = {
  title: "Criteria | Dark Alpha Capital",
  description: "Dark Alpha Capital's criteria page",
};

const CriteriaPage = () => {
  return (
    <div>
      <CriteriaHeroSection />
      <InvestmentCriteria />
      <CriteriaIndustrySectors />
      <CriteriaProcessComparison />
      <CriteriaGetStarted />
    </div>
  );
};

export default CriteriaPage;
