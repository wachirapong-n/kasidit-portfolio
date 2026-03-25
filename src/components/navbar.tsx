import { LOGO, NAV_QUERY, WEBSITE_NAME } from "@/app/server/queries/queries";
import { urlFor } from "@/libs/utils";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import Link from "next/link";

import Container from "./container";

const options = { next: { revalidate: 30 } };

export default async function Navbar() {
  const logo = await client.fetch<SanityDocument[]>(LOGO, {}, options);
  const webName = await client.fetch<SanityDocument[]>(
    WEBSITE_NAME,
    {},
    options,
  );
  const navQuery = await client.fetch<SanityDocument[]>(NAV_QUERY, {}, options);

  return (
    <Container className="bg-red-200 items-center">
      <div className="flex w-full gap-5 items-center">
        <div className="flex w-8 h-8">
          <Link href={`/`}>
            <img
              src={urlFor(logo[0].logo).url()}
              className="object-cover h-full w-full"
            />
          </Link>
        </div>
        <Link href={`/`}>
          <div className="items-center gap-1 font-medium text-gray-700 hover:text-blue-600 transition-colors py-2">
            {webName[0].websiteName}
          </div>
        </Link>
      </div>
      <div className="flex w-full gap-5 justify-end">
        <Link
          href={`/`}
          className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
        >
          <div className="items-center gap-1 font-medium text-gray-700 hover:text-blue-600 transition-colors py-2">
            หน้าแรก
          </div>
        </Link>
        {navQuery?.map((category) => (
          <div
            key={category._id}
            className="group relative flex items-center h-full"
          >
            <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-600 transition-colors py-2">
              {category.title}
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute right-0 top-full hidden w-48 rounded-lg border border-gray-100 bg-white p-2 shadow-xl group-hover:block z-50">
              {category.posts && category.posts.length > 0 ? (
                category.posts.map((post: any) => (
                  <Link
                    key={post.slug}
                    href={`/${post.slug}`}
                    className="block rounded-md px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {post.title}
                  </Link>
                ))
              ) : (
                <span className="block px-4 py-2 text-xs text-gray-400 italic">
                  ไม่มีเนื้อหา
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
