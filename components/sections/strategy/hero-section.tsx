import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export default function StrategyHeroSection() {
  return (
    <section className="relative flex flex-col">
      {/* Hero Content */}
      <div className="big-container flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">
              Investment Strategy
            </span>
            <ArrowRight className="h-3 w-3 text-muted-foreground" />
          </div>

          <h1 className="text-balance text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Our Business Strategy
          </h1>

          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Strategically unleashing potential. Empowering businesses to thrive.
            Unlocking opportunity, maximizing returns, and shaping the future of
            investment.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary px-8 text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link
                href="https://calendly.com/darkalphacapital"
                target="_blank"
              >
                Set an Appointment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-secondary"
              asChild
            >
              <Link href="/capital-factsheet.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Download Fact Sheet
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
