import { memo, useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { calculateMapJobSummaries, calculateTotalSummary } from "@/features/home/utils/calculate";
import { useTranslation, useMapRotation } from "@/hooks";
import { media } from "@/styles/breakpoints";
import { type MatchRecord, type Job, type CrystalConflictMap } from "@/types";
import { getMapName } from "@/utils/maps";
import { MapSection } from "./MapSection";

const StyledMapTablesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};

  ${media.mobile} {
    gap: ${({ theme }) => theme.spacing[4]};
  }
`;

type MatchRecordTableProps = {
  /** 使用ジョブ一覧 */
  usedJobs: Job[];
  /** 戦績記録一覧 */
  matchRecords: MatchRecord[];
  /** 勝利記録追加ハンドラー */
  onAddWin?: (job: Job, map: CrystalConflictMap) => void;
  /** 敗北記録追加ハンドラー */
  onAddDefeat?: (job: Job, map: CrystalConflictMap) => void;
  /** 直近の記録取り消しハンドラー */
  onRevertLast?: (job: Job, map: CrystalConflictMap) => void;
};

/**
 * 戦績記録テーブルコンポーネント（マップごとのジョブサマリー表示）
 */
export const MatchRecordTable = memo(({ usedJobs, matchRecords, onAddWin, onAddDefeat, onRevertLast }: MatchRecordTableProps) => {
  const { t } = useTranslation();

  // 現在開催中のマップと次に開催されるマップをリアルタイムで取得
  const { currentMap, nextMap } = useMapRotation();

  // マップごとのジョブサマリーを計算（matchRecords変更時のみ）
  const mapJobSummaries = useMemo(() => calculateMapJobSummaries(matchRecords), [matchRecords]);

  // 全ステージの合計を計算（matchRecords/usedJobs変更時のみ）
  const totalSummaries = useMemo(() => calculateTotalSummary(matchRecords, usedJobs), [matchRecords, usedJobs]);

  // 全ステージ合計の集計
  const { totalMatches, totalWins, totalDefeats, totalWinRate } = useMemo(() => {
    const total = matchRecords.length;
    const wins = matchRecords.filter((r) => r.isWin).length;
    const defeats = total - wins;
    const winRate = total > 0 ? Math.round((wins / total) * 100) : 0;
    return { totalMatches: total, totalWins: wins, totalDefeats: defeats, totalWinRate: winRate };
  }, [matchRecords]);

  // 開閉状態を管理（デフォルトは現在のマップのみ開く）
  const [openMaps, setOpenMaps] = useState<Set<CrystalConflictMap>>(() => new Set([currentMap]));

  // 全ステージ合計の開閉状態
  const [isTotalOpen, setIsTotalOpen] = useState(false);

  // マップの開閉をトグル
  const toggleMap = useCallback((map?: CrystalConflictMap) => {
    if (!map) return;
    setOpenMaps((prev) => {
      const next = new Set(prev);
      if (next.has(map)) {
        next.delete(map);
      } else {
        next.add(map);
      }
      return next;
    });
  }, []);

  // 全ステージ合計の開閉トグル
  const toggleTotal = useCallback(() => {
    setIsTotalOpen((prev) => !prev);
  }, []);

  return (
    <StyledMapTablesContainer>
      {mapJobSummaries.map((mapData) => {
        const isCurrentMap = mapData.map === currentMap;
        const isNextMap = mapData.map === nextMap;
        return (
          <MapSection
            key={mapData.map}
            map={mapData.map}
            title={getMapName(mapData.map, t)}
            totalMatches={mapData.totalMatches}
            totalWins={mapData.totalWins}
            totalDefeats={mapData.totalDefeats}
            winRate={mapData.mapWinRate}
            isCurrentMap={isCurrentMap}
            isNextMap={isNextMap}
            isOpen={openMaps.has(mapData.map)}
            onToggle={toggleMap}
            usedJobs={usedJobs}
            jobSummaries={mapData.jobSummaries}
            onAddWin={onAddWin}
            onAddDefeat={onAddDefeat}
            onRevertLast={onRevertLast}
          />
        );
      })}

      {/* 全ステージ合計 */}
      <MapSection
        title={t("match.allStagesTotal")}
        totalMatches={totalMatches}
        totalWins={totalWins}
        totalDefeats={totalDefeats}
        winRate={totalWinRate}
        isOpen={isTotalOpen}
        onToggle={toggleTotal}
        usedJobs={usedJobs}
        jobSummaries={totalSummaries}
      />
    </StyledMapTablesContainer>
  );
});

MatchRecordTable.displayName = "MatchRecordTable";
