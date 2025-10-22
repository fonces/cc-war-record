import styled, { keyframes } from "styled-components";
import { Button, JobIcon, Icon } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { getWinRateColor } from "@/utils/colors";
import type { Job, CrystalConflictMap } from "@/types";

// アニメーション
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledTableContainer = styled.div`
  overflow: hidden;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(38, 161, 223, 0.15);
  border-radius: 0 0 ${({ theme }) => theme.borderRadius.md} ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  animation: ${fadeIn} 0.6s ease-out;

  &:hover {
    box-shadow:
      ${({ theme }) => theme.shadows["2xl"]},
      0 0 0 1px rgba(38, 161, 223, 0.1);
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  table-layout: fixed;
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

type JobSummary = {
  job: Job;
  totalMatches: number;
  wins: number;
  defeats: number;
  winRate: number;
};

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
export const JobSummaryTable = ({ usedJobs, jobSummaries, onAddWin, onAddDefeat, onRevertLast, map }: JobSummaryTableProps) => {
  const { t } = useTranslation();
  const showActions = !!(onAddWin || onAddDefeat || onRevertLast);

  return (
    <StyledTableContainer>
      <StyledTable>
        <StyledTableHead>
          <tr>
            <StyledTableHeader>{t("match.job")}</StyledTableHeader>
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
            usedJobs.map((job) => {
              const summary = jobSummaries.find((s) => s.job === job) || {
                job,
                totalMatches: 0,
                wins: 0,
                defeats: 0,
                winRate: 0,
              };
              return (
                <StyledTableRow key={job}>
                  <StyledJobCell>
                    <div>
                      <JobIcon job={summary.job} size={32} />
                      {summary.job}
                    </div>
                  </StyledJobCell>
                  <StyledTableCell>{summary.totalMatches}</StyledTableCell>
                  <StyledTableCell>{summary.wins}</StyledTableCell>
                  <StyledTableCell>{summary.defeats}</StyledTableCell>
                  <StyledTableCell>
                    {0 < summary.totalMatches ? <StyledWinRateText winRate={summary.winRate}>{summary.winRate}%</StyledWinRateText> : <span>--%</span>}
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
            })
          )}
        </StyledTableBody>
      </StyledTable>
    </StyledTableContainer>
  );
};
