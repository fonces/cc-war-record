import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/features/home";

/**
 * ホーム画面ルート (`/`)
 * 現シーズンの戦績を表示
 */
export const Route = createFileRoute("/")({
  component: HomePage,
});
