import uploadFormStore from '@/store/uploadFormStore';
import Image from 'next/image';
import { useStore } from 'zustand';

const StyleUnit = ({ styleNumber }: { styleNumber: number }) => {
  const { styleIndex, setStyleIndex } = useStore(uploadFormStore);

  const handleClickEvent = () => {
    setStyleIndex(styleNumber);
  };

  return (
    <button
      type='button'
      className={`relative w-full h-full aspect-square rounded-xl border-8 hover:border-main transition-all ease-in-out duration-300 hover:scale-105 overflow-hidden
        ${styleIndex === styleNumber && 'border-main'}`}
      onClick={handleClickEvent}
    >
      <Image
        src={`/images/style${styleNumber}.png`}
        alt='style-image'
        className='rounded-md'
        fill={true}
        priority
      />
    </button>
  );
};

export default StyleUnit;
