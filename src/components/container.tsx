import { cn } from "@/libs/utils";

type ContainterProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainterProps) {
  return (
    <div
      className={cn(
        "flex w-full py-3 sm:px-10 md:px-15 lg:px-18 xl:px-25 min-w-full px-5 overflow-x-hidden pt-26",
        className,
      )}
    >
      {children}
    </div>
  );
}
