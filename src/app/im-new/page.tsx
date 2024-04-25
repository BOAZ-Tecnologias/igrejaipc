import Image from 'next/image';
import Button from './components/Button';
import CustomAccordion from './components/CustomAccordion';
import FAQ from './components/FAQ';
import ContatUsForm from '@/components/ContactUsForm';

const STEPS_MOCK = [
  {
    id: 1,
    title: 'Faça sua primeira visita',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero modi blanditiis corrupti dolorum ducimus alias eligendi repellendus nisi ab. Possimus laboriosam quia non fuga nam nesciunt facere expedita consectetur sed commodi repellat, consequuntur minima veniam ratione perferendis aperiam consequatur deleniti ipsam quos laborum est quis modi officia iure. Rem, ratione!',
    options: [
      {
        title: 'Como chegar',
        url: '/#',
      },
      {
        title: 'Serviços',
        url: '/#',
      },
    ],
  },
  {
    id: 2,
    title: 'Inscreva-se em um de nossos grupos',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero modi blanditiis corrupti dolorum ducimus alias eligendi repellendus nisi ab. Possimus laboriosam quia non fuga nam nesciunt facere expedita consectetur sed commodi repellat, consequuntur minima veniam ratione perferendis aperiam consequatur deleniti ipsam quos laborum est quis modi officia iure. Rem, ratione!',
    options: [
      {
        title: 'Inscrever-se',
        url: '/#',
      },
      {
        title: 'Saber mais',
        url: '/#',
      },
    ],
  },
  {
    id: 3,
    title: 'Descubra oportunidades para contribuir',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero modi blanditiis corrupti dolorum ducimus alias eligendi repellendus nisi ab. Possimus laboriosam quia non fuga nam nesciunt facere expedita consectetur sed commodi repellat, consequuntur minima veniam ratione perferendis aperiam consequatur deleniti ipsam quos laborum est quis modi officia iure. Rem, ratione!',
    options: [
      {
        title: 'Quero ser voluntário',
        url: '/#',
      },
    ],
  },
];

const FAQ_MOCK = [
  {
    question: 'Quão grande é a Igreja?',
    response:
      'Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.',
  },
  {
    question: 'Em que acreditamos como Igreja?',
    response:
      'Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.',
  },
  {
    question: 'Como eu me torno um membro da Igreja?',
    response:
      'Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.',
  },
  {
    question: 'Qual é a nossa missão?',
    response:
      'Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.',
  },
  {
    question: 'A igreja possui algum serviço para crianças e adolescentes?',
    response:
      'Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.',
  },
];

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
    </main>
  );
}
