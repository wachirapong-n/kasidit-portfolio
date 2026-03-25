import { cn } from "@/libs/utils";

type ContainterProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainterProps) {
  return (
    <div className={cn("flex w-full px-25 py-3 ", className)}>{children}</div>
  );
}
