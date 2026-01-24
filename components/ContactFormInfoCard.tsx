import React from "react";

type ContactFormInfoCardProps = {
  classname?: string;
  icon: any;
  heading: string;
  tagline: string;
};

const ContactFormInfoCard = ({
  classname,
  icon,
  heading,
  tagline,
}: ContactFormInfoCardProps) => {
  return (
    <div className="flex rounded-xl border px-4 py-6">
      <div className="text-3xl md:text-4xl">{icon}</div>
      <div className="ml-4">
        <span className="block font-bold md:text-xl">{heading}</span>
        <span className="block text-sm font-semibold tracking-tighter md:text-base">
          {tagline}
        </span>
      </div>
    </div>
  );
};

export default ContactFormInfoCard;
