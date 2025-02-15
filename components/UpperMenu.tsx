import Link from "next/link";
import NavLinks, { LinkItem } from "./NavLinks";
import Menu from "./Menu";

const UpperMenu = () => {
  const links: LinkItem[] = [
    { title: "Home", href: "/" },
    { title: "Photo", href: "/photo" },
    { title: "Video", href: "/video" },
    { title: "Contact", href: "/contact" },
  ];
  return (
    <div className="flex items-center justify-between px-4 md:px-14 py-4 md:py-6 border-b fixed top-0 w-full bg-white z-20">
      <Link href="/" className="text-md md:text-xl lg:text-2xl">
        Tishkevich Danila
      </Link>
      <NavLinks links={links} />
      <Menu />
    </div>
  );
};

export default UpperMenu;
