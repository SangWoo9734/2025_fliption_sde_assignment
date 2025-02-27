import { useState } from 'react';
import MergedContentView from './MergedContentView';
import SplittedContentView from './SplittedContentView';
import ViewToggle from './ViewToggle';

const DoneContent = ({
  sourceImageUrl,
  resultImageUrl,
}: {
  sourceImageUrl: string;
  resultImageUrl: string;
}) => {
  const [viewType, setViewType] = useState<'split' | 'merge'>('split');

  return (
    <>
      <ViewToggle viewType={viewType} setViewType={setViewType} />
      {viewType === 'split' ? (
        <SplittedContentView
          sourceImageUrl={sourceImageUrl}
          resultImageUrl={resultImageUrl}
        />
      ) : (
        <MergedContentView
          sourceImageUrl={sourceImageUrl}
          resultImageUrl={resultImageUrl}
        />
      )}
    </>
  );
};

export default DoneContent;
