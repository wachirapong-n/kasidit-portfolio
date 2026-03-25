import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import Container from "./container";

const POST_QUERY = `*[_type == "footer"]`;

export default async function Footer() {
  const footer = await client.fetch<SanityDocument>(POST_QUERY);
  const footerData = footer[0];
  return (
    <Container className="bg-red-200 justify-between text-lg">
      <div className="flex flex-col w-full">
        <p>{footerData.name}</p>
        <p>{footerData.addition}</p>
        <p>{footerData.adress}</p>
      </div>
      <div className="flex flex-col w-full">
        <p>{footerData.email}</p>
        <p>{footerData.line}</p>
        <p>{footerData.tel}</p>
      </div>
    </Container>
  );
}
