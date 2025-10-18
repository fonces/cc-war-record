import { create } from "zustand";
import i18next from "i18next";
import type { Character, MatchRecord, CharacterStats, CreateCharacterInput, CreateMatchRecordInput } from "@/types";
import { generateUUID, getCurrentISOString } from "@/utils/uuid";
import { getFromLocalStorage, saveToLocalStorage } from "@/utils/localStorage";
import { useHistoryStore } from "./historyStore";

// localStorageのキー
const CHARACTERS_STORAGE_KEY = "cc-war-record-characters";
const MATCH_RECORDS_STORAGE_KEY = "cc-war-record-match-records";

/**
 * キャラクター・戦績ストアの状態型
 */
type CharacterState = {
  /** キャラクター一覧 */
  characters: Character[];
  /** 戦績記録一覧 */
  matchRecords: MatchRecord[];
  /** ローディング状態 */
  isLoading: boolean;
  /** エラーメッセージ */
  error: string | null;
};

/**
 * キャラクター・戦績ストアのアクション型
 */
type CharacterActions = {
  /** データをlocalStorageから読み込み */
  loadData: () => void;
  /** 新しいキャラクターを作成 */
  createCharacter: (input: CreateCharacterInput) => Character;
  /** キャラクターを更新 */
  updateCharacter: (uuid: string, name: string) => boolean;
  /** キャラクターを削除 */
  deleteCharacter: (uuid: string) => boolean;
  /** 新しい戦績記録を作成 */
  createMatchRecord: (input: CreateMatchRecordInput) => MatchRecord;
  /** 戦績記録を削除 */
  deleteMatchRecord: (uuid: string) => boolean;
  /** 戦績記録をクリア */
  clearMatchRecords: () => void;
  /** 特定のシーズンのキャラクター戦績サマリーを取得 */
  getCharacterStatsForSeason: (seasonUuid: string) => CharacterStats[];
  /** 特定のキャラクターの戦績記録を取得 */
  getMatchRecordsForCharacter: (characterUuid: string, seasonUuid?: string) => MatchRecord[];
  /** エラーをクリア */
  clearError: () => void;
};

/**
 * キャラクター・戦績管理用のZustandストア
 */
