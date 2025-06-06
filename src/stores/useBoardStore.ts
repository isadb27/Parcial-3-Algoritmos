import { create } from "zustand";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../services/firebase";

type Cell = { id: string; color: string; letter: string };

type BoardState = {
  cells: Record<string, Cell>;
  claimCell: (id: string, color: string, letter: string) => Promise<void>;
};

export const useBoardStore = create<BoardState>((set) => {
  const cellsCollection = collection(db, "cells");
  onSnapshot(cellsCollection, snapshot => {
    const updates: Record<string, Cell> = {};
    snapshot.docs.forEach(d => {
      updates[d.id] = { id: d.id, ...(d.data() as any) };
    });
    set({ cells: updates });
  });

  return {
    cells: {},
    claimCell: async (id, color, letter) => {
      await setDoc(doc(db, "cells", id), { color, letter });
    }
  };
});