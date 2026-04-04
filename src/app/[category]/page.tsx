import Container from "@/components/container";
import CardLink from "@/components/custom/card-link";
import { client } from "@/sanity/client";
import Link from "next/link";
import { PostCategory } from "../server/models/model-types";
import { CURRENT_CATEGORY, POST_CATEGORY } from "../server/queries/queries";

const options = { next: { revalidate: 30 } };

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = await params;
  const category = resolvedParams.category;
  const decodedSlug = decodeURIComponent(category);
  const posts = await client.fetch<PostCategory[]>(
    POST_CATEGORY,
    { category: decodedSlug },
    options,
  );
  const categoryName = await client.fetch<String>(
    CURRENT_CATEGORY,
    { category: decodedSlug },
    options,
  );
  return (
    <Container className="justify-center pt-10 pb-15 gap-8 max-sm:px-0 flex-col">
      <Link href="/" className="hover:underline">
        ← ย้อนกลับ
      </Link>
      <h1 className="text-6xl font-bold text-center">{categoryName}</h1>
      {posts.map((post) => (
        <div key={post._id} className="w-full flex flex-col gap-4">
          <CardLink
            title={post.title}
            imageUrl={post.imageUrl}
            description={post.description}
            linkUrl={`${category}/${post.slug.current}`}
          />
        </div>
      ))}
    </Container>
  );
}
