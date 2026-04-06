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
    <div className="">
      <nav
        className="fixed bg-linear-to-b from-primary group/nav items-center flex text-white
    w-full py-6 px-5 sm:px-10 md:px-15 lg:px-20 justify-between z-50 top-0 "
      >
        <div
          className="absolute top-0 bottom-3 left-0 w-1/2 origin-top skew-x-25 transform rounded-bl-[15px] border-[5px] border-r-0 border-white 
      bg-white hidden group-hover/nav:inline-block z-0 "
        ></div>
        <div
          className="absolute top-0 right-0 bottom-3 w-1/2 origin-top -skew-x-25 transform rounded-br-[15px] border-[5px] border-l-0 border-white
       bg-white hidden group-hover/nav:inline-block z-0"
        ></div>
        <NavbarMenu
          logo={logo[0].logo}
          websiteName={webName[0].websiteName}
          navData={navQuery}
        />
        <NavbarBurger navQuery={navQuery} />
      </nav>
    </div>
  );
}
