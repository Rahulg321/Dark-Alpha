import { MetadataRoute } from "next";
import { createClient } from "@/prismicio";

export default async function sitemap() {
  const client = createClient();
  const baseUrl = "https://www.darkalphacapital.com";

  const teamMembers = await client.getAllByType("teammember");
  const operatingMembers = await client.getAllByType("operatingmember");

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
      url: "https://darkalphacapital.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://darkalphacapital.com/home",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://darkalphacapital.com/criteria",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://darkalphacapital.com/about-dark-alpha",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://darkalphacapital.com/team",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://darkalphacapital.com/strategy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://darkalphacapital.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...teamMembersURLS,
    ...operatingMembersURLS,
  ];
}
