'use client';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export function SocialSection() {
  function handleSocial(value: string) {
    switch (value) {
      case 'Instagram':
        window.open(`https://instagram.com/igrejaipc`, '_blank');
        break;
      case 'Facebook':
        window.open(`https://facebook.com/igrejaipc`, '_blank');
        break;
      case 'Youtube':
        window.open(`https://www.youtube.com/igrejapalavrasquecuram`, '_blank');
        break;
      default:
        break;
    }
  }

  return (
    <div className='flex flex-col w-full md:mt-[10rem] md:mb-[5rem]'>
      <span className='text-h4 md:text-h3 font-bold mb-6'>
        Nossa Mídias Sociais
      </span>

      <div className='flex flex-row w-full md:w-[300px] justify-between'>
        <button
          onClick={() => handleSocial('Instagram')}
          className='rounded-[999px] py-4 px-4 hover:bg-gradient-to-r from-[#c79cffe5] to-[#9fbfff] hover:scale-95 transition-all'>
          <Instagram className='w-[48px] h-[48px]' />
        </button>

        <button
          onClick={() => handleSocial('Facebook')}
          className='rounded-[999px] py-4 px-4 hover:bg-gradient-to-r from-[#c79cffe5] to-[#9fbfff] hover:scale-95 transition-all'>
          <Facebook className='w-[48px] h-[48px]' />
        </button>

        <button
          onClick={() => handleSocial('Youtube')}
          className='rounded-[999px] py-4 px-4 hover:bg-gradient-to-r from-[#c79cffe5] to-[#9fbfff] hover:scale-95 transition-all'>
          <Youtube className='w-[48px] h-[48px]' />
        </button>
      </div>
    </div>
  );
}
