"use client";

import { Target, BookOpen, TrendingUp, ArrowRight } from "lucide-react";

const approaches = [
  {
    icon: Target,
    title: "Thesis-Driven Investment",
    description:
      "Our in-house industry advisors identify industries poised for disruptive growth by studying macroeconomic factors, technological advancements, and regulatory changes.",
    details: [
      "Comprehensive industry research",
      "Market size analysis",
      "Competitive advantage assessment",
      "Growth potential evaluation",
    ],
  },
  {
    icon: BookOpen,
    title: "Value-Creation Playbook",
    description:
      "Led by our operating partners and investors, our value-creation playbook contains tactics and strategies designed to accelerate the growth of target companies.",
    details: [
      "Operational efficiencies",
      "Revenue growth strategies",
      "Strategic partnerships",
      "Product innovation",
    ],
  },
  {
    icon: TrendingUp,
    title: "Acquisition & Enhancement",
    description:
      "Upon acquisition, we meticulously implement comprehensive strategies aimed at elevating operational efficiency, driving revenue growth, and improving margins.",
    details: [
      "RPA implementation",
      "AI-powered analytics",
      "ERP integration",
      "Exit planning",
    ],
  },
];

export default function StrategyInvestmentApproach() {
  return (
    <section className="px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Our Approach
          </span>
          <h2 className="mt-4 text-balance text-3xl font-light text-foreground md:text-4xl">
            Investment Strategy Framework
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            At Dark Alpha, our investment strategy revolves around acquiring and
            enhancing cash-generating companies within select sectors.
          </p>
        </div>

        {/* Approach Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {approaches.map((approach, index) => (
            <div
              key={approach.title}
              className="group relative rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50"
            >
              {/* Step Number */}
              <div className="absolute right-6 top-6 text-6xl font-light text-border transition-colors group-hover:text-primary/20">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                <approach.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-medium text-foreground">
                {approach.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {approach.description}
              </p>

              {/* Details List */}
              <ul className="space-y-2">
                {approach.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <ArrowRight className="h-3 w-3 text-primary" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
