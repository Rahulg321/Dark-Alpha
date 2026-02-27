import {
  Factory,
  Briefcase,
  Heart,
  Plane,
  Shield,
  Building2,
} from "lucide-react";

const sectors = [
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    description:
      "Advanced manufacturing technologies driving innovation across industries.",
    areas: [
      "Advanced Manufacturing Technologies",
      "Automotive Industry Innovation",
      "Aerospace and Defense Manufacturing",
      "Industrial Automation",
    ],
    color: "bg-chart-1",
  },
  {
    id: "business-services",
    icon: Briefcase,
    title: "Business Services",
    description:
      "Professional services enabling operational excellence and growth.",
    areas: [
      "Technology Consulting",
      "Financial and Accounting Services",
      "Legal Compliance Services",
      "Business Process Outsourcing",
    ],
    color: "bg-chart-2",
  },
  {
    id: "healthcare",
    icon: Heart,
    title: "Health Care",
    description:
      "Healthcare solutions improving patient outcomes and operational efficiency.",
    areas: [
      "Healthcare Information Technology",
      "Healthcare Analytics & Insights",
      "Personalized Medicine",
      "Medical Practices",
    ],
    color: "bg-chart-3",
  },
  {
    id: "aerospace",
    icon: Plane,
    title: "Aerospace",
    description:
      "Aerospace innovation from commercial aviation to space exploration.",
    areas: [
      "Commercial Aircraft",
      "Space Exploration",
      "Aircraft Maintenance",
      "Space Telecommunications",
    ],
    color: "bg-chart-4",
  },
  {
    id: "defense",
    icon: Shield,
    title: "Defense",
    description:
      "Defense technologies and services supporting national security.",
    areas: [
      "Defense Contracting",
      "Defense Equipment Manufacturing",
      "Defense Cybersecurity",
      "IT Solutions",
    ],
    color: "bg-chart-5",
  },
  {
    id: "infrastructure",
    icon: Building2,
    title: "Infrastructure",
    description:
      "Critical infrastructure supporting economic growth and development.",
    areas: ["Transportation", "Energy", "Water", "Digital & Industrial"],
    color: "bg-chart-1",
  },
];

export default function StrategySectorFocus() {
  return (
    <section className="bg-secondary/30 px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Sector Focus
          </span>
          <h2 className="mt-4 text-balance text-3xl font-light text-foreground md:text-4xl">
            Growth and Value Creation Investment Areas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            We prioritize high-growth sectors ensuring strategic investments
            aligned with future market trends.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <article
                key={sector.id}
                className="rounded-lg border border-border bg-card p-6"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${sector.color}`}
                >
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-medium text-foreground">
                  {sector.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {sector.description}
                </p>
                <ul className="mt-4 space-y-1 text-sm text-foreground">
                  {sector.areas.map((area) => (
                    <li key={area} className="flex items-baseline gap-2">
                      <span className="text-primary">·</span>
                      {area}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
