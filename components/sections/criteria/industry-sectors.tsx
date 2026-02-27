import { Factory, Briefcase, HeartPulse, Plane, Wrench } from "lucide-react";

const industries = [
  { icon: Factory, name: "Manufacturing" },
  { icon: Briefcase, name: "Business Services" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Plane, name: "Aerospace & Defense" },
  { icon: Wrench, name: "Industrial Services" },
];

export default function CriteriaIndustrySectors() {
  return (
    <section className="border-t border-border py-24 ">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 items-center gap-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
              Sector Focus
            </p>
            <h2 className="text-balance text-4xl font-light tracking-tight text-foreground md:text-5xl">
              Our Favorite Industries
            </h2>
            <div className="mt-6 h-px w-24 bg-accent" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We have deep expertise and a proven track record in these core
              sectors, allowing us to add meaningful value beyond capital.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-border transition-colors ">
                  <industry.icon
                    className="h-7 w-7 text-muted-foreground transition-colors "
                    strokeWidth={1.5}
                  />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
