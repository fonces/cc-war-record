import styled from 'styled-components'

const StyledContainer = styled.div`
  padding: 2rem;
`

const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`

const StyledDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
`

/**
 * シーズン履歴一覧画面コンポーネント
 * シーズンの履歴一覧を表示/管理
 */
export const HistoriesPage = () => {
  return (
    <StyledContainer>
      <StyledTitle>シーズン履歴一覧</StyledTitle>
      <StyledDescription>
        過去のシーズンの一覧を表示・管理します。
      </StyledDescription>
      {/* TODO: 実装 */}
      <div>
        <p>・過去シーズン一覧（カード形式）</p>
        <p>・各シーズンの基本統計（勝率、試合数）</p>
        <p>・シーズン作成/削除機能</p>
        <p>・シーズン詳細へのリンク</p>
      </div>
    </StyledContainer>
  )
}
