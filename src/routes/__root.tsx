import { createRootRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { Suspense, useEffect } from "react";
import styled from "styled-components";
import { Header, NotFoundPage } from "@/components/layout";
import { sendPageView } from "@/lib/analytics";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: ${({ theme }) => theme.spacing[8]};
`;

const LoadingSpinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid ${({ theme }) => theme.colors.gray[200]};
  border-top-color: ${({ theme }) => theme.colors.primary[500]};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingText = styled.p`
  margin-top: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
`;

/**
 * ローディングフォールバックコンポーネント
 */
function LoadingFallback() {
  return (
    <LoadingContainer>
      <div>
        <LoadingSpinner />
        <LoadingText>Loading...</LoadingText>
      </div>
    </LoadingContainer>
  );
}

/**
 * ルートレイアウトコンポーネント
 * すべてのルートで共有されるレイアウトを定義
 */
export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  const router = useRouterState();

  // ページ遷移時にスクロールを一番上に戻す & GA4にページビュー送信
  useEffect(() => {
    window.scrollTo(0, 0);
    sendPageView(router.location.pathname);
  }, [router.location.pathname]);

  return (
    <Header>
      <Suspense fallback={<LoadingFallback />}>
        <Outlet />
      </Suspense>
    </Header>
  );
}

function NotFoundComponent() {
  return <NotFoundPage />;
}
