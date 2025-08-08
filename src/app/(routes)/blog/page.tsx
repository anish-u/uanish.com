import { Metadata } from "next";

import Heading from "@/components/common/heading";
import BlogCard from "@/components/ui/blog-card";

import { blogs } from "@/utils/blogs";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function BlogPage() {
  return (
    <div className="flex h-full flex-col items-center gap-10 px-0 py-4 md:px-4 md:py-10">
      <Heading type="secondary">Blogs</Heading>
      <section className="flex flex-col gap-6">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </section>
    </div>
  );
}
