import * as prismic from "@prismicio/client";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

import { createClient, createBuildClient } from "@/prismicio";

type Params = Promise<{ uid: string }>;

export default async function Page({ params }: { params: Promise<Params> }) {
  const client = await createClient();
  const page = await client
    .getByUID("operatingmember", (await params).uid)
    .catch(() => notFound());

  const { name, designation, image, linkedinprofilelink, description } =
    page.data;

  return (
    <div className="block-space narrow-container">
      <header className="mb-10 sm:mb-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr_2fr] sm:gap-10 lg:gap-14">
          <div className="relative aspect-[3/4] w-full min-w-0">
            <PrismicNextImage
              field={image}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <div className="flex min-w-0 flex-col justify-center space-y-4">
            {designation && (
              <span className="rounded-md border border-border bg-muted px-2.5 py-0.5 text-sm font-medium text-muted-foreground">
                {designation}
              </span>
            )}
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {name}
            </h1>
            {prismic.isFilled.link(linkedinprofilelink) && (
              <PrismicNextLink
                field={linkedinprofilelink}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0f879f] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn Profile
              </PrismicNextLink>
            )}
          </div>
        </div>
      </header>
      {prismic.isFilled.richText(description) ? (
        <article className="prose max-w-none dark:prose-invert md:prose-lg prose-headings:mb-4 prose-h2:mt-8 prose-p:text-muted-foreground prose-a:text-foreground prose-a:underline hover:prose-a:text-muted-foreground prose-ul:text-base">
          <PrismicRichText field={description} />
        </article>
      ) : null}
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  try {
    const client = await createClient();
    const page = await client
      .getByUID("operatingmember", (await params).uid)
      .catch(() => notFound());

    return {
      title: page.data.meta_title,
      description: page.data.meta_description,
    };
  } catch {
    return {
      title: "Could not find page",
      description: "The page you are looking for does not exist",
    };
  }
}

export async function generateStaticParams() {
  try {
    const client = createBuildClient();
    const pages = await client.getAllByType("operatingmember");

    return pages.map((page) => ({ uid: page.uid }));
  } catch (error) {
    console.warn(
      "Failed to generate static params for operating team pages:",
      error,
    );
    return [];
  }
}
