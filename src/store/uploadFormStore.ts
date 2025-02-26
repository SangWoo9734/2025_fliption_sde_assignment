import { create } from 'zustand';

interface ActionType {
  setUserImage: (image: File) => void;
  setStyleIndex: (selectedIndex: number) => void;
  moveNext: () => void;
}

interface StateType {
  formStepIndex: number;
  userImage: File | null;
  styleIndex: number;
}

const initalState: StateType = {
  formStepIndex: 0,
  userImage: null,
  styleIndex: 0,
};

const uploadFormStore = create<ActionType & StateType>((set) => ({
  // original states
  ...initalState,

  // actions
  setUserImage: (image: File) =>
    set((state) => ({ ...state, userImage: image })),

  setStyleIndex: (selectedIndex: number) =>
    set((state) => ({ ...state, styleIndex: selectedIndex })),

  moveNext: () =>
    set((state) => ({ ...state, formStepIndex: state.formStepIndex + 1 })),
}));

export default uploadFormStore;
