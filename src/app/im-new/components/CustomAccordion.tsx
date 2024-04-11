import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function CustomAccordion() {
  return (
    <Accordion
      type='single'
      collapsible
      className={`bg-[#313131] w-full h-[auto] rounded-[22px] px-[2rem] py-[1rem] flex items-center`}>
      <AccordionItem value='item-1' className='w-full'>
        <AccordionTrigger className=' flex flex-row justify-between w-full'>
          <div className='flex flex-row items-center gap-10'>
            <div className='w-[50px] h-[50px] rounded-[9999px] border-[2px] border-white flex items-center justify-center'>
              1
            </div>
            <span className='text-h5 font-semibold'>
              Faça uma visita à igreja
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          voluptatum perspiciatis vitae, sit dolor necessitatibus laborum
          nostrum inventore consequatur harum possimus autem? Provident at nihil
          beatae facilis dolore illo labore voluptates sed natus accusamus
          pariatur temporibus maxime, aperiam optio? Inventore architecto iste
          modi totam numquam fuga voluptatibus enim quibusdam sit.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
