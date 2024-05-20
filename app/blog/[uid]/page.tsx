import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import Link from "next/link";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { FaArrowLeftLong } from "react-icons/fa6";
import * as prismic from "@prismicio/client";
import Head from "next/head";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("blogpost", params.uid)
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
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("blogpost", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("blogpost");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
