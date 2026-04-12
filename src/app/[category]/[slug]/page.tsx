import { PortableText } from "next-sanity";

import { portableTextComponents } from "@/app/server/serializers/portableTextSerializer";
import Container from "@/components/container";
import { client } from "@/sanity/client";
import Link from "next/link";
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
    <Container className="justify-center ">
      <div className="min-h-screen w-full p-8 flex flex-col gap-4">
        <h1 className="text-4xl font-bold mb-8">{post?.title ?? ""}</h1>
        <div className="prose text-3xl">
          <PortableText
            value={post?.content}
            components={portableTextComponents}
          />
        </div>
      </div>
    </Container>
  );
}
