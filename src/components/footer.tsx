import { FOOTER, LOGO } from "@/app/server/queries/queries";
import { urlFor } from "@/libs/utils";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

const options = { next: { revalidate: 30 } };

export default async function Footer() {
  const footer = await client.fetch<SanityDocument>(FOOTER, {}, options);
  const logo = await client.fetch<SanityDocument>(LOGO, {}, options);
  const footerData = footer[0];
  return (
    <nav className="bg-nav-bg-primary text-nav-text-primary flex flex-col md:flex-row w-full py-3 px-5 sm:px-10 md:px-15 lg:px-20 gap-2 lg:gap-2">
      <div className="flex items-center pr-4 ">
        <Link href={`/`}>
          <img
            src={urlFor(logo[0].logo).url()}
            className="object-cover h-8 w-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12"
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex flex-col md:flex-1 gap-2 xl:text-xl 2xl:text-2xl">
        <p>{footerData.name}</p>
        <p>{footerData.addition}</p>
        <p>{footerData.adress}</p>
      </div>
      <div className="gap-2 flex flex-col lg:flex-row lg:justify-between lg:max-w-120 xl:max-w-150 2xl:max-w-200 lg:w-full">
        <div className="flex gap-2 items-center xl:text-xl 2xl:text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-envelope lg:w-6 lg:h-6"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
          </svg>
          <p>{footerData.email}</p>
        </div>
        <div className="flex gap-2 items-center xl:text-xl 2xl:text-2xl">
          <Image
            src="/line-logo.svg"
            alt=""
            width={16}
            height={16}
            className="object-center brightness-0 invert lg:w-6 lg:h-6"
          />
          <p>{footerData.line}</p>
        </div>
        <div className="flex gap-2 items-center xl:text-xl 2xl:text-2xl">
          <Image
            src="/phone.svg"
            alt=""
            width={16}
            height={16}
            className="object-center brightness-0 invert lg:w-6 lg:h-6"
          />
          <p>{footerData.tel}</p>
        </div>
      </div>
    </nav>
  );
}
