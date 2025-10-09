import styled from "styled-components";
import { useState } from "react";
import { Button, JobIcon, Icon } from "@/components/ui";
import type { MatchRecord, Job, CrystalConflictMap } from "@/types";
import { MAPS, MAP_INFO } from "@/types/maps";

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
  color: ${({ winRate, theme }) => (winRate >= 60 ? theme.colors.success[600] : winRate >= 40 ? theme.colors.warning[600] : theme.colors.error[600])};
`;

const StyledTableContainer = styled.div`
  overflow-x: auto;
`;

const StyledMapContent = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "10000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
`;

const StyledTableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

const StyledTableHeader = styled.th`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;
  box-sizing: border-box;

  &:first-child {
    padding-left: ${({ theme }) => theme.spacing[6]};
    text-align: left;
    width: 200px;
  }

  &:nth-child(2) {
    width: 80px;
  }

  &:nth-child(3) {
    width: 80px;
  }

  &:nth-child(4) {
    width: 80px;
  }

  &:nth-child(5) {
    width: 80px;
  }

  &:last-child {
    padding-right: ${({ theme }) => theme.spacing[6]};
    width: 140px;
  }
`;

const StyledTableBody = styled.tbody``;

const StyledTableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  transition: background-color 0.15s;
  height: 58px;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[50]};
  }
`;

const StyledTableCell = styled.td`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  box-sizing: border-box;

  &:first-child {
    padding-left: ${({ theme }) => theme.spacing[6]};
    text-align: left;
  }

  &:last-child {
    padding-right: ${({ theme }) => theme.spacing[6]};
  }
`;

const StyledJobCell = styled(StyledTableCell)`
  & > div {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[2]};
  }
`;

const StyledWinRateText = styled.span<{ winRate: number }>`
  font-weight: 600;
  color: ${({ winRate, theme }) => (winRate >= 60 ? theme.colors.success[600] : winRate >= 40 ? theme.colors.warning[600] : theme.colors.error[600])};
`;

const StyledActionButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  justify-content: flex-end;
`;

const StyledActionButton = styled(Button)`
  width: 32px;
  height: 32px;
  min-width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
`;

