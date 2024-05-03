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
          to='#contactUs'
          variant='ghost'
          className='h-[55px] rounded-[32px]'
        />
      </div>
      <div className='flex flex-col w-full mt-6 md:mt-[10rem] gap-[40px]'>
        {STEPS_MOCK.map((step) => {
          return <CustomAccordion key={step.id} info={step} />;
        })}
      </div>
      <div
        id='questions'
        className='flex flex-col w-full mt-[7rem] gap-[20px] items-center md:items-start'>
        <div className='bg-gradient-to-tr from-[#FE8580] to-[#C89CFE] w-[60px] h-[60px] rounded-full flex items-center justify-center'>
          <Image
            src='https://uploads-ssl.webflow.com/62e2e350201fb77d6f1c8c9c/62ebf6da32aa5125e4b041e5_questions.svg'
            alt='faq icon'
            width={40}
            height={40}
            className='opacity-70'
          />
        </div>
        <span className='bg-gradient-to-r from-[#ff857e] via-[#c79cff] to-[#c79cff] text-transparent bg-clip-text text-h2 font-bold'>
          Perguntas frequentes
        </span>
        {FAQ_MOCK.map((faq) => {
          return <FAQ key={faq.question} faq={faq} />;
        })}
      </div>
      <ContatUsForm />
    </section>
  );
}
