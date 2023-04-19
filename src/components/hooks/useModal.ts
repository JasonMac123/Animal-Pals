import { create } from "zustand";

interface modalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useModal = create<modalStore>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useModal;
