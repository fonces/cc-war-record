import { createRootRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header, NotFoundPage } from "@/components/layout";

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

  // ページ遷移時にスクロールを一番上に戻す
  useEffect(() => {
    window.scrollTo(0, 0);
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
