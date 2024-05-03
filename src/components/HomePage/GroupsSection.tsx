import { GROUPS_MOCK } from '@/helpers/mockHelpers';
import { GroupCard } from './GroupCard';

export function GroupsSection() {
  return (
    <section className='flex flex-col w-full h-full gap-10'>
      <span id='title' className='text-h2 font-bold'>
        Ministérios
      </span>
      <div className='flex flex-col md:flex-row md:flex-wrap w-full h-full gap-10'>
        {GROUPS_MOCK.map((group) => {
          return (
            <GroupCard
              img={group.img}
              title={group.title}
              description={group.description}
              key={group.title}
            />
          );
        })}
      </div>
    </section>
  );
}