export const useCharacterStore = create<CharacterState & CharacterActions>((set, get) => ({
  // 初期状態
  characters: [],
  matchRecords: [],
  isLoading: false,
  error: null,

  // データをlocalStorageから読み込み
  loadData: () => {
    set({ isLoading: true, error: null });

    try {
      const characters = getFromLocalStorage<Character[]>(CHARACTERS_STORAGE_KEY, []);
      const matchRecords = getFromLocalStorage<MatchRecord[]>(MATCH_RECORDS_STORAGE_KEY, []);
      set({ characters, matchRecords, isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        error: error instanceof Error ? error.message : i18next.t("character.errors.loadFailed"),
      });
    }
  },

  // 新しいキャラクターを作成
  createCharacter: (input: CreateCharacterInput) => {
    const { characters } = get();

    // 重複チェック（キャラクター名）
    const existingCharacter = characters.find((c) => c.name === input.name);
    if (existingCharacter) {
      const errorMsg = i18next.t("character.errors.alreadyExists", { name: input.name });
      set({ error: errorMsg });
      throw new Error(errorMsg);
    }

    const now = getCurrentISOString();
    const newCharacter: Character = {
      uuid: generateUUID(),
      name: input.name,
      createdAt: now,
      updatedAt: now,
    };

    const updatedCharacters = [...characters, newCharacter];

    // localStorageに保存
    saveToLocalStorage(CHARACTERS_STORAGE_KEY, updatedCharacters);

    set({
      characters: updatedCharacters,
      error: null,
    });

    return newCharacter;
  },

  // キャラクターを更新
  updateCharacter: (uuid: string, name: string) => {
    const { characters } = get();

    const targetCharacter = characters.find((c) => c.uuid === uuid);
    if (!targetCharacter) {
      set({ error: i18next.t("character.errors.notFound") });
      return false;
    }

    // 重複チェック（同じ名前の他のキャラクターが存在するか）
    const existingCharacter = characters.find((c) => c.name === name.trim() && c.uuid !== uuid);
    if (existingCharacter) {
      set({ error: i18next.t("character.errors.alreadyExists", { name: name.trim() }) });
      return false;
    }

    const now = getCurrentISOString();
    const updatedCharacters = characters.map((character) => (character.uuid === uuid ? { ...character, name: name.trim(), updatedAt: now } : character));

    // localStorageに保存
    saveToLocalStorage(CHARACTERS_STORAGE_KEY, updatedCharacters);

    set({
      characters: updatedCharacters,
      error: null,
    });

    return true;
  },

  // キャラクターを削除
  deleteCharacter: (uuid: string) => {
    const { characters, matchRecords } = get();

    const targetCharacter = characters.find((c) => c.uuid === uuid);
    if (!targetCharacter) {
      set({ error: i18next.t("character.errors.notFound") });
      return false;
    }

    // 関連する戦績記録も削除
    const updatedCharacters = characters.filter((c) => c.uuid !== uuid);
    const updatedMatchRecords = matchRecords.filter((m) => m.characterUuid !== uuid);

    // localStorageに保存
    saveToLocalStorage(CHARACTERS_STORAGE_KEY, updatedCharacters);
    saveToLocalStorage(MATCH_RECORDS_STORAGE_KEY, updatedMatchRecords);

    set({
      characters: updatedCharacters,
      matchRecords: updatedMatchRecords,
      error: null,
    });

    return true;
  },

  // 新しい戦績記録を作成
  createMatchRecord: (input: CreateMatchRecordInput) => {
    const { matchRecords } = get();

    const now = getCurrentISOString();
    const newMatchRecord: MatchRecord = {
      uuid: generateUUID(),
      characterUuid: input.characterUuid,
      seasonUuid: input.seasonUuid,
      job: input.job,
      map: input.map,
      isWin: input.isWin,
      recordedAt: now,
      createdAt: now,
      updatedAt: now,
    };

    const updatedMatchRecords = [...matchRecords, newMatchRecord];

    // localStorageに保存
    saveToLocalStorage(MATCH_RECORDS_STORAGE_KEY, updatedMatchRecords);

    set({
      matchRecords: updatedMatchRecords,
      error: null,
    });

    return newMatchRecord;
  },

  // 戦績記録を削除
  deleteMatchRecord: (uuid: string) => {
    const { matchRecords } = get();

    const targetRecord = matchRecords.find((m) => m.uuid === uuid);
    if (!targetRecord) {
      set({ error: i18next.t("character.errors.matchRecordNotFound") });
      return false;
    }

    const updatedMatchRecords = matchRecords.filter((m) => m.uuid !== uuid);

    // localStorageに保存
    saveToLocalStorage(MATCH_RECORDS_STORAGE_KEY, updatedMatchRecords);

    set({
      matchRecords: updatedMatchRecords,
      error: null,
    });

    return true;
  },

  // 戦績記録をクリア
  clearMatchRecords: () => {
    // localStorageから削除
    saveToLocalStorage(MATCH_RECORDS_STORAGE_KEY, []);

    set({
      matchRecords: [],
      error: null,
    });
  },

  // 特定のシーズンのキャラクター戦績サマリーを取得
  getCharacterStatsForSeason: (seasonUuid: string): CharacterStats[] => {
    const { characters, matchRecords } = get();

    // historyStoreから履歴を取得
    const history = useHistoryStore.getState().getHistoryByUuid(seasonUuid);

    return characters
      .map((character) => {
        const characterMatches = matchRecords.filter((record) => record.characterUuid === character.uuid && record.seasonUuid === seasonUuid);

        // 戦績記録を最新順にソート
        const recentMatches = [...characterMatches].sort((a, b) => new Date(b.recordedAt).getTime() - new Date(a.recordedAt).getTime());

        // historyStoreのcharacterStatsからusedJobsを取得
        const usedJobs = history?.characterStats.find((cs) => cs.character.uuid === character.uuid)?.usedJobs || [];

        return {
          character,
          usedJobs,
          recentMatches,
        };
      })
      .sort((a, b) => new Date(b.character.createdAt).getTime() - new Date(a.character.createdAt).getTime());
  },

  // 特定のキャラクターの戦績記録を取得
  getMatchRecordsForCharacter: (characterUuid: string, seasonUuid?: string): MatchRecord[] => {
    const { matchRecords } = get();

    return matchRecords
      .filter((record) => {
        if (record.characterUuid !== characterUuid) return false;
        if (seasonUuid && record.seasonUuid !== seasonUuid) return false;
        return true;
      })
      .sort((a, b) => new Date(b.recordedAt).getTime() - new Date(a.recordedAt).getTime());
  },

  // エラーをクリア
  clearError: () => {
    set({ error: null });
  },
}));

// 初期化：コンポーネントマウント時にデータを読み込む
if (typeof window !== "undefined") {
  useCharacterStore.getState().loadData();
}
