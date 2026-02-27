import React from "react";
import clsx from "clsx";

type ContactFormInfoCardProps = {
  classname?: string;
  icon: React.ReactNode;
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
    <div
      className={clsx(
        "flex items-start gap-3 rounded-lg border border-border/60 bg-background/50 px-4 py-3",
        classname
      )}
    >
      <span className="mt-0.5 text-lg text-muted-foreground">{icon}</span>
      <div className="min-w-0 flex-1">
        <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {heading}
        </span>
        <span className="mt-0.5 block text-sm text-foreground">{tagline}</span>
      </div>
    </div>
  );
};

export default ContactFormInfoCard;
