'use client';
import Link from 'next/link';
import NavMenu from './NavMenu';
import { useState } from 'react';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { Separator } from './ui/separator';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const openDrawer = () => {
    setOpenMenu((prevState) => !prevState);
  };
  return (
    <div className='fixed flex flex-col z-50 w-screen'>
      <header className='relative z-40 flex flex-row items-center justify-between px-3 md:px-[10rem] md:gap-[150px] w-full h-[97px] border-b-[1px] border-white bg-[rgba(30, 30, 30, 0.8)] backdrop-blur-[15px]'>
        <Link
          href={'/'}
          className='bg-gradient-to-r from-orange-300 to-blue-300 text-transparent bg-clip-text text-h4 cursor-pointer transition-all hover:scale-90'>
          LOGO
        </Link>
        <NavMenu />
        <div className='flex gap-6 items-center md:hidden'>
          <div className='bg-gradient-to-r from-purple-300 to-blue-300 w-[60px] h-[30px] rounded-[24px] flex flex-row items-center justify-center cursor-pointer transition-all hover:scale-90'>
            <Link
              href={'/#'}
              className='text-dashboard-bg font-semibold text-sm'>
              Doar
            </Link>
          </div>
          <Button variant={'ghost'} onClick={openDrawer}>
            {<Menu />}
          </Button>
        </div>
        <div className='bg-gradient-to-r from-purple-300 to-blue-300 w-[80px] h-[40px] rounded-[24px] hidden md:flex flex-row items-center justify-center cursor-pointer transition-all hover:scale-90'>
          <Link href={'/#'} className='text-dashboard-bg font-semibold'>
            Doar
          </Link>
        </div>
      </header>
      <div
        className={`h-0 bg-[#1e1e1e] bg-opacity-65 w-full transition-all duration-700 ease-in-out ${
          openMenu ? 'h-screen' : ''
        }`}>
        <div
          className={`relative mt-[-300px] transition-all duration-700 ease-in-out ${
            openMenu ? 'mt-0' : 'opacity-0'
          }`}>
          <Separator />
          <Link
            href={'/im-new'}
            onClick={openDrawer}
            className={`uppercase text-large font-semibold bg-transparent items-center flex  h-[40px] rounded-[24px] py-10 px-6`}>
            Sou novo
          </Link>
          <Separator />
          <Link
            href={'/#'}
            onClick={openDrawer}
            className={`uppercase text-large font-semibold bg-transparent items-center flex  h-[40px]  rounded-[24px] py-10 px-6 `}>
            Serviços
          </Link>
          <Separator />
          <Link
            href={'/#'}
            onClick={openDrawer}
            className={`uppercase text-large font-semibold bg-transparent items-center flex  h-[40px]  rounded-[24px] py-10 px-6 `}>
            Grupos
          </Link>
          <Separator />
          <Link
            href={'/#'}
            onClick={openDrawer}
            className={`uppercase text-large font-semibold bg-transparent items-center flex  h-[40px]  rounded-[24px] py-10 px-6 `}>
            Sobre nós
          </Link>
        </div>
      </div>
    </div>
  );
}
