import { Award, LineChart, ShieldCheck, Handshake } from "lucide-react";

const advantages = [
  {
    icon: Award,
    title: "Quality Commitment",
    description:
      "Commitment to quality in both our investments and processes, working closely with company leadership.",
    stat: "100%",
    statLabel: "Alignment with Long-term Goals",
  },
  {
    icon: LineChart,
    title: "Proven Track Record",
    description:
      "Demonstrated success in delivering operating results and completing transactions across the lower middle market.",
    stat: "Proven",
    statLabel: "Operating Results",
  },
  {
    icon: ShieldCheck,
    title: "Sector Leadership",
    description:
      "Managing Directors who are accomplished former operating CEOs with extensive domain experience.",
    stat: "Deep",
    statLabel: "Sector Expertise",
  },
  {
    icon: Handshake,
    title: "Partnership Focus",
    description:
      "We develop investment thesis that aligns with leadership's long-term goals and strategic vision.",
    stat: "True",
    statLabel: "Partnership Model",
  },
];

export default function AboutAdvantagesSection() {
  return (
    <section className="block-space">
      <div className="big-container">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider">
            Our Advantage
          </p>
          <h2 className="text-balance text-3xl font-light tracking-tight lg:text-4xl">
            What Sets Us <span className="font-medium">Apart</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage) => (
            <div
              key={advantage.title}
              className="group relative rounded-sm border border-border bg-card p-6 transition-colors hover:bg-secondary/50"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="rounded-sm bg-secondary p-2">
                  <advantage.icon className="h-5 w-5" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-light">{advantage.stat}</p>
                  <p className="text-xs">{advantage.statLabel}</p>
                </div>
              </div>

              <h3 className="mb-3 text-lg font-medium">{advantage.title}</h3>
              <p className="text-sm leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
