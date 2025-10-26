import { memo } from "react";
import styled from "styled-components";
import { Button, JobIcon, Icon, AnimatedNumber } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { getWinRateColor } from "@/utils/colors";
import type { Job, CrystalConflictMap } from "@/types";

const tableCellStyles = `
  &:first-child {
    padding-left: 24px;
    text-align: left;
    width: calc(100% - 500px);
  }

  &:nth-child(2) {
    width: 100px;
    min-width: 100px;
    max-width: 100px;
  }

  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) {
    width: 80px;
    min-width: 80px;
    max-width: 80px;
  }

  &:last-child {
    padding-right: 24px;
    width: 160px;
    min-width: 160px;
    max-width: 160px;
  }
`;

const StyledTableRow = styled.tr`
  border-bottom: 1px solid rgba(38, 161, 223, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 64px;
  position: relative;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: linear-gradient(90deg, rgba(38, 161, 223, 0.03) 0%, rgba(243, 99, 70, 0.03) 100%);

    &::before {
      width: 4px;
    }
  }
`;

const StyledTableCell = styled.td`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.gray[700]};
  font-weight: 500;
  text-align: center;
  box-sizing: border-box;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  ${tableCellStyles}
`;

const StyledJobCell = styled(StyledTableCell)`
  & > div {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[3]};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    position: relative;
    padding-left: ${({ theme }) => theme.spacing[2]};
  }
`;

const StyledWinRateText = styled.span<{ winRate: number }>`
  font-weight: 700;
  font-size: 1rem;
  color: ${({ winRate, theme }) => getWinRateColor(winRate, theme)};
  position: relative;
  display: inline-block;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({ winRate, theme }) => getWinRateColor(winRate, theme)};
    opacity: 0;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${StyledTableRow}:hover & {
    &::after {
      opacity: 0.3;
    }
  }
`;

const StyledActionButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  justify-content: flex-start;
  align-items: center;
`;

const StyledActionButton = styled(Button)`
  width: 36px;
  height: 36px;
  min-width: 36px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(38, 161, 223, 0.2);
  }

  &:active:not(:disabled) {
    transform: translateY(-2px);
  }
`;

export type JobSummary = {
  job: Job;
  totalMatches: number;
  wins: number;
  defeats: number;
  winRate: number;
};

type JobSummaryRowProps = {
  summary: JobSummary;
  map?: CrystalConflictMap;
  onAddWin?: (job: Job, map: CrystalConflictMap) => void;
  onAddDefeat?: (job: Job, map: CrystalConflictMap) => void;
  onRevertLast?: (job: Job, map: CrystalConflictMap) => void;
};

/**
 * ジョブサマリー行コンポーネント（メモ化）
 */
export const JobSummaryRow = memo(
  ({ summary, map, onAddWin, onAddDefeat, onRevertLast }: JobSummaryRowProps) => {
    const { t } = useTranslation();

    return (
      <StyledTableRow>
        <StyledJobCell>
          <div>
            <JobIcon job={summary.job} size={32} />
            {summary.job}
          </div>
        </StyledJobCell>
        <StyledTableCell>
          <AnimatedNumber>{summary.totalMatches}</AnimatedNumber>
        </StyledTableCell>
        <StyledTableCell>
          <AnimatedNumber>{summary.wins}</AnimatedNumber>
        </StyledTableCell>
        <StyledTableCell>
          <AnimatedNumber>{summary.defeats}</AnimatedNumber>
        </StyledTableCell>
        <StyledTableCell>
          {0 < summary.totalMatches ? (
            <StyledWinRateText winRate={summary.winRate}>
              <AnimatedNumber suffix="%">{summary.winRate}</AnimatedNumber>
            </StyledWinRateText>
          ) : (
            <span>--%</span>
          )}
        </StyledTableCell>
        <StyledTableCell>
          {map ? (
            <StyledActionButtons>
              {onAddWin && (
                <StyledActionButton variant="win" onClick={() => onAddWin(summary.job, map)} title={t("match.addWin")}>
                  W
                </StyledActionButton>
              )}
              {onAddDefeat && (
                <StyledActionButton variant="defeat" onClick={() => onAddDefeat(summary.job, map)} title={t("match.addDefeat")}>
                  D
                </StyledActionButton>
              )}
              {summary.totalMatches > 0 && onRevertLast ? (
                <StyledActionButton variant="ghost" icon={<Icon name="revert" size={16} />} onClick={() => onRevertLast(summary.job, map)} title={t("match.rollback")} />
              ) : (
                (onAddWin || onAddDefeat) && <div style={{ width: "32px" }} />
              )}
            </StyledActionButtons>
          ) : null}
        </StyledTableCell>
      </StyledTableRow>
    );
  },
  (prevProps, nextProps) => {
    // summary.totalMatchesが変更されていない場合は再レンダリングしない
    return prevProps.summary.totalMatches === nextProps.summary.totalMatches;
  },
);

JobSummaryRow.displayName = "JobSummaryRow";
