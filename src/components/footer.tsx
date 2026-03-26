import { FOOTER } from "@/app/server/queries/queries";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";

const options = { next: { revalidate: 30 } };

export default async function Footer() {
  const footer = await client.fetch<SanityDocument>(FOOTER, {}, options);
  const footerData = footer[0];
  return (
    <nav className="relative bg-primary text-[#E2E8F0] flex w-full py-3 px-5 sm:px-10 md:px-15 lg:px-20 justify-between">
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
    </nav>
  );
}
