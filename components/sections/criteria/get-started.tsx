import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const requirements = [
  {
    number: "01",
    title: "Business Statement",
    description:
      "Send us a letter explaining your competitive advantage. Examples include: a dominant brand, a large and loyal community, a niche vertical, or something similar with 5+ years of operating history.",
  },
  {
    number: "02",
    title: "Financials",
    description:
      "Share your historical financials. We're primarily looking for a profitability benchmark between $1M to $10M per year.",
  },
  {
    number: "03",
    title: "Future Plans",
    description:
      "Tell us about your desires for the future of the business. Would you like to continue to run it or transition out? How do you see growing the business and where do you see the opportunities?",
  },
];

export default function CriteriaGetStarted() {
  return (
    <section className="block-space">
      <div className="big-container">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
            Get Started
          </p>
          <h2 className="text-balance text-4xl font-light tracking-tight text-foreground md:text-5xl">
            What do we need from you to get started?
          </h2>
          <div className="mt-6 h-px w-24 bg-accent" />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Three simple items to begin our conversation.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-12 md:gap-16">
          {requirements.map((req) => (
            <div key={req.title} className="relative">
              <span className="text-6xl font-extralight tracking-tighter text-border">
                {req.number}
              </span>
              <div className="mt-4">
                <h3 className="text-xl font-medium text-foreground">
                  {req.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {req.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-16">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h3 className="text-2xl font-light text-foreground md:text-3xl">
                Ready to explore a partnership?
              </h3>
              <p className="mt-3 text-muted-foreground">
                {
                  "Whatever your motives are to sell your business — or seek an investment — the process should be painless and straightforward."
                }
              </p>
            </div>
            <div className="flex shrink-0 gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link
                  href="https://calendly.com/darkalphacapital"
                  target="_blank"
                >
                  Set an Appointment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact" target="_blank">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
