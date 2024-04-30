'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='fixed flex flex-col z-50 w-screen'>
      <header className='relative z-40 flex flex-row items-center justify-between px-3 md:px-[10rem] md:gap-[150px] w-full h-[97px] border-b-[1px] border-white bg-[rgba(30, 30, 30, 0.8)] backdrop-blur-[15px]'>
        <Link
          href={'/'}
          className='bg-gradient-to-r from-orange-300 to-blue-300 text-transparent bg-clip-text text-h4 cursor-pointer transition-all hover:scale-90'>
          LOGO
        </Link>
        <div className='flex flex-row items-center justify-center bg-gradient-to-r from-purple-300 to-blue-300 w-auto px-4 py-2 rounded-[24px] cursor-pointer transition-all hover:scale-90'>
          <Link href={'#get-app'} className='text-dashboard-bg font-semibold'>
            Baixar o App
          </Link>
        </div>
      </header>
    </div>
  );
}
