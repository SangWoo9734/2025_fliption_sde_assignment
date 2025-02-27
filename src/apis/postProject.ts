import { ProjectType } from '@/types/projectType';

const postProject = async (projectFormData: ProjectType) => {
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(projectFormData),
  });
};

export default postProject;
