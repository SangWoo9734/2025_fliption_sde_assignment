import { useState } from 'react';
import MergedContentView from './MergedContentView';
import SplittedContentView from './SplittedContentView';
import ViewToggle from './ViewToggle';

const DoneContent = () => {
  const [viewType, setViewType] = useState<'split' | 'merge'>('split');

  return (
    <>
      <ViewToggle viewType={viewType} setViewType={setViewType} />
      {viewType === 'split' ? <SplittedContentView /> : <MergedContentView />}
    </>
  );
};

export default DoneContent;
