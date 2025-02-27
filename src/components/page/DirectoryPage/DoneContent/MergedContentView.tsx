import Image from 'next/image';

const MergedContentView = () => {
  return (
    <div className='flex-1 w-full flex items-center justify-center gap-5'>
      <div className='relative h-full aspect-[4/5] rounded-lg overflow-hidden group'>
        <Image
          src='/images/style1.png'
          alt='head swap image before'
          fill={true}
          className='absolute transition-opacity duration-500 opacity-100 group-hover:opacity-0 object-cover'
        />

        <Image
          src='/images/style2.png'
          alt='head swap image after'
          fill={true}
          className='absolute transition-opacity duration-500 opacity-0 group-hover:opacity-100 object-cover'
        />
      </div>
    </div>
  );
};

export default MergedContentView;
