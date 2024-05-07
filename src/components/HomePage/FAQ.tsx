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
    <Accordion type='single' collapsible className='w-[100%] md:w-[100%]'>
      <AccordionItem value='item-1'>
        <AccordionTrigger className='text-large text-left font-bold'>
          {faq.question}
        </AccordionTrigger>
        {
          Array.isArray(faq.response) ? (
            faq.response?.map((responseItem, index) => (
              <AccordionContent key={index}>{responseItem}</AccordionContent>      
            ))
          ): <AccordionContent>{faq.response}</AccordionContent>
        }
      </AccordionItem>
    </Accordion>
  );
}
