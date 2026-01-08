import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient, createBuildClient } from "@/prismicio";
import { components } from "@/slices";

type Params = Promise<{ uid: string }>;

export default async function Page({ params }: { params: Promise<Params> }) {
  const client = await createClient();
  const page = await client
    .getByUID("working_member", (await params).uid)
    .catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const client = await createClient();
  const page = await client
    .getByUID("working_member", (await params).uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  try {
    const client = createBuildClient();
    const pages = await client.getAllByType("working_member");

    return pages.map((page) => {
      return { uid: page.uid };
    });
  } catch (error) {
    // If Prismic is unavailable during build, return empty array
    // Pages will be generated on-demand at runtime
    console.warn("Failed to generate static params for working team pages:", error);
    return [];
  }
}
