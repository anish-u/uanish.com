export interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <span className="text-black-base dark:text-black-base bg-grey-base/40 dark:bg-white-base/90 inset-ring-grey-base/10 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium inset-ring">
      {text}
    </span>
  );
}
