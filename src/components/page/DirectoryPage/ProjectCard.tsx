import StatusChip from '@/components/common/StatusChip';
import { SERVICE_ROUTE } from '@/constants/routes';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = () => {
  return (
    <Link
      href={`${SERVICE_ROUTE.directory}/${1}`}
      className='flex flex-col gap-2.5 w-full h-fit px-3 py-4 border border-gray-400 rounded-lg bg-main/10 hover:shadow-[0px_5px_10px_rgba(0,0,0,0.3)] transition-all ease-in-out duration-300'
    >
      <div className='relative w-full aspect-[4/5] rounded-md overflow-hidden'>
        <Image
          src='/images/style3.png'
          alt='project-thumbnail'
          fill={true}
          className='object-cover'
        />
      </div>
      <p className='font-bold '>title</p>
      <div className='flex justify-between items-center'>
        <p className='text-xs text-gray-500'>2025.02.27</p>
        <StatusChip status='processing' size='sm' />
      </div>
    </Link>
  );
};

export default ProjectCard;
