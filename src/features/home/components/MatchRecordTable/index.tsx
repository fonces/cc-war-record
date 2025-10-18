import styled from "styled-components";
import { useState } from "react";
import { Icon } from "@/components/ui";
import type { MatchRecord, Job, CrystalConflictMap } from "@/types";
import { MAPS } from "@/types/maps";
import { getWinRateColor } from "@/utils/colors";
import { getMapName } from "@/utils/maps";
import { JobSummaryTable } from "./JobSummaryTable";
import { useTranslation } from "@/hooks";

const StyledMapTablesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
`;

const StyledMapSection = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
`;

const StyledMapTitle = styled.h4`
  margin: 0;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

const StyledMapTitleLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const StyledMapSummary = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const StyledMapWinRate = styled.span<{ winRate: number }>`
  font-weight: 600;
  color: ${({ winRate, theme }) => getWinRateColor(winRate, theme)};
`;

const StyledMapContent = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "10000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

type JobSummaryForMap = {
  job: Job;
  totalMatches: number;
  wins: number;
  losses: number;
  winRate: number;
};

type MapJobSummaries = {
  map: CrystalConflictMap;
  totalMatches: number;
  totalWins: number;
  totalLosses: number;
  mapWinRate: number;
  jobSummaries: JobSummaryForMap[];
};

type MatchRecordTableProps = {
  /** 使用ジョブ一覧 */
  usedJobs: Job[];
  /** 戦績記録一覧 */
  matchRecords: MatchRecord[];
  /** 勝利記録追加ハンドラー */
  onAddWin?: (job: Job, map: CrystalConflictMap) => void;
  /** 敗北記録追加ハンドラー */
  onAddLoss?: (job: Job, map: CrystalConflictMap) => void;
  /** 直近の記録取り消しハンドラー */
  onRevertLast?: (job: Job, map: CrystalConflictMap) => void;
};

/**
 * マップごとのジョブサマリーを計算する関数
 */
const calculateMapJobSummaries = (matchRecords: MatchRecord[]): MapJobSummaries[] => {
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
    const totalLosses = totalMatches - totalWins;
    const mapWinRate = totalMatches > 0 ? Math.round((totalWins / totalMatches) * 100) : 0;

    // ジョブごとに集計
    const jobMap = new Map<Job, JobSummaryForMap>();

    // すべての使用済みジョブを初期化（0勝0敗）
    usedJobsList.forEach((job) => {
      jobMap.set(job, {
        job,
        totalMatches: 0,
        wins: 0,
        losses: 0,
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
        summary.losses++;
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
      totalLosses,
      mapWinRate,
      jobSummaries,
    };
  }); // すべてのマップを表示（データがない場合は空テーブル）
};

/**
 * 全ステージの合計を計算する関数
 */
const calculateTotalSummary = (matchRecords: MatchRecord[], usedJobs: Job[]): JobSummaryForMap[] => {
  const jobMap = new Map<Job, JobSummaryForMap>();

  // すべての使用済みジョブを初期化
  usedJobs.forEach((job) => {
    jobMap.set(job, {
      job,
      totalMatches: 0,
      wins: 0,
      losses: 0,
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
        summary.losses++;
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

/**
 * 戦績記録テーブルコンポーネント（マップごとのジョブサマリー表示）
 */
export const MatchRecordTable = ({ usedJobs, matchRecords, onAddWin, onAddLoss, onRevertLast }: MatchRecordTableProps) => {
  const { t } = useTranslation();

  // マップごとのジョブサマリーを計算
  const mapJobSummaries = calculateMapJobSummaries(matchRecords);

  // 全ステージの合計を計算
  const totalSummaries = calculateTotalSummary(matchRecords, usedJobs);
  const totalMatches = matchRecords.length;
  const totalWins = matchRecords.filter((r) => r.isWin).length;
  const totalLosses = totalMatches - totalWins;
  const totalWinRate = totalMatches > 0 ? Math.round((totalWins / totalMatches) * 100) : 0;

  // 開閉状態を管理（デフォルトはすべて閉じている）
  const [openMaps, setOpenMaps] = useState<Set<CrystalConflictMap>>(new Set());

  // マップの開閉をトグル
  const toggleMap = (map: CrystalConflictMap) => {
    const newOpenMaps = new Set(openMaps);
    if (newOpenMaps.has(map)) {
      newOpenMaps.delete(map);
    } else {
      newOpenMaps.add(map);
    }
    setOpenMaps(newOpenMaps);
  };

  return (
    <StyledMapTablesContainer>
      {mapJobSummaries.map((mapData) => (
        <StyledMapSection key={mapData.map}>
          <StyledMapTitle onClick={() => toggleMap(mapData.map)}>
            <StyledMapTitleLeft>
              <Icon name={openMaps.has(mapData.map) ? "minus" : "add"} size={16} />
              <span>{getMapName(mapData.map, t)}</span>
            </StyledMapTitleLeft>
            <StyledMapSummary>
              <span>{t("character.stats.matches", { count: mapData.totalMatches })}</span>
              <span>
                {t("character.stats.wins", { count: mapData.totalWins })} / {t("character.stats.losses", { count: mapData.totalLosses })}
              </span>
              {0 < mapData.totalMatches ? (
                <StyledMapWinRate winRate={mapData.mapWinRate}>{t("character.stats.winRate", { rate: mapData.mapWinRate })}</StyledMapWinRate>
              ) : (
                <span>{t("character.stats.noWinRate")}</span>
              )}
            </StyledMapSummary>
          </StyledMapTitle>
          <StyledMapContent isOpen={openMaps.has(mapData.map)}>
            <JobSummaryTable usedJobs={usedJobs} jobSummaries={mapData.jobSummaries} onAddWin={onAddWin} onAddLoss={onAddLoss} onRevertLast={onRevertLast} map={mapData.map} />
          </StyledMapContent>
        </StyledMapSection>
      ))}

      {/* 全ステージ合計 */}
      <StyledMapSection>
        <StyledMapTitle style={{ cursor: "default" }}>
          <StyledMapTitleLeft>
            <span>{t("match.allStagesTotal")}</span>
          </StyledMapTitleLeft>
          <StyledMapSummary>
            <span>{t("character.stats.matches", { count: totalMatches })}</span>
            <span>
              {t("character.stats.wins", { count: totalWins })} / {t("character.stats.losses", { count: totalLosses })}
            </span>
            {0 < totalMatches ? (
              <StyledMapWinRate winRate={totalWinRate}>{t("character.stats.winRate", { rate: totalWinRate })}</StyledMapWinRate>
            ) : (
              <span>{t("character.stats.noWinRate")}</span>
            )}
          </StyledMapSummary>
        </StyledMapTitle>
        <JobSummaryTable usedJobs={usedJobs} jobSummaries={totalSummaries} />
      </StyledMapSection>
    </StyledMapTablesContainer>
  );
};
