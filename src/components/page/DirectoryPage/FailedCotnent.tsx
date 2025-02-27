import { TbReload } from 'react-icons/tb';

const FailedContent = () => {
  const clickRetryButton = () => {
    alert('Restart the head swap..!');
  };

  return (
    <>
      <h1 className='text-3xl'>😵</h1>
      <p className='font-bold text-center'>
        Oops! Something went wrong. <br />
        Please try again or check if your image is valid. 🙏
      </p>
      <button
        type='button'
        className='flex items-center gap-2.5 px-6 py-2 rounded-full bg-main text-white font-bold'
        onClick={clickRetryButton}
      >
        <TbReload />
        <p>Try Aagin</p>
      </button>
    </>
  );
};

export default FailedContent;
