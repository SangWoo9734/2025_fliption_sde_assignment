import getFeedbacks from '@/apis/getFeedbacks';
import { useQuery } from '@tanstack/react-query';

const useGetFeedbacks = () => {
  const { isLoading, data } = useQuery({
    queryFn: getFeedbacks,
    queryKey: ['/feedbacks'],
  });

  return { isLoading, feedbackList: data ?? [] };
};

export default useGetFeedbacks;
