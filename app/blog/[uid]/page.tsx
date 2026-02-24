import * as prismic from "@prismicio/client";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

import { createClient, createBuildClient } from "@/prismicio";

type Params = Promise<{ uid: string }>;

function formatDate(dateString: string | null | undefined): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const client = await createClient();
  const page = await client
    .getByUID("blogpost", (await params).uid)
    .catch(() => notFound());

  const { title, author, created_at, excerpt, featured_image, content } =
    page.data;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title as string,
    author: {
      "@type": "Person",
      name: author,
      url: "https://www.darkalphacapital.com/team/destiny-aigbe",
    },
    image: prismic.asImageSrc(featured_image),
    datePublished: page.first_publication_date,
    dateModified: page.last_publication_date,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="block-space">
        <header className="mb-10 sm:mb-14">
          {prismic.isFilled.image(featured_image) && (
            <div className="narrow-container relative mb-10 aspect-[16/9] w-full overflow-hidden bg-muted sm:mb-14">
              <PrismicNextImage
                field={featured_image}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          )}
          <div className="narrow-container flex flex-col space-y-4">
            <div className="flex flex-wrap gap-2">
              {page.tags.length > 0 &&
                page.tags.map((e) => {
                  return (
                    <span
                      key={e}
                      className="rounded-md border border-border bg-muted px-2.5 py-0.5 text-sm font-medium text-muted-foreground"
                    >
                      {e}
                    </span>
                  );
                })}
            </div>

            {created_at && (
              <time
                dateTime={created_at}
                className="text-sm font-medium uppercase tracking-wider text-muted-foreground"
              >
                {formatDate(created_at)}
              </time>
            )}
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              {title}
            </h1>
            {author && (
              <p className="text-sm text-muted-foreground">
                By <span className="font-medium text-foreground">{author}</span>
              </p>
            )}
            {excerpt && (
              <p className="text-base leading-relaxed text-muted-foreground">
                {excerpt}
              </p>
            )}
          </div>
        </header>
        {prismic.isFilled.richText(content) ? (
          <div className="narrow-container prose max-w-none text-justify dark:prose-invert md:prose-lg prose-headings:mb-4 prose-h2:mt-10 prose-h2:border-b prose-h2:border-border prose-h2:pb-2 prose-h3:mt-8 prose-p:leading-relaxed prose-p:text-muted-foreground prose-a:text-foreground prose-a:underline hover:prose-a:text-muted-foreground prose-ul:text-base prose-li:marker:text-muted-foreground">
            <PrismicRichText field={content} />
          </div>
        ) : null}
      </article>
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
