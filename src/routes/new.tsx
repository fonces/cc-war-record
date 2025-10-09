import { createFileRoute } from "@tanstack/react-router";
import { NewSeasonPage } from "@/features/histories";

/**
 * 新規シーズン作成画面ルート (`/new`)
 * 新しいシーズンを作成するフォーム画面
 */
export const Route = createFileRoute("/new")({
  component: NewSeasonPage,
});
