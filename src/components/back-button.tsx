"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="
        group inline-flex items-center gap-2
        px-4 py-2 rounded-xl
        bg-white/10 backdrop-blur-md
        border border-white/20
      text-black
        transition-all duration-300
        shadow-lg hover:shadow-xl
        w-30
        h-10
      "
    >
      <ChevronLeft
        className="
          w-5 h-5
          transition-transform duration-300
          group-hover:-translate-x-1
        "
      />
      <span className="font-medium">ย้อนกลับ</span>
    </button>
  );
}
