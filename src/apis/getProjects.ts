import { ProjectType } from '@/types/projectType';

const getProjects = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/projects`
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const jsonData = (await response.json()) as ProjectType[];

    return jsonData;
  } catch (error) {
    throw new Error(`HTTP error: ${error}`);
  }
};

export default getProjects;
