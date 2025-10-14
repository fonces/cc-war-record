import styled from "styled-components";
import { Button, JobIcon, Icon } from "@/components/ui";
import type { Job, CrystalConflictMap } from "@/types";
import { getWinRateColor } from "@/utils/colors";

const StyledTableContainer = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  table-layout: fixed;
`;

const StyledTableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
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
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;
  box-sizing: border-box;
  ${tableCellStyles}
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
  ${tableCellStyles}
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
  color: ${({ winRate, theme }) => getWinRateColor(winRate, theme)};
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

type JobSummary = {
  job: Job;
  totalMatches: number;
  wins: number;
  losses: number;
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
  onAddLoss?: (job: Job, map: CrystalConflictMap) => void;
  /** 直近の記録取り消しハンドラー（指定した場合に操作列を表示） */
  onRevertLast?: (job: Job, map: CrystalConflictMap) => void;
  /** 操作ボタン用のマップ（マップごとのテーブルの場合に指定） */
  map?: CrystalConflictMap;
};

/**
 * ジョブサマリーテーブルコンポーネント
 */
export const JobSummaryTable = ({ usedJobs, jobSummaries, onAddWin, onAddLoss, onRevertLast, map }: JobSummaryTableProps) => {
  const showActions = !!(onAddWin || onAddLoss || onRevertLast);

  return (
    <StyledTableContainer>
      <StyledTable>
        <StyledTableHead>
          <tr>
            <StyledTableHeader>ジョブ</StyledTableHeader>
            <StyledTableHeader>試合数</StyledTableHeader>
            <StyledTableHeader>勝利</StyledTableHeader>
            <StyledTableHeader>敗北</StyledTableHeader>
            <StyledTableHeader>勝率</StyledTableHeader>
            {<StyledTableHeader>{showActions && map ? "操作" : ""}</StyledTableHeader>}
          </tr>
        </StyledTableHead>
        <StyledTableBody>
          {usedJobs.length === 0 ? (
            <StyledTableRow>
              <StyledTableCell colSpan={showActions ? 6 : 5}>
                <StyledEmptyMapState>ジョブを登録してください</StyledEmptyMapState>
              </StyledTableCell>
            </StyledTableRow>
          ) : (
            usedJobs.map((job) => {
              const summary = jobSummaries.find((s) => s.job === job) || {
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
                      <JobIcon job={summary.job} size={32} />
                      {summary.job}
                    </div>
                  </StyledJobCell>
                  <StyledTableCell>{summary.totalMatches}</StyledTableCell>
                  <StyledTableCell>{summary.wins}</StyledTableCell>
                  <StyledTableCell>{summary.losses}</StyledTableCell>
                  <StyledTableCell>
                    {0 < summary.totalMatches ? <StyledWinRateText winRate={summary.winRate}>{summary.winRate}%</StyledWinRateText> : <span>--%</span>}
                  </StyledTableCell>
                  <StyledTableCell>
                    {map ? (
                      <StyledActionButtons>
                        {onAddWin && (
                          <StyledActionButton variant="win" onClick={() => onAddWin(summary.job, map)}>
                            W
                          </StyledActionButton>
                        )}
                        {onAddLoss && (
                          <StyledActionButton variant="secondary" onClick={() => onAddLoss(summary.job, map)}>
                            L
                          </StyledActionButton>
                        )}
                        {summary.totalMatches > 0 && onRevertLast ? (
                          <StyledActionButton variant="outline" icon={<Icon name="revert" size={16} />} onClick={() => onRevertLast(summary.job, map)} />
                        ) : (
                          (onAddWin || onAddLoss) && <div style={{ width: "32px" }} />
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
