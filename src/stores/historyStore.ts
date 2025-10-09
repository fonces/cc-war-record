import { create } from "zustand";
import type { History, CreateHistoryInput, UpdateHistoryInput, CharacterStats, Character, AddUsedJobInput } from "@/types";
import { generateUUID, getCurrentISOString } from "@/utils/uuid";
import { getFromLocalStorage, saveToLocalStorage } from "@/utils/localStorage";

// localStorageのキー
const STORAGE_KEY = "cc-war-record-histories";

/**
 * 履歴ストアの状態型
 */
type HistoryState = {
  /** 履歴一覧 */
  histories: History[];
  /** ローディング状態 */
  isLoading: boolean;
  /** エラーメッセージ */
  error: string | null;
};

/**
 * 履歴ストアのアクション型
 */
type HistoryActions = {
  /** 履歴一覧をlocalStorageから読み込み */
  loadHistories: () => void;
  /** 新しい履歴を作成 */
  createHistory: (input: CreateHistoryInput) => History;
  /** 履歴を更新 */
  updateHistory: (uuid: string, input: UpdateHistoryInput) => boolean;
  /** 履歴を削除 */
  deleteHistory: (uuid: string) => boolean;
  /** UUIDで履歴を取得 */
  getHistoryByUuid: (uuid: string) => History | undefined;
  /** 履歴一覧を日付順（新しい順）でソート */
  getSortedHistories: () => History[];
  /** キャラクター統計を追加または取得 */
  addCharacterStats: (historyUuid: string, character: Character) => CharacterStats | null;
  /** 使用ジョブを追加 */
  addUsedJob: (input: AddUsedJobInput) => boolean;
  /** エラーをクリア */
  clearError: () => void;
};

/**
 * 履歴管理用のZustandストア
 */
