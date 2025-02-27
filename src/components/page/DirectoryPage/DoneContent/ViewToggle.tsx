import { Dispatch, SetStateAction } from 'react';
import { AiOutlineMergeCells, AiOutlineSplitCells } from 'react-icons/ai';

const ViewToggle = ({
  viewType,
  setViewType,
}: {
  viewType: string;
  setViewType: Dispatch<SetStateAction<'split' | 'merge'>>;
}) => {
  const clickSplitSide = () => {
    if (viewType !== 'split') setViewType('split');
  };

  const clickMergeSide = () => {
    if (viewType !== 'merge') setViewType('merge');
  };

  const selectedTabClassName =
    'absolute inset-0 bg-gray-600 transition-transform duration-500 ease-in-out';
  const defaultTabClassName =
    'flex-1 py-2 rounded-[10px] relative overflow-hidden';

  return (
    <div className='flex gap-3 w-[250px] m-auto p-2 rounded-2xl bg-gray-300 text-sm text-gray-500'>
      <button
        type='button'
        onClick={clickSplitSide}
        className={`
            ${defaultTabClassName}
            ${viewType === 'split' ? 'text-white' : ''}
          `}
      >
        <span
          className={`
              ${selectedTabClassName}
              ${viewType === 'split' ? 'translate-x-0' : 'translate-x-full'}
            `}
        ></span>
        <div className='relative z-10 flex justify-center items-center gap-2.5 '>
          <AiOutlineSplitCells />
          <p>Splitted</p>
        </div>
      </button>

      <button
        type='button'
        onClick={clickMergeSide}
        className={`
            ${defaultTabClassName}
            ${viewType === 'merge' ? 'text-white' : ''}
          `}
      >
        <span
          className={`
              ${selectedTabClassName}
              ${viewType === 'merge' ? 'translate-x-0' : '-translate-x-full'}
            `}
        ></span>
        <div className='relative z-10 flex justify-center items-center gap-2.5 '>
          <AiOutlineMergeCells />
          <p>Merged</p>
        </div>
      </button>
    </div>
  );
};

export default ViewToggle;
