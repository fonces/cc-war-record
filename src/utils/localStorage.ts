/**
 * localStorage ユーティリティ
 */

import { JOBS } from "@/types/jobs";
import type { Job, Character, MatchRecord, History } from "@/types";

/**
 * localStorageで使用するキー定数
 */
export const STORAGE_KEYS = {
  /** ビルドタイムスタンプ */
  BUILD_TIMESTAMP: "app-build-timestamp",
  /** テーマ設定（light/dark） */
  THEME: "cc-war-record-theme",
  /** キャラクター一覧 */
  CHARACTERS: "cc-war-record-characters",
  /** 戦績記録一覧 */
  MATCH_RECORDS: "cc-war-record-match-records",
  /** シーズン履歴一覧 */
  HISTORIES: "cc-war-record-histories",
  /** 個別履歴データ */
  HISTORY: `histories-\${uuid}`,
  /** レーダーチャート用の選択ジョブリスト */
  RADAR_CHART_JOBS: "cc-war-record:radar-chart-jobs",
} as const;

/**
 * StorageKeyから対応するデータ型のマッピング
 **/
type IgnoreVariableKeys = Omit<typeof STORAGE_KEYS, "HISTORY">;

/**
 * StorageKey型
 */
type StorageKey = IgnoreVariableKeys[keyof IgnoreVariableKeys] | `histories-${string}`; // 個別履歴データ用キーを追加

/**
 * StorageKeyから対応する型を取得
 */
type StorageValueMap = {
  [STORAGE_KEYS.BUILD_TIMESTAMP]: string;
  [STORAGE_KEYS.THEME]: "light" | "dark";
  [STORAGE_KEYS.CHARACTERS]: Character[];
  [STORAGE_KEYS.MATCH_RECORDS]: MatchRecord[];
  [STORAGE_KEYS.HISTORIES]: History[];
  [STORAGE_KEYS.RADAR_CHART_JOBS]: Job[];
};

/**
 * StorageKeyから対応する型を取得
 */
type StorageValue<K extends StorageKey> = K extends keyof StorageValueMap ? StorageValueMap[K] : K extends `histories-${string}` ? MatchRecord[] : unknown;

/**
 * localStorageからデータを取得
 * @param key キー
 * @param defaultValue デフォルト値
 * @returns 取得したデータまたはデフォルト値
 */
export const getFromLocalStorage = <K extends StorageKey>(key: K, defaultValue: StorageValue<K>): StorageValue<K> => {
  try {
    if (typeof window === "undefined") {
      return defaultValue;
    }

    const item = window.localStorage.getItem(key);
    if (item === null) {
      return defaultValue;
    }

    return JSON.parse(item);
  } catch (error) {
    console.error(`Error reading from localStorage (key: ${key}):`, error);
    return defaultValue;
  }
};

/**
 * localStorageにデータを保存
 * @param key キー
 * @param value 保存する値
 */
export const saveToLocalStorage = <K extends StorageKey>(key: K, value: StorageValue<K>): void => {
  try {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing to localStorage (key: ${key}):`, error);
  }
};

/**
 * localStorageからキーを削除
 * @param key キー
 */
export const removeFromLocalStorage = (key: StorageKey): void => {
  try {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing from localStorage (key: ${key}):`, error);
  }
};

/**
 * レーダーチャート用の選択ジョブリストを取得
 */
export const getRadarChartJobs = (): Job[] => {
  return getFromLocalStorage(STORAGE_KEYS.RADAR_CHART_JOBS, [JOBS.PALADIN, JOBS.WHITE_MAGE]);
};

/**
 * レーダーチャート用の選択ジョブリストを保存
 */
export const saveRadarChartJobs = (jobs: Job[]): void => {
  saveToLocalStorage(STORAGE_KEYS.RADAR_CHART_JOBS, jobs);
};
