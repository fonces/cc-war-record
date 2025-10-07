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
 * グラフ画面コンポーネント
 * 現シーズンの戦績をチャート表示
 */
export const GraphsPage = () => {
  return (
    <StyledContainer>
      <StyledTitle>戦績グラフ</StyledTitle>
      <StyledDescription>
        現シーズンの戦績をグラフ形式で可視化します。
      </StyledDescription>
      {/* TODO: 実装 */}
      <div>
        <p>・日別勝率推移グラフ</p>
        <p>・時間帯別戦績分析</p>
        <p>・ジョブ別パフォーマンス比較</p>
        <p>・累積勝利数/敗北数推移</p>
      </div>
    </StyledContainer>
  )
}
