"use client";

import { cn, urlFor } from "@/libs/utils";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavbarMenuProps {
  logo: SanityDocument[];
  websiteName: string;
  navData: SanityDocument[];
}

type UnderlineProps = {
  classNameLine?: string;
};

export default function NavbarMenu({
  logo,
  websiteName,
  navData,
}: NavbarMenuProps) {
  const [open, setOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const Underline = ({ classNameLine }: UnderlineProps) => {
    return (
      <span
        className={cn(
          `absolute left-0 -bottom-1 h-0.5 w-full bg-current scale-x-0 origin-left transition-transform duration-300 ease-out group-hover/text:scale-x-100`,
          classNameLine,
        )}
      />
    );
  };
  useEffect(() => {
    const handleClickOutside = () => setOpen(null);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <div className="flex flex-1 gap-5 items-center relative z-10">
        <Link href={`/`}>
          <img
            src={urlFor(logo).url()}
            className="object-cover h-8 w-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12"
            alt="logo"
          />
        </Link>
        <Link href={`/`} className="font-medium group/text">
          <div className="relative inline-block items-center gap-1 font-medium transition-colors py-2 xl:text-lg 2xl:text-xl group-hover/nav:text-primary ">
            {websiteName}
            <Underline />
          </div>
        </Link>
      </div>
      <div className="hidden xl:flex gap-5 justify-end xl:text-lg 2xl:text-xl items-center">
        <Link href={`/`} className="font-medium group/text">
          <div
            className={cn("relative inline-block group-hover/nav:text-primary")}
          >
            หน้าแรก
            <Underline
              classNameLine={pathname === "/" ? "bg-blue-600 scale-x-100" : ""}
            />
          </div>
        </Link>
        {navData?.map((category) => {
          const isActive = pathname.startsWith(`/${category.slug.current}`);
          return (
            <div
              key={category._id}
              className={cn(
                "group relative flex items-center h-full group-hover/nav:text-primary px-2 ",
              )}
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
                className="flex items-center gap-1 font-medium transition-colors"
              >
                <span className="relative inline-block group">
                  {category.title}
                  <Underline
                    classNameLine={
                      isActive
                        ? "bg-blue-600 scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }
                  />
                </span>

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
              <div className="absolute left-0 top-full w-full h-4" />
              <div
                className={cn(
                  "absolute z-50 right-0 top-full translate-y-4 w-70 rounded-lg border border-gray-100 bg-white p-2 shadow-xl",
                  "hidden xl:group-hover:block",
                  open === category._id && "block xl:hidden",
                )}
              >
                {category.posts && category.posts.length > 0 ? (
                  category.posts.map((post: any) => (
                    <Link
                      key={post.slug}
                      href={`/${category.slug.current}/${post.slug}`}
                      className="block rounded-md px-4 py-2 text-lg text-gray-600 hover:bg-blue-50 hover:underline"
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
          );
        })}
      </div>
    </>
  );
}
