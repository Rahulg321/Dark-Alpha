import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient, createBuildClient } from "@/prismicio";
import { components } from "@/slices";

type Params = Promise<{ uid: string }>;

export default async function Page({ params }: { params: Promise<Params> }) {
  const client = await createClient();
  const page = await client
    .getByUID("page", (await params).uid)
    .catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  try {
    const client = await createClient();
    const page = await client
      .getByUID("page", (await params).uid)
      .catch(() => notFound());
    if (!page)
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist",
      };

    return {
      title: page.data.meta_title,
      description: page.data.meta_description,
      alternates: {
        canonical: `/${(await params).uid}`,
      },
      twitter: {
        card: "summary_large_image",
        title: page.data.meta_title as string,
        description: page.data.meta_description as string,
        creator: "@rg5353070",
        images: [
          "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ], // Must be an absolute URL
      },
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist",
    };
  }
}

export async function generateStaticParams() {
  const client = createBuildClient();
  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
