import { Metadata } from "next";

import Heading from "@/components/common/heading";
import ExperienceCard from "@/components/ui/experience-card";

import { experience } from "@/utils/experience";

export const metadata: Metadata = {
  title: "Experience",
};

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center gap-10 px-0 py-4 md:px-4 md:py-10">
      <Heading type="secondary">Experience</Heading>
      <section className="flex flex-col gap-6">
        {experience.map((exp, index) => (
          <ExperienceCard
            index={index}
            experience={exp}
            key={`${exp.company}-${index}`}
          />
        ))}
      </section>
    </div>
  );
}
