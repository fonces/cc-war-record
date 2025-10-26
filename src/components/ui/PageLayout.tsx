import { memo } from "react";
import styled from "styled-components";
import { fadeIn } from "@/styles/animation";

const StyledPage = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  width: 100%;
`;

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
`;

const StyledPageTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${fadeIn} 0.5s ease-out;
`;

const StyledPageDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const StyledPageTitleActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const StyledPageContainer = styled.div<{ gap: string }>`
  display: grid;
  gap: ${({ gap }) => gap};
  animation: ${fadeIn} 0.5s ease-out;
`;

type PageProps = {
  children: React.ReactNode;
};

type PageTitleContainerProps = {
  children: React.ReactNode;
};

type PageTitleProps = {
  children: React.ReactNode;
};

type PageDescriptionProps = {
  children: React.ReactNode;
};

type PageTitleActionsProps = {
  children: React.ReactNode;
};

type PageContainerProps = {
  children: React.ReactNode;
  gap?: string;
};

/**
 * ページコンポーネント
 */
export const Page = memo(({ children }: PageProps) => {
  return <StyledPage>{children}</StyledPage>;
});

Page.displayName = "Page";

/**
 * ページタイトルコンテナコンポーネント
 * タイトルとアクションボタンを横並びで配置
 */
export const PageTitleContainer = memo(({ children }: PageTitleContainerProps) => {
  return <StyledPageTitleContainer>{children}</StyledPageTitleContainer>;
});

PageTitleContainer.displayName = "PageTitleContainer";

/**
 * ページタイトルコンポーネント
 * 各ページのメインタイトル表示
 */
export const PageTitle = memo(({ children }: PageTitleProps) => {
  return <StyledPageTitle>{children}</StyledPageTitle>;
});

PageTitle.displayName = "PageTitle";

/**
 * ページ説明コンポーネント
 * ページの説明文を表示
 */
export const PageDescription = memo(({ children }: PageDescriptionProps) => {
  return <StyledPageDescription>{children}</StyledPageDescription>;
});

PageDescription.displayName = "PageDescription";

/**
 * ページタイトルアクションコンテナコンポーネント
 * タイトル右側のアクションボタンを配置
 */
export const PageTitleActions = memo(({ children }: PageTitleActionsProps) => {
  return <StyledPageTitleActions>{children}</StyledPageTitleActions>;
});

PageTitleActions.displayName = "PageTitleActions";

/**
 * ページコンテナコンポーネント
 * ページ全体のコンテナとして使用
 */
export const PageContainer = memo(({ children, gap = "1.5rem" }: PageContainerProps) => {
  return <StyledPageContainer gap={gap}>{children}</StyledPageContainer>;
});

PageContainer.displayName = "PageContainer";
