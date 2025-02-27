'use client';

import Button from '@/components/common/Button';
import FeedbackModal from '@/components/common/Modal/FeedbackModal';
import StatusChip from '@/components/common/StatusChip';
import ContentWrapper from '@/components/layout/ContentWrapper';
import DoneContent from '@/components/page/DirectoryPage/DoneContent';
import FailedContent from '@/components/page/DirectoryPage/FailedCotnent';
import ProcessingContent from '@/components/page/DirectoryPage/ProcessingContent';
import WaitingContent from '@/components/page/DirectoryPage/WaitingContent';
import modalStore from '@/store/modalStore';
import { StatusType } from '@/types/SwapType';

import { TbBubbleTextFilled } from 'react-icons/tb';
import { useStore } from 'zustand';

const ProjectPage = () => {
  const { openModal } = useStore(modalStore);

  const projectContent: Record<StatusType, React.ReactNode> = {
    waiting: <WaitingContent />,
    processing: <ProcessingContent />,
    done: <DoneContent />,
    failed: <FailedContent />,
  };

  const clickFeedbackButton = () => {
    openModal({
      contents: <FeedbackModal />,
    });
  };

  return (
    <ContentWrapper>
      <div className='flex justify-between items-start'>
        <div className='flex flex-col gap-2 mb-5'>
          <div className='flex items-center gap-8'>
            <h1 className='text-3xl'>title</h1>
            <StatusChip status='failed' />
          </div>
          <div className='flex gap-2.5 text-sm text-gray-500'>
            <p>user-08</p>
            <p>2025.02.11</p>
          </div>
        </div>
        <Button
          className='flex items-center gap-2'
          onClick={clickFeedbackButton}
        >
          <TbBubbleTextFilled />
          <p>Feedback</p>
        </Button>
      </div>
      <div className='flex-1 flex flex-col justify-center items-center gap-4 p-6 rounded-lg bg-gray-200'>
        {projectContent['done']}
      </div>
    </ContentWrapper>
  );
};

export default ProjectPage;
