import { IFAQ } from '@/@types/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type FAQProps = {
  faq: IFAQ;
};

export default function FAQ({ faq }: FAQProps) {
  return (
    <Accordion type='single' collapsible className='w-[80%] md:w-[50%]'>
      <AccordionItem value='item-1'>
        <AccordionTrigger className='text-large text-left font-bold'>
          {faq.question}
        </AccordionTrigger>
        <AccordionContent>{faq.response}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
