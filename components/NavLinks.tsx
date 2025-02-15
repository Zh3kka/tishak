import Link from "next/link";
import { FC } from "react";

export interface LinkItem {
  title: string;
  href: string;
}

interface NavLinksProps {
  links: LinkItem[];
}

const NavLinks: FC<NavLinksProps> = ({ links }) => (
  <div className="md:flex items-center gap-x-12 hidden uppercase">
    {links.map((link) => (
      <Link
        href={link.href}
        key={link.title}
        className="text-sm md:text-base lg:text-lg hover:text-slate-800/80 transition-all"
      >
        {link.title}
      </Link>
    ))}
  </div>
);

export default NavLinks;
