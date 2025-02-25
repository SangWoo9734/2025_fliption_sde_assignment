'use client';

import { SERVICE_ROUTE } from '@/constants/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAVBAR_MENU = [
  { title: 'New Project', url: SERVICE_ROUTE.newProject },
  { title: 'Directory', url: SERVICE_ROUTE.directory },
  { title: 'Feedback', url: SERVICE_ROUTE.feedback },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className='absolute flex justify-center items-center gap-10 w-full h-16 rounded-b-xl bg-white shadow-lg'>
      {NAVBAR_MENU.map(({ url, title }) => (
        <Link
          key={url}
          href={url}
          className={`text-xl font-bold hover:text-main ${
            url === pathName && 'text-main'
          }`}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
