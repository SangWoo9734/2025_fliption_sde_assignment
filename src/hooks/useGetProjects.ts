import { useQuery } from '@tanstack/react-query';
import getProjects from '../apis/getProjects';

const useGetProjects = () => {
  const { isLoading, data } = useQuery({
    queryFn: getProjects,
    queryKey: ['/projects'],
  });

  return { isLoading, projectList: data ?? [] };
};

export default useGetProjects;
