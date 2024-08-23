"use client";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";
import { Button } from "../ui/button";
import MenuIcon from "../../assets/icons/align-right-svgrepo-com.svg";
import Image from "next/image";
import { Menu } from "lucide-react";
import { HamburguerButton } from "./HamburguerButton";
import NavMenu from "./NavMenu";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const openDrawer = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <div className="fixed flex flex-col z-50 w-screen">
      <header className="relative z-40 flex flex-row items-center justify-between px-3 md:px-[10rem] w-full h-[97px] border-b-[1px] border-white bg-[rgba(30, 30, 30, 0.8)] backdrop-blur-[15px]">
        <Link
          href={"/"}
          className="bg-logoFull bg-cover bg-center w-[100px] h-[50%] md:w-[150px] md:h-[70%] cursor-pointer transition-all hover:scale-90 opacity-70 rounded-lg"
        />
        <NavMenu />
        <div className="flex flex-row items-center justify-center bg-gradient-to-r from-purple-300 to-blue-300 px-4 py-2 rounded-[24px] cursor-pointer transition-all hover:scale-90">
          <Link
            href={"#baixar-app"}
            className="text-dashboard-bg font-semibold"
          >
            Baixar o App
          </Link>
        </div>
        <HamburguerButton isOpen={openMenu} toggleMenu={openDrawer} />
      </header>
      <MobileMenu openMenu={openMenu} openDrawer={openDrawer} />
    </div>
  );
}
