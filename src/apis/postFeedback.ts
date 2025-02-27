import { FeedbackFormType, FeedbackType } from '@/types/feedbackType';
import { v4 as uuidv4 } from 'uuid';

const postFeedback = async (feedbackForm: FeedbackFormType) => {
  const newFeedback: FeedbackType = {
    ...feedbackForm,
    id: uuidv4(),
    userId: 'user123',
    createdAt: new Date(),
    status: 'Answering',
  };

  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/feedbacks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newFeedback),
  });
};

export default postFeedback;
