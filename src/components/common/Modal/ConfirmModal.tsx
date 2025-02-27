import { SERVICE_ROUTE } from '@/constants/routes';
import modalStore from '@/store/modalStore';
import { useRouter } from 'next/navigation';
import { useStore } from 'zustand';
import Button from '../Button';

const ConfirmModal = () => {
  const router = useRouter();
  const { closeModal } = useStore(modalStore);

  const clickMoveFeedbackButton = () => {
    closeModal();
    router.push(SERVICE_ROUTE.feedback);
  };

  return (
    <div>
      <p className='text-center py-20 font-bold'>
        Your feedback is noted! 🚀
        <br />
        We’ll adjust the swap if necessary.
      </p>
      <div className='flex gap-2.5'>
        <Button isFull={true} theme='default' onClick={closeModal}>
          OK
        </Button>
        <Button isFull={true} onClick={clickMoveFeedbackButton}>
          Move Feedback
        </Button>
      </div>
    </div>
  );
};

export default ConfirmModal;
