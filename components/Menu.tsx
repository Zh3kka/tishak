import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const Menu = () => {
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Photo",
      href: "/photo",
    },
    {
      title: "Video",
      href: "/video",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div className="md:hidden block z-50">
      <Sheet>
        <SheetTrigger>
          <MenuIcon size={20} />
        </SheetTrigger>
        <SheetContent className="bg-white">
          <SheetHeader>
            <div className="flex flex-col items-center justify-center gap-y-8 mt-16">
              {links?.map((link: any) => (
                <SheetTitle key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm md:text-base lg:text-lg hover:text-slate-800/80 transition-all"
                  >
                    {" "}
                    {link.title}
                  </Link>
                </SheetTitle>
              ))}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Menu;
