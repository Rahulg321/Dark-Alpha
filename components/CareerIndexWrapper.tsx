"use client";

import React, { useMemo, useState } from "react";
import CareerCard from "./CareerCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Content } from "@prismicio/client";

type CareerIndexWrapperProps = {
  careers: Content.CareerDocument[];
};

const CareerIndexWrapper = ({ careers }: CareerIndexWrapperProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [selectedHireLevel, setSelectedHireLevel] = useState<string>("all");

  const allDepartments = useMemo(() => {
    const departments = new Set<string>();
    careers.forEach((c) => {
      if (c.data?.department) departments.add(c.data.department);
    });
    return Array.from(departments).sort();
  }, [careers]);

  const allHireLevels = useMemo(() => {
    const levels = new Set<string>();
    careers.forEach((c) => {
      if (c.data?.hire_level) levels.add(c.data.hire_level);
    });
    return Array.from(levels).sort();
  }, [careers]);

  const filteredCareers = useMemo(() => {
    return careers.filter((career) => {
      const title = career.data?.title ?? "";
      const matchesSearch =
        searchQuery === "" ||
        title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDepartment =
        selectedDepartment === "all" ||
        career.data?.department === selectedDepartment;
      const matchesHireLevel =
        selectedHireLevel === "all" ||
        career.data?.hire_level === selectedHireLevel;
      return matchesSearch && matchesDepartment && matchesHireLevel;
    });
  }, [careers, searchQuery, selectedDepartment, selectedHireLevel]);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:max-w-sm"
        />
        <Select
          value={selectedDepartment}
          onValueChange={setSelectedDepartment}
        >
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="All Departments" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Departments</SelectItem>
            {allDepartments.map((dept) => (
              <SelectItem key={dept} value={dept}>
                {dept}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedHireLevel} onValueChange={setSelectedHireLevel}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="All Hire Levels" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Hire Levels</SelectItem>
            {allHireLevels.map((level) => (
              <SelectItem key={level} value={level}>
                {level}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <ul className="divide-y divide-border" role="list">
        {filteredCareers.map((career) => (
          <CareerCard key={career.uid} post={career} />
        ))}
      </ul>
      {filteredCareers.length === 0 && (
        <div className="py-12 text-center text-muted-foreground">
          No careers found matching your filters.
        </div>
      )}
    </div>
  );
};

export default CareerIndexWrapper;
