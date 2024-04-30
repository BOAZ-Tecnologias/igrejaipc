import Link from 'next/link';
import { Separator } from '../ui/separator';

type MobileMenuProps = {
  openMenu: boolean;
  openDrawer: () => void;
};

export function MobileMenu({ openMenu, openDrawer }: MobileMenuProps) {
  return (
    <div
      className={`h-0 bg-[#1e1e1e] bg-opacity-65 w-full transition-all duration-700 ease-in-out ${
        openMenu ? 'h-screen' : ''
      }`}>
      <div
        className={`relative mt-[-300px] opacity-1 transition-all duration-700 ease-in-out ${
          openMenu ? 'mt-[0]' : 'opacity-0'
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
  );
}
