import { ProjectType } from '@/types/projectType';
import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';

interface ActionType {
  setUserImage: (image: File) => void;
  setStyleIndex: (selectedIndex: number) => void;
  moveNext: () => void;
  resetState: () => void;
}

interface StateType {
  formStepIndex: number;
  userImage: File | null;
  styleIndex: number;
}

interface ComputedStateType {
  uploadFormData: ProjectType;
}

const initalState: StateType = {
  formStepIndex: 0,
  userImage: null,
  styleIndex: 0,
};

const uploadFormStore = create<ActionType & StateType & ComputedStateType>(
  (set) => ({
    // original states
    ...initalState,

    // computed states
    get uploadFormData() {
      const now = new Date();
      return {
        id: uuidv4(),
        userId: 'user123',
        title: `Project - ${now.getTime()}`,
        sourceImageUrl: '/images/user1.jpg',
        targetImageUrl: '/images/style3.png',
        resultImageUrl: '/images/result3.png',
        status: 'waiting',
        createdAt: now,
        updatedAt: now,
      } as ProjectType;
    },

    // actions
    setUserImage: (image: File) =>
      set((state) => ({ ...state, userImage: image })),

    setStyleIndex: (selectedIndex: number) =>
      set((state) => ({ ...state, styleIndex: selectedIndex })),

    moveNext: () =>
      set((state) => ({ ...state, formStepIndex: state.formStepIndex + 1 })),

    resetState: () => set(() => ({ ...initalState })),
  })
);

export default uploadFormStore;
