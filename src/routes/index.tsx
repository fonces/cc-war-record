import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

/**
 * ホーム画面ルート (`/`)
 * 現シーズンの戦績を表示
 */
export const Route = createFileRoute("/")({
  component: lazyRouteComponent(() => import("@/features/home").then((m) => ({ default: m.HomePage }))),
});
