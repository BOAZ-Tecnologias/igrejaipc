import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import Link from 'next/link';

export function HamburguerMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className=''>
          {<Menu />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='flex flex-col gap-2 py-3 px-4 w-auto rounded-[8px]'>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link
              href={'/im-new'}
              className={`uppercase text-sm bg-transparent flex items-center justify-center h-[40px] border-transparent rounded-[24px] px-3`}>
              Sou novo
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              href={'/#'}
              className={`uppercase text-sm bg-transparent flex items-center justify-center h-[40px]  rounded-[24px] px-3`}>
              Serviços
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              href={'/#'}
              className={`uppercase text-sm bg-transparent flex items-center justify-center h-[40px]  rounded-[24px] px-3`}>
              Grupos
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              href={'/#'}
              className={`uppercase text-sm bg-transparent flex items-center justify-center h-[40px]  rounded-[24px] px-3`}>
              Sobre nós
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
