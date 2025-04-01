import { create } from 'zustand'

interface isAuthorizedStore {
    isAdmin: boolean;
    setIsAdmin: () => void;
    setIsNotAdmin: () => void;
};

export const isAuthorized = create<isAuthorizedStore>((set) => ({
    isAdmin: false,
    setIsAdmin: () => set({ isAdmin: true }),
    setIsNotAdmin: () => set({ isAdmin: false }),
}))