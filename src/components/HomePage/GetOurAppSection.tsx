'use client';
import { Button } from '../ui/button';

export function GetOurAppSection() {
  function handleGetApp(value: string) {
    switch (value) {
      case 'App Store':
        window.open(
          `https://apps.apple.com/br/app/igreja-ipc/id6480132231`,
          '_blank',
        );
        break;
      case 'Google Play':
        window.open(
          `https://play.google.com/store/apps/details?id=br.com.inchurch.palavrasquecuram&pcampaignid=web_share`,
          '_blank',
        );
        break;
      default:
        break;
    }
  }
  return (
    <section
      id='baixar-app'
      className=' flex flex-col w-full py-8 px-6 md:px-8 bg-gradient-to-r from-[#c79cffe5] to-[#9fbfff] rounded-lg mt-[3rem] md:mt-[6rem] mb-[3rem] md:mb-[6rem]'>
      <span className='text-h4 md:text-h3 font-bold'>Baixe o nosso App</span>
      <span className='text-regular-sm font-semibold mb-4'>
        Tenha acesso a noticias, eventos próximos e muito mais em um só lugar
      </span>

      <div className='flex flex-row justify-around w-full md:w-[250px]'>
        <Button
          //@ts-ignore
          onClick={(e) => handleGetApp(e.target.textContent)}
          variant='outline'
          className='bg-transparent rounded-[100px] border-2'>
          App Store
        </Button>
        <Button
          //@ts-ignore
          onClick={(e) => handleGetApp(e.target.textContent)}
          variant='outline'
          className='bg-transparent rounded-[100px] border-2'>
          Google Play
        </Button>
      </div>
    </section>
  );
}
