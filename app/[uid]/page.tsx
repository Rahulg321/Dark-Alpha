import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  try {
    const client = createClient();
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());
    if(!page) return { title: "Not Found",
    description: "The page you are looking for does not exist",}

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    alternates:{
      canonical:`/${params.uid}`
    }
  };
  } catch (error) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist",
    }
  }
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
