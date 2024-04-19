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

const ContactUsFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'O nome deve conter no mínimo 2 caracteres.' })
    .max(50),
  lastName: z
    .string()
    .min(2, { message: 'O sobrenome deve conter no mínimo 2 caracteres.' }),
  phone: z
    .string()
    .min(9, { message: 'O telefone deve conter nove dígitos' })
    .max(11),
  email: z.string().min(2).email('Informe um e-mail válido.'),
  message: z
    .string()
    .min(2, { message: 'A mensagem deve conter no mínimo 2 caracteres.' }),
  methodChosen: z.enum(['Whatsapp', 'E-mail'], {
    required_error: 'Você precisa selecionar um método de contato!',
  }),
});

export default function ContatUsForm() {
  const form = useForm<z.infer<typeof ContactUsFormSchema>>({
    resolver: zodResolver(ContactUsFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
      methodChosen: 'Whatsapp',
    },
  });

  const handleFormSubmit = (values: z.infer<typeof ContactUsFormSchema>) => {
    console.log(values);
  };

  return (
    <div
      className='flex flex-col w-full bg-noise-pattern py-[2rem] px-[3rem] gap-[32px] rounded-[22px]'
      id='contactUs'>
      <span className='text-h3 font-bold'>Entre em contato</span>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className='flex flex-col gap-[0.7rem]'>
          <div className='flex flex-row w-full justify-between gap-[3rem]'>
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder='Nome' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Sobrenome</FormLabel>
                  <FormControl>
                    <Input placeholder='Sobrenome' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex flex-row w-full justify-between gap-[3rem]'>
            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Celular</FormLabel>
                  <FormControl>
                    <Input placeholder='Informe o seu celular' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Sobrenome</FormLabel>
                  <FormControl>
                    <Input placeholder='Informe o seu e-mail' {...field} />
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
          <div className='flex flex-row w-full justify-between gap-[3rem]'>
            <FormField
              control={form.control}
              name='methodChosen'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Como podemos entrar em contato?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex flex-col space-y-1'>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='Whatsapp' />
                        </FormControl>
                        <FormLabel className='font-normal'>WhatsApp</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='E-mail' />
                        </FormControl>
                        <FormLabel className='font-normal'>E-mail</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type='submit' className='mt-6 w-[170px]' variant={'gradient'}>
            Enviar
          </Button>
        </form>
      </Form>
    </div>
  );
}
