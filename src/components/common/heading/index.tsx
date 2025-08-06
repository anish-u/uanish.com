export type HeadingProps = {
  type: "primary" | "secondary";
  children: React.ReactNode;
};

export default function Heading({ type, children }: HeadingProps) {
  return (
    <h1
      className={`after:bg-grey-base mt-14 mb-10 h-fit text-center font-serif leading-11 font-bold text-wrap after:mx-auto after:mt-2 after:block after:h-0.5 after:w-16 after:content-[''] ${
        type === "primary" ? "text-4xl" : "text-3xl"
      }`}
    >
      {children}
    </h1>
  );
}
