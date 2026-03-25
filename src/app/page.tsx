import { PortableText, type SanityDocument } from "next-sanity";
import Link from "next/link";

import Container from "@/components/container";
import { portableTextComponents } from "@/components/portableTextComponents";
import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  ]|order(publishedAt desc){_id, title, "imageUrl": image.asset->url, descripion}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <Container>
      <main className="container mx-auto min-h-screen max-w-3xl p-8">
        <ul className="flex flex-col gap-y-4">
          {posts.map((post) => (
            <li key={post._id}>
              <Link href={`/${post._id}`}>
                <h2 className="text-xl font-semibold hover:underline">
                  {post.title}
                </h2>
              </Link>
              <img src={post.imageUrl} />
              <div className="prose">
                <PortableText
                  value={post.descripion}
                  components={portableTextComponents}
                />
              </div>
            </li>
          ))}
        </ul>
      </main>
    </Container>
  );
}
