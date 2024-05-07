import SOUND_BG from '@/assets/images/sound_bg.jpg';
import adoracao from '@/assets/images/adoracao.jpg';
import kids2 from '@/assets/images/kids2.jpg';
import acolhimento from '@/assets/images/acolhimento.jpg';
import media from '@/assets/images/media.jpg';

export const STEPS_MOCK = [
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

export const FAQ_MOCK = [
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

export const GROUPS_MOCK = [
  {
    img: SOUND_BG,
    title: 'Áudio',
    description:
      'Seja parte da equipe que eleva a qualidade do som, criando um ambiente propício para o encontro com Deus e a celebração da fé.',
  },
  {
    img: acolhimento,
    title: 'Acolhimento',
    description:
      'Seja a luz que guia os visitantes e membros para dentro de nossa família espiritual, garantindo que cada pessoa se sinta em casa desde o primeiro momento.',
  },
  {
    img: media,
    title: 'Mídia',
    description:
      'Faça parte da equipe que leva a mensagem da esperança e amor a um público mais amplo, ajudando a compartilhar nossa fé e valores com o mundo.',
  },
  {
    img: kids2,
    title: 'Kids',
    description:
      'Junte-se a nós para inspirar e moldar as futuras gerações de nossa comunidade, onde elas possam crescer espiritualmente e se conectar com Deus.',
  },
  {
    img: adoracao,
    title: 'Adoração',
    description:
      'Una-se para elevar corações com música e louvor sinceros. Cultive uma atmosfera de conexão profunda com Deus através da harmonia e adoração coletiva.',
  },
];
