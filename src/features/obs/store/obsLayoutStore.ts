import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { HudElement, Position } from "../types";

type ObsLayoutState = {
  elements: HudElement[];
  editMode: boolean;
  updateElementPosition: (id: string, position: Position) => void;
  toggleEditMode: () => void;
  resetLayout: () => void;
};

/**
 * デフォルトのHUD要素配置
 */
const DEFAULT_ELEMENTS: HudElement[] = [
  { id: "winCount", type: "winCount", position: { x: 50, y: 50 }, visible: true },
  { id: "loseCount", type: "loseCount", position: { x: 50, y: 150 }, visible: true },
  { id: "winRate", type: "winRate", position: { x: 50, y: 250 }, visible: true },
  { id: "totalMatches", type: "totalMatches", position: { x: 50, y: 350 }, visible: true },
];

export const useObsLayoutStore = create<ObsLayoutState>()(
  persist(
    (set) => ({
      elements: DEFAULT_ELEMENTS,
      editMode: true, // デフォルトで編集モード有効
      updateElementPosition: (id, position) =>
        set((state) => ({
          elements: state.elements.map((el) => (el.id === id ? { ...el, position } : el)),
        })),
      toggleEditMode: () => set((state) => ({ editMode: !state.editMode })),
      resetLayout: () => set({ elements: DEFAULT_ELEMENTS }),
    }),
    {
      name: "obs-layout-storage",
    },
  ),
);
