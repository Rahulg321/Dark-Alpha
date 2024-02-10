import ExperiencePoint from "@/components/ExperiencePoint";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HowWeOperate`.
 */
export type HowWeOperateProps = SliceComponentProps<Content.HowWeOperateSlice>;

/**
 * Component for "HowWeOperate" Slices.
 */
const HowWeOperate = ({ slice }: HowWeOperateProps): JSX.Element => {
  return (
    <>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="block-space bg-primary"
      >
        <div className="narrow-container">
          <div className="text-pretty text-center">
            <span className="text-2xl font-semibold text-accent">Overview</span>
            <h2 className="my-4 font-extrabold">{slice.primary.heading}</h2>
            <span className="font-semibold text-gray-600">
              {slice.primary.tagline}
            </span>
          </div>
        </div>
      </section>

      <section className="block-space">
        <div className="big-container">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h3 className=" font-bold">The Experience</h3>
              <div className="">
                {slice.items.map((item, index) => (
                  <ExperiencePoint key={index} point={item.experience_point} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold">The Benefits</h3>
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
