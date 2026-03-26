import { cn } from "@/libs/utils";

type ContainterProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainterProps) {
  return (
    <div
      className={cn(
        "flex w-full py-3 sm:px-15 md:px-20 lg:px-25 min-w-full px-5 overflow-x-hidden",
        className,
      )}
    >
      {children}
    </div>
  );
}
