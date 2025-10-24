import i18next from "i18next";
import { create } from "zustand";
import { getCurrentISOString } from "@/utils";
import { getFromLocalStorage, removeFromLocalStorage, saveToLocalStorage, STORAGE_KEYS } from "@/utils/localStorage";
import { generateUUID } from "@/utils/uuid";
import { useCharacterStore } from "./characterStore";
import type { History, CreateHistoryInput, UpdateHistoryInput, CharacterStats, Character, AddUsedJobInput, MatchRecord } from "@/types";

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
  /** 指定したシーズンのマッチレコードを取得 */
  getMatchRecordsForSeason: (seasonUuid: string) => MatchRecord[];
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
      const histories = getFromLocalStorage(STORAGE_KEYS.HISTORIES, []);
      set({ histories, isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        error: error instanceof Error ? error.message : i18next.t("pages.histories.errors.loadFailed"),
      });
    }
  },

  // 新しい履歴を作成
  createHistory: (input: CreateHistoryInput) => {
    const { histories } = get();

    // 重複チェック（シーズン名）
    const existingHistory = histories.find((h) => h.seasonName === input.seasonName);
    if (existingHistory) {
      const errorMsg = i18next.t("pages.histories.errors.alreadyExists", { seasonName: input.seasonName });
      set({ error: errorMsg });
      throw new Error(errorMsg);
    }

    const now = getCurrentISOString();
    const newHistory: History = {
      uuid: generateUUID(),
      seasonName: input.seasonName,
      createdAt: now,
      updatedAt: now,
      characterStats: [],
    };

    // 既存のシーズンがある場合、現在のマッチレコードを移動
    if (histories.length > 0) {
      // 最新のシーズンのUUIDを取得（日付順でソート）
      const latestHistory = histories.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];

      // characterStoreから最新シーズンのデータを取得
      const characterStats = useCharacterStore.getState().getCharacterStatsForSeason(latestHistory.uuid);

      // キャラクター統計から全てのマッチレコードを収集
      const allMatchRecords: MatchRecord[] = [];
      characterStats.forEach((stats) => {
        allMatchRecords.push(...stats.recentMatches);
      });

      // マッチレコードが存在する場合のみアーカイブ
      if (allMatchRecords.length > 0) {
        // 前のシーズンのキーにマッチレコードを保存
        saveToLocalStorage(`histories-${latestHistory.uuid}`, allMatchRecords);

        // 現在のマッチレコードをクリア
        useCharacterStore.getState().clearMatchRecords();
      }
    }

    const updatedHistories = [...histories, newHistory];

    // localStorageに保存
    saveToLocalStorage(STORAGE_KEYS.HISTORIES, updatedHistories);

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
      set({ error: i18next.t("pages.histories.errors.notFound") });
      return false;
    }

    // シーズン名の重複チェック（更新対象以外）
    if (input.seasonName) {
      const existingHistory = histories.find((h) => h.uuid !== uuid && h.seasonName === input.seasonName);
      if (existingHistory) {
        set({ error: i18next.t("pages.histories.errors.alreadyExists", { seasonName: input.seasonName }) });
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
    saveToLocalStorage(STORAGE_KEYS.HISTORIES, updatedHistories);

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
      set({ error: i18next.t("pages.histories.errors.notFound") });
      return false;
    }

    try {
      removeFromLocalStorage(`histories-${uuid}`);
    } catch (error) {
      console.error(i18next.t("pages.histories.errors.deleteMatchRecordsFailed", { uuid }), error);
      return false;
    }

    const updatedHistories = histories.filter((h) => h.uuid !== uuid);

    // localStorageに保存
    saveToLocalStorage(STORAGE_KEYS.HISTORIES, updatedHistories);

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
      set({ error: i18next.t("pages.histories.errors.notFound") });
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
    saveToLocalStorage(STORAGE_KEYS.HISTORIES, updatedHistories);

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
      set({ error: i18next.t("pages.histories.errors.notFound") });
      return false;
    }

    const history = histories[historyIndex];

    // 指定されたキャラクターのCharacterStatsを探す
    const characterStatsIndex = history.characterStats.findIndex((cs) => cs.character.uuid === input.characterUuid);

    if (characterStatsIndex === -1) {
      set({ error: i18next.t("pages.histories.errors.characterNotFound") });
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
    saveToLocalStorage(STORAGE_KEYS.HISTORIES, updatedHistories);

    set({
      histories: updatedHistories,
      error: null,
    });

    return true;
  },

  // 指定したシーズンのマッチレコードを取得
  getMatchRecordsForSeason: (seasonUuid: string) => {
    try {
      const matchRecords = getFromLocalStorage(`histories-${seasonUuid}`, []);
      return matchRecords;
    } catch (error) {
      console.error(i18next.t("pages.histories.errors.loadMatchRecordsFailed", { seasonUuid }), error);
      return [];
    }
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
