import { Bot, Brain, Database, Users, LineChart, Network } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "High-Growth Sectors",
    description:
      "Prioritizes manufacturing, business services, and healthcare for strategic investments aligned with future market trends.",
    stat: "3+",
    statLabel: "Core Sectors",
  },
  {
    icon: Bot,
    title: "Cutting-Edge Technologies",
    description:
      "Implements RPA and AI to enhance operational efficiency and drive cost savings post-acquisition.",
    stat: "40%",
    statLabel: "Efficiency Gains",
  },
  {
    icon: Database,
    title: "ERP Integration",
    description:
      "Optimizes business workflows through comprehensive ERP integration, fostering cohesion across finance, HR, and operations.",
    stat: "100%",
    statLabel: "System Integration",
  },
  {
    icon: Users,
    title: "BPO Excellence",
    description:
      "Refines core functions like finance and accounting through specialized Business Process Outsourcing.",
    stat: "5+",
    statLabel: "Core Functions",
  },
  {
    icon: LineChart,
    title: "Lean Six Sigma",
    description:
      "Employs continuous improvement methodologies for sustained operational gains and margin enhancements.",
    stat: "15%",
    statLabel: "Margin Growth",
  },
  {
    icon: Network,
    title: "Portfolio Synergies",
    description:
      "Strategically leverages synergies between portfolio companies through shared resources and expertise.",
    stat: "20+",
    statLabel: "Partnerships",
  },
];

const processSteps = ["Identify", "Acquire", "Optimize", "Scale", "Exit"];

export default function StrategyOperationalExcellence() {
  return (
    <section className="px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Operational Excellence
          </span>
          <h2 className="mt-4 text-balance text-3xl font-light text-foreground md:text-4xl">
            Our Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Comprehensive strategies aimed at elevating operational efficiency,
            driving revenue growth, and improving margins.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <article
                key={capability.title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-light text-primary">
                      {capability.stat}
                    </span>
                    <p className="text-xs text-muted-foreground">
                      {capability.statLabel}
                    </p>
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-medium text-foreground">
                  {capability.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {capability.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-16 border-t border-border pt-16">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {processSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-sm font-medium text-muted-foreground">
                    {index + 1}
                  </div>
                  <span className="mt-2 text-sm text-muted-foreground">
                    {step}
                  </span>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden h-px w-8 bg-border md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
