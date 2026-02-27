import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden py-24 ">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.02)_0%,transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                About Us
              </span>
            </div>

            <h1 className="text-balance text-4xl font-light leading-[1.1] tracking-tight text-foreground lg:text-5xl xl:text-6xl">
              Building Value Through{" "}
              <span className="font-medium">Partnership-Driven</span>{" "}
              Investments
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Dark Alpha Capital is an investment firm focused on acquiring
              private companies. We partner with successful businesses seeking a
              pathway to an exit transaction.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://calendly.com/darkalphacapital"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Set an Appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/capital-factsheet.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Download Fact Sheet
              </Link>
            </div>
          </div>

          {/* Visual Element - Abstract Investment Graphic */}
          <div className="relative hidden lg:block">
            <div className="aspect-square relative mx-auto w-full max-w-md">
              {/* Concentric circles representing growth */}
              <div className="absolute inset-0 rounded-full border border-border/50" />
              <div className="absolute inset-8 rounded-full border border-border/40" />
              <div className="absolute inset-16 rounded-full border border-border/30" />
              <div className="absolute inset-24 rounded-full bg-muted/50" />

              {/* Connection points */}
              <div className="absolute -right-4 top-1/4 h-3 w-3 rounded-full bg-primary" />
              <div className="absolute -left-4 top-1/2 h-3 w-3 rounded-full bg-accent" />
              <div className="absolute -right-4 bottom-1/4 h-3 w-3 rounded-full bg-muted-foreground" />

              {/* Info cards */}
              <div className="absolute -top-4 right-0 max-w-[200px] rounded-sm border border-border bg-card p-4 shadow-sm">
                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Our Focus
                </p>
                <p className="text-sm text-foreground">
                  Lower Middle Market Acquisitions
                </p>
              </div>

              <div className="absolute -left-8 bottom-8 max-w-[200px] rounded-sm border border-border bg-card p-4 shadow-sm">
                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Partners
                </p>
                <p className="text-sm text-foreground">
                  Family Offices & Financial Institutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
