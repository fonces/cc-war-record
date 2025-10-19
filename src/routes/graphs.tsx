import { createFileRoute } from "@tanstack/react-router";
import { GraphsPage } from "@/features/graphs";

/**
 * グラフ画面ルート (`/graphs`)
 * 現シーズンの戦績をチャート表示
 */
export const Route = createFileRoute("/graphs")({
  component: GraphsPage,
  staleTime: 1000 * 60 * 5, // 5分間キャッシュを有効とする
  gcTime: 1000 * 60 * 10, // 10分間メモリに保持
});
