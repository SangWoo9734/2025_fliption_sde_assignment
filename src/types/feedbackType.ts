export type FeedbackStatus = 'Answering' | 'Answered';

export interface FeedbackFormType {
  title: string;
  category: string;
  contents: string;
  projectImageUrl: string;
}

export interface FeedbackType {
  id: string;
  userId: string;
  title: string;
  projectImageUrl: string;
  category: string;
  contents: string;
  createdAt: Date;
  status: FeedbackStatus;
}
