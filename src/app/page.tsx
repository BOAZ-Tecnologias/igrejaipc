import ContatUsForm from '@/components/ContactUsForm';
import { FAQSection } from '@/components/HomePage/FAQSection';
import { GetOurAppSection } from '@/components/HomePage/GetOurAppSection';
import { GroupsSection } from '@/components/HomePage/GroupsSection';
import { ImNewSection } from '@/components/HomePage/ImNewSection';
import { SocialSection } from '@/components/HomePage/SocialSection';

export default function Home() {
  return (
    <main className='flex flex-col h-full w-full md:items-center md:justify-start pb-[2rem] pt-[8rem] animate-fade gap-10'>
      <section
        id='hero-section'
        className='flex flex-col md:flex-row justify-between text-h2 font-bold w-full h-full md:h-80 text-wrap md:mt-[5rem] md:mb-[10rem] md:px-2 md:py-4 gap-10 md:gap-0'>
        <p className=' w-full md:w-[50%] tracking-tight leading-tight'>
          Igreja é mais que um lugar para{' '}
          <span className='bg-gradient-to-r from-[#FFF89C] to-[#FFB89F] text-transparent bg-clip-text'>
            frequentar
          </span>
          , é um lugar para chamar de{' '}
          <span className='bg-gradient-to-r from-[#C59FFF] to-[#A0BEFF] text-transparent bg-clip-text'>
            casa
          </span>
        </p>

        <div className=' flex flex-col w-full h-auto md:flex-row md:w-[70%] md:h-full'>
          <div className='relative z-10 md:top-[30%] left-[30vw] md:left-8 w-[11rem] h-[14rem] md:w-[80%] md:h-[95%] bg-hero1 bg-cover rounded-[12px] animate-fade'>
            <div className='bg-noise-pattern w-full h-full opacity-50 rounded-[12px]'></div>
          </div>
          <div className='relative  md:top-[-100px] top-[-50px] md:left-[-20px] w-[11rem] h-[14rem] md:w-[80%] md:h-[95%] bg-hero2 bg-cover rounded-[12px] animate-fade2s'>
            <div className='bg-noise-pattern w-full h-full opacity-20 rounded-[12px]'></div>
          </div>
        </div>
      </section>
      <ImNewSection />
      <GroupsSection />
      <GetOurAppSection />
      <FAQSection />
      <ContatUsForm />
      <SocialSection />
    </main>
  );
}
