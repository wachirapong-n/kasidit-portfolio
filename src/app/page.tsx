import { type SanityDocument } from "next-sanity";

import CardLink from "@/components/card-link";
import Container from "@/components/container";
import { client } from "@/sanity/client";
import { POSTS_QUERY } from "./server/queries/queries";

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  return (
    <Container className="justify-center pt-10 pb-15 flex flex-col gap-8 items-center max-sm:px-0 overflow-hidden ">
      {posts?.map((post) => (
        <div key={post._id} className="flex flex-col w-full">
          <CardLink
            title={post.title}
            description={post.description}
            imageUrl={post.imageUrl}
            arrow
            linkUrl={post.slug.current}
          />
        </div>
      ))}
    </Container>
  );
}
