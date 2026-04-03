import Container from "@/components/container";
import CategoryCarousel from "@/components/custom/category-carousel";
import { cn } from "@/libs/utils";
import { client } from "@/sanity/client";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { Profile } from "./server/models/model-types";
import { PROFILE } from "./server/queries/queries";
import { portableTextComponents } from "./server/serializers/portableTextSerializer";

const options = { next: { revalidate: 30 } };

export default async function Home() {
  const profile = await client.fetch<Profile>(PROFILE, {}, options);

  return (
    <>
      <Container className="pt-10 pb-15 gap-8 max-sm:px-0 flex-col items-center z-10">
        <div className="flex gap-8 ">
          <img
            src={profile.imageUrl}
            className={cn("object-cover max-h-175 w-full rounded-2xl ")}
          />
          <Image
            src="/glow.svg"
            objectFit="cover"
            alt=""
            width={400}
            height={400}
            className="absolute w-200 h-200 top-0 -left-24 -z-1"
          />

          <div className="flex flex-col gap-4 items-end justify-end text-white">
            <div className="prose text-3xl text-justify">
              <PortableText
                value={profile.introduction}
                components={portableTextComponents}
              />
            </div>
            <h2>{profile.name}</h2>
            <p>{profile.slogan}</p>
          </div>
        </div>
        <div className="w-3/4 mx-auto h-0.5 bg-white"></div>
      </Container>
      <CategoryCarousel />
    </>
  );
}
