import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import Link from "next/link";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { FaArrowLeftLong } from "react-icons/fa6";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("blogpost", params.uid)
    .catch(() => notFound());

  return (
    <article className="narrow-container">
      <div className="mt-2">
        <Link
          href="/blogs"
          className="flex items-center gap-1 text-xl text-black transition hover:underline"
        >
          <FaArrowLeftLong />
          Go Back
        </Link>
      </div>
      <div className="block-space">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </article>
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
