"use client";

import React, { useMemo, useState } from "react";
import { LayoutGrid, Table2 } from "lucide-react";
import TeamMemberCard from "./TeamMemberCard";
import { LinkField } from "@prismicio/client";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import { Input } from "@/components/ui/input";

type UnifiedMember = {
  id: string;
  uid: string;
  name: string;
  designation: string | null | undefined;
  profile_image: any;
  linkedinprofilelink: LinkField;
  bioLink: string;
};

type ExecutiveTeamIndexWrapperProps = {
  members: UnifiedMember[];
};

const ExecutiveTeamIndexWrapper = ({
  members,
}: ExecutiveTeamIndexWrapperProps) => {
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDesignation, setSelectedDesignation] = useState<string>("all");

  // Get all unique designations from members
  const allDesignations = useMemo(() => {
    const designations = new Set<string>();
    members.forEach((member) => {
      if (member.designation) {
        designations.add(member.designation);
      }
    });
    return Array.from(designations).sort();
  }, [members]);

  // Filter members based on search and designation
  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      const matchesSearch =
        searchQuery === "" ||
        member.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDesignation =
        selectedDesignation === "all" ||
        member.designation === selectedDesignation;
      return matchesSearch && matchesDesignation;
    });
  }, [members, searchQuery, selectedDesignation]);

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

          {/* Designation Filter */}
          <select
            value={selectedDesignation}
            onChange={(e) => setSelectedDesignation(e.target.value)}
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 sm:w-[200px]"
          >
            <option value="all">All Designations</option>
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
          {filteredMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              memberName={member.name}
              memberImage={member.profile_image}
              memberPosition={member.designation}
              LinkedinLink={member.linkedinprofilelink}
              BioLink={member.bioLink}
            />
          ))}
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
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member) => (
                <tr key={member.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {member.name}
                  </td>
                  <td className="px-6 py-4 text-sm uppercase tracking-wide text-gray-700">
                    {member.designation || "-"}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-4">
                      <PrismicNextLink
                        field={member.linkedinprofilelink}
                        className="text-sm font-semibold text-[#0f879f] hover:underline"
                      >
                        LinkedIn
                      </PrismicNextLink>
                      <span className="text-gray-300">•</span>
                      <Link
                        href={member.bioLink}
                        className="text-sm font-semibold text-[#0f879f] hover:underline"
                      >
                        Bio
                      </Link>
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
          No members found matching your search criteria.
        </div>
      )}
    </div>
  );
};

export default ExecutiveTeamIndexWrapper;
