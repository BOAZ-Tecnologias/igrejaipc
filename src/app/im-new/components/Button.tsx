import { cn } from '@/lib/utils';
import Link from 'next/link';

type ButtonProps = {
  content: string;
  to: string;
  variant: 'ghost' | 'gradient';
  className?: string;
};

export default function Button({
  content,
  to,
  variant,
  className,
}: ButtonProps) {
  if (variant === 'ghost') {
    return (
      <div
        className={cn(
          `bg-transparent w-[auto] h-[40px] py-[7px] px-[25px] rounded-[24px] border-[2px] border-white flex flex-row items-center justify-center cursor-pointer transition-all hover:scale-95 hover:bg-white text-white hover:text-black font-semibold`,
          className,
        )}>
        <Link href={to}>{content}</Link>
      </div>
    );
  } else {
    return (
      <div
        className={cn(
          `bg-gradient-to-r from-[#FE8580] to-[#C89CFE] w-[auto] h-[40px] py-[7px] px-[25px] rounded-[24px] flex flex-row items-center justify-center cursor-pointer transition-all hover:scale-95`,
          className,
        )}>
        <Link href={to} className='text-dashboard-bg font-semibold'>
          {content}
        </Link>
      </div>
    );
  }
}