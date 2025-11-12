import { memo } from "react";
import styled from "styled-components";
import { fadeIn } from "@/styles/animation";
import { media } from "@/styles/breakpoints";

const StyledPage = styled.div<{ $fullWidth?: boolean }>`
  padding: ${({ theme }) => theme.spacing[6]};
  max-width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "1200px")};
  min-width: ${({ $fullWidth }) => ($fullWidth ? "unset" : "800px")};
  margin: 0 auto;
  width: 100%;

  ${media.mobile} {
    padding: ${({ theme }) => theme.spacing[4]};
    min-width: unset;
    max-width: 100%;
  }
`;

const StyledPageTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  gap: ${({ theme }) => theme.spacing[4]};

  ${media.mobile} {
    gap: ${({ theme }) => theme.spacing[2]};
  }
`;

const StyledPageTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  animation: ${fadeIn} 0.5s ease-out;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const StyledPageTitleText = styled.span`
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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

  ${media.mobile} {
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
  /** 最大幅制限を解除してフル幅表示 */
  fullWidth?: boolean;
};

type PageTitleContainerProps = {
  children: React.ReactNode;
};

type PageTitleProps = {
  children: React.ReactNode;
  /** タイトル右側に表示する要素（SP版用のボタンなど） */
  action?: React.ReactNode;
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
export const Page = memo(({ children, fullWidth = false }: PageProps) => {
  return <StyledPage $fullWidth={fullWidth}>{children}</StyledPage>;
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
export const PageTitle = memo(({ children, action }: PageTitleProps) => {
  return (
    <StyledPageTitle>
      <StyledPageTitleText>{children}</StyledPageTitleText>
      {action}
    </StyledPageTitle>
  );
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
