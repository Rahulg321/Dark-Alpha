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
    <section className="block-space px-4 sm:px-6">
      <div className="big-container">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 md:mb-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
            Get Started
          </p>
          <h2 className="text-balance text-3xl font-light tracking-tight text-foreground sm:text-4xl md:text-5xl">
            What do we need from you to get started?
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-accent" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Three simple items to begin our conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 md:gap-14 lg:grid-cols-3 lg:gap-16">
          {requirements.map((req) => (
            <div key={req.title} className="relative">
              <span className="text-5xl font-extralight tracking-tighter text-border sm:text-6xl">
                {req.number}
              </span>
              <div className="mt-3 sm:mt-4">
                <h3 className="text-lg font-medium text-foreground sm:text-xl">
                  {req.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3">
                  {req.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-12 sm:pt-14 md:pt-16">
          <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h3 className="text-xl font-light text-foreground sm:text-2xl md:text-3xl">
                Ready to explore a partnership?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground sm:mt-3 sm:text-base">
                Whatever your motives are to sell your business — or seek an
                investment — the process should be painless and straightforward.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button size="lg" className="w-full justify-center gap-2 sm:w-auto" asChild>
                <Link
                  href="https://calendly.com/darkalphacapital"
                  target="_blank"
                >
                  Set an Appointment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full justify-center gap-2 sm:w-auto" asChild>
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
