import { createRootRoute, Outlet } from "@tanstack/react-router";
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
  return (
    <Header>
      <Outlet />
    </Header>
  );
}

function NotFoundComponent() {
  return <NotFoundPage />;
}
