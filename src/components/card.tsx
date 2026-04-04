import { cn } from "@/libs/utils";

export interface CardProps {
  title: string;
  imageUrl: string;
  description?: string;
  className?: string;
  arrow?: boolean;
  titleOntop?: boolean;
}

export default function Card({
  title,
  imageUrl,
  description,
  className,
  titleOntop = true,
}: CardProps) {
  const contentSection = (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-2 justify-center">
        <h2
          className={cn(
            "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold",
            "bg-primary px-10 py-3 text-white rounded-[45px] xl:shadow-xl/20 shadow-lg",
            "group-hover:text-primary group-hover:bg-white transition-all duration-300",
            "max-w-full wrap-break-words text-center",
          )}
          
          style={{ display: "table", width: "auto" }}
        >
          {title}
        </h2>
        {description && (
          <p className="text-xs md:text-base lg:text-xl xl:text-2xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
  return (
    <div
      className={cn(
        "relative mx-auto min-w-60 max-w-7xl flex flex-col p-2 md:p-6 rounded-3xl w-full h-full gap-5 bg-secondary transition-all duration-300 ease-out hover:scale-105 hover:z-50",
        className,
      )}
    >
      {titleOntop && contentSection}
      <div className="overflow-hidden rounded-2xl grow flex justify-center items-end">
        <img
          src={imageUrl}
          className={cn("object-cover 2xl:object-contain min-h-30 h-full w-full rounded-2xl")}
        />
      </div>

      {!titleOntop && contentSection}
    </div>
  );
}
