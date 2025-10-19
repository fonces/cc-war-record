/**
 * localStorage ユーティリティ
 */

import type { Job } from "@/types";
import { JOBS } from "@/types/jobs";

// ジョブフィルター用のキー定数
export const STORAGE_KEYS = {
  RADAR_CHART_JOBS: "cc-war-record:radar-chart-jobs",
} as const;

/**
 * localStorageからデータを取得
 * @param key キー
 * @param defaultValue デフォルト値
 * @returns 取得したデータまたはデフォルト値
 */
export const getFromLocalStorage = <T>(key: string, defaultValue: T): T => {
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
export const saveToLocalStorage = <T>(key: string, value: T): void => {
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
export const removeFromLocalStorage = (key: string): void => {
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
