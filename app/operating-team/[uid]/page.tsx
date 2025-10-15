import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient, createBuildClient } from "@/prismicio";
import { components } from "@/slices";

type Params = Promise<{ uid: string }>;

export default async function Page({ params }: { params: Promise<Params> }) {
  const client = await createClient();
  const page = await client
    .getByUID("operatingmember", (await params).uid)
    .catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
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
  } catch (error) {
    return {
      title: "Could not find page",
      description: "The page you are looking for does not exist",
    };
  }
}

export async function generateStaticParams() {
  const client = createBuildClient();
  const pages = await client.getAllByType("operatingmember");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
