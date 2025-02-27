const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex-1 flex flex-col px-9 pt-6 pb-20 rounded-t-xl shadow-[0px_5px_10px_rgba(0,0,0,0.3)]'>
      {children}
    </div>
  );
};

export default ContentWrapper;
