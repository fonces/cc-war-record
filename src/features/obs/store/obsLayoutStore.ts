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

/**
 * 履歴管理用の状態スナップショット
 */
type HistorySnapshot = {
  elements: HudElement[];
  screenSize: ScreenSize;
};

type ObsLayoutState = {
  elements: HudElement[];
  editMode: boolean;
  selectedElementId: string | null;
  selectedElementIds: string[]; // 複数選択用
  editingElementId: string | null;
  screenSize: ScreenSize;
  history: HistorySnapshot[];
  historyIndex: number;
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
  undo: () => void;
  redo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;
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

/**
 * 履歴の最大数
 */
const MAX_HISTORY = 50;

/**
 * 履歴にスナップショットを追加するヘルパー関数
 */
const saveToHistory = (state: ObsLayoutState): Partial<ObsLayoutState> => {
  const snapshot: HistorySnapshot = {
    elements: state.elements,
    screenSize: state.screenSize,
  };

  // 現在の位置より後の履歴を削除し、新しいスナップショットを追加
  const newHistory = [...state.history.slice(0, state.historyIndex + 1), snapshot];

  // 履歴が最大数を超えた場合、古いものを削除
  const trimmedHistory = newHistory.slice(-MAX_HISTORY);

  return {
    history: trimmedHistory,
    historyIndex: trimmedHistory.length - 1,
  };
};

export const useObsLayoutStore = create<ObsLayoutState>()(
  persist(
    (set, get) => ({
      elements: DEFAULT_ELEMENTS,
      editMode: true, // デフォルトで編集モード有効
      selectedElementId: null,
      selectedElementIds: [],
      editingElementId: null,
      screenSize: DEFAULT_SCREEN_SIZE,
      history: [{ elements: DEFAULT_ELEMENTS, screenSize: DEFAULT_SCREEN_SIZE }],
      historyIndex: 0,
      updateElementPosition: (id, position) =>
        set((state) => {
          const newState = {
            elements: state.elements.map((el) => (el.id === id ? { ...el, position } : el)),
          };
          return { ...newState, ...saveToHistory({ ...state, ...newState }) };
        }),
      updateElementSize: (id, size) =>
        set((state) => {
          const newState = {
            elements: state.elements.map((el) => (el.id === id ? { ...el, size } : el)),
          };
          return { ...newState, ...saveToHistory({ ...state, ...newState }) };
        }),
      updateElement: (id, updates) =>
        set((state) => {
          const newState = {
            elements: state.elements.map((el) => (el.id === id ? { ...el, ...updates } : el)),
          };
          return { ...newState, ...saveToHistory({ ...state, ...newState }) };
        }),
      toggleEditMode: () => set((state) => ({ editMode: !state.editMode })),
      resetLayout: () =>
        set((state) => {
          const newState = { elements: DEFAULT_ELEMENTS };
          return { ...newState, ...saveToHistory({ ...state, ...newState }) };
        }),
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
        set((state) => {
          const newState = {
            elements: state.elements.map((el) => (state.selectedElementIds.includes(el.id) ? { ...el, position: { x: el.position.x + deltaX, y: el.position.y + deltaY } } : el)),
          };
          return { ...newState, ...saveToHistory({ ...state, ...newState }) };
        }),
      setEditingElement: (id) => set({ editingElementId: id }),
      addElement: (element) =>
        set((state) => {
          const newState = {
            elements: [...state.elements, element],
          };
          return { ...newState, ...saveToHistory({ ...state, ...newState }) };
        }),
      removeElement: (id) =>
        set((state) => {
          const newState = {
            elements: state.elements.filter((el) => el.id !== id),
            selectedElementId: state.selectedElementId === id ? null : state.selectedElementId,
            selectedElementIds: state.selectedElementIds.filter((eid) => eid !== id),
            editingElementId: state.editingElementId === id ? null : state.editingElementId,
          };
          return { ...newState, ...saveToHistory({ ...state, ...newState }) };
        }),
      moveElement: (id, newIndex) =>
        set((state) => {
          const currentIndex = state.elements.findIndex((el) => el.id === id);
          if (currentIndex === -1 || currentIndex === newIndex) return state;

          const newElements = [...state.elements];
          const [element] = newElements.splice(currentIndex, 1);
          newElements.splice(newIndex, 0, element);

          const newState = { elements: newElements };
          return { ...newState, ...saveToHistory({ ...state, ...newState }) };
        }),
      setElements: (elements) =>
        set((state) => {
          const newState = {
            elements,
            selectedElementId: null,
            selectedElementIds: [],
            editingElementId: null,
          };
          return { ...newState, ...saveToHistory({ ...state, ...newState }) };
        }),
      setScreenSize: (size) => set({ screenSize: size }),
      undo: () =>
        set((state) => {
          if (state.historyIndex <= 0) return state;

          const newIndex = state.historyIndex - 1;
          const snapshot = state.history[newIndex];

          return {
            elements: snapshot.elements,
            screenSize: snapshot.screenSize,
            historyIndex: newIndex,
          };
        }),
      redo: () =>
        set((state) => {
          if (state.historyIndex >= state.history.length - 1) return state;

          const newIndex = state.historyIndex + 1;
          const snapshot = state.history[newIndex];

          return {
            elements: snapshot.elements,
            screenSize: snapshot.screenSize,
            historyIndex: newIndex,
          };
        }),
      canUndo: () => {
        const state = get();
        return state.historyIndex > 0;
      },
      canRedo: () => {
        const state = get();
        return state.historyIndex < state.history.length - 1;
      },
    }),
    {
      name: "obs-layout-storage",
    },
  ),
);
