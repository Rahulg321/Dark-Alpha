import BackgroundImageSection from "@/components/BackgroundImageSection";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContactHero`.
 */
export type ContactHeroProps = SliceComponentProps<Content.ContactHeroSlice>;

/**
 * Component for "ContactHero" Slices.
 */
const ContactHero = ({ slice }: ContactHeroProps): JSX.Element => {
  return (
    <BackgroundImageSection
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      backgroundImage={slice.primary.background_image}
      classname="min-h-[75vh] max-h-[75vh]"
    >
      <h1 className="text-white">{slice.primary.heading}</h1>
      {slice.primary.tagline}
    </BackgroundImageSection>
  );
};

export default ContactHero;
