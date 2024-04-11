export default function Header() {
  return (
    <header className='flex flex-row items-center justify-between px-[10rem] gap-[150px] w-screen h-[97px] border-b-[1px] border-white'>
      <span>LOGO</span>
      <nav className='flex flex-row gap-3'>
        <div className=' bg-transparent flex items-center justify-center h-[40px] border-[1px] border-transparent hover:border-white rounded-[24px] cursor-pointer px-3'>
          <span className='uppercase text-sm'>Sou novo</span>
        </div>
        <div className=' bg-transparent flex items-center justify-center h-[40px] border-[1px] border-transparent hover:border-white rounded-[24px] cursor-pointer px-3'>
          <span className='uppercase'>Serviços</span>
        </div>
        <div className=' bg-transparent flex items-center justify-center h-[40px] border-[1px] border-transparent hover:border-white rounded-[24px] cursor-pointer px-3'>
          <span className='uppercase'>Grupos</span>
        </div>
        <div className=' bg-transparent flex items-center justify-center h-[40px] border-[1px] border-transparent hover:border-white rounded-[24px] cursor-pointer px-3'>
          <span className='uppercase'>Sobre nós</span>
        </div>
      </nav>
      <div className='bg-gradient-to-r from-purple-300 to-blue-300 w-[80px] h-[40px] rounded-[24px] flex flex-row items-center justify-center cursor-pointer transition-all hover:scale-90'>
        <span className='text-dashboard-bg font-semibold'>Doar</span>
      </div>
    </header>
  );
}
