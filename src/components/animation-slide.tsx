"use client";
import { motion } from "framer-motion";
import React from "react";

interface AnimationSlideProp {
  children: React.ReactNode;
  className?: string;
  start: string | number;
  end? : string | number;
}

export default function AnimationSlide({
  children,
  className,
  start,
  end = 0
}: AnimationSlideProp) {
  return (
    <motion.div
      initial={{ opacity: 0, x: start }}
      animate={{ opacity: 1, x: end }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
