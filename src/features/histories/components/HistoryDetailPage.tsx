// import { useParams } from '@tanstack/react-router'
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

/**
 * シーズン履歴詳細画面コンポーネント
 * 特定シーズンの詳細戦績を表示
 */
export const HistoryDetailPage = () => {
  // const { id } = useParams({ from: '/histories/$id' })

  return (
    <StyledContainer>
      <StyledTitle>Do Something...</StyledTitle>
    </StyledContainer>
  )
}
