import ContactForm from "@/components/ContactForm";
import ContactFormInfoCard from "@/components/ContactFormInfoCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { PrismicNextImage } from "@prismicio/next";

export type ContactFormSectionProps =
  SliceComponentProps<Content.ContactFormSectionSlice>;

const ContactFormSection = ({ slice }: ContactFormSectionProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space bg-muted/30"
    >
      <div className="big-container">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:gap-20">
          <div className="min-w-0">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-4xl">
              {slice.primary.heading}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              {slice.primary.tagline}
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <PrismicNextImage
                field={slice.primary.contactformimage}
                className="object-cover"
                fill
              />
            </div>
            <div className="flex flex-col gap-3">
              <ContactFormInfoCard
                icon={<MdEmail />}
                heading="Email"
                tagline="info@darkalphacapital.com"
              />
              <ContactFormInfoCard
                icon={<FaLocationDot />}
                heading="Address"
                tagline="8 The Green Suite 4000, Dover, DE 19901"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
