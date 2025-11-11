import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

/**
 * OBS表示用ルート (`/obs`)
 * ストリーミング配信用のオーバーレイ表示
 */
export const Route = createFileRoute("/obs")({
  component: lazyRouteComponent(() => import("@/features/obs").then((m) => ({ default: m.ObsPage }))),
});
