import { LOGO, NAV_QUERY, WEBSITE_NAME } from "@/app/server/queries/queries";
import { urlFor } from "@/libs/utils";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import NavbarBurger from "./navbar-burger";

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
    <nav className="relative bg-nav-bg-primary items-center text-nav-text-primary flex w-full py-3 px-5 sm:px-10 md:px-15 lg:px-20 justify-between z-50">
      <div className="flex flex-1 gap-5 items-center">
        <div className="flex">
          <Link href={`/`}>
            <img
              src={urlFor(logo[0].logo).url()}
              className="object-cover h-8 w-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12"
              alt="logo"
            />
          </Link>
        </div>
        <Link href={`/`}>
          <div className="items-center gap-1 font-medium hover:text-accent transition-colors py-2 xl:text-lg 2xl:text-xl">
            {webName[0].websiteName}
          </div>
        </Link>
      </div>
      <div className="hidden md:flex flex-1 gap-5 justify-end xl:text-lg 2xl:text-xl">
        <Link
          href={`/`}
          className="font-medium hover:text-accent transition-colors"
        >
          <div className="items-center gap-1 font-medium py-2">หน้าแรก</div>
        </Link>
        {navQuery?.map((category) => (
          <div
            key={category._id}
            className="group relative flex items-center h-full"
          >
            <button className="flex items-center gap-1 font-medium hover:text-accent transition-colors py-2">
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
            <div className="absolute z-50 right-0 top-full hidden w-48 rounded-lg border border-gray-100 bg-white p-2 shadow-xl group-hover:block">
              {category.posts && category.posts.length > 0 ? (
                category.posts.map((post: any) => (
                  <Link
                    key={post.slug}
                    href={`/${post.slug}`}
                    className="block rounded-md px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-accent"
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
      <NavbarBurger navQuery={navQuery} />
    </nav>
  );
}
