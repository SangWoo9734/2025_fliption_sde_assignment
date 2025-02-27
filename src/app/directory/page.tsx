'use client';

import ContentWrapper from '@/components/layout/ContentWrapper';
import ProjectCard from '@/components/page/DirectoryPage/ProjectCard';
import useGetProjects from '@/hooks/useGetProjects';

const DirectoryPage = () => {
  const { isLoading, projectList } = useGetProjects();

  if (isLoading) <div>isLoading</div>;

  return (
    <ContentWrapper>
      <p className='mb-5 pb-5 border-b-2 text-xl'>
        Total
        <span className='pl-4 text-2xl font-bold text-main'>
          {projectList.length}
        </span>
      </p>
      <div className='grid grid-cols-4 gap-5'>
        {projectList.map((projectInfo, index) => (
          <ProjectCard key={index} projectInfo={projectInfo} />
        ))}
      </div>
    </ContentWrapper>
  );
};

export default DirectoryPage;
