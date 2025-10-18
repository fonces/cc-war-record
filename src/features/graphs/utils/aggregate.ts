import type { TFunction } from "i18next";
import type { History, MatchRecord, Job, CrystalConflictMap } from "@/types";
import { MAPS } from "@/types/maps";
import { getMapName } from "@/utils/maps";

// 曜日定義（日曜日=0, 月曜日=1, ..., 土曜日=6）
export const WEEKDAYS = [
  { index: 0, short: "Sun", name: "日曜日" },
  { index: 1, short: "Mon", name: "月曜日" },
  { index: 2, short: "Tue", name: "火曜日" },
  { index: 3, short: "Wed", name: "水曜日" },
  { index: 4, short: "Thu", name: "木曜日" },
  { index: 5, short: "Fri", name: "金曜日" },
  { index: 6, short: "Sat", name: "土曜日" },
];

/**
 * 日別の勝敗データを集計する関数
 */
export const aggregateDailyWinLoss = (
  history: History,
  matchRecords: MatchRecord[],
  selectedCharacterUuid: string | null,
  selectedJob: Job | null,
  selectedMap: CrystalConflictMap | null,
) => {
  // シーズン作成日を取得
  const seasonStartDate = new Date(history.createdAt);

  // シーズン作成日から2ヶ月後の日付を計算
  const endDate = new Date(seasonStartDate);
  endDate.setMonth(endDate.getMonth() + 2);

  // 日付の範囲を生成（シーズン開始日から2ヶ月間）
  const dateRange: string[] = [];
  const currentDate = new Date(seasonStartDate);

  while (currentDate <= endDate) {
    dateRange.push(currentDate.toISOString().split("T")[0]);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  // 日付ごとのマップを作成
  const dailyStats = new Map<string, { wins: number; losses: number }>();

  dateRange.forEach((date) => {
    dailyStats.set(date, { wins: 0, losses: 0 });
  });

  // 該当シーズンの全試合データを集計（フィルタ適用）
  const seasonMatches = matchRecords.filter((match) => {
    if (match.seasonUuid !== history.uuid) return false;
    if (selectedCharacterUuid && match.characterUuid !== selectedCharacterUuid) return false;
    if (selectedJob && match.job !== selectedJob) return false;
    if (selectedMap && match.map !== selectedMap) return false;
    return true;
  });

  seasonMatches.forEach((match: MatchRecord) => {
    const matchDate = match.recordedAt.split("T")[0];

    if (dailyStats.has(matchDate)) {
      const dayStats = dailyStats.get(matchDate)!;
      if (match.isWin) {
        dayStats.wins++;
      } else {
        dayStats.losses++;
      }
    }
  });

  // グラフ用のデータ形式に変換
  return dateRange.map((date) => {
    const [, month, day] = date.split("-");
    const formattedDate = `${parseInt(month)}/${parseInt(day)}`;
    const stats = dailyStats.get(date)!;
    const total = stats.wins + stats.losses;
    const winRate = total > 0 ? Math.round((stats.wins / total) * 100) : null;

    return {
      date: formattedDate,
      fullDate: date, // ツールチップ用に完全な日付も保持
      Win: stats.wins,
      Lose: stats.losses,
      WinRate: winRate,
    };
  });
};

/**
 * 曜日別の勝敗データを集計する関数
 */
export const aggregateWeeklyWinLoss = (
  history: History,
  matchRecords: MatchRecord[],
  selectedCharacterUuid: string | null,
  selectedJob: Job | null,
  selectedMap: CrystalConflictMap | null,
) => {
  // 曜日ごとのマップを作成
  const weeklyStats = new Map<number, { wins: number; losses: number; total: number }>();

  WEEKDAYS.forEach((weekday) => {
    weeklyStats.set(weekday.index, { wins: 0, losses: 0, total: 0 });
  });

  // 該当シーズンの全試合データを集計（フィルタ適用）
  const seasonMatches = matchRecords.filter((match) => {
    if (match.seasonUuid !== history.uuid) return false;
    if (selectedCharacterUuid && match.characterUuid !== selectedCharacterUuid) return false;
    if (selectedJob && match.job !== selectedJob) return false;
    if (selectedMap && match.map !== selectedMap) return false;
    return true;
  });

  seasonMatches.forEach((match: MatchRecord) => {
    // recordedAtから曜日を取得（0=日曜日, 1=月曜日, ..., 6=土曜日）
    const matchWeekday = new Date(match.recordedAt).getDay();

    if (weeklyStats.has(matchWeekday)) {
      const dayStats = weeklyStats.get(matchWeekday)!;
      dayStats.total++;
      if (match.isWin) {
        dayStats.wins++;
      } else {
        dayStats.losses++;
      }
    }
  });

  // グラフ用のデータ形式に変換
  return WEEKDAYS.map((weekday) => {
    const stats = weeklyStats.get(weekday.index)!;
    // 試合データがない場合はnullを返す（connectNullsで処理）
    const winRate = stats.total > 0 ? Math.round((stats.wins / stats.total) * 100) : null;
    const lossRate = stats.total > 0 ? Math.round((stats.losses / stats.total) * 100) : null;

    return {
      weekday: weekday.short,
      weekdayName: weekday.name,
      winRate,
      lossRate,
      wins: stats.wins,
      losses: stats.losses,
      total: stats.total,
    };
  });
};

/**
 * 時間別の勝敗データを集計する関数
 */
export const aggregateHourlyWinLoss = (
  history: History,
  matchRecords: MatchRecord[],
  selectedCharacterUuid: string | null,
  selectedJob: Job | null,
  selectedMap: CrystalConflictMap | null,
) => {
  // 0-23時の時間範囲を生成
  const hourRange = Array.from({ length: 24 }, (_, i) => i);

  // 時間ごとのマップを作成
  const hourlyStats = new Map<number, { wins: number; losses: number; total: number }>();

  hourRange.forEach((hour) => {
    hourlyStats.set(hour, { wins: 0, losses: 0, total: 0 });
  });

  // 該当シーズンの全試合データを集計（フィルタ適用）
  const seasonMatches = matchRecords.filter((match) => {
    if (match.seasonUuid !== history.uuid) return false;
    if (selectedCharacterUuid && match.characterUuid !== selectedCharacterUuid) return false;
    if (selectedJob && match.job !== selectedJob) return false;
    if (selectedMap && match.map !== selectedMap) return false;
    return true;
  });

  seasonMatches.forEach((match: MatchRecord) => {
    // recordedAtから時間を抽出（ISO 8601形式: 2024-01-01T15:30:00.000Z）
    const matchHour = new Date(match.recordedAt).getHours();

    if (hourlyStats.has(matchHour)) {
      const hourStats = hourlyStats.get(matchHour)!;
      hourStats.total++;
      if (match.isWin) {
        hourStats.wins++;
      } else {
        hourStats.losses++;
      }
    }
  });

  // グラフ用のデータ形式に変換
  return hourRange.map((hour) => {
    const stats = hourlyStats.get(hour)!;
    const winRate = stats.total > 0 ? Math.round((stats.wins / stats.total) * 100) : 0;
    const lossRate = stats.total > 0 ? Math.round((stats.losses / stats.total) * 100) : 0;

    return {
      hour: `${hour}時`,
      winRate,
      lossRate,
      wins: stats.wins,
      losses: stats.losses,
      total: stats.total,
    };
  });
};

/**
 * ジョブ使用率データを集計する関数
 */
export const aggregateJobUsageRate = (
  history: History,
  matchRecords: MatchRecord[],
  selectedCharacterUuid: string | null,
  selectedMap: CrystalConflictMap | null,
  t: TFunction,
) => {
  // 該当シーズンの試合データをフィルタ
  const seasonMatches = matchRecords.filter((match) => {
    if (match.seasonUuid !== history.uuid) return false;
    if (selectedCharacterUuid && match.characterUuid !== selectedCharacterUuid) return false;
    if (selectedMap && match.map !== selectedMap) return false;
    return true;
  });

  // ジョブごとの使用回数を集計
  const jobUsageMap = new Map<Job, number>();

  seasonMatches.forEach((match) => {
    const currentCount = jobUsageMap.get(match.job) || 0;
    jobUsageMap.set(match.job, currentCount + 1);
  });

  // PieChart用のデータ形式に変換
  const totalMatches = seasonMatches.length;
  const chartData = Array.from(jobUsageMap.entries())
    .map(([job, count]) => ({
      name: t(`job.${job}`),
      job,
      value: count,
      percentage: totalMatches > 0 ? Math.round((count / totalMatches) * 100) : 0,
    }))
    .sort((a, b) => b.value - a.value); // 使用回数の多い順にソート

  return chartData;
};

/**
 * マップごとのジョブ勝率データを集計する関数
 */
export const aggregateJobWinRateByMap = (
  history: History,
  matchRecords: MatchRecord[],
  selectedCharacterUuid: string | null,
  selectedJobs: Job[],
  t: TFunction,
) => {
  // 該当シーズンの試合データをフィルタ
  const seasonMatches = matchRecords.filter((match) => {
    if (match.seasonUuid !== history.uuid) return false;
    if (selectedCharacterUuid && match.characterUuid !== selectedCharacterUuid) return false;
    if (selectedJobs.length > 0 && !selectedJobs.includes(match.job)) return false;
    return true;
  });

  // マップ × ジョブごとの勝敗を集計
  const mapJobStats = new Map<string, Map<Job, { wins: number; total: number }>>();

  seasonMatches.forEach((match) => {
    if (!mapJobStats.has(match.map)) {
      mapJobStats.set(match.map, new Map());
    }

    const jobStats = mapJobStats.get(match.map)!;
    if (!jobStats.has(match.job)) {
      jobStats.set(match.job, { wins: 0, total: 0 });
    }

    const stats = jobStats.get(match.job)!;
    stats.total++;
    if (match.isWin) {
      stats.wins++;
    }
  });

  // RadarChart用のデータ形式に変換
  return Object.values(MAPS).map((map) => {
    const mapData: Record<string, string | number> = {
      map: getMapName(map, t),
      fullMark: 100,
    };

    selectedJobs.forEach((job) => {
      const jobStat = mapJobStats.get(map)?.get(job);
      if (jobStat && jobStat.total > 0) {
        mapData[job] = Math.round((jobStat.wins / jobStat.total) * 100);
      } else {
        mapData[job] = 0;
      }
    });

    return mapData;
  });
};
