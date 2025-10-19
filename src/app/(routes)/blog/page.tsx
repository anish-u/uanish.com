import { Suspense } from "react";

import type { Metadata } from "next";

import BlogPageSection from "@/components/blog/blogs-section";
import Heading from "@/components/common/heading";

import { blogs } from "@/utils/blogs";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function BlogPage() {
  return (
    <div className="flex h-full flex-col items-center gap-6 px-0 py-4 md:px-4 md:py-10">
      <Heading type="secondary">Blogs</Heading>
      <Suspense>
        <BlogPageSection blogs={blogs} />
      </Suspense>
    </div>
  );
}
