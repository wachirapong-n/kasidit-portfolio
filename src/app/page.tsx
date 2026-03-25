import { PortableText, type SanityDocument } from "next-sanity";
import Link from "next/link";

import Container from "@/components/container";
import { portableTextComponents } from "@/components/portableTextComponents";
import { client } from "@/sanity/client";
import { POSTS_QUERY } from "./server/queries/queries";

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <Container className="justify-center py-0">
      <main className="relative p-8">
        <ul className="flex flex-col gap-y-4">
          {posts?.map((post) => (
            <li key={post._id}>
              <Link href={`/${post.slug.current}`}>
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
