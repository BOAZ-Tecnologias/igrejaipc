'use client';
import { GROUPS_MOCK } from '@/helpers/mockHelpers';
import { GroupCard } from './GroupCard';
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import GroupForm from './GroupForm';
import { X } from 'lucide-react';

export function GroupsSection() {
  const [groupSelected, setGroupSelected] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  function handleGroupCardClick(selectedGroupCard: string) {
    console.log('ok');
    setOpenModal((prevState) => !prevState);
    setGroupSelected(selectedGroupCard);
  }
  return (
    <section className='flex flex-col justify-center items-center w-full h-full gap-10'>
      <span className='bg-gradient-to-r from-[#ff857e] via-[#c79cff] to-[#c79cff] text-transparent bg-clip-text text-h2 font-bold text-center mt-32'>
        Ministérios
      </span>
      <div className='flex flex-col md:flex-row md:flex-wrap gap-4'>
        {GROUPS_MOCK.map((group) => {
          return (
            <GroupCard
              onGroupClick={handleGroupCardClick}
              img={group.img}
              title={group.title}
              description={group.description}
              key={group.title}
            />
          );
        })}
        <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content className='rounded-md w-[90vw] max-w-[500px] max-h-[95vh] fixed z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] py-3 px-[1rem] bg-transparent'>
              <Dialog.Close
                asChild
                className='absolute top-[130px] md:top-[140px] right-[40px]'>
                <button>
                  <X />
                </button>
              </Dialog.Close>
              <GroupForm group={groupSelected} />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
}
