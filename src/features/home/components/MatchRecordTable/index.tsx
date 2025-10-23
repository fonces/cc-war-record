import { useState } from "react";
import styled from "styled-components";
import { Icon } from "@/components/ui";
import { calculateMapJobSummaries, calculateTotalSummary } from "@/features/home/utils/calculate";
import { useTranslation, useMapRotation } from "@/hooks";
import { getWinRateColor } from "@/utils/colors";
import { getMapName } from "@/utils/maps";
import { JobSummaryTable } from "./JobSummaryTable";
import { StyledCurrentMapBadge, StyledNextMapBadge, StyledPulsingDot } from "./MapBadges";
import type { MatchRecord, Job, CrystalConflictMap } from "@/types";

const StyledMapTablesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
`;

const StyledMapSection = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
`;

const StyledMapTitle = styled.h4<{ isCurrentMap?: boolean }>`
  margin: 0;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  background-color: ${({ isCurrentMap, theme }) => {
    const isDark = theme.isDark;
    if (isCurrentMap) {
      return isDark ? "rgba(38, 161, 223, 0.15)" : "rgba(38, 161, 223, 0.08)";
    }
    return isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.02)";
  }};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
  position: relative;
  transition: background-color 0.2s ease;

  ${({ isCurrentMap, theme }) =>
    isCurrentMap &&
    `
    border-left: 4px solid ${theme.colors.primary[500]};
    padding-left: calc(${theme.spacing[4]} - 4px);
  `}

  &:hover {
    background-color: ${({ isCurrentMap, theme }) => {
      const isDark = theme.isDark;
      if (isCurrentMap) {
        return isDark ? "rgba(38, 161, 223, 0.22)" : "rgba(38, 161, 223, 0.12)";
      }
      return isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)";
    }};
  }
`;

const StyledMapTitleLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const StyledMapSummary = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  font-size: 0.875rem;
  font-weight: 500;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.sm};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const StyledMapWinRate = styled.span<{ winRate: number }>`
  font-weight: 600;
  color: ${({ winRate, theme }) => getWinRateColor(winRate, theme)};
`;

const StyledMapContent = styled.div<{ isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${({ isOpen }) => (isOpen ? "1fr" : "0fr")};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  > * {
    min-height: 0;
  }
`;

const StyledArrowWrapper = styled.span<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
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
      {mapJobSummaries.map((mapData) => {
        const isCurrentMap = mapData.map === currentMap;
        const isNextMap = mapData.map === nextMap;
        return (
          <StyledMapSection key={mapData.map}>
            <StyledMapTitle onClick={() => toggleMap(mapData.map)} isCurrentMap={isCurrentMap}>
              <StyledMapTitleLeft>
                <StyledArrowWrapper isOpen={openMaps.has(mapData.map)}>
                  <Icon name="arrowDropDown" size={20} />
                </StyledArrowWrapper>
                <span>{getMapName(mapData.map, t)}</span>
                {isCurrentMap && (
                  <StyledCurrentMapBadge>
                    <StyledPulsingDot />
                    Now
                  </StyledCurrentMapBadge>
                )}
                {isNextMap && <StyledNextMapBadge>Next</StyledNextMapBadge>}
              </StyledMapTitleLeft>
              <StyledMapSummary>
                <span>{t("character.stats.matches", { count: mapData.totalMatches })}</span>
                <span>
                  {t("character.stats.wins", { count: mapData.totalWins })} / {t("character.stats.defeats", { count: mapData.totalDefeats })}
                </span>
                {0 < mapData.totalMatches ? (
                  <StyledMapWinRate winRate={mapData.mapWinRate}>{t("character.stats.winRate", { rate: mapData.mapWinRate })}</StyledMapWinRate>
                ) : (
                  <span>{t("character.stats.noWinRate")}</span>
                )}
              </StyledMapSummary>
            </StyledMapTitle>
            <StyledMapContent isOpen={openMaps.has(mapData.map)}>
              <JobSummaryTable
                usedJobs={usedJobs}
                jobSummaries={mapData.jobSummaries}
                onAddWin={onAddWin}
                onAddDefeat={onAddDefeat}
                onRevertLast={onRevertLast}
                map={mapData.map}
              />
            </StyledMapContent>
          </StyledMapSection>
        );
      })}

      {/* 全ステージ合計 */}
      <StyledMapSection>
        <StyledMapTitle style={{ cursor: "default" }}>
          <StyledMapTitleLeft>
            <span>{t("match.allStagesTotal")}</span>
          </StyledMapTitleLeft>
          <StyledMapSummary>
            <span>{t("character.stats.matches", { count: totalMatches })}</span>
            <span>
              {t("character.stats.wins", { count: totalWins })} / {t("character.stats.defeats", { count: totalDefeats })}
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
