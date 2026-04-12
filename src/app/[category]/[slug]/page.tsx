import { PortableText } from "next-sanity";

import { portableTextComponents } from "@/app/server/serializers/portableTextSerializer";
import Container from "@/components/container";
import { client } from "@/sanity/client";
import { POST } from "../../server/queries/queries";

const options = { next: { revalidate: 30 } };

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const decodedSlug = decodeURIComponent(slug);
  const post = await client.fetch(POST, { slug: decodedSlug }, options);

  return (
    <Container className="justify-center max-sm:px-6 pb-15">
      <div className="min-h-screen w-full xl:p-8 flex flex-col gap-4">
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-primary tracking-tight">
          {post?.title ?? ""}
        </h1>
        <div className="prose ">
          <PortableText
            value={post?.content}
            components={portableTextComponents}
          />
        </div>
      </div>
    </Container>
  );
}
