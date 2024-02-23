import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { CreateClient } from "@prismicio/client";
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
  const client = createClient();
  const growthPoints = await client.getByType("growthareapoints");
  const engineeringPoints =
    growthPoints.results[0].data.product_and_engineering;
  const talentPoints = growthPoints.results[0].data.team_and_talent;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space bg-accent text-primary"
    >
      <div className="big-container">
        <h2>Growth and Value Creation Investment Areas</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="">Technology and Innovation</h3>
            <ExperiencePoint
              blueBackground={true}
              point={"AI & Machine Learning"}
            />
            <ExperiencePoint blueBackground={true} point={"Blockchain"} />
            <ExperiencePoint blueBackground={true} point={"Cybersecurity"} />
            <ExperiencePoint blueBackground={true} point={"Robotics"} />
            <ExperiencePoint
              blueBackground={true}
              point={"AR & VR Technologies"}
            />
          </div>
          <div>
            <h3 className="">Renewable Energy</h3>

            <ExperiencePoint blueBackground={true} point={"Solar Power"} />
            <ExperiencePoint
              blueBackground={true}
              point={"Geothermal Energy"}
            />
            <ExperiencePoint blueBackground={true} point={"Wind Energy"} />
            <ExperiencePoint
              blueBackground={true}
              point={"Sustainable Transportation"}
            />
          </div>
          <div>
            <h3>Financial Services(Fintech)</h3>
            <ExperiencePoint
              blueBackground={true}
              point={"Digital Banking Platforms"}
            />
            <ExperiencePoint
              blueBackground={true}
              point={"Payment Processing"}
            />
            <ExperiencePoint blueBackground={true} point={"Cryptocurrency"} />
            <ExperiencePoint blueBackground={true} point={"Open Banking"} />
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
            <h3>Infrastructure</h3>
            <ExperiencePoint blueBackground={true} point={"Transportation"} />
            <ExperiencePoint blueBackground={true} point={"Energy"} />
            <ExperiencePoint blueBackground={true} point={"Water"} />
            <ExperiencePoint blueBackground={true} point={"Digital"} />
            <ExperiencePoint blueBackground={true} point={"Industrial"} />
          </div>
          <div>
            <h3>Ecommerce</h3>
            <ExperiencePoint blueBackground={true} point={"Online Retail"} />
            <ExperiencePoint blueBackground={true} point={"Mobile Commerce"} />
            <ExperiencePoint
              blueBackground={true}
              point={"Digital Payment Solutions"}
            />
            <ExperiencePoint
              blueBackground={true}
              point={"Cross Border Ecomm"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthInvestmentArea;
