import { create } from 'zustand'

interface isAdminStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const isAdminModal = create<isAdminStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))