import { MAPS } from "@/types/maps";
import type { MatchRecord, Job, CrystalConflictMap } from "@/types";

type JobSummaryForMap = {
  job: Job;
  totalMatches: number;
  wins: number;
  defeats: number;
  winRate: number;
};

type MapJobSummaries = {
  map: CrystalConflictMap;
  totalMatches: number;
  totalWins: number;
  totalDefeats: number;
  mapWinRate: number;
  jobSummaries: JobSummaryForMap[];
};

/**
 * マップごとのジョブサマリーを計算する関数
 */
export const calculateMapJobSummaries = (matchRecords: MatchRecord[]): MapJobSummaries[] => {
  const allMaps = Object.values(MAPS);

  // 全戦績記録から使用されているジョブを収集
  const allUsedJobs = new Set<Job>();
  matchRecords.forEach((record) => {
    allUsedJobs.add(record.job);
  });
  const usedJobsList = Array.from(allUsedJobs);

  return allMaps.map((map) => {
    // このマップの記録のみフィルタ
    const mapRecords = matchRecords.filter((record) => record.map === map);

    // マップ全体の統計を計算
    const totalMatches = mapRecords.length;
    const totalWins = mapRecords.filter((r) => r.isWin).length;
    const totalDefeats = totalMatches - totalWins;
    const mapWinRate = totalMatches > 0 ? Math.round((totalWins / totalMatches) * 100) : 0;

    // ジョブごとに集計
    const jobMap = new Map<Job, JobSummaryForMap>();

    // すべての使用済みジョブを初期化（0勝0敗）
    usedJobsList.forEach((job) => {
      jobMap.set(job, {
        job,
        totalMatches: 0,
        wins: 0,
        defeats: 0,
        winRate: 0,
      });
    });

    // 実際の記録で更新
    mapRecords.forEach((record) => {
      const summary = jobMap.get(record.job)!;
      summary.totalMatches++;

      if (record.isWin) {
        summary.wins++;
      } else {
        summary.defeats++;
      }
    });

    // 勝率を計算
    jobMap.forEach((summary) => {
      summary.winRate = summary.totalMatches > 0 ? Math.round((summary.wins / summary.totalMatches) * 100) : 0;
    });

    // 試合数でソート（試合数が同じ場合はジョブ名でソート）
    const jobSummaries = Array.from(jobMap.values()).sort((a, b) => {
      if (b.totalMatches !== a.totalMatches) {
        return b.totalMatches - a.totalMatches;
      }
      return a.job.localeCompare(b.job);
    });

    return {
      map,
      totalMatches,
      totalWins,
      totalDefeats,
      mapWinRate,
      jobSummaries,
    };
  }); // すべてのマップを表示（データがない場合は空テーブル）
};

/**
 * 全ステージの合計を計算する関数
 */
export const calculateTotalSummary = (matchRecords: MatchRecord[], usedJobs: Job[]): JobSummaryForMap[] => {
  const jobMap = new Map<Job, JobSummaryForMap>();

  // すべての使用済みジョブを初期化
  usedJobs.forEach((job) => {
    jobMap.set(job, {
      job,
      totalMatches: 0,
      wins: 0,
      defeats: 0,
      winRate: 0,
    });
  });

  // 実際の記録で更新
  matchRecords.forEach((record) => {
    const summary = jobMap.get(record.job);
    if (summary) {
      summary.totalMatches++;
      if (record.isWin) {
        summary.wins++;
      } else {
        summary.defeats++;
      }
    }
  });

  // 勝率を計算
  jobMap.forEach((summary) => {
    summary.winRate = summary.totalMatches > 0 ? Math.round((summary.wins / summary.totalMatches) * 100) : 0;
  });

  // 試合数でソート
  return Array.from(jobMap.values()).sort((a, b) => {
    if (b.totalMatches !== a.totalMatches) {
      return b.totalMatches - a.totalMatches;
    }
    return a.job.localeCompare(b.job);
  });
};
