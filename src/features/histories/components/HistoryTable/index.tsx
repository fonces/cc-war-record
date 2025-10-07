import { Link } from '@tanstack/react-router'
import styled from 'styled-components'
import type { History } from '@/types'
import { Icon } from '@/components/ui'
import { formatDateTable } from '@/utils/uuid'

type HistoryTableProps = {
  /** 履歴一覧 */
  histories: History[]
  /** ローディング状態 */
  isLoading?: boolean
}

// テーブルコンテナ
const StyledTableContainer = styled.div`
  overflow-x: auto;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  background-color: ${({ theme }) => theme.colors.gray[50]};
`

// テーブル
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`

// テーブルヘッダー
const StyledTableHeader = styled.thead`
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`

const StyledHeaderCell = styled.th`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  text-align: left;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  white-space: nowrap;

  &:last-child {
    text-align: center;
    width: 80px;
  }
`

// テーブルボディ
const StyledTableBody = styled.tbody``

const StyledTableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[50]};
  }

  &:last-child {
    border-bottom: none;
  }
`

const StyledTableCell = styled.td`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray[900]};

  &:last-child {
    text-align: center;
  }
`

// シーズン名セル
const StyledSeasonNameCell = styled(StyledTableCell)`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`

// 作成日時セル
const StyledDateCell = styled(StyledTableCell)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: 'Courier New', monospace;
  white-space: nowrap;
`

// 詳細ボタン
const StyledDetailButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: white;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`

// 空状態表示
const StyledEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[6]};
  text-align: center;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
`

const StyledEmptyIcon = styled.div`
  width: 64px;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`

const StyledEmptyTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`

const StyledEmptyDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`

// ローディング状態
const StyledLoadingRow = styled(StyledTableRow)`
  &:hover {
    background-color: transparent;
  }
`

const StyledLoadingCell = styled(StyledTableCell)`
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-style: italic;
`

/**
 * 履歴テーブルコンポーネント
 * テーブル形式でシーズン履歴一覧を表示
 */
export const HistoryTable = ({ histories, isLoading = false }: HistoryTableProps) => {
  // ローディング中の表示
  if (isLoading) {
    return (
      <StyledTableContainer>
        <StyledTable>
          <StyledTableHeader>
            <tr>
              <StyledHeaderCell>シーズン名</StyledHeaderCell>
              <StyledHeaderCell>作成日時</StyledHeaderCell>
              <StyledHeaderCell>詳細</StyledHeaderCell>
            </tr>
          </StyledTableHeader>
          <StyledTableBody>
            <StyledLoadingRow>
              <StyledLoadingCell colSpan={3}>
                読み込み中...
              </StyledLoadingCell>
            </StyledLoadingRow>
          </StyledTableBody>
        </StyledTable>
      </StyledTableContainer>
    )
  }

  // 履歴が0件の場合
  if (histories.length === 0) {
    return (
      <StyledEmptyState>
        <StyledEmptyIcon>
          <Icon name="history" size={24} />
        </StyledEmptyIcon>
        <StyledEmptyTitle>履歴がありません</StyledEmptyTitle>
        <StyledEmptyDescription>
          シーズンの履歴がまだ作成されていません。<br />
          新しいシーズンを作成してください。
        </StyledEmptyDescription>
      </StyledEmptyState>
    )
  }

  // 履歴テーブル表示
  return (
    <StyledTableContainer>
      <StyledTable>
        <StyledTableHeader>
          <tr>
            <StyledHeaderCell>シーズン名</StyledHeaderCell>
            <StyledHeaderCell>作成日時</StyledHeaderCell>
            <StyledHeaderCell>詳細</StyledHeaderCell>
          </tr>
        </StyledTableHeader>
        <StyledTableBody>
          {histories.map((history) => (
            <StyledTableRow key={history.uuid}>
              <StyledSeasonNameCell>
                {history.seasonName}
              </StyledSeasonNameCell>
              <StyledDateCell>
                {formatDateTable(history.createdAt)}
              </StyledDateCell>
              <StyledTableCell>
                <StyledDetailButton 
                  to={`/histories/${history.uuid}`}
                  title={`${history.seasonName}の詳細を表示`}
                >
                  <Icon name="chart" size={16} />
                </StyledDetailButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </StyledTableBody>
      </StyledTable>
    </StyledTableContainer>
  )
}