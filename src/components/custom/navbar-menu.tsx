"use client";

import { cn, urlFor } from "@/libs/utils";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavbarMenuProps {
  logo: SanityDocument[];
  websiteName: string;
  navData: SanityDocument[];
}
export default function NavbarMenu({
  logo,
  websiteName,
  navData,
}: NavbarMenuProps) {
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = () => setOpen(null);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <div className="flex flex-1 gap-5 items-center relative z-10">
        <div className="flex">
          <Link href={`/`}>
            <img
              src={urlFor(logo).url()}
              className="object-cover h-8 w-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12"
              alt="logo"
            />
          </Link>
        </div>
        <Link href={`/`}>
          <div className="items-center gap-1 font-medium transition-colors py-2 xl:text-lg 2xl:text-xl group-hover/nav:text-primary hover:underline">
            {websiteName}
          </div>
        </Link>
      </div>
      <div className="hidden xl:flex gap-5 justify-end xl:text-lg 2xl:text-xl items-center">
        <Link href={`/`} className="font-medium transition-colors">
          <div className="items-center gap-1 font-medium group-hover/nav:text-primary relative z-10 hover:underline px-2">
            หน้าแรก
          </div>
        </Link>
        {navData?.map((category) => (
          <div
            key={category._id}
            className="group relative flex items-center h-full group-hover/nav:text-primary hover:underline px-2"
          >
            <Link
              href={`/${category.slug.current}`}
              onClick={(e) => {
                if (window.innerWidth < 1280) {
                  e.preventDefault();
                  e.stopPropagation();
                  setOpen(open === category._id ? null : category._id);
                }
              }}
              className="flex items-center gap-1 font-medium transition-colors "
            >
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
            </Link>
            <div
              className={cn(
                "absolute z-50 right-0 top-full w-48 rounded-lg border border-gray-100 bg-white p-2 shadow-xl ",
                "hidden xl:group-hover:block",
                open === category._id && "block xl:hidden",
              )}
            >
              {category.posts && category.posts.length > 0 ? (
                category.posts.map((post: any) => (
                  <Link
                    key={post.slug}
                    href={`/${category.slug.current}/${post.slug}`}
                    className="block rounded-md px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:underline"
                    onClick={() => setOpen(null)}
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
    </>
  );
}
