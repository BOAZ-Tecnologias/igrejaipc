import { STEPS_MOCK, FAQ_MOCK } from '@/helpers/mockHelpers';
import ContatUsForm from '../ContactUsForm';
import Button from './Button';
import CustomAccordion from './CustomAccordion';
import FAQ from './FAQ';
import Image from 'next/image';

export function ImNewSection() {
  return (
    <section className='flex flex-col items-center justify-center pt-[10rem] gap-10 w-full animate-fade'>
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
      <div className='flex flex-row gap-6 md:gap-[50px]'>
        <Button
          content='Perguntas'
          to='#questions'
          variant='ghost'
          className='h-[55px] rounded-[32px]'
        />
        <Button
          content='Contate-nos'
          to='#contato'
          variant='ghost'
          className='h-[55px] rounded-[32px]'
        />
      </div>
      <div className='flex flex-col w-full mt-6 gap-[40px]'>
        {STEPS_MOCK.map((step) => {
          return <CustomAccordion key={step.id} info={step} />;
        })}
      </div>
    </section>
  );
}
