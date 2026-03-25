import { PortableText, type SanityDocument } from "next-sanity";

import { portableTextComponents } from "@/components/portableTextComponents";
import { client } from "@/sanity/client";
import Link from "next/link";
import { Image } from "../server/models/model-types";

const POST_QUERY = `*[_type == "post" && _id == $slug][0]{ _id, title, slug, body, images[]{ "url": asset->url, alt } }`;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options,
  );

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

      {post.images?.map((imageUrl: Image, index: number) => (
        <div key={index}>
          <img
            src={imageUrl.url ?? ""}
            alt={imageUrl.alt ?? ""}
            className="aspect-video rounded-xl object-cover"
          />
        </div>
      ))}
      <div className="prose">
        <PortableText value={post.body} components={portableTextComponents} />
      </div>
    </main>
  );
}
