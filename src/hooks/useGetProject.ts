import getProject from '@/apis/getProject';
import { ProjectType } from '@/types/projectType';
import { useQuery } from '@tanstack/react-query';

const useGetProject = (id: string) => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['project', id],
    queryFn: () => getProject(id),
    initialData: {
      id: '',
      userId: '',
      title: '',
      sourceImageUrl: '',
      targetImageUrl: '',
      resultImageUrl: '',
      status: 'waiting',
      createdAt: new Date(),
      updatedAt: new Date(),
    } as ProjectType,
  });

  return { isLoading, projectInfo: data, isError };
};

export default useGetProject;
