import postFeedback from '@/apis/postFeedback';
import ConfirmModal from '@/components/common/Modal/ConfirmModal';
import modalStore from '@/store/modalStore';
import { useMutation } from '@tanstack/react-query';
import { FormEvent, useRef } from 'react';
import { useStore } from 'zustand';

const useFeedbackForm = () => {
  const { closeModal, openModal } = useStore(modalStore);
  const projectImageRef = useRef<HTMLImageElement>(null);
  const feedbackTitleRef = useRef<HTMLParagraphElement>(null);
  const feedbackCategoryRef = useRef<HTMLSelectElement>(null);
  const feedbackTextRef = useRef<HTMLTextAreaElement>(null);
  const { mutate } = useMutation({
    mutationFn: postFeedback,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title = feedbackTitleRef.current?.textContent;
    const category = feedbackCategoryRef.current?.value;
    const contents = feedbackTextRef.current?.value.trim();

    if (!title || !category || !contents) {
      alert('폼에 비어있는 필드가 있습니다.');
      return;
    }

    mutate(
      {
        title,
        category,
        contents,
        projectImageUrl: projectImageRef.current?.src ?? '',
      },
      {
        onSuccess() {
          closeModal();
          openModal({
            contents: <ConfirmModal />,
          });
        },
      }
    );
  };

  return {
    handleSubmit,
    projectImageRef,
    feedbackTitleRef,
    feedbackCategoryRef,
    feedbackTextRef,
    closeModal,
  };
};

export default useFeedbackForm;
