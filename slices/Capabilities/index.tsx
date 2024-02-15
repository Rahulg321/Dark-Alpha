import CapabilityCard from "@/components/CapabilityCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { SiAtom } from "react-icons/si";
import Link from "next/link";
import { IoIosStarOutline } from "react-icons/io";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";

/**
 * Props for `Capabilities`.
 */
export type CapabilitiesProps = SliceComponentProps<Content.CapabilitiesSlice>;

/**
 * Component for "Capabilities" Slices.
 */
const Capabilities = ({ slice }: CapabilitiesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space relative bg-white"
    >
      <div className="big-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <CapabilityCard
            icon={<IoIosStarOutline />}
            backgroundColor="bg-gray-800"
            heading="Experience"
            tagline="Market Street has more then 20+ years of capital raising, M-A and advisory."
          />
          <CapabilityCard
            icon={<SiAtom />}
            backgroundColor="bg-slate-900"
            heading="Relationships"
            tagline="Market Street has a syndication network of more then 8,000 investors, family offices, VC’s and banks. These relationships are a key part of the market street difference."
          />
          <CapabilityCard
            icon={<HiOutlineBuildingLibrary />}
            backgroundColor="bg-black"
            heading="Correspondent Lenders"
            tagline="Market Street is a correspondent lender for several large funds. This allows us to process, underwrite, and table fund in house."
          />
        </div>
        <div className="mt-6  grid grid-cols-1 gap-4 rounded-xl border-2 px-6 py-8 md:mt-12 md:grid-cols-2">
          <div>
            <h2>Services & Capabilities</h2>
            <span className="mt-4 block font-semibold text-gray-600">
              Leveraging decades of experience as owners, operators and
              investors, our services are tailored to match the needs of middle
              market companies providing the support they need to finance their
              future.
            </span>
            <Link
              className="mt-4 inline-block border-2 px-6 py-2 font-semibold transition hover:shadow-md"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
          <div>
            <h2>Investment Banking</h2>
            <span className="mt-4 block font-semibold text-gray-600">
              Our collective experience with individual companies and investors,
              and our knowledge of specific markets, enables us to flawlessly
              execute M&A transactions, secure capital across the different
              phases of our client’s lifecycle and provide strategic advisory
              solutions that help to build toward their future.
            </span>
            <div>
              <span className="mt-4 block font-semibold text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corporis repellendus consequuntur odio eius, beatae inventore,
                at doloribus iusto et illo sequi accusamus quam laudantium ipsum
                cum provident ab aliquam modi!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
