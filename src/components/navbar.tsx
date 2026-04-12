import { LOGO, NAV_QUERY, WEBSITE_NAME } from "@/app/server/queries/queries";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import NavbarBurger from "./custom/navbar-burger";
import NavbarMenu from "./custom/navbar-menu";

const options = { next: { revalidate: 30 } };

export default async function Navbar() {
  const [logo, webName, navQuery] = await Promise.all([
    client.fetch<SanityDocument[]>(LOGO, {}, options),
    client.fetch<SanityDocument[]>(WEBSITE_NAME, {}, options),
    client.fetch<SanityDocument[]>(NAV_QUERY, {}, options),
  ]);

  return (
    <>
      <nav
        className="fixed bg-linear-to-b from-primary group/nav items-center flex text-white
    w-full py-6 px-5 sm:px-10 md:px-15 lg:px-20 justify-between z-50 top-0 "
      >
        <div
          className="absolute top-0 bottom-3 left-0 w-1/2 origin-left skew-x-25 rounded-bl-[15px]
  border-[5px] border-r-0 border-white bg-white z-0
  scale-x-0 opacity-0
  transition-all duration-500 ease-out
  group-hover/nav:scale-x-[1.05] group-hover/nav:opacity-100"
        />

        <div
          className="absolute top-0 right-0 bottom-3 w-1/2 origin-right -skew-x-25 rounded-br-[15px]
  border-[5px] border-l-0 border-white bg-white z-0
  scale-x-0 opacity-0
  transition-all duration-500 ease-out
  group-hover/nav:scale-x-[1.05] group-hover/nav:opacity-100"
        />
        <NavbarMenu
          logo={logo[0].logo}
          websiteName={webName[0].websiteName}
          navData={navQuery}
        />
        <NavbarBurger navQuery={navQuery} />
      </nav>
    </>
  );
}
