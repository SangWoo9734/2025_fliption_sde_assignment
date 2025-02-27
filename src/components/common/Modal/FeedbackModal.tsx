import useFeedbackForm from '@/hooks/useFeedbackForm';
import Image from 'next/image';
import Button from '../Button';

const FeedbackModal = () => {
  const { handleSubmit, feedbackCategoryRef, feedbackTextRef, closeModal } =
    useFeedbackForm();

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
      <div className='flex gap-3 items-center text-lg font-bold'>
        <Image
          src='/images/style3.png'
          alt='result image'
          width={80}
          height={100}
        />
        <p>Title</p>
      </div>

      <div>
        <label htmlFor='feedback-category' className='font-medium'>
          What issue do you see?
        </label>
        <select
          id='feedback-category'
          name='feedbackCategory'
          ref={feedbackCategoryRef}
          className='w-full border-2 focus:border-main p-2 rounded-md mt-1'
        >
          <option value=''>Select an issue</option>
          <option value='head-size'>Head size is too big/small</option>
          <option value='skin-tone'>Skin tone does not match</option>
          <option value='wrong-position'>Wrong head position</option>
          <option value='unnatural-expression'>
            Facial expression looks unnatural
          </option>
          <option value='lighting-mismatch'>Lighting mismatch</option>
          <option value='other'>Other (Please specify)</option>
        </select>
      </div>

      <div>
        <label htmlFor='feedback-content' className='font-medium'>
          Additional details (optional)
        </label>
        <textarea
          id='feedback-content'
          ref={feedbackTextRef}
          className='w-full border-2 focus:border-main bg-gray-100 rounded-md p-2 mt-1 resize-none h-24 whitespace-pre'
          placeholder='Describe the issue in detail...'
        />
      </div>

      <div className='grid grid-cols-[1fr_2fr] gap-2.5'>
        <Button isFull={true} onClick={closeModal} theme='default'>
          Cancel
        </Button>
        <Button isFull={true} type='submit'>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default FeedbackModal;
