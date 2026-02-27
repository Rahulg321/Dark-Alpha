"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const experience = [
  "Direct, hands-on operational experience in target industries",
  "Extensive knowledge of supply and value chain drivers",
  "Prior operators as CEO and CFO of scaling businesses",
  "Understand the M&A process and how to maximize value at exit",
];

const benefits = [
  "Active investor working as an extension of management teams to bolster capabilities and accelerate growth",
  "Expertise navigating government and agency procurement and contract award processes",
  "Sales and marketing expertise and strategic finance acumen to grow profitably",
  "Teams aligned with culture and vision that are accountable to performance and execution",
];

export default function StrategyExperienceBenefits() {
  return (
    <section className="bg-secondary/30 px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* The Experience */}
          <div>
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              The Experience
            </span>
            <h2 className="mb-8 mt-4 text-balance text-3xl font-light text-foreground md:text-4xl">
              Deep Industry Expertise
            </h2>

            <div className="space-y-4">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <p className="leading-relaxed text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The Benefits */}
          <div>
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              The Benefits
            </span>
            <h2 className="mb-8 mt-4 text-balance text-3xl font-light text-foreground md:text-4xl">
              Value-Added Partnership
            </h2>

            <div className="space-y-4">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-sm font-medium text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 border-t border-border pt-16">
          <div className="flex flex-col items-center justify-between gap-8 rounded-lg border border-border bg-card p-8 md:flex-row md:p-12">
            <div>
              <h3 className="mb-2 text-2xl font-medium text-foreground">
                Ready to Partner with Us?
              </h3>
              <p className="max-w-xl text-muted-foreground">
                At Dark Alpha, we are committed to fostering sustainable growth
                and value creation for our partners and stakeholders.
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-secondary"
              >
                Learn More
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
