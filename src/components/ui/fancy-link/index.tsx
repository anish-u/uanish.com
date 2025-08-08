import Link from "next/link";

export interface FancyLinkProps {
  link: string;
  text: string;
}

export default function FancyLink({ link, text }: FancyLinkProps) {
  return (
    <Link href={link} className="group/link relative inline-block">
      <span className="text-xs font-bold md:text-sm">{text}</span>
      <span
        className="absolute bottom-0 left-1/2 h-[1px] w-[80%] -translate-x-1/2 scale-x-0 transform bg-current opacity-80 transition-transform duration-400 ease-in-out group-hover/link:scale-x-100"
        aria-hidden="true"
      />
    </Link>
  );
}
