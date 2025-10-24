/**
 * 履歴関連のユーティリティ関数
 */

import type { Job, MatchRecord } from "@/types";

/**
 * 戦績記録から総試合数を計算
 */
export const getTotalMatches = (matches: MatchRecord[]): number => {
  return matches.length;
};

/**
 * 戦績記録から勝利数を計算
 */
export const getWins = (matches: MatchRecord[]): number => {
  return matches.filter((m) => m.isWin).length;
};

/**
 * 戦績記録から敗北数を計算
 */
export const getDefeats = (matches: MatchRecord[]): number => {
  return matches.filter((m) => !m.isWin).length;
};

/**
 * 戦績記録から勝率を計算（0-100の整数）
 */
export const getWinRate = (matches: MatchRecord[]): number => {
  const total = getTotalMatches(matches);
  if (total === 0) return 0;
  const wins = getWins(matches);
  return Math.round((wins / total) * 100);
};

/**
 * 戦績記録から使用したジョブ一覧を取得（重複なし）
 */
export const getUsedJobs = (matches: MatchRecord[]): Job[] => {
  const jobSet = new Set<Job>();
  matches.forEach((match) => {
    jobSet.add(match.job);
  });
  return Array.from(jobSet);
};
