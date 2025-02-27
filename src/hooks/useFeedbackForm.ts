import modalStore from '@/store/modalStore';
import { FormEvent, useRef } from 'react';
import { useStore } from 'zustand';

const useFeedbackForm = () => {
  const { closeModal } = useStore(modalStore);
  const feedbackCategoryRef = useRef<HTMLSelectElement>(null);
  const feedbackTextRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const category = feedbackCategoryRef.current?.value;
    const details = feedbackTextRef.current?.value.trim();

    if (!category || !details) {
      alert('폼에 비어있는 필드가 있습니다.');
      return;
    }

    const feedbackData = { category, details };
    console.log('Submitted Feedback:', feedbackData);

    closeModal();
  };

  return { handleSubmit, feedbackCategoryRef, feedbackTextRef, closeModal };
};

export default useFeedbackForm;
