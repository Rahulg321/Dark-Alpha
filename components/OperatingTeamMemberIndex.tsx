"use client";

import { useState, useMemo } from "react";
import AdvisorMemberCard from "./AdvisorMemberCard";
import { Content } from "@prismicio/client";
import { LayoutGrid, Table2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
        <p className="text-muted-foreground">No operating team members found.</p>
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
            className="w-full sm:w-full md:max-w-sm"
          />

          {/* Industry Filter */}
          <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
            <SelectTrigger className="w-full sm:w-full md:w-48">
              <SelectValue placeholder="Industry Focus" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Industry Focus</SelectItem>
              {allIndustries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Designation Filter */}
          <Select
            value={selectedDesignation}
            onValueChange={setSelectedDesignation}
          >
            <SelectTrigger className="w-full sm:w-full md:w-48">
              <SelectValue placeholder="All Designations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Designations</SelectItem>
              {allDesignations.map((designation) => (
                <SelectItem key={designation} value={designation}>
                  {designation}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* View Toggle Buttons */}
        <div className="flex justify-end gap-2">
          <Button
            onClick={() => setViewMode("grid")}
            variant={viewMode === "grid" ? "default" : "outline"}
            size="icon"
            aria-label="Grid view"
          >
            <LayoutGrid size={20} />
          </Button>
          <Button
            onClick={() => setViewMode("table")}
            variant={viewMode === "table" ? "default" : "outline"}
            size="icon"
            aria-label="Table view"
          >
            <Table2 size={20} />
          </Button>
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
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Name
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Industry
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member) => (
                <tr key={member.id} className="border-b hover:bg-accent">
                  <td className="px-6 py-4 text-sm font-medium text-foreground">
                    {member.data?.name || "Name not available"}
                  </td>
                  <td className="px-6 py-4 text-sm uppercase tracking-wide text-muted-foreground">
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
                            className="text-sm font-semibold text-primary hover:underline"
                          >
                            LinkedIn
                          </PrismicNextLink>
                          {member.uid && (
                            <span className="text-muted-foreground">•</span>
                          )}
                        </>
                      )}
                      {member.uid && (
                        <Link
                          href={`/operating-team/${member.uid}`}
                          className="text-sm font-semibold text-primary hover:underline"
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
        <div className="py-12 text-center text-muted-foreground">
          No operating team members found matching your search criteria.
        </div>
      )}
    </div>
  );
};

export default OperatingTeamMemberIndex;
