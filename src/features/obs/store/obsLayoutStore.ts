import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { HudElement, Position, Size } from "../types";

type ObsLayoutState = {
  elements: HudElement[];
  editMode: boolean;
  selectedElementId: string | null;
  editingElementId: string | null;
  updateElementPosition: (id: string, position: Position) => void;
  updateElementSize: (id: string, size: Size) => void;
  updateElement: (id: string, updates: Partial<HudElement>) => void;
  toggleEditMode: () => void;
  resetLayout: () => void;
  selectElement: (id: string | null) => void;
  setEditingElement: (id: string | null) => void;
  addElement: (element: HudElement) => void;
  removeElement: (id: string) => void;
  moveElement: (id: string, newIndex: number) => void;
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
      selectedElementId: null,
      editingElementId: null,
      updateElementPosition: (id, position) =>
        set((state) => ({
          elements: state.elements.map((el) => (el.id === id ? { ...el, position } : el)),
        })),
      updateElementSize: (id, size) =>
        set((state) => ({
          elements: state.elements.map((el) => (el.id === id ? { ...el, size } : el)),
        })),
      updateElement: (id, updates) =>
        set((state) => ({
          elements: state.elements.map((el) => (el.id === id ? { ...el, ...updates } : el)),
        })),
      toggleEditMode: () => set((state) => ({ editMode: !state.editMode })),
      resetLayout: () => set({ elements: DEFAULT_ELEMENTS }),
      selectElement: (id) => set({ selectedElementId: id }),
      setEditingElement: (id) => set({ editingElementId: id }),
      addElement: (element) =>
        set((state) => ({
          elements: [...state.elements, element],
        })),
      removeElement: (id) =>
        set((state) => ({
          elements: state.elements.filter((el) => el.id !== id),
          selectedElementId: state.selectedElementId === id ? null : state.selectedElementId,
          editingElementId: state.editingElementId === id ? null : state.editingElementId,
        })),
      moveElement: (id, newIndex) =>
        set((state) => {
          const currentIndex = state.elements.findIndex((el) => el.id === id);
          if (currentIndex === -1 || currentIndex === newIndex) return state;

          const newElements = [...state.elements];
          const [element] = newElements.splice(currentIndex, 1);
          newElements.splice(newIndex, 0, element);

          return { elements: newElements };
        }),
    }),
    {
      name: "obs-layout-storage",
    },
  ),
);
