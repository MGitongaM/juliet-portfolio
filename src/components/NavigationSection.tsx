import { navigationEntries } from "@/constData/navigationSection";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import Link from "next/link";


export default function NavigationSection() {
  return (
    <>
    <nav className=" mx-auto px-4 py-2 sticky top-0 z-10 bg-[#8AB79C]">
        <NavigationMenu>
            <NavigationMenuList className="w-[95dvw] mx-auto flex flex-wrap md:flex-nowrap justify-center items-center gap-4">
                {navigationEntries.map((entry)=>(
                    <NavigationMenuItem key={entry.id}>
                        <NavigationMenuLink asChild>
                            <Link href={entry.link} className="text- font-semibold hover:bg-white">{entry.name}</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    </nav>
    </>
  )
}
