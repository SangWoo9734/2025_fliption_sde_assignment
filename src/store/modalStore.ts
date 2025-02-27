import { create } from 'zustand';

type OpenModalProps = Pick<ModalState, 'contents'>;

interface ModalAction {
  openModal: (props: OpenModalProps) => void;
  closeModal: () => void;
}

interface ModalState {
  isOpen: boolean;
  contents: React.ReactNode;
}

const initialModalState: ModalState = {
  isOpen: false,
  contents: null,
};

const modalStore = create<ModalState & ModalAction>((set) => ({
  ...initialModalState,

  openModal: (props: OpenModalProps) =>
    set((state) => {
      if (state.isOpen) return state;

      return { ...state, isOpen: true, ...props };
    }),
  closeModal: () =>
    set((state) => {
      if (!state.isOpen) return state;

      return { ...initialModalState };
    }),
}));

export default modalStore;
