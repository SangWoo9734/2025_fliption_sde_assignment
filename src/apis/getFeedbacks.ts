import { FeedbackType } from '@/types/feedbackType';

const getFeedbacks = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/feedbacks`
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const jsonData = (await response.json()) as FeedbackType[];

    return jsonData;
  } catch (error) {
    throw new Error(`HTTP error: ${error}`);
  }
};

export default getFeedbacks;
