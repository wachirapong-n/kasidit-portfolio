"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300); // ปรับระยะได้
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50
        p-3 rounded-full
        bg-white/10 
        border border-white/20
        text-black
        shadow-lg
        transition-all duration-300
        hover:bg-white hover:scale-110
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}
      `}
    >
      <ChevronUp className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" />
    </button>
  );
}
