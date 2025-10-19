import { createRootRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header, NotFoundPage } from "@/components/layout";
import { sendPageView } from "@/lib/analytics";

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
      <Outlet />
    </Header>
  );
}

function NotFoundComponent() {
  return <NotFoundPage />;
}
