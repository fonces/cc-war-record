import styled from 'styled-components'

const StyledPageTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  gap: ${({ theme }) => theme.spacing[4]};
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing[2]};
  }
`

const StyledPageTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
`

const StyledPageDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`

type PageTitleContainerProps = {
  children: React.ReactNode
}

type PageTitleProps = {
  children: React.ReactNode
}

type PageDescriptionProps = {
  children: React.ReactNode
}

const StyledPageContainer = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
  max-width: 1200px;
  margin: 0 auto;
`

type PageContainerProps = {
  children: React.ReactNode
}

/**
 * ページコンテナコンポーネント
 * ページ全体のコンテナとして使用
 */
export const PageContainer = ({ children }: PageContainerProps) => {
  return <StyledPageContainer>{children}</StyledPageContainer>
}

/**
 * ページタイトルコンテナコンポーネント
 * タイトルとアクションボタンを横並びで配置
 */
export const PageTitleContainer = ({ children }: PageTitleContainerProps) => {
  return <StyledPageTitleContainer>{children}</StyledPageTitleContainer>
}

/**
 * ページタイトルコンポーネント
 * 各ページのメインタイトル表示
 */
export const PageTitle = ({ children }: PageTitleProps) => {
  return <StyledPageTitle>{children}</StyledPageTitle>
}

/**
 * ページ説明コンポーネント
 * ページの説明文を表示
 */
export const PageDescription = ({ children }: PageDescriptionProps) => {
  return <StyledPageDescription>{children}</StyledPageDescription>
}