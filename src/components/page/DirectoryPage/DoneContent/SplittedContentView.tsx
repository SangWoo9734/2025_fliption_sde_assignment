import Image from 'next/image';

const SplittedContentView = () => {
  return (
    <div className='flex-1 w-full flex items-center justify-center gap-5'>
      <div className='relative h-full aspect-[4/5] rounded-lg overflow-hidden'>
        <Image
          src='/images/style1.png'
          alt='user-upload-image'
          className='object-cover'
          fill={true}
        />
      </div>

      <div className='relative h-full aspect-[4/5] rounded-lg overflow-hidden'>
        <Image
          src='/images/style2.png'
          alt='user-upload-image'
          className='object-cover'
          fill={true}
        />
      </div>
    </div>
  );
};

export default SplittedContentView;
