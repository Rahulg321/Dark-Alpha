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
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h4>Product and Engineering</h4>
            {engineeringPoints.map((item, index) => {
              return (
                <ExperiencePoint
                  blueBackground={true}
                  key={index}
                  point={item.point}
                />
              );
            })}
          </div>
          <div>
            <h4>Team and Talent</h4>
            {engineeringPoints.map((item, index) => {
              return (
                <ExperiencePoint
                  blueBackground={true}
                  key={index}
                  point={item.point}
                />
              );
            })}
          </div>
          <div>
            <h4>Product and Engineering</h4>
            {engineeringPoints.map((item, index) => {
              return (
                <ExperiencePoint
                  blueBackground={true}
                  key={index}
                  point={item.point}
                />
              );
            })}
          </div>
          <div>
            <h4>Team and Talent</h4>
            {engineeringPoints.map((item, index) => {
              return (
                <ExperiencePoint
                  blueBackground={true}
                  key={index}
                  point={item.point}
                />
              );
            })}
          </div>
          <div>
            <h4>Product and Engineering</h4>
            {engineeringPoints.map((item, index) => {
              return (
                <ExperiencePoint
                  blueBackground={true}
                  key={index}
                  point={item.point}
                />
              );
            })}
          </div>
          <div>
            <h4>Team and Talent</h4>
            {engineeringPoints.map((item, index) => {
              return (
                <ExperiencePoint
                  blueBackground={true}
                  key={index}
                  point={item.point}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthInvestmentArea;
