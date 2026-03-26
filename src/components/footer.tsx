import { FOOTER } from "@/app/server/queries/queries";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import Container from "./container";

const options = { next: { revalidate: 30 } };

export default async function Footer() {
  const footer = await client.fetch<SanityDocument>(FOOTER, {}, options);
  const footerData = footer[0];
  return (
    <Container className="bg-[#171717] text-lg text-white">
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
