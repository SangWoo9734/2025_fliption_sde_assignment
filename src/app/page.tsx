import { SERVICE_ROUTE } from '@/constants/routes';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='h-full flex justify-center items-center'>
      <div className='flex flex-col items-center gap-20'>
        <h1 className='text-4xl font-bold'>
          Easiest Way to Swap Heads with Your Photos!
        </h1>
        <Link
          href={SERVICE_ROUTE.newProject}
          className='px-12 py-2 rounded-full text-2xl font-bold italic text-white bg-main'
        >
          Try it!
        </Link>
      </div>
    </div>
  );
}
