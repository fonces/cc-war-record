import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { HudElement, Position, Size } from "../types";

/**
 * プリセット画面サイズ
 */
export type ScreenSizePreset = "1920x1080" | "1280x720" | "2560x1440" | "3840x2160" | "custom";

/**
 * 画面サイズ設定
 */
export type ScreenSize = {
  width: number;
  height: number;
  preset: ScreenSizePreset;
};

type ObsLayoutState = {
  elements: HudElement[];
  editMode: boolean;
  selectedElementId: string | null;
  selectedElementIds: string[]; // 複数選択用
  editingElementId: string | null;
  screenSize: ScreenSize;
  updateElementPosition: (id: string, position: Position) => void;
  updateElementSize: (id: string, size: Size) => void;
  updateElement: (id: string, updates: Partial<HudElement>) => void;
  toggleEditMode: () => void;
  resetLayout: () => void;
  selectElement: (id: string | null) => void;
  toggleSelectElement: (id: string) => void; // 複数選択トグル
  clearSelection: () => void; // 選択解除
  updateSelectedElementsPosition: (deltaX: number, deltaY: number) => void; // グループ移動
  setEditingElement: (id: string | null) => void;
  addElement: (element: HudElement) => void;
  removeElement: (id: string) => void;
  moveElement: (id: string, newIndex: number) => void;
  setElements: (elements: HudElement[]) => void;
  setScreenSize: (size: ScreenSize) => void;
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

/**
 * デフォルト画面サイズ（フルHD）
 */
const DEFAULT_SCREEN_SIZE: ScreenSize = {
  width: 1920,
  height: 1080,
  preset: "1920x1080",
};

export const useObsLayoutStore = create<ObsLayoutState>()(
  persist(
    (set) => ({
      elements: DEFAULT_ELEMENTS,
      editMode: true, // デフォルトで編集モード有効
      selectedElementId: null,
      selectedElementIds: [],
      editingElementId: null,
      screenSize: DEFAULT_SCREEN_SIZE,
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
      selectElement: (id) => set({ selectedElementId: id, selectedElementIds: id ? [id] : [] }),
      toggleSelectElement: (id) =>
        set((state) => {
          const isSelected = state.selectedElementIds.includes(id);
          if (isSelected) {
            const newIds = state.selectedElementIds.filter((eid) => eid !== id);
            return {
              selectedElementIds: newIds,
              selectedElementId: newIds.length > 0 ? newIds[0] : null,
            };
          } else {
            const newIds = [...state.selectedElementIds, id];
            return {
              selectedElementIds: newIds,
              selectedElementId: id,
            };
          }
        }),
      clearSelection: () => set({ selectedElementId: null, selectedElementIds: [] }),
      updateSelectedElementsPosition: (deltaX, deltaY) =>
        set((state) => ({
          elements: state.elements.map((el) => (state.selectedElementIds.includes(el.id) ? { ...el, position: { x: el.position.x + deltaX, y: el.position.y + deltaY } } : el)),
        })),
      setEditingElement: (id) => set({ editingElementId: id }),
      addElement: (element) =>
        set((state) => ({
          elements: [...state.elements, element],
        })),
      removeElement: (id) =>
        set((state) => ({
          elements: state.elements.filter((el) => el.id !== id),
          selectedElementId: state.selectedElementId === id ? null : state.selectedElementId,
          selectedElementIds: state.selectedElementIds.filter((eid) => eid !== id),
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
      setElements: (elements) => set({ elements, selectedElementId: null, selectedElementIds: [], editingElementId: null }),
      setScreenSize: (size) => set({ screenSize: size }),
    }),
    {
      name: "obs-layout-storage",
    },
  ),
);
