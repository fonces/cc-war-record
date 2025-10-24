import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

/**
 * 新規シーズン作成画面ルート (`/new`)
 * 新しいシーズンを作成するフォーム画面
 */
export const Route = createFileRoute("/new")({
  component: lazyRouteComponent(() => import("@/features/new").then((m) => ({ default: m.NewSeasonPage }))),
});
