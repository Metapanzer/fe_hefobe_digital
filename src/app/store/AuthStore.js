import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: {},
  login: async (pond) => {
    const response = await fetch(pond);
    set({ user: await response.json() });
  },
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeUser: () => set({ user: {} }),
}));
