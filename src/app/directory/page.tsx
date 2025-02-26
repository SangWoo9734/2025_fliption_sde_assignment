import ContentWrapper from '@/components/layout/ContentWrapper';
import ProjectCard from '@/components/page/DirectoryPage/ProjectCard';

const DirectoryPage = () => {
  return (
    <ContentWrapper>
      <p className='mb-5 pb-5 border-b-2 text-xl'>
        Total <span className='text-2xl font-bold'>{10}</span>
      </p>
      <div className='grid grid-cols-4 gap-5'>
        {new Array(10).fill(0).map((_, index) => (
          <ProjectCard key={index} />
        ))}
      </div>
    </ContentWrapper>
  );
};

export default DirectoryPage;
