import { useMemo, memo } from "react";
import styled from "styled-components";
import { useIsMobile, useTranslation } from "@/hooks";
import { fadeIn } from "@/styles/animation";
import { media } from "@/styles/breakpoints";
import { sortJobs } from "@/utils";
import { JobSummaryRow, type JobSummary } from "./JobSummaryRow";
import type { Job, CrystalConflictMap } from "@/types";

const StyledTableContainer = styled.div`
  overflow: hidden;
  background: ${({ theme }) => theme.colors.transparent};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  /* border: 1px solid ${({ theme }) => theme.colors.borderLight}; */
  border-radius: 0 0 ${({ theme }) => theme.borderRadius.md} ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:hover {
    box-shadow:
      ${({ theme }) => theme.shadows["2xl"]},
      0 0 0 1px rgba(38, 161, 223, 0.1);
    border-color: ${({ theme }) => theme.colors.border};
  }

  ${media.mobile} {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  border-top: 1px solid rgba(38, 161, 223, 0.3);
  font-size: 0.875rem;
  table-layout: fixed;
  width: 100%;

  ${media.mobile} {
    min-width: 600px;
  }
`;

const StyledTableHead = styled.thead`
  background: linear-gradient(135deg, rgba(38, 161, 223, 0.08) 0%, rgba(243, 99, 70, 0.08) 100%);
  border-bottom: 2px solid rgba(38, 161, 223, 0.15);
  position: relative;
`;

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

    ${media.mobile} {
      width: 140px;
      min-width: 140px;
      max-width: 140px;
    }
  }
`;

const StyledTableHeader = styled.th`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]};
  text-align: center;
  font-weight: 700;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  box-sizing: border-box;
  position: relative;
  ${tableCellStyles}

  ${media.mobile} {
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[2]};
    font-size: 0.625rem;

    &:first-child {
      padding-left: ${({ theme }) => theme.spacing[3]};
    }

    &:last-child {
      padding-right: ${({ theme }) => theme.spacing[3]};
    }
  }
`;

const StyledTableBody = styled.tbody``;

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

  ${media.mobile} {
    height: 48px;
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

  ${media.mobile} {
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[2]};

    &:first-child {
      padding-left: ${({ theme }) => theme.spacing[3]};
    }

    &:last-child {
      padding-right: ${({ theme }) => theme.spacing[3]};
    }
  }
`;

const StyledEmptyMapState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  animation: ${fadeIn} 0.5s ease-out;

  &::before {
    content: "📊";
    font-size: 3rem;
    opacity: 0.5;
  }
`;

type JobSummaryTableProps = {
  /** 使用ジョブ一覧 */
  usedJobs: Job[];
  /** ジョブサマリー一覧 */
  jobSummaries: JobSummary[];
  /** 勝利記録追加ハンドラー（指定した場合に操作列を表示） */
  onAddWin?: (job: Job, map: CrystalConflictMap) => void;
  /** 敗北記録追加ハンドラー（指定した場合に操作列を表示） */
  onAddDefeat?: (job: Job, map: CrystalConflictMap) => void;
  /** 直近の記録取り消しハンドラー（指定した場合に操作列を表示） */
  onRevertLast?: (job: Job, map: CrystalConflictMap) => void;
  /** 操作ボタン用のマップ（マップごとのテーブルの場合に指定） */
  map?: CrystalConflictMap;
};

/**
 * ジョブサマリーテーブルコンポーネント
 */
export const JobSummaryTable = memo(
  ({ usedJobs, jobSummaries, onAddWin, onAddDefeat, onRevertLast, map }: JobSummaryTableProps) => {
    const { t } = useTranslation();
    const isMobile = useIsMobile();
    const showActions = !!(onAddWin || onAddDefeat || onRevertLast);

    const sortedJobs = useMemo(() => sortJobs(usedJobs), [usedJobs]);

    return (
      <StyledTableContainer>
        <StyledTable>
          <StyledTableHead>
            <tr>
              <StyledTableHeader colSpan={isMobile ? 2 : 1}>{t("match.job")}</StyledTableHeader>
              <StyledTableHeader>{t("match.totalMatches")}</StyledTableHeader>
              <StyledTableHeader>{t("match.win")}</StyledTableHeader>
              <StyledTableHeader>{t("match.defeat")}</StyledTableHeader>
              <StyledTableHeader>{t("match.winRate")}</StyledTableHeader>
              {<StyledTableHeader>{showActions && map ? t("match.actions") : ""}</StyledTableHeader>}
            </tr>
          </StyledTableHead>
          <StyledTableBody>
            {usedJobs.length === 0 ? (
              <StyledTableRow>
                <StyledTableCell colSpan={showActions ? 6 : 5}>
                  <StyledEmptyMapState>{t("match.pleaseRegisterJob")}</StyledEmptyMapState>
                </StyledTableCell>
              </StyledTableRow>
            ) : (
              sortedJobs.map((job) => {
                const summary = jobSummaries.find((s) => s.job === job) || {
                  job,
                  totalMatches: 0,
                  wins: 0,
                  defeats: 0,
                  winRate: 0,
                };
                return <JobSummaryRow key={job} summary={summary} map={map} onAddWin={onAddWin} onAddDefeat={onAddDefeat} onRevertLast={onRevertLast} />;
              })
            )}
          </StyledTableBody>
        </StyledTable>
      </StyledTableContainer>
    );
  },
  (prevProps, nextProps) => {
    // usedJobs、jobSummaries、mapの浅い比較
    return (
      prevProps.usedJobs.length === nextProps.usedJobs.length &&
      prevProps.jobSummaries.reduce((acc, s) => acc + (s.totalMatches || 0), 0) === nextProps.jobSummaries.reduce((acc, s) => acc + (s.totalMatches || 0), 0) &&
      prevProps.map === nextProps.map
    );
  },
);

JobSummaryTable.displayName = "JobSummaryTable";
