import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient, createBuildClient } from "@/prismicio";
import { components } from "@/slices";
import * as prismic from "@prismicio/client";
import Head from "next/head";

type Params = Promise<{ uid: string }>;

export default async function Page({ params }: { params: Promise<Params> }) {
  const client = await createClient();
  const page = await client
    .getByUID("blogpost", (await params).uid)
    .catch(() => notFound());

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.data.title as string,
    author: {
      "@type": "Person",
      name: page.data.author,
      // The full URL must be provided, including the website's domain.
      url: new URL("https://www.darkalphacapital.com/team/destiny-aigbe"),
    },
    image: prismic.asImageSrc(page.data.featured_image),
    datePublished: page.first_publication_date,
    dateModified: page.last_publication_date,
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <SliceZone slices={page.data.slices} components={components} />;
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const client = await createClient();
  const page = await client
    .getByUID("blogpost", (await params).uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  try {
    const client = createBuildClient();
    const pages = await client.getAllByType("blogpost");

    return pages.map((page) => {
      return { uid: page.uid };
    });
  } catch (error) {
    // If Prismic is unavailable during build, return empty array
    // Pages will be generated on-demand at runtime
    console.warn("Failed to generate static params for blog pages:", error);
    return [];
  }
}
