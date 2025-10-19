import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

/**
 * グラフ画面ルート (`/graphs`)
 * 現シーズンの戦績をチャート表示
 */
export const Route = createFileRoute("/graphs")({
  component: lazyRouteComponent(() => import("@/features/graphs").then((m) => ({ default: m.GraphsPage }))),
  staleTime: 1000 * 60 * 5, // 5分間キャッシュを有効とする
  gcTime: 1000 * 60 * 10, // 10分間メモリに保持
});
