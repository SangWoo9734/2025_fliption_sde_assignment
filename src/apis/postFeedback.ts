import { FeedbackFormType, FeedbackType } from '@/types/feedbackType';
import { v4 as uuidv4 } from 'uuid';

const postFeedback = async (feedbackForm: FeedbackFormType) => {
  const newFeedback: FeedbackType = {
    ...feedbackForm,
    id: uuidv4(), // UUID 생성
    userId: 'user123',
    createdAt: new Date(),
    status: 'Answering',
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/feedbacks`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    }
  );

  const data = await response.json();
  console.log('등록된 피드백:', data);
};

export default postFeedback;
