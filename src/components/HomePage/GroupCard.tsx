import Image, { StaticImageData } from 'next/image';

type GroupCardProps = {
  img: StaticImageData;
  title: string;
  description: string;
  onGroupClick: (group: string) => void;
};

export function GroupCard({
  description,
  img,
  title,
  onGroupClick,
}: GroupCardProps) {
  function handleGroupSelection(group: string) {
    onGroupClick(group);
  }
  return (
    <div
      className='w-full md:w-[320px] max-h-[400px] rounded-[18px] bg-noise-pattern transition-all duration-300 hover:scale-95 hover:border-2 hover:border-secondary-80 hover:cursor-pointer'
      onClick={() => handleGroupSelection(title)}>
      <Image
        src={img}
        alt=''
        className='rounded-t-[18px]'
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '200px',
        }}
      />
      <div className='px-8 py-4 flex flex-col justify-between w-full h-auto'>
        <span className='text-large font-semibold tracking-wide'>{title}</span>
        <p className='text-regular-sm text-subtitle-color font-semibold'>
          {description}
        </p>
      </div>
    </div>
  );
}
