import styled from 'styled-components'
import { useHistoryStore, useCharacterStore } from '@/stores'
import { HistoryTable } from './HistoryTable'

const StyledContainer = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
  max-width: 1200px;
  margin: 0 auto;
`

const StyledHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`

const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.text};
`

const StyledDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`

const StyledActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({ theme }) => theme.spacing[4]};
  }
`

const StyledStats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[2]};
  }
`

const StyledStatItem = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const StyledStatValue = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

// エラー表示
const StyledErrorMessage = styled.div`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  background-color: ${({ theme }) => theme.colors.error}20;
  border: 1px solid ${({ theme }) => theme.colors.error}40;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  font-size: 0.875rem;
`

/**
 * シーズン履歴一覧画面コンポーネント
 * シーズンの履歴一覧をテーブル形式で表示
 */
export const HistoriesPage = () => {
  const { 
    histories, 
    isLoading, 
    error, 
    getSortedHistories,
    deleteHistory,
    clearError 
  } = useHistoryStore()

  const { matchRecords } = useCharacterStore()

  // 日付順（新しい順）にソートされた履歴を取得
  const sortedHistories = getSortedHistories()

  /**
   * 履歴削除ハンドラー
   * 履歴と関連する全ての戦績記録を削除
   */
  const handleDelete = (historyUuid: string) => {
    // 関連する全ての戦績記録を削除
    const relatedMatchRecords = matchRecords.filter(m => m.seasonUuid === historyUuid)
    
    // 各戦績記録を削除
    const { deleteMatchRecord } = useCharacterStore.getState()
    relatedMatchRecords.forEach(record => {
      deleteMatchRecord(record.uuid)
    })

    // 履歴を削除
    deleteHistory(historyUuid)
  }

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>シーズン履歴一覧</StyledTitle>
        <StyledDescription>
          過去のシーズンの一覧を表示・管理します。各シーズンの詳細は詳細ボタンから確認できます。
        </StyledDescription>
      </StyledHeader>

      {/* エラー表示 */}
      {error && (
        <StyledErrorMessage>
          <div>エラー: {error}</div>
          <button onClick={clearError} style={{ marginTop: '8px', textDecoration: 'underline' }}>
            エラーを閉じる
          </button>
        </StyledErrorMessage>
      )}

      {/* 統計情報 */}
      <StyledActions>
        <StyledStats>
          <StyledStatItem>
            総シーズン数: <StyledStatValue>{histories.length}件</StyledStatValue>
          </StyledStatItem>
          {histories.length > 0 && (
            <StyledStatItem>
              最新作成: <StyledStatValue>
                {new Date(sortedHistories[0]?.createdAt).toLocaleDateString('ja-JP')}
              </StyledStatValue>
            </StyledStatItem>
          )}
        </StyledStats>
      </StyledActions>

      {/* 履歴テーブル */}
      <HistoryTable 
        histories={sortedHistories}
        isLoading={isLoading}
        onDelete={handleDelete}
      />
    </StyledContainer>
  )
}
