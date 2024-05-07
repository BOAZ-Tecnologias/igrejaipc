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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '../ui/use-toast';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const GroupFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'O nome deve conter no mínimo 2 caracteres.' })
    .max(50),
  selectedGroup: z.string(),
});

type GroupFormProps = {
  group?: string;
};

export default function GroupForm({ group }: GroupFormProps) {
  const form = useForm<z.infer<typeof GroupFormSchema>>({
    resolver: zodResolver(GroupFormSchema),
    defaultValues: {
      fullName: '',
      selectedGroup: group || '',
    },
  });

  console.log(group);

  const handleFormSubmit = (values: z.infer<typeof GroupFormSchema>) => {
    const phoneNumber = '+5511936187180';

    const parsedText = `Olá, me chamo ${
      values.fullName
    } e gostaria de participar do ministério ${values.selectedGroup.toLocaleUpperCase()}`;
    const encodedString = encodeURIComponent(parsedText);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedString}`, '_blank');
  };

  return (
    <div
      className='flex flex-col w-full bg-[#131313] bg-noise-pattern py-[4rem] px-[1.5rem] rounded-[22px] mt-[6rem] border-t-[0.5px] border-[#929aa1]'
      id='contato'>
      <span className='text-h5 md:text-h3 font-bold mb-3'>
        Entre em contato
      </span>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className='flex flex-col'>
          <div className='flex flex-col w-full justify-between gap-6'>
            <FormField
              control={form.control}
              name='fullName'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Nome completo</FormLabel>
                  <FormControl>
                    <Input placeholder='Insira o seu nome' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='selectedGroup'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Qual ministério voce gostaria de servir?
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Selecione um ministério' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='Diaconato'>Diaconato</SelectItem>
                      <SelectItem value='Louvor e Adoração'>
                        Louvor e Adoraçao
                      </SelectItem>
                      <SelectItem value='Dança'>Dança</SelectItem>
                      <SelectItem value='Áudio'>Áudio</SelectItem>
                      <SelectItem value='Mídia'>Mídia</SelectItem>
                      <SelectItem value='Kids'>Kids</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type='submit'
            className='mt-6 md:w-[170px]'
            variant={'gradient'}>
            Enviar mensagem
          </Button>
        </form>
      </Form>
    </div>
  );
}
