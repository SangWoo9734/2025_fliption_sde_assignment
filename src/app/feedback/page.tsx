import ContentWrapper from '@/components/layout/ContentWrapper';
import FeedbackUnit from '@/components/page/FeedbackPage/FeedbackUnit';

const FeedbackPage = () => {
  return (
    <ContentWrapper>
      <div className='flex flex-col gap-4 overflow-scroll'>
        {new Array(10).fill(0).map((_, index) => (
          <FeedbackUnit key={index} />
        ))}
      </div>
    </ContentWrapper>
  );
};

export default FeedbackPage;
