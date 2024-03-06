import BackgroundImageSection from "@/components/BackgroundImageSection";
import TextBackgroundImage from "@/components/TextBackgroundImage";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import HeroLogo from "@/public/heroTechLogo.png";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

/**
 * Props for `TextWithBackground`.
 */
export type TextWithBackgroundProps =
  SliceComponentProps<Content.TextWithBackgroundSlice>;

/**
 * Component for "TextWithBackground" Slices.
 */
const TextWithBackground = ({
  slice,
}: TextWithBackgroundProps): JSX.Element => {
  return (
    <TextBackgroundImage
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      backgroundImage={slice.primary.backgroundimage}
      classname="min-h-[70vh] "
    >
      <div className="big-container block-space text-primary">
        <div className="text-center">
          <h2 className="text-primary">{slice.primary.heading}</h2>
          <h4 className="mt-2 block ">{slice.primary.tagline}</h4>
        </div>

        <div className="mt-6 flex">
          <div className="text-center">
            <Image
              src={HeroLogo}
              alt="logo for dark alpha's portfolio company Hero Technologies"
            />
            <h4>Hero Technologies</h4>
            <Link
              href={"https://herotechnologiesinc.com/"}
              target="_blank"
              className="flex items-center justify-center text-yellow-500"
            >
              Visit Site <MdArrowOutward />
            </Link>
          </div>
        </div>
      </div>
    </TextBackgroundImage>
  );
};

export default TextWithBackground;
