"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavMenu() {
  const currentURL = usePathname();
  console.log(currentURL);
  return (
    <nav className="hidden md:flex flex-row md:gap-12">
      <Link
        href={"/"}
        className={`uppercase text-sm bg-transparent flex items-center justify-center h-[40px] border-[1px] border-transparent ${
          currentURL === "/" ? "border-white" : null
        } hover:border-white rounded-[24px] cursor-pointer px-3`}
      >
        Sou novo
      </Link>
      <Link
        href={"/groups"}
        className={`uppercase text-sm bg-transparent flex items-center justify-center h-[40px] border-[1px] border-transparent ${
          currentURL === "/groups" ? "border-white" : null
        } hover:border-white rounded-[24px] cursor-pointer px-3`}
      >
        Células
      </Link>
    </nav>
  );
}
