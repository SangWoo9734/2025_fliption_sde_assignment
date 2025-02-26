import Navbar from '../common/Navbar';

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative flex flex-col w-full max-w-[1200px] h-full m-auto '>
      <Navbar />
      <main className='flex-1 flex flex-col pt-24'>{children}</main>
    </div>
  );
};

export default AppWrapper;
