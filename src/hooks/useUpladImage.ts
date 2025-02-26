import uploadFormStore from '@/store/uploadFormStore';
import { ChangeEvent, DragEvent, useRef } from 'react';

import { useStore } from 'zustand';

const useUpladImage = () => {
  const { setUserImage, moveNext, userImage } = useStore(uploadFormStore);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDragOverEvent = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDropEvent = async (e: DragEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUserImage(e.dataTransfer.files[0]);
    }
  };

  const handleClickEvent = () => {
    if (inputRef.current) inputRef.current.click();
  };

  const handleFileChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUserImage(e.target.files[0]);
    }
  };

  const isImageValid = uploadFormStore((state) => state.userImage !== null);

  return {
    inputRef,
    handleDragOverEvent,
    handleDropEvent,
    handleClickEvent,
    handleFileChangeEvent,
    moveNext,
    isImageValid,
    userImage,
  };
};

export default useUpladImage;
