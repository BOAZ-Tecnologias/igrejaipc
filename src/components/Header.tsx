'use client';
import Link from 'next/link';
import NavMenu from './NavMenu';
import { HamburguerMenu } from './HamburguerMenu';

export default function Header() {
  return (
    <header className='flex flex-row items-center justify-between px-3 md:px-[10rem] md:gap-[150px] w-full h-[97px] border-b-[1px] border-white'>
      <Link
        href={'/'}
        className='bg-gradient-to-r from-orange-300 to-blue-300 text-transparent bg-clip-text text-h4 cursor-pointer transition-all hover:scale-90'>
        LOGO
      </Link>
      <NavMenu />
      <div className='flex md:hidden'>
        <HamburguerMenu />
      </div>
      <div className='bg-gradient-to-r from-purple-300 to-blue-300 w-[80px] h-[40px] rounded-[24px] hidden md:flex flex-row items-center justify-center cursor-pointer transition-all hover:scale-90'>
        <Link href={'/#'} className='text-dashboard-bg font-semibold'>
          Doar
        </Link>
      </div>
    </header>
  );
}
