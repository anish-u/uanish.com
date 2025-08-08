import Image from "next/image";
import Link from "next/link";

import { Blog } from "@/interfaces/blog";

export interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="group relative z-10 font-serif">
      <Link href={blog.link} target="_blank">
        <div className="border-black-base dark:border-white-base bg-white-base dark:bg-black-base relative z-20 flex h-full flex-col gap-2 rounded-md border transition-transform duration-200 ease-out group-hover:-translate-x-0.75 group-hover:-translate-y-0.75">
          <div className="relative h-52 w-full overflow-hidden md:h-64">
            <Image
              width={400}
              height={400}
              src={blog.coverImage}
              alt={blog.title}
              className="h-full w-full rounded-t-md object-cover grayscale-95 transition-all duration-300 ease-in-out group-hover:grayscale-70"
            />
          </div>
          <div className="flex flex-col gap-6 px-7 pt-4 pb-7">
            <h3 className="text-lg font-semibold md:text-xl">{blog.title}</h3>
            <p className="text-xs leading-relaxed text-black/80 md:text-sm dark:text-white/80">
              {blog.description}
            </p>
          </div>
        </div>
        <div className="border-black-base/80 bg-black-base/50 dark:bg-grey-base/50 absolute top-0 left-0 z-10 h-full w-full rounded-md border transition-transform duration-200 ease-out group-hover:translate-x-0.75 group-hover:translate-y-0.75 dark:border-white" />
      </Link>
    </div>
  );
}
