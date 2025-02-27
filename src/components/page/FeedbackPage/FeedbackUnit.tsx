'use client';

import { FeedbackType } from '@/types/feedbackType';
import Image from 'next/image';
import { useRef, useState } from 'react';

const FeedbackUnit = ({ feedbackInfo }: { feedbackInfo: FeedbackType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const { title, createdAt, status, category, contents } = feedbackInfo;

  return (
    <div className='border rounded-lg shadow-md bg-white'>
      <button
        className='flex items-center justify-between w-full p-4 cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='flex items-center gap-4'>
          <Image
            src='/images/style3.png'
            alt='Project image'
            width={80}
            height={100}
            className='rounded-md'
          />
          <div className='flex flex-col items-start'>
            <h2 className='text-lg font-semibold'>{title}</h2>
            <p className='text-gray-500 text-sm'>
              {new Date(createdAt).toDateString()}
            </p>
          </div>
        </div>
        <p className='text-green-600 font-medium'>{status}</p>
        <span className='text-xl'>{isOpen ? '▲' : '▼'}</span>
      </button>

      <div
        ref={contentRef}
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='p-4 space-y-3'>
          <div>
            <label className='font-medium text-gray-700'>
              What issue do you see?
            </label>
            <p className='border rounded-md bg-gray-100 p-2 mt-1 text-gray-800'>
              {category}
            </p>
          </div>

          <div>
            <label className='font-medium text-gray-700'>
              Additional details (optional)
            </label>
            <textarea
              className='w-full border-2 bg-gray-100 rounded-md p-2 mt-1 resize-none h-24 text-gray-800'
              readOnly
              value={contents}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackUnit;
