import Link from 'next/link';

type ButtonProps = {
  content: string;
  to: string;
};

export default function Button({ content, to }: ButtonProps) {
  return (
    <Link
      href={to}
      className='uppercase text-sm bg-transparent flex items-center justify-center w-[150px] h-[50px] border-[2px] border-white rounded-[24px] cursor-pointer px-3 hover:bg-white hover:text-black-90 font-semibold transition-all hover:scale-95'>
      {content}
    </Link>
  );
}
