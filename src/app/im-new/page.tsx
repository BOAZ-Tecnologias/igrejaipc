import Button from './components/Button';
import CustomAccordion from './components/CustomAccordion';

const STEPS_MOCK = [
  {
    id: 1,
    title: 'Faça sua primeira visita',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero modi blanditiis corrupti dolorum ducimus alias eligendi repellendus nisi ab. Possimus laboriosam quia non fuga nam nesciunt facere expedita consectetur sed commodi repellat, consequuntur minima veniam ratione perferendis aperiam consequatur deleniti ipsam quos laborum est quis modi officia iure. Rem, ratione!',
    options: [
      {
        title: 'Localização',
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
        <Button
          content='Perguntas'
          to='#questions'
          variant='ghost'
          className='h-[55px] rounded-[32px]'
        />
        <Button
          content='Contate-nos'
          to='#contact'
          variant='ghost'
          className='h-[55px] rounded-[32px]'
        />
      </div>
      <div
        id='questions'
        className='flex flex-col w-full mt-[10rem] gap-[40px]'>
        {STEPS_MOCK.map((step) => {
          return <CustomAccordion key={step.id} info={step} />;
        })}
      </div>
    </main>
  );
}
