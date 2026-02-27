import { Target, TrendingUp, Users } from "lucide-react";

const approaches = [
  {
    number: "01",
    icon: Target,
    title: "Deep Sector Expertise",
    description:
      "Our Managing Directors and Sector Leaders are accomplished former operating CEOs with extensive domain experience in specific industry sectors.",
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Future-Focused Vision",
    description:
      "We focus on what a company can become, rather than what it is today, to create maximum value for all shareholders.",
  },
  {
    number: "03",
    icon: Users,
    title: "Collaborative Partnership",
    description:
      "We work closely with company leadership to develop an investment thesis that aligns with their long-term goals and strategic vision.",
  },
];

export default function AboutApproachSection() {
  return (
    <section className="border-y border-border bg-card py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Our Approach
          </p>
          <h2 className="text-balance text-3xl font-light tracking-tight text-foreground lg:text-4xl">
            A Comprehensive and Focused{" "}
            <span className="font-medium">Investment Strategy</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {approaches.map((approach) => (
            <div key={approach.number} className="group relative">
              <div className="mb-6 flex items-start gap-4">
                <span className="text-5xl font-light">{approach.number}</span>
              </div>
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-sm bg-secondary p-2">
                  <approach.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-lg font-medium text-foreground">
                  {approach.title}
                </h3>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