export const useHistoryStore = create<HistoryState & HistoryActions>((set, get) => ({
  // 初期状態
  histories: [],
  isLoading: false,
  error: null,

  // 履歴一覧をlocalStorageから読み込み
  loadHistories: () => {
    set({ isLoading: true, error: null });

    try {
      const histories = getFromLocalStorage<History[]>(STORAGE_KEY, []);
      set({ histories, isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        error: error instanceof Error ? error.message : "履歴の読み込みに失敗しました",
      });
    }
  },

  // 新しい履歴を作成
  createHistory: (input: CreateHistoryInput) => {
    const { histories } = get();

    // 重複チェック（シーズン名）
    const existingHistory = histories.find((h) => h.seasonName === input.seasonName);
    if (existingHistory) {
      set({ error: `シーズン「${input.seasonName}」は既に存在します` });
      throw new Error(`シーズン「${input.seasonName}」は既に存在します`);
    }

    const now = getCurrentISOString();
    const newHistory: History = {
      uuid: generateUUID(),
      seasonName: input.seasonName,
      createdAt: now,
      updatedAt: now,
      characterStats: [],
    };

    const updatedHistories = [...histories, newHistory];

    // localStorageに保存
    saveToLocalStorage(STORAGE_KEY, updatedHistories);

    set({
      histories: updatedHistories,
      error: null,
    });

    return newHistory;
  },

  // 履歴を更新
  updateHistory: (uuid: string, input: UpdateHistoryInput) => {
    const { histories } = get();

    const historyIndex = histories.findIndex((h) => h.uuid === uuid);
    if (historyIndex === -1) {
      set({ error: "指定された履歴が見つかりません" });
      return false;
    }

    // シーズン名の重複チェック（更新対象以外）
    if (input.seasonName) {
      const existingHistory = histories.find((h) => h.uuid !== uuid && h.seasonName === input.seasonName);
      if (existingHistory) {
        set({ error: `シーズン「${input.seasonName}」は既に存在します` });
        return false;
      }
    }

    const updatedHistory: History = {
      ...histories[historyIndex],
      ...input,
      updatedAt: getCurrentISOString(),
    };

    const updatedHistories = [...histories];
    updatedHistories[historyIndex] = updatedHistory;

    // localStorageに保存
    saveToLocalStorage(STORAGE_KEY, updatedHistories);

    set({
      histories: updatedHistories,
      error: null,
    });

    return true;
  },

  // 履歴を削除
  deleteHistory: (uuid: string) => {
    const { histories } = get();

    const historyIndex = histories.findIndex((h) => h.uuid === uuid);
    if (historyIndex === -1) {
      set({ error: "指定された履歴が見つかりません" });
      return false;
    }

    const updatedHistories = histories.filter((h) => h.uuid !== uuid);

    // localStorageに保存
    saveToLocalStorage(STORAGE_KEY, updatedHistories);

    set({
      histories: updatedHistories,
      error: null,
    });

    return true;
  },

  // UUIDで履歴を取得
  getHistoryByUuid: (uuid: string) => {
    const { histories } = get();
    return histories.find((h) => h.uuid === uuid);
  },

  // 履歴一覧を日付順（新しい順）でソート
  getSortedHistories: () => {
    const { histories } = get();
    return [...histories].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  // キャラクター統計を追加または取得
  addCharacterStats: (historyUuid: string, character: Character) => {
    const { histories } = get();

    const historyIndex = histories.findIndex((h) => h.uuid === historyUuid);
    if (historyIndex === -1) {
      set({ error: "指定された履歴が見つかりません" });
      return null;
    }

    const history = histories[historyIndex];

    // 既存のCharacterStatsを探す（同じキャラクター）
    const existingCharacterStats = history.characterStats.find((cs) => cs.character.uuid === character.uuid);

    if (existingCharacterStats) {
      // 既存のCharacterStatsが見つかった場合は、それを返す
      return existingCharacterStats;
    }

    // 新しいCharacterStatsを作成
    const newCharacterStats: CharacterStats = {
      character,
      usedJobs: [],
      recentMatches: [],
    };

    // 履歴を更新
    const updatedHistory: History = {
      ...history,
      characterStats: [...history.characterStats, newCharacterStats],
      updatedAt: getCurrentISOString(),
    };

    const updatedHistories = [...histories];
    updatedHistories[historyIndex] = updatedHistory;

    // localStorageに保存
    saveToLocalStorage(STORAGE_KEY, updatedHistories);

    set({
      histories: updatedHistories,
      error: null,
    });

    return newCharacterStats;
  },

  // 使用ジョブを追加
  addUsedJob: (input: AddUsedJobInput) => {
    const { histories } = get();

    const historyIndex = histories.findIndex((h) => h.uuid === input.seasonUuid);
    if (historyIndex === -1) {
      set({ error: "指定された履歴が見つかりません" });
      return false;
    }

    const history = histories[historyIndex];

    // 指定されたキャラクターのCharacterStatsを探す
    const characterStatsIndex = history.characterStats.findIndex((cs) => cs.character.uuid === input.characterUuid);

    if (characterStatsIndex === -1) {
      set({ error: "指定されたキャラクターが見つかりません" });
      return false;
    }

    const characterStats = history.characterStats[characterStatsIndex];

    // 既に同じジョブが登録されているかチェック
    if (characterStats.usedJobs.includes(input.job)) {
      // 重複登録は成功扱い（冪等性）
      return true;
    }

    // 新しいジョブを追加
    const updatedCharacterStats: CharacterStats = {
      ...characterStats,
      usedJobs: [...characterStats.usedJobs, input.job],
    };

    const updatedCharacterStatsArray = [...history.characterStats];
    updatedCharacterStatsArray[characterStatsIndex] = updatedCharacterStats;

    // 履歴を更新
    const updatedHistory: History = {
      ...history,
      characterStats: updatedCharacterStatsArray,
      updatedAt: getCurrentISOString(),
    };

    const updatedHistories = [...histories];
    updatedHistories[historyIndex] = updatedHistory;

    // localStorageに保存
    saveToLocalStorage(STORAGE_KEY, updatedHistories);

    set({
      histories: updatedHistories,
      error: null,
    });

    return true;
  },

  // エラーをクリア
  clearError: () => {
    set({ error: null });
  },
}));

// 初期化：コンポーネントマウント時に履歴を読み込む
if (typeof window !== "undefined") {
  useHistoryStore.getState().loadHistories();
}
