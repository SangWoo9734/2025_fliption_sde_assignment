'use client';

import ContentWrapper from '@/components/layout/ContentWrapper';
import SelectStyleSection from '@/components/page/NewProjectPage/SelectStyleSection';
import UploadImageSection from '@/components/page/NewProjectPage/UploadImageSection';
import uploadFormStore from '@/store/uploadFormStore';
import { useStore } from 'zustand';

const NEW_PROJECT_STEPS = ['upload-image', 'select-style'] as const;

type NewProjectStepType = (typeof NEW_PROJECT_STEPS)[number];

const NewProjectPage = () => {
  const { formStepIndex } = useStore(uploadFormStore);

  const currentSection: Record<NewProjectStepType, React.ReactNode> = {
    'upload-image': <UploadImageSection />,
    'select-style': <SelectStyleSection />,
  };

  const formatStepTitle = (title: string) => {
    const formattedWords = title
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1));

    return formattedWords.join(' ');
  };

  return (
    <div className='flex-1 flex flex-col gap-8'>
      <div className='flex gap-10 m-auto'>
        {NEW_PROJECT_STEPS.map((step, index) => (
          <div key={step} className='flex items-center gap-2.5 text-xl'>
            <div
              className={`inline-flex items-center justify-center border-2 rounded-full w-10 h-10 ${
                step === NEW_PROJECT_STEPS[formStepIndex] &&
                'bg-main text-white'
              }`}
            >
              {index + 1}
            </div>

            <p
              className={`font-bold ${
                step === NEW_PROJECT_STEPS[formStepIndex] && 'text-main'
              }`}
            >
              {formatStepTitle(step)}
            </p>
          </div>
        ))}
      </div>
      <ContentWrapper>
        {currentSection[NEW_PROJECT_STEPS[formStepIndex]]}
      </ContentWrapper>
    </div>
  );
};

export default NewProjectPage;
