'use client';
import Image from 'next/image';
import Link from 'next/link';
import fullLogo from '../../assets/images/logoFull.jpg';

export default function Header() {
  return (
    <div className='fixed flex flex-col z-50 w-screen'>
      <header className='relative z-40 flex flex-row items-center justify-between px-3 md:px-[10rem] w-full h-[97px] border-b-[1px] border-white bg-[rgba(30, 30, 30, 0.8)] backdrop-blur-[15px]'>
        <Link
          href={'/'}
          className='bg-logoFull bg-cover bg-center w-[150px] h-[70%] cursor-pointer transition-all hover:scale-90 opacity-70 rounded-lg'
        />
        <div className='flex flex-row items-center justify-center bg-gradient-to-r from-purple-300 to-blue-300 w-auto px-4 py-2 rounded-[24px] cursor-pointer transition-all hover:scale-90'>
          <Link href={'#get-app'} className='text-dashboard-bg font-semibold'>
            Baixar o App
          </Link>
        </div>
      </header>
    </div>
  );
}
