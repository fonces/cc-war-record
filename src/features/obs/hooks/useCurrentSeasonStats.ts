import { useCharacterStore, useHistoryStore } from "@/stores";

/**
 * 現在のシーズンの統計情報を計算
 */
export type CurrentSeasonStats = {
  wins: number;
  losses: number;
  total: number;
  winRate: number;
};

/**
 * 現在のシーズンの統計を取得
 */
export const useCurrentSeasonStats = (): CurrentSeasonStats => {
  const { getSortedHistories } = useHistoryStore();
  const { getCharacterStatsForSeason } = useCharacterStore();

  const histories = getSortedHistories();
  const currentSeason = histories[0]; // 最新のシーズン

  if (!currentSeason) {
    return { wins: 0, losses: 0, total: 0, winRate: 0 };
  }

  const characterStats = getCharacterStatsForSeason(currentSeason.uuid);

  let wins = 0;
  let losses = 0;

  characterStats.forEach((stats) => {
    stats.recentMatches.forEach((match) => {
      if (match.isWin) {
        wins++;
      } else {
        losses++;
      }
    });
  });

  const total = wins + losses;
  const winRate = total > 0 ? (wins / total) * 100 : 0;

  return { wins, losses, total, winRate };
};
