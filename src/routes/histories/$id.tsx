import { createFileRoute } from '@tanstack/react-router'
import { HistoryDetailPage } from '@/features/histories'

/**
 * シーズン履歴詳細画面ルート (`/histories/:id`)
 * 特定シーズンの詳細戦績を表示
 */
export const Route = createFileRoute('/histories/$id')({
  component: HistoryDetailPage,
})
