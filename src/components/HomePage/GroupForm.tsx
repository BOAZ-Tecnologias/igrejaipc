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
import { Textarea } from '../ui/textarea';
import { useToast } from '../ui/use-toast';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

const GroupFormSchema = z.object({
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

export default function GroupForm() {
  const form = useForm<z.infer<typeof GroupFormSchema>>({
    resolver: zodResolver(GroupFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
      methodChosen: 'Whatsapp',
    },
  });

  const { toast } = useToast();

  const handleFormSubmit = (values: z.infer<typeof GroupFormSchema>) => {
    console.log(values);
    toast({
      title: 'Mensagem enviada com sucesso!',
      description: 'Agora basta aguardar que entraremos em contato.',
      variant: 'success',
    });
  };

  return (
    <div
      className='flex flex-col w-full bg-[#131313] bg-noise-pattern py-[2rem] px-[3rem] gap-[2rem] rounded-[22px] mt-[6rem] border-t-[0.5px] border-[#929aa1]'
      id='contactUs'>
      <span className='text-h3 font-bold'>Entre em contato</span>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className='flex flex-col gap-[0.7rem]'>
          <div className='flex flex-col md:flex-row w-full justify-between gap-6 md:gap-[3rem]'>
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
