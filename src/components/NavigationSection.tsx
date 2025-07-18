import { navigationEntries } from "@/constData/navigationSection";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { MenuIcon } from "lucide-react";

export default function NavigationSection() {
  return (
    <>
      <nav className=" mx-auto px-4 py-2 sticky top-0 z-10 bg-[#8AB79C]">
        <NavigationMenu>
          <NavigationMenuList className="w-[95dvw] mx-auto hidden md:flex flex-wrap md:flex-nowrap justify-center items-center gap-4">
            {navigationEntries.map((entry) => (
              <NavigationMenuItem key={entry.id}>
                <NavigationMenuLink asChild>
                  <Link
                    href={entry.link}
                    className="text- font-semibold hover:bg-white"
                  >
                    {entry.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          <NavigationMenuList className="block md:hidden">
            <div className="w-[95dvw] flex justify-end">
              {/* <div className="font-bold">Juliet</div> */}
              <Sheet>
                <SheetTrigger>
                  <MenuIcon size={20} className="" />
                </SheetTrigger>
                <SheetContent side="top">
                  <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription></SheetDescription>
                  </SheetHeader>
                  <div className="px-8 list-none space-y-4">
                    {navigationEntries.map((entry) => (
                      <NavigationMenuItem key={entry.id}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={entry.link}
                            className="text- font-semibold hover:bg-white "
                          >
                            {entry.name}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </>
  );
}
