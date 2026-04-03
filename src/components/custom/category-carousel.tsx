import { Category } from "@/app/server/models/model-types";
import { CATEGOTY } from "@/app/server/queries/queries";
import CardLink from "@/components/card-link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { client } from "@/sanity/client";
import Container from "../container";
const options = { next: { revalidate: 30 } };
export default async function CategoryCarousel() {
  const categories = await client.fetch<Category[]>(CATEGOTY, {}, options);
  return (
    <Container className="pt-10 pb-15 gap-8 max-sm:px-0 flex-col items-center z-10 relative overflow-hidden">
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full mx-10 max-w-48 sm:max-w-xs lg:max-w-7xl"
      >
        <CarouselContent className="">
          {categories?.map((category) => (
            <CarouselItem
              key={category._id}
              className="sm:basis-1/2 lg:basis-1/3 basis-3xs"
            >
              <div className="px-0">
                <div
                  key={category._id}
                  className="flex flex-col max-w-400 items-center justify-center"
                >
                  <CardLink
                    title={category.title}
                    imageUrl={category.imageUrl ?? "/placeholder.png"}
                    arrow
                    linkUrl={category.slug.current}
                    className="flex aspect-square items-center justify-center p-6"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
}
