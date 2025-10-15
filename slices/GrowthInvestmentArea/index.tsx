import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ExperiencePoint from "@/components/ExperiencePoint";

/**
 * Props for `GrowthInvestmentArea`.
 */
export type GrowthInvestmentAreaProps =
  SliceComponentProps<Content.GrowthInvestmentAreaSlice>;

/**
 * Component for "GrowthInvestmentArea" Slices.
 */
const GrowthInvestmentArea = async ({ slice }: GrowthInvestmentAreaProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space bg-mainButtonAccent text-white"
    >
      <div className="big-container">
        <h2>Growth and Value Creation Investment Areas</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3>Manufacturing</h3>
            <ExperiencePoint
              blueBackground={true}
              point={"Advanced Manufacturing Technologies"}
            />
            <ExperiencePoint
              blueBackground={true}
              point={"Automotive Industry Innovation"}
            />
            <ExperiencePoint
              blueBackground={true}
              point={"Aerospace and Defense Manufacturing"}
            />
            <ExperiencePoint
              blueBackground={true}
              point={"Industrial Automation and Process Optimization"}
            />
          </div>
          <div>
            <h3>Business Services</h3>
            <ExperiencePoint
              blueBackground={true}
              point={"Technology Consulting"}
            />
            <ExperiencePoint
              blueBackground={true}
              point={"Financial and Accounting Services"}
            />
            <ExperiencePoint
              blueBackground={true}
              point={"Legal Compliance Services"}
            />
            <ExperiencePoint
              blueBackground={true}
              point={"Business Process Outsourcing"}
            />
          </div>
          <div>
            <h3>Health Care</h3>
            <ExperiencePoint
              blueBackground={true}
              point={"Healthcare Information Technology"}
            />
            <ExperiencePoint
              blueBackground={true}
              point={"Healthcare Analytics and Insights"}
            />
            <ExperiencePoint
              blueBackground={true}
              point={"Personalized Medicine"}
            />
            <ExperiencePoint
              blueBackground={true}
              point={"Medical Practices"}
            />
          </div>
          <div>
            <h3>Aerospace</h3>
            <ExperiencePoint
              blueBackground={true}
              point={"Commercial Aircraft"}
            />
            <ExperiencePoint
              blueBackground={true}
              point={"Space Exploration"}
            />
            <ExperiencePoint
              blueBackground={true}
              point={"Aircraft Maintenance"}
            />
            <ExperiencePoint
              blueBackground={true}
              point={"Space Telecommunications"}
            />
          </div>
          <div>
            <h3>Defense</h3>
            <ExperiencePoint
              blueBackground={true}
              point={"Defense Contracting"}
            />
            <ExperiencePoint
              blueBackground={true}
              point={"Defense Equipment Manufacturing"}
            />
            <ExperiencePoint
              blueBackground={true}
              point={"Defense Cybersecurity"}
            />
            <ExperiencePoint
              blueBackground={true}
              point={"Information Technology Solutions"}
            />
          </div>
          <div>
            <h3>Infrastructure</h3>
            <ExperiencePoint blueBackground={true} point={"Transportation"} />
            <ExperiencePoint blueBackground={true} point={"Energy"} />
            <ExperiencePoint blueBackground={true} point={"Water"} />
            <ExperiencePoint blueBackground={true} point={"Digital"} />
            <ExperiencePoint blueBackground={true} point={"Industrial"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthInvestmentArea;
