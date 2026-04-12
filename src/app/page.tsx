import AnimationSlide from "@/components/animation-slide";
import Container from "@/components/container";
import CategoryCarousel from "@/components/custom/category-carousel";
import { cn } from "@/libs/utils";
import { client } from "@/sanity/client";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { HomeCategory, Profile } from "./server/models/model-types";
import { HOME_CATEGORY, PROFILE } from "./server/queries/queries";
import { portableTextComponents, portableTextIntroduction } from "./server/serializers/portableTextSerializer";

const options = { next: { revalidate: 30 } };

export default async function Home() {
  const [profile, homeCategory] = await Promise.all([
    client.fetch<Profile>(PROFILE, {}, options),
    client.fetch<HomeCategory>(HOME_CATEGORY, {}, options),
  ]);
  return (
    <>
      <Container className="pb-15 gap-8 max-sm:px-0 flex-col items-center z-10 bg-[linear-gradient(90deg,rgba(10,31,68,1)_0%,rgba(26,27,30,1)_100%)]">
        <div className="flex gap-4 sm:gap-4 2xl:gap-30 justify-between w-full mx-auto container flex-col xl:flex-row xl:gap-15">
          <AnimationSlide start="-100%" className="flex justify-center">
            <img
              src={profile.imageUrl}
              className={cn(
                "xl:max-h-150 object-contain rounded-2xl h-auto max-h-90 md:max-h-110 lg:max-h-125 2xl:max-h-175",
                "drop-shadow-[0_0_60px_rgba(111,153,223,1)] hover:scale-105 transition-all",
              )}
            />
          </AnimationSlide>
          <AnimationSlide start={"100%"} className="flex-1 w-full">
            <div className="flex flex-col gap-4 items-end justify-end text-white w-full max-sm:px-5">
              <div className="gap-0 relative flex flex-col">
                <div className="w-7 h-7 sm:h-10 sm:w-10 lg:h-12 lg:w-12 xl:w-18 xl:h-18 flex items-end self-start">
                  <img src="/quote.svg" className="object-cover" />
                </div>
                <div className="prose xl:text-justify drop-shadow-[0_0_5px_rgba(255,255,255,1)] text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
                  <PortableText
                    value={profile.introduction}
                    components={portableTextIntroduction}
                  />
                </div>
                <div className="w-7 h-7 sm:h-10 sm:w-10 lg:h-12 lg:w-12 xl:w-18 xl:h-18 flex rotate-180 items-end justify-end self-end ">
                  <img src="/quote.svg" className="object-cover" />
                </div>
              </div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
                {profile.slogan}
              </p>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
                {profile.name}
              </h2>
            </div>
          </AnimationSlide>
        </div>
        <div className="w-3/4 mx-auto h-0.5 bg-white"></div>
      </Container>
      <CategoryCarousel>
        <div className="relative flex items-center justify-center w-full">
          <div className="absolute z-0 w-60 -top-8 sm:-top-9 md:w-70 md:-top-10 lg:w-80 lg:-top-11 2xl:w-100 2xl:-top-13">
            <Image
              src="/home-category.svg"
              className="object-contain w-full"
              alt=""
              width={350}
              height={150}
            />
          </div>
          <div className="relative z-10 bg-white rounded-2xl px-2 uppercase">
            <h2
              className={cn(
                "text-[36px] sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl",
                "text-primary text-center font-semibold tracking-tight ",
              )}
            >
              {homeCategory.name}
            </h2>
          </div>
        </div>
      </CategoryCarousel>
    </>
  );
}
