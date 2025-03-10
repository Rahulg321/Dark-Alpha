import ExperiencePoint from "@/components/ExperiencePoint";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HowWeOperate`.
 */
export type HowWeOperateProps = SliceComponentProps<Content.HowWeOperateSlice>;

const HowWeOperate = ({ slice }: HowWeOperateProps): JSX.Element => {
  return (
    <>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="block-space bg-mainWhite"
      >
        <div className="narrow-container">
          <div className="text-pretty">
            <h1 className="text-mainButtonAccent mb-8  text-center font-semibold">
              INVESTMENT STRATEGY
            </h1>
            <div className="prose prose-lg prose-gray text-balance md:prose-xl prose-headings:mb-4 prose-h2:mt-8 prose-ul:text-base">
              <PrismicRichText field={slice.primary.strategy_content} />
            </div>
          </div>
        </div>
      </section>

      <section className="block-space bg-mainBlue">
        <div className="big-container">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-bold md:mb-4">The Experience</h3>
              <div className="">
                {slice.items.map((item, index) => (
                  <ExperiencePoint key={index} point={item.experience_point} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 font-bold">The Benefits</h3>
              <div className="">
                {slice.items.map((item, index) => (
                  <ExperiencePoint key={index} point={item.benefit_point} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWeOperate;
