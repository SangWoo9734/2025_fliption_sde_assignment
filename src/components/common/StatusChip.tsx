import { StatusType } from '@/types/SwapType';

type ChipSizeEnum = 'sm' | 'md' | 'lg';

const StatusChip = ({
  size = 'md',
  status,
  className = '',
}: {
  size?: ChipSizeEnum;
  status: StatusType;
  className?: string;
}) => {
  const chipStyle: Record<StatusType, string> = {
    waiting: 'bg-chips-wait-background text-chips-wait-text',
    processing: 'bg-chips-processing-background text-chips-processing-text',
    failed: 'bg-chips-failed-background text-chips-failed-text',
    done: 'bg-chips-done-background text-chips-done-text',
  };

  const chipSize: Record<ChipSizeEnum, string> = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-md',
  };

  return (
    <div
      className={`${chipStyle[status]} px-2 py-1 rounded-md ${chipSize[size]} font-bold ${className}`}
    >
      <p>{status.charAt(0).toUpperCase() + status.slice(1)}</p>
    </div>
  );
};

export default StatusChip;
