import { Category } from "@/app/server/models/model-types";
import { CATEGOTY } from "@/app/server/queries/queries";
import CardLink from "@/components/custom/card-link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/libs/utils";
import { client } from "@/sanity/client";
import Container from "../container";

const options = { next: { revalidate: 30 } };

export default async function CategoryCarousel({
  children,
}: {
  children?: React.ReactNode;
}) {
  const categories = await client.fetch<Category[]>(CATEGOTY, {}, options);
  return (
    <Container className="pt-10 md:pt-11 lg:pt-13 2xl:pt-15 pb-15 gap-4 sm:gap-6 md:gap-8 2xl:gap-12 max-sm:px-5 flex-col items-center z-10 relative overflow-visible">
      {children}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full border-5 sm:p-2 md:p-4 lg:p-6 xl:p-10 rounded-[60px] border-secondary lg:overflow-visible overflow-hidden max-w-400"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {categories?.map((category) => (
            <CarouselItem
              key={category._id}
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 xl:basis-1/3 flex justify-center"
            >
              <div
                key={category._id}
                className="flex flex-col max-w-400 items-center justify-center p-2.5"
              >
                <CardLink
                  title={category.title}
                  imageUrl={category.imageUrl ?? "/placeholder.png"}
                  linkUrl={category.slug.current}
                  className="flex aspect-square items-center justify-center rounded-[45px] hover:bg-primary "
                  titleOntop={false}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-4 mb-2 sm:mb-0 xl:static">
          <CarouselPrevious
            className={cn(
              "static translate-y-0",
              "xl:absolute xl:-left-16 xl:top-1/2 xl:-translate-y-1/2",
              "bg-secondary hover:bg-white transition-all duration-300",
              "border border-transparent hover:border-primary",
              "[&_svg]:text-white hover:[&_svg]:text-primary",
            )}
            size={"icon-lg"}
          />
          <CarouselNext
            className={cn(
              "static translate-y-0",
              "xl:absolute xl:-right-16 xl:top-1/2 xl:-translate-y-1/2",
              "bg-secondary hover:bg-white transition-all duration-300",
              "border border-transparent hover:border-primary",
              "[&_svg]:text-white hover:[&_svg]:text-primary",
            )}
            size={"icon-lg"}
          />
        </div>
      </Carousel>
    </Container>
  );
}
