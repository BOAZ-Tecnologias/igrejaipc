export function Footer() {
  return (
    <div className='px-6 py-4 w-full flex items-center justify-center bg-noise-pattern rounded-tl-[32px] rounded-tr-[32px]'>
      <span>
        &copy;
        {`${new Date().getFullYear()} IPC - Igreja palavras que curam. Desenvolvido com `}
        <span className='text-red-600'>&#9829;</span>
        {' por '}
        <a
          href='https://github.com/Luaxlz'
          target='_blank'
          className='hover:text-blue-300 text-blue-300 md:text-white underline underline-offset-4'>
          João Lucas Angeli
        </a>
      </span>
    </div>
  );
}
