import Image from "next/image";

export interface SkillIconProps {
  link: string;
  altName: string;
}

export default function SkillIcon({ link, altName }: SkillIconProps) {
  return (
    <Image
      width={36}
      height={36}
      src={link}
      className="cursor-pointer grayscale-70 transition-all duration-200 ease-in-out hover:grayscale-0"
      alt={altName}
    />
  );
}
