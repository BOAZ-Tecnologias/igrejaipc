import Image, { StaticImageData } from 'next/image';

type GroupCardProps = {
  img: StaticImageData;
  title: string;
  description: string;
};

export function GroupCard({ description, img, title }: GroupCardProps) {
  return (
    <div className='w-full md:w-[320px] h-full rounded-[18px] bg-noise-pattern transition-all duration-300 hover:scale-95 hover:border-2 hover:border-secondary-80 hover:cursor-pointer'>
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
      <div className='px-8 py-8'>
        <span className='text-h5 font-semibold tracking-wide'>{title}</span>
        <p className='text-regular text-subtitle-color font-semibold'>
          {description}
        </p>
      </div>
    </div>
  );
}
