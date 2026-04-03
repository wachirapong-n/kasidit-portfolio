import { cn } from "@/libs/utils";

export interface CardProps {
  title: string;
  imageUrl: string;
  description?: string;
  className?: string;
  arrow?: boolean;
}

export default function Card({
  title,
  imageUrl,
  description,
  className,
  arrow = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "mx-auto min-w-60 max-w-7xl flex flex-col p-4 md:p-6 rounded-3xl w-full gap-5 transition-all duration-300 bg-surface border border-gray-200 shadow-xl hover:bg-blue-50 hover:scale-105",
        className,
      )}
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 justify-center">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
            {title}
          </h2>
          {description && (
            <p className="text-xs md:text-base lg:text-xl xl:text-2xl">
              {description}
            </p>
          )}
        </div>
        {arrow && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right stroke-black stroke-[1px]"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        )}
      </div>

      <div className="overflow-x-hidden rounded-2xl ">
        <img
          src={imageUrl}
          className={cn("object-cover min-h-30 max-h-150 w-full rounded-2xl")}
        />
      </div>
    </div>
  );
}
