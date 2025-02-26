import Button from '@/components/common/Button';
import uploadFormStore from '@/store/uploadFormStore';
import StyleUnit from './StyleUnit';

const SelectStyleSection = () => {
  const isStyleIndexValid = uploadFormStore((state) => state.styleIndex !== 0);

  const clickSubmitButton = () => {
    console.log('submit');
  };

  return (
    <div className='flex-1 flex flex-col'>
      <div className='flex items-center gap-2.5 mb-5 pb-5 border-b-2 text-xl'>
        <div className='inline-flex items-center justify-center border-2 rounded-full w-10 h-10'>
          2
        </div>
        <p className='font-bold'>Select Style</p>
      </div>
      <p className='text-gray-500'>
        Choose from a variety of styles to apply to the face being swapped. You
        can preview different styles before finalizing your selection.
      </p>
      <div className='grid grid-cols-3 gap-5 py-16'>
        {new Array(6).fill(0).map((_, index) => (
          <StyleUnit key={index} styleNumber={index + 1} />
        ))}
      </div>
      <Button
        type='submit'
        className='ml-auto'
        onClick={clickSubmitButton}
        disabled={!isStyleIndexValid}
      >
        Submit
      </Button>
    </div>
  );
};

export default SelectStyleSection;
