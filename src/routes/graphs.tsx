import { createFileRoute } from '@tanstack/react-router'
import { GraphsPage } from '@/features/graphs'

/**
 * グラフ画面ルート (`/graphs`)
 * 現シーズンの戦績をチャート表示
 */
export const Route = createFileRoute('/graphs')({
  component: GraphsPage,
})
