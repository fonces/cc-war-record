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
 * ホーム画面コンポーネント
 * 現シーズンの戦績を表示
 */
export const HomePage = () => {
  return (
    <StyledContainer>
      <StyledTitle>現シーズンの戦績</StyledTitle>
      <StyledDescription>
        現在のシーズンの勝敗記録や統計情報を表示します。
      </StyledDescription>
      {/* TODO: 実装 */}
      <div>
        <p>・現在のシーズン名</p>
        <p>・勝敗記録ボタン（勝ち/負け）</p>
        <p>・ジョブ選択</p>
        <p>・現シーズンの統計サマリー（勝率、総試合数等）</p>
        <p>・最近の試合履歴</p>
      </div>
    </StyledContainer>
  )
}
