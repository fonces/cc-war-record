import { memo } from "react";
import styled from "styled-components";
import { Icon } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { getWinRateColor } from "@/utils/colors";
import { JobSummaryTable } from "./JobSummaryTable";
import { StyledCurrentMapBadge, StyledNextMapBadge, StyledPulsingDot } from "./MapBadges";
import type { JobSummary } from "./JobSummaryRow";
import type { Job, CrystalConflictMap } from "@/types";

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

type MapSectionProps = {
  map?: CrystalConflictMap;
  title: string;
  totalMatches: number;
  totalWins: number;
  totalDefeats: number;
  winRate: number;
  isCurrentMap?: boolean;
  isNextMap?: boolean;
  isOpen: boolean;
  onToggle: (map: CrystalConflictMap) => void | (() => void);
  usedJobs: Job[];
  jobSummaries: JobSummary[];
  onAddWin?: (job: Job, map: CrystalConflictMap) => void;
  onAddDefeat?: (job: Job, map: CrystalConflictMap) => void;
  onRevertLast?: (job: Job, map: CrystalConflictMap) => void;
};

/**
 * マップセクションコンポーネント（メモ化）
 */
export const MapSection = memo(
  ({
    map,
    title,
    totalMatches,
    totalWins,
    totalDefeats,
    winRate,
    isCurrentMap,
    isNextMap,
    isOpen,
    onToggle,
    usedJobs,
    jobSummaries,
    onAddWin,
    onAddDefeat,
    onRevertLast,
  }: MapSectionProps) => {
    const { t } = useTranslation();

    return (
      <StyledMapSection>
        <StyledMapTitle onClick={() => onToggle(map!)} isCurrentMap={isCurrentMap}>
          <StyledMapTitleLeft>
            <StyledArrowWrapper isOpen={isOpen}>
              <Icon name="arrowDropDown" size={20} />
            </StyledArrowWrapper>
            <span>{title}</span>
            {isCurrentMap && (
              <StyledCurrentMapBadge>
                <StyledPulsingDot />
                Now
              </StyledCurrentMapBadge>
            )}
            {isNextMap && <StyledNextMapBadge>Next</StyledNextMapBadge>}
          </StyledMapTitleLeft>
          <StyledMapSummary>
            <span>{t("character.stats.matches", { count: totalMatches })}</span>
            <span>
              {t("character.stats.wins", { count: totalWins })} / {t("character.stats.defeats", { count: totalDefeats })}
            </span>
            {0 < totalMatches ? (
              <StyledMapWinRate winRate={winRate}>{t("character.stats.winRate", { rate: winRate })}</StyledMapWinRate>
            ) : (
              <span>{t("character.stats.noWinRate")}</span>
            )}
          </StyledMapSummary>
        </StyledMapTitle>
        <StyledMapContent isOpen={isOpen}>
          <JobSummaryTable usedJobs={usedJobs} jobSummaries={jobSummaries} onAddWin={onAddWin} onAddDefeat={onAddDefeat} onRevertLast={onRevertLast} map={map} />
        </StyledMapContent>
      </StyledMapSection>
    );
  },
  (prevProps, nextProps) => {
    // totalMatchesが変更されていない場合は再レンダリングしない
    return (
      prevProps.totalMatches === nextProps.totalMatches &&
      prevProps.isCurrentMap === nextProps.isCurrentMap &&
      prevProps.isNextMap === nextProps.isNextMap &&
      prevProps.isOpen === nextProps.isOpen &&
      prevProps.onToggle === nextProps.onToggle
    );
  },
);

MapSection.displayName = "MapSection";
