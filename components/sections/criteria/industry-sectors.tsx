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
    <section className="border-t border-border py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 md:grid-cols-2 md:gap-14 lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
              Sector Focus
            </p>
            <h2 className="text-balance text-3xl font-light tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Our Favorite Industries
            </h2>
            <div className="mt-4 h-px w-24 bg-accent sm:mt-6" />
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
              We have deep expertise and a proven track record in these core
              sectors, allowing us to add meaningful value beyond capital.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-x-10 md:gap-y-6 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-8">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors sm:mb-4 sm:h-16 sm:w-16">
                  <industry.icon
                    className="h-5 w-5 text-muted-foreground transition-colors sm:h-7 sm:w-7"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="text-xs font-medium text-foreground sm:text-sm">
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
