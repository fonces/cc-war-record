import { createFileRoute } from "@tanstack/react-router";
import { ObsWindowPage } from "@/features/obs";

/**
 * OBSウィンドウ表示用ルート (`/obs/window`)
 * ブラウザソースとして使用する専用ページ
 */
export const Route = createFileRoute("/obs/window")({
  component: ObsWindowPage,
});
