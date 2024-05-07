import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ImNewAccordion';
import { Iinfo } from '@/@types/types';
import Link from 'next/link';
import Button from './Button';

type CustomAccprdionProps = {
  info: Iinfo;
};

export default function CustomAccordion({ info }: CustomAccprdionProps) {
  return (
    <Accordion
      type='single'
      collapsible
      className={`bg-noise-pattern w-full h-[auto] rounded-[22px] px-4 md:px-[2rem] py-[2rem]`}>
      <AccordionItem value='item-1' className='w-full'>
        <AccordionTrigger className=' flex flex-row justify-between w-full'>
          <div className='flex flex-row items-center gap-3 md:gap-10'>
            <div className='w-[50px] h-[50px] rounded-[9999px] border-[2px] border-white hidden md:flex items-center justify-center'>
              {info.id}
            </div>
            <span className=' text-regular md:text-h5 font-semibold'>
              {info.title}
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className='flex md:w-[65%] text-wrap text-large text-subtitle-color leading-relaxed'>
            {info.description}
          </div>
          <div className='flex flex-row gap-6 items-center mt-12'>
            {info.options.map((option, index) => {
              return index === 0 ? (
                <Button
                  content={option.title}
                  to={option.url}
                  variant='gradient'
                  key={option.title}
                />
              ) : (
                <Button
                  content={option.title}
                  to={option.url}
                  variant='ghost'
                  key={option.title}
                />
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
