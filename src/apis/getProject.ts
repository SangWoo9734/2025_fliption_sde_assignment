import { ProjectType } from '@/types/projectType';

const getProject = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${id}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const jsonData = (await response.json()) as ProjectType;

  return jsonData;
};

export default getProject;
