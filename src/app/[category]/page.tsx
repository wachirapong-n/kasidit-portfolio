import BackButton from "@/components/back-button";
import Container from "@/components/container";
import CardLink from "@/components/custom/card-link";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { client } from "@/sanity/client";
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
  const [posts, categoryName] = await Promise.all([
    client.fetch<PostCategory[]>(
      POST_CATEGORY,
      { category: decodedSlug },
      options,
    ),
    client.fetch<String>(CURRENT_CATEGORY, { category: decodedSlug }, options),
  ]);
  return (
    <Container className="justify-center pb-15 gap-4 xl:gap-8 max-sm:px-4 flex-col relative z-0 ">
      <BackButton />
      <h1 className="font-bold text-center text-[36px] sm:text-4xl md:text-5xl lg:text-6xl text-primary tracking-tight">
        {categoryName}
      </h1>
      {posts.map((post) => (
        <div key={post._id} className="w-full flex flex-col gap-4">
          <CardLink
            title={post.title}
            imageUrl={post.imageUrl}
            description={post.description}
            linkUrl={`${category}/${post.slug.current}`}
            className="hover:scale-102 max-h-300 hover:z-4 items-center"
          />
        </div>
      ))}
      <ScrollToTopButton />
    </Container>
  );
}
