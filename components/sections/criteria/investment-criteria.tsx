import { Check } from "lucide-react";

const financialCriteria = [
  {
    title: "Based in United States",
    description: "We partner with companies headquartered in the United States",
  },
  {
    title: "$1M+ of EBITDA",
    description: "Minimum profitability threshold for investment consideration",
  },
  {
    title: "Stable Earnings",
    description: "Track record of stable earnings and cash flow generation",
  },
];

const industryCriteria = [
  {
    title: "Stable Growth Drivers",
    description: "Long-term and stable growth drivers in the industry",
  },
  {
    title: "Fragmented Market",
    description: "Large addressable market with fragmented competition",
  },
  {
    title: "Limited Cyclicality",
    description: "Limited cyclicality or commodity exposure",
  },
  {
    title: "Low Disruption Risk",
    description: "Low risk of obsolescence or tech disruption",
  },
];

const businessCriteria = [
  {
    title: "Multiple Growth Levers",
    description: "Multiple levers for growth and expansion",
  },
  {
    title: "Pricing Power",
    description: "Ability to maintain and increase pricing",
  },
  {
    title: "Good Visibility",
    description: "Driven by recurring revenue and low customer concentration",
  },
];

function CriteriaItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="group flex gap-4 py-4">
      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-accent">
        <Check className="h-3 w-3 text-accent" strokeWidth={3} />
      </div>
      <div>
        <h4 className="font-medium text-foreground">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}

function CriteriaColumn({
  number,
  title,
  items,
}: {
  number: string;
  title: string;
  items: typeof financialCriteria;
}) {
  return (
    <div>
      <div className="mb-6 border-b-2 border-accent pb-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">
          {number}
        </span>
        <h3 className="mt-1 text-xl font-medium text-foreground">{title}</h3>
      </div>
      <div className="divide-y divide-border">
        {items.map((item) => (
          <CriteriaItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export function InvestmentCriteria() {
  return (
    <section className="block-space-mini">
      <div className="big-container">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
            What We Look For
          </p>
          <h2 className="text-balance text-4xl font-light tracking-tight text-foreground md:text-5xl">
            Our Investment Criteria
          </h2>
          <div className="mt-6 h-px w-24 bg-accent" />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We evaluate opportunities across three key dimensions to identify
            businesses with strong fundamentals and sustainable competitive
            advantages.
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-3 md:gap-12">
          <CriteriaColumn
            number="01"
            title="Financial"
            items={financialCriteria}
          />
          <CriteriaColumn
            number="02"
            title="Industry"
            items={industryCriteria}
          />
          <CriteriaColumn
            number="03"
            title="Business"
            items={businessCriteria}
          />
        </div>
      </div>
    </section>
  );
}
