import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

import { client } from "@/sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
