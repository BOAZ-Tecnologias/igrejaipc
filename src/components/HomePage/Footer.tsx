export function Footer() {
  return (
    <div className='px-6 py-4 w-full flex items-center justify-center bg-noise-pattern rounded-tl-[32px] rounded-tr-[32px] md:text-subtitle'>
      <span>
        &copy;
        {`${new Date().getFullYear()} IPC - Igreja Palavras que Curam. Desenvolvido por BOAZ Tecnologias`}
      </span>
    </div>
  );
}
