"use client";

import { useState } from "react";
import { FileText, Scale, Briefcase, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const processSteps = [
  {
    id: "thesis",
    icon: FileText,
    title: "Investment Thesis Development",
    description:
      "We work closely with the leadership team and our Sector Leaders to develop a comprehensive and actionable investment thesis.",
    details: [
      "Collaborative approach with company leadership",
      "Deep sector expertise integration",
      "Comprehensive market analysis",
      "Actionable value creation strategy",
    ],
  },
  {
    id: "transaction",
    icon: Scale,
    title: "Transaction Expertise",
    description:
      "Our team has extensive experience in valuation, capital structure, and economic models that create a credible story for investors.",
    details: [
      "Valuation and capital structure analysis",
      "Economic modeling excellence",
      "Strategy-valuation alignment",
      "Experienced deal team guidance",
    ],
  },
  {
    id: "operations",
    icon: Briefcase,
    title: "Operations Expertise",
    description:
      "Our proven Sector Leaders and Operating Partners play an active role in overseeing the success of our investments post-close.",
    details: [
      "Active post-close involvement",
      "Sector-specific operational guidance",
      "Leadership partnership",
      "Full potential realization",
    ],
  },
  {
    id: "value",
    icon: CheckCircle2,
    title: "Value Creation",
    description:
      "We translate our thesis into an executable strategy that our Sector Leaders work closely with company leadership to implement.",
    details: [
      "Executable strategy development",
      "Hands-on implementation support",
      "Long-term value focus",
      "Shareholder alignment",
    ],
  },
];

export default function AboutProcessInfographic() {
  const [activeStep, setActiveStep] = useState(0);
  const step = processSteps[activeStep];
  const Icon = step.icon;

  return (
    <section className="block-space-mini">
      <div className="big-container">
        <div className="mb-8 max-w-xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Our Process
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            From Thesis to Value Creation
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="space-y-2">
              {processSteps.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActiveStep(i)}
                  className={cn(
                    "w-full rounded-md border px-4 py-3 text-left transition-colors",
                    activeStep === i
                      ? "border-border bg-muted/50"
                      : "border-transparent hover:bg-muted/30",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <s.icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <span
                      className={cn(
                        "text-sm font-medium",
                        activeStep === i ? "text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {s.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-md border border-border bg-card/50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-medium text-foreground">{step.title}</h3>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>

              <div className="space-y-2">
                {step.details.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
