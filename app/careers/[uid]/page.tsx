import { filter } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { createBuildClient, createClient, getMasterRef } from "@/prismicio";

type Params = Promise<{ uid: string }>;

export default async function Page({ params }: { params: Promise<Params> }) {
  const client = await createClient();
  const page = await client
    .getByUID("career", (await params).uid)
    .catch(() => notFound());

  if (page.data.status !== "Active") notFound();

  const { title, excerpt, department, hire_level, description } = page.data;

  return (
    <div className="block-space narrow-container">
      <header className="mb-8 space-y-3 sm:mb-10">
        <div className="flex flex-wrap gap-2">
          {department && (
            <span className="rounded-md border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
              {department}
            </span>
          )}
          {hire_level && (
            <span className="rounded-md border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
              {hire_level}
            </span>
          )}
        </div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          {title}
        </h1>
        {excerpt && (
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            {excerpt}
          </p>
        )}
      </header>
      <article className="prose prose-gray max-w-none dark:prose-invert md:prose-lg prose-headings:mb-4 prose-h2:mt-8 prose-p:text-muted-foreground prose-ul:text-base">
        <PrismicRichText field={description} />
      </article>
    </div>
  );
}
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const client = await createClient();
  const page = await client
    .getByUID("career", (await params).uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  try {
    const client = createBuildClient();
    const masterRef = await getMasterRef();
    const pages = await client.getAllByType("career", {
      filters: [filter.at("my.career.status", "Active")],
      ref: masterRef,
    });

    return pages.map((page) => ({ uid: page.uid }));
  } catch (error) {
    // If Prismic is unavailable during build, return empty array
    // Pages will be generated on-demand at runtime
    console.warn("Failed to generate static params for career pages:", error);
    return [];
  }
}
