import { useParams } from '@tanstack/react-router'
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

const StyledSeasonId = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`

/**
 * シーズン履歴詳細画面コンポーネント
 * 特定シーズンの詳細戦績を表示
 */
export const HistoryDetailPage = () => {
  const { id } = useParams({ from: '/histories/$id' })

  return (
    <StyledContainer>
      <StyledTitle>シーズン履歴詳細</StyledTitle>
      <StyledSeasonId>シーズンID: {id}</StyledSeasonId>
      <StyledDescription>
        選択したシーズンの詳細な戦績情報を表示します。
      </StyledDescription>
      {/* TODO: 実装 */}
      <div>
        <p>・シーズン名・期間</p>
        <p>・詳細統計（ジョブ別勝率等）</p>
        <p>・試合履歴一覧（日時、ジョブ、結果）</p>
        <p>・そのシーズンのグラフ表示</p>
      </div>
    </StyledContainer>
  )
}
