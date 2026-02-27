import { Calendar, BarChart3, Users2, Rocket } from "lucide-react";

const principles = [
  {
    icon: Calendar,
    title: "Quarterly Rhythms",
    description:
      "Regular meetings to stay updated on progress and make informed decisions.",
  },
  {
    icon: BarChart3,
    title: "Industry Analysis",
    description:
      "Continuous analysis to support portfolio companies and stay ahead of market trends.",
  },
  {
    icon: Users2,
    title: "Corporate Citizenship",
    description:
      "Profit sharing charter that aligns incentives across all stakeholders.",
  },
  {
    icon: Rocket,
    title: "Long-term Growth",
    description:
      "Business focus on sustainable, long-term growth rather than short-term gains.",
  },
];

export default function AboutPrinciplesSection() {
  return (
    <section className="border-t border-border bg-card py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left Column - Content */}
          <div className="lg:sticky lg:top-24">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Organizational Performance
            </p>
            <h2 className="mb-6 text-balance text-3xl font-light tracking-tight text-foreground lg:text-4xl">
              Principles That Drive <span className="font-medium">Success</span>
            </h2>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              We take pride in our operations expertise. Our proven and
              accomplished CEOs who are sector leaders and Operating Partners
              play an active role post-close in overseeing the success of our
              investments.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              With complementary capabilities and a track record of success in
              delivering operating results and completing transactions, we are
              committed to creating long-term value for our shareholders.
            </p>
          </div>

          {/* Right Column - Principles Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="group relative rounded-sm border border-border bg-background p-6 transition-colors hover:border-accent/30"
              >
                <div className="absolute right-4 top-4 text-6xl font-light text-border/50">
                  {index + 1}
                </div>
                <div className="relative">
                  <div className="mb-4 inline-block rounded-sm bg-secondary p-2">
                    <principle.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-foreground">
                    {principle.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Timeline/Flow */}
        <div className="mt-24 border-t border-border pt-16">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h3 className="mb-3 text-xl font-medium text-foreground">
              Our Investment Journey
            </h3>
            <p className="text-muted-foreground">
              From initial partnership to long-term value creation
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-border lg:block" />

            <div className="grid grid-cols-2 gap-6 lg:grid-cols-5">
              {[
                {
                  step: "01",
                  label: "Partnership",
                  sublabel: "Initial Connection",
                },
                {
                  step: "02",
                  label: "Analysis",
                  sublabel: "Deep Dive & Research",
                },
                {
                  step: "03",
                  label: "Thesis",
                  sublabel: "Strategy Development",
                },
                {
                  step: "04",
                  label: "Transaction",
                  sublabel: "Deal Execution",
                },
                { step: "05", label: "Growth", sublabel: "Value Creation" },
              ].map((item) => (
                <div key={item.step} className="relative text-center">
                  <div className="relative z-10 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-card font-mono text-sm text-foreground">
                    {item.step}
                  </div>
                  <p className="mb-1 text-sm font-medium text-foreground">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.sublabel}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
