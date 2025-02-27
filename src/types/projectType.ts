export type StatusType = 'waiting' | 'processing' | 'done' | 'failed';

export interface ProjectType {
  id: string;
  userId: string;
  title: string;
  sourceImageUrl: string;
  targetImageUrl: string;
  resultImageUrl: string;
  status: StatusType;
  createdAt: Date;
  updatedAt: Date;
}
