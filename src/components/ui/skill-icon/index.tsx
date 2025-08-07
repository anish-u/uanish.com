import Image from "next/image";

export interface SkillIconProps {
  link: string;
  altName: string;
}

export default function SkillIcon({ link, altName }: SkillIconProps) {
  return (
    <Image
      width={40}
      height={40}
      src={link}
      className="dark:bg-white-base bg-black-light/10 cursor-pointer rounded p-1 grayscale-50 transition-all duration-200 ease-in-out hover:grayscale-0 dark:grayscale-50"
      alt={altName}
    />
  );
}