const StyledEmptyMapState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
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
  mapName: string;
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
      mapName: MAP_INFO[map].name,
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
              <span>{mapData.mapName}</span>
            </StyledMapTitleLeft>
            <StyledMapSummary>
              <span>{mapData.totalMatches}試合</span>
              <span>
                {mapData.totalWins}勝{mapData.totalLosses}敗
              </span>
              <StyledMapWinRate winRate={mapData.mapWinRate}>勝率{mapData.mapWinRate}%</StyledMapWinRate>
            </StyledMapSummary>
          </StyledMapTitle>
          <StyledMapContent isOpen={openMaps.has(mapData.map)}>
            <StyledTableContainer>
              <StyledTable>
                <StyledTableHead>
                  <tr>
                    <StyledTableHeader>ジョブ</StyledTableHeader>
                    <StyledTableHeader>試合数</StyledTableHeader>
                    <StyledTableHeader>勝利</StyledTableHeader>
                    <StyledTableHeader>敗北</StyledTableHeader>
                    <StyledTableHeader>勝率</StyledTableHeader>
                    {(onAddWin || onAddLoss || onRevertLast) && <StyledTableHeader />}
                  </tr>
                </StyledTableHead>
                <StyledTableBody>
                  {usedJobs.length === 0 ? (
                    <StyledTableRow>
                      <StyledTableCell colSpan={onAddWin || onAddLoss || onRevertLast ? 6 : 5}>
                        <StyledEmptyMapState>ジョブを登録してください</StyledEmptyMapState>
                      </StyledTableCell>
                    </StyledTableRow>
                  ) : (
                    usedJobs.map((job) => {
                      const summary = mapData.jobSummaries.find((s) => s.job === job) || {
                        job,
                        totalMatches: 0,
                        wins: 0,
                        losses: 0,
                        winRate: 0,
                      };
                      return (
                        <StyledTableRow key={job}>
                          <StyledJobCell>
                            <div>
                              <JobIcon job={summary.job} size={20} />
                              {summary.job}
                            </div>
                          </StyledJobCell>
                          <StyledTableCell>{summary.totalMatches}</StyledTableCell>
                          <StyledTableCell>{summary.wins}</StyledTableCell>
                          <StyledTableCell>{summary.losses}</StyledTableCell>
                          <StyledTableCell>
                            <StyledWinRateText winRate={summary.winRate}>{summary.winRate}%</StyledWinRateText>
                          </StyledTableCell>
                          {(onAddWin || onAddLoss || onRevertLast) && (
                            <StyledTableCell>
                              <StyledActionButtons>
                                {onAddWin && (
                                  <StyledActionButton variant="win" onClick={() => onAddWin(summary.job, mapData.map)}>
                                    W
                                  </StyledActionButton>
                                )}
                                {onAddLoss && (
                                  <StyledActionButton variant="secondary" onClick={() => onAddLoss(summary.job, mapData.map)}>
                                    L
                                  </StyledActionButton>
                                )}
                                {summary.totalMatches > 0 && onRevertLast ? (
                                  <StyledActionButton variant="outline" icon={<Icon name="revert" size={16} />} onClick={() => onRevertLast(summary.job, mapData.map)} />
                                ) : (
                                  (onAddWin || onAddLoss) && <div style={{ width: "32px" }} />
                                )}
                              </StyledActionButtons>
                            </StyledTableCell>
                          )}
                        </StyledTableRow>
                      );
                    })
                  )}
                </StyledTableBody>
              </StyledTable>
            </StyledTableContainer>
          </StyledMapContent>
        </StyledMapSection>
      ))}

      {/* 全ステージ合計 */}
      <StyledMapSection>
        <StyledMapTitle style={{ cursor: "default" }}>
          <StyledMapTitleLeft>
            <span>全ステージ合計</span>
          </StyledMapTitleLeft>
          <StyledMapSummary>
            <span>{totalMatches}試合</span>
            <span>
              {totalWins}勝{totalLosses}敗
            </span>
            <StyledMapWinRate winRate={totalWinRate}>勝率{totalWinRate}%</StyledMapWinRate>
          </StyledMapSummary>
        </StyledMapTitle>
        <StyledTableContainer>
          <StyledTable>
            <StyledTableHead>
              <tr>
                <StyledTableHeader>ジョブ</StyledTableHeader>
                <StyledTableHeader>試合数</StyledTableHeader>
                <StyledTableHeader>勝利</StyledTableHeader>
                <StyledTableHeader>敗北</StyledTableHeader>
                <StyledTableHeader>勝率</StyledTableHeader>
                {(onAddWin || onAddLoss || onRevertLast) && <StyledTableHeader />}
              </tr>
            </StyledTableHead>
            <StyledTableBody>
              {usedJobs.length === 0 ? (
                <StyledTableRow>
                  <StyledTableCell colSpan={onAddWin || onAddLoss || onRevertLast ? 6 : 5}>
                    <StyledEmptyMapState>ジョブを登録してください</StyledEmptyMapState>
                  </StyledTableCell>
                </StyledTableRow>
              ) : (
                usedJobs.map((job) => {
                  const summary = totalSummaries.find((s) => s.job === job) || {
                    job,
                    totalMatches: 0,
                    wins: 0,
                    losses: 0,
                    winRate: 0,
                  };
                  return (
                    <StyledTableRow key={job}>
                      <StyledJobCell>
                        <div>
                          <JobIcon job={summary.job} size={20} />
                          {summary.job}
                        </div>
                      </StyledJobCell>
                      <StyledTableCell>{summary.totalMatches}</StyledTableCell>
                      <StyledTableCell>{summary.wins}</StyledTableCell>
                      <StyledTableCell>{summary.losses}</StyledTableCell>
                      <StyledTableCell>
                        <StyledWinRateText winRate={summary.winRate}>{summary.winRate}%</StyledWinRateText>
                      </StyledTableCell>
                      {(onAddWin || onAddLoss || onRevertLast) && <StyledTableCell />}
                    </StyledTableRow>
                  );
                })
              )}
            </StyledTableBody>
          </StyledTable>
        </StyledTableContainer>
      </StyledMapSection>
    </StyledMapTablesContainer>
  );
};
