import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import config from "./slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || config.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
// TODO: Update the routes array to match your project's route structure.
const routes: prismic.ClientConfig["routes"] = [
  // Examples:
  {
    type: "homepage",
    path: "/",
  },
  {
    type: "page",
    path: "/:uid",
  },
];

/**
 * Creates a Prismic client for build-time operations (like generateStaticParams).
 * This version doesn't check draft mode since it's not available at build time.
 */
export const createBuildClient = (
  config: prismicNext.CreateClientConfig = {},
) => {
  return prismic.createClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...config,
  });
};

/**
 * Creates a Prismic client for runtime operations (like page components).
 * This version checks draft mode and enables auto-previews when needed.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = async (
  config: prismicNext.CreateClientConfig = {},
) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...config,
  });

  // Check if draft mode is enabled (await the promise in Next.js 15)
  // Import draftMode dynamically to avoid build issues
  const { draftMode } = await import("next/headers");
  const { isEnabled } = await draftMode();

  if (isEnabled) {
    prismicNext.enableAutoPreviews({
      client,
      previewData: config.previewData,
      req: config.req,
    });
  }

  return client;
};
