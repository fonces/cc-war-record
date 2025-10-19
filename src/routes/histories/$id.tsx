import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

/**
 * シーズン履歴詳細画面ルート (`/histories/:id`)
 * 特定シーズンの詳細戦績を表示
 */
export const Route = createFileRoute("/histories/$id")({
  component: lazyRouteComponent(() => import("@/features/histories").then((m) => ({ default: m.HistoryDetailPage }))),
});
