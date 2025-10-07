import { createFileRoute } from '@tanstack/react-router'
import { HistoriesPage } from '@/features/histories'

/**
 * シーズン履歴一覧画面ルート (`/histories`)
 * シーズンの履歴一覧を表示/管理
 */
export const Route = createFileRoute('/histories/')({
  component: HistoriesPage,
})
