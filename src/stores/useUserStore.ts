import { create } from "zustand";

type UserState = {
  name?: string;
  letter?: string;
  color?: string;
  setName: (name: string) => void;
  setLetter: (letter: string) => void;
  setColor: (color: string) => void;
};

export const useUserStore = create<UserState>(set => ({
  name: undefined,
  letter: undefined,
  color: undefined,
  setName: name => set({ name }),
  setLetter: letter => set({ letter }),
  setColor: color => set({ color }),
}));