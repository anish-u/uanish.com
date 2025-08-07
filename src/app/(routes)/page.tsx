import Heading from "@/components/common/heading";
import ContactSection from "@/components/home/contact-section";
import IntroSection from "@/components/home/intro-section";
import ProjectSection from "@/components/home/project-section";
import SkillsSection from "@/components/home/skills-section";

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center gap-4 px-0 py-4 md:gap-10 md:px-4 md:py-10">
      <Heading type="primary">Hey, I&apos;m Anish Ummenthala.</Heading>
      <ContactSection />
      <IntroSection />
      <Heading type="secondary">Recent Projects</Heading>
      <ProjectSection />
      <Heading type="secondary">Technical Skills</Heading>
      <SkillsSection />
    </div>
  );
}
