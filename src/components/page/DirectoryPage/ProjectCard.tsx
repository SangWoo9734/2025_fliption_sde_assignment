import StatusChip from '@/components/common/StatusChip';
import { SERVICE_ROUTE } from '@/constants/routes';
import { ProjectType } from '@/types/projectType';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ projectInfo }: { projectInfo: ProjectType }) => {
  const { id, title, resultImageUrl, status, updatedAt } = projectInfo;

  return (
    <Link
      href={`${SERVICE_ROUTE.directory}/${id}`}
      className='flex flex-col gap-2.5 w-full h-fit px-3 py-4 border border-gray-400 rounded-lg bg-main/10 hover:shadow-[0px_5px_10px_rgba(0,0,0,0.3)] transition-all ease-in-out duration-300'
    >
      <div className='relative w-full aspect-[4/5] rounded-md overflow-hidden'>
        <Image
          src={resultImageUrl}
          alt='project-thumbnail'
          fill={true}
          className='object-cover'
          priority
        />
      </div>
      <p className='font-bold text-ellipsis whitespace-nowrap overflow-hidden'>
        {title}
      </p>
      <div className='flex justify-between items-center'>
        <p className='text-xs text-gray-500'>
          {new Date(updatedAt).toDateString()}
        </p>
        <StatusChip status={status} size='sm' />
      </div>
    </Link>
  );
};

export default ProjectCard;
