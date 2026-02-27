const traditionalSteps = [
  "Hire an Investment Banker / Broker",
  "Build and Populate Data Room",
  "Buyers Outreach",
  "The Dog and Pony Show",
  "Term Sheets + Negotiations + LOI",
  "Due Diligence",
  "Q&As + Renegotiations",
  "Closing",
];

const darkAlphaSteps = [
  { label: "Business Statement", note: "A Letter by You" },
  { label: "Expression of Interest", note: "A Letter by Us" },
  { label: "Analysis of Business", note: "2-5 Days" },
  { label: "A Fair Offer from Us", note: "1 Day" },
  { label: "The Handshake", note: "2-3 Days" },
  { label: "Closing", note: "8-10 Weeks" },
];

export default function CriteriaProcessComparison() {
  return (
    <section className="block-space bg-primary">
      <div className="big-container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary-foreground/80">
            Our Approach
          </p>
          <h2 className="text-balance text-3xl font-light tracking-tight text-primary-foreground md:text-4xl">
            We know what it feels like to sell a business, so we made it easier
            for you.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-primary-foreground/80">
            You&apos;ve worked hard to build your business, and you have
            choices. Consider the Dark Alpha alternative — built on trust,
            professional respect, and thoughtful guidance.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-6 py-6">
            <p className="text-xs font-medium uppercase tracking-widest text-primary-foreground/70">
              Traditional PE
            </p>
            <p className="mt-3 text-5xl font-light tracking-tight text-primary-foreground md:text-6xl">
              300–365
            </p>
            <p className="mt-1 text-base text-primary-foreground/80">
              days to close
            </p>
            <p className="mt-3 text-sm text-primary-foreground/70">
              50% close rate
            </p>
          </div>
          <div className="rounded-lg border border-primary-foreground/25 bg-primary-foreground/10 px-6 py-6">
            <p className="text-xs font-medium uppercase tracking-widest text-primary-foreground">
              Dark Alpha
            </p>
            <p className="mt-3 text-5xl font-light tracking-tight text-primary-foreground md:text-6xl">
              ~75
            </p>
            <p className="mt-1 text-base text-primary-foreground/90">
              days to close
            </p>
            <p className="mt-3 text-sm font-medium text-primary-foreground">
              4–5× faster
            </p>
          </div>
        </div>

        <div className="mb-16">
          <p className="mb-6 text-xs font-medium uppercase tracking-widest text-primary-foreground/70">
            Timeline Comparison
          </p>
          <div className="space-y-6">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm text-primary-foreground/80">
                <span>Traditional PE Process</span>
                <span>300–365 days</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-primary-foreground/15">
                <div className="h-full w-full bg-primary-foreground/25" />
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-primary-foreground/90">
                  Dark Alpha Process
                </span>
                <span className="font-medium text-primary-foreground">
                  ~75 days
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-primary-foreground/15">
                <div
                  className="h-full bg-primary-foreground"
                  style={{ width: "20.5%" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="mb-6 text-base font-medium text-primary-foreground/80">
              The Traditional Way
            </h3>
            <ol className="space-y-3">
              {traditionalSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-sm font-medium text-primary-foreground/60">
                    {index + 1}.
                  </span>
                  <span className="text-sm text-primary-foreground/80">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-t border-primary-foreground/15 pt-6 text-sm leading-relaxed text-primary-foreground/70">
              Your business becomes a reporting machine, your employees are
              unhappy, and you&apos;re locked into unreasonable earn-outs.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-base font-medium text-primary-foreground">
              The Dark Alpha Way
            </h3>
            <ol className="space-y-3">
              {darkAlphaSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="shrink-0 text-sm font-medium text-primary-foreground">
                    {index + 1}.
                  </span>
                  <div>
                    <span className="block text-sm font-medium text-primary-foreground">
                      {step.label}
                    </span>
                    <span className="text-xs text-primary-foreground/70">
                      {step.note}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-t border-primary-foreground/20 pt-6 text-sm leading-relaxed text-primary-foreground/85">
              We work together to sustainably grow your business and deliver the
              next exit event with wins for both you and your employees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
