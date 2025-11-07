import { useCallback, useState } from "react";
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
export const MatchRecordTable = ({ usedJobs, matchRecords, onAddWin, onAddDefeat, onRevertLast }: MatchRecordTableProps) => {
  const { t } = useTranslation();

  // 現在開催中のマップと次に開催されるマップをリアルタイムで取得
  const { currentMap, nextMap } = useMapRotation();

  // マップごとのジョブサマリーを計算
  const mapJobSummaries = calculateMapJobSummaries(matchRecords);

  // 全ステージの合計を計算
  const totalSummaries = calculateTotalSummary(matchRecords, usedJobs);
  const totalMatches = matchRecords.length;
  const totalWins = matchRecords.filter((r) => r.isWin).length;
  const totalDefeats = totalMatches - totalWins;
  const totalWinRate = totalMatches > 0 ? Math.round((totalWins / totalMatches) * 100) : 0;

  // 開閉状態を管理（デフォルトは現在のマップのみ開く）
  const [openMaps, setOpenMaps] = useState<Set<CrystalConflictMap>>(() => new Set([currentMap]));

  // 全ステージ合計の開閉状態
  const [isTotalOpen, setIsTotalOpen] = useState(false);

  // マップの開閉をトグル
  const toggleMap = useCallback(
    (map: CrystalConflictMap) => {
      const newOpenMaps = new Set(openMaps);
      if (newOpenMaps.has(map)) {
        newOpenMaps.delete(map);
      } else {
        newOpenMaps.add(map);
      }
      setOpenMaps(newOpenMaps);
    },
    [openMaps],
  );

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
        onToggle={() => setIsTotalOpen(!isTotalOpen)}
        usedJobs={usedJobs}
        jobSummaries={totalSummaries}
      />
    </StyledMapTablesContainer>
  );
};
