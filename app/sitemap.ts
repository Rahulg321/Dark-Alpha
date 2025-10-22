import { MetadataRoute } from "next";
import { createBuildClient } from "@/prismicio";

export default async function sitemap() {
  const client = createBuildClient();
  const baseUrl = "https://www.darkalphacapital.com";

  const teamMembers = await client.getAllByType("teammember");
  const operatingMembers = await client.getAllByType("operatingmember");
  const working_members = await client.getAllByType("working_member");

  const blog = await client.getAllByType("blogpost");
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

  const workingMembersURLS =
    working_members.map((member) => ({
      url: `${baseUrl}/working-team/${member.data.name}`,
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
    ...workingMembersURLS,
    ...blogURLS,
  ];
}
