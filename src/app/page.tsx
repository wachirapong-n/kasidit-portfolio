import { type SanityDocument } from "next-sanity";

import Card from "@/components/card";
import Container from "@/components/container";
import { client } from "@/sanity/client";
import Link from "next/link";
import { POSTS_QUERY } from "./server/queries/queries";

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  console.log(posts[1].description);
  return (
    <Container className="justify-center py-3 flex flex-col gap-4 items-center max-sm:px-0 ">
      {posts?.map((post) => (
        <div
          key={post._id}
          className="flex flex-col gap-y-4 w-full "
        >
          <Link href={`/${post.slug.current}`}>
            <Card
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
              arrow
            />
          </Link>
        </div>
      ))}
    </Container>
  );
}
