"use client";

import { useState, useMemo } from "react";
import AdvisorMemberCard from "./AdvisorMemberCard";
import { Content } from "@prismicio/client";
import { LayoutGrid, Table2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

const OperatingTeamMemberIndex = ({
  operatingTeamMembers,
}: {
  operatingTeamMembers: Content.OperatingmemberDocument[];
}) => {
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [selectedDesignation, setSelectedDesignation] = useState<string>("all");

  // Handle empty or invalid data
  if (!operatingTeamMembers || operatingTeamMembers.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-500">No operating team members found.</p>
      </div>
    );
  }

  // Get all unique industries (tags) and designations from members
  const allIndustries = useMemo(() => {
    const industries = new Set<string>();
    operatingTeamMembers.forEach((member) => {
      if (Array.isArray(member.tags)) {
        member.tags.forEach((tag) => {
          if (typeof tag === "string") {
            industries.add(tag);
          }
        });
      }
    });
    return Array.from(industries).sort();
  }, [operatingTeamMembers]);

  const allDesignations = useMemo(() => {
    const designations = new Set<string>();
    operatingTeamMembers.forEach((member) => {
      if (member.data?.designation) {
        designations.add(member.data.designation);
      }
    });
    return Array.from(designations).sort();
  }, [operatingTeamMembers]);

  // Filter members based on search, industry, and designation
  const filteredMembers = useMemo(() => {
    return operatingTeamMembers.filter((member) => {
      // Search by name
      const matchesSearch =
        searchQuery === "" ||
        (member.data?.name &&
          member.data.name.toLowerCase().includes(searchQuery.toLowerCase()));

      // Filter by industry (tags)
      const matchesIndustry =
        selectedIndustry === "all" ||
        (Array.isArray(member.tags) &&
          member.tags.some(
            (tag) =>
              typeof tag === "string" &&
              tag.toLowerCase() === selectedIndustry.toLowerCase(),
          ));

      // Filter by designation
      const matchesDesignation =
        selectedDesignation === "all" ||
        member.data?.designation === selectedDesignation;

      return matchesSearch && matchesIndustry && matchesDesignation;
    });
  }, [
    operatingTeamMembers,
    searchQuery,
    selectedIndustry,
    selectedDesignation,
  ]);

  return (
    <div>
      {/* Search and Filter Controls */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center">
          {/* Search Input */}
          <Input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-sm"
          />

          {/* Industry Filter */}
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 sm:w-[200px]"
          >
            <option value="all">All Industries</option>
            {allIndustries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>

          {/* Designation Filter */}
          <select
            value={selectedDesignation}
            onChange={(e) => setSelectedDesignation(e.target.value)}
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 sm:w-[200px]"
          >
            <option value="all">Designations</option>
            {allDesignations.map((designation) => (
              <option key={designation} value={designation}>
                {designation}
              </option>
            ))}
          </select>
        </div>

        {/* View Toggle Buttons */}
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center justify-center rounded-md p-2 transition-colors ${
              viewMode === "grid"
                ? "bg-gray-900 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            aria-label="Grid view"
          >
            <LayoutGrid size={20} />
          </button>
          <button
            onClick={() => setViewMode("table")}
            className={`flex items-center justify-center rounded-md p-2 transition-colors ${
              viewMode === "table"
                ? "bg-gray-900 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            aria-label="Table view"
          >
            <Table2 size={20} />
          </button>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
          {filteredMembers.map((member) => {
            return <AdvisorMemberCard key={member.id} member={member} />;
          })}
        </div>
      )}

      {/* Table View */}
      {viewMode === "table" && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Designation
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Industry
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member) => (
                <tr key={member.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {member.data?.name || "Name not available"}
                  </td>
                  <td className="px-6 py-4 text-sm uppercase tracking-wide text-gray-700">
                    {member.data?.designation || "-"}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {Array.isArray(member.tags) && member.tags.length > 0
                      ? member.tags
                          .filter((tag) => typeof tag === "string")
                          .join(", ")
                      : "-"}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-4">
                      {member.data?.linkedinprofilelink && (
                        <>
                          <PrismicNextLink
                            field={member.data.linkedinprofilelink}
                            className="text-sm font-semibold text-[#0f879f] hover:underline"
                          >
                            LinkedIn
                          </PrismicNextLink>
                          {member.uid && (
                            <span className="text-gray-300">•</span>
                          )}
                        </>
                      )}
                      {member.uid && (
                        <Link
                          href={`/operating-team/${member.uid}`}
                          className="text-sm font-semibold text-[#0f879f] hover:underline"
                        >
                          Bio
                        </Link>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {filteredMembers.length === 0 && (
        <div className="py-12 text-center text-gray-500">
          No operating team members found matching your search criteria.
        </div>
      )}
    </div>
  );
};

export default OperatingTeamMemberIndex;
