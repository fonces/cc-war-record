import { useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import styled from 'styled-components'
import type { History } from '@/types'
import { Button, Icon, Dialog } from '@/components/ui'
import { formatDateTable } from '@/utils/uuid'

type HistoryTableProps = {
  /** 履歴一覧 */
  histories: History[]
  /** ローディング状態 */
  isLoading?: boolean
  /** 削除ハンドラー */
  onDelete: (historyUuid: string) => void
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
    width: 120px;
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
const StyledDetailButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
  }
`

// 削除ボタン
const StyledDeleteButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.error};
  }
`

// ボタングループ
const StyledButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  justify-content: center;
`

// モーダルコンテンツ
const StyledDialogContent = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
`

const StyledDialogDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  line-height: 1.6;
`

const StyledDialogActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  justify-content: flex-end;
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
export const HistoryTable = ({ histories, isLoading = false, onDelete }: HistoryTableProps) => {
  const navigate = useNavigate()
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [historyToDelete, setHistoryToDelete] = useState<{ uuid: string; seasonName: string } | null>(null)

  // 履歴詳細へ遷移
  const handleNavigateToDetail = (historyUuid: string) => {
    navigate({ to: `/histories/${historyUuid}` })
  }

  // 削除ダイアログを開く
  const handleOpenDeleteDialog = (historyUuid: string, seasonName: string) => {
    setHistoryToDelete({ uuid: historyUuid, seasonName })
    setDeleteDialogOpen(true)
  }

  // 削除をキャンセル
  const handleCancelDelete = () => {
    setDeleteDialogOpen(false)
    setHistoryToDelete(null)
  }

  // 削除を確定
  const handleConfirmDelete = () => {
    if (historyToDelete) {
      onDelete(historyToDelete.uuid)
      setDeleteDialogOpen(false)
      setHistoryToDelete(null)
    }
  }

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
            <StyledHeaderCell>操作</StyledHeaderCell>
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
                <StyledButtonGroup>
                  <StyledDetailButton 
                    variant="outline"
                    icon={<Icon name="detail" size={16} />}
                    onClick={() => handleNavigateToDetail(history.uuid)}
                    title={`${history.seasonName}の詳細を表示`}
                  />
                  <StyledDeleteButton 
                    variant="outline"
                    icon={<Icon name="delete" size={16} />}
                    onClick={() => handleOpenDeleteDialog(history.uuid, history.seasonName)}
                    title={`${history.seasonName}を削除`}
                  />
                </StyledButtonGroup>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </StyledTableBody>
      </StyledTable>

      {/* 削除確認ダイアログ */}
      <Dialog 
        isOpen={deleteDialogOpen} 
        onClose={handleCancelDelete}
        title="シーズンの削除"
      >
        <StyledDialogContent>
          <StyledDialogDescription>
            「{historyToDelete?.seasonName}」を削除してもよろしいですか？
            <br />
            この操作は取り消すことができません。
          </StyledDialogDescription>
          <StyledDialogActions>
            <Button variant="outline" onClick={handleCancelDelete}>
              キャンセル
            </Button>
            <Button variant="primary" onClick={handleConfirmDelete}>
              削除する
            </Button>
          </StyledDialogActions>
        </StyledDialogContent>
      </Dialog>
    </StyledTableContainer>
  )
}