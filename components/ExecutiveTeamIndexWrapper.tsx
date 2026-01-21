"use client";

import React, { useMemo, useState } from "react";
import { LayoutGrid, Table2, ChevronDown, Check } from "lucide-react";
import TeamMemberCard from "./TeamMemberCard";
import { LinkField } from "@prismicio/client";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type UnifiedMember = {
  id: string;
  uid: string;
  name: string;
  designation: string | null | undefined;
  level: string | null | undefined;
  department: string | null | undefined;
  tags: string[];
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
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);

  // Get all unique levels from members
  const allLevels = useMemo(() => {
    const levels = new Set<string>();
    members.forEach((member) => {
      if (member.level) {
        levels.add(member.level);
      }
    });
    return Array.from(levels).sort();
  }, [members]);

  // Get all unique departments from members
  const allDepartments = useMemo(() => {
    const departments = new Set<string>();
    members.forEach((member) => {
      if (member.department) {
        departments.add(member.department);
      }
    });
    return Array.from(departments).sort();
  }, [members]);

  // Get all unique industries (tags) from members
  const allIndustries = useMemo(() => {
    const industries = new Set<string>();
    members.forEach((member) => {
      if (Array.isArray(member.tags)) {
        member.tags.forEach((tag) => {
          if (typeof tag === "string") {
            industries.add(tag);
          }
        });
      }
    });
    return Array.from(industries).sort();
  }, [members]);

  // Filter members based on search, level, department, and industry
  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      const matchesSearch =
        searchQuery === "" ||
        member.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLevel =
        selectedLevel === "all" || member.level === selectedLevel;
      const matchesDepartment =
        selectedDepartment === "all" || member.department === selectedDepartment;
      const matchesIndustry =
        selectedIndustries.length === 0 ||
        (Array.isArray(member.tags) &&
          member.tags.some((tag) =>
            typeof tag === "string" &&
            selectedIndustries.some(
              (selected) => tag.toLowerCase() === selected.toLowerCase()
            )
          ));
      return matchesSearch && matchesLevel && matchesDepartment && matchesIndustry;
    });
  }, [members, searchQuery, selectedLevel, selectedDepartment, selectedIndustries]);

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

          {/* Level Filter */}
          <Select value={selectedLevel} onValueChange={setSelectedLevel}>
            <SelectTrigger className="w-full sm:w-full md:w-48">
              <SelectValue placeholder="All Levels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              {allLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Department Filter */}
          <Select
            value={selectedDepartment}
            onValueChange={setSelectedDepartment}
          >
            <SelectTrigger className="w-full sm:w-full md:w-48">
              <SelectValue placeholder="All Departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              {allDepartments.map((department) => (
                <SelectItem key={department} value={department}>
                  {department}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Industry Filter */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                className={cn(
                  "h-9 w-full justify-between text-left font-normal sm:w-full md:w-48",
                  !selectedIndustries.length && "text-muted-foreground"
                )}
              >
                <span className="truncate">
                  {selectedIndustries.length > 0
                    ? `${selectedIndustries.length} selected`
                    : "All Industries"}
                </span>
                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full sm:w-full md:w-48 p-0" align="start">
              <div className="max-h-64 sm:max-h-72 md:max-h-80 overflow-y-auto p-1">
                {allIndustries.map((industry) => {
                  const isSelected = selectedIndustries.includes(industry);
                  return (
                    <div
                      key={industry}
                      className={cn(
                        "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        isSelected && "bg-accent"
                      )}
                      onClick={() => {
                        if (isSelected) {
                          setSelectedIndustries(
                            selectedIndustries.filter((item) => item !== industry)
                          );
                        } else {
                          setSelectedIndustries([...selectedIndustries, industry]);
                        }
                      }}
                    >
                      <div className="flex h-4 w-4 items-center justify-center rounded border border-primary mr-2">
                        {isSelected && (
                          <Check className="h-3 w-3 text-primary" />
                        )}
                      </div>
                      <span>{industry}</span>
                    </div>
                  );
                })}
              </div>
              {selectedIndustries.length > 0 && (
                <div className="border-t p-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-full justify-center text-xs"
                    onClick={() => setSelectedIndustries([])}
                  >
                    Clear all
                  </Button>
                </div>
              )}
            </PopoverContent>
          </Popover>
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
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Level
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Department
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Industries
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
                    {member.name}
                  </td>
                  <td className="px-6 py-4 text-sm uppercase tracking-wide text-muted-foreground">
                    {member.level || "-"}
                  </td>
                  <td className="px-6 py-4 text-sm uppercase tracking-wide text-muted-foreground">
                    {member.department || "-"}
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
                      <PrismicNextLink
                        field={member.linkedinprofilelink}
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        LinkedIn
                      </PrismicNextLink>
                      <span className="text-muted-foreground">•</span>
                      <Link
                        href={member.bioLink}
                        className="text-sm font-semibold text-primary hover:underline"
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
        <div className="py-12 text-center text-muted-foreground">
          No members found matching your search criteria.
        </div>
      )}
    </div>
  );
};

export default ExecutiveTeamIndexWrapper;
