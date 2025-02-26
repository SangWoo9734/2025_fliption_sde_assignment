import Button from '@/components/common/Button';
import useUpladImage from '@/hooks/useUpladImage';
import Image from 'next/image';
import { PiUpload } from 'react-icons/pi';

const UploadImageSection = () => {
  const {
    inputRef,
    handleDragOverEvent,
    handleDropEvent,
    handleClickEvent,
    handleFileChangeEvent,
    moveNext,
    isImageValid,
    userImage,
  } = useUpladImage();

  return (
    <div className='flex-1 flex flex-col'>
      <div className='flex items-center gap-2.5 mb-5 pb-5 border-b-2 text-xl'>
        <div className='inline-flex items-center justify-center border-2 rounded-full w-10 h-10'>
          1
        </div>
        <p className='font-bold'>Upload Image</p>
      </div>
      <p className='text-gray-500'>
        Select an image from your device to use for the head swap. Ensure the
        image is clear and well-lit for the best results.
      </p>
      <div className='flex-1 flex justify-center items-center'>
        <div
          className={`relative flex justify-center items-center  max-h-96 rounded-xl bg-gray-200 overflow-hidden 
        after:absolute after:inset-4 after:border-2 after:border-dashed after:border-gray-400 after:rounded-xl cursor-pointer
        ${userImage === null ? 'w-4/5 h-4/5' : 'box-content p-12'}`}
          onDragOver={handleDragOverEvent}
          onDrop={handleDropEvent}
          onClick={handleClickEvent}
        >
          <input
            type='file'
            accept='image/*'
            className='hidden'
            ref={inputRef}
            onChange={handleFileChangeEvent}
          />

          {userImage === null ? (
            <div className='flex flex-col items-center gap-5'>
              <PiUpload className='w-14 h-14' />
              <p className='text-xl font-bold'>
                Click or Drag & Drop Image File
              </p>
            </div>
          ) : (
            <div className='z-10'>
              <Image
                src={URL.createObjectURL(userImage)}
                alt='uploaded image'
                width={400}
                height={400}
              />
            </div>
          )}
        </div>
      </div>

      <Button
        type='button'
        className='ml-auto'
        onClick={moveNext}
        disabled={!isImageValid}
      >
        Next
      </Button>
    </div>
  );
};

export default UploadImageSection;
