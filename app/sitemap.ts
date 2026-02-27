import { MetadataRoute } from "next";
import { createBuildClient, getMasterRef } from "@/prismicio";
import { filter } from "@prismicio/client";

export default async function sitemap() {
  const baseUrl = "https://www.darkalphacapital.com";

  try {
    const client = createBuildClient();

    // Resolve the master ref to ensure we're using the correct ref (bypasses cache)
    const masterRef = await getMasterRef();

    const teamMembers = await client.getAllByType("teammember", {
      ref: masterRef,
    });
    const operatingMembers = await client.getAllByType("operatingmember", {
      ref: masterRef,
    });

    const careers = await client.getAllByType("career", {
      filters: [filter.at("my.career.status", "Active")],
      ref: masterRef,
    });


    const careersURLS =
      careers.map((career) => ({
        url: `${baseUrl}/careers/${career.uid}`,
        lastModified: new Date(),
      })) ?? [];

    const blog = await client.getAllByType("blogpost", {
      ref: masterRef,
    });
    const blogURLS =
      blog.map((post) => ({
        url: `${baseUrl}/blog/${post.uid}`,
        lastModified: new Date(),
      })) ?? [];

    // getting all team members from the CMS
    const teamMembersURLS =
      teamMembers.map((member) => ({
        url: `${baseUrl}/team/${member.data.name}`,
        lastModified: new Date(),
      })) ?? [];

    const operatingMembersURLS =
      operatingMembers.map((member) => ({
        url: `${baseUrl}/operatingteam/${member.data.name}`,
        lastModified: new Date(),
      })) ?? [];



    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1,
      },
      {
        url: `${baseUrl}/home`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/criteria`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/about-dark-alpha`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/team`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/operating-team`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/strategy`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/careers`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      ...teamMembersURLS,
      ...operatingMembersURLS,
      ...blogURLS,
      ...careersURLS,
    ];
  } catch (error) {
    // If Prismic is unavailable during build, return static pages only
    console.warn("Failed to fetch dynamic content for sitemap:", error);
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1,
      },
      {
        url: `${baseUrl}/home`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/criteria`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/about-dark-alpha`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/team`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/operating-team`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/strategy`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/careers`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
    ];
  }
}
