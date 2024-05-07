'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { useToast } from './ui/use-toast';

const ContactUsFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'O nome deve conter no mínimo 2 caracteres.' })
    .max(50),
  message: z
    .string()
    .min(2, { message: 'A mensagem deve conter no mínimo 2 caracteres.' }),
});

export default function ContatUsForm() {
  const form = useForm<z.infer<typeof ContactUsFormSchema>>({
    resolver: zodResolver(ContactUsFormSchema),
    defaultValues: {
      fullName: '',
      message: '',
    },
  });

  const handleFormSubmit = (values: z.infer<typeof ContactUsFormSchema>) => {
    console.log(values);

    const phoneNumber = '+5511936187180';

    const parsedText = `Olá, me chamo ${values.fullName} e tenho a seguinte dúvida: ${values.message}`;
    const encodedString = encodeURIComponent(parsedText);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedString}`, '_blank');
  };

  return (
    <div
      className='flex flex-col w-full bg-noise-pattern py-[1rem] px-[1rem] gap-4 rounded-[22px] mt-[6rem] border-t-[0.5px] border-[#929aa1]'
      id='contactUs'>
      <span className='text-h4 md:text-h3 font-bold'>Entre em contato</span>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className='flex flex-col gap-[0.7rem]'>
          <div className='flex flex-col md:flex-row w-full justify-between gap-6 md:gap-[3rem]'>
            <FormField
              control={form.control}
              name='fullName'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Nome completo</FormLabel>
                  <FormControl>
                    <Input placeholder='Insira seu nome' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex flex-row w-full justify-between gap-[3rem]'>
            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Mensagem/Dúvidas</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Digite sua mensagem aqui...'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type='submit'
            className='mt-6 md:w-[170px]'
            variant={'gradient'}>
            Enviar
          </Button>
        </form>
      </Form>
    </div>
  );
}
