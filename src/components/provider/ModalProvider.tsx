'use client';

import modalStore from '@/store/modalStore';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useStore } from 'zustand';

const ModalProvider = () => {
  const { isOpen, contents } = useStore(modalStore);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';

    return () => {
      if (isOpen) document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50'>
      <div className='absolute top-1/2 left-1/2 max-w-[400px] w-4/5 h-content p-4 rounded-lg bg-white text-black transform -translate-x-1/2 -translate-y-1/2'>
        {contents}
      </div>
    </div>,
    document.body
  );
};

export default ModalProvider;
