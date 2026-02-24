"use client";

import React, { useMemo, useState } from "react";
import { List, Table2, ChevronDown, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
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
import { PrismicNextImage } from "@prismicio/next";
import { ImageField } from "@prismicio/client";
import { cn } from "@/lib/utils";

type NormalizedPost = {
  id: string;
  uid: string;
  title: string | null;
  author: string | null;
  created_at: string | null;
  excerpt: string | null;
  category: string | null;
  tags: string[];
  featured_image: ImageField<never> | null;
  postLink: string;
};

type BlogIndexWrapperProps = {
  posts: NormalizedPost[];
};

function formatDate(dateStr: string | null | undefined): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const BlogIndexWrapper = ({ posts }: BlogIndexWrapperProps) => {
  const [viewMode, setViewMode] = useState<"list" | "table">("list");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique categories from posts
  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    posts.forEach((post) => {
      if (post.category) {
        categories.add(post.category);
      }
    });
    return Array.from(categories).sort();
  }, [posts]);

  // Get all unique tags from posts
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((post) => {
      if (Array.isArray(post.tags)) {
        post.tags.forEach((tag) => {
          if (typeof tag === "string") {
            tags.add(tag);
          }
        });
      }
    });
    return Array.from(tags).sort();
  }, [posts]);

  // Filter posts based on search, category, and tags
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        (post.title &&
          post.title.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory =
        selectedCategory === "all" || post.category === selectedCategory;
      const matchesTags =
        selectedTags.length === 0 ||
        (Array.isArray(post.tags) &&
          post.tags.some((tag) =>
            typeof tag === "string" &&
            selectedTags.some(
              (selected) => tag.toLowerCase() === selected.toLowerCase()
            )
          ));
      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [posts, searchQuery, selectedCategory, selectedTags]);

  return (
    <div>
      {/* Search and Filter Controls */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center">
          <Input
            type="text"
            placeholder="Search by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-full md:max-w-sm"
          />

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-full md:w-52">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {allCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                className={cn(
                  "h-9 w-full justify-between text-left font-normal sm:w-full md:w-48",
                  !selectedTags.length && "text-muted-foreground"
                )}
              >
                <span className="truncate">
                  {selectedTags.length > 0
                    ? `${selectedTags.length} selected`
                    : "All Tags"}
                </span>
                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-full sm:w-full md:w-48 p-0"
              align="start"
            >
              <div className="max-h-64 sm:max-h-72 md:max-h-80 overflow-y-auto p-1">
                {allTags.map((tag) => {
                  const isSelected = selectedTags.includes(tag);
                  return (
                    <div
                      key={tag}
                      className={cn(
                        "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        isSelected && "bg-accent"
                      )}
                      onClick={() => {
                        if (isSelected) {
                          setSelectedTags(
                            selectedTags.filter((item) => item !== tag)
                          );
                        } else {
                          setSelectedTags([...selectedTags, tag]);
                        }
                      }}
                    >
                      <div className="mr-2 flex h-4 w-4 items-center justify-center rounded border border-primary">
                        {isSelected && (
                          <Check className="h-3 w-3 text-primary" />
                        )}
                      </div>
                      <span>{tag}</span>
                    </div>
                  );
                })}
              </div>
              {selectedTags.length > 0 && (
                <div className="border-t p-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-full justify-center text-xs"
                    onClick={() => setSelectedTags([])}
                  >
                    Clear all
                  </Button>
                </div>
              )}
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex justify-end gap-2">
          <Button
            onClick={() => setViewMode("list")}
            variant={viewMode === "list" ? "default" : "outline"}
            size="icon"
            aria-label="List view"
          >
            <List size={20} />
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

      {/* List View - Editorial style, no cards */}
      {viewMode === "list" && (
        <div className="divide-y divide-border">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group py-6 transition-colors first:pt-0 hover:bg-muted/30"
            >
              <Link href={post.postLink} className="block">
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                  {post.featured_image && (
                    <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-sm bg-muted sm:h-24 sm:w-36">
                      <PrismicNextImage
                        field={post.featured_image}
                        fill
                        className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                        sizes="(max-width: 640px) 100vw, 9rem"
                      />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                      {post.category && (
                        <span className="rounded border border-border bg-muted px-2 py-0.5 font-medium">
                          {post.category}
                        </span>
                      )}
                      {post.created_at && (
                        <time dateTime={post.created_at}>
                          {formatDate(post.created_at)}
                        </time>
                      )}
                      {post.author && (
                        <>
                          <span className="text-border">•</span>
                          <span>{post.author}</span>
                        </>
                      )}
                    </div>
                    <h2 className="mb-2 font-semibold tracking-tight text-foreground transition-colors group-hover:text-foreground/90 sm:text-lg">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {post.tags.length > 0 &&
                        post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground">
                        Read
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}

      {/* Table View */}
      {viewMode === "table" && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                  Author
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                  Category
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                  Tags
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">
                  Read
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map((post) => (
                <tr
                  key={post.id}
                  className="border-b border-border transition-colors hover:bg-muted/30"
                >
                  <td className="px-4 py-3">
                    <Link
                      href={post.postLink}
                      className="font-medium text-foreground hover:underline"
                    >
                      {post.title}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">
                    {post.author || "-"}
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">
                    {formatDate(post.created_at) || "-"}
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">
                    {post.category || "-"}
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">
                    {post.tags.length > 0 ? post.tags.join(", ") : "-"}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <Link
                      href={post.postLink}
                      className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline"
                    >
                      Read
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {filteredPosts.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-muted-foreground">
            No posts found matching your search criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogIndexWrapper;
