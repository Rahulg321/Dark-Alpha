import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CriteriaHeroSection() {
  return (
    <section className="block-space ">
      <div className="big-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            Investment Criteria
          </p>
          <h1 className="mb-6 text-balance text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Financial & Geographic
            <span className="block font-semibold">Investment Criteria</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Crafting Success: With discerning vision and strategic precision, we
            seek opportunities aligned with growth potential, innovation, and
            long-term value creation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link
                href="https://calendly.com/darkalphacapital"
                target="_blank"
              >
                Set an Appointment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/capital-factsheet.pdf" target="_blank">
                Download Fact Sheet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
