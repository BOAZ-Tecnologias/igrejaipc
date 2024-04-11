import Button from './components/Button';
import CustomAccordion from './components/CustomAccordion';

export default function ImNew() {
  return (
    <main className='flex flex-col items-center justify-center pt-[10rem] gap-10 w-full animate-fade'>
      <div
        id='title-section'
        className='flex flex-col items-center justify-center'>
        <div>
          <span className='bg-gradient-to-r from-[#FD8582] to-[#C89CFD] text-transparent bg-clip-text text-h1 font-bold'>
            Novo na Igreja?
          </span>
        </div>
        <span className='text-subtitle-color text-large'>
          Bem-vindo! Esses são os próximos passos para você.
        </span>
      </div>
      <div className='flex flex-row gap-[50px]'>
        <Button content='Perguntas' to='#questions' />
        <Button content='Contate-nos' to='#contact' />
      </div>
      <div id='questions' className='flex flex-col w-full mt-[10rem]'>
        <CustomAccordion />
      </div>
    </main>
  );
}
