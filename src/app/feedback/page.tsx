'use client';

import ContentWrapper from '@/components/layout/ContentWrapper';
import FeedbackUnit from '@/components/page/FeedbackPage/FeedbackUnit';
import useGetFeedbacks from '@/hooks/useGetFeedbacks';

const FeedbackPage = () => {
  const { isLoading, feedbackList } = useGetFeedbacks();

  if (isLoading) <div>isLoading</div>;

  return (
    <ContentWrapper>
      <div className='flex flex-col gap-4 overflow-scroll'>
        {feedbackList.map((feedbackInfo, index) => (
          <FeedbackUnit key={index} feedbackInfo={feedbackInfo} />
        ))}
      </div>
    </ContentWrapper>
  );
};

export default FeedbackPage;
