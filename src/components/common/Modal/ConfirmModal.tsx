import Button from '../Button';

const ConfirmModal = () => {
  return (
    <div>
      <p className='text-center py-20 font-bold'>
        Your feedback is noted! 🚀
        <br />
        We’ll adjust the swap if necessary.
      </p>
      <div className='flex gap-2.5'>
        <Button isFull={true} theme='default'>
          OK
        </Button>
        <Button isFull={true}>Move Feedback</Button>
      </div>
    </div>
  );
};

export default ConfirmModal;
