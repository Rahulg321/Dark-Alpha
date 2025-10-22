"use client";

import React, { useOptimistic, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";

const tags = [
  {
    id: "1",
    name: "Healthcare",
  },

  {
    id: "3",
    name: "Business Services",
  },
  {
    id: "4",
    name: "Industrials",
  },
  {
    id: "5",
    name: "Aerospace and Defense",
  },
  {
    id: "6",
    name: "Industrial Services",
  },
  {
    id: "7",
    name: "Information Technology",
  },
  {
    id: "8",
    name: "Manufacturing",
  },
];

const FilterPageTags = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [selectedCategories, setSelectedCategories] = useOptimistic(
    searchParams.getAll("tag"),
  );

  const handleCheckedChange = (value: string, checked: boolean) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      params.delete("tag");

      const newSelected = checked
        ? [...selectedCategories, value]
        : selectedCategories.filter((cat) => cat !== value);

      newSelected.forEach((cat) => params.append("tag", cat.toLowerCase()));
      setSelectedCategories(newSelected);

      router.push(`?${params.toString()}`, {
        scroll: false,
      });
    });
  };

  const handleClearAll = () => {
    startTransition(() => {
      setSelectedCategories([]);
      router.push(window.location.pathname, {
        scroll: false,
      });
    });
  };

  return (
    <div
      className="flex items-center gap-2"
      data-pending={isPending ? "" : undefined}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Industry Focus
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Filter by Industries</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {tags.map((tag) => (
            <DropdownMenuCheckboxItem
              key={tag.id}
              checked={selectedCategories.includes(tag.name.toLowerCase())}
              onCheckedChange={(checked) =>
                handleCheckedChange(tag.name, checked as boolean)
              }
            >
              {tag.name}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {selectedCategories.length > 0 && (
        <Button
          variant="outline"
          size="sm"
          onClick={handleClearAll}
          className="text-red-600 hover:bg-red-50 hover:text-red-700"
        >
          <X className="mr-2 h-4 w-4" />
          Clear All
        </Button>
      )}
    </div>
  );
};

export default FilterPageTags;
