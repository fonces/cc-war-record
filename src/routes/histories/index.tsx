import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

/**
 * シーズン履歴一覧画面ルート (`/histories`)
 * シーズンの履歴一覧を表示/管理
 */
export const Route = createFileRoute("/histories/")({
  component: lazyRouteComponent(() => import("@/features/histories").then((m) => ({ default: m.HistoriesPage }))),
});
