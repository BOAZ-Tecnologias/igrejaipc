import SOUND_BG from '@/assets/images/sound_bg.jpg';
import worship from '@/assets/images/worship.jpg';
import kids2 from '@/assets/images/kids2.jpg';
import ministries from '@/assets/images/ministries.jpg';
import media from '@/assets/images/media.jpg';
import dance from '@/assets/images/dance.jpg';

export const STEPS_MOCK = [
  {
    id: 1,
    title: 'Frequente os cultos',
    description:
      'Onde a comunidade se une em adoração, reflexão e comunhão. É um momento de renovação espiritual, onde corações são tocados e almas são fortalecidas.',
    options: [
      {
        title: 'Ao vivo',
        url: 'https://youtube.com/igrejapalavrasquecuram',
      },
    ],
  },
  {
    id: 2,
    title: 'Participe de uma célula',
    description:
      'Em nossas células, você encontrará um ambiente acolhedor e encorajador, onde pode compartilhar suas experiências, desafios e vitórias com outros membros da comunidade. É um lugar onde as amizades são cultivadas, as orações são compartilhadas e a Palavra é discutida de maneira significativa.',
    options: [],
  },
  {
    id: 3,
    title: 'Sirva com seus talentos',
    description:
      'Seja você apaixonado pela música, pela oração, pelo ensino ou pelo serviço comunitário, temos um lugar para você em um dos nossos ministérios. Estes não são apenas lugares para desempenhar uma função, mas sim oportunidades para se conectar com Deus de uma forma mais profunda, enquanto você impacta positivamente a vida dos outros.',
    options: [
      {
        title: 'Quero servir',
        url: '/#',
      },
    ],
  },
];

export const FAQ_MOCK = [
  {
    question: 'Quais são os horários dos cultos e eventos da igreja?',
    response: [
      'Quarta-feira 20:00 (Culto de Libertação);',
      'Sexta-feira 20:00 (Culto de Oração);',
      'Sábado 20:00 (Culto dos Jovens);',
      'Domingo 19:00 (Culto da Família).'
    ]
  },
  {
    question: 'Como faço para me envolver em um ministério da igreja?',
    response:
      'Nós encorajamos todos os membros e frequentadores a se envolverem em um dos nossos ministérios. Entre em contato conosco para descobrir como você pode usar seus dons e talentos para servir e se conectar com a comunidade da igreja.',
  },
  {
    question: 'Existe um programa para crianças durante os cultos?',
    response:
      'Sim, oferecemos programas especiais para crianças durante muitos dos nossos cultos. Nossa equipe de ministério infantil está comprometida em proporcionar um ambiente seguro e enriquecedor para as crianças, onde elas possam aprender sobre Deus de uma maneira divertida e envolvente.',
  },
  {
    question: 'Como posso receber aconselhamento espiritual?',
    response:
      'Se você estiver passando por um momento difícil ou precisar de aconselhamento espiritual, nossa equipe pastoral está aqui para ajudar. Entre em contato conosco para agendar uma reunião confidencial com um de nossos pastores ou líderes de ministério.',
  },
  {
    question: 'Como faço para doar para a igreja?',
    response:
      'Você pode contribuir financeiramente pelo nosso PIX (CNPJ - 14.238.011/0001-19) e apoiar as iniciativas locais e globais que ajudam a levar o Reino de Deus para as pessoas.',
  },
];

export const GROUPS_MOCK = [
  {
    img: ministries,
    title: 'Diaconato',
    description:
      'Seja a luz que guia os visitantes e membros para dentro de nossa família espiritual, garantindo que cada pessoa se sinta em casa desde o primeiro momento.',
  },
  {
    img: worship,
    title: 'Louvor e Adoração',
    description:
      'Una-se para elevar corações com música e louvor sinceros. Cultive uma atmosfera de conexão profunda com Deus através da harmonia e adoração coletiva.',
  },
  {
    img: dance,
    title: 'Dança',
    description:
      'Aqui, encontramos a expressão da fé através dos movimentos do corpo, onde cada passo é uma oração e cada gesto é um louvor.',
  },
  {
    img: SOUND_BG,
    title: 'Áudio',
    description:
      'Seja parte da equipe que eleva a qualidade do som, criando um ambiente propício para o encontro com Deus e a celebração da fé.',
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
];
