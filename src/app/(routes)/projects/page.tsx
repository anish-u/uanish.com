import { Metadata } from "next";

import Heading from "@/components/common/heading";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center gap-10 px-0 py-4 md:px-4 md:py-10">
      <Heading type="secondary">Projects</Heading>
    </div>
  );
}
