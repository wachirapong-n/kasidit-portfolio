"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavbarBurger({ navQuery }: { navQuery: any[] }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="xl:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full w-full bg-[#171717] border-t border-gray-800 p-5 flex flex-col gap-4 z-50">
          <Link
            href="/"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            หน้าแรก
          </Link>
          {navQuery?.map((category) => (
            <div key={category._id} className="flex flex-col gap-2">
              <div className="text-gray-400 text-sm font-bold uppercase">
                {category.title}
              </div>
              <div className="pl-4 flex flex-col gap-2">
                {category.posts?.map((post: any) => (
                  <Link
                    key={post.slug}
                    href={`/${post.slug}`}
                    className="text-sm hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {post.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
