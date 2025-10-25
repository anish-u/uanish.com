"use client";

import { useEffect, useMemo } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import BlogCard from "@/components/ui/blog-card";
import TagBadge from "@/components/ui/tag-badge";

import type { Blog } from "@/interfaces/blog";

export default function BlogSection({ blogs }: { blogs: Blog[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedTag = searchParams.get("tag") || "All";

  // build counts + sorted tag list
  const { tags, counts } = useMemo(() => {
    const map = new Map<string, number>();
    blogs.forEach((b) =>
      b.tags.forEach((t) => map.set(t, (map.get(t) || 0) + 1))
    );
    const tagList = Array.from(map.keys()).sort((a, b) => a.localeCompare(b));
    const countsObj: Record<string, number> = {};
    tagList.forEach((t) => (countsObj[t] = map.get(t)!));
    return { tags: ["All", ...tagList], counts: countsObj };
  }, [blogs]);

  const filtered = useMemo(() => {
    if (selectedTag === "All") return blogs;
    return blogs.filter((b) => b.tags.includes(selectedTag));
  }, [blogs, selectedTag]);

  const setTag = (tag: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (tag === "All") params.delete("tag");
    else params.set("tag", tag);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    if (selectedTag !== "All" && !tags.includes(selectedTag)) setTag("All");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags.join("|")]);

  return (
    <>
      <div className="w-full">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-2 px-4 md:px-0">
          {tags.map((tag, index) => (
            <TagBadge
              index={index}
              key={tag}
              label={tag}
              active={selectedTag === tag}
              count={tag === "All" ? blogs.length : counts[tag]}
              onClick={() => setTag(tag)}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-2">
        {filtered.map((blog, index) => (
          <BlogCard key={`${blog.title}-${index}`} blog={blog} index={index} />
        ))}
        {filtered.length === 0 && (
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            No blogs found for{" "}
            <span className="font-semibold">{selectedTag}</span>.
          </div>
        )}
      </div>
    </>
  );
}
