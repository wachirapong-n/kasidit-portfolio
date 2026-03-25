import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ol5ryc5q",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
